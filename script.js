// ================================================
// DATA PRODUK
// ================================================
// ================================================
// BAGIAN PENAMBAHAN PRODUK
// Dibawah komentar ini adalah tempat untuk menambah produk baru
// Cukup copy format object produk dan tambahkan ke array products
// ================================================



























// ================================================
// DATA PRODUK - EDIT DI SINI UNTUK TAMBAH PRODUK
// ================================================
let products = [
    {
        id: 1,
        name: "Source Kode Downloader",
        description: "Source kode untuk web, desain simple, dan harga murah.",
        price: 2000,
        image: "https://files.catbox.moe/re7iam.jpg",
        category: "digital",
        type: "none"  // hot / rekomendasi / none / new
    },
    {
        id: 2,
        name: "Jasa Pembuatan Web Simple",
        description: "Pembuatan website sederhana sesuai kebutuhan. Harga bisa nego tergantung kompleksitas fitur.",
        price: "Rp 7000-10000",
        priceMin: 7000,
        priceMax: 10000,
        image: "https://files.catbox.moe/ys3iqg.jpg",
        category: "jasa",
        isNegotiable: true,
        type: "rekomendasi"
    },
    {
        id: 3,
        name: "Bot WhatsApp Custom",
        description: "Jasa Pembuatan Bot WhatsApp sesuai kebutuhan pembeli, Bisa request fitur yang diinginkan juga suport termux dan panel.",
        price: "Rp 10000-20000",
        priceMin: 10000,
        priceMax: 20000,
        image: "https://files.catbox.moe/a8q4wa.jpg",
        category: "jasa",
        isNegotiable: true,
        type: "none"
    },
    {
        id: 4,
        name: "Bot Telegram Custom",
        description: "Jasa pembuatan bot telegram, harga murmer, bisa request fitur, support panel dan termux",
        price: "Rp 5000-10000",
        priceMin: 5000,
        priceMax: 10000,
        image: "https://files.catbox.moe/25mumi.jpg",
        category: "jasa",
        isNegotiable: true,
        type: "none"
    },
{
        id: 5,
        name: "Panel Pterodactly",
        description: "Server yang Siap Hosting bot kamu, Anti delay, dan bergaransi",
        price: "Rp 1000",
        image: "https://files.catbox.moe/39j3x7.jpg",
        category: "digital",
        isNegotiable: false,
        type: "hot",
        hasVariant: true,
        variants: [
            { ram: "1GB", price: 1000, priceDisplay: "Rp 1.000" },
            { ram: "2GB", price: 2000, priceDisplay: "Rp 2.000" },
            { ram: "3GB", price: 3000, priceDisplay: "Rp 3.000" },
            { ram: "4GB", price: 4000, priceDisplay: "Rp 4.000" },
            { ram: "5GB", price: 5000, priceDisplay: "Rp 5.000" },
            { ram: "6GB", price: 6000, priceDisplay: "Rp 6.000" },
            { ram: "7GB", price: 7000, priceDisplay: "Rp 7.000" },
            { ram: "8GB", price: 8000, priceDisplay: "Rp 8.000" }
        ]
    },
{
        id: 6,
        name: "Jasa Buat Tools Termux",
        description: "Buat tools termux, harga menyesuaikan tergantung tools yang di buat, bebas request fitur, pengerjaan 1 hari",
        price: "Rp 3000",
        image: "https://files.catbox.moe/lt9rg5.jpg",
        category: "jasa",
        isNegotiable: false ,
        type: "new"
}












];

// ================================================
// KERANJANG & STATE
// ================================================
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentPage = 'products';

// ================================================
// HELPER FUNCTIONS
// ================================================
function formatPrice(price) {
    if (typeof price === 'string') return price;
    return `Rp ${price.toLocaleString('id-ID')}`;
}

function getDisplayPrice(product) {
    if (product.isNegotiable) {
        return `${product.price}`;
    }
    return formatPrice(product.price);
}

function getActualPrice(product) {
    if (product.isNegotiable) {
        return product.priceMin || 5000;
    }
    return product.price;
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadges();
}

