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
        name: "Transfer ke DANA",
        description: "Pengen transfer saldo dana ke temen, tapi dana belum premium, tenang yuss xy menyediakan layanan transfer, dengan biaya admin 1.000(1k) tiap transfer berapapun, minimal transfer 5.000(5k).",
        price: "Rp 5.000",
        image: "https://placehold.co/300x300/0085FF/white?text=DANA",
        category: "jasa",
        type: "hot",
        isTransferService: true,
        minTransfer: 5000,
        adminFee: 1000,
        transferMessage: "Masukkan nomor DANA tujuan dan jumlah transfer (minimal Rp5.000)"
    },
    {
        id: 2,
        name: "Source Kode Downloader",
        description: "Source kode untuk web, desain simple, dan harga murah.",
        price: 2000,
        image: "https://files.catbox.moe/re7iam.jpg",
        category: "digital",
        type: "none"  // hot / rekomendasi / none / new / sold_out / coming_soon
    },
    {
        id: 3,
        name: "Jasa Pembuatan Web Simple",
        description: "Pembuatan website sederhana sesuai kebutuhan. Harga bisa nego tergantung kompleksitas fitur.",
        price: "Rp 7.000",
        priceMin: 7000,
        priceMax: 10000,
        image: "https://files.catbox.moe/ys3iqg.jpg",
        category: "jasa",
        isNegotiable: true,
        type: "rekomendasi"
    },
    {
        id: 4,
        name: "Bot WhatsApp Custom",
        description: "Jasa Pembuatan Bot WhatsApp sesuai kebutuhan pembeli, Bisa request fitur yang diinginkan juga suport termux dan panel.",
        price: "Rp 10.000",
        priceMin: 10000,
        priceMax: 20000,
        image: "https://files.catbox.moe/a8q4wa.jpg",
        category: "jasa",
        isNegotiable: true,
        type: "hot"
    },
    {
        id: 5,
        name: "Bot Telegram Custom",
        description: "Jasa pembuatan bot telegram, harga murmer, bisa request fitur, support panel dan termux",
        price: "Rp 5.000",
        priceMin: 5000,
        priceMax: 10000,
        image: "https://files.catbox.moe/25mumi.jpg",
        category: "jasa",
        isNegotiable: true,
        type: "none"
    },
{
        id: 6,
        name: "Panel Pterodactly",
        description: "Server yang Siap Hosting bot kamu, Anti delay, dan bergaransi",
        price: "Rp 1.000",
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
        id: 7,
        name: "Jasa Buat Tools Termux",
        description: "Buat tools termux, harga menyesuaikan tergantung tools yang di buat, bebas request fitur, pengerjaan 1 hari",
        price: "Rp 5.000",
        image: "https://files.catbox.moe/lt9rg5.jpg",
        category: "jasa",
        isNegotiable: false ,
        type: "none"
},
{
        id: 8,
        name: "Viu Premium",
        description: "Aplikasi Viu Premium",
        price: "Rp 5.000",
        image: "https://files.catbox.moe/dhoyx1.jpg",
        category: "digital",
        isNegotiable: false,
        type: "coming_soon"
},
{
        id: 9,
        name: "Alight Motion Premium",
        description: "Am Premium 1 tahun (Expired 7 Januari 2027)",
        price: "Rp 5.000",
        image: "https://files.catbox.moe/0o1hmt.jpg",
        category: "digital",
        isNegotiable:true ,
        type: "coming_soon"
},
{
        id: 10,
        name: "Canva Premium",
        description: "Canva premium permanen",
        price: "Rp 25.000",
        image: "https://files.catbox.moe/evbhw1.jpg",
        category: "digital",
        isNegotiable: true,
        type: "coming_soon"
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
            bannerContent.textContent = 'HOT SALE! REKOMENDASI! Belanja Sekarang!';
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




function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = products.map(product => {
        let badgeHtml = '';
        let disabledClass = '';
        let disabledBuy = '';
        let disabledCart = '';
        
        // Tentukan badge dan status
        if (product.type === 'hot') {
            badgeHtml = '<div class="product-badge badge-hot"><i class="ri-fire-line"></i> HOT</div>';
        } else if (product.type === 'rekomendasi') {
            badgeHtml = '<div class="product-badge badge-rekomendasi"><i class="ri-star-line"></i> REKOMENDASI</div>';
        } else if (product.type === 'new') {
            badgeHtml = '<div class="product-badge badge-new"><i class="ri-flashlight-line"></i> NEW</div>';
        } else if (product.type === 'sold_out') {
            badgeHtml = '<div class="product-badge badge-sold"><i class="ri-close-circle-line"></i> HABIS</div>';
            disabledClass = 'product-disabled';
            disabledBuy = 'disabled';
            disabledCart = 'disabled';
        } else if (product.type === 'coming_soon') {
            badgeHtml = '<div class="product-badge badge-coming"><i class="ri-time-line"></i> SEGERA</div>';
            disabledClass = 'product-disabled';
            disabledBuy = 'disabled';
            disabledCart = 'disabled';
        }
        
        return `
            <div class="product-card ${disabledClass}" data-product-id="${product.id}">
                <div class="product-image-wrapper">
                    ${badgeHtml}
                    <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://placehold.co/300x300/333/white?text=Error'">
                </div>
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">${getDisplayPrice(product)}</div>
                    <div class="product-buttons">
                        <button class="btn-buy-now" onclick="event.stopPropagation(); ${product.type === 'sold_out' ? 'showSoldOutMessage(' + product.id + ')' : (product.type === 'coming_soon' ? 'showComingSoonMessage(' + product.id + ')' : 'buyNow(' + product.id + ')')}" ${disabledBuy}>
                            <i class="ri-flashlight-line"></i> Beli
                        </button>
                        <button class="btn-add-cart" onclick="event.stopPropagation(); ${product.type === 'sold_out' ? 'showSoldOutMessage(' + product.id + ')' : (product.type === 'coming_soon' ? 'showComingSoonMessage(' + product.id + ')' : 'addToCart(' + product.id + ')')}" ${disabledCart}>
                            <i class="ri-shopping-cart-line"></i> Keranjang
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Event klik untuk menampilkan modal detail
    document.querySelectorAll('.product-card:not(.product-disabled)').forEach(card => {
        card.addEventListener('click', (e) => {
            const productId = parseInt(card.dataset.productId);
            showProductDetail(productId);
        });
    });
    
    const totalProductsElem = document.getElementById('totalProducts');
    if (totalProductsElem) totalProductsElem.textContent = products.length;
    
    checkAndShowHotBanner();
}

// Fungsi untuk produk habis
function showSoldOutMessage(productId) {
    const product = products.find(p => p.id === productId);
    if (product && product.soldOutMessage) {
        showToast(product.soldOutMessage, true);
    } else {
        showToast('Maaf, produk ini sedang habis. Akan tersedia lagi dalam beberapa hari.', true);
    }
}

// Fungsi untuk produk belum tersedia
function showComingSoonMessage(productId) {
    const product = products.find(p => p.id === productId);
    if (product && product.comingSoonMessage) {
        showToast(product.comingSoonMessage, true);
    } else {
        showToast('Fitur ini akan segera hadir! Tunggu update selanjutnya ya.', true);
    }
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
    console.log("buyNow dipanggil untuk ID:", productId); // Untuk debugging
    
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.log("Produk tidak ditemukan!");
        return;
    }
    
    console.log("Produk:", product.name);
    
    // CEK APAKAH LAYANAN TRANSFER
    if (product.isTransferService) {
        console.log("Ini produk transfer");
        showTransferForm(product);
        return;
    }
    
    // CEK APAKAH PRODUK PUNYA VARIAN RAM
    if (product.hasVariant) {
        console.log("Ini produk dengan varian");
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
    
    // PRODUK BIASA (LANGSUNG QRIS)
    console.log("Produk biasa, langsung QRIS");
    const price = getActualPrice(product);
    const totalPrice = typeof price === 'number' ? price : 5000;
    
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
// FORM TRANSFER (SEBELUM KONFIRMASI WA)
// ================================================
function showTransferForm(product) {
    const modal = document.getElementById('transferModal');
    const transferNomor = document.getElementById('transferNomor');
    const transferJumlah = document.getElementById('transferJumlah');
    const totalBayarSpan = document.getElementById('totalBayar');
    const detailBayar = document.getElementById('detailBayar');
    const modalTitle = document.querySelector('#transferModal .modal-header h3');
    
    if (!modal) return;
    
    // Set judul
    if (modalTitle) modalTitle.innerHTML = '<i class="ri-bank-card-line"></i> Transfer ke DANA';
    
    // Reset form
    if (transferNomor) transferNomor.value = '';
    if (transferJumlah) transferJumlah.value = '';
    if (totalBayarSpan) totalBayarSpan.textContent = 'Rp 0';
    if (detailBayar) detailBayar.innerHTML = '';
    
    // Simpan product ke variable global
    window.currentTransferProduct = product;
    
    // Event hitung otomatis
    if (transferJumlah) {
        transferJumlah.oninput = function() {
            let jumlah = parseInt(this.value);
            if (isNaN(jumlah)) jumlah = 0;
            
            const adminFee = product.adminFee || 1000;
            const total = jumlah + adminFee;
            
            if (totalBayarSpan) totalBayarSpan.textContent = `Rp ${total.toLocaleString('id-ID')}`;
            
            if (detailBayar) {
                if (jumlah >= (product.minTransfer || 5000)) {
                    detailBayar.innerHTML = `💰 Transfer: Rp ${jumlah.toLocaleString('id-ID')} + Admin: Rp ${adminFee.toLocaleString('id-ID')}`;
                    detailBayar.style.color = '#10b981';
                } else if (jumlah > 0 && jumlah < (product.minTransfer || 5000)) {
                    detailBayar.innerHTML = `⚠️ Minimal transfer Rp${(product.minTransfer || 5000).toLocaleString('id-ID')}`;
                    detailBayar.style.color = '#ef4444';
                } else {
                    detailBayar.innerHTML = '';
                }
            }
        };
    }
    
    modal.classList.add('active');
}

// ================================================
// EVENT LISTENER UNTUK TOMBOL LANJUT KE PEMBAYARAN
// ================================================
const showQrisBtn = document.getElementById('showQrisBtn');
if (showQrisBtn) {
    showQrisBtn.addEventListener('click', function() {
        const nomor = document.getElementById('transferNomor').value.trim();
        const jumlah = parseInt(document.getElementById('transferJumlah').value);
        const product = window.currentTransferProduct;
        
        if (!nomor) {
            showToast('❌ Masukkan nomor DANA tujuan!', true);
            return;
        }
        
        if (!jumlah || isNaN(jumlah)) {
            showToast('❌ Masukkan jumlah transfer!', true);
            return;
        }
        
        const minTransfer = product?.minTransfer || 5000;
        if (jumlah < minTransfer) {
            showToast(`❌ Minimal transfer Rp${minTransfer.toLocaleString('id-ID')}!`, true);
            return;
        }
        
        const adminFee = product?.adminFee || 1000;
        const total = jumlah + adminFee;
        
        // Simpan data transfer
        window.pendingTransfer = {
            nomor: nomor,
            jumlah: jumlah,
            adminFee: adminFee,
            total: total
        };
        
        // Tampilkan QRIS
        const qrisSection = document.getElementById('transferQrisSection');
        const qrisTotal = document.getElementById('transferQrisTotal');
        
        if (qrisSection) qrisSection.style.display = 'block';
        if (qrisTotal) qrisTotal.textContent = `Total: Rp ${total.toLocaleString('id-ID')}`;
        
        // Sembunyikan tombol "Lanjut ke Pembayaran", tampilkan tombol konfirmasi
        document.getElementById('showQrisBtn').style.display = 'none';
        document.getElementById('transferConfirmBtn').style.display = 'flex';
        
        showToast('✅ Silakan scan QRIS untuk pembayaran');
    });
}

// ================================================
// EVENT LISTENER UNTUK TOMBOL KONFIRMASI
// ================================================
const transferConfirmBtn = document.getElementById('transferConfirmBtn');
if (transferConfirmBtn) {
    transferConfirmBtn.addEventListener('click', function() {
        if (!window.pendingTransfer) {
            showToast('❌ Data tidak ditemukan', true);
            return;
        }
        
        const transfer = window.pendingTransfer;
        
        const message = `Halo *Yuss Xy 👋*%0a%0a` +
            `Saya ingin menggunakan layanan *Transfer ke DANA*.%0a%0a` +
            `━━━━━━━━━━━━━━━%0a` +
            `📦 DETAIL TRANSFER%0a` +
            `━━━━━━━━━━━━━━━%0a%0a` +
            `📱 Nomor Tujuan: *${transfer.nomor}*%0a` +
            `💰 Jumlah Transfer: *Rp ${transfer.jumlah.toLocaleString('id-ID')}*%0a` +
            `💸 Biaya Admin: *Rp ${transfer.adminFee.toLocaleString('id-ID')}*%0a` +
            `💎 Total Bayar: *Rp ${transfer.total.toLocaleString('id-ID')}*%0a%0a` +
            `━━━━━━━━━━━━━━━%0a%0a` +
            `✅ Pembayaran sudah saya lakukan.%0a%0a` +
            `Mohon diproses. Terima kasih.%0a`;
        
        window.open(`https://wa.me/6283183469343?text=${message}`, '_blank');
        
        // Reset dan tutup modal
        window.pendingTransfer = null;
        document.getElementById('transferModal').classList.remove('active');
        document.getElementById('transferQrisSection').style.display = 'none';
        document.getElementById('showQrisBtn').style.display = 'flex';
        document.getElementById('transferConfirmBtn').style.display = 'none';
        document.getElementById('transferNomor').value = '';
        document.getElementById('transferJumlah').value = '';
        
        showToast('✅ Permintaan transfer terkirim');
    });
}

