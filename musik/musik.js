



// ═══════════════════════════════════════════════
//  YsPlayer — yuss xy
//  Fitur: rekomendasi personal, list vertikal, titik tiga
//  API: kyzznekoo.zone.id (downloader)
// ═══════════════════════════════════════════════

// API Endpoints
const API_SEARCH = 'https://kyzznekoo.zone.id/api/search/spotify?q=';
const API_PLAY   = 'https://kyzznekoo.zone.id/api/downloader/spotify?url=';

// Rate limiting cooldown (ms)
let lastSearchTime = 0;
let lastRecLoadTime = 0;
const SEARCH_COOLDOWN = 3000;
const REC_COOLDOWN = 90000;

const aud = document.getElementById('aud');
aud.volume = 0.8;

// STATE
let queue = [], curIdx = -1;
let shuffle = false, repeat = 'none';
let prevVol = 0.8, muted = false;
let ctxTrack = null, atpTrack = null;
let sleepTimer = null, sleepEnd = 0;
let mediaSession = 'mediaSession' in navigator;
let recLoading = false;

// LOCALSTORAGE
const LS = {
  get: (k, def) => {
    try {
      const v = localStorage.getItem('ysplayer_' + k);
      return v ? JSON.parse(v) : def;
    } catch(e) { return def; }
  },
  set: (k, v) => {
    try { localStorage.setItem('ysplayer_' + k, JSON.stringify(v)); } catch(e) {}
  },
};

let favs = LS.get('favs', []);
let playlists = LS.get('playlists', []);
let history = LS.get('history', []);
let searchHistory = LS.get('searchHistory', []);
let savedQueue = LS.get('queue', []);
let savedIdx = LS.get('curIdx', -1);
let savedVol = LS.get('vol', 0.8);

function addSearchQuery(query) {
  if (!query.trim()) return;
  searchHistory = searchHistory.filter(q => q !== query);
  searchHistory.unshift(query);
  if (searchHistory.length > 20) searchHistory.pop();
  LS.set('searchHistory', searchHistory);
}

