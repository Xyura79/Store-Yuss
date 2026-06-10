// ================================================
// STORE CLOSE / MAINTENANCE MODE (PREMIUM)
// ================================================

// ========== KONFIGURASI - UBAH DI SINI ==========
const STORE_CLOSED = false;  // true = tutup, false = buka

const ESTIMATED_OPEN_HOUR = "13.00";


const CLOSE_REASON = "Ada Urusan";

// PESAN LENGKAP (otomatis tergabung)
const CLOSE_MESSAGE = `Haloo, Saya close dulu ya. Ini dilakukan untuk menghindari orderan yang lama diproses. Kamu masih bisa menggunakan tools di aplikasi ini kok`;
// ================================================

let isStoreClosed = STORE_CLOSED;

// Toast notifikasi (didefinisikan lebih awal)
function showStoreClosedToast(message, type = 'warning') {
    const colors = {
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6'
    };
    
    const icons = {
        warning: 'ri-store-3-line',
        error: 'ri-close-circle-line',
        info: 'ri-information-line'
    };
    
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: ${colors[type]};
        color: white;
        padding: 12px 24px;
        border-radius: 50px;
        font-size: 13px;
        font-weight: 500;
        z-index: 10001;
        white-space: nowrap;
        box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        animation: toastPremiumIn 0.3s cubic-bezier(0.34, 1.2, 0.64, 1);
        backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        gap: 8px;
    `;
    toast.innerHTML = `<i class="${icons[type]}"></i> ${message}`;
    document.body.appendChild(toast);
    
    if (navigator.vibrate) navigator.vibrate(50);
    
    setTimeout(() => {
        toast.style.animation = 'toastPremiumOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// FUNGSI UNTUK MENONAKTIFKAN TOMBOL DI MODAL APAPUN
function disableModalButtons() {
    // Nonaktifkan tombol di modal suntik sosmed
    const orderNowBtn = document.getElementById('orderNowBtn');
    const addToCartServiceBtn = document.getElementById('addToCartServiceBtn');
    const quickBtns = document.querySelectorAll('.quick-btn');
    const qtyDecr = document.getElementById('qtyDecrBtn');
    const qtyIncr = document.getElementById('qtyIncrBtn');
    
    if (orderNowBtn) {
        orderNowBtn.disabled = true;
        orderNowBtn.style.opacity = '0.5';
        orderNowBtn.style.cursor = 'not-allowed';
        orderNowBtn.style.pointerEvents = 'none';
        orderNowBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            showStoreClosedToast("Layanan sedang tutup, tidak bisa memesan", 'warning');
            return false;
        };
    }
    
    if (addToCartServiceBtn) {
        addToCartServiceBtn.disabled = true;
        addToCartServiceBtn.style.opacity = '0.5';
        addToCartServiceBtn.style.cursor = 'not-allowed';
        addToCartServiceBtn.style.pointerEvents = 'none';
        addToCartServiceBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            showStoreClosedToast("Layanan sedang tutup, tidak bisa menambah ke keranjang", 'warning');
            return false;
        };
    }
    
    quickBtns.forEach(btn => {
        if (btn) {
            btn.disabled = true;
            btn.style.opacity = '0.5';
            btn.style.cursor = 'not-allowed';
            btn.style.pointerEvents = 'none';
            btn.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                showStoreClosedToast("Layanan sedang tutup", 'info');
                return false;
            };
        }
    });
    
    if (qtyDecr) {
        qtyDecr.disabled = true;
        qtyDecr.style.opacity = '0.5';
        qtyDecr.style.cursor = 'not-allowed';
        qtyDecr.style.pointerEvents = 'none';
    }
    
    if (qtyIncr) {
        qtyIncr.disabled = true;
        qtyIncr.style.opacity = '0.5';
        qtyIncr.style.cursor = 'not-allowed';
        qtyIncr.style.pointerEvents = 'none';
    }
}

// MUTATION OBSERVER - Mendeteksi ketika modal muncul
function observeModalAppearance() {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const modal = mutation.target;
                if (modal.id === 'socialMediaModal' && modal.classList.contains('active')) {
                    // Modal muncul, disable tombolnya
                    setTimeout(disableModalButtons, 50);
                }
            }
        });
    });
    
    // Observasi perubahan class pada modal
    const socialMediaModal = document.getElementById('socialMediaModal');
    if (socialMediaModal) {
        observer.observe(socialMediaModal, { attributes: true });
    }
    
    // Juga observasi untuk modal yang mungkin dibuat dinamis
    const observerBody = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1) {
                    if (node.id === 'socialMediaModal' || (node.querySelector && node.querySelector('#socialMediaModal'))) {
                        const modal = node.id === 'socialMediaModal' ? node : node.querySelector('#socialMediaModal');
                        if (modal && modal.classList && modal.classList.contains('active')) {
                            setTimeout(disableModalButtons, 50);
                        }
                    }
                }
            });
        });
    });
    
    observerBody.observe(document.body, { childList: true, subtree: true });
}

// Modal informasi (layanan tutup)
function showStoreClosedInfo() {
    const modal = document.createElement('div');
    modal.id = 'storeClosedInfoModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.85);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(8px);
    `;
    modal.innerHTML = `
        <div style="background: var(--bg-card); border-radius: 32px; padding: 32px 24px; text-align: center; max-width: 340px; width: 85%; border: 1px solid rgba(239,68,68,0.3); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); animation: modalPremiumIn 0.4s cubic-bezier(0.21, 1.11, 0.35, 1);">
            <div style="font-size: 70px; margin-bottom: 8px; animation: iconPulse 1s ease infinite;">
                <i class="ri-store-3-line" style="color: var(--accent);"></i>
            </div>
            <h2 style="font-size: 22px; font-weight: 800; margin-bottom: 8px; background: linear-gradient(135deg, var(--accent), #f97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Layanan Sedang Tutup</h2>
            <div style="background: rgba(239,68,68,0.1); border-radius: 16px; padding: 12px; margin: 16px 0;">
                <p style="font-size: 12px; color: var(--text-secondary); margin-bottom: 4px;"><i class="ri-information-line"></i> Alasan</p>
                <p style="font-size: 13px; color: #f59e0b; font-weight: 500;">${CLOSE_REASON}</p>
            </div>
            <p style="font-size: 12px; color: var(--text-secondary); margin-bottom: 20px; line-height: 1.5;">${CLOSE_MESSAGE}</p>
            <div style="background: linear-gradient(135deg, rgba(59,130,246,0.15), rgba(239,68,68,0.1)); border-radius: 40px; padding: 12px; margin-bottom: 24px;">
                <div style="font-size: 11px; color: var(--text-secondary); margin-bottom: 6px;"><i class="ri-time-line"></i> Perkiraan Buka Kembali</div>
                <div style="font-size: 24px; font-weight: 800; color: #3b82f6;" id="storeEstimateTime">Jam ${ESTIMATED_OPEN_HOUR}</div>
                <div style="font-size: 10px; color: var(--text-secondary); margin-top: 4px;">WIB (GMT+7)</div>
            </div>
            <button id="closeStoreModalBtn" style="background: linear-gradient(90deg, var(--accent), var(--accent-hover)); border: none; padding: 12px 28px; border-radius: 40px; color: white; font-weight: 600; cursor: pointer; width: 100%; transition: transform 0.1s;">
                <i class="ri-check-line"></i> Mengerti
            </button>
        </div>
    `;
    document.body.appendChild(modal);
    
    document.getElementById('closeStoreModalBtn').addEventListener('click', function() {
        modal.remove();
    });
}