// ================================================
// EVENT LISTENER UNTUK TOMBOL CLOSE
// ================================================
// UPDATE FUNGSI CLOSE MODAL TRANSFER DENGAN ANIMASI
const closeTransferModalBtn = document.getElementById('closeTransferModalBtn');
if (closeTransferModalBtn) {
    closeTransferModalBtn.addEventListener('click', function() {
        const modal = document.getElementById('transferModal');
        
        // Tambah class closing untuk animasi
        modal.classList.add('closing');
        
        setTimeout(() => {
            modal.classList.remove('active');
            modal.classList.remove('closing');
            
            // Reset form
            document.getElementById('transferQrisSection').style.display = 'none';
            document.getElementById('showQrisBtn').style.display = 'flex';
            document.getElementById('transferConfirmBtn').style.display = 'none';
            window.pendingTransfer = null;
        }, 250);
    });
}





// ================================================
// EVENT LISTENER UNTUK TOMBOL SUBMIT
// ================================================
const transferSubmitBtn = document.getElementById('transferSubmitBtn');
if (transferSubmitBtn) {
    transferSubmitBtn.addEventListener('click', submitTransfer);
}

// Close modal transfer
const closeTransferModal = document.getElementById('closeTransferModal');
if (closeTransferModal) {
    closeTransferModal.addEventListener('click', function() {
        const modal = document.getElementById('transferModal');
        if (modal) modal.classList.remove('active');
    });
}