function formatDuration(ms) {
  if (!ms) return '';
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function getArtistName(artists) {
  if (!artists || !artists.length) return 'Unknown';
  return artists.map(a => a.name).join(', ');
}

function getThumbnail(album) {
  if (!album || !album.images || !album.images.length) return null;
  const img = album.images.find(i => i.width === 300) || album.images[0];
  return img.url;
}

function convertToTrack(item) {
  return {
    title: item.name || 'Unknown Title',
    artist: getArtistName(item.artists),
    thumbnail: getThumbnail(item.album),
    duration: formatDuration(item.duration_ms),
    url: item.url || item.uri,
    source: 'spotify'
  };
}

window.addEventListener('load', () => {
  aud.volume = savedVol;
  document.getElementById('vol-fill').style.width = (savedVol * 100) + '%';
  prevVol = savedVol;

  if (savedQueue.length) {
    queue = savedQueue.map(t => ({ ...t, audioUrl: null }));
    updateQueueUI();
    if (savedIdx >= 0 && savedIdx < queue.length) {
      curIdx = savedIdx;
      updateNowPlaying(queue[curIdx]);
    }
  }

  loadRecs();

  if ('Notification' in window && Notification.permission === 'default') {
    document.getElementById('notif-bar').style.display = 'flex';
  }

  updateFavUI();
  updatePlUI();
  updateHistUI();
});

// ========== REKOMENDASI ==========
const STATIC_QUERIES = [
  'Hindia Secukupnya', 'Hindia Evaluasi', 'Iwan Fals Bento', 'Iwan Fals Aku Sayang Kamu',
  'Nadin Amizah Rumpang', 'Nadin Amizah Taruh', 'Kunto Aji Pilu Membiru', 'Kunto Aji Terlalu Lama Sendiri',
  'Pamungkas To The Bone', 'Pamungkas One Only', 'Tulus Hati-Hati di Jalan', 'Tulus Sepatu',
  'Raisa Jatuh Hati', 'Raisa Teduh', 'Isyana Sarasvati Tetap Dalam Jiwa', 'Isyana Mengisahkan Kisah',
  'Coldplay Fix You', 'Coldplay Yellow', 'Coldplay The Scientist',
  'The Weeknd Blinding Lights', 'The Weeknd Save Your Tears',
  'Billie Eilish the 1', 'Billie Eilish Skinny',
  'Adele Hello', 'Adele Someone Like You',
  'Taylor Swift All Too Well', 'Taylor Swift The 1',
  'Ed Sheeran Perfect', 'Ed Sheeran Photograph',
  'Mocca You', 'Mocca Secret Admirer',
  'Payung Teduh Akad', 'Payung Teduh Berdua Saja',
  'Yura Yunita Intuisi', 'Yura Yunita Cinta dan Rahasia',
  'Sal Priadi Untuk Apa', 'Sal Priadi Bulan Bermahkota',
  'Dua Lipa Levitating', 'Dua Lipa Don\'t Start Now',
  'BTS Spring Day', 'BTS Dynamite',
  'IU Through the Night', 'IU Palette',
  'Cigarettes After Sex Apocalypse', 'Cigarettes After Sex Tejano Blue',
  'Sufjan Stevens Mystery of Love', 'Sufjan Stevens Death With Dignity',
];

async function loadRecs() {
  const now = Date.now();
  if (now - lastRecLoadTime < REC_COOLDOWN && lastRecLoadTime !== 0) {
    const remaining = Math.ceil((REC_COOLDOWN - (now - lastRecLoadTime)) / 1000);
    toast(`Tunggu ${remaining} detik lagi untuk mengacak ulang rekomendasi`, 'err');
    return;
  }
  if (recLoading) {
    toast('Rekomendasi sedang dimuat, tunggu sebentar', 'err');
    return;
  }
  
  recLoading = true;
  const el = document.getElementById('rec-list');
  el.innerHTML = `<div class="spin-box"><div class="spinner"></div><p>Memuat rekomendasi personal...</p></div>`;

  let queries = [];

  if (searchHistory.length) {
    queries.push(...searchHistory.slice(0, 5));
  }

  const favArtists = [...new Set(favs.map(f => f.artist).filter(a => a && a !== 'Unknown'))];
  if (favArtists.length) {
    queries.push(...favArtists.slice(0, 5));
  }

  const topPlayed = [...history].slice(0, 5);
  for (let t of topPlayed) {
    if (t.artist && t.artist !== 'Unknown') queries.push(t.artist);
    if (t.title) queries.push(t.title);
  }

  const shuffledStatic = [...STATIC_QUERIES].sort(() => Math.random() - 0.5);
  queries.push(...shuffledStatic.slice(0, 5));

  queries = [...new Set(queries)].filter(q => q && q.trim());
  const picks = queries.slice(0, 15);

  const allTracks = [];
  await Promise.allSettled(picks.map(async q => {
    try {
      const r = await fetch(API_SEARCH + encodeURIComponent(q));
      const j = await r.json();
      if (j.status && j.result?.length) {
        j.result.slice(0, 2).forEach(item => {
          const track = convertToTrack(item);
          if (!allTracks.find(x => x.title === track.title && x.artist === track.artist)) {
            allTracks.push(track);
          }
        });
      }
    } catch(e) {
      console.warn(`Gagal fetch rekomendasi untuk: ${q}`, e);
    }
  }));

  if (!allTracks.length) {
    el.innerHTML = `<div class="state-box"><i class="ri-wifi-off-line"></i><p>Gagal memuat rekomendasi</p><small>Periksa koneksi</small></div>`;
    recLoading = false;
    return;
  }

  allTracks.sort(() => Math.random() - 0.5);
  renderVerticalList(el, allTracks.slice(0, 40), 'rec');
  lastRecLoadTime = Date.now();
  recLoading = false;
  toast('Rekomendasi diperbarui!', 'ok');
}

function renderVerticalList(container, tracks, type = 'rec') {
  const wrapper = document.createElement('div');
  wrapper.className = 'vertical-list';

  tracks.forEach(t => {
    const item = document.createElement('div');
    item.className = 'v-item' + (queue[curIdx] && queue[curIdx].url === t.url ? ' playing' : '');

    let thumbHtml = '';
    if (t.thumbnail) {
      thumbHtml = `<img class="v-thumb" src="${t.thumbnail}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`;
      thumbHtml += `<div class="v-thumb-ph" style="display:none"><i class="ri-music-line"></i></div>`;
    } else {
      thumbHtml = `<div class="v-thumb-ph"><i class="ri-music-line"></i></div>`;
    }

    item.innerHTML = `
      ${thumbHtml}
      <div class="v-info">
        <div class="v-title">${esc(t.title)}</div>
        <div class="v-artist">${esc(t.artist)}</div>
        <div class="v-dur">${t.duration || ''}</div>
      </div>
      <button class="v-menu-btn" onclick="event.stopPropagation();openCtxMenu(${JSON.stringify(t).replace(/"/g, '&quot;')})">
        <i class="ri-more-2-fill"></i>
      </button>
    `;
    item.onclick = () => playFromSearch(t, null);
    wrapper.appendChild(item);
  });

  container.innerHTML = '';
  container.appendChild(wrapper);
}

// ========== PENCARIAN ==========
document.getElementById('srch').addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });

function qs(q) {
  document.getElementById('srch').value = q;
  doSearch();
}