function updateCartBadges() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartBadge = document.getElementById('cartBadge');
    const navBadge = document.getElementById('navBadge');
    const sidebarCartCount = document.getElementById('sidebarCartCount');
    
    if (cartBadge) cartBadge.textContent = totalItems;
    if (navBadge) navBadge.textContent = totalItems;
    if (sidebarCartCount) sidebarCartCount.textContent = totalItems;
}

function getCurrentDateTime() {
    const now = new Date();
    const jam = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    const tanggal = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long' });
    const tahun = now.getFullYear();
    return { jam, tanggal, tahun };
}

// ================================================
// CEK PRODUK HOT ATAU REKOMENDASI UNTUK BANNER
// ================================================

function checkAndShowHotBanner() {
    const hasHotProduct = products.some(p => p.type === 'hot');
    const hasRekomendasiProduct = products.some(p => p.type === 'rekomendasi');
    const hasNewProduct = products.some(p => p.type === 'new');
    const hotBanner = document.getElementById('hotBanner');
    
    if (hotBanner && (hasHotProduct || hasRekomendasiProduct || hasNewProduct)) {
        hotBanner.style.display = 'block';
        const bannerContent = hotBanner.querySelector('.hot-banner-content span');
        
        if (hasNewProduct && hasHotProduct && hasRekomendasiProduct) {
            bannerContent.textContent = 'HOT SALE! REKOMENDASI! PRODUK BARU! Belanja Sekarang!';
        } else if (hasNewProduct && hasHotProduct) {
            bannerContent.textContent = 'HOT SALE & PRODUK BARU! Jangan Lewatkan!';
        } else if (hasNewProduct && hasRekomendasiProduct) {
            bannerContent.textContent = 'REKOMENDASI & PRODUK BARU! Pilihan Terbaik!';
        } else if (hasNewProduct) {
            bannerContent.textContent = 'PRODUK BARU! Yang Paling Hits Saat Ini!';
        } else if (hasHotProduct && hasRekomendasiProduct) {
            bannerContent.textContent = 'HOT SALE & REKOMENDASI! Produk Pilihan Minggu Ini';
        } else if (hasHotProduct) {
            bannerContent.textContent = 'HOT SALE! Produk Paling Laris Minggu Ini';
        } else if (hasRekomendasiProduct) {
            bannerContent.textContent = 'REKOMENDASI! Produk Pilihan Kami Untukmu';
        }
    }
}




