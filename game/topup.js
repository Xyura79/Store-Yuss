// ================================================
// KONFIGURASI API BACKEND
// ================================================


const VIP_BASE = 'https://vip-reseller.co.id/api';
const VIP_KEY = 'YqFllhqHsXGnBbVY4VPqKOdLMkTVhRF98rN25KKgaWuXHzCnZQLzV2DVSAHzozbu';
const VIP_SIGN = '3f0a33c1148c9388d1cb629a7b774015';






const API_BASE = 'https://backend-delta-steel-38.vercel.app/api/all';
const API_KEY = 'YussXySecret2024';

// ================================================
// STATE
// ================================================

let selectedDiamond = null;
let selectedPrice = 0;
let userBalance = 0;
let currentUser = null;

// ================================================
// DATA DIAMOND
// ================================================

const diamondList = [
    { diamond: 5, price: 1000 },
    { diamond: 10, price: 2000 },
    { diamond: 12, price: 2210 },
    { diamond: 15, price: 3000 },
    { diamond: 20, price: 3600 },
    { diamond: 25, price: 4550 },
    { diamond: 30, price: 5400 },
    { diamond: 40, price: 6000 },
    { diamond: 50, price: 7200 },
    { diamond: 60, price: 8500 },
    { diamond: 70, price: 9500 },
    { diamond: 80, price: 12021 },
    { diamond: 90, price: 13291 },
    { diamond: 100, price: 14800 },
    { diamond: 120, price: 16000 },
    { diamond: 130, price: 17500 },
    { diamond: 140, price: 19000 },
    { diamond: 150, price: 21000 },
    { diamond: 160, price: 22500 },
    { diamond: 170, price: 24000 },
    { diamond: 180, price: 25500 },
    { diamond: 190, price: 26500 },
    { diamond: 200, price: 27600 },
    { diamond: 210, price: 28700 },
    { diamond: 250, price: 34000 },
    { diamond: 300, price: 38000 }
];

// ================================================
// RENDER DIAMOND GRID
// ================================================

function renderDiamonds() {
    const grid = document.getElementById('diamondGrid');
    if (!grid) return;

    grid.innerHTML = diamondList.map(item => `
        <div class="diamond-card" data-diamond="${item.diamond}" data-price="${item.price}">
            <img src="image/diamond.png" alt="Diamond" class="diamond-icon" onerror="this.src='https://placehold.co/40x40/333/white?text=💎'">
            <div class="diamond-amount">${item.diamond} Diamond</div>
            <div class="diamond-price">Rp ${item.price.toLocaleString('id-ID')}</div>
        </div>
    `).join('');

    document.querySelectorAll('.diamond-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.diamond-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            
            selectedDiamond = parseInt(this.dataset.diamond);
            selectedPrice = parseInt(this.dataset.price);
            
            updateOrderBottom();
        });
    });
}

// ================================================
// UPDATE ORDER BOTTOM
// ================================================

function updateOrderBottom() {
    const amountEl = document.getElementById('orderAmount');
    const priceEl = document.getElementById('orderPrice');
    const orderBtn = document.getElementById('orderBtn');

    if (selectedDiamond && selectedPrice) {
        amountEl.textContent = `${selectedDiamond} Diamond FF`;
        priceEl.textContent = `Rp ${selectedPrice.toLocaleString('id-ID')}`;
        orderBtn.disabled = false;
    } else {
        amountEl.textContent = 'Pilih nominal';
        priceEl.textContent = 'Rp 0';
        orderBtn.disabled = true;
    }
}

// ================================================
// LOAD USER INFO
// ================================================