async function doSearch() {
  const now = Date.now();
  if (now - lastSearchTime < SEARCH_COOLDOWN) {
    const remaining = Math.ceil((SEARCH_COOLDOWN - (now - lastSearchTime)) / 1000);
    toast(`Tunggu ${remaining} detik sebelum mencari lagi`, 'err');
    return;
  }
  
  const q = document.getElementById('srch').value.trim();
  if (!q) return;
  addSearchQuery(q);
  lastSearchTime = Date.now();
  
  showPage('home');
  document.getElementById('chips-wrap').style.display = 'none';
  document.getElementById('rec-section').style.display = 'none';
  document.getElementById('results-sec').style.display = 'block';
  document.getElementById('results-lbl').textContent = `Mencari "${q}"…`;
  document.getElementById('results-box').innerHTML = `<div class="spin-box"><div class="spinner"></div><p>Mencari...</p></div>`;

  try {
    const r = await fetch(API_SEARCH + encodeURIComponent(q));
    const j = await r.json();
    if (!j.status || !j.result?.length) {
      document.getElementById('results-box').innerHTML = `<div class="state-box"><i class="ri-search-line"></i><p>Tidak ada hasil</p><small>Coba kata kunci lain</small></div>`;
      document.getElementById('results-lbl').textContent = `"${q}" — 0 lagu`;
      return;
    }
    const tracks = j.result.map(item => convertToTrack(item));
    document.getElementById('results-lbl').textContent = `"${q}" — ${tracks.length} lagu`;
    renderVerticalList(document.getElementById('results-box'), tracks, 'search');
  } catch(e) {
    console.error('Search error:', e);
    document.getElementById('results-box').innerHTML = `<div class="state-box"><i class="ri-error-warning-line" style="opacity:1;color:#f59e0b"></i><p>Gagal terhubung</p><small>Periksa koneksi</small></div>`;
    toast('Gagal terhubung ke server', 'err');
  }
}

function clearSearch() {
  document.getElementById('srch').value = '';
  document.getElementById('results-sec').style.display = 'none';
  document.getElementById('chips-wrap').style.display = '';
  document.getElementById('rec-section').style.display = '';
}

// ========== PLAY dengan API DOWNLOADER ==========
async function playFromSearch(track, cardEl) {
  let qIdx = queue.findIndex(x => x.url === track.url);
  if (qIdx === -1) {
    queue.push({ ...track });
    qIdx = queue.length - 1;
    saveQueue();
    updateQueueUI();
  }
  await startPlay(qIdx, cardEl);
}

async function startPlay(idx, cardEl) {
  if (idx < 0 || idx >= queue.length) return;
  curIdx = idx;
  const t = queue[idx];
  updateNowPlaying(t);
  highlightQueue(idx);
  saveQueue();
  addHistory(t);

  if (t.audioUrl) {
    playAudio(t.audioUrl);
    return;
  }

  if (cardEl) {
    const ld = document.createElement('div');
    ld.className = 'card-loading';
    ld.innerHTML = '<i class="ri-loader-4-line"></i>';
    ld.id = `cl-${idx}`;
    cardEl.appendChild(ld);
  }
  toast('Memuat audio…');

  try {
    const url = encodeURIComponent(t.url);
    const r = await fetch(API_PLAY + url);
    const j = await r.json();
    
    console.log('Downloader API response:', j);
    
    if (!j.status || !j.result || !j.result.download || !j.result.download.url) {
      throw new Error('no audio url from API');
    }
    
    const audioDownloadUrl = j.result.download.url;
    queue[idx].audioUrl = audioDownloadUrl;
    
    if (j.result.title) queue[idx].title = j.result.title;
    if (j.result.artist) queue[idx].artist = j.result.artist;
    if (j.result.image) queue[idx].thumbnail = j.result.image;
    saveQueue();
    
    if (curIdx === idx) {
      updateNowPlaying(queue[idx]);
      playAudio(queue[idx].audioUrl);
      toast('▶ ' + queue[idx].title, 'ok');
    }
  } catch(e) {
    console.error('Play error:', e);
    toast('Gagal memuat audio: ' + (e.message || 'cek koneksi'), 'err');
  } finally {
    document.getElementById(`cl-${idx}`)?.remove();
  }
}

function playAudio(url) {
  aud.src = url;
  aud.play().catch(() => toast('Gagal memutar', 'err'));
  updateMediaSession();
}

// ========== AUDIO EVENTS ==========
aud.addEventListener('play', () => { setPlayUI(true); document.getElementById('po-art')?.classList.add('playing'); });
aud.addEventListener('pause', () => { setPlayUI(false); document.getElementById('po-art')?.classList.remove('playing'); });
aud.addEventListener('timeupdate', () => {
  const pct = aud.duration ? (aud.currentTime / aud.duration) * 100 : 0;
  document.getElementById('po-fill').style.width = pct + '%';
  document.getElementById('mini-prog').style.width = pct + '%';
  document.getElementById('po-cur').textContent = fmt(aud.currentTime);
  document.getElementById('po-dur').textContent = fmt(aud.duration || 0);
  if (mediaSession && 'setPositionState' in navigator.mediaSession && aud.duration) {
    try { navigator.mediaSession.setPositionState({ duration: aud.duration, position: aud.currentTime, playbackRate: 1 }); } catch(e) {}
  }
});
aud.addEventListener('ended', () => {
  if (repeat === 'one') { aud.play(); return; }
  if (repeat === 'all' && curIdx === queue.length - 1) { startPlay(0); return; }
  playNext();
});
aud.addEventListener('volumechange', () => {
  LS.set('vol', aud.volume);
  document.getElementById('vol-fill').style.width = (aud.volume * 100) + '%';
});