// ================================================
// WHATSAPP CONFIRMATION
// ================================================
function sendWhatsAppConfirmation(orderDetails) {
    const { jam, tanggal, tahun } = getCurrentDateTime();
    
    let message = `Halo *Yuss Xy 👋*%0A%0A`;
    message += `Saya ingin melakukan konfirmasi pembelian.%0A%0A`;
    message += `━━━━━━━━━━━━━━━%0A`;
    message += `📦 DETAIL PESANAN%0A`;
    message += `━━━━━━━━━━━━━━━%0A%0A`;
    message += `🛍️ ${orderDetails.items.map(item => `${item.name} (${item.quantity}x)`).join(', ')}%0A`;
    message += `📦 Jumlah : ${orderDetails.totalItems} Item%0A`;
    message += `💰 Total Harga : Rp ${orderDetails.totalPrice.toLocaleString('id-ID')}%0A`;
    message += `🕒 Waktu : ${jam} • ${tanggal} ${tahun}%0A%0A`;
    message += `━━━━━━━━━━━━━━━%0A%0A`;
    message += `✅ Pembayaran sudah saya lakukan.%0A%0A`;
    message += `Mohon dicek dan diproses ya 🙏%0A`;
    message += `Terima kasih.`;
    
    const phoneNumber = '6283183469343';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// ================================================
// WHATSAPP CHAT KE OWNER (untuk tanya harga)
// ================================================
function contactOwner(product) {
    const message = `Halo *Yuss Xy 👋*%0A%0A`;
    message += `Saya tertarik dengan produk:%0A`;
    message += `*${product.name}*%0A%0A`;
    if (product.isNegotiable) {
        message += `Bisa minta info harga lebih lanjut?%0A`;
    } else {
        message += `Saya ingin membeli produk ini.%0A`;
    }
    message += `Terima kasih.`;
    
    window.open(`https://wa.me/6283183469343?text=${message}`, '_blank');
}

// ================================================
// RENDER FUNCTIONS
// ================================================

// ================================================
// BAGIAN RENDER PRODUK - START
// Fungsi untuk menampilkan produk ke dalam grid
// 3 produk per baris (grid-template-columns: repeat(3, 1fr))
// ================================================

function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = products.map(product => {
        let badgeHtml = '';
        if (product.type === 'hot') {
            badgeHtml = '<div class="product-badge badge-hot"><i class="ri-fire-line"></i> HOT</div>';
        } else if (product.type === 'rekomendasi') {
            badgeHtml = '<div class="product-badge badge-rekomendasi"><i class="ri-star-line"></i> REKOMENDASI</div>';
        } else if (product.type === 'new') {
            badgeHtml = '<div class="product-badge badge-new"><i class="ri-flashlight-line"></i> NEW</div>';
        }
        
        return `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image-wrapper">
                    ${badgeHtml}
                    <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://placehold.co/300x300/333/white?text=Error'">
                </div>
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">${getDisplayPrice(product)}</div>
                    <div class="product-buttons">
                        <button class="btn-buy-now" onclick="event.stopPropagation(); buyNow(${product.id})">
                            <i class="ri-flashlight-line"></i> Beli
                        </button>
                        <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                            <i class="ri-shopping-cart-line"></i> Keranjang
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Tambah event klik untuk menampilkan modal detail
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const productId = parseInt(card.dataset.productId);
            showProductDetail(productId);
        });
    });
    
    // Update total produk di halaman info
    const totalProductsElem = document.getElementById('totalProducts');
    if (totalProductsElem) totalProductsElem.textContent = products.length;
    
    // Cek dan tampilkan banner hot/rekomendasi/new
    checkAndShowHotBanner();
}

// ================================================
// BAGIAN RENDER PRODUK - END
// ================================================

// ================================================
// SHOW PRODUCT DETAIL MODAL (UPDATE)
// ================================================
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    let priceDisplay = getDisplayPrice(product);
    let variantHtml = '';
    
    if (product.hasVariant) {
        priceDisplay = 'Pilih RAM';
        variantHtml = `
            <div class="variant-options" style="margin-top: 15px;">
                <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">Pilih Kapasitas RAM:</div>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
                    ${product.variants.map(variant => `
                        <button class="btn-add-cart" onclick="selectVariantAndBuy(${product.id}, ${variant.price}, '${variant.ram}')" style="padding: 8px; font-size: 11px;">
                            💾 ${variant.ram} - ${variant.priceDisplay}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    modalBody.innerHTML = `
        <img src="${product.image}" class="modal-product-image" onerror="this.src='https://placehold.co/300x300/333/white?text=Error'">
        <div class="modal-product-name">${product.name}</div>
        <div class="modal-product-price">${priceDisplay}</div>
        <div class="modal-product-desc">${product.description}</div>
        ${variantHtml}
        <div class="modal-buttons" style="margin-top: ${product.hasVariant ? '10px' : '20px'};">
            ${!product.hasVariant ? `
                <button class="btn-buy-now" onclick="buyNow(${product.id}); closeProductModal();">
                    <i class="ri-flashlight-line"></i> Beli Sekarang
                </button>
                <button class="btn-add-cart" onclick="addToCart(${product.id}); closeProductModal();">
                    <i class="ri-shopping-cart-line"></i> Tambah Keranjang
                </button>
            ` : ''}
        </div>
    `;
    
    modal.classList.add('active');
}
function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
}



// ================================================
// FUNGSI UNTUK VARIAN (PANEL PTERODACTLY)
// ================================================
function selectVariantAndBuy(productId, price, ram) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const productWithVariant = {
        ...product,
        price: price,
        variantName: ram,
        name: `${product.name} (${ram})`
    };
    
    // Langsung checkout dengan varian yang dipilih
    const totalPrice = price;
    
    const qrTotal = document.getElementById('qrTotal');
    if (qrTotal) qrTotal.textContent = formatPrice(totalPrice);
    
    const modal = document.getElementById('qrisModal');
    if (modal) modal.classList.add('active');
    
    window.pendingOrder = {
        items: [{ name: productWithVariant.name, quantity: 1 }],
        totalItems: 1,
        totalPrice: totalPrice
    };
    
    closeProductModal();
}

function selectVariantAndAddToCart(productId, price, ram) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const productWithVariant = {
        id: product.id,
        name: `${product.name} (${ram})`,
        price: price,
        image: product.image,
        quantity: 1
    };
    
    const existingItem = cart.find(item => item.id === product.id && item.name === productWithVariant.name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(productWithVariant);
    }
    
    saveCart();
    renderCart();
    showToast(`${productWithVariant.name} ditambahkan ke keranjang!`);
    closeProductModal();
}


// ================================================
// UPDATE FUNGSI BUY NOW
// ================================================
function buyNow(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    if (product.hasVariant) {
        showVariantModal(product, (selectedProduct) => {
            const totalPrice = selectedProduct.price;
            
            const qrTotal = document.getElementById('qrTotal');
            if (qrTotal) qrTotal.textContent = formatPrice(totalPrice);
            
            const modal = document.getElementById('qrisModal');
            if (modal) modal.classList.add('active');
            
            window.pendingOrder = {
                items: [{ name: selectedProduct.name, quantity: 1 }],
                totalItems: 1,
                totalPrice: totalPrice
            };
        });
        return;
    }
    
    const price = getActualPrice(product);
    const totalPrice = price;
    
    const qrTotal = document.getElementById('qrTotal');
    if (qrTotal) qrTotal.textContent = formatPrice(totalPrice);
    
    const modal = document.getElementById('qrisModal');
    if (modal) modal.classList.add('active');
    
    window.pendingOrder = {
        items: [{ name: product.name, quantity: 1 }],
        totalItems: 1,
        totalPrice: totalPrice
    };
}





// ================================================
// UPDATE FUNGSI ADD TO CART
// ================================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    if (product.hasVariant) {
        showVariantModal(product, (selectedProduct) => {
            const cartItem = {
                id: selectedProduct.id,
                name: selectedProduct.name,
                price: selectedProduct.price,
                image: selectedProduct.image,
                quantity: 1
            };
            
            const existingItem = cart.find(item => item.id === selectedProduct.id && item.name === selectedProduct.name);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push(cartItem);
            }
            
            saveCart();
            renderCart();
            showToast(`${selectedProduct.name} ditambahkan ke keranjang!`);
        });
        return;
    }
    
    const price = getActualPrice(product);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: price,
            image: product.image,
            quantity: 1
        });
    }
    
    saveCart();
    renderCart();
    showToast(`${product.name} ditambahkan ke keranjang!`);
}


function renderCart() {
    const cartContainer = document.getElementById('cartContainer');
    if (!cartContainer) return;
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <i class="ri-shopping-cart-line" style="font-size: 48px; margin-bottom: 16px; display: block;"></i>
                <p>Keranjang masih kosong</p>
                <p style="font-size: 12px; margin-top: 8px;">Yuk, belanja dulu!</p>
            </div>
        `;
        return;
    }
    
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    cartContainer.innerHTML = `
        ${cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" class="cart-item-image" onerror="this.src='https://placehold.co/60x60/333/white?text=Error'">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${formatPrice(item.price)}</div>
                    <div class="cart-item-actions">
                        <button class="cart-qty-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span class="cart-qty">${item.quantity}</span>
                        <button class="cart-qty-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">
                            <i class="ri-delete-bin-line"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('')}
        <div class="cart-total">
            <span>Total (${totalItems} item):</span>
            <span>${formatPrice(totalPrice)}</span>
        </div>
        <button class="checkout-btn" onclick="checkout()">
            <i class="ri-whatsapp-line"></i> Checkout & Konfirmasi
        </button>
    `;
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        renderCart();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
}

function checkout() {
    if (cart.length === 0) {
        showToast('Keranjang masih kosong!', true);
        return;
    }
    
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const qrTotal = document.getElementById('qrTotal');
    if (qrTotal) qrTotal.textContent = formatPrice(totalPrice);
    
    const modal = document.getElementById('qrisModal');
    if (modal) modal.classList.add('active');
    
    window.pendingOrder = {
        items: cart.map(item => ({ name: item.name, quantity: item.quantity })),
        totalItems: totalItems,
        totalPrice: totalPrice
    };
}
// ================================================
// BAGIAN FUNGSI KERANJANG - END
// ================================================

function confirmPayment() {
    if (window.pendingOrder) {
        sendWhatsAppConfirmation(window.pendingOrder);
        
        cart = [];
        saveCart();
        renderCart();
        
        const modal = document.getElementById('qrisModal');
        if (modal) modal.classList.remove('active');
        
        navigateToPage('products');
        
        showToast('Pesanan berhasil dikonfirmasi!');
        window.pendingOrder = null;
    }
}

function showToast(message, isError = false) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: ${isError ? '#ef4444' : '#10b981'};
        color: white;
        padding: 8px 16px;
        border-radius: 30px;
        font-size: 12px;
        z-index: 2000;
        white-space: nowrap;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

// ================================================
// NAVIGATION FUNCTIONS
// ================================================
function navigateToPage(pageName) {
    currentPage = pageName;
    
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(`${pageName}Page`).classList.add('active');
    
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === pageName) {
            item.classList.add('active');
        }
    });
    
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === pageName) {
            item.classList.add('active');
        }
    });
    
    if (pageName === 'cart') {
        renderCart();
    }
}