// ================================================
// UPDATE FUNGSI ADD TO CART
// ================================================

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    

    
    // CEK VARIAN
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
    
    // PRODUK BIASA
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
                <p style="font-size: 12px; margin-top: 8px;">Silahkan Pilih Pilih Produk Nya</p>
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
// BAGIAN FUNGSI TUTUP MODAL DENGAN ANIMASI
// ================================================
function closeModalWithAnimation(modalElement) {
    modalElement.classList.add('closing');
    setTimeout(function() {
        modalElement.classList.remove('active', 'closing');
    }, 200);
}

// Update fungsi closeProductModal
function closeProductModal() {
    const modal = document.getElementById('productModal');
    closeModalWithAnimation(modal);
}

// Update fungsi closeModal (QRIS)
// Cari fungsi yang menutup modal QRIS, ganti jadi:
function closeQrisModal() {
    const modal = document.getElementById('qrisModal');
    closeModalWithAnimation(modal);
}



//😉🙏😊🙏😊🙏😊🙏😊🙏😊🙏
//tools area 😊🤩😉🤩


// ================================================
// FUNGSI BUKA DAN TUTUP TOOL (DIPERBAIKI)
// ================================================

function openTool(toolName) {
    document.getElementById('toolsGrid').style.display = 'none';
    document.getElementById('toolDetailArea').style.display = 'block';
    
    const tools = ['toolTiktok', 'toolYoutube', 'toolSpotify', 'toolFacebook', 'toolCapcut', 'toolInstagram', 'toolFakelobby', 'toolFakedana', 'toolFakelobbyml', 'toolFakejago', 'toolPassword'];
    tools.forEach(tool => {
        const el = document.getElementById(tool);
        if (el) el.style.display = 'none';
    });
    
    if (toolName === 'tiktok') document.getElementById('toolTiktok').style.display = 'block';
    else if (toolName === 'youtube') document.getElementById('toolYoutube').style.display = 'block';
    else if (toolName === 'spotify') document.getElementById('toolSpotify').style.display = 'block';
    else if (toolName === 'facebook') document.getElementById('toolFacebook').style.display = 'block';
    else if (toolName === 'capcut') document.getElementById('toolCapcut').style.display = 'block';
    else if (toolName === 'instagram') document.getElementById('toolInstagram').style.display = 'block';
    else if (toolName === 'fakelobby') document.getElementById('toolFakelobby').style.display = 'block';
    else if (toolName === 'fakedana') document.getElementById('toolFakedana').style.display = 'block';
    else if (toolName === 'fakelobbyml') document.getElementById('toolFakelobbyml').style.display = 'block';
    else if (toolName === 'fakejago') document.getElementById('toolFakejago').style.display = 'block';
    else if (toolName === 'password') document.getElementById('toolPassword').style.display = 'block';
    else if (toolName === 'lorem') {
    document.getElementById('toolLorem').style.display = 'block';
    setTimeout(() => initLorem(), 100);
    }
    
    else if (toolName === 'qrcode') {
    document.getElementById('toolQrcode').style.display = 'block';
    // Reset form
    document.getElementById('qrText').value = '';
    document.getElementById('qrResult').style.display = 'none';
    document.getElementById('downloadQrBtn').style.display = 'none';
    const canvas = document.getElementById('qrCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}






    if (toolName === 'password') {
        setTimeout(() => generatePassword(), 100);
    }
}





//🟡🟡🟡
//=

function closeTool() {
    document.getElementById('toolsGrid').style.display = 'grid';
    document.getElementById('toolDetailArea').style.display = 'none';
}



const closeVariantModalBtn = document.getElementById('closeVariantModal');
if (closeVariantModalBtn) {
    closeVariantModalBtn.addEventListener('click', function() {
        const modal = document.getElementById('variantModal');
        if (modal) {
            modal.classList.add('closing');
            setTimeout(() => {
                modal.classList.remove('active');
                modal.classList.remove('closing');
            }, 200);
        }
        selectedVariantProduct = null;
        selectedVariantCallback = null;
    });
}


//😊😊😉😎😉😎😎😉



























// ================================================
// QR CODE GENERATOR
// ================================================
let currentQrSize = 200;

function generateQRCode() {
    const text = document.getElementById('qrText').value.trim();
    const qrResult = document.getElementById('qrResult');
    const downloadBtn = document.getElementById('downloadQrBtn');
    
    if (!text) {
        showToast('❌ Masukkan teks atau URL!', true);
        return;
    }
    
    // Hapus canvas lama jika ada
    const oldCanvas = document.getElementById('qrCanvas');
    if (oldCanvas) {
        const ctx = oldCanvas.getContext('2d');
        ctx.clearRect(0, 0, oldCanvas.width, oldCanvas.height);
    }
    
    // Generate QR Code
    const canvas = document.getElementById('qrCanvas');
    canvas.width = currentQrSize;
    canvas.height = currentQrSize;
    
    QRCode.toCanvas(canvas, text, {
        width: currentQrSize,
        margin: 2,
        color: {
            dark: '#000000',
            light: '#FFFFFF'
        }
    }, function(error) {
        if (error) {
            console.error(error);
            showToast('❌ Gagal generate QR Code!', true);
        } else {
            qrResult.style.display = 'block';
            downloadBtn.style.display = 'flex';
            showToast('✅ QR Code berhasil dibuat!');
        }
    });
}

function downloadQRCode() {
    const canvas = document.getElementById('qrCanvas');
    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast('✅ QR Code berhasil diunduh!');
}

// Event listeners
const generateQrBtn = document.getElementById('generateQrBtn');
if (generateQrBtn) {
    generateQrBtn.addEventListener('click', generateQRCode);
}

const downloadQrBtn = document.getElementById('downloadQrBtn');
if (downloadQrBtn) {
    downloadQrBtn.addEventListener('click', downloadQRCode);
}

// Size buttons
const sizeBtns = document.querySelectorAll('.size-btn');
sizeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        sizeBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentQrSize = parseInt(this.dataset.size);
        
        // Regenerate jika sudah ada QR
        const text = document.getElementById('qrText').value.trim();
        if (text) {
            generateQRCode();
        }
    });
});

// Enter key submit
const qrInput = document.getElementById('qrText');
if (qrInput) {
    qrInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            generateQRCode();
        }
    });
}






// JAVASCRIPT UNTUK PASSWORD GENERATOR
function generatePassword() {
    const length = parseInt(document.getElementById('passwordLength').value);
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;
    
    const uppercase = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
    const lowercase = 'abcdefghijkmnpqrstuvwxyz';
    const numbers = '23456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let characters = '';
    if (includeUppercase) characters += uppercase;
    if (includeLowercase) characters += lowercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;
    
    if (characters === '') {
        document.getElementById('generatedPassword').value = 'Pilih minimal 1 tipe!';
        return;
    }
    
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    
    document.getElementById('generatedPassword').value = password;
    updateStrength(password, length);
}