async function loadUserInfo() {
    const loading = document.getElementById('userInfoLoading');
    const content = document.getElementById('userInfoContent');
    const nameEl = document.getElementById('userNameDisplay');
    const balanceEl = document.getElementById('userBalanceDisplay');
    const avatarEl = document.getElementById('userAvatar');

    if (!loading || !content) return;

    loading.style.display = 'flex';
    content.style.display = 'none';

    const savedUser = localStorage.getItem('app_user');
    if (!savedUser) {
        loading.innerHTML = `
            <i class="ri-error-warning-line" style="color: #f59e0b; font-size: 20px;"></i>
            <span>Silakan login terlebih dahulu</span>
        `;
        return;
    }

    let userData;
    try {
        userData = JSON.parse(savedUser);
    } catch(e) {
        loading.innerHTML = `
            <i class="ri-error-warning-line" style="color: #ef4444; font-size: 20px;"></i>
            <span>Gagal membaca data user</span>
        `;
        return;
    }

    const username = userData.username || userData.name;

    if (!username) {
        loading.innerHTML = `
            <i class="ri-error-warning-line" style="color: #ef4444; font-size: 20px;"></i>
            <span>Username tidak ditemukan</span>
        `;
        return;
    }

    try {
        const response = await fetch('https://backend-delta-steel-38.vercel.app/api/balance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF'
            },
            body: JSON.stringify({
                action: 'search_user',
                query: username
            })
        });

        const data = await response.json();

        if (data.success && data.data) {
            const user = data.data;
            const balance = user.balance || 0;

            if (nameEl) nameEl.textContent = username;
            if (balanceEl) balanceEl.textContent = 'Rp ' + balance.toLocaleString('id-ID');
            if (avatarEl) avatarEl.textContent = username.charAt(0).toUpperCase();

            loading.style.display = 'none';
            content.style.display = 'block';

            userBalance = balance;
            currentUser = user;

        } else {
            loading.innerHTML = `
                <i class="ri-error-warning-line" style="color: #ef4444; font-size: 20px;"></i>
                <span>User tidak ditemukan di database</span>
            `;
        }

    } catch (error) {
        console.error('Error loading user info:', error);
        loading.innerHTML = `
            <i class="ri-error-warning-line" style="color: #ef4444; font-size: 20px;"></i>
            <span>Gagal koneksi ke server</span>
        `;
    }
}

// ================================================
// SHOW CONFIRMATION MODAL
// ================================================