// ================================================
// SIDEBAR FUNCTIONS
// ================================================
function openSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (sidebar && overlay) {
        overlay.style.display = 'flex';
        setTimeout(() => sidebar.classList.add('open'), 10);
    }
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (sidebar && overlay) {
        sidebar.classList.remove('open');
        setTimeout(() => overlay.style.display = 'none', 300);
    }
}

// ================================================
// EVENT LISTENERS
// ================================================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCart();
    updateCartBadges();
    
    // Sidebar
    const menuIcon = document.getElementById('menuIcon');
    const closeSidebarBtn = document.getElementById('closeSidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    if (menuIcon) menuIcon.addEventListener('click', openSidebar);
    if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', (e) => {
        if (e.target === sidebarOverlay) closeSidebar();
    });
    
    // Sidebar navigation
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.addEventListener('click', () => {
            const page = item.dataset.page;
            if (page) navigateToPage(page);
            closeSidebar();
        });
    });
    
    // Bottom navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const page = item.dataset.page;
            if (page) navigateToPage(page);
        });
    });
    
    // Cart icon
    const cartIcon = document.getElementById('cartIcon');
    if (cartIcon) cartIcon.addEventListener('click', () => navigateToPage('cart'));
    
    // Modals close
    const closeModalBtn = document.getElementById('closeModal');
    const qrisModal = document.getElementById('qrisModal');
    const closeProductModalBtn = document.getElementById('closeProductModal');
    const productModal = document.getElementById('productModal');
    
    if (closeModalBtn) closeModalBtn.addEventListener('click', () => {
        if (qrisModal) qrisModal.classList.remove('active');
    });
    if (qrisModal) qrisModal.addEventListener('click', (e) => {
        if (e.target === qrisModal) qrisModal.classList.remove('active');
    });
    if (closeProductModalBtn) closeProductModalBtn.addEventListener('click', closeProductModal);
    if (productModal) productModal.addEventListener('click', (e) => {
        if (e.target === productModal) closeProductModal();
    });
    
    // Confirm payment
    const confirmBtn = document.getElementById('confirmPaymentBtn');
    if (confirmBtn) confirmBtn.addEventListener('click', confirmPayment);
    
    // Channel button
    const channelBtn = document.getElementById('channelBtn');
    if (channelBtn) {
        channelBtn.addEventListener('click', () => {
            window.open('https://whatsapp.com/channel/0029VbAgFKULSmbeJMLfmR3b', '_blank');
        });
    }
});