function updateStrength(password, length) {
    const strengthBar = document.querySelector('.strength-bar::before');
    const strengthText = document.querySelector('.strength-text');
    
    let strength = 0;
    if (length >= 8) strength += 1;
    if (length >= 12) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    const percentage = (strength / 6) * 100;
    const bar = document.querySelector('.strength-bar');
    
    if (bar) {
        bar.style.setProperty('--strength-width', `${percentage}%`);
        bar.style.background = '#2a2a2a';
        
        let pseudoStyle = document.createElement('style');
        pseudoStyle.textContent = `
            .strength-bar::before {
                width: ${percentage}%;
                background: ${percentage < 30 ? '#ef4444' : percentage < 60 ? '#f59e0b' : '#10b981'};
            }
        `;
        document.head.appendChild(pseudoStyle);
    }
    
    const strengthElem = document.querySelector('.strength-text');
    if (strengthElem) {
        if (percentage < 30) strengthElem.textContent = 'Kekuatan: Lemah';
        else if (percentage < 60) strengthElem.textContent = 'Kekuatan: Sedang';
        else strengthElem.textContent = 'Kekuatan: Kuat';
    }
}

function copyPassword() {
    const passwordInput = document.getElementById('generatedPassword');
    passwordInput.select();
    document.execCommand('copy');
    showToast('✅ Password berhasil disalin!');
}

// Event listeners
document.getElementById('generatePasswordBtn')?.addEventListener('click', generatePassword);
document.getElementById('copyPasswordBtn')?.addEventListener('click', copyPassword);
document.getElementById('passwordLength')?.addEventListener('input', function() {
    document.getElementById('lengthValue').textContent = this.value;
    generatePassword();
});

// Update openTool function








// ================================================
// LOREM IPSUM GENERATOR
// ================================================
const loremTexts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    "Deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.",
    "Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
    "dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    "aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.",
    "voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia.",
    "dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi.",
    "tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.",
    "laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure.",
    "reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et.",
    "accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    "deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.",
    "cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia."
];

function generateLorem() {
    const type = document.getElementById('loremType').value;
    let count = parseInt(document.getElementById('loremCount').value);
    let result = '';
    
    if (type === 'paragraphs') {
        for (let i = 0; i < count; i++) {
            const paragraphCount = Math.floor(Math.random() * 5) + 3;
            let paragraph = '';
            for (let j = 0; j < paragraphCount; j++) {
                const randomIndex = Math.floor(Math.random() * loremTexts.length);
                paragraph += loremTexts[randomIndex] + ' ';
            }
            result += `<p>${paragraph.trim()}</p>`;
        }
    } 
    else if (type === 'sentences') {
        let sentences = [];
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * loremTexts.length);
            sentences.push(loremTexts[randomIndex]);
        }
        result = sentences.join(' ');
    } 
    else if (type === 'words') {
        let allWords = loremTexts.join(' ').split(' ');
        let words = [];
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * allWords.length);
            words.push(allWords[randomIndex]);
        }
        result = words.join(' ');
    }
    
    document.querySelector('.lorem-output').innerHTML = result;
}

function copyLorem() {
    const loremOutput = document.querySelector('.lorem-output');
    const textToCopy = loremOutput.innerText || loremOutput.textContent;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast('✅ Teks berhasil disalin!');
    }).catch(() => {
        showToast('❌ Gagal menyalin teks', true);
    });
}

// Event listeners
const generateLoremBtn = document.getElementById('generateLoremBtn');
if (generateLoremBtn) {
    generateLoremBtn.addEventListener('click', generateLorem);
}

const copyLoremBtn = document.getElementById('copyLoremBtn');
if (copyLoremBtn) {
    copyLoremBtn.addEventListener('click', copyLorem);
}

const loremCount = document.getElementById('loremCount');
if (loremCount) {
    loremCount.addEventListener('input', function() {
        document.getElementById('countValue').textContent = this.value;
    });
}

// Generate awal saat tool dibuka
function initLorem() {
    generateLorem();
}







// ================================================
// FAKE DANA (LANGSUNG GAMBAR - UKURAN WAJAR)
// ================================================
const generateDanaBtn = document.getElementById('generateDanaBtn');
const danaNominal = document.getElementById('danaNominal');
const danaResult = document.getElementById('danaResult');

if (generateDanaBtn) {
    generateDanaBtn.addEventListener('click', async function() {
        let nominal = danaNominal.value.trim();
        if (!nominal) {
            showToast('❌ Masukkan nominal!', true);
            return;
        }

        danaResult.style.display = 'block';
        danaResult.innerHTML = '<div class="result-loading"><i class="ri-loader-4-line" style="animation: spin 1s linear infinite;"></i> Generating...</div>';

        try {
            const apiUrl = `https://api.nexray.eu.cc/maker/fakedana?nominal=${nominal}`;
            const response = await fetch(apiUrl);
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);

            danaResult.innerHTML = `
                <div class="dana-result">
                    <div class="dana-info">
                        <i class="ri-bank-card-line" style="font-size: 40px; color: #0085FF;"></i>
                        <div class="dana-details">
                            <p><strong>Nominal: Rp ${parseInt(nominal).toLocaleString('id-ID')}</strong></p>
                        </div>
                    </div>
                    <div class="image-preview">
                        <img src="${imageUrl}" class="dana-image" alt="Fake Dana" onclick="showFullImage(this.src)">
                        <button class="view-image-btn" onclick="showFullImage('${imageUrl}')">
                            <i class="ri-eye-line"></i> Lihat Gambar
                        </button>
                    </div>
                    <button class="direct-download-btn" id="danaDownloadBtn">
                        <i class="ri-download-line"></i> Download Gambar
                    </button>
                </div>
            `;

            document.getElementById('danaDownloadBtn').addEventListener('click', function() {
                const link = document.createElement('a');
                link.href = imageUrl;
                link.download = `fakedana_${nominal}.png`;
                link.click();
                showToast('⏬ Download dimulai...');
            });

            showToast('✅ Berhasil generate!');
        } catch(e) {
            danaResult.innerHTML = `<div class="result-error">❌ Error: ${e.message}</div>`;
            showToast('❌ Gagal koneksi', true);
        }
    });
}

// ================================================
// FAKE BANK JAGO (LANGSUNG GAMBAR - UKURAN WAJAR)
// ================================================
const generateJagoBtn = document.getElementById('generateJagoBtn');
const jagoNama = document.getElementById('jagoNama');
const jagoSaldo = document.getElementById('jagoSaldo');
const jagoResult = document.getElementById('jagoResult');

if (generateJagoBtn) {
    generateJagoBtn.addEventListener('click', async function() {
        let nama = jagoNama.value.trim();
        let saldo = jagoSaldo.value.trim();

        if (!nama) {
            showToast('❌ Masukkan Nama!', true);
            return;
        }
        if (!saldo) {
            showToast('❌ Masukkan Saldo!', true);
            return;
        }

        jagoResult.style.display = 'block';
        jagoResult.innerHTML = '<div class="result-loading"><i class="ri-loader-4-line" style="animation: spin 1s linear infinite;"></i> Generating...</div>';

        try {
            const encodedNama = encodeURIComponent(nama);
            const apiUrl = `https://api.nexray.eu.cc/maker/fakebank-jago?nama=${encodedNama}&saldo=${saldo}`;
            const response = await fetch(apiUrl);
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);

            jagoResult.innerHTML = `
                <div class="jago-result">
                    <div class="jago-info">
                        <i class="ri-bank-line" style="font-size: 40px; color: #0055A0;"></i>
                        <div class="jago-details">
                            <p><strong>Nama: ${nama}</strong></p>
                            <p>💰 Saldo: Rp ${parseInt(saldo).toLocaleString('id-ID')}</p>
                        </div>
                    </div>
                    <div class="image-preview">
                        <img src="${imageUrl}" class="jago-image" alt="Fake Bank Jago" onclick="showFullImage(this.src)">
                        <button class="view-image-btn" onclick="showFullImage('${imageUrl}')">
                            <i class="ri-eye-line"></i> Lihat Gambar
                        </button>
                    </div>
                    <button class="direct-download-btn" id="jagoDownloadBtn">
                        <i class="ri-download-line"></i> Download Gambar
                    </button>
                </div>
            `;

            document.getElementById('jagoDownloadBtn').addEventListener('click', function() {
                const link = document.createElement('a');
                link.href = imageUrl;
                link.download = `fakejago_${nama}_${saldo}.png`;
                link.click();
                showToast('⏬ Download dimulai...');
            });

            showToast('✅ Berhasil generate!');
        } catch(e) {
            jagoResult.innerHTML = `<div class="result-error">❌ Error: ${e.message}</div>`;
            showToast('❌ Gagal koneksi', true);
        }
    });
}