function setPlayUI(playing) { const ic = playing ? 'ri-pause-fill' : 'ri-play-fill'; document.getElementById('mini-pp-icon').className = ic; document.getElementById('po-pp-icon').className = ic; }
function togglePlay() { if (!aud.src) return; aud.paused ? aud.play() : aud.pause(); }
function playNext() { if (!queue.length) return; const n = shuffle ? Math.floor(Math.random() * queue.length) : (curIdx + 1) % queue.length; startPlay(n); }
function playPrev() { if (!queue.length) return; if (aud.currentTime > 3) { aud.currentTime = 0; return; } startPlay((curIdx - 1 + queue.length) % queue.length); }
function toggleShuffle() { shuffle = !shuffle; document.getElementById('po-shuf').classList.toggle('active', shuffle); toast(shuffle ? 'Acak aktif' : 'Acak nonaktif'); }
function toggleRepeat() {
  const m = ['none', 'all', 'one'];
  repeat = m[(m.indexOf(repeat) + 1) % 3];
  const btn = document.getElementById('po-rep');
  btn.classList.toggle('active', repeat !== 'none');
  btn.querySelector('i').className = repeat === 'one' ? 'ri-repeat-one-line' : 'ri-repeat-line';
  toast({ none: 'Ulangi nonaktif', all: 'Ulangi semua', one: 'Ulangi ini' }[repeat]);
}
function seekTo(e) { if (!aud.duration) return; const bar = document.getElementById('po-bar'), r = bar.getBoundingClientRect(); aud.currentTime = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * aud.duration; }
function setVol(e) { const bar = document.getElementById('vol-bar'), r = bar.getBoundingClientRect(); const v = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)); aud.volume = v; muted = false; prevVol = v; }
function toggleMute() { if (muted) { aud.volume = prevVol; muted = false; } else { prevVol = aud.volume; aud.volume = 0; muted = true; } }

// ========== NOW PLAYING UI ==========
function updateNowPlaying(t) {
  document.getElementById('mini-title').textContent = t.title || '—';
  document.getElementById('mini-artist').textContent = t.artist || '—';
  document.getElementById('po-name').textContent = t.title || '—';
  document.getElementById('po-artist').textContent = t.artist || '—';
  document.title = `${t.title} — YsPlayer`;

  const mt = document.getElementById('mini-thumb');
  if (t.thumbnail) {
    const img = document.createElement('img');
    img.className = 'mini-thumb';
    img.id = 'mini-thumb';
    img.src = t.thumbnail;
    img.alt = '';
    mt.replaceWith(img);
  } else {
    mt.innerHTML = '<i class="ri-music-line" style="font-size:18px"></i>';
  }
  document.getElementById('mini').classList.remove('hidden');

  const pa = document.getElementById('po-art');
  if (t.thumbnail) {
    const img = document.createElement('img');
    img.className = 'po-art';
    img.id = 'po-art';
    img.src = t.thumbnail;
    img.alt = '';
    if (!aud.paused) img.classList.add('playing');
    pa.replaceWith(img);
  } else {
    pa.innerHTML = '<i class="ri-music-2-line" style="font-size:64px"></i>';
    pa.className = 'po-art-ph';
    pa.id = 'po-art';
  }

  const isFav = favs.some(f => f.url === t.url);
  const fb = document.getElementById('po-fav');
  fb.classList.toggle('active', isFav);
  fb.innerHTML = isFav ? '<i class="ri-heart-fill"></i>' : '<i class="ri-heart-line"></i>';
}

function openPlayer() { document.getElementById('player').classList.add('open'); }
function closePlayer() { document.getElementById('player').classList.remove('open'); }

// ========== MEDIA SESSION ==========
function updateMediaSession() {
  if (!mediaSession) return;
  const t = queue[curIdx];
  if (!t) return;
  navigator.mediaSession.metadata = new MediaMetadata({
    title: t.title || '',
    artist: t.artist || '',
    artwork: t.thumbnail ? [{ src: t.thumbnail, sizes: '512x512', type: 'image/jpeg' }] : []
  });
  navigator.mediaSession.setActionHandler('play', () => aud.play());
  navigator.mediaSession.setActionHandler('pause', () => aud.pause());
  navigator.mediaSession.setActionHandler('nexttrack', () => playNext());
  navigator.mediaSession.setActionHandler('previoustrack', () => playPrev());
  navigator.mediaSession.setActionHandler('seekto', d => { if (d.seekTime) aud.currentTime = d.seekTime; });
}

