// ================================================
// SPOTIFY PLAYER (LIBRARY BANYAK LAGU) - FINAL
// ================================================

//let spotifyAudio = null;
//let isSpotifyPlaying = false;
//let currentSpotifyTrack = null;
//let currentPlayIndex = -1;
//let searchResults = [];

let spotifyLibrary = JSON.parse(localStorage.getItem('spotify_library')) || [];

function saveLibrary() {
    localStorage.setItem('spotify_library', JSON.stringify(spotifyLibrary));
    console.log('Library saved:', spotifyLibrary.length, 'songs');
}

function getValidThumbnail(url) {
    if (!url) return 'https://placehold.co/60x60/333/white?text=Music';
    if (url.includes('spotify') || url.includes('scdn') || url.includes('image')) {
        return url;
    }
    return 'https://placehold.co/60x60/333/white?text=Music';
}

function addToLibrary(track) {
    const exists = spotifyLibrary.some(t => t.id === track.id);
    if (!exists) {
        spotifyLibrary.unshift({
            id: track.id,
            title: track.title,
            artist: track.artist,
            thumbnail: getValidThumbnail(track.thumbnail),
            audioUrl: track.audioUrl
        });
        saveLibrary();
        renderLibrary();
        showToast(track.title + ' ditambahkan ke library');
    } else {
        showToast(track.title + ' sudah ada di library', true);
    }
}

function renderLibrary() {
    const libraryList = document.getElementById('libraryList');
    if (!libraryList) {
        console.log('libraryList not found');
        return;
    }
    
    console.log('Rendering library, total:', spotifyLibrary.length);
    
    if (spotifyLibrary.length === 0) {
        libraryList.innerHTML = '<div class="empty-library"><i class="ri-music-line"></i> Belum ada lagu<br><span>Cari dan simpan lagu dulu</span></div>';
        return;
    }
    
    libraryList.innerHTML = spotifyLibrary.map((track, idx) => `
        <div class="library-item ${currentPlayIndex === idx ? 'active' : ''}" onclick="playFromLibrary(${idx})">
            <img src="${track.thumbnail}" onerror="this.src='https://placehold.co/40x40/333/white?text=Music'">
            <div class="library-item-info">
                <div class="library-item-title">${escapeHtml(track.title.substring(0, 35))}</div>
                <div class="library-item-artist">${escapeHtml(track.artist)}</div>
            </div>
            <button class="library-play-btn" onclick="event.stopPropagation(); playFromLibrary(${idx})">
                <i class="ri-play-fill"></i>
            </button>
            <button class="library-delete-btn" onclick="event.stopPropagation(); deleteFromLibrary(${idx})">
                <i class="ri-delete-bin-line"></i>
            </button>
        </div>
    `).join('');
}

function deleteFromLibrary(index) {
    const trackName = spotifyLibrary[index].title;
    spotifyLibrary.splice(index, 1);
    saveLibrary();
    renderLibrary();
    
    if (currentPlayIndex === index) {
        if (spotifyAudio) {
            spotifyAudio.pause();
            spotifyAudio = null;
        }
        currentSpotifyTrack = null;
        currentPlayIndex = -1;
        isSpotifyPlaying = false;
        document.getElementById('spotifyCurrentPlayer').style.display = 'none';
        const musicBtn = document.getElementById('musicBtn');
        if (musicBtn) musicBtn.innerHTML = '<i class="ri-music-2-line"></i>';
    } else if (currentPlayIndex > index) {
        currentPlayIndex--;
    }
    
    showToast(trackName + ' dihapus dari library');
}

function playFromLibrary(index) {
    const track = spotifyLibrary[index];
    if (track) {
        currentPlayIndex = index;
        playSpotifyTrack(track);
        renderLibrary();
    }
}

async function searchSpotifyTracks(query) {
    if (!query.trim()) return;
    
    const resultsContainer = document.getElementById('spotifySearchResults');
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = '<div class="search-loading"><div class="loading-spinner"></div> Mencari lagu...</div>';
    
    try {
        const encodedQuery = encodeURIComponent(query);
        const searchUrl = `https://api.nexray.eu.cc/search/spotify?q=${encodedQuery}`;
        const response = await fetch(searchUrl);
        const data = await response.json();
        
        if (data.status && data.result && data.result.length > 0) {
            searchResults = data.result;
            
            resultsContainer.innerHTML = `
                <div class="search-header">Hasil pencarian "${escapeHtml(query)}"</div>
                ${searchResults.map((track, index) => `
                    <div class="search-result-item" onclick="downloadAndAddToLibrary(${index})">
                        <img src="${track.thumbnail}" onerror="this.src='https://placehold.co/40x40/333/white?text=Music'">
                        <div class="search-result-info">
                            <div class="search-result-title">${escapeHtml(track.title.substring(0, 35))}</div>
                            <div class="search-result-artist">${escapeHtml(track.artist)}</div>
                        </div>
                        <button class="search-download-btn">
                            <i class="ri-download-line"></i> Simpan
                        </button>
                    </div>
                `).join('')}
            `;
        } else {
            resultsContainer.innerHTML = '<div class="search-empty">Tidak ada hasil</div>';
        }
    } catch(e) {
        resultsContainer.innerHTML = '<div class="search-error">Gagal mencari lagu</div>';
    }
}