// ================================================
// FAKE LOBBY ML (GAMBAR BESAR + TOMBOL LIHAT GAMBAR)
// ================================================
const generateMlBtn = document.getElementById('generateMlBtn');
const mlNickname = document.getElementById('mlNickname');
const mlAvatar = document.getElementById('mlAvatar');
const mlResult = document.getElementById('mlResult');

if (generateMlBtn) {
    generateMlBtn.addEventListener('click', async function() {
        let nickname = mlNickname.value.trim();
        if (!nickname) {
            showToast('❌ Masukkan Nickname ML!', true);
            return;
        }

        let avatarUrl = mlAvatar.value.trim();
        let defaultAvatar = 'https://files.catbox.moe/p966f9.jpg';
        let finalAvatar = avatarUrl || defaultAvatar;

        mlResult.style.display = 'block';
        mlResult.innerHTML = '<div class="result-loading"><i class="ri-loader-4-line" style="animation: spin 1s linear infinite;"></i> Generating lobby...</div>';

        try {
            const encodedAvatar = encodeURIComponent(finalAvatar);
            const encodedNickname = encodeURIComponent(nickname);
            const apiUrl = `https://api.nexray.eu.cc/maker/fakelobyml?avatar=${encodedAvatar}&nickname=${encodedNickname}`;
            const response = await fetch(apiUrl);
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);

            mlResult.innerHTML = `
                <div class="ml-result">
                    <div class="ml-info">
                        <div class="image-preview">
                            <img src="${imageUrl}" class="ml-image-large" alt="Fake Lobby ML" onclick="showFullImage(this.src)">
                            <button class="view-image-btn" onclick="showFullImage('${imageUrl}')">
                                <i class="ri-eye-line"></i> Lihat Gambar
                            </button>
                        </div>
                        <div class="ml-details">
                            <p><strong>Nickname: ${nickname}</strong></p>
                            <p>🎮 Fake Lobby Mobile Legend</p>
                        </div>
                    </div>
                    <button class="direct-download-btn" id="mlDownloadBtn">
                        <i class="ri-download-line"></i> Download Gambar
                    </button>
                </div>
            `;

            document.getElementById('mlDownloadBtn').addEventListener('click', function() {
                const link = document.createElement('a');
                link.href = imageUrl;
                link.download = `FakeLobbyML_${nickname}.png`;
                link.click();
                showToast('⏬ Download dimulai...');
            });

            showToast('✅ Lobby berhasil dibuat!');
        } catch(e) {
            mlResult.innerHTML = `<div class="result-error">❌ Error: ${e.message}</div>`;
            showToast('❌ Gagal koneksi', true);
        }
    });
}

// ================================================
// FUNGSI MODAL LIHAT GAMBAR FULLSCREEN
// ================================================
function showFullImage(imageSrc) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="image-modal-content">
            <button class="image-modal-close" onclick="this.parentElement.parentElement.remove()">
                <i class="ri-close-line"></i>
            </button>
            <img src="${imageSrc}" alt="Full Image">
        </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}




// ================================================
// FUNGSI FAKE LOBBY FREE FIRE (LANGSUNG GAMBAR)
// ================================================
const generateFfBtn = document.getElementById('generateFfBtn');
const ffNicknameInput = document.getElementById('ffNickname');
const ffResult = document.getElementById('ffResult');

if (generateFfBtn) {
    generateFfBtn.addEventListener('click', async function() {
        let nickname = ffNicknameInput.value.trim();
        if (!nickname) {
            showToast('❌ Masukkan Nickname ', true);
            return;
        }

        ffResult.style.display = 'block';
        ffResult.innerHTML = '<div class="result-loading"><i class="ri-loader-4-line" style="animation: spin 1s linear infinite;"></i> Generating lobby...</div>';

        try {
            const encodedNickname = encodeURIComponent(nickname);
            const apiUrl = `https://api.nexray.eu.cc/maker/fakelobyff?nickname=${encodedNickname}`;
            
            // Fetch gambar langsung sebagai blob
            const response = await fetch(apiUrl);
            const blob = await response.blob();
            
            // Konversi blob ke URL gambar
            const imageUrl = URL.createObjectURL(blob);
            
            let html = `
                <div class="ff-result">
                    <div class="ff-info">
                        <img src="${imageUrl}" class="ff-image" alt="Fake Lobby FF">
                        <div class="ff-details">
                            <p><strong>Nickname: ${nickname}</strong></p>
                            <p>Fake Lobby Free Fire</p>
                            
                        </div>
                    </div>
                    <button class="direct-download-btn" id="ffDownloadBtn">
                        <i class="ri-download-line"></i> Download Gambar
                    </button>
                </div>
            `;
            ffResult.innerHTML = html;

            document.getElementById('ffDownloadBtn').addEventListener('click', function() {
                const link = document.createElement('a');
                link.href = imageUrl;
                link.download = `FakeLobby_${nickname}.png`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                showToast('⏬ Download gambar dimulai...');
            });

            showToast('✅  Berhasil Membuat Image');
        } catch(e) {
            ffResult.innerHTML = `<div class="result-error">❌ Error: ${e.message}</div>`;
            showToast('❌ Gagal koneksi ke server', true);
        }
    });
}




// ================================================
// FUNGSI CAPCUT DOWNLOADER
// ================================================
const downloadCapcutBtn = document.getElementById('downloadCapcutBtn');
const capcutUrlInput = document.getElementById('capcutUrl');
const capcutResult = document.getElementById('capcutResult');