// ========== QUEUE ==========
function saveQueue() { LS.set('queue', queue.map(t => ({ ...t, audioUrl: null }))); LS.set('curIdx', curIdx); }
function updateQueueUI() {
  const n = queue.length;
  const nb = document.getElementById('nb-queue');
  nb.textContent = n;
  nb.style.display = n ? 'flex' : 'none';
  document.getElementById('q-ct').textContent = n ? `(${n} lagu)` : '';
  document.getElementById('q-clear').style.display = n ? '' : 'none';
  renderQueueList();
}
function renderQueueList() {
  const list = document.getElementById('q-list'), empty = document.getElementById('q-empty');
  list.innerHTML = '';
  if (!queue.length) { empty.style.display = ''; return; }
  empty.style.display = 'none';
  queue.forEach((t, i) => {
    const li = document.createElement('li');
    li.className = 'q-item' + (i === curIdx ? ' active' : '');
    li.id = `qi-${i}`;
    li.innerHTML = `
      <span class="q-num">${i === curIdx ? `<div class="eq"><span></span><span></span><span></span></div>` : i + 1}</span>
      ${t.thumbnail ? `<img class="q-thumb" src="${t.thumbnail}" alt=""/>` : `<div class="q-thumb-ph"><i class="ri-music-line" style="font-size:16px"></i></div>`}
      <div class="q-meta"><div class="q-title">${esc(t.title)}</div><div class="q-artist">${esc(t.artist)}</div></div>
      <span class="q-dur">${t.duration || ''}</span>
    `;
    li.onclick = () => startPlay(i);
    list.appendChild(li);
  });
}
function highlightQueue(idx) {
  document.querySelectorAll('.q-item').forEach(e => e.classList.remove('active'));
  const el = document.getElementById(`qi-${idx}`);
  if (el) { el.classList.add('active'); el.scrollIntoView({ block: 'nearest' }); }
  renderQueueList();
}
function clearQueue() { if (!confirm('Hapus semua antrian?')) return; queue = []; curIdx = -1; saveQueue(); updateQueueUI(); toast('Antrian dihapus'); }

// ========== FAVORIT ==========
function toggleFav(track) {
  const i = favs.findIndex(f => f.url === track.url);
  if (i > -1) { favs.splice(i, 1); toast('Dihapus dari favorit'); }
  else { favs.unshift({ ...track }); toast('Ditambahkan ke favorit', 'ok'); }
  LS.set('favs', favs);
  updateFavUI();
  if (queue[curIdx]?.url === track.url) {
    const fb = document.getElementById('po-fav');
    const isNowFav = favs.some(f => f.url === track.url);
    fb.classList.toggle('active', isNowFav);
    fb.innerHTML = isNowFav ? '<i class="ri-heart-fill"></i>' : '<i class="ri-heart-line"></i>';
  }
}
function toggleFavCurrent() { if (queue[curIdx]) toggleFav(queue[curIdx]); }
function updateFavUI() {
  const n = favs.length;
  const nb = document.getElementById('nb-fav');
  nb.textContent = n;
  nb.style.display = n ? 'flex' : 'none';
  document.getElementById('fav-ct').textContent = n ? `(${n} lagu)` : '';
  renderFavList();
}
function renderFavList() {
  const el = document.getElementById('fav-list'), em = document.getElementById('fav-empty');
  el.innerHTML = '';
  if (!favs.length) { em.style.display = ''; return; }
  em.style.display = 'none';
  favs.forEach((t, i) => {
    const d = document.createElement('div');
    d.className = 'fav-item';
    d.innerHTML = `
      ${t.thumbnail ? `<img class="fav-thumb" src="${t.thumbnail}" alt=""/>` : `<div class="fav-thumb-ph"><i class="ri-music-line"></i></div>`}
      <div class="fav-meta"><div class="fav-title">${esc(t.title)}</div><div class="fav-artist">${esc(t.artist)}</div><div class="fav-dur">${t.duration || ''}</div></div>
      <button class="fav-del" onclick="event.stopPropagation();openCtxMenu(favs[${i}])"><i class="ri-more-2-fill"></i></button>
    `;
    d.onclick = () => playFromSearch(t, null);
    el.appendChild(d);
  });
}

