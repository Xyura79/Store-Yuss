// ================================================
// STORE CLOSE / MAINTENANCE MODE
// ================================================

// ========== KONFIGURASI - UBAH DI SINI ==========
const STORE_CLOSED = false;  // true = tutup, false = buka
const CLOSE_MESSAGE = "Toko sedang tutup sementara. Silakan cek kembali nanti ya. 🙏";
// ================================================

let isStoreClosed = STORE_CLOSED;

// Modal informasi saat toko tutup (muncul pas buka apk)
function showStoreClosedInfo() {
    const modal = document.createElement('div');
    modal.id = 'storeClosedInfoModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(5px);
    `;
    modal.innerHTML = `
        <div style="background: var(--bg-card); border-radius: 24px; padding: 32px 24px; text-align: center; max-width: 300px; width: 85%; border: 1px solid var(--border); animation: fadeInScale 0.3s ease;">
            <div style="font-size: 64px; margin-bottom: 16px;">
                <i class="ri-store-3-line" style="color: var(--accent);"></i>
            </div>
            <h2 style="font-size: 20px; margin-bottom: 12px;">Toko Sedang Tutup</h2>
            <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 24px;">${CLOSE_MESSAGE}</p>
            <button onclick="this.closest('#storeClosedInfoModal').remove()" style="background: var(--accent); border: none; padding: 10px 24px; border-radius: 30px; color: white; font-weight: 600; cursor: pointer;">
                <i class="ri-check-line"></i> Mengerti
            </button>
        </div>
    `;
    document.body.appendChild(modal);
}

// Toast notifikasi saat coba belanja
function showStoreClosedToast() {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 120px;
        left: 50%;
        transform: translateX(-50%);
        background: #f59e0b;
        color: white;
        padding: 10px 20px;
        border-radius: 30px;
        font-size: 12px;
        z-index: 10001;
        white-space: nowrap;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        animation: fadeInUp 0.3s ease;
    `;
    toast.innerHTML = `<i class="ri-store-3-line"></i> ${CLOSE_MESSAGE}`;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'fadeOutDown 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// Nonaktifkan semua fitur pembelian
function disablePurchaseFeatures() {
    // Nonaktifkan tombol beli & keranjang
    document.querySelectorAll('.btn-buy-now, .btn-add-cart, .checkout-btn, .confirm-payment-btn, .app-buy-btn').forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.5';
        btn.style.pointerEvents = 'none';
    });
    
    // Override fungsi buyNow dan addToCart
    window.originalBuyNow = window.buyNow;
    window.originalAddToCart = window.addToCart;
    
    window.buyNow = function(productId) {
        showStoreClosedToast();
        return false;
    };
    
    window.addToCart = function(productId) {
        showStoreClosedToast();
        return false;
    };
    
    window.checkout = function() {
        showStoreClosedToast();
        return false;
    };
    
    window.confirmPayment = function() {
        showStoreClosedToast();
        return false;
    };
    
    // Halangi klik card produk
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '0.7';
        const originalClick = card.onclick;
        card.onclick = function(e) {
            e.stopPropagation();
            showStoreClosedToast();
            return false;
        };
        card.addEventListener('click', function(e) {
            e.stopPropagation();
            showStoreClosedToast();
        });
    });
}

// Jalankan saat halaman load
document.addEventListener('DOMContentLoaded', function() {
    if (STORE_CLOSED) {
        disablePurchaseFeatures();
        setTimeout(showStoreClosedInfo, 500);
    }
});