if (downloadCapcutBtn) {
    downloadCapcutBtn.addEventListener('click', async function() {
        let url = capcutUrlInput.value.trim();
        if (!url) {
            showToast('❌ Masukkan URL CapCut!', true);
            return;
        }

        capcutResult.style.display = 'block';
        capcutResult.innerHTML = '<div class="result-loading"><i class="ri-loader-4-line" style="animation: spin 1s linear infinite;"></i> Memproses video...</div>';

        try {
            const encodedUrl = encodeURIComponent(url);
            const apiUrl = `https://api.nexray.eu.cc/downloader/v1/capcut?url=${encodedUrl}`;
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.status && data.result && data.result.url) {
                const res = data.result;
                const videoUrl = res.url;
                const thumbnail = res.thumbnail;
                const title = res.title || 'CapCut_Video';
                const author = res.author || 'Unknown';

                // Bersihkan judul untuk nama file
                const cleanTitle = title.replace(/[^a-z0-9]/gi, '_').substring(0, 40);
                const fileName = `YussXy-CapCut-${cleanTitle}.mp4`;

                let html = `
                    <div class="capcut-result">
                        <div class="capcut-info">
                            ${thumbnail ? `<img src="${thumbnail}" class="capcut-thumb" onerror="this.style.display='none'">` : '<i class="ri-video-line" style="font-size: 40px; color: var(--accent);"></i>'}
                            <div class="capcut-details">
                                <p><strong>${title.substring(0, 60)}</strong></p>
                                <p>👤 ${author}</p>
                            </div>
                        </div>
                        <button class="direct-download-btn" id="capcutDirectDownloadBtn">
                            <i class="ri-download-line"></i> Download Video (MP4)
                        </button>
                    </div>
                `;
                capcutResult.innerHTML = html;

                document.getElementById('capcutDirectDownloadBtn').addEventListener('click', function() {
                    const link = document.createElement('a');
                    link.href = videoUrl;
                    link.download = fileName;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    showToast('⏬ Download video dimulai...');
                });

                showToast('✅ Video siap di download!');
            } else {
                capcutResult.innerHTML = `<div class="result-error">❌ Gagal: URL tidak valid atau video tidak ditemukan</div>`;
                showToast('❌ Gagal download, cek URL CapCut', true);
            }
        } catch(e) {
            capcutResult.innerHTML = `<div class="result-error">❌ Error: ${e.message}</div>`;
            showToast('❌ Gagal koneksi ke server', true);
        }
    });
}



//🤗🟠😁😁🟠

// ================================================
// FUNGSI FACEBOOK DOWNLOADER
// ================================================
const downloadFacebookBtn = document.getElementById('downloadFacebookBtn');
const facebookUrlInput = document.getElementById('facebookUrl');
const facebookResult = document.getElementById('facebookResult');

if (downloadFacebookBtn) {
    downloadFacebookBtn.addEventListener('click', async function() {
        let url = facebookUrlInput.value.trim();
        if (!url) {
            showToast('❌ Masukkan URL Facebook!', true);
            return;
        }

        facebookResult.style.display = 'block';
        facebookResult.innerHTML = '<div class="result-loading"><i class="ri-loader-4-line" style="animation: spin 1s linear infinite;"></i> Memproses video...</div>';

        try {
            const encodedUrl = encodeURIComponent(url);
            const apiUrl = `https://api.nexray.eu.cc/downloader/facebook?url=${encodedUrl}`;
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.status && data.result) {
                const res = data.result;
                
                // Pilih kualitas video (prioritas HD, lalu SD)
                let videoUrl = res.video_hd || res.video_sd;
                let quality = res.video_hd ? 'HD' : 'SD';
                const title = res.title || 'Facebook_Video';
                
                // Bersihkan judul untuk nama file
                const cleanTitle = title.replace(/[^a-z0-9]/gi, '_').substring(0, 40);
                const fileName = `YussXy-FB-${cleanTitle}.mp4`;

                let html = `
                    <div class="facebook-result">
                        <div class="facebook-info">
                            <i class="ri-facebook-line" style="font-size: 40px; color: #1877F2;"></i>
                            <div class="facebook-details">
                                <p><strong>${title.substring(0, 60)}</strong></p>
                                <p>🎬 Kualitas: ${quality}</p>
                            </div>
                        </div>
                        <div class="result-buttons">
                            <button class="direct-download-btn" id="fbDirectDownloadBtn">
                                <i class="ri-download-line"></i> Download Video (${quality})
                            </button>
                        </div>
                    </div>
                `;
                
                // Jika ada audio, tambahkan tombol download audio
                if (res.audio) {
                    html += `
                        <button class="mp3-only-btn" id="fbAudioDownloadBtn" style="margin-top: 10px;">
                            <i class="ri-music-line"></i> Download Audio (MP3)
                        </button>
                    `;
                }
                
                facebookResult.innerHTML = html;

                // Download video
                const fbDirectBtn = document.getElementById('fbDirectDownloadBtn');
                if (fbDirectBtn) {
                    fbDirectBtn.addEventListener('click', function() {
                        const link = document.createElement('a');
                        link.href = videoUrl;
                        link.download = fileName;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        showToast(`⏬ Download ${quality} dimulai...`);
                    });
                }
                
                // Download audio
                const fbAudioBtn = document.getElementById('fbAudioDownloadBtn');
                if (fbAudioBtn && res.audio) {
                    fbAudioBtn.addEventListener('click', function() {
                        const link = document.createElement('a');
                        link.href = res.audio;
                        link.download = `YussXy-FB-Audio-${cleanTitle}.mp3`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        showToast('⏬ Download audio dimulai...');
                    });
                }

                showToast('✅ Video siap di download!');
            } else {
                facebookResult.innerHTML = `<div class="result-error">❌ Gagal: URL tidak valid atau video tidak ditemukan</div>`;
                showToast('❌ Gagal download, cek URL Facebook', true);
            }
        } catch(e) {
            facebookResult.innerHTML = `<div class="result-error">❌ Error: ${e.message}</div>`;
            showToast('❌ Gagal koneksi ke server', true);
        }
    });
}







//🟠😁😁

// ================================================
// FUNGSI SPOTIFY DOWNLOADER
// ================================================
const downloadSpotifyBtn = document.getElementById('downloadSpotifyBtn');
const spotifyUrlInput = document.getElementById('spotifyUrl');
const spotifyResult = document.getElementById('spotifyResult');

if (downloadSpotifyBtn) {
    downloadSpotifyBtn.addEventListener('click', async function() {
        let url = spotifyUrlInput.value.trim();
        if (!url) {
            showToast('❌ Masukkan URL Spotify!', true);
            return;
        }

        spotifyResult.style.display = 'block';
        spotifyResult.innerHTML = '<div class="result-loading"><i class="ri-loader-4-line" style="animation: spin 1s linear infinite;"></i> Memproses lagu...</div>';

        try {
            const encodedUrl = encodeURIComponent(url);
            const apiUrl = `https://api.nexray.eu.cc/downloader/spotify?url=${encodedUrl}`;
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.status && data.result && data.result.url) {
                const result = data.result;
                const audioUrl = result.url;
                const title = result.title || 'Spotify_Track';
                const artist = result.artist || 'Unknown Artist';

                // Buat nama file: YussXy-Spotify-JudulLagu.mp3
                const cleanTitle = title.replace(/[^a-z0-9]/gi, '_').substring(0, 40);
                const fileName = `YussXy-Spotify-${cleanTitle}.mp3`;

                let html = `
                    <div class="spotify-result">
                        <div class="spotify-info">
                            <i class="ri-spotify-line" style="font-size: 40px; color: #1DB954;"></i>
                            <div class="spotify-details">
                                <p><strong>${title}</strong></p>
                                <p>🎤 ${artist}</p>
                            </div>
                        </div>
                        <button class="direct-download-btn" id="spotifyDirectDownloadBtn">
                            <i class="ri-download-line"></i> Download Lagu (MP3)
                        </button>
                    </div>
                `;
                spotifyResult.innerHTML = html;

                document.getElementById('spotifyDirectDownloadBtn').addEventListener('click', function() {
                    const link = document.createElement('a');
                    link.href = audioUrl;
                    link.download = fileName;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    showToast('⏬ Download lagu dimulai...');
                });

                showToast('✅ Lagu siap di download!');
            } else {
                spotifyResult.innerHTML = `<div class="result-error">❌ Gagal: URL tidak valid atau lagu tidak ditemukan</div>`;
                showToast('❌ Gagal download, cek URL Spotify', true);
            }
        } catch(e) {
            spotifyResult.innerHTML = `<div class="result-error">❌ Error: ${e.message}</div>`;
            showToast('❌ Gagal koneksi ke server', true);
        }
    });
}