// ========== PLAYLIST ==========
function updatePlUI() {
  const n = playlists.length;
  document.getElementById('pl-ct').textContent = n ? `(${n})` : '';
  renderPlCards();
}
function renderPlCards() {
  const el = document.getElementById('pl-cards'), em = document.getElementById('pl-empty');
  el.innerHTML = '';
  if (!playlists.length) { em.style.display = ''; return; }
  em.style.display = 'none';
  const icons = ['ri-music-2-line', 'ri-disc-line', 'ri-headphone-line', 'ri-guitar-line', 'ri-piano-keyboard-line'];
  playlists.forEach((pl, i) => {
    const d = document.createElement('div');
    d.className = 'pl-card';
    d.innerHTML = `
      <div class="pl-card-icon"><i class="${icons[i % icons.length]}"></i></div>
      <div class="pl-card-name">${esc(pl.name)}</div>
      <div class="pl-card-count">${pl.tracks.length} lagu</div>
      <button class="pl-card-del" onclick="event.stopPropagation();deletePl(${i})"><i class="ri-delete-bin-line"></i></button>
    `;
    d.onclick = () => openPlDetail(i);
    el.appendChild(d);
  });
}
function openNewPl() { closeModal('atp-modal'); openModal('npl-modal'); document.getElementById('npl-name').value = ''; setTimeout(() => document.getElementById('npl-name').focus(), 300); }
function createPlaylist() {
  const name = document.getElementById('npl-name').value.trim();
  if (!name) { toast('Masukkan nama playlist', 'err'); return; }
  if (playlists.find(p => p.name === name)) { toast('Nama sudah digunakan', 'err'); return; }
  playlists.unshift({ name, tracks: [], created: Date.now() });
  LS.set('playlists', playlists);
  updatePlUI();
  closeModal('npl-modal');
  toast('Playlist "' + name + '" dibuat', 'ok');
  if (atpTrack) { setTimeout(() => addToPlaylist(0), 100); }
}
function deletePl(i) { if (!confirm(`Hapus playlist "${playlists[i].name}"?`)) return; playlists.splice(i, 1); LS.set('playlists', playlists); updatePlUI(); toast('Playlist dihapus'); }
function openPlDetail(i) {
  document.getElementById('pl-cards').style.display = 'none';
  document.getElementById('pl-empty').style.display = 'none';
  const detail = document.getElementById('pl-detail');
  detail.style.display = '';
  document.getElementById('pl-detail-name').textContent = playlists[i].name;
  const list = document.getElementById('pl-detail-list');
  list.innerHTML = '';
  if (!playlists[i].tracks.length) {
    list.innerHTML = '<div class="state-box"><i class="ri-music-line"></i><p>Playlist kosong</p><small>Tambahkan lagu dari menu opsi</small></div>';
    return;
  }
  playlists[i].tracks.forEach((t, j) => {
    const d = document.createElement('div');
    d.className = 'fav-item';
    d.innerHTML = `
      ${t.thumbnail ? `<img class="fav-thumb" src="${t.thumbnail}" alt=""/>` : `<div class="fav-thumb-ph"><i class="ri-music-line"></i></div>`}
      <div class="fav-meta"><div class="fav-title">${esc(t.title)}</div><div class="fav-artist">${esc(t.artist)}</div></div>
      <button class="fav-del" onclick="event.stopPropagation();removePlTrack(${i},${j})"><i class="ri-delete-bin-line"></i></button>
    `;
    d.onclick = () => playFromSearch(t, null);
    list.appendChild(d);
  });
}
function closePlDetail() { document.getElementById('pl-detail').style.display = 'none'; document.getElementById('pl-cards').style.display = ''; renderPlCards(); }
function removePlTrack(pi, ti) { playlists[pi].tracks.splice(ti, 1); LS.set('playlists', playlists); openPlDetail(pi); toast('Dihapus dari playlist'); }

// ========== ATP ==========
function openATP(track) {
  atpTrack = track;
  const list = document.getElementById('atp-list');
  list.innerHTML = '';
  if (!playlists.length) {
    list.innerHTML = '<div style="padding:14px 20px;font-size:13px;color:var(--text2)">Belum ada playlist. Buat dulu!</div>';
  } else {
    playlists.forEach((pl, i) => {
      const d = document.createElement('div');
      d.className = 'pl-row';
      d.innerHTML = `<span class="pl-row-icon"><i class="ri-folder-music-line"></i></span><div><div class="pl-row-name">${esc(pl.name)}</div><div class="pl-row-count">${pl.tracks.length} lagu</div></div>`;
      d.onclick = () => addToPlaylist(i);
      list.appendChild(d);
    });
  }
  closeModal('ctx-modal');
  openModal('atp-modal');
}
function addToPlaylist(i) {
  if (!atpTrack) return;
  if (playlists[i].tracks.find(t => t.url === atpTrack.url)) { toast('Lagu sudah ada di playlist', 'err'); closeModal('atp-modal'); return; }
  playlists[i].tracks.push({ ...atpTrack });
  LS.set('playlists', playlists);
  updatePlUI();
  toast(`Ditambahkan ke "${playlists[i].name}"`, 'ok');
  closeModal('atp-modal');
  atpTrack = null;
}