async function downloadAndAddToLibrary(index) {
    const track = searchResults[index];
    if (!track) return;
    
    const downloadBtn = document.querySelectorAll('.search-download-btn')[index];
    
    if (downloadBtn) {
        downloadBtn.innerHTML = '<div class="loading-spinner"></div>';
        downloadBtn.disabled = true;
    }
    
    try {
        const encodedUrl = encodeURIComponent(track.url);
        const downloadUrl = `https://api.nexray.eu.cc/downloader/spotify?url=${encodedUrl}`;
        const response = await fetch(downloadUrl);
        const data = await response.json();
        
        if (data.status && data.result && data.result.url) {
            const trackData = {
                id: track.id,
                title: track.title,
                artist: track.artist,
                thumbnail: track.thumbnail,
                audioUrl: data.result.url
            };
            
            addToLibrary(trackData);
            
            document.getElementById('spotifySearchResults').style.display = 'none';
            document.getElementById('spotifySearchInputModal').value = '';
            
            if (downloadBtn) {
                downloadBtn.innerHTML = '<i class="ri-check-line"></i> Tersimpan';
                setTimeout(() => {
                    if (downloadBtn) downloadBtn.innerHTML = '<i class="ri-download-line"></i> Simpan';
                }, 2000);
            }
        } else {
            showToast('Gagal mengambil audio', true);
            if (downloadBtn) {
                downloadBtn.innerHTML = '<i class="ri-download-line"></i> Simpan';
                downloadBtn.disabled = false;
            }
        }
    } catch(e) {
        showToast('Error mengambil audio', true);
        if (downloadBtn) {
            downloadBtn.innerHTML = '<i class="ri-download-line"></i> Simpan';
            downloadBtn.disabled = false;
        }
    }
}

function playSpotifyTrack(track) {
    if (!track.audioUrl) {
        showToast('Audio tidak tersedia', true);
        return;
    }
    
    if (spotifyAudio) {
        spotifyAudio.pause();
    }
    
    const playBtn = document.getElementById('playCurrentBtn');
    
    if (playBtn) {
        playBtn.innerHTML = '<div class="loading-spinner"></div>';
        playBtn.disabled = true;
    }
    
    const audio = new Audio(track.audioUrl);
    audio.volume = 0.5;
    audio.loop = true;
    
    audio.addEventListener('canplaythrough', () => {
        audio.play();
        isSpotifyPlaying = true;
        currentSpotifyTrack = track;
        
        const thumb = getValidThumbnail(track.thumbnail);
        document.getElementById('currentTrackImg').src = thumb;
        document.getElementById('currentTrackTitle').innerHTML = escapeHtml(track.title.substring(0, 35));
        document.getElementById('currentTrackArtist').innerHTML = escapeHtml(track.artist);
        document.getElementById('spotifyCurrentPlayer').style.display = 'block';
        
        if (playBtn) {
            playBtn.innerHTML = '<i class="ri-pause-fill"></i>';
            playBtn.disabled = false;
        }
        
        const musicHeaderBtn = document.getElementById('musicBtn');
        if (musicHeaderBtn) {
            musicHeaderBtn.innerHTML = '<i class="ri-pause-line"></i>';
        }
        
        renderLibrary();
        showToast('Memutar: ' + track.title);
    });
    
    audio.addEventListener('timeupdate', () => {
        const progressBar = document.getElementById('modalProgressBar');
        if (progressBar && audio.duration) {
            const percent = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = `${percent}%`;
        }
    });
    
    audio.addEventListener('ended', () => {
        if (playBtn) {
            playBtn.innerHTML = '<i class="ri-play-fill"></i>';
        }
        isSpotifyPlaying = false;
        const progressBar = document.getElementById('modalProgressBar');
        if (progressBar) progressBar.style.width = '0%';
        
        const musicHeaderBtn = document.getElementById('musicBtn');
        if (musicHeaderBtn) {
            musicHeaderBtn.innerHTML = '<i class="ri-music-2-line"></i>';
        }
    });
    
    audio.addEventListener('error', () => {
        showToast('Gagal memutar lagu', true);
        if (playBtn) {
            playBtn.innerHTML = '<i class="ri-play-fill"></i>';
            playBtn.disabled = false;
        }
    });
    
    spotifyAudio = audio;
}

