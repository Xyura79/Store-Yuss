
// ================================================
// STORE CLOSE / MAINTENANCE MODE (PREMIUM)
// Ambil data dari API Vercel
// ================================================

// API Endpoints (sama dengan admin panel)
const API_STATUS_URL = "https://backend-delta-steel-38.vercel.app/api/store-setting";

// Variabel global untuk status toko
let storeStatus = {
    is_closed: false,
    reason: "",
    message: "",
    open_time: "13.00",
    title: ""
};

// ========== FUNGSI AMBIL STATUS DARI API ==========
async function fetchStoreStatusFromAPI() {
    try {
        const response = await fetch(API_STATUS_URL, {
            cache: "no-store"
        });
        const data = await response.json();

        console.log("📦 Store status dari API:", data);

        if (data.success === true) {
            storeStatus = {
                is_closed: data.is_closed || false,
                reason: data.reason || "",
                message: data.message || "Layanan sedang tutup",
                open_time: data.open_time || "13.00",
                title: data.title || ""
            };
            return true;
        } else {
            console.error("API response error:", data);
            return false;
        }
    } catch (error) {
        console.error("❌ Gagal ambil status toko:", error);
        return false;
    }
}

// ========== FUNGSI CEK APAKAH TOKO TUTUP ==========
async function isStoreClosed() {
    await fetchStoreStatusFromAPI();
    return storeStatus.is_closed === true;
}

// ========== GETTER UNTUK DATA ==========
function getCloseReason() {
    return storeStatus.reason || "Sedang maintenance";
}

function getCloseMessage() {
    return storeStatus.message || "Haloo, Saya close dulu ya. Ini dilakukan untuk menghindari orderan yang lama diproses. Kamu masih bisa menggunakan tools di aplikasi ini kok";
}

function getEstimatedOpenTime() {
    return storeStatus.open_time || "13.00";
}

// ========== TOAST NOTIFIKASI ==========
// ========== TOAST NOTIFIKASI (UKURAN KECIL) ==========



// ========== TEKS TOAST (BUATAN SENDIRI, BUKAN DARI API) ==========
const TOAST_TEXT = "Layanan sedang tutup, tidak bisa memesan";

// ========== TOAST NOTIFIKASI UKURAN KECIL ==========
function showStoreClosedToast() {
    // Hapus toast yang sudah ada sebelumnya
    const existingToast = document.querySelector('.custom-toast-closed');
    if (existingToast) existingToast.remove();
    
    const toast = document.createElement('div');
    toast.className = 'custom-toast-closed';
    toast.style.cssText = `
        position: fixed;
        bottom: 90px;
        left: 50%;
        transform: translateX(-50%);
        background: #f59e0b;
        color: white;
        padding: 8px 16px;
        border-radius: 24px;
        font-size: 11px;
        font-weight: 500;
        z-index: 10001;
        white-space: nowrap;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        gap: 6px;
        opacity: 0;
        transition: opacity 0.2s ease;
    `;
    toast.innerHTML = `<i class="ri-store-3-line" style="font-size: 14px;"></i> ${TOAST_TEXT}`;
    document.body.appendChild(toast);
    
    setTimeout(() => { toast.style.opacity = '1'; }, 10);
    
    if (navigator.vibrate) navigator.vibrate(30);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 200);
    }, 2000);
}



// ========== NONAKTIFKAN TOMBOL DI MODAL ==========
function disableModalButtons() {
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
            showStoreClosedToast(getCloseMessage(), 'warning');
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
            showStoreClosedToast(getCloseMessage(), 'warning');
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
                showStoreClosedToast(getCloseMessage(), 'info');
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

// ========== OBSERVER MODAL ==========
function observeModalAppearance() {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const modal = mutation.target;
                if (modal.id === 'socialMediaModal' && modal.classList.contains('active')) {
                    setTimeout(disableModalButtons, 50);
                }
            }
        });
    });
    
    const socialMediaModal = document.getElementById('socialMediaModal');
    if (socialMediaModal) {
        observer.observe(socialMediaModal, { attributes: true });
    }
    
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

// ========== MODAL INFORMASI TOKO TUTUP ========