// ========== HISTORY ==========
function addHistory(t) {
  const entry = { ...t, playedAt: Date.now() };
  history = history.filter(h => h.url !== t.url);
  history.unshift(entry);
  if (history.length > 100) history = history.slice(0, 100);
  LS.set('history', history);
  updateHistUI();
}
function updateHistUI() {
  const n = history.length;
  document.getElementById('hist-ct').textContent = n ? `(${n})` : '';
  renderHistList();
}
function renderHistList() {
  const el = document.getElementById('hist-list'), em = document.getElementById('hist-empty');
  el.innerHTML = '';
  if (!history.length) { em.style.display = ''; return; }
  em.style.display = 'none';
  history.forEach((t, i) => {
    const ago = timeAgo(t.playedAt);
    const d = document.createElement('div');
    d.className = 'hist-item';
    d.innerHTML = `
      ${t.thumbnail ? `<img class="hist-thumb" src="${t.thumbnail}" alt=""/>` : `<div class="hist-thumb-ph"><i class="ri-music-line" style="font-size:14px"></i></div>`}
      <div class="hist-meta"><div class="hist-title">${esc(t.title)}</div><div class="hist-artist">${esc(t.artist)}</div><div class="hist-time">${ago}</div></div>
      <button style="background:none;border:none;color:var(--text3);font-size:18px;cursor:pointer;padding:4px" onclick="event.stopPropagation();openCtxMenu(history[${i}])"><i class="ri-more-2-fill"></i></button>
    `;
    d.onclick = () => playFromSearch(t, null);
    el.appendChild(d);
  });
}
function clearHist() { if (!confirm('Hapus semua riwayat?')) return; history = []; LS.set('history', history); updateHistUI(); toast('Riwayat dihapus'); }

// ========== DOWNLOAD ==========
async function downloadTrack(track) {
  closeModal('ctx-modal');
  toast('Menyiapkan download…');
  try {
    let url = track.audioUrl;
    if (!url) {
      const encodedUrl = encodeURIComponent(track.url);
      const r = await fetch(API_PLAY + encodedUrl);
      const j = await r.json();
      if (!j.status || !j.result || !j.result.download || !j.result.download.url) {
        throw new Error('no url');
      }
      url = j.result.download.url;
    }
    const a = document.createElement('a');
    a.href = url;
    a.download = `${track.title} - ${track.artist}.mp3`;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    toast('Download dimulai', 'ok');
  } catch(e) {
    console.error('Download error:', e);
    toast('Gagal download', 'err');
  }
}

// ========== CONTEXT MENU ==========
function openCtxMenu(track) {
  ctxTrack = track;
  const isFav = favs.some(f => f.url === track.url);
  const ta = document.getElementById('ctx-thumb-area');
  ta.innerHTML = `
    ${track.thumbnail ? `<img src="${track.thumbnail}" style="width:44px;height:44px;border-radius:10px;object-fit:cover;flex-shrink:0">` : `<div style="width:44px;height:44px;border-radius:10px;background:var(--bg4);display:flex;align-items:center;justify-content:center;color:var(--text3);flex-shrink:0"><i class="ri-music-line" style="font-size:18px"></i></div>`}
    <div class="ctx-info"><div class="ctx-name">${esc(track.title)}</div><div class="ctx-artist">${esc(track.artist)}</div></div>
  `;
  const mi = document.getElementById('ctx-menu-items');
  mi.innerHTML = `
    <div class="menu-item" onclick="playFromSearch(ctxTrack,null);closeModal('ctx-modal')">
      <i class="ri-play-circle-line" style="color:var(--accent)"></i> Putar Sekarang
    </div>
    <div class="menu-sep"></div>
    <div class="menu-item" onclick="toggleFav(ctxTrack);updateNowPlayingIfMatch();closeModal('ctx-modal')">
      <i class="${isFav ? 'ri-heart-fill' : 'ri-heart-line'}" style="color:${isFav ? 'var(--gold)' : ''}"></i>
      ${isFav ? 'Hapus dari Favorit' : 'Tambah ke Favorit'}
    </div>
    <div class="menu-item" onclick="openATP(ctxTrack)">
      <i class="ri-folder-music-line" style="color:var(--accent2)"></i> Simpan ke Playlist
    </div>
    <div class="menu-sep"></div>
    <div class="menu-item" onclick="downloadTrack(ctxTrack)">
      <i class="ri-download-line" style="color:var(--accent3)"></i> Download Lagu
    </div>
    <div class="menu-sep"></div>
    <div class="menu-item" onclick="addToQueueOnly(ctxTrack);closeModal('ctx-modal')">
      <i class="ri-play-list-add-line" style="color:var(--text2)"></i> Tambah ke Antrian
    </div>
  `;
  openModal('ctx-modal');
}
function updateNowPlayingIfMatch() { if (queue[curIdx] && ctxTrack && queue[curIdx].url === ctxTrack.url) updateNowPlaying(queue[curIdx]); }
function addToQueueOnly(track) { if (queue.find(q => q.url === track.url)) { toast('Sudah ada di antrian'); return; } queue.push({ ...track }); saveQueue(); updateQueueUI(); toast('Ditambahkan ke antrian', 'ok'); }

