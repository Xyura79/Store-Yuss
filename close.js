
let storeStatus = {
    is_closed: false,
    reason: "",
    message: "",
    open_time: "13.00",
    title: ""
};

let isInitialized = false;

const API_STATUS_URL = "https://backend-delta-steel-38.vercel.app/api/store-setting";

async function fetchStoreStatusFromAPI() {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);
        
        const response = await fetch(API_STATUS_URL, {
            cache: "no-store",
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        
        const data = await response.json();
        
        if (data.success === true) {
            storeStatus = {
                is_closed: data.is_closed || false,
                reason: data.reason || "",
                message: data.message || "",
                open_time: data.open_time || "13.00",
                title: data.title || ""
            };
            return true;
        }
        return false;
    } catch (error) {
        console.error("Gagal ambil status toko:", error);
        return false;
    }
}

async function isStoreClosed() {
    await fetchStoreStatusFromAPI();
    return storeStatus.is_closed === true;
}

function getCloseReason() {
    return storeStatus.reason || "Sedang maintenance";
}

function getCloseMessage() {
    return storeStatus.message || "Haloo, Saya close dulu ya. Ini dilakukan untuk menghindari orderan yang lama diproses. Kamu masih bisa menggunakan tools di aplikasi ini kok";
}

function getEstimatedOpenTime() {
    return storeStatus.open_time || "13.00";
}

const TOAST_TEXT = "Layanan sedang tutup, tidak bisa memesan";

function showStoreClosedToast() {
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
            showStoreClosedToast();
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
            showStoreClosedToast();
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
                showStoreClosedToast();
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

async function showStoreClosedInfo() {
    // Selalu cek ulang dari API
    await fetchStoreStatusFromAPI();
    
    if (!storeStatus.is_closed) return;
    
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
    
    document.getElementById('closeStoreModalBtn').addEventListener('click', function() {
        modal.remove();
    });
}

async function showStoreOpenInfo() {
    // Selalu cek ulang dari API
    await fetchStoreStatusFromAPI();
    
    if (storeStatus.is_closed) return;
    
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
    
    document.getElementById('closeStoreOpenModalBtn').addEventListener('click', function() {
        modal.remove();
    });
}

function disablePurchaseFeatures() {
    document.querySelectorAll('.btn-buy-now, .checkout-btn, .confirm-payment-btn, .app-buy-btn').forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.5';
        btn.style.cursor = 'not-allowed';
        btn.style.transform = 'none';
        btn.style.pointerEvents = 'none';
    });
    
    window.buyNow = function(productId) {
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
    
    window.showProductDetail = function(productId) {
        showStoreClosedToast();
        return false;
    };
    
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '0.7';
        card.style.cursor = 'not-allowed';
        card.onclick = (e) => {
            e.stopPropagation();
            showStoreClosedToast();
            return false;
        };
    });
    
    setTimeout(disableModalButtons, 100);
}

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
        card.onclick = null;
    });
    
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

async function initStoreStatus() {
    if (typeof window.buyNow === 'function' && !window.originalBuyNow) {
        window.originalBuyNow = window.buyNow;
    }
    if (typeof window.checkout === 'function' && !window.originalCheckout) {
        window.originalCheckout = window.checkout;
    }
    if (typeof window.showProductDetail === 'function' && !window.originalShowProductDetail) {
        window.originalShowProductDetail = window.showProductDetail;
    }
    
    // Selalu ambil dari API, tidak pernah pakai cache
    const success = await fetchStoreStatusFromAPI();
    
    if (success && storeStatus.is_closed === true) {
        disablePurchaseFeatures();
        await showStoreClosedInfo();
        observeModalAppearance();
    } else {
        enablePurchaseFeatures();
        await showStoreOpenInfo();
    }
    
    isInitialized = true;
}

// Refresh status setiap 30 detik (tanpa reload halaman)
setInterval(async () => {
    if (isInitialized) {
        const oldStatus = storeStatus.is_closed;
        await fetchStoreStatusFromAPI();
        
        if (oldStatus !== storeStatus.is_closed) {
            console.log("🔄 Status toko berubah, refresh UI...");
            if (storeStatus.is_closed === true) {
                disablePurchaseFeatures();
                await showStoreClosedInfo();
            } else {
                enablePurchaseFeatures();
                await showStoreOpenInfo();
            }
        }
    }
}, 30000);

document.addEventListener('DOMContentLoaded', function() {
    initStoreStatus();
});

const styleSheet = document.createElement('style');
styleSheet.textContent = `
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
document.head.appendChild(styleSheet);