// ========== MODAL INFORMASI TOKO TUTUP ==========
function showStoreClosedInfo() {
    // Cek apakah modal sudah pernah ditampilkan di session ini
    if (sessionStorage.getItem('store_closed_modal_shown') === 'true') return;
    
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
                <p style="font-size: 13px; color: #f59e0b; font-weight: 500;">${getCloseReason()}</p>
            </div>
            <p style="font-size: 12px; color: var(--text-secondary); margin-bottom: 20px; line-height: 1.5;">${getCloseMessage()}</p>
            <div style="background: linear-gradient(135deg, rgba(59,130,246,0.15), rgba(239,68,68,0.1)); border-radius: 40px; padding: 12px; margin-bottom: 24px;">
                <div style="font-size: 11px; color: var(--text-secondary); margin-bottom: 6px;"><i class="ri-time-line"></i> Perkiraan Buka Kembali</div>
                <div style="font-size: 24px; font-weight: 800; color: #3b82f6;" id="storeEstimateTime">Jam ${getEstimatedOpenTime()}</div>
                <div style="font-size: 10px; color: var(--text-secondary); margin-top: 4px;">WIB (GMT+7)</div>
            </div>
            <button id="closeStoreModalBtn" style="background: linear-gradient(90deg, var(--accent), var(--accent-hover)); border: none; padding: 12px 28px; border-radius: 40px; color: white; font-weight: 600; cursor: pointer; width: 100%; transition: transform 0.1s;">
                <i class="ri-check-line"></i> Mengerti
            </button>
        </div>
    `;
    document.body.appendChild(modal);
    
    sessionStorage.setItem('store_closed_modal_shown', 'true');
    
    document.getElementById('closeStoreModalBtn').addEventListener('click', function() {
        modal.remove();
    });
}





// ========== MODAL INFORMASI TOKO BUKA ==========
function showStoreOpenInfo() {
    const hasSeenOpenModal = sessionStorage.getItem('store_open_modal_seen');
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
    
    sessionStorage.setItem('store_open_modal_seen', 'true');
    
    document.getElementById('closeStoreOpenModalBtn').addEventListener('click', function() {
        modal.remove();
    });
}

// ========== NONAKTIFKAN FITUR PEMBELIAN ==========
function disablePurchaseFeatures() {
    document.querySelectorAll('.btn-buy-now, .checkout-btn, .confirm-payment-btn, .app-buy-btn').forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.5';
        btn.style.cursor = 'not-allowed';
        btn.style.transform = 'none';
        btn.style.pointerEvents = 'none';
    });
    
    // Override fungsi global
    window.buyNow = function(productId) {
        showStoreClosedToast(getCloseMessage(), 'error');
        return false;
    };
    
    window.checkout = function() {
        showStoreClosedToast(getCloseMessage(), 'warning');
        return false;
    };
    
    window.confirmPayment = function() {
        showStoreClosedToast("Pembayaran tidak dapat diproses", 'error');
        return false;
    };
    
    window.showProductDetail = function(productId) {
        showStoreClosedToast(getCloseMessage(), 'info');
        return false;
    };
    
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '0.7';
        card.style.cursor = 'not-allowed';
        card.onclick = (e) => {
            e.stopPropagation();
            showStoreClosedToast(getCloseMessage(), 'info');
            return false;
        };
    });
    
    setTimeout(disableModalButtons, 100);
}

// ========== RESET FITUR PEMBELIAN (SAAT TOKO BUKA) ==========
function enablePurchaseFeatures() {
    document.querySelectorAll('.btn-buy-now, .checkout-btn, .confirm-payment-btn, .app-buy-btn').forEach(btn => {
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.style.cursor = 'pointer';
        btn.style.pointerEvents = 'auto';
    });
    
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '1';
        card.style.cursor = 'pointer';
        // Hapus override onclick
        card.onclick = null;
    });
    
    // Reload ulang fungsi asli dari script.js
    if (typeof window.originalBuyNow === 'function') {
        window.buyNow = window.originalBuyNow;
    }
    if (typeof window.originalCheckout === 'function') {
        window.checkout = window.originalCheckout;
    }
    if (typeof window.originalShowProductDetail === 'function') {
        window.showProductDetail = window.originalShowProductDetail;
    }
}

// ========== INISIALISASI UTAMA ==========
async function initStoreStatus() {
    // Simpan fungsi asli
    if (typeof window.buyNow === 'function' && !window.originalBuyNow) {
        window.originalBuyNow = window.buyNow;
    }
    if (typeof window.checkout === 'function' && !window.originalCheckout) {
        window.originalCheckout = window.checkout;
    }
    if (typeof window.showProductDetail === 'function' && !window.originalShowProductDetail) {
        window.originalShowProductDetail = window.showProductDetail;
    }
    
    // Ambil status dari API
    const success = await fetchStoreStatusFromAPI();
    
    if (success && storeStatus.is_closed === true) {
        console.log("🔒 Toko dalam mode TUTUP");
        disablePurchaseFeatures();
        showStoreClosedInfo();
        observeModalAppearance();
    } else {
        console.log("🔓 Toko dalam mode BUKA");
        enablePurchaseFeatures();
        showStoreOpenInfo();
    }
}

// Jalankan saat DOM siap
document.addEventListener('DOMContentLoaded', function() {
    initStoreStatus();
});

// Tambahkan animasi CSS jika belum ada
const style = document.createElement('style');
style.textContent = `
    @keyframes toastPremiumIn {
        0% { opacity: 0; transform: translateX(-50%) translateY(20px); }
        100% { opacity: 1; transform: translateX(-50%) translateY(0); }
    }
    @keyframes toastPremiumOut {
        0% { opacity: 1; transform: translateX(-50%) translateY(0); }
        100% { opacity: 0; transform: translateX(-50%) translateY(20px); }
    }
    @keyframes modalPremiumIn {
        0% { opacity: 0; transform: scale(0.95); }
        100% { opacity: 1; transform: scale(1); }
    }
    @keyframes iconPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    .animate-spin {
        animation: spin 1s linear infinite;
    }
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);