function showConfirmationModal(diamond, price, uid) {
    // Hapus modal lama jika ada
    const oldModal = document.querySelector('.confirmation-modal');
    if (oldModal) oldModal.remove();

    const modal = document.createElement('div');
    modal.className = 'confirmation-modal';
    modal.innerHTML = `
        <div class="confirmation-overlay"></div>
        <div class="confirmation-content">
            <div class="confirmation-icon">
                <img src="image/diamond.png" alt="Diamond" class="confirmation-icon-img" onerror="this.src='https://placehold.co/64x64/333/white?text=💎'">
            </div>
            <h3 class="confirmation-title">Konfirmasi Pembelian</h3>
            <p class="confirmation-text">
                Kamu Membeli diamond free fire sebanyak <strong>${diamond} Diamond</strong>
                <br>
                <span style="font-size: 13px; color: var(--text-secondary);">
                    ID: <strong style="color: var(--accent);">${uid}</strong>
                </span>
                <br>
                <span style="font-size: 16px; font-weight: 700; color: #10b981;">
                    Rp ${price.toLocaleString('id-ID')}
                </span>
            </p>
            <div class="confirmation-buttons">
                <button class="confirmation-btn cancel" id="cancelOrderBtn">
                    <i class="ri-close-line"></i> Batal
                </button>
                <button class="confirmation-btn confirm" id="confirmOrderBtn">
                    <i class="ri-check-line"></i> Oke
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Animasi masuk
    setTimeout(() => {
        modal.classList.add('show');
    }, 50);

    // Tombol Batal
    document.getElementById('cancelOrderBtn').addEventListener('click', function() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 400);
    });

    // Tombol Oke -> Lanjut order
    document.getElementById('confirmOrderBtn').addEventListener('click', function() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 400);
        processOrder(diamond, price, uid);
    });

    // Klik overlay
    document.querySelector('.confirmation-overlay').addEventListener('click', function() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 400);
    });
}


// ================================================
// PROCESS ORDER (LANGSUNG KE VIP-RESELLER)
// ================================================

async function processOrder(diamond, price, uid) {
    const orderBtn = document.getElementById('orderBtn');
    orderBtn.disabled = true;
    orderBtn.innerHTML = '<span class="loading-spinner"></span> Memproses...';

    try {
        const savedUser = localStorage.getItem('app_user');
        if (!savedUser) {
            throw new Error('Silakan login terlebih dahulu');
        }
        const userData = JSON.parse(savedUser);
        const username = userData.username || userData.name;

        // ===== 1. ORDER KE VIP-RESELLER LANGSUNG =====
        const formData = new URLSearchParams();
        formData.append('key', VIP_KEY);
        formData.append('sign', VIP_SIGN);
        formData.append('type', 'order');
        formData.append('service', `FF${diamond}-S13`);
        formData.append('data_no', uid);

        const orderRes = await fetch(`${VIP_BASE}/game-feature`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        });

        const orderData = await orderRes.json();

        if (!orderData.result) {
            throw new Error(orderData.message || 'Gagal order');
        }

        // ===== 2. POTONG SALDO =====
        const subRes = await fetch('https://backend-delta-steel-38.vercel.app/api/balance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF'
            },
            body: JSON.stringify({
                action: 'sub',
                username: username,
                amount: price
            })
        });

        const subData = await subRes.json();

        if (!subData.success) {
            throw new Error('Gagal memotong saldo');
        }

        // ===== 3. SIMPAN TRANSAKSI =====
        const transactionId = 'FF' + Date.now().toString().slice(-8) + Math.floor(Math.random() * 1000);

        await fetch('https://backend-delta-steel-38.vercel.app/api/balance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF'
            },
            body: JSON.stringify({
                action: 'add_transaction',
                username: username,
                trx_id: {
                    id: transactionId,
                    product_name: `Topup FF ${diamond} Diamond`,
                    type: 'ff_topup',
                    amount: price,
                    target: uid,
                    diamond: diamond,
                    status: 'success',
                    created_at: new Date().toISOString()
                }
            })
        });

        // ===== 4. TAMPILKAN SUKSES =====
        showToast(`✅ Topup ${diamond} Diamond berhasil!`);
        
        orderBtn.innerHTML = '<i class="ri-flashlight-line"></i> Beli Sekarang';
        orderBtn.disabled = false;

        // Refresh saldo
        loadUserInfo();

        // Reset pilihan
        selectedDiamond = null;
        selectedPrice = null;
        document.querySelectorAll('.diamond-card').forEach(c => c.classList.remove('selected'));
        updateOrderBottom();

        // ===== KIRIM WA OTOMATIS SUDAH DARI BACKEND =====
        // Tidak perlu panggil sendWhatsAppConfirmation lagi

    } catch (error) {
        console.error('Error:', error);
        showToast('❌ ' + error.message, true);
        orderBtn.innerHTML = '<i class="ri-flashlight-line"></i> Beli Sekarang';
        orderBtn.disabled = false;
    }
}











// ================================================
// ORDER DIAMOND (DIPANGGIL SAAT KLIK BELI)
// ================================================

function orderDiamond() {
    // ===== CEK ID =====
    const uidInput = document.getElementById('ffUidInput');
    const uid = uidInput.value.trim();

    if (!uid || uid.length < 5) {
        showToast('⚠️ Masukkan ID FF terlebih dahulu!', true);
        uidInput.classList.add('error');
        setTimeout(() => {
            uidInput.classList.remove('error');
        }, 3000);
        return;
    }

    // ===== CEK PILIHAN DIAMOND =====
    if (!selectedDiamond || !selectedPrice) {
        showToast('Pilih jumlah diamond terlebih dahulu!', true);
        return;
    }

    // ===== CEK SALDO =====
    if (userBalance < selectedPrice) {
        showToast(`❌ Saldo tidak cukup! Saldo: Rp ${userBalance.toLocaleString('id-ID')}`, true);
        return;
    }

    // ===== TAMPILKAN MODAL KONFIRMASI =====
    showConfirmationModal(selectedDiamond, selectedPrice, uid);
}

// ================================================
// SEND WHATSAPP CONFIRMATION (TANPA TESTIMONI)
// ================================================

function sendWhatsAppConfirmation(username, transactionId, diamond, price, uid) {
    const { jam, tanggal, tahun } = getCurrentDateTime();
    const deviceId = localStorage.getItem('device_fingerprint') || 'Tidak tersedia';
    
    let message = `Halo Yuss Xy 👋%0A%0A`;
    message += `Saya ingin melakukan konfirmasi pembelian Topup FF.%0A%0A`;
    message += `📦 Detail Pesanan:%0A`;
    message += `• Produk: Topup FF ${diamond} Diamond%0A`;
    message += `• ID FF: ${uid}%0A`;
    message += `• Harga: Rp ${price.toLocaleString('id-ID')}%0A`;
    message += `• Username: ${username}%0A`;
    message += `• TRX ID: ${transactionId}%0A`;
    message += `• Waktu: ${jam} • ${tanggal} ${tahun}%0A`;
    message += `• Device ID: ${deviceId}%0A%0A`;
    message += `✅ Pembayaran sudah saya lakukan.%0A%0A`;
    message += `Mohon segera diproses.%0A`;
    message += `Terima kasih 🙏`;
    
    window.open(`https://wa.me/6283183469343?text=${message}`, '_blank');
}