//🤩😎😁😎😎😉


// ================================================
// FUNGSI INSTAGRAM DOWNLOADER
// ================================================
const downloadInstagramBtn = document.getElementById('downloadInstagramBtn');
const instagramUrlInput = document.getElementById('instagramUrl');
const instagramResult = document.getElementById('instagramResult');

if (downloadInstagramBtn) {
    downloadInstagramBtn.addEventListener('click', async function() {
        let url = instagramUrlInput.value.trim();
        if (!url) {
            showToast('❌ Masukkan URL Instagram!', true);
            return;
        }

        instagramResult.style.display = 'block';
        instagramResult.innerHTML = '<div class="result-loading"><i class="ri-loader-4-line" style="animation: spin 1s linear infinite;"></i> Memproses...</div>';

        try {
            const encodedUrl = encodeURIComponent(url);
            const apiUrl = `https://api.nexray.eu.cc/downloader/instagram?url=${encodedUrl}`;
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.status && data.result && data.result.length > 0) {
                // Ambil item pertama (bisa video atau foto)
                const item = data.result[0];
                const mediaUrl = item.url;
                const mediaType = item.type;
                const thumbnail = item.thumbnail;
                
                let html = '';
                
                if (mediaType === 'video') {
                    const fileName = `YussXy-IG-Video-${Date.now()}.mp4`;
                    
                    html = `
                        <div class="instagram-result">
                            <div class="instagram-info">
                                ${thumbnail ? `<img src="${thumbnail}" class="instagram-thumb" onerror="this.style.display='none'">` : '<i class="ri-instagram-line" style="font-size: 40px; color: #E4405F;"></i>'}
                                <div class="instagram-details">
                                    <p><strong>Instagram ${mediaType === 'video' ? 'Video' : 'Foto'}</strong></p>
                                    <p>Tipe: ${mediaType === 'video' ? '🎬 Video' : '🖼️ Foto'}</p>
                                </div>
                            </div>
                            <button class="direct-download-btn" id="igDirectDownloadBtn">
                                <i class="ri-download-line"></i> Download ${mediaType === 'video' ? 'Video' : 'Foto'} (MP4)
                            </button>
                        </div>
                    `;
                    
                    instagramResult.innerHTML = html;
                    
                    document.getElementById('igDirectDownloadBtn').addEventListener('click', function() {
                        const link = document.createElement('a');
                        link.href = mediaUrl;
                        link.download = fileName;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        showToast(`⏬ Download ${mediaType} dimulai...`);
                    });
                    
                } else {
                    // Untuk foto (image)
                    const fileName = `YussXy-IG-Photo-${Date.now()}.jpg`;
                    
                    html = `
                        <div class="instagram-result">
                            <div class="instagram-info">
                                <img src="${mediaUrl}" class="instagram-photo" onerror="this.src='https://placehold.co/300x300/333/white?text=Error'">
                                <div class="instagram-details">
                                    <p><strong>Instagram Foto</strong></p>
                                    <p>Klik download untuk menyimpan</p>
                                </div>
                            </div>
                            <button class="direct-download-btn" id="igDirectDownloadBtn">
                                <i class="ri-download-line"></i> Download Foto (JPG)
                            </button>
                        </div>
                    `;
                    
                    instagramResult.innerHTML = html;
                    
                    document.getElementById('igDirectDownloadBtn').addEventListener('click', function() {
                        const link = document.createElement('a');
                        link.href = mediaUrl;
                        link.download = fileName;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        showToast('⏬ Download foto dimulai...');
                    });
                }

                showToast('✅ Media siap di download!');
            } else {
                instagramResult.innerHTML = `<div class="result-error">❌ Gagal: URL tidak valid atau media tidak ditemukan</div>`;
                showToast('❌ Gagal download, cek URL Instagram', true);
            }
        } catch(e) {
            instagramResult.innerHTML = `<div class="result-error">❌ Error: ${e.message}</div>`;
            showToast('❌ Gagal koneksi ke server', true);
        }
    });
}





//👇👇🟡🟡🟡🟡
// ================================================
// FUNGSI YOUTUBE DOWNLOADER
// ================================================
const processYoutubeBtn = document.getElementById('processYoutubeBtn');
const youtubeUrlInput = document.getElementById('youtubeUrl');
const youtubeOptions = document.getElementById('youtubeOptions');
const youtubeResult = document.getElementById('youtubeResult');

let currentYoutubeData = null;

if (processYoutubeBtn) {
    processYoutubeBtn.addEventListener('click', async function() {
        let url = youtubeUrlInput.value.trim();
        if (!url) {
            showToast('❌ Masukkan URL YouTube!', true);
            return;
        }

        // Tampilkan loading
        youtubeOptions.style.display = 'none';
        youtubeResult.style.display = 'block';
        youtubeResult.innerHTML = '<div class="result-loading"><i class="ri-loader-4-line" style="animation: spin 1s linear infinite;"></i> Memproses video...</div>';

        try {
            const encodedUrl = encodeURIComponent(url);
            // Ambil info video pake API MP4 (ambil thumbnail & judul)
            const apiUrl = `https://api.nexray.eu.cc/downloader/ytmp4?url=${encodedUrl}&resolusi=720`;
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.status && data.result) {
                currentYoutubeData = {
                    title: data.result.title,
                    thumbnail: data.result.thumbnail,
                    duration: data.result.duration,
                    url: url
                };

                const durationMin = Math.floor(data.result.duration / 60);
                const durationSec = data.result.duration % 60;

                let html = `
                    <div class="youtube-thumb">
                        <img src="${data.result.thumbnail}" alt="Thumbnail" onerror="this.src='https://placehold.co/100x56/333/white?text=YouTube'">
                        <div class="youtube-info-small">
                            <p><strong>${data.result.title.substring(0, 50)}</strong></p>
                            <p>⏱️ Durasi: ${durationMin}:${durationSec.toString().padStart(2, '0')}</p>
                        </div>
                    </div>
                `;
                youtubeResult.innerHTML = html;
                youtubeOptions.style.display = 'block';
                showToast('✅ Pilih resolusi video atau download MP3');
            } else {
                youtubeResult.innerHTML = `<div class="result-error">❌ Gagal: Video tidak ditemukan</div>`;
                showToast('❌ Gagal memproses URL', true);
            }
        } catch(e) {
            youtubeResult.innerHTML = `<div class="result-error">❌ Error: ${e.message}</div>`;
            showToast('❌ Gagal koneksi ke server', true);
        }
    });
}

// Fungsi download MP4 dengan resolusi tertentu
async function downloadYoutubeMP4(resolusi) {
    if (!currentYoutubeData) return;
    
    showToast(`⏬ Mengambil video ${resolusi}p...`);
    
    try {
        const encodedUrl = encodeURIComponent(currentYoutubeData.url);
        const apiUrl = `https://api.nexray.eu.cc/downloader/ytmp4?url=${encodedUrl}&resolusi=${resolusi}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.status && data.result && data.result.url) {
            const fileName = `YussXy-YT-${currentYoutubeData.title.replace(/[^a-z0-9]/gi, '_').substring(0, 40)}_${resolusi}p.mp4`;
            const link = document.createElement('a');
            link.href = data.result.url;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showToast(`⏬ Download ${resolusi}p dimulai...`);
        } else {
            showToast('❌ Gagal mengambil video', true);
        }
    } catch(e) {
        showToast('❌ Error: ' + e.message, true);
    }
}

// Fungsi download MP3
async function downloadYoutubeMP3() {
    if (!currentYoutubeData) return;
    
    showToast('⏬ Mengambil audio MP3...');
    
    try {
        const encodedUrl = encodeURIComponent(currentYoutubeData.url);
        const apiUrl = `https://api.nexray.eu.cc/downloader/v1/ytmp3?url=${encodedUrl}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.status && data.result && data.result.url) {
            const fileName = `YussXy-YT-${currentYoutubeData.title.replace(/[^a-z0-9]/gi, '_').substring(0, 40)}.mp3`;
            const link = document.createElement('a');
            link.href = data.result.url;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showToast('⏬ Download MP3 dimulai...');
        } else {
            showToast('❌ Gagal mengambil audio', true);
        }
    } catch(e) {
        showToast('❌ Error: ' + e.message, true);
    }
}