// ========== SLEEP TIMER ==========
function openSleepModal() {
  const sa = document.getElementById('sleep-active-txt');
  const cb = document.getElementById('sleep-cancel-btn');
  if (sleepTimer) {
    const left = Math.round((sleepEnd - Date.now()) / 60000);
    sa.textContent = `Timer aktif: sisa ±${left} menit`;
    sa.style.display = 'block';
    cb.style.display = '';
    document.querySelectorAll('.sleep-opt:not(#sleep-cancel-btn)').forEach(b => b.classList.remove('active'));
  } else {
    sa.style.display = 'none';
    cb.style.display = 'none';
  }
  openModal('sleep-modal');
}
function setSleep(mins) {
  cancelSleep();
  sleepEnd = Date.now() + mins * 60000;
  sleepTimer = setTimeout(() => { aud.pause(); sleepTimer = null; updateSleepStatus(); toast('Musik dihentikan — tidur nyenyak!', 'ok'); }, mins * 60000);
  document.getElementById('sleep-active-txt').textContent = `Timer aktif: ${mins} menit`;
  document.getElementById('sleep-active-txt').style.display = 'block';
  document.getElementById('sleep-cancel-btn').style.display = '';
  document.querySelectorAll('.sleep-opt:not(#sleep-cancel-btn)').forEach(b => b.classList.remove('active'));
  event.target?.classList.add('active');
  updateSleepStatus();
  closeModal('sleep-modal');
  toast(`Timer tidur ${mins} menit aktif`, 'ok');
}
function cancelSleep() { if (sleepTimer) { clearTimeout(sleepTimer); sleepTimer = null; } sleepEnd = 0; updateSleepStatus(); }
function updateSleepStatus() {
  const el = document.getElementById('sleep-status');
  if (sleepTimer && sleepEnd > Date.now()) {
    const left = Math.round((sleepEnd - Date.now()) / 60000);
    document.getElementById('sleep-status-txt').textContent = `Timer tidur aktif — sisa ±${left} menit (ketuk untuk ubah)`;
    el.classList.add('visible');
  } else {
    el.classList.remove('visible');
  }
}
setInterval(updateSleepStatus, 30000);

// ========== NOTIF ==========
async function requestNotif() { if (!('Notification' in window)) { toast('Browser tidak mendukung notifikasi'); return; } const p = await Notification.requestPermission(); if (p === 'granted') { document.getElementById('notif-bar').style.display = 'none'; toast('Notifikasi diaktifkan', 'ok'); } else { toast('Notifikasi ditolak'); } }

// ========== MODAL HELPERS ==========
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-bg').forEach(bg => { bg.addEventListener('click', e => { if (e.target === bg) bg.classList.remove('open'); }); });

// ========== PAGE NAV ==========
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.getElementById('nav-' + name)?.classList.add('active');
  if (name === 'queue') renderQueueList();
  if (name === 'fav') renderFavList();
  if (name === 'pl') { renderPlCards(); document.getElementById('pl-detail').style.display = 'none'; document.getElementById('pl-cards').style.display = ''; }
  if (name === 'hist') renderHistList();
  document.getElementById('main-scroll').scrollTop = 0;
}

// ========== TOAST ==========
let toastT;
function toast(msg, type = '') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = 'toast show' + (type ? ' ' + type : '');
  clearTimeout(toastT);
  toastT = setTimeout(() => el.classList.remove('show'), 2800);
}

// ========== UTILS ==========
function fmt(s) { if (!s || isNaN(s)) return '0:00'; const m = Math.floor(s / 60), sec = Math.floor(s % 60); return `${m}:${sec.toString().padStart(2, '0')}`; }
function esc(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function timeAgo(ts) { const d = (Date.now() - ts) / 1000; if (d < 60) return 'Baru saja'; if (d < 3600) return `${Math.floor(d / 60)} menit lalu`; if (d < 86400) return `${Math.floor(d / 3600)} jam lalu`; return `${Math.floor(d / 86400)} hari lalu`; }

// ========== SWIPE CLOSE PLAYER ==========
let swipeStartY = 0; const playerEl = document.getElementById('player'); playerEl.addEventListener('touchstart', e => { swipeStartY = e.touches[0].clientY; }, { passive: true }); playerEl.addEventListener('touchend', e => { const dy = e.changedTouches[0].clientY - swipeStartY; if (dy > 80) closePlayer(); }, { passive: true });

// INIT NOTIF
if ('Notification' in window && Notification.permission === 'default') { setTimeout(() => { document.getElementById('notif-bar').style.display = 'flex'; }, 1500); } else { document.getElementById('notif-bar').style.display = 'none'; }