// ================================================
// VARIABEL UNTUK MENYIMPAN PRODUK YANG DIPILIH
// ================================================
let selectedVariantProduct = null;
let selectedVariantCallback = null;

// ================================================
// FUNGSI MENAMPILKAN MODAL VARIAN RAM
// ================================================
function showVariantModal(product, callback) {
    if (!product.hasVariant) {
        // Jika produk tidak punya varian, langsung jalankan callback
        callback(product);
        return;
    }
    
    selectedVariantProduct = product;
    selectedVariantCallback = callback;
    
    const modal = document.getElementById('variantModal');
    const variantBody = document.getElementById('variantBody');
    const productNameSpan = document.getElementById('variantProductName');
    
    productNameSpan.textContent = `Pilih RAM - ${product.name}`;
    
    variantBody.innerHTML = `
        <div class="variant-options">
            ${product.variants.map(variant => `
                <div class="variant-option" onclick="selectVariant(${variant.price}, '${variant.ram}')">
                    <span class="variant-ram">📀 ${variant.ram} RAM</span>
                    <span class="variant-price">${variant.priceDisplay}</span>
                </div>
            `).join('')}
        </div>
    `;
    
    modal.classList.add('active');
}

function selectVariant(price, ram) {
    if (selectedVariantProduct && selectedVariantCallback) {
        // Buat produk sementara dengan harga sesuai varian
        const productWithVariant = {
            ...selectedVariantProduct,
            price: price,
            variantName: ram,
            description: `${selectedVariantProduct.description}\nRAM: ${ram}`
        };
        
        selectedVariantCallback(productWithVariant);
        
        // Tutup modal varian
        const modal = document.getElementById('variantModal');
        modal.classList.remove('active');
        
        // Reset variables
        selectedVariantProduct = null;
        selectedVariantCallback = null;
    }
}