// Modal informasi saat layanan BUKA
function showStoreOpenInfo() {
    const hasSeenOpenModal = localStorage.getItem('store_open_modal_seen');
    if (hasSeenOpenModal === 'true') return;
    
    const modal = document.createElement('div');
    modal.id = 'storeOpenInfoModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.85);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(8px);
    `;
    modal.innerHTML = `
        <div style="background: var(--bg-card); border-radius: 32px; padding: 32px 24px; text-align: center; max-width: 340px; width: 85%; border: 1px solid rgba(34,197,94,0.3); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); animation: modalPremiumIn 0.4s cubic-bezier(0.21, 1.11, 0.35, 1);">
            <div style="font-size: 70px; margin-bottom: 8px; animation: iconPulse 1s ease infinite;">
                <i class="ri-store-3-line" style="color: #22c55e;"></i>
            </div>
            <h2 style="font-size: 22px; font-weight: 800; margin-bottom: 8px; background: linear-gradient(135deg, #22c55e, #10b981); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Layanan Kembali Buka</h2>
            <div style="background: rgba(34,197,94,0.1); border-radius: 16px; padding: 12px; margin: 16px 0;">
                <p style="font-size: 12px; color: var(--text-secondary); margin-bottom: 4px;"><i class="ri-checkbox-circle-line"></i> Status</p>
                <p style="font-size: 13px; color: #22c55e; font-weight: 500;">Layanan sudah buka, silakan order kembali</p>
            </div>
            <p style="font-size: 12px; color: var(--text-secondary); margin-bottom: 20px; line-height: 1.5;">YussXy Store kembali melayani orderan seperti biasa.</p>
            <button id="closeStoreOpenModalBtn" style="background: linear-gradient(90deg, #22c55e, #16a34a); border: none; padding: 12px 28px; border-radius: 40px; color: white; font-weight: 600; cursor: pointer; width: 100%; transition: transform 0.1s;">
                <i class="ri-shopping-cart-line"></i> Mulai Order
            </button>
        </div>
    `;
    document.body.appendChild(modal);
    
    localStorage.setItem('store_open_modal_seen', 'true');
    
    document.getElementById('closeStoreOpenModalBtn').addEventListener('click', function() {
        modal.remove();
    });
}

// Reset storage
function checkAndResetOpenModal() {
    const wasClosed = localStorage.getItem('was_store_closed');
    const currentClosed = STORE_CLOSED;
    
    if (wasClosed === 'true' && currentClosed === false) {
        localStorage.removeItem('store_open_modal_seen');
    }
    
    localStorage.setItem('was_store_closed', currentClosed);
}

// Nonaktifkan fitur pembelian
function disablePurchaseFeatures() {
    document.querySelectorAll('.btn-buy-now, .checkout-btn, .confirm-payment-btn, .app-buy-btn').forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.5';
        btn.style.cursor = 'not-allowed';
        btn.style.transform = 'none';
        btn.style.pointerEvents = 'none';
    });
    
    window.buyNow = function(productId) {
        showStoreClosedToast("Pembelian tidak dapat diproses, layanan sedang tutup", 'error');
        return false;
    };
    
    window.checkout = function() {
        showStoreClosedToast("Checkout tidak tersedia, layanan sedang tutup", 'warning');
        return false;
    };
    
    window.confirmPayment = function() {
        showStoreClosedToast("Pembayaran tidak dapat diproses", 'error');
        return false;
    };
    
    window.showProductDetail = function(productId) {
        showStoreClosedToast("Detail produk tidak dapat diakses, layanan sedang tutup", 'info');
        return false;
    };
    
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '0.7';
        card.style.cursor = 'not-allowed';
        card.onclick = (e) => {
            e.stopPropagation();
            showStoreClosedToast("Layanan sedang tutup, tidak bisa melihat detail produk", 'info');
            return false;
        };
    });
    
    // LANGSUNG DISABLE TOMBOL MODAL JIKA SUDAH ADA
    setTimeout(disableModalButtons, 100);
}

// Jalankan
document.addEventListener('DOMContentLoaded', function() {
    checkAndResetOpenModal();
    
    if (STORE_CLOSED) {
        disablePurchaseFeatures();
        showStoreClosedInfo();
        observeModalAppearance(); // Mulai observasi modal yang muncul
    } else {
        showStoreOpenInfo();
    }
});