// Event listener untuk tombol resolusi
document.querySelectorAll('.res-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const resolusi = btn.dataset.res;
        downloadYoutubeMP4(resolusi);
    });
});

// Event listener untuk tombol MP3
const downloadMp3Only = document.getElementById('downloadMp3Only');
if (downloadMp3Only) {
    downloadMp3Only.addEventListener('click', downloadYoutubeMP3);
}




//😎😊😎😊😎😊😎😊😎
// ================================================
// FUNGSI TIKTOK DOWNLOADER (DENGAN 2 API CADANGAN)
// ================================================
const downloadTiktokBtn = document.getElementById('downloadTiktokBtn');
const tiktokUrlInput = document.getElementById('tiktokUrl');
const tiktokResult = document.getElementById('tiktokResult');

// Daftar API (urutan prioritas)
const tiktokApis = [
    {
        name: "API Utama",
        url: (encodedUrl) => `https://api.nexray.eu.cc/downloader/tiktok?url=${encodedUrl}`,
        parseResponse: (data) => {
            if (data.status && data.result) {
                return {
                    success: true,
                    videoUrl: data.result.data,
                    thumbnail: data.result.cover,
                    title: data.result.title || 'Video_Tiktok',
                    author: data.result.author?.nickname || data.result.author?.fullname || '-',
                    likes: data.result.stats?.likes || '?',
                    views: data.result.stats?.views || '?'
                };
            }
            return { success: false };
        }
    },
    {
        name: "API Cadangan 1",
        url: (encodedUrl) => `https://api.siputzx.my.id/api/d/tiktok?url=${encodedUrl}`,
        parseResponse: (data) => {
            if (data.status && data.data && data.data.media) {
                // Cari video dengan kualitas tertinggi (HD dulu, baru SD)
                let videoUrl = null;
                for (let media of data.data.media) {
                    if (media.type === 'video_hd' && media.url) {
                        videoUrl = media.url;
                        break;
                    } else if (media.type === 'video' && media.url && !videoUrl) {
                        videoUrl = media.url;
                    }
                }
                return {
                    success: true,
                    videoUrl: videoUrl,
                    thumbnail: data.data.thumbnail,
                    title: data.data.title || 'Video_Tiktok',
                    author: data.data.author || '-',
                    likes: '?',
                    views: '?'
                };
            }
            return { success: false };
        }
    }
];

async function fetchWithTimeout(url, timeout = 10000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);
        return response;
    } catch (error) {
        clearTimeout(timeoutId);
        throw error;
    }
}

if (downloadTiktokBtn) {
    downloadTiktokBtn.addEventListener('click', async function() {
        let url = tiktokUrlInput.value.trim();
        if (!url) {
            showToast('❌ Masukkan URL TikTok!', true);
            return;
        }

        tiktokResult.style.display = 'block';
        tiktokResult.innerHTML = '<div class="result-loading"><i class="ri-loader-4-line" style="animation: spin 1s linear infinite;"></i> Memproses video...</div>';

        let success = false;
        let lastError = null;

        // Coba semua API satu per satu
        for (let api of tiktokApis) {
            if (success) break;
            
            try {
                const encodedUrl = encodeURIComponent(url);
                const apiUrl = api.url(encodedUrl);
                
                const response = await fetchWithTimeout(apiUrl, 15000);
                const data = await response.json();
                
                const result = api.parseResponse(data);
                
                if (result.success && result.videoUrl) {
                    success = true;
                    
                    // Buat nama file: YussXy-Tools-NamaVideo.mp4
                    const cleanTitle = result.title.replace(/[^a-z0-9]/gi, '_').substring(0, 40);
                    const fileName = `YussXy-Tools-${cleanTitle}.mp4`;
                    
                    let html = `
                        <div class="result-thumb">
                            <img src="${result.thumbnail}" alt="Thumbnail" onerror="this.src='https://placehold.co/80x142/333/white?text=No+Image'">
                            <div class="result-info-small">
                                <p><strong>${result.title.substring(0, 60)}</strong></p>
                                <p>👤 ${result.author}</p>
                                <p>❤️ ${result.likes} • 👁️ ${result.views}</p>
                            </div>
                        </div>
                        <button class="direct-download-btn" id="directDownloadBtn">
                            <i class="ri-download-line"></i> Download Video Sekarang
                        </button>
                    `;
                    tiktokResult.innerHTML = html;
                    
                    document.getElementById('directDownloadBtn').addEventListener('click', function() {
                        const link = document.createElement('a');
                        link.href = result.videoUrl;
                        link.download = fileName;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        showToast('⏬ Download dimulai...');
                    });
                    
                    showToast(`✅ Video siap! `);
                    break;
                }
            } catch (error) {
                lastError = error;
                console.log(`API ${api.name} gagal:`, error);
                continue;
            }
        }
        
        if (!success) {
            tiktokResult.innerHTML = `<div class="result-error">❌ Gagal memproses video. Coba lagi nanti atau cek URL.</div>`;
            showToast('❌ Semua API gagal, coba lagi nanti', true);
        }
    });
}























// ================================================
// SHARE APLIKASI DARI SIDEBAR
// ================================================
const shareAppSidebar = document.getElementById('shareAppSidebar');

if (shareAppSidebar) {
    shareAppSidebar.addEventListener('click', function() {
        const message = `
Hai 👋
Aku punya aplikasi yang bisa kamu coba, isinya lumayan lengkap dan berguna banget buat sehari-hari.

📌 FITUR UTAMA:
➜ Download video TikTok tanpa watermark  
➜ Ambil video dari YouTube dengan mudah  
➜ Generate lobby Free Fire/Mobile Legend
➜ Akses cepat dan tanpa iklan

📲 GAMPANG DIGUNAKAN:
➜ Tidak ribet  
➜ Langsung jalan di Android  
➜ Cocok untuk semua pengguna  
➜ Banyak fitur menarik di dalamnya  
➜ Bisa kamu pakai kapan saja  

📥 LINK DOWNLOAD: 
https://xyura79.github.io/Store-Yuss/

━━━━━━━━━━━━━━━━━━━━━━`;
        
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
        
        // Tutup sidebar setelah klik
        closeSidebar();
        
        showToast('✅ Pilih kontak untuk berbagi');
    });
}





// ================================================
// FUNGSI SHOW TOAST NOTIFIKASI
// ================================================
function showToast(message, isError = false) {
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.style.background = isError ? '#ef4444' : '#10b981';
    toast.style.position = 'fixed';
    toast.style.bottom = '100px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.color = 'white';
    toast.style.padding = '10px 20px';
    toast.style.borderRadius = '30px';
    toast.style.fontSize = '13px';
    toast.style.zIndex = '2000';
    toast.style.whiteSpace = 'nowrap';
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}







//😁🤩😏🤩😏🤩😏🤩😏🤩🙏
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