function closeVariantModal() {
    const modal = document.getElementById('variantModal');
    modal.classList.remove('active');
    selectedVariantProduct = null;
    selectedVariantCallback = null;
}


// ================================================
// FUNGSI GET DATE TIME (pastikan sudah ada)
// ================================================
function getCurrentDateTime() {
    const now = new Date();
    const jam = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    const tanggal = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long' });
    const tahun = now.getFullYear();
    return { jam, tanggal, tahun };
}

// ================================================
// FITUR CHAT OWNER - START
// ================================================
function chatWithOwner() {
    const phoneNumber = '6283183469343';
    const { jam, tanggal, tahun } = getCurrentDateTime();
    
    // Perbaikan: gunakan template string dengan benar
    let message = "Halo *Yuss Xy 👋*%0A%0A";
    message += "Saya tertarik dengan produk di *YussXy Store*.%0A%0A";
    message += "━━━━━━━━━━━━━━━%0A";
    message += "📋 INFORMASI%0A";
    message += "━━━━━━━━━━━━━━━%0A%0A";
    message += "🕒 Waktu : " + jam + " • " + tanggal + " " + tahun + "%0A%0A";
    message += "Saya ingin bertanya tentang produk yang dijual.%0A%0A";
    message += "Mohon infonya ya 🙏%0A";
    message += "Terima kasih.";
    
    // Debug: cek apakah fungsi dipanggil
    console.log("Chat owner diklik, membuka WhatsApp...");
    
    // Buka WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// ================================================
// EVENT LISTENER SETELAH DOM LOAD
// ================================================
document.addEventListener('DOMContentLoaded', function() {
    // Chat owner button
    const chatBtn = document.getElementById('chatOwnerBtn');
    if (chatBtn) {
        console.log("Tombol chat owner ditemukan");
        chatBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            chatWithOwner();
        });
    } else {
        console.log("Tombol chat owner TIDAK ditemukan");
    }
    
    // Sidebar chat button (jika ada)
    const sidebarChatBtn = document.getElementById('sidebarChatBtn');
    if (sidebarChatBtn) {
        sidebarChatBtn.addEventListener('click', function() {
            chatWithOwner();
            closeSidebar();
        });
    }
});
// ================================================
// FITUR CHAT OWNER - END
// ================================================
























// ================================================
// EXPORT FUNCTIONS FOR GLOBAL ACCESS
// ================================================
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.checkout = checkout;
window.confirmPayment = confirmPayment;
window.buyNow = buyNow;
window.showProductDetail = showProductDetail;
window.closeProductModal = closeProductModal;