function pauseSpotifyTrack() {
    if (spotifyAudio) {
        spotifyAudio.pause();
        isSpotifyPlaying = false;
        const playBtn = document.getElementById('playCurrentBtn');
        if (playBtn) {
            playBtn.innerHTML = '<i class="ri-play-fill"></i>';
        }
        const musicHeaderBtn = document.getElementById('musicBtn');
        if (musicHeaderBtn) {
            musicHeaderBtn.innerHTML = '<i class="ri-music-2-line"></i>';
        }
    }
}

function toggleSpotifyPlay() {
    if (!currentSpotifyTrack) {
        if (spotifyLibrary.length > 0) {
            playFromLibrary(0);
        } else {
            showToast('Belum ada lagu, cari dan simpan dulu', true);
        }
        return;
    }
    
    if (isSpotifyPlaying) {
        pauseSpotifyTrack();
    } else {
        if (spotifyAudio) {
            spotifyAudio.play();
            isSpotifyPlaying = true;
            const playBtn = document.getElementById('playCurrentBtn');
            if (playBtn) {
                playBtn.innerHTML = '<i class="ri-pause-fill"></i>';
            }
            const musicHeaderBtn = document.getElementById('musicBtn');
            if (musicHeaderBtn) {
                musicHeaderBtn.innerHTML = '<i class="ri-pause-line"></i>';
            }
        } else if (currentSpotifyTrack) {
            playSpotifyTrack(currentSpotifyTrack);
        }
    }
}

function downloadCurrentTrack() {
    if (!currentSpotifyTrack || !currentSpotifyTrack.audioUrl) {
        showToast('Tidak ada lagu yang sedang diputar', true);
        return;
    }
    
    showToast('Mengunduh...', false);
    
    fetch(currentSpotifyTrack.audioUrl)
        .then(response => response.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${currentSpotifyTrack.title} - ${currentSpotifyTrack.artist}.mp3`;
            a.click();
            URL.revokeObjectURL(url);
            showToast('Download selesai');
        })
        .catch(() => showToast('Gagal mengunduh', true));
}

function showSpotifyModal() {
    const modal = document.getElementById('spotifyPlayerModal');
    if (!modal) return;
    
    renderLibrary();
    modal.classList.add('active');
    
    if (currentSpotifyTrack) {
        const thumb = getValidThumbnail(currentSpotifyTrack.thumbnail);
        document.getElementById('currentTrackImg').src = thumb;
        document.getElementById('currentTrackTitle').innerHTML = escapeHtml(currentSpotifyTrack.title.substring(0, 35));
        document.getElementById('currentTrackArtist').innerHTML = escapeHtml(currentSpotifyTrack.artist);
        document.getElementById('spotifyCurrentPlayer').style.display = 'block';
        
        const playBtn = document.getElementById('playCurrentBtn');
        if (playBtn) {
            playBtn.innerHTML = isSpotifyPlaying ? '<i class="ri-pause-fill"></i>' : '<i class="ri-play-fill"></i>';
        }
    }
}

function showToast(message, isError = false) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 80px;
        left: 50%;
        transform: translateX(-50%);
        background: ${isError ? '#ef4444' : '#10b981'};
        color: white;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 12px;
        z-index: 2000;
        white-space: nowrap;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

function escapeHtml(text) {
    if (!text) return '';
    return text.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', function() {
    const musicBtn = document.getElementById('musicBtn');
    const closeModal = document.getElementById('closeSpotifyModal');
    const searchBtn = document.getElementById('searchSpotifyModalBtn');
    const searchInput = document.getElementById('spotifySearchInputModal');
    const playCurrentBtn = document.getElementById('playCurrentBtn');
    const downloadCurrentBtn = document.getElementById('downloadCurrentBtn');
    const modal = document.getElementById('spotifyPlayerModal');
    const progressContainer = document.getElementById('modalProgressContainer');
    
    if (musicBtn) {
        musicBtn.addEventListener('click', showSpotifyModal);
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', () => modal.classList.remove('active'));
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    }
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            searchSpotifyTracks(searchInput.value);
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchSpotifyTracks(searchInput.value);
            }
        });
    }
    
    if (playCurrentBtn) {
        playCurrentBtn.addEventListener('click', toggleSpotifyPlay);
    }
    
    if (downloadCurrentBtn) {
        downloadCurrentBtn.addEventListener('click', downloadCurrentTrack);
    }
    
    if (progressContainer) {
        progressContainer.addEventListener('click', (e) => {
            if (!spotifyAudio) return;
            const rect = progressContainer.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            spotifyAudio.currentTime = percent * spotifyAudio.duration;
        });
    }
    
    // Load library awal
    renderLibrary();
});

// Export ke global
window.playFromLibrary = playFromLibrary;
window.deleteFromLibrary = deleteFromLibrary;
window.downloadAndAddToLibrary = downloadAndAddToLibrary;