// ================================================
// GET CURRENT DATE TIME
// ================================================

function getCurrentDateTime() {
    const now = new Date();
    const jam = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    const tanggal = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long' });
    const tahun = now.getFullYear();
    return { jam, tanggal, tahun };
}

// ================================================
// SHOW TOAST
// ================================================
function showToast(message, isError = false) {
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: ${isError ? 'rgba(30, 41, 59, 0.95)' : 'rgba(30, 41, 59, 0.95)'};
        color: ${isError ? '#fca5a5' : '#a7f3d0'};
        padding: 12px 24px;
        border-radius: 12px;
        font-size: 13px;
        font-weight: 500;
        z-index: 9999;
        backdrop-filter: blur(12px);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
        animation: toastSlideIn 0.3s cubic-bezier(0.2, 0.9, 0.4, 1) forwards;
        max-width: 85%;
        text-align: center;
        white-space: nowrap;
        border: 1px solid ${isError ? 'rgba(252, 165, 165, 0.15)' : 'rgba(167, 243, 208, 0.15)'};
        border-left: 3px solid ${isError ? '#f87171' : '#34d399'};
        letter-spacing: 0.3px;
    `;
    
    // Icon untuk error/sukses
    const icon = isError ? '' : '';
    toast.innerHTML = `${icon} ${message}`;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'toastFadeOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 350);
    }, 2500);
}

// ================================================
// PRELOAD & CACHE GAMBAR
// ================================================

const IMAGE_CACHE_KEY = 'topup_image_cache';
const IMAGE_CACHE_DURATION = 7 * 24 * 60 * 60 * 1000;

const imagesToPreload = [
    { key: 'logo', url: '../image/logo/logo.jpg' },
    { key: 'banner', url: 'image/banner.jpg' },
    { key: 'ff', url: 'image/ff.jpg' },
    { key: 'diamond', url: 'image/diamond.png' }
];

function getImageCache() {
    try {
        const cached = localStorage.getItem(IMAGE_CACHE_KEY);
        if (!cached) return null;
        const data = JSON.parse(cached);
        if (Date.now() - data.timestamp < IMAGE_CACHE_DURATION) {
            return data.images;
        }
        localStorage.removeItem(IMAGE_CACHE_KEY);
        return null;
    } catch(e) {
        return null;
    }
}

function saveImageCache(images) {
    try {
        localStorage.setItem(IMAGE_CACHE_KEY, JSON.stringify({
            timestamp: Date.now(),
            images: images
        }));
    } catch(e) {
        console.warn('Gagal menyimpan cache gambar:', e);
    }
}

async function preloadImages() {
    const cachedImages = getImageCache();
    if (cachedImages) {
        console.log('✅ Gambar dimuat dari cache');
        applyCachedImages(cachedImages);
        return;
    }

    console.log('⏳ Mengunduh gambar dari server...');
    
    const imagePromises = imagesToPreload.map(async (img) => {
        try {
            const response = await fetch(img.url, { cache: 'force-cache', mode: 'cors' });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const blob = await response.blob();
            const reader = new FileReader();
            return new Promise((resolve) => {
                reader.onloadend = () => {
                    resolve({ key: img.key, url: img.url, data: reader.result, type: blob.type });
                };
                reader.readAsDataURL(blob);
            });
        } catch(error) {
            console.warn(`Gagal preload ${img.key}:`, error);
            return { key: img.key, url: img.url, data: null, error: true };
        }
    });

    const results = await Promise.all(imagePromises);
    const images = {};
    results.forEach(result => {
        images[result.key] = {
            url: result.url,
            data: result.data,
            type: result.type || 'image/jpeg',
            error: result.error || false
        };
    });

    saveImageCache(images);
    applyCachedImages(images);
    console.log('✅ Gambar selesai diunduh dan di-cache');
}

function applyCachedImages(images) {
    Object.keys(images).forEach(key => {
        const imgData = images[key];
        if (imgData.error || !imgData.data) return;
        
        const selectors = {
            'logo': '.header-logo',
            'banner': '.banner-image',
            'ff': '.ff-logo-image',
            'diamond': '.diamond-icon, .order-icon, .beli-icon-img'
        };
        
        const selector = selectors[key];
        if (!selector) return;
        
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            const currentSrc = el.src || '';
            if (currentSrc.includes('placehold') || currentSrc === '' || currentSrc === window.location.href) {
                el.src = imgData.data;
            }
        });
    });
}

async function preloadImagesBackground() {
    await new Promise(resolve => {
        if (document.readyState === 'complete') {
            resolve();
        } else {
            window.addEventListener('load', resolve);
        }
    });
    setTimeout(() => { preloadImages(); }, 100);
}

// ================================================
// EVENT LISTENERS
// ================================================

document.addEventListener('DOMContentLoaded', function() {
    loadUserInfo();
    renderDiamonds();
    updateOrderBottom();
    preloadImagesBackground();

    // Event listener order
    const orderBtn = document.getElementById('orderBtn');
    if (orderBtn) {
        orderBtn.addEventListener('click', orderDiamond);
    }

    // Auto filter ID (hanya angka)
    const uidInput = document.getElementById('ffUidInput');
    if (uidInput) {
        uidInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    }
});

// ================================================
// STYLE UNTUK ANIMASI TOAST & MODAL
// ================================================

const style = document.createElement('style');
style.textContent = `
    @keyframes toastSlideIn {
        from { opacity: 0; transform: translateX(-50%) translateY(20px); }
        to { opacity: 1; transform: translateX(-50%) translateY(0); }
    }
    @keyframes toastFadeOut {
        from { opacity: 1; transform: translateX(-50%) translateY(0); }
        to { opacity: 0; transform: translateX(-50%) translateY(-20px); }
    }

    /* ===== CONFIRMATION MODAL ===== */
    .confirmation-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    }

    .confirmation-modal.show {
        opacity: 1;
        visibility: visible;
    }

    .confirmation-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(8px);
    }

    .confirmation-content {
        position: relative;
        background: var(--bg-card);
        border-radius: 24px;
        padding: 32px 24px 24px;
        max-width: 340px;
        width: 85%;
        text-align: center;
        border: 1px solid var(--border);
        transform: scale(0.8) translateY(20px);
        transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    }

    .confirmation-modal.show .confirmation-content {
        transform: scale(1) translateY(0);
    }

    .confirmation-icon {
        width: 64px;
        height: 64px;
        background: linear-gradient(135deg, #10b981, #059669);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 16px;
        box-shadow: 0 0 30px rgba(16, 185, 129, 0.3);
    }

    .confirmation-icon i {
        font-size: 32px;
        color: white;
    }

    .confirmation-title {
        font-size: 18px;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 12px;
    }

    .confirmation-text {
        font-size: 14px;
        color: var(--text-secondary);
        line-height: 1.6;
        margin-bottom: 24px;
    }

    .confirmation-text strong {
        color: var(--accent);
    }

    .confirmation-buttons {
        display: flex;
        gap: 12px;
    }

    .confirmation-btn {
        flex: 1;
        padding: 12px 16px;
        border-radius: 30px;
        font-weight: 700;
        font-size: 14px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        transition: all 0.2s ease;
        border: none;
    }

    .confirmation-btn:active {
        transform: scale(0.96);
    }

    .confirmation-btn.cancel {
        background: var(--bg-secondary);
        color: var(--text-primary);
        border: 1px solid var(--border);
    }

    .confirmation-btn.cancel:active {
        background: var(--border);
    }

    .confirmation-btn.confirm {
        background: linear-gradient(135deg, var(--accent), var(--accent-hover));
        color: white;
        box-shadow: 0 4px 16px rgba(239, 68, 68, 0.3);
    }

    .confirmation-btn.confirm:active {
        box-shadow: 0 2px 8px rgba(239, 68, 68, 0.2);
    }

    /* Loading spinner di tombol */
    .loading-spinner {
        display: inline-block;
        width: 18px;
        height: 18px;
        border: 2px solid rgba(255,255,255,0.3);
        border-top-color: white;
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }

    /* Light mode */
    body.light-mode .confirmation-content {
        background: #ffffff;
    }

    body.light-mode .confirmation-btn.cancel {
        background: #f1f5f9;
        border-color: #e2e8f0;
    }

    body.light-mode .confirmation-btn.cancel:active {
        background: #e2e8f0;
    }
`;
document.head.appendChild(style);