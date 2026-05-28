// ================================================
// DATA PRODUK
// ================================================
// ==========================================
const WHATSAPP_CHANNEL_URL = "https://whatsapp.com/channel/0029VbAgFKULSmbeJMLfmR3b";
const ADMIN_PHONE_NUMBER = "6283183469343";


const tools = ['toolTiktok', 'toolYoutube', 'toolSpotify', 'toolFacebook', 'toolCapcut', 'toolInstagram', 'toolFakelobby', 'toolFakedana', 'toolFakelobbyml', 'toolFakejago', 'toolPassword', 'toolLorem', 'toolQrcode', 'toolSertifikatlol', 'toolWrMLBB', 'toolEmojimix', 'toolBeritaMLBB', 'toolTiktokhashtag', 'toolTranslate', 'toolSpotifysearch', 'toolLyrics', 'toolYtsearch', 'toolPpcouple'];



// =======================================
// KONFIGURASI KIRIM PESAN (EDIT DI SINI)
// =======================================
const WEB3FORMS_ACCESS_KEY = "048cda4c-a479-40f1-a2d6-41b7a6f030a3";
const ADMIN_EMAIL = "yussalmount@gmail.com"; 























// ================================================
// DATA PRODUK - EDIT DI SINI UNTUK TAMBAH PRODUK
// ================================================
let products = [
{
    id: 1,
    name: "Transfer ke DANA",
    description: "Pengen transfer saldo dana ke temen, tapi dana belum premium, tenang yuss xy menyediakan layanan transfer, dengan biaya admin 1.000(1k) tiap transfer berapapun, minimal transfer 5.000(5k).",
    price: "Rp 1.000",
    image: "image/produk/produk1.jpg",
    category: "jasa",
    type: "hot",
    isTransferService: true,
    minTransfer: 5000,
    adminFee: 1000,
    transferMessage: "Masukkan nomor DANA tujuan dan jumlah transfer (minimal Rp5.000)",
    benefits: [
        "Bisa tf Dana ke sesama akun Dana non premium"
    ]
},
    
    {
    id: 20,
    name: "Aplikasi Premium",
    description: "Kumpulan aplikasi premium siap pakai. Klik untuk lihat daftar aplikasi yang tersedia.",
    price: "Lihat daftar",
    image: "image/produk/produk21.jpg",
    category: "digital",
    isNegotiable: false,
    type: "new",
    isAppBundle: true  //PRODUK BUNDLE
},
    
    
{
    id: 21,
    name: "Suntik Sosmed",
    description: "Layanan yang memberikan like, view, atau pengikut ke akun sosmed anda",
    price: "Lihat daftar",
    image: "image/produk/produk23.jpg",
    category: "digital",
    isNegotiable: false,
    type: "new",
    isSocialMediaService: true
},
    
    
    
    
    
    
    
        {
    id: 21,
    name: "Jasa Rekber",
    description: "Mau beli akun tapi takut ketipu? Tenang kami siap jadi orang ke tiga yang memberikan keamanan di transaksi mu",
    price: "Fee",
    image: "image/produk/produk22.jpg",
    category: "digital",
    isNegotiable: false,
    type: "new",
    isConsultation: true
    
},
    
    {
        id: 7,
        name: "Panel Pterodactly",
        description: "Server yang Siap Hosting bot kamu, Anti delay, dan bergaransi",
        price: "Rp 500",
        image: "image/produk/produk6.jpg",
        category: "digital",
        isNegotiable: false,
        type: "sold_out",
        hasVariant: true,
        variants: [
    { ram: "2GB", price: 2000, priceDisplay: "Rp 2.000" },
    { ram: "3GB", price: 3000, priceDisplay: "Rp 3.000" },
    { ram: "4GB", price: 4000, priceDisplay: "Rp 4.000" },
    { ram: "5GB", price: 5000, priceDisplay: "Rp 5.000" },
    { ram: "6GB", price: 5500, priceDisplay: "Rp 5.500" },
    { ram: "7GB", price: 6000, priceDisplay: "Rp 6.000" },
    { ram: "8GB", price: 7000, priceDisplay: "Rp 7.000" },
    { ram: "9GB", price: 8000, priceDisplay: "Rp 8.000" },
    { ram: "10GB", price: 9000, priceDisplay: "Rp 9.000" },
    { ram: "Unli-GB", price: 13000, priceDisplay: "Rp 13.000" }
]




    },
    
    
     
{
    id: 2,
    name: "Reseler Panel Permanen",
    description: "Keuntungan beli reseler, Create panel sepuasnya, bisa jualan panel, gak perlu beli beli panel lagi(Reseler Berlaku Selamanya)",
    price: 16000,
    image: "image/produk/produk16.jpg",
    category: "digital",
    isNegotiable: false,
    type: "coming_soon",
    benefits: [
        "Bisa buat panel sepuasnya",
        "bisa jualan panel",
        "bisa run bot"
    ]
},
    
    
        
    
            {
        id: 16,
        name: "Jasa Pembuatan Web Store",
        description: "Mulai Usaha anda dengan mempunyai web store sendiri, agar pembeli mudah dalam memilih produk yanh di inginkan nya",
        price: 25000,
        
        image: "image/produk/produk17.jpg",
        category: "jasa",
        isNegotiable: false,
        type: "none"
    },
    
    
    
    {
    id: 17,
    name: "Aplikasi Pembuat Logo JB",
    description: "Keuntungannya, Buat Logo Gak Perlu Susah Lagi, Tinggal Ganti Teks Langsung Jadi, Bisa Jualan Logo JB",
    price: 3000,
    image: "image/produk/produk18.jpg",
    category: "digital",
    isNegotiable: false,
    type: "none",
    benefits: [
        "Bisa buat logo dengan mudah",
        "bisa jualan logo"
    ]
},
    
    
{
    id: 19,
    name: "Reaction Pesan Saluran Wa",
    description: "Memberikan 100+ Reaksi emoji ke pesan di saluran WhatsApp anda",
    price: 500,
    image: "image/produk/produk20.jpg",
    category: "jasa",
    isNegotiable: false,
    type: "hot",
    isReactionService: true,
    benefits: [
        "Pesan saluran mu banyak reaksi nya",
        "bisa pamer ke teman",
        "100+ reaction walaupun pengikut saluran kurang dari 100"
    ]
},
    
    




{
    id: 18,
    name: "Jasa Joki Game",
    description: "Cape Main Tapi Kalah Terus?, Mari Pakai Jasa Kami, Murah Amanah Dan Terpercaya",
    price: 500,
    image: "image/produk/produk19.jpg",
    category: "jasa",
    isNegotiable: false,
    type: "new",
    isConsultation: true,
    benefits: [
        "Rank mu jadi tinggi tanpa cape"
    ],
    note: "membutuhkan waktu 1 hari + tergantung pemesanan"
},
    
    
    
{
    id: 14,
    name: "Nokos WhatsApp Indo",
    description: "Dapat no whatsapp murah meriah",
    price: "Rp 5.000",
    image: "image/produk/produk13.jpg",
    category: "digital",
    isNegotiable: true,
    type: "hot",
    isAskStock: true,  // TAMBAHKAN INI
    benefits: [
        "Dapat no whatsapp murah meriah"
    ],
    note: ""
},



{
    id: 15,
    name: "Jasa Bug",
    description: "Punya Musuh?, Mau Balas Dendam?, Jasa ini Akan Balaskan Dendam Kamu Ke target",
    price: "Rp 4000",
    image: "image/produk/produk14.jpg",
    category: "digital",
    isNegotiable: false,
    type: "hot",
    isBugService: true,
    benefits: [
        "Bisa balas dendam ke teman, mantan"
    ],
    note: "Jangan di pakai ke orang yang tidak punya salah"
},


    
    
    
    
    {
        id: 3,
        name: "Source Kode Downloader",
        description: "Source kode untuk web, desain simple, dan harga murah.",
        price: 2000,
        image: "image/produk/produk2.jpg",
        category: "digital",
        type: "none"  // hot / rekomendasi / none / new / sold_out / coming_soon /dislon
    },
    {
        id: 4,
        name: "Jasa Pembuatan Web Simple",
        description: "Pembuatan website sederhana sesuai kebutuhan. Harga bisa nego tergantung kompleksitas fitur.",
        price: "Rp 25.000",
        priceMin: 20000,
        priceMax: 50000,
        image: "image/produk/produk3.jpg",
        category: "jasa",
        isNegotiable: true,
        type: "none"
    },
    {
        id: 5,
        name: "Bot WhatsApp Custom",
        description: "Jasa Pembuatan Bot WhatsApp sesuai kebutuhan pembeli, Bisa request fitur yang diinginkan juga suport termux dan panel.",
        price: "Rp 10.000",
        priceMin: 10000,
        priceMax: 20000,
        image: "image/produk/produk4.jpg",
        category: "jasa",
        isNegotiable: true,
        type: "coming_soon"
        
      },
      
      
    {
        id: 6,
        name: "Bot Telegram Custom",
        description: "Jasa pembuatan bot telegram, harga murmer, bisa request fitur, support panel dan termux",
        price: "Rp 5.000",
        priceMin: 5000,
        priceMax: 10000,
        image: "image/produk/produk5.jpg",
        category: "jasa",
        isNegotiable: true,
        type: "coming_soon"
    },


{
        id: 8,
        name: "Jasa Buat Tools Termux",
        description: "Buat tools termux, harga menyesuaikan tergantung tools yang di buat, bebas request fitur, pengerjaan 1 hari",
        price: "Rp 5.000",
        image: "image/produk/produk7.jpg",
        category: "jasa",
        isNegotiable: false ,
        type: "coming_soon"
},

{
    id: 12,
    name: "Apk Web To Apk",
    description: "Ubah web mu jadi apk, tanpa ribet",
    price: "Rp 2.000",
    image: "image/produk/produk11.jpg",
    category: "digital",
    isNegotiable: true,
    type: "new",
    benefits: [
        "Ubah web mu jadi aplikasi"
    ]
},


{
    id: 13,
    name: "Eboox",
    description: "Cari tahu apakah eboox yang kamu cari tersedia. Masukkan judul eboox, lalu tanya ke owner.",
    price: "Rp 1.500",
    image: "image/produk/produk12.jpg",
    category: "jasa",
    isEboox: true,
    type: "none"
},





























];


//🙏😁🤪😁🤪😁🤪😁🤪😁
//🙏😁🤪😁🤪😁🤪😁🤪😁
//🙏😁🤪😁🤪😁🤪😁🤪😁


// ================================================
// DATA LAYANAN SUNTIK SOSMED (FLEKSIBEL)
// ================================================
const socialMediaServices = [
    {
        id: 1,
        name: "Pengikut Saluran WhatsApp",
        price: 70000,// harga satu unit
        unit: "1.000 pengikut",
        status: "available",
        description: "Tambahkan pengikut ke saluran WhatsApp anda"
    },


{
        id: 4,
        name: "WhatsApp Poll Vote",
        price: 160000,// harga satu unit
        unit: "1.000 Vote",
        status: "available",
        description: "Suntik Polling/Vote Salauran whatsapp [ Minimal Pesan 10 ] "
    },

    
    {
        id: 2,
        name: "TikTok View",
        price: 6000,
        unit: "1.000 View",
        status: "coming_soon",
        description: "Tambahkan View ke video TikTok"
    },


        

    
    {
        id: 3,
        name: "Tikton Like",
        price: 20000,
        unit: "1.000 Like",
        status: "coming_soon",
        description: "Tambahkan Like ke akun TikTok"
    }

];









//🙏😁🤪😁🤪😁🤪😁🤪😁//🙏😁🤪😁🤪😁🤪😁🤪😁//🙏😁🤪😁🤪😁🤪😁🤪😁//🙏😁🤪😁🤪😁🤪😁🤪😁//🙏😁🤪😁🤪😁🤪😁🤪😁

// ================================================
// DATA APLIKASI PREMIUM
// ================================================

const premiumApps = [
    {
        id: 1,
        name: "Alight Motion Premium",
        description: "1 tahun",
        status: "available",
        price: "Rp 4.500",
        image: "image/apk/am.jpg"
    },
    {
        id: 2,
        name: "Canva Pro",
        description: "1 bulan",
        status: "available",
        price: "Rp 4.000",
        image: "image/apk/canva.jpg"
    },
    {
        id: 3,
        name: "Disney+ Sharing",
        description: "1 bulan",
        status: "available",
        price: "Rp 27.000",
        image: "image/apk/disney.jpg"
    },
    {
        id: 4,
        name: "Viu Premium",
        description: "Lifetime",
        status: "available",
        price: "Rp 3.000",
        image: "image/apk/viu.jpg"
    },
    {
        id: 5,
        name: "Spotify Premium",
        description: "1 bulan",
        status: "sold_out",
        price: "Rp 20.500",
        image: "image/apk/spotify.jpg"
    },
    {
        id: 6,
        name: "CapCut Standar Private",
        description: "1 bulan",
        status: "sold_out",
        price: "Rp 21.000",
        image: "image/apk/capcut.jpg"
    }
];














































































































































// ================================================
// DATA LOWONGAN KERJA (LOKER)
// ================================================
const lokerData = [
    {
        id: 1,
        name: "Tim Promosi",
        icon: "ri-megaphone-line",
        status: "open",
        salary: "Rp 7.000 / 2.000 video yang ditonton",
        schedule: "Fleksibel (remote)",
        need: "-",
        description: "Mempromosikan YussXy Store di media sosial TikTok.",
        qualifications: [
            "Aktif di TikTok",
            "Bisa membuat konten promosi yang menarik",
            "Jujur dan bertanggung jawab"
        ],
        note: "1. Harus minta izin tiap mau buat konten promosi. Promosi tanpa izin dianggap tidak sah, dan tidak akan mendapat bayaran.\n\n2. Mencantumkan nama owner 'YussXy' di konten, mengirimkan link saluran dan link aplikasi YussXy, di komentar maupun di video."
    },


    

    
    {
        id: 2,
        name: "Desainer Grafis",
        icon: "ri-palette-line",
        status: "open",
        salary: "Diskusi (harga menyesuaikan desain)",
        schedule: "Fleksibel (remote)",
        need: "-",
        description: "Membuat poster, banner, thumbnail, dan desain lainnya untuk kebutuhan promosi YussXy Store.",
        qualifications: [
            "Menguasai Canva / Photoshop / CorelDRAW",
            "Kreatif dan teliti",
            "Memiliki portofolio",
            "Cepat merespon pesan"
        ],
        note: "Admin akan membayar desain yang dibuat. Harga harus didiskusikan terlebih dahulu."
    },
    {
        id: 3,
        name: "JPM (Jasa Push Member)",
        icon: "ri-group-line",
        status: "open",
        salary: "Diskusi",
        schedule: "Fleksibel (remote)",
        need: "-",
        description: "Membantu push member untuk saluran WhatsApp atau grup chat.",
        qualifications: [
            "Aktif di WhatsApp",
            "Punya banyak kontak/group",
            "Jujur dan bertanggung jawab",
            "Bisa bekerja dengan target"
        ],
        note: "Harga harus didiskusikan terlebih dahulu sesuai dengan target yang diinginkan."
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
// WHATSAPP CONFIRMATION
// ================================================
function sendWhatsAppConfirmation(orderDetails) {
    const { jam, tanggal, tahun } = getCurrentDateTime();
    
    let message = `Halo Yuss Xy 👋%0A%0A`;
    message += `Saya ingin melakukan konfirmasi pembelian.%0A%0A`;
    message += `📦 Detail Pesanan%0A%0A`;
    
    orderDetails.items.forEach((item) => {
        message += `• Produk: ${item.name} (${item.quantity}x)%0A`;
        
        // Username Panel (untuk produk Panel Pterodactyl)
        if (item.panelUsername || (orderDetails.isPanelService && orderDetails.panelUsername)) {
            const username = item.panelUsername || orderDetails.panelUsername;
            message += `• Username Panel: ${username}%0A`;
        }
        
        // RAM untuk panel
        if (item.ram || orderDetails.panelRam) {
            const ram = item.ram || orderDetails.panelRam;
            message += `• RAM: ${ram}%0A`;
        }
        
        // Nomor target (untuk Jasa Bug)
        if (item.targetNumber || (orderDetails.isBugService && orderDetails.bugTarget)) {
            const target = item.targetNumber || orderDetails.bugTarget;
            message += `• Nomor Target: ${target}%0A`;
        }
        
        // Reaction Service (untuk Reaction Pesan Saluran WA)
        if (item.reactionLink || (orderDetails.isReactionService && orderDetails.reactionLink)) {
            const link = item.reactionLink || orderDetails.reactionLink;
            let emoji = item.reactionEmoji || orderDetails.reactionEmoji;
            
            // Cara aman pisahkan emoji dengan koma
            let formattedEmoji = '';
            for (let i = 0; i < emoji.length; i++) {
                const code = emoji.charCodeAt(i);
                // Deteksi emoji (high surrogate)
                if (code >= 0xD800 && code <= 0xDBFF) {
                    // Ambil 2 karakter untuk 1 emoji
                    formattedEmoji += emoji[i] + emoji[i+1];
                    if (i + 2 < emoji.length) formattedEmoji += ', ';
                    i++; // Lompati karakter berikutnya
                } else if (code > 0x7F) {
                    // Karakter non-ASCII (termasuk emoji sederhana)
                    formattedEmoji += emoji[i];
                    if (i + 1 < emoji.length) formattedEmoji += ', ';
                } else {
                    // Karakter biasa
                    formattedEmoji += emoji[i];
                    if (i + 1 < emoji.length) formattedEmoji += ', ';
                }
            }
            
            message += `• Link Pesan: ${link}%0A`;
            message += `• Emoji: ${formattedEmoji}%0A`;
        }
    });
    
    message += `• Jumlah: ${orderDetails.totalItems} Item%0A`;
    message += `• Total Harga: Rp${orderDetails.totalPrice.toLocaleString('id-ID')}%0A`;
    message += `• Waktu: ${jam} • ${tanggal} ${tahun}%0A%0A`;
    message += `✅ Pembayaran sudah saya lakukan.%0A%0A`;
    message += `Mohon segera diproses untuk layanan yang telah saya pesan.%0A`;
    message += `Terima kasih 🙏%0A`;
    
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
        let diskonClass = '';

        // Tentukan badge dan status
        if (product.type === 'hot') {
            badgeHtml = '<div class="product-badge badge-hot"><i class="ri-fire-line"></i> HOT</div>';
        } else if (product.type === 'rekomendasi') {
            badgeHtml = '<div class="product-badge badge-rekomendasi"><i class="ri-star-line"></i> REKOMENDASI</div>';
        } else if (product.type === 'new') {
            badgeHtml = '<div class="product-badge badge-new"><i class="ri-flashlight-line"></i> NEW</div>';
        } else if (product.type === 'diskon') {
            badgeHtml = '<div class="product-badge badge-diskon"><i class="ri-price-tag-3-line"></i> DISKON</div>';
            diskonClass = 'product-diskon';
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
        
        
        
        
        
        // Tampilkan harga diskon dengan animasi
        let priceHtml = `<div class="product-price">${getDisplayPrice(product)}</div>`;
        if (product.type === 'diskon' && product.oldPrice) {
            const diskonPersen = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
            priceHtml = `
                <div class="product-price discount-animate">
                    <span class="old-price">${formatPrice(product.oldPrice)}</span>
                    <span class="discount-price">${getDisplayPrice(product)}</span>
                    <span class="discount-badge">-${diskonPersen}%</span>
                </div>
            `;
        }
        
        
        // Di dalam renderProducts(), untuk produk isSocialMediaService
if (product.isSocialMediaService) {
    return `
        <div class="product-card ${disabledClass}" data-product-id="${product.id}">
            <div class="product-image-wrapper">
                ${badgeHtml}
                <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://placehold.co/300x300/333/white?text=Error'">
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                ${priceHtml}
                <div class="product-buttons">
                    <button class="btn-buy-now" onclick="event.stopPropagation(); showSocialMediaModal();" style="background: linear-gradient(90deg, #8b5cf6, #7c3aed);">
                        <i class="ri-flashlight-line"></i> Pesan
                    </button>
                    <button class="btn-add-cart" onclick="event.stopPropagation(); addSocialMediaToCart();">
                        <i class="ri-shopping-cart-line"></i> Keranjang
                    </button>
                </div>
            </div>
        </div>
    `;
}
        
        
        
        // CEK APAKAH PRODUK BUNDLE APLIKASI
        if (product.isAppBundle) {
            return `
                <div class="product-card ${disabledClass}" data-product-id="${product.id}">
                    <div class="product-image-wrapper">
                        ${badgeHtml}
                        <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://placehold.co/300x300/333/white?text=Error'">
                    </div>
                    <div class="product-info">
                        <div class="product-name">${product.name}</div>
                        ${priceHtml}
                        <div class="product-buttons">
                            <button class="btn-buy-now" onclick="event.stopPropagation(); showAppBundleModal();" style="background: linear-gradient(90deg, #3b82f6, #2563eb);">
                                <i class="ri-apps-line"></i> Lihat
                            </button>
                            <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id});" ${disabledCart}>
                                <i class="ri-shopping-cart-line"></i> Keranjang
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }
        
        
        
        
        // PRODUK BIASA
        return `
            <div class="product-card ${disabledClass}" data-product-id="${product.id}">
                <div class="product-image-wrapper">
                    ${badgeHtml}
                    <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://placehold.co/300x300/333/white?text=Error'">
                </div>
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    ${priceHtml}
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
// SHOW PRODUCT DETAIL MODAL (UPDATE)
// ================================================






// ================================================
// MODAL INPUT USERNAME UNTUK PANEL PTERODACTYL
// ================================================
function showUsernameModalForPanel() {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 320px;">
            <div class="modal-header">
                <h3><i class="ri-server-line"></i> Detail Panel</h3>
                <button class="modal-close" onclick="this.closest('.modal').remove()">
                    <i class="ri-close-line"></i>
                </button>
            </div>
            <div class="modal-body" style="text-align: left;">
                <p style="margin-bottom: 16px; font-size: 13px; color: var(--text-secondary);">
                    Anda telah memilih RAM: <strong>${window.selectedVariantData.ram}</strong>
                </p>
                <div style="margin-bottom: 20px;">
                    <label style="display: block; font-size: 13px; margin-bottom: 8px; font-weight: 600;">
                        <i class="ri-user-line"></i> Masukkan Username Panel:
                    </label>
                    <input type="text" id="panelUsername" placeholder="Contoh: yussxy123" 
                           style="width: 100%; padding: 12px; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 12px; color: white; font-size: 14px;">
                </div>
                <button class="btn-buy-now" id="proceedToPanelPayment" style="width: 100%;">
                    <i class="ri-flashlight-line"></i> Bayar Rp ${formatPrice(window.selectedVariantData.price)}
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    document.getElementById('proceedToPanelPayment').addEventListener('click', function() {
        const username = document.getElementById('panelUsername').value.trim();
        if (!username) {
            showToast('❌ Masukkan username panel terlebih dahulu!', true);
            return;
        }
        
        // Buat produk dengan varian dan username
        const productWithVariant = {
            id: window.selectedVariantData.productId,
            name: `${window.selectedVariantData.productName} (${window.selectedVariantData.ram})`,
            price: window.selectedVariantData.price,
            image: window.selectedVariantData.productImage,
            description: window.selectedVariantData.productDescription,
            variantName: window.selectedVariantData.ram,
            panelUsername: username
        };
        
        // Tutup modal input
        modal.remove();
        
        // Lanjut ke QRIS
        const totalPrice = productWithVariant.price;
        const qrTotal = document.getElementById('qrTotal');
        if (qrTotal) qrTotal.textContent = formatPrice(totalPrice);
        
        const qrisModal = document.getElementById('qrisModal');
        if (qrisModal) qrisModal.classList.add('active');
        
        window.pendingOrder = {
            items: [{ 
                name: productWithVariant.name, 
                quantity: 1,
                panelUsername: username,
                ram: window.selectedVariantData.ram
            }],
            totalItems: 1,
            totalPrice: totalPrice,
            isPanelService: true,
            panelUsername: username,
            panelRam: window.selectedVariantData.ram
        };
        
        closeProductModal();
        
        // Reset data
        window.selectedVariantData = null;
    });
}


function selectVariantAndAddToCart(productId, price, ram) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Simpan data varian yang dipilih untuk keranjang
    window.selectedVariantData = {
        productId: productId,
        price: price,
        ram: ram,
        productName: product.name,
        productImage: product.image,
        action: 'addToCart'  // Tandai ini untuk keranjang
    };
    
    // Tutup modal varian
    const variantModal = document.getElementById('variantModal');
    if (variantModal) variantModal.classList.remove('active');
    
    // Tampilkan modal input username
    showUsernameModalForPanelCart();
}

// ================================================
// MODAL INPUT USERNAME UNTUK KERANJANG PANEL
// ================================================
function showUsernameModalForPanelCart() {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 320px;">
            <div class="modal-header">
                <h3><i class="ri-server-line"></i> Detail Panel</h3>
                <button class="modal-close" onclick="this.closest('.modal').remove()">
                    <i class="ri-close-line"></i>
                </button>
            </div>
            <div class="modal-body" style="text-align: left;">
                <p style="margin-bottom: 16px; font-size: 13px; color: var(--text-secondary);">
                    Anda telah memilih RAM: <strong>${window.selectedVariantData.ram}</strong>
                </p>
                <div style="margin-bottom: 20px;">
                    <label style="display: block; font-size: 13px; margin-bottom: 8px; font-weight: 600;">
                        <i class="ri-user-line"></i> Masukkan Username Panel:
                    </label>
                    <input type="text" id="panelUsernameCart" placeholder="Contoh: yussxy123" 
                           style="width: 100%; padding: 12px; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 12px; color: white; font-size: 14px;">
                </div>
                <button class="btn-add-cart" id="proceedToCartPanel" style="width: 100%;">
                    <i class="ri-shopping-cart-line"></i> Tambah ke Keranjang
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    document.getElementById('proceedToCartPanel').addEventListener('click', function() {
        const username = document.getElementById('panelUsernameCart').value.trim();
        if (!username) {
            showToast('❌ Masukkan username panel terlebih dahulu!', true);
            return;
        }
        
        // Buat produk dengan varian dan username
        const productWithVariant = {
            id: window.selectedVariantData.productId,
            name: `${window.selectedVariantData.productName} (${window.selectedVariantData.ram})`,
            price: window.selectedVariantData.price,
            image: window.selectedVariantData.productImage,
            quantity: 1,
            panelUsername: username,    // SIMPAN USERNAME
            ram: window.selectedVariantData.ram
        };
        
        // Cek apakah sudah ada di keranjang (termasuk username yang sama)
        const existingItem = cart.find(item => 
            item.id === productWithVariant.id && 
            item.name === productWithVariant.name &&
            item.panelUsername === username
        );
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push(productWithVariant);
        }
        
        saveCart();
        renderCart();
        
        // Tutup modal input
        modal.remove();
        
        showToast(`${productWithVariant.name} ditambahkan ke keranjang!`);
        closeProductModal();
        
        // Reset data
        window.selectedVariantData = null;
    });
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
    
    
    
    
    // CEK APAKAH PRODUK PERLU TANYA STOK DULU
    if (product.isAskStock) {
        askStock(product);
        return;
    }
    
    
    
    // CEK APAKAH PRODUK REACTION SERVICE
    if (product.isReactionService) {
        showReactionModal(product);
        return;
    }
    
    
    
     if (product.isConsultation) {
        showConsultationModal(product);
        return;
    }
    
    
    // CEK APAKAH PRODUK JASA BUG
    if (product.isBugService) {
        showBugTargetModal(product);
        return;
    }
    
    
    // CEK APAKAH PRODUK EBOOX
    if (product.isEboox) {
        console.log("Ini produk Eboox, buka modal tanya owner");
        showProductDetail(product.id);
        return;
    }
    
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
        // Pastikan data bug target tetap ada
        if (window.pendingBugTarget && !window.pendingOrder.bugTarget) {
            window.pendingOrder.bugTarget = window.pendingBugTarget;
            window.pendingOrder.isBugService = true;
        }
        
        sendWhatsAppConfirmation(window.pendingOrder);
        
        cart = [];
        saveCart();
        renderCart();
        
        const modal = document.getElementById('qrisModal');
        if (modal) modal.classList.remove('active');
        
        navigateToPage('products');
        
        showToast('Pesanan berhasil dikonfirmasi!');
        
        // Reset
        window.pendingOrder = null;
        window.pendingBugTarget = null;
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
    
    
    if (pageName === 'testimoni') {
        renderTestimonials();
    }
    
    if (pageName === 'free') {
    if (typeof renderFreeProducts === 'function') {
        renderFreeProducts();
    } else {
        console.log("renderFreeProducts belum siap");
    }
}
    
    
if (pageName === 'sendmail') {
    // No init needed
}
    
if (pageName === 'loker') {
    renderLoker();
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
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
    
    
    
    
    
 // ================================================
// DARK/LIGHT MODE TOGGLE
// ================================================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle?.querySelector('i');

// Cek tema tersimpan di localStorage
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    if (themeIcon) {
        themeIcon.className = 'ri-moon-line';
    }
}

// Toggle tema saat tombol diklik
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            if (themeIcon) themeIcon.className = 'ri-moon-line';
        } else {
            localStorage.setItem('theme', 'dark');
            if (themeIcon) themeIcon.className = 'ri-sun-line';
        }
    });
}   
    
    
    
    
    
    
    
    
    
    
//🍚🍚🙏🍚🙏🍚🙏🍚
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
    
    // Channel button (menggunakan variabel WHATSAPP_CHANNEL_URL)
    const channelBtn = document.getElementById('channelBtn');
    if (channelBtn) {
        channelBtn.addEventListener('click', () => {
            window.open(WHATSAPP_CHANNEL_URL, '_blank');
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
    
    // ========== EVENT LISTENER MODAL UPDATE VERSI ==========
    const closeUpdateModal = document.getElementById('closeUpdateModal');
    const cancelUpdateBtn = document.getElementById('cancelUpdateBtn');
    const okUpdateBtn = document.getElementById('okUpdateBtn');
    
    if (closeUpdateModal) {
        closeUpdateModal.addEventListener('click', closeUpdateConfirmModal);
    }
    
    if (cancelUpdateBtn) {
        cancelUpdateBtn.addEventListener('click', closeUpdateConfirmModal);
    }
    
    if (okUpdateBtn) {
        okUpdateBtn.addEventListener('click', function() {
            if (pendingUpdateCallback) {
                pendingUpdateCallback();
            }
            closeUpdateConfirmModal();
        });
    }
    
    const updateModal = document.getElementById('updateConfirmModal');
    if (updateModal) {
        updateModal.addEventListener('click', function(e) {
            if (e.target === updateModal) {
                closeUpdateConfirmModal();
            }
        });
    }
    
    // ========== CEK VERSI APLIKASI ==========
    checkAppVersion();
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
    
   /* const tools = ['toolTiktok', 'toolYoutube', 'toolSpotify', 'toolFacebook', 'toolCapcut', 'toolInstagram', 'toolFakelobby', 'toolFakedana', 'toolFakelobbyml', 'toolFakejago', 'toolPassword', 'toolLorem', 'toolQrcode'];*/
    tools.forEach(tool => {
        const el = document.getElementById(tool);
        if (el) el.style.display = 'none';
    });
    
    if (toolName === 'tiktok') {
        document.getElementById('toolTiktok').style.display = 'block';
    } 
    else if (toolName === 'youtube') {
        document.getElementById('toolYoutube').style.display = 'block';
    } 
    else if (toolName === 'spotify') {
        document.getElementById('toolSpotify').style.display = 'block';
    } 
    else if (toolName === 'facebook') {
        document.getElementById('toolFacebook').style.display = 'block';
    } 
    else if (toolName === 'capcut') {
        document.getElementById('toolCapcut').style.display = 'block';
    } 
    else if (toolName === 'instagram') {
        document.getElementById('toolInstagram').style.display = 'block';
    } 
    else if (toolName === 'fakelobby') {
        document.getElementById('toolFakelobby').style.display = 'block';
    } 
    else if (toolName === 'fakedana') {
        document.getElementById('toolFakedana').style.display = 'block';
    } 
    else if (toolName === 'fakelobbyml') {
        document.getElementById('toolFakelobbyml').style.display = 'block';
    } 
    else if (toolName === 'fakejago') {
        document.getElementById('toolFakejago').style.display = 'block';
    } 
    else if (toolName === 'password') {
        document.getElementById('toolPassword').style.display = 'block';
        setTimeout(() => generatePassword(), 100);
    } 
    else if (toolName === 'lorem') {
        document.getElementById('toolLorem').style.display = 'block';
        setTimeout(() => initLorem(), 100);
    } 
    
    else if (toolName === 'sertifikatlol') {
    document.getElementById('toolSertifikatlol').style.display = 'block';
}
    
    else if (toolName === 'wrMLBB') {
    document.getElementById('toolWrMLBB').style.display = 'block';
}
    
else if (toolName === 'emojimix') {
    document.getElementById('toolEmojimix').style.display = 'block';
}


else if (toolName === 'tiktokhashtag') {
    document.getElementById('toolTiktokhashtag').style.display = 'block';
}


else if (toolName === 'translate') {
    document.getElementById('toolTranslate').style.display = 'block';
}




else if (toolName === 'spotifysearch') {
    document.getElementById('toolSpotifysearch').style.display = 'block';
}


else if (toolName === 'lyrics') {
    document.getElementById('toolLyrics').style.display = 'block';
}

else if (toolName === 'ytsearch') {
    document.getElementById('toolYtsearch').style.display = 'block';
}

else if (toolName === 'ppcouple') {
    document.getElementById('toolPpcouple').style.display = 'block';
}

































    
    
    else if (toolName === 'qrcode') {
        document.getElementById('toolQrcode').style.display = 'block';
        // Reset form
        const qrText = document.getElementById('qrText');
        if (qrText) qrText.value = '';
        const qrResult = document.getElementById('qrResult');
        if (qrResult) qrResult.style.display = 'none';
        const downloadBtn = document.getElementById('downloadQrBtn');
        if (downloadBtn) downloadBtn.style.display = 'none';
        const canvas = document.getElementById('qrCanvas');
        if (canvas) {
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
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
// TOOL PP COUPLE
// ================================================
const generateCoupleBtn = document.getElementById('generateCoupleBtn');
const coupleResult = document.getElementById('coupleResult');
const cowoImage = document.getElementById('cowoImage');
const ceweImage = document.getElementById('ceweImage');

let currentCowoUrl = '';
let currentCeweUrl = '';

async function generatePpCouple() {
    coupleResult.style.display = 'block';
    coupleResult.innerHTML = '<div class="yt-loading"><i class="ri-loader-4-line"></i> Mencari foto couple...</div>';
    
    try {
        const apiUrl = 'https://kyzznekoo.zone.id/api/image/ppcouple';
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.status === true && data.result) {
            currentCowoUrl = data.result.cowo;
            currentCeweUrl = data.result.cewe;
            
            let html = `
                <div class="couple-images">
                    <div class="couple-image-card">
                        <div class="couple-label">👨 Cowok</div>
                        <img src="${currentCowoUrl}" class="couple-img" alt="Foto Cowok" onerror="this.src='https://placehold.co/150x150/333/white?text=Error'">
                        <div class="couple-buttons">
                            <button class="couple-download-btn" id="downloadCowoBtn">
                                <i class="ri-download-line"></i> Download
                            </button>
                            <button class="couple-copy-btn" id="copyCowoLinkBtn">
                                <i class="ri-file-copy-line"></i> Copy Link
                            </button>
                        </div>
                    </div>
                    <div class="couple-image-card">
                        <div class="couple-label">👩 Cewek</div>
                        <img src="${currentCeweUrl}" class="couple-img" alt="Foto Cewek" onerror="this.src='https://placehold.co/150x150/333/white?text=Error'">
                        <div class="couple-buttons">
                            <button class="couple-download-btn" id="downloadCeweBtn">
                                <i class="ri-download-line"></i> Download
                            </button>
                            <button class="couple-copy-btn" id="copyCeweLinkBtn">
                                <i class="ri-file-copy-line"></i> Copy Link
                            </button>
                        </div>
                    </div>
                </div>
            `;
            coupleResult.innerHTML = html;
            
            // Event listener untuk cowok
            const downloadCowoBtn = document.getElementById('downloadCowoBtn');
            const copyCowoLinkBtn = document.getElementById('copyCowoLinkBtn');
            
            if (downloadCowoBtn) {
                downloadCowoBtn.addEventListener('click', () => {
                    downloadImage(currentCowoUrl, 'pp_couple_cowo');
                });
            }
            if (copyCowoLinkBtn) {
                copyCowoLinkBtn.addEventListener('click', () => {
                    copyToClipboard(currentCowoUrl, 'Link cowok');
                });
            }
            
            // Event listener untuk cewek
            const downloadCeweBtn = document.getElementById('downloadCeweBtn');
            const copyCeweLinkBtn = document.getElementById('copyCeweLinkBtn');
            
            if (downloadCeweBtn) {
                downloadCeweBtn.addEventListener('click', () => {
                    downloadImage(currentCeweUrl, 'pp_couple_cewe');
                });
            }
            if (copyCeweLinkBtn) {
                copyCeweLinkBtn.addEventListener('click', () => {
                    copyToClipboard(currentCeweUrl, 'Link cewek');
                });
            }
            
            showToast('✅ Foto couple berhasil di-generate!');
        } else {
            coupleResult.innerHTML = '<div class="yt-error">❌ Gagal mengambil foto couple. Coba lagi nanti.</div>';
            showToast('❌ Gagal mengambil foto', true);
        }
    } catch(e) {
        console.error('Error:', e);
        coupleResult.innerHTML = `<div class="yt-error">❌ Error: ${e.message}</div>`;
        showToast('❌ Gagal koneksi ke server', true);
    }
}

function downloadImage(url, filename) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `${filename}.jpg`;
            link.click();
            URL.revokeObjectURL(link.href);
            showToast('⏬ Download dimulai...');
        })
        .catch(() => {
            showToast('❌ Gagal download gambar', true);
        });
}

function copyToClipboard(text, label) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(`✅ ${label} berhasil disalin!`);
    }).catch(() => {
        showToast(`❌ Gagal menyalin ${label}`, true);
    });
}

if (generateCoupleBtn) {
    generateCoupleBtn.addEventListener('click', generatePpCouple);
}









// ================================================
// TOOL YOUTUBE SEARCH
// ================================================
const searchYtBtn = document.getElementById('searchYtBtn');
const ytSearchInput = document.getElementById('ytSearchInput');
const ytSearchResult = document.getElementById('ytSearchResult');

// Fungsi format views
function formatViews(views) {
    if (!views) return '0 views';
    // Jika sudah dalam format "34,147,928 views"
    if (views.includes('views')) return views;
    return views;
}

// Fungsi utama pencarian
async function performYtSearch(query) {
    if (!query) return;
    
    ytSearchResult.style.display = 'block';
    ytSearchResult.innerHTML = '<div class="yt-loading"><i class="ri-loader-4-line"></i> Mencari video...</div>';
    
    try {
        const encodedQuery = encodeURIComponent(query);
        const apiUrl = `https://kyzznekoo.zone.id/api/search/youtube?q=${encodedQuery}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.status === true && data.results && data.results.length > 0) {
            const videos = data.results;
            
            let html = `<div style="margin-bottom: 12px; font-size: 12px; color: var(--text-secondary);">🎬 Ditemukan ${data.totalResults || videos.length} video untuk "${escapeHtml(query)}"</div>`;
            
            videos.forEach(video => {
                // Format views
                let viewText = video.views ? (video.views.includes('views') ? video.views : `${video.views} views`) : '-';
                
                html += `
                    <div class="yt-video-card">
                        <img src="${video.thumbnail}" class="yt-thumbnail" alt="Thumbnail" onerror="this.src='https://placehold.co/100x56/333/white?text=Error'">
                        <div class="yt-video-info">
                            <div class="yt-video-title">${escapeHtml(video.title)}</div>
                            <div class="yt-video-channel">
                                <i class="ri-user-line"></i> ${escapeHtml(video.channel || 'Unknown')}
                            </div>
                            <div class="yt-video-meta">
                                <span><i class="ri-time-line"></i> ${video.duration || '-'}</span>
                                <span><i class="ri-eye-line"></i> ${viewText}</span>
                            </div>
                            <div class="yt-video-buttons">
                                <button class="yt-btn yt-btn-watch" onclick="window.open('${video.url}', '_blank')">
                                    <i class="ri-play-line"></i> Tonton
                                </button>
                                <button class="yt-btn yt-btn-copy" onclick="copyYtLink('${video.url}')">
                                    <i class="ri-file-copy-line"></i> Salin Link
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });
            
            ytSearchResult.innerHTML = html;
            showToast(`✅ Ditemukan ${videos.length} video`);
        } else if (data.status === false && data.error) {
            ytSearchResult.innerHTML = `<div class="yt-error">❌ ${escapeHtml(data.error)}</div>`;
            showToast(`❌ ${data.error}`, true);
        } else {
            ytSearchResult.innerHTML = '<div class="yt-empty">🎬 Tidak ada video ditemukan. Coba kata kunci lain.</div>';
            showToast('❌ Tidak ada hasil', true);
        }
    } catch(e) {
        console.error('Error:', e);
        ytSearchResult.innerHTML = `<div class="yt-error">❌ Error: ${e.message}</div>`;
        showToast('❌ Gagal koneksi ke server', true);
    }
}

// Fungsi copy link
function copyYtLink(url) {
    navigator.clipboard.writeText(url).then(() => {
        showToast('✅ Link YouTube berhasil disalin!');
    }).catch(() => {
        showToast('❌ Gagal menyalin link', true);
    });
}

// Event listener tombol cari
if (searchYtBtn) {
    searchYtBtn.addEventListener('click', function() {
        const query = ytSearchInput.value.trim();
        if (!query) {
            showToast('❌ Masukkan kata kunci pencarian!', true);
            return;
        }
        performYtSearch(query);
    });
}

// Enter key support
if (ytSearchInput) {
    ytSearchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = ytSearchInput.value.trim();
            if (query) {
                performYtSearch(query);
            }
        }
    });
}




// ================================================
// TOOL LIRIK LAGU
// ================================================
const searchLyricsBtn = document.getElementById('searchLyricsBtn');
const lyricsSearchInput = document.getElementById('lyricsSearchInput');
const lyricsResult = document.getElementById('lyricsResult');

let currentLyricsData = null;
let currentMode = 'plain'; // 'plain' or 'synced'

// Fungsi render lirik
function renderLyrics(mode) {
    if (!currentLyricsData) return;
    
    const lyrics = currentLyricsData.lyrics;
    let lyricsHtml = '';
    
    if (mode === 'synced' && lyrics.synced_lyrics && lyrics.synced_lyrics !== '-') {
        // Parse synced lyrics
        const lines = lyrics.synced_lyrics.split('\n');
        lines.forEach(line => {
            const match = line.match(/\[(\d{2}):(\d{2})\.(\d{2})\]\s*(.+)/);
            if (match) {
                const minutes = match[1];
                const seconds = match[2];
                const text = match[4];
                if (text.trim()) {
                    lyricsHtml += `<div class="synced-line"><span class="synced-time">[${minutes}:${seconds}]</span><span class="synced-text">${escapeHtml(text)}</span></div>`;
                }
            } else if (line.trim()) {
                lyricsHtml += `<div class="synced-line"><span class="synced-text">${escapeHtml(line)}</span></div>`;
            }
        });
    } else {
        // Plain lyrics
        const plainText = lyrics.plain_lyrics || '';
        lyricsHtml = `<div class="plain-lyrics">${escapeHtml(plainText).replace(/\n/g, '<br>')}</div>`;
    }
    
    const lyricsContent = document.getElementById('lyricsContent');
    if (lyricsContent) {
        lyricsContent.innerHTML = lyricsHtml;
    }
}

// Fungsi utama pencarian lirik
async function performLyricsSearch(query) {
    if (!query) return;
    
    lyricsResult.style.display = 'block';
    lyricsResult.innerHTML = '<div class="lyrics-loading"><i class="ri-loader-4-line"></i> Mencari lirik...</div>';
    
    try {
        const encodedQuery = encodeURIComponent(query);
        const apiUrl = `https://api.nexray.eu.cc/search/lyrics?q=${encodedQuery}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.status && data.result && data.result.lyrics) {
            const result = data.result;
            const lyrics = result.lyrics;
            
            currentLyricsData = result;
            
            // Format durasi
            let durationText = '';
            if (lyrics.duration) {
                const minutes = Math.floor(lyrics.duration / 60);
                const seconds = lyrics.duration % 60;
                durationText = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            }
            
            // Cek apakah ada synced lyrics
            const hasSynced = lyrics.synced_lyrics && lyrics.synced_lyrics !== '-';
            
            let html = `
                <div class="lyrics-track-card">
                    <div class="lyrics-track-header">
                        ${result.thumbnail ? `<img src="${result.thumbnail}" class="lyrics-thumbnail" onerror="this.src='https://placehold.co/80x80/333/white?text=🎵'">` : '<div class="lyrics-thumbnail" style="background: var(--bg-secondary); display: flex; align-items: center; justify-content: center;"><i class="ri-music-line" style="font-size: 32px;"></i></div>'}
                        <div class="lyrics-track-info">
                            <div class="lyrics-track-title">${escapeHtml(result.title || lyrics.track_name || 'Unknown Title')}</div>
                            <div class="lyrics-track-artist">${escapeHtml(result.artist || lyrics.artist_name || 'Unknown Artist')}</div>
                            <div class="lyrics-track-meta">
                                ${lyrics.album_name ? `<span><i class="ri-album-line"></i> ${escapeHtml(lyrics.album_name)}</span>` : ''}
                                ${durationText ? `<span><i class="ri-time-line"></i> ${durationText}</span>` : ''}
                            </div>
                        </div>
                    </div>
                    
                    ${hasSynced ? `
                    <div class="lyrics-mode-toggle" id="lyricsModeToggle">
                        <button class="lyrics-mode-btn ${currentMode === 'plain' ? 'active' : ''}" data-mode="plain">📄 Lirik Biasa</button>
                        <button class="lyrics-mode-btn ${currentMode === 'synced' ? 'active' : ''}" data-mode="synced">🎤 Lirik Sinkron</button>
                    </div>
                    ` : ''}
                    
                    <div class="lyrics-content" id="lyricsContent"></div>
                    
                    <button class="copy-lyrics-btn" id="copyLyricsBtn">
                        <i class="ri-file-copy-line"></i> Salin Lirik
                    </button>
                </div>
            `;
            
            lyricsResult.innerHTML = html;
            
            // Render lirik sesuai mode
            renderLyrics(currentMode);
            
            // Event listener untuk toggle mode
            if (hasSynced) {
                document.querySelectorAll('.lyrics-mode-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const mode = btn.dataset.mode;
                        currentMode = mode;
                        document.querySelectorAll('.lyrics-mode-btn').forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                        renderLyrics(currentMode);
                    });
                });
            }
            
            // Event listener copy
            const copyBtn = document.getElementById('copyLyricsBtn');
            if (copyBtn) {
                copyBtn.addEventListener('click', () => {
                    let textToCopy = '';
                    if (currentMode === 'synced' && currentLyricsData.lyrics.synced_lyrics && currentLyricsData.lyrics.synced_lyrics !== '-') {
                        textToCopy = currentLyricsData.lyrics.synced_lyrics;
                    } else {
                        textToCopy = currentLyricsData.lyrics.plain_lyrics || '';
                    }
                    
                    navigator.clipboard.writeText(textToCopy).then(() => {
                        showToast('✅ Lirik berhasil disalin!');
                    }).catch(() => {
                        showToast('❌ Gagal menyalin lirik', true);
                    });
                });
            }
            
            showToast(`✅ Lirik "${result.title || lyrics.track_name}" ditemukan`);
        } else {
            lyricsResult.innerHTML = '<div class="lyrics-empty">🎵 Lirik tidak ditemukan. Coba judul lagu lain.</div>';
            showToast('❌ Lirik tidak ditemukan', true);
        }
    } catch(e) {
        console.error('Error:', e);
        lyricsResult.innerHTML = `<div class="lyrics-error">❌ Error: ${e.message}</div>`;
        showToast('❌ Gagal koneksi ke server', true);
    }
}

// Event listener tombol cari
if (searchLyricsBtn) {
    searchLyricsBtn.addEventListener('click', function() {
        const query = lyricsSearchInput.value.trim();
        if (!query) {
            showToast('❌ Masukkan judul lagu!', true);
            return;
        }
        currentMode = 'plain';
        performLyricsSearch(query);
    });
}

// Enter key support
if (lyricsSearchInput) {
    lyricsSearchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = lyricsSearchInput.value.trim();
            if (query) {
                currentMode = 'plain';
                performLyricsSearch(query);
            }
        }
    });
}






// ================================================
// TOOL SPOTIFY SEARCH
// ================================================
const searchSpotifyBtn = document.getElementById('searchSpotifyBtn');
const spotifySearchInput = document.getElementById('spotifySearchInput');
const spotifySearchResult = document.getElementById('spotifySearchResult');

// Fungsi untuk mencari lagu lain dengan judul yang sama
function searchOtherVersions(title, artist) {
    // Ambil kata kunci dari judul (hapus nama artis jika ada)
    let searchQuery = title;
    if (artist && title.toLowerCase().includes(artist.toLowerCase())) {
        searchQuery = title;
    }
    // Isi input dan trigger pencarian
    if (spotifySearchInput) {
        spotifySearchInput.value = searchQuery;
        performSpotifySearch(searchQuery);
    }
}

// Fungsi utama pencarian
async function performSpotifySearch(query) {
    if (!query) return;
    
    spotifySearchResult.style.display = 'block';
    spotifySearchResult.innerHTML = '<div class="spotify-loading"><i class="ri-loader-4-line"></i> Mencari lagu...</div>';
    
    try {
        const encodedQuery = encodeURIComponent(query);
        const apiUrl = `https://api.nexray.eu.cc/search/spotify?q=${encodedQuery}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.status && data.result && data.result.length > 0) {
            const tracks = data.result;
            
            let html = `<div style="margin-bottom: 12px; font-size: 12px; color: var(--text-secondary);">🎵 Ditemukan ${tracks.length} lagu</div>`;
            
            tracks.forEach((track, index) => {
                // Format tanggal rilis
                let releaseDate = '';
                if (track.release_date) {
                    const date = new Date(track.release_date);
                    if (!isNaN(date.getTime())) {
                        releaseDate = date.toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' });
                    } else {
                        releaseDate = track.release_date;
                    }
                }
                
                html += `
                    <div class="spotify-track-card" data-track-url="${escapeHtml(track.url)}">
                        <img src="${track.thumbnail}" class="spotify-thumbnail" alt="Thumbnail" onerror="this.src='https://placehold.co/60x60/333/white?text=🎵'">
                        <div class="spotify-track-info">
                            <div class="spotify-track-title">${escapeHtml(track.title)}</div>
                            <div class="spotify-track-artist">${escapeHtml(track.artist)}</div>
                            <div class="spotify-track-meta">
                                <span><i class="ri-time-line"></i> ${track.duration || '-'}</span>
                                <span><i class="ri-album-line"></i> ${escapeHtml(track.album || '-')}</span>
                                ${releaseDate ? `<span><i class="ri-calendar-line"></i> ${releaseDate}</span>` : ''}
                                <span class="spotify-popularity"><i class="ri-heart-line"></i> ${track.popularity || 0}%</span>
                            </div>
                            <div class="spotify-track-buttons">
                                <button class="spotify-btn spotify-btn-copy" onclick="copySpotifyLink('${escapeHtml(track.url)}')">
                                    <i class="ri-file-copy-line"></i> Salin Link
                                </button>
                                <button class="spotify-btn spotify-btn-open" onclick="window.open('${escapeHtml(track.url)}', '_blank')">
                                    <i class="ri-external-link-line"></i> Buka di Spotify
                                </button>
                                <button class="spotify-btn spotify-btn-other" onclick="searchOtherVersions('${escapeHtml(track.title)}', '${escapeHtml(track.artist)}')">
                                    <i class="ri-music-line"></i> Cari Lagu Lain
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });
            
            spotifySearchResult.innerHTML = html;
            showToast(`✅ Ditemukan ${tracks.length} lagu`);
        } else {
            spotifySearchResult.innerHTML = '<div class="spotify-empty">🎵 Tidak ada lagu ditemukan. Coba kata kunci lain.</div>';
            showToast('❌ Tidak ada hasil', true);
        }
    } catch(e) {
        console.error('Error:', e);
        spotifySearchResult.innerHTML = `<div class="spotify-error">❌ Error: ${e.message}</div>`;
        showToast('❌ Gagal koneksi ke server', true);
    }
}

// Fungsi copy link Spotify
function copySpotifyLink(url) {
    navigator.clipboard.writeText(url).then(() => {
        showToast('✅ Link Spotify berhasil disalin!');
    }).catch(() => {
        showToast('❌ Gagal menyalin link', true);
    });
}

// Event listener tombol cari
if (searchSpotifyBtn) {
    searchSpotifyBtn.addEventListener('click', function() {
        const query = spotifySearchInput.value.trim();
        if (!query) {
            showToast('❌ Masukkan judul lagu atau artis!', true);
            return;
        }
        performSpotifySearch(query);
    });
}

// Enter key support
if (spotifySearchInput) {
    spotifySearchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = spotifySearchInput.value.trim();
            if (query) {
                performSpotifySearch(query);
            }
        }
    });
}






// ================================================
// TOOL PENERJEMAH
// ================================================
const translateBtn = document.getElementById('translateBtn');
const sourceText = document.getElementById('sourceText');
const sourceLang = document.getElementById('sourceLang');
const targetLang = document.getElementById('targetLang');
const translateResult = document.getElementById('translateResult');
const translatedTextDiv = document.getElementById('translatedText');
const translateInfo = document.getElementById('translateInfo');
const swapLangBtn = document.getElementById('swapLangBtn');

// Fungsi swap bahasa
if (swapLangBtn) {
    swapLangBtn.addEventListener('click', function() {
        const tempLang = sourceLang.value;
        sourceLang.value = targetLang.value;
        targetLang.value = tempLang;
        
        // Swap teks juga jika ada
        if (translatedTextDiv.innerText && sourceText.value) {
            const tempText = sourceText.value;
            sourceText.value = translatedTextDiv.innerText;
            // Trigger terjemahan otomatis
            performTranslate();
        }
    });
}

// Fungsi terjemahan
async function performTranslate() {
    let text = sourceText.value.trim();
    if (!text) {
        showToast('❌ Masukkan teks yang ingin diterjemahkan!', true);
        return;
    }
    
    let targetLangCode = targetLang.value;
    
    translateResult.style.display = 'block';
    translatedTextDiv.innerHTML = '<i class="ri-loader-4-line" style="animation: spin 0.8s linear infinite; display: inline-block;"></i> Menerjemahkan...';
    translateInfo.innerHTML = '';
    
    try {
        const encodedText = encodeURIComponent(text);
        const apiUrl = `https://api.nexray.eu.cc/tools/translate?text=${encodedText}&lang=${targetLangCode}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.status && data.result) {
            const result = data.result;
            translatedTextDiv.innerHTML = escapeHtml(result.translated_text);
            
            // Tampilkan info bahasa
            let sourceLangName = getLanguageName(result.source_lang);
            let targetLangName = getLanguageName(result.target_lang);
            translateInfo.innerHTML = `${sourceLangName} → ${targetLangName} • ${new Date().toLocaleTimeString()}`;
            
            showToast('✅ Terjemahan selesai!');
        } else {
            translatedTextDiv.innerHTML = '<span style="color: var(--accent);">❌ Gagal menerjemahkan. Coba lagi nanti.</span>';
            showToast('❌ Gagal menerjemahkan', true);
        }
    } catch(e) {
        console.error('Error:', e);
        translatedTextDiv.innerHTML = `<span style="color: var(--accent);">❌ Error: ${e.message}</span>`;
        showToast('❌ Gagal koneksi ke server', true);
    }
}

// Fungsi mendapatkan nama bahasa dari kode
function getLanguageName(langCode) {
    const languages = {
        'auto': 'Auto Deteksi',
        'id': 'Indonesia',
        'en': 'English',
        'ar': 'العربية',
        'bn': 'বাংলা',
        'zh': '中文',
        'fr': 'Français',
        'de': 'Deutsch',
        'hi': 'हिन्दी',
        'it': 'Italiano',
        'ja': '日本語',
        'ko': '한국어',
        'ms': 'Melayu',
        'pt': 'Português',
        'ru': 'Русский',
        'es': 'Español',
        'th': 'ไทย',
        'tr': 'Türkçe',
        'vi': 'Tiếng Việt'
    };
    return languages[langCode] || langCode;
}

// Event listener tombol terjemah
if (translateBtn) {
    translateBtn.addEventListener('click', performTranslate);
}

// Tombol copy hasil
const copyTranslateBtn = document.getElementById('copyTranslateBtn');
if (copyTranslateBtn) {
    copyTranslateBtn.addEventListener('click', function() {
        const textToCopy = translatedTextDiv.innerText;
        if (textToCopy && !textToCopy.includes('Menerjemahkan')) {
            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast('✅ Teks hasil terjemahan disalin!');
            }).catch(() => {
                showToast('❌ Gagal menyalin', true);
            });
        } else {
            showToast('❌ Tidak ada teks untuk disalin', true);
        }
    });
} 




// ================================================
// TOOL TIKTOK HASHTAG ANALYZER
// ================================================
const analyzeHashtagBtn = document.getElementById('analyzeHashtagBtn');
const hashtagInput = document.getElementById('hashtagInput');
const hashtagResult = document.getElementById('hashtagResult');

if (analyzeHashtagBtn) {
    analyzeHashtagBtn.addEventListener('click', async function() {
        let hashtag = hashtagInput.value.trim();
        if (!hashtag) {
            showToast('❌ Masukkan hashtag terlebih dahulu!', true);
            return;
        }
        
        // Hapus # di depan jika ada
        hashtag = hashtag.replace(/^#/, '');
        
        hashtagResult.style.display = 'block';
        hashtagResult.innerHTML = '<div class="hashtag-loading"><i class="ri-loader-4-line"></i> Menganalisis hashtag...</div>';
        
        try {
            const apiUrl = `https://api.nexray.eu.cc/tools/tiktokhashtags?hashtags=%23${encodeURIComponent(hashtag)}`;
            const response = await fetch(apiUrl);
            const data = await response.json();
            
            if (data.status && data.result) {
                const result = data.result;
                const report = result.report;
                
                let html = `
                    <!-- LAPORAN -->
                    <div class="hashtag-report">
                        <h4><i class="ri-bar-chart-line"></i> Laporan Hashtag #${escapeHtml(hashtag)}</h4>
                        <div class="hashtag-stats">
                            <div class="stat-item">
                                <span class="stat-value">${report.overallPosts || '0'}</span>
                                <span class="stat-label">Total Post</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-value">${report.overallViews || '0'}</span>
                                <span class="stat-label">Total Views</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-value">${report.viewsPerPost || '0'}</span>
                                <span class="stat-label">Views/Post</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- TOP 10 HASHTAG -->
                    <div class="hashtag-section">
                        <h4><i class="ri-trophy-line"></i> Top 10 Hashtag TikTok</h4>
                        <div class="hashtag-table">
                            <table>
                                <thead>
                                    <tr><th>Hashtag</th><th>Posts</th><th>Views</th><th>Views/Post</th></tr>
                                </thead>
                                <tbody>
                                    ${result.top10.map(item => `
                                        <tr>
                                            <td><span class="hashtag-hash">${escapeHtml(item.hashtag)}</span></td>
                                            <td>${escapeHtml(item.posts)}</td>
                                            <td>${escapeHtml(item.views)}</td>
                                            <td>${escapeHtml(item.post_views)}</td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <!-- MOST POPULAR -->
                    <div class="hashtag-section">
                        <h4><i class="ri-fire-line"></i> Most Popular</h4>
                        <div class="hashtag-grid">
                            ${result.most_popular.map(h => `<span class="hashtag-item"><span class="hashtag-hash">${escapeHtml(h)}</span></span>`).join('')}
                        </div>
                    </div>
                    
                    <!-- SECOND MOST LIKED -->
                    <div class="hashtag-section">
                        <h4><i class="ri-heart-line"></i> Second Most Liked</h4>
                        <div class="hashtag-grid">
                            ${result.second_most_liked.map(h => `<span class="hashtag-item"><span class="hashtag-hash">${escapeHtml(h)}</span></span>`).join('')}
                        </div>
                    </div>
                    
                    <!-- TRENDING -->
                    <div class="hashtag-section">
                        <h4><i class="ri-line-chart-line"></i> Trending</h4>
                        <div class="hashtag-table">
                            <table>
                                <thead>
                                    <tr><th>Hashtag</th><th>Posts</th><th>Views</th><th>Views/Post</th></tr>
                                </thead>
                                <tbody>
                                    ${result.trending.slice(0, 10).map(item => `
                                        <tr>
                                            <td><span class="hashtag-hash">${escapeHtml(item.hashtag)}</span></td>
                                            <td>${escapeHtml(item.posts)}</td>
                                            <td>${escapeHtml(item.views)}</td>
                                            <td>${escapeHtml(item.post_views)}</td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <!-- RELATED -->
                    <div class="hashtag-section">
                        <h4><i class="ri-share-line"></i> Related Hashtag</h4>
                        <div class="hashtag-grid">
                            ${result.related.slice(0, 12).map(h => `<span class="hashtag-item"><span class="hashtag-hash">${escapeHtml(h.hashtag)}</span></span>`).join('')}
                        </div>
                    </div>
                `;
                
                hashtagResult.innerHTML = html;
                showToast('✅ Analisis selesai!');
            } else {
                hashtagResult.innerHTML = '<div class="hashtag-error">❌ Gagal menganalisis hashtag. Coba lagi nanti.</div>';
                showToast('❌ Gagal menganalisis', true);
            }
        } catch(e) {
            console.error('Error:', e);
            hashtagResult.innerHTML = `<div class="hashtag-error">❌ Error: ${e.message}</div>`;
            showToast('❌ Gagal koneksi ke server', true);
        }
    });
}




// ================================================
// TOOL EMOJI MIX
// ================================================
const mixEmojiBtn = document.getElementById('mixEmojiBtn');
const emoji1Input = document.getElementById('emoji1');
const emoji2Input = document.getElementById('emoji2');
const emojimixResult = document.getElementById('emojimixResult');

if (mixEmojiBtn) {
    mixEmojiBtn.addEventListener('click', async function() {
        let emoji1 = emoji1Input.value.trim();
        let emoji2 = emoji2Input.value.trim();
        
        // Validasi input
        if (!emoji1) {
            showToast('❌ Masukkan emoji 1!', true);
            return;
        }
        
        if (!emoji2) {
            showToast('❌ Masukkan emoji 2!', true);
            return;
        }
        
        // Cek apakah input adalah emoji (opsional, biarkan user memasukkan apapun)
        
        emojimixResult.style.display = 'block';
        emojimixResult.innerHTML = '<div class="result-loading"><i class="ri-loader-4-line"></i> Tunggu Sebentar...</div>';
        
        try {
            // Encode emoji ke URL format
            const encodedEmoji1 = encodeURIComponent(emoji1);
            const encodedEmoji2 = encodeURIComponent(emoji2);
            const apiUrl = `https://api.nexray.eu.cc/tools/emojimix?emoji1=${encodedEmoji1}&emoji2=${encodedEmoji2}`;
            
            const response = await fetch(apiUrl);
            
            // Cek apakah response berupa gambar atau JSON
            const contentType = response.headers.get('content-type');
            
            if (contentType && contentType.includes('image')) {
                // Jika API mengembalikan gambar langsung
                const blob = await response.blob();
                const imageUrl = URL.createObjectURL(blob);
                
                let html = `
                    <div class="emojimix-result">
                        <div class="emojimix-result-image">
                            <img src="${imageUrl}" alt="Hasil Mix Emoji" onclick="showFullImage(this.src)">
                        </div>
                        <div class="emojimix-info">
                            <p><strong>${emoji1} + ${emoji2}</strong></p>
                            <button class="direct-download-btn" id="emojimixDownloadBtn" style="margin-top: 12px;">
                                <i class="ri-download-line"></i> Download Gambar
                            </button>
                        </div>
                    </div>
                `;
                emojimixResult.innerHTML = html;
                
                document.getElementById('emojimixDownloadBtn').addEventListener('click', function() {
                    const link = document.createElement('a');
                    link.href = imageUrl;
                    link.download = `emojimix_${emoji1}_${emoji2}.png`;
                    link.click();
                    showToast('⏬ Download dimulai...');
                });
                
                showToast('✅ Emoji berhasil di-mix!');
            } else {
                // Jika API mengembalikan JSON
                const data = await response.json();
                
                if (data.status && data.result) {
                    let html = `
                        <div class="emojimix-result">
                            <div class="emojimix-info">
                                <p><strong>${emoji1} + ${emoji2}</strong></p>
                                <p>Hasil: ${data.result}</p>
                                ${data.image_url ? `<img src="${data.image_url}" style="max-width: 150px; margin-top: 12px;">` : ''}
                            </div>
                        </div>
                    `;
                    emojimixResult.innerHTML = html;
                    showToast('✅ Hasil mix emoji!');
                } else {
                    emojimixResult.innerHTML = `<div class="result-error">❌ Gagal memix emoji. Coba lagi nanti.</div>`;
                    showToast('❌ Gagal memix emoji', true);
                }
            }
        } catch(e) {
            emojimixResult.innerHTML = `<div class="result-error">❌ Error: ${e.message}</div>`;
            showToast('❌ Gagal koneksi ke server', true);
        }
    });
}




// ================================================
// TOOL HITUNG WR MLBB
// ================================================
const calculateWrBtn = document.getElementById('calculateWrBtn');
const wrTotalMatch = document.getElementById('wrTotalMatch');
const wrNow = document.getElementById('wrNow');
const wrTarget = document.getElementById('wrTarget');
const wrResult = document.getElementById('wrResult');

if (calculateWrBtn) {
    calculateWrBtn.addEventListener('click', async function() {
        let totalMatch = parseInt(wrTotalMatch.value);
        let wrNowValue = parseFloat(wrNow.value);
        let wrTargetValue = parseFloat(wrTarget.value);
        
        // Validasi input
        if (isNaN(totalMatch) || totalMatch <= 0) {
            showToast('❌ Masukkan total match yang valid!', true);
            return;
        }
        
        if (isNaN(wrNowValue) || wrNowValue < 0 || wrNowValue > 100) {
            showToast('❌ Masukkan win rate saat ini (0-100)!', true);
            return;
        }
        
        if (isNaN(wrTargetValue) || wrTargetValue < 0 || wrTargetValue > 100) {
            showToast('❌ Masukkan target win rate (0-100)!', true);
            return;
        }
        
        if (wrTargetValue <= wrNowValue) {
            showToast('Target WR harus lebih besar dari WR saat ini!', true);
            return;
        }
        
        wrResult.style.display = 'block';
        wrResult.innerHTML = '<div class="result-loading"><i class="ri-loader-4-line"></i> Menghitung...</div>';
        
        try {
            const apiUrl = `https://api.nexray.eu.cc/tools/winrate-mlbb?total_match=${totalMatch}&wr_now=${wrNowValue}&wr_target=${wrTargetValue}`;
            const response = await fetch(apiUrl);
            const data = await response.json();
            
            if (data.status && data.result) {
                let resultHtml = `
                    <div class="wr-result">
                        <div class="wr-info">
                            <i class="ri-bar-chart-2-line" style="font-size: 40px; color: var(--accent);"></i>
                            <div class="wr-details">
                                <p><strong> Hasil Perhitungan</strong></p>
                                <p>${data.result}</p>
                                <p style="font-size: 11px; color: var(--text-secondary); margin-top: 8px;">
                                    ${data.timestamp || ''}
                                </p>
                            </div>
                        </div>
                    </div>
                `;
                wrResult.innerHTML = resultHtml;
                showToast('✅ Perhitungan selesai!');
            } else {
                wrResult.innerHTML = `<div class="result-error">❌ Gagal menghitung. Coba lagi nanti.</div>`;
                showToast('❌ Gagal menghitung WR', true);
            }
        } catch(e) {
            wrResult.innerHTML = `<div class="result-error">❌ Error: ${e.message}</div>`;
            showToast('❌ Gagal koneksi ke server', true);
        }
    });
}


//🤪1🤪1🤨1🤨1🤨1

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


















//😒😒😒
function renderTestimonials() {
    const grid = document.getElementById('testimoniGrid');
    if (!grid) return;
    
    // Pastikan testimonials sudah didefinisikan di testi.js
    if (typeof testimonials === 'undefined') {
        console.log("testimonials tidak ditemukan");
        return;
    }
    
    grid.innerHTML = testimonials.map(t => `
        <div class="testimoni-card">
            <div class="testimoni-image">
                <img src="${t.image}" alt="Produk" onerror="this.src='https://placehold.co/50x50/333/white?text=Error'">
            </div>
            <div class="testimoni-title">
                📢 TRANSAKSI BERHASIL
            </div>
            <div class="testimoni-product">
                <p>📦 <strong>${t.product}</strong></p>
                <p>💰 ${t.price}</p>
                <p>📆 ${t.date} • 🕒 ${t.time}</p>
            </div>

            <div class="testimoni-footer">
                <p>✅ Proses cepat & aman</p>
                <p>✅ Layanan aktif setiap hari</p>
            </div>
        </div>
    `).join('');
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
// VARIABEL GLOBAL
// ================================================

let bannerImages = [];
let autoSlideInterval;
let currentIndex = 0;

async function loadBannerImages() {
    const imageNames = ['banner1.jpg', 'banner2.jpg', 'banner3.jpg'];
    bannerImages = imageNames.map(name => `image/banner/${name}`);
    
    const sliderWrapper = document.getElementById('sliderWrapper');
    const sliderDots = document.getElementById('sliderDots');
    
    if (!sliderWrapper) return;
    
    sliderWrapper.innerHTML = bannerImages.map(img => 
        `<img src="${img}" alt="Banner" draggable="false" onerror="this.src='https://placehold.co/400x100/333/white?text=Banner'">`
    ).join('');
    
    sliderDots.innerHTML = bannerImages.map((_, i) => 
        `<span class="slider-dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></span>`
    ).join('');
    
    updateSliderPosition();
    startAutoSlide();
}

function updateSliderPosition() {
    const sliderWrapper = document.getElementById('sliderWrapper');
    if (sliderWrapper) {
        sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

function goToSlide(index) {
    currentIndex = index;
    updateSliderPosition();
    resetAutoSlide();
}

function nextSlide() {
    if (currentIndex < bannerImages.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSliderPosition();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 6000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Event listener
document.addEventListener('DOMContentLoaded', function() {
    loadBannerImages();
    
    const channelBtn = document.getElementById('channelBtn');
    const chatAdminBtn = document.getElementById('chatAdminBtn');
    
    if (channelBtn) {
        channelBtn.addEventListener('click', function() {
            window.open(WHATSAPP_CHANNEL_URL, '_blank');
        });
    }
    
    if (chatAdminBtn) {
        chatAdminBtn.addEventListener('click', function() {
            chatWithOwner();
        });
    }
});

 
// Marquee info versi
const marqueeText = document.getElementById('marqueeText');
if (marqueeText && typeof APP_VERSION !== 'undefined') {
    marqueeText.innerHTML = `${APP_UPDATE_INFO || 'Update fitur & perbaikan bug'}`;
}

//😕😕🙏🙏🙏🙏🙏


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
//😕😕😕😕😕😕😕😕😕😕
//🥁🍚💴😕💴😕💴😕💴😕

// ================================================
// SAPAAN VERSI BARU (HANYA 1 KALI)
// ================================================
function showVersionWelcome() {
    const lastShownVersion = localStorage.getItem('welcome_shown_version');
    
    if (lastShownVersion !== APP_VERSION) {
        showWelcomeModal();
        localStorage.setItem('welcome_shown_version', APP_VERSION);
    }
}

function showWelcomeModal() {
    const modal = document.createElement('div');
    modal.className = 'welcome-modal';
    modal.innerHTML = `
        <div class="welcome-content">
            <div class="welcome-image">
                <img src="image/welcome.png" alt="Welcome">
            </div>
            <h2 id="typingText"></h2>
            <p class="welcome-version">Versi APK - ${APP_VERSION}</p>
            <p class="welcome-date">Rilis: ${APP_RELEASE_DATE}</p>
            <button class="welcome-btn" onclick="this.parentElement.parentElement.remove()">
                <i class="ri-check-line"></i> Mulai Sekarang
            </button>
        </div>
    `;
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);
    
    // Typing effect
    const text = "Welcome To The Latest Version";
    const typingElement = document.getElementById('typingText');
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typingElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 60);
        }
    }
    
    typeWriter();
    
    // Bunyi suara saat modal muncul
    const welcomeSound = new Audio("https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3");
    welcomeSound.volume = 0.4;
    welcomeSound.play().catch(e => console.log("Audio tidak bisa diputar"));
}

document.addEventListener('DOMContentLoaded', function() {
    showVersionWelcome();
});

//😕😕😕😕

// ================================================
// FITUR PENCARIAN PRODUK
// ================================================
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const searchResultCount = document.getElementById('searchResultCount');
let currentSearchTerm = '';
let isFiltered = false;

// Fungsi filter produk berdasarkan nama
function filterProducts(searchTerm) {
    if (currentPage !== 'products') return;
    
    if (!searchTerm.trim()) {
        if (isFiltered) {
            renderProducts();
            isFiltered = false;
        }
        if (searchResultCount) searchResultCount.style.display = 'none';
        return;
    }
    
    const term = searchTerm.toLowerCase().trim();
    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(term);
    });
    
    renderFilteredProducts(filteredProducts, term);
    isFiltered = true;
    
    if (filteredProducts.length > 0) {
        searchResultCount.textContent = `Ditemukan ${filteredProducts.length} produk`;
        searchResultCount.style.display = 'block';
    } else {
        searchResultCount.textContent = `Tidak ada produk yang cocok dengan "${searchTerm}"`;
        searchResultCount.style.display = 'block';
    }
}

// Render produk hasil filter
function renderFilteredProducts(filteredProducts, searchTerm) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="empty-search">
                <i class="ri-search-line"></i>
                <p>Tidak ada produk ditemukan</p>
                <span>Coba dengan kata kunci lain</span>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = filteredProducts.map(product => {
        let badgeHtml = '';
        let disabledClass = '';
        let disabledBuy = '';
        let disabledCart = '';
        
        let highlightedName = product.name;
        if (searchTerm) {
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            highlightedName = product.name.replace(regex, '<span class="search-highlight">$1</span>');
        }
        
        if (product.type === 'hot') {
            badgeHtml = '<div class="product-badge badge-hot"><i class="ri-fire-line"></i> HOT</div>';
        } else if (product.type === 'rekomendasi') {
            badgeHtml = '<div class="product-badge badge-rekomendasi"><i class="ri-star-line"></i> REKOMENDASI</div>';
        } else if (product.type === 'new') {
            badgeHtml = '<div class="product-badge badge-new"><i class="ri-flashlight-line"></i> NEW</div>';
        } else if (product.type === 'diskon') {
            badgeHtml = '<div class="product-badge badge-diskon"><i class="ri-price-tag-3-line"></i> DISKON</div>';
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
        
        let priceHtml = `<div class="product-price">${getDisplayPrice(product)}</div>`;
        if (product.type === 'diskon' && product.oldPrice) {
            const diskonPersen = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
            priceHtml = `
                <div class="product-price discount-animate">
                    <span class="old-price">${formatPrice(product.oldPrice)}</span>
                    <span class="discount-price">${getDisplayPrice(product)}</span>
                    <span class="discount-badge">-${diskonPersen}%</span>
                </div>
            `;
        }
        
        return `
            <div class="product-card ${disabledClass}" data-product-id="${product.id}">
                <div class="product-image-wrapper">
                    ${badgeHtml}
                    <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://placehold.co/300x300/333/white?text=Error'">
                </div>
                <div class="product-info">
                    <div class="product-name">${highlightedName}</div>
                    ${priceHtml}
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
    
    document.querySelectorAll('.product-card:not(.product-disabled)').forEach(card => {
        card.addEventListener('click', (e) => {
            const productId = parseInt(card.dataset.productId);
            showProductDetail(productId);
        });
    });
}

// Event listener untuk pencarian
if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const value = e.target.value;
        currentSearchTerm = value;
        
        if (currentPage === 'products') {
            if (value) {
                searchClear.style.display = 'flex';
            } else {
                searchClear.style.display = 'none';
            }
            filterProducts(value);
        }
    });
}

// Tombol clear search
if (searchClear) {
    searchClear.addEventListener('click', function() {
        searchInput.value = '';
        searchClear.style.display = 'none';
        if (currentPage === 'products') {
            filterProducts('');
        }
        searchInput.focus();
    });
}

const emptySearchStyle = document.createElement('style');
emptySearchStyle.textContent = `
    .empty-search {
        grid-column: 1 / -1;
        text-align: center;
        padding: 40px 20px;
        background: var(--bg-card);
        border-radius: 20px;
    }
    .empty-search i {
        font-size: 48px;
        color: var(--text-secondary);
        margin-bottom: 12px;
        display: block;
    }
    .empty-search p {
        font-size: 14px;
        color: var(--text-secondary);
        margin-bottom: 6px;
    }
    .empty-search span {
        font-size: 11px;
        color: var(--text-secondary);
        opacity: 0.7;
    }
`;
document.head.appendChild(emptySearchStyle);


//🤨🤨😕🤨😕🤨😕🤨
//🟨🟨🟨🟨🟨🟨🟨🟨

// ================================================
// TOOL SERTIFIKAT LOL
// ================================================
const generateSertifikatBtn = document.getElementById('generateSertifikatBtn');
const sertifikatText = document.getElementById('sertifikatText');
const sertifikatResult = document.getElementById('sertifikatResult');

if (generateSertifikatBtn) {
    generateSertifikatBtn.addEventListener('click', async function() {
        let text = sertifikatText.value.trim();
        if (!text) {
            showToast('❌ Masukkan teks untuk sertifikat!', true);
            return;
        }

        sertifikatResult.style.display = 'block';
        sertifikatResult.innerHTML = '<div class="result-loading"><i class="ri-loader-4-line"></i> Generating sertifikat...</div>';

        try {
            const encodedText = encodeURIComponent(text);
            // Ganti teks "lol" dengan teks custom
            const apiUrl = `https://kyzznekoo.zone.id/api/image/sertifikat?text=${encodedText}`;
            
            const response = await fetch(apiUrl);
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);

            let html = `
                <div class="sertifikat-result">
                    <div class="sertifikat-info">
                        <i class="ri-award-line" style="font-size: 40px; color: var(--accent);"></i>
                        <div class="sertifikat-details">
                            <p><strong>Teks: ${text.substring(0, 50)}</strong></p>
                        </div>
                    </div>
                    <div class="image-preview">
                        <img src="${imageUrl}" class="sertifikat-image" alt="Sertifikat Lol" onclick="showFullImage(this.src)">
                        <button class="view-image-btn" onclick="showFullImage('${imageUrl}')">
                            <i class="ri-eye-line"></i> Lihat Gambar
                        </button>
                    </div>
                    <button class="direct-download-btn" id="sertifikatDownloadBtn">
                        <i class="ri-download-line"></i> Download Sertifikat
                    </button>
                </div>
            `;
            sertifikatResult.innerHTML = html;

            document.getElementById('sertifikatDownloadBtn').addEventListener('click', function() {
                const link = document.createElement('a');
                link.href = imageUrl;
                link.download = `sertifikat_lol_${text.substring(0, 20)}.png`;
                link.click();
                showToast('⏬ Download dimulai...');
            });

            showToast('✅ Sertifikat berhasil dibuat!');
        } catch(e) {
            sertifikatResult.innerHTML = `<div class="result-error">❌ Error: ${e.message}</div>`;
            showToast('❌ Gagal koneksi ke server', true);
        }
    });
}




//🟨🟨🟨🟨🟨🟨🟨🟨🟨
//🟨🟨🟨🟨🟨🟨🟨🟨🟨




































































































































































































































































































































































































function showBugTargetModal(product) {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 320px;">
            <div class="modal-header">
                <h3><i class="ri-bug-line"></i> ${product.name}</h3>
                <button class="modal-close" onclick="this.closest('.modal').remove()">
                    <i class="ri-close-line"></i>
                </button>
            </div>
            <div class="modal-body" style="text-align: left;">
                <p style="margin-bottom: 16px; font-size: 13px; color: var(--text-secondary);">${product.description}</p>
                <div style="margin-bottom: 20px;">
                    <label style="display: block; font-size: 13px; margin-bottom: 8px; font-weight: 600;">
                        <i class="ri-phone-line"></i> Masukkan Nomor Target:
                    </label>
                    <input type="tel" id="bugTargetNumber" placeholder="Contoh: 628123456789" 
                           style="width: 100%; padding: 12px; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 12px; color: white; font-size: 14px;">
                </div>
                <button class="btn-buy-now" id="proceedToBugPayment" style="width: 100%;">
                    <i class="ri-flashlight-line"></i> Bayar Rp ${formatPrice(product.price)}
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    document.getElementById('proceedToBugPayment').addEventListener('click', function() {
        const targetNumber = document.getElementById('bugTargetNumber').value.trim();
        if (!targetNumber) {
            showToast('❌ Masukkan nomor target terlebih dahulu!', true);
            return;
        }
        
        // Validasi nomor (minimal 10 digit)
        if (targetNumber.length < 10) {
            showToast('❌ Nomor target tidak valid!', true);
            return;
        }
        
        // Simpan nomor target ke pendingOrder
        window.pendingBugTarget = targetNumber;
        
        // Tutup modal input
        modal.remove();
        
        // Lanjut ke QRIS
        const totalPrice = product.price;
        const qrTotal = document.getElementById('qrTotal');
        if (qrTotal) qrTotal.textContent = formatPrice(totalPrice);
        
        const qrisModal = document.getElementById('qrisModal');
        if (qrisModal) qrisModal.classList.add('active');
        
        window.pendingOrder = {
            items: [{ name: product.name, quantity: 1, targetNumber: targetNumber }],
            totalItems: 1,
            totalPrice: totalPrice,
            isBugService: true,
            bugTarget: targetNumber
        };
    });
}

//🟨🟨🟨🟨🟨🟨🟨

// ================================================
// MODAL KONSULTASI VIA WHATSAPP (UNTUK JOKI GAME DLL)
// ================================================
function showConsultationModal(product) {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 320px;">
            <div class="modal-header">
                <h3><i class="ri-whatsapp-line"></i> ${product.name}</h3>
                <button class="modal-close" onclick="this.closest('.modal').remove()">
                    <i class="ri-close-line"></i>
                </button>
            </div>
            <div class="modal-body" style="text-align: left;">
                <p style="margin-bottom: 16px; font-size: 13px; color: var(--text-secondary);">${product.description}</p>
                <p style="margin-bottom: 20px; font-size: 12px; color: var(--accent); background: rgba(239,68,68,0.1); padding: 10px; border-radius: 12px;">
                    Diskusikan dulu via whatsaap, klik tombol di bawah.
                </p>
                <button class="btn-buy-now" id="consultationWhatsappBtn" style="width: 100%; background: #25D366;">
                    <i class="ri-whatsapp-line"></i> Diskusi Via WhatsApp
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    document.getElementById('consultationWhatsappBtn').addEventListener('click', function() {
        const { jam, tanggal, tahun } = getCurrentDateTime();
        
        let message = `Halo Yuss Xy 👋%0A%0A`;
        message += `Saya tertarik dengan layanan *${product.name}*.%0A%0A`;
        message += `📦 Detail:%0A`;
        message += `• Produk: ${product.name}%0A`;
        message += `• Deskripsi: ${product.description}%0A%0A`;
        message += `Saya ingin berkonsultasi terlebih dahulu sebelum memutuskan untuk menggunakan jasa ini.%0A%0A`;
        message += `Mohon infonya ya 🙏%0A`;
        message += `Terima kasih.`;
        
        window.open(`https://wa.me/6283183469343?text=${message}`, '_blank');
        modal.remove();
    });
}




//😉😌😌😌😌


function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    let priceDisplay = getDisplayPrice(product);
    let variantHtml = '';
    
    // CEK APAKAH PRODUK APLIKASI PREMIUM (BUNDLE)
    if (product.isAppBundle) {
        modalBody.innerHTML = `
            <img src="${product.image}" class="modal-product-image" onerror="this.src='https://placehold.co/300x300/333/white?text=Error'">
            <div class="modal-product-name">${product.name}</div>
            <div class="modal-product-price">${priceDisplay}</div>
            <div class="modal-product-desc">${product.description}</div>
            <button class="btn-buy-now" onclick="showAppBundleModal(); closeProductModal();" style="width: 100%; margin-top: 16px;">
                <i class="ri-apps-line"></i> Lihat Daftar Aplikasi
            </button>
        `;
        modal.classList.add('active');
        return;
    }
    
    // CEK APAKAH PRODUK PERLU TANYA STOK (NOKOS DLL)
    if (product.isAskStock) {
        modalBody.innerHTML = `
            <img src="${product.image}" class="modal-product-image" onerror="this.src='https://placehold.co/300x300/333/white?text=Error'">
            <div class="modal-product-name">${product.name}</div>
            <div class="modal-product-price">${priceDisplay}</div>
            <div class="modal-product-desc">${product.description}</div>
            
            <!-- KEUNTUNGAN -->
            ${product.benefits ? `
            <div class="modal-benefits">
                <div class="benefits-title">
                    <i class="ri-gift-line"></i> 
                    <span>Keuntungan</span>
                </div>
                <ul class="benefits-list">
                    ${product.benefits.map(b => `
                        <li>
                            <i class="ri-checkbox-circle-line"></i>
                            <span>${b}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            ` : ''}
            
            <button class="btn-buy-now" onclick="askStock(product); closeProductModal();" style="width: 100%; margin-top: 16px; background: #25D366;">
                <i class="ri-whatsapp-line"></i> Tanyakan Stok
            </button>
        `;
        modal.classList.add('active');
        return;
    }
    
    // Cek apakah produk Eboox
    if (product.isEboox) {
        modalBody.innerHTML = `
            <img src="${product.image}" class="modal-product-image" onerror="this.src='https://placehold.co/300x300/333/white?text=Error'">
            <div class="modal-product-name">${product.name}</div>
            <div class="modal-product-price">${priceDisplay}</div>
            <div class="modal-product-desc">${product.description}</div>
            <div class="eboox-form-detail">
                <input type="text" id="ebooxTitleDetail" placeholder="Masukkan judul eboox yang dicari..." class="eboox-input-detail">
                <button class="eboox-btn-detail" id="askEbooxDetailBtn">
                    <i class="ri-whatsapp-line"></i> Tanya ke Owner
                </button>
            </div>
        `;
        
        modal.classList.add('active');
        
        const askBtn = document.getElementById('askEbooxDetailBtn');
        if (askBtn) {
            askBtn.addEventListener('click', function() {
                const judul = document.getElementById('ebooxTitleDetail').value.trim();
                if (!judul) {
                    showToast('❌ Masukkan judul eboox!', true);
                    return;
                }
                const message = "Halo Yuss Xy 👋%0a%0aSaya ingin menanyakan apakah e-book berikut tersedia:%0a➜ Judul: " + judul + "%0a%0aJika masih tersedia, saya tertarik untuk membelinya.%0a%0aTerima kasih 🙏";
                window.open(`https://wa.me/6283183469343?text=${message}`, '_blank');
                closeProductModal();
                showToast('✅ Pertanyaan terkirim ke owner');
            });
        }
        return;
    }
    
    // Di dalam showProductDetail
if (product.isSocialMediaService) {
    modalBody.innerHTML = `
        <img src="${product.image}" class="modal-product-image" onerror="this.src='https://placehold.co/300x300/333/white?text=Error'">
        <div class="modal-product-name">${product.name}</div>
        <div class="modal-product-price">${product.price}</div>
        <div class="modal-product-desc">${product.description}</div>
        <button class="btn-buy-now" onclick="showSocialMediaModal(); closeProductModal();" style="width: 100%; margin-top: 16px; background: linear-gradient(90deg, #8b5cf6, #7c3aed);">
            <i class="ri-share-line"></i> Pilih Layanan
        </button>
    `;
    modal.classList.add('active');
    return;
}
    
    
    
    
    
    
    
    // Untuk produk dengan varian RAM
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
    
    // Produk biasa (non-Eboox, non-varian, non-bundle, non-askStock) - DENGAN KEUNTUNGAN & NOTE
    modalBody.innerHTML = `
        <img src="${product.image}" class="modal-product-image" onerror="this.src='https://placehold.co/300x300/333/white?text=Error'">
        <div class="modal-product-name">${product.name}</div>
        <div class="modal-product-price">${priceDisplay}</div>
        
        <!-- DESKRIPSI -->
        <div class="modal-product-desc">${product.description}</div>
        
        <!-- KEUNTUNGAN -->
        ${product.benefits ? `
        <div class="modal-benefits">
            <div class="benefits-title">
                <i class="ri-gift-line"></i> 
                <span>Keuntungan</span>
            </div>
            <ul class="benefits-list">
                ${product.benefits.map(b => `
                    <li>
                        <i class="ri-checkbox-circle-line"></i>
                        <span>${b}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
        ` : ''}
        
        <!-- CATATAN -->
        ${product.note ? `
        <div class="modal-note">
            <div class="note-title">
                <i class="ri-information-line"></i>
                <span>📌 Note:</span>
            </div>
            <p class="note-text">${product.note}</p>
        </div>
        ` : ''}
        
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






//💴😛😕😕😕

// ================================================
// NOTIFIKASI DENGAN STATUS BACA (localStorage)
// ================================================

function loadNotification() {
    const notifBadge = document.getElementById('notifBadge');
    const notifIcon = document.getElementById('notifIcon');
    
    if (typeof NOTIFICATION_DATA !== 'undefined') {
        // Ambil ID notifikasi yang sudah dibaca dari localStorage
        let readNotifIds = JSON.parse(localStorage.getItem('read_notifications') || '[]');
        
        // HAPUS ID notifikasi yang sudah tidak ada di data terbaru (cleanup)
        const currentNotifIds = NOTIFICATION_DATA.notifications.map(n => n.id);
        readNotifIds = readNotifIds.filter(id => currentNotifIds.includes(id));
        localStorage.setItem('read_notifications', JSON.stringify(readNotifIds));
        
        // Hitung notifikasi yang belum dibaca
        const unreadCount = NOTIFICATION_DATA.notifications.filter(n => !readNotifIds.includes(n.id)).length;
        
        if (unreadCount > 0) {
            if (notifBadge) {
                notifBadge.textContent = unreadCount > 9 ? '9+' : unreadCount;
                notifBadge.style.display = 'flex';
            }
        } else {
            if (notifBadge) notifBadge.style.display = 'none';
        }
    }
    
    if (notifIcon) {
        notifIcon.addEventListener('click', function() {
            showNotificationModal();
        });
    }
}

function showNotificationModal() {
    const modal = document.createElement('div');
    modal.className = 'notification-modal';
    
    // Ambil ID notifikasi yang sudah dibaca
    let readNotifIds = JSON.parse(localStorage.getItem('read_notifications') || '[]');
    
    // Bersihkan ID yang tidak ada di data terbaru
    const currentNotifIds = NOTIFICATION_DATA.notifications.map(n => n.id);
    readNotifIds = readNotifIds.filter(id => currentNotifIds.includes(id));
    localStorage.setItem('read_notifications', JSON.stringify(readNotifIds));
    
    let notifHtml = '';
    let hasUnread = false;
    
    if (typeof NOTIFICATION_DATA !== 'undefined' && NOTIFICATION_DATA.notifications) {
        NOTIFICATION_DATA.notifications.forEach(notif => {
            const isRead = readNotifIds.includes(notif.id);
            if (!isRead) hasUnread = true;
            
            notifHtml += `
                <div class="notification-item ${isRead ? 'read' : 'unread'}" data-notif-id="${notif.id}">
                    ${notif.image ? `<img src="${notif.image}" class="notif-image" onerror="this.style.display='none'">` : '<div class="notif-icon"><i class="ri-notification-line"></i></div>'}
                    <div class="notif-content">
                        <div class="notif-title">${notif.title}</div>
                        <div class="notif-message">${notif.message}</div>
                        <div class="notif-date">${notif.date}</div>
                    </div>
                </div>
            `;
        });
    }
    
    modal.innerHTML = `
        <div class="notification-content">
            <div class="notification-header">
                <h3><i class="ri-notification-line"></i> Pemberitahuan</h3>
                <button class="notification-close" onclick="this.closest('.notification-modal').remove()">
                    <i class="ri-close-line"></i>
                </button>
            </div>
            <div class="notification-body">
                ${notifHtml || '<div class="empty-notif">Tidak ada pemberitahuan</div>'}
            </div>
            ${hasUnread ? '<button class="notification-mark-read" id="markAllReadBtn">Tandai semua telah dibaca</button>' : ''}
            <button class="notification-btn" onclick="this.closest('.notification-modal').remove()">
                <i class="ri-check-line"></i> Tutup
            </button>
        </div>
    `;
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);
    
    // Tandai notifikasi sebagai dibaca saat diklik
    document.querySelectorAll('.notification-item').forEach(item => {
        item.addEventListener('click', function(e) {
            if (e.target.closest('.notification-mark-read')) return;
            const notifId = parseInt(this.dataset.notifId);
            markAsRead(notifId);
            this.classList.remove('unread');
            this.classList.add('read');
            updateNotifBadge();
        });
    });
    
    // Tombol tandai semua telah dibaca
    const markAllBtn = document.getElementById('markAllReadBtn');
    if (markAllBtn) {
        markAllBtn.addEventListener('click', function() {
            const allNotifIds = NOTIFICATION_DATA.notifications.map(n => n.id);
            localStorage.setItem('read_notifications', JSON.stringify(allNotifIds));
            
            document.querySelectorAll('.notification-item').forEach(item => {
                item.classList.remove('unread');
                item.classList.add('read');
            });
            
            updateNotifBadge();
            this.style.display = 'none';
            showToast('Semua notifikasi telah dibaca');
        });
    }
}

function markAsRead(notifId) {
    const readNotifIds = JSON.parse(localStorage.getItem('read_notifications') || '[]');
    if (!readNotifIds.includes(notifId)) {
        readNotifIds.push(notifId);
        localStorage.setItem('read_notifications', JSON.stringify(readNotifIds));
    }
    updateNotifBadge();
}

function updateNotifBadge() {
    const notifBadge = document.getElementById('notifBadge');
    if (typeof NOTIFICATION_DATA === 'undefined') return;
    
    let readNotifIds = JSON.parse(localStorage.getItem('read_notifications') || '[]');
    const currentNotifIds = NOTIFICATION_DATA.notifications.map(n => n.id);
    readNotifIds = readNotifIds.filter(id => currentNotifIds.includes(id));
    localStorage.setItem('read_notifications', JSON.stringify(readNotifIds));
    
    const unreadCount = NOTIFICATION_DATA.notifications.filter(n => !readNotifIds.includes(n.id)).length;
    
    if (unreadCount > 0) {
        notifBadge.textContent = unreadCount > 9 ? '9+' : unreadCount;
        notifBadge.style.display = 'flex';
    } else {
        notifBadge.style.display = 'none';
    }
}



//🤭🤭😍😋😍😋😍😋



document.addEventListener('DOMContentLoaded', function() {
    loadNotification();
    
    // ================================================
    // KIRIM PESAN KE ADMIN
    // ================================================
    const sendEmailBtn = document.getElementById('sendEmailBtn');
    const senderName = document.getElementById('senderName');
    const senderEmail = document.getElementById('senderEmail');
    const emailSubject = document.getElementById('emailSubject');
    const emailMessage = document.getElementById('emailMessage');
    const sendStatus = document.getElementById('sendEmailStatus');
    
    if (sendEmailBtn) {
        sendEmailBtn.addEventListener('click', async function() {
            const name = senderName?.value.trim() || '';
            const email = senderEmail?.value.trim() || '';
            const subject = emailSubject?.value.trim() || '';
            const message = emailMessage?.value.trim() || '';
            
            // Validasi
            if (!name) {
                showToast('❌ Masukkan nama kamu!', true);
                return;
            }
            if (!email) {
                showToast('❌ Masukkan email kamu!', true);
                return;
            }
            if (!email.includes('@')) {
                showToast('❌ Email tidak valid!', true);
                return;
            }
            if (!subject) {
                showToast('❌ Masukkan subjek pesan!', true);
                return;
            }
            if (!message) {
                showToast('❌ Masukkan pesan!', true);
                return;
            }
            
            if (sendStatus) {
                sendStatus.innerHTML = 'Mengirim pesan...';
                sendStatus.className = 'send-status';
            }
            
            try {
                // Kirim ke API Web3Forms
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        access_key: WEB3FORMS_ACCESS_KEY,
                        name: name,
                        email: email,
                        subject: `[YussXy Store] ${subject}`,
                        message: `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
                        to_email: ADMIN_EMAIL
                    })
                });
                
                const result = await response.json();
                
                if (result.success) {
                    if (sendStatus) {
                        sendStatus.innerHTML = '✅ Pesan berhasil terkirim! Admin akan segera merespon.';
                        sendStatus.className = 'send-status success';
                    }
                    if (senderName) senderName.value = '';
                    if (senderEmail) senderEmail.value = '';
                    if (emailSubject) emailSubject.value = '';
                    if (emailMessage) emailMessage.value = '';
                    showToast('✅ Pesan terkirim!');
                } else {
                    if (sendStatus) {
                        sendStatus.innerHTML = '❌ Gagal mengirim pesan. Coba lagi nanti.';
                        sendStatus.className = 'send-status error';
                    }
                    showToast('❌ Gagal mengirim', true);
                }
            } catch (error) {
                console.error('Error:', error);
                if (sendStatus) {
                    sendStatus.innerHTML = '❌ Error koneksi. Cek internet kamu.';
                    sendStatus.className = 'send-status error';
                }
                showToast('❌ Gagal koneksi', true);
            }
        });
    }
});










//🤣🤣🤣🤣
// Menampilkan versi dari version.js ke halaman info
const versionDisplay = document.getElementById('appVersionDisplay');
if (versionDisplay) {
    versionDisplay.textContent = APP_VERSION;
}

//0😌🙏8😂🙏🙏🙏



// ================================================
// MODAL REACTION PESAN SALURAN WA
// ================================================
function showReactionModal(product) {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 350px;">
            <div class="modal-header">
                <h3><i class="ri-whatsapp-line"></i> ${product.name}</h3>
                <button class="modal-close" onclick="this.closest('.modal').remove()">
                    <i class="ri-close-line"></i>
                </button>
            </div>
            <div class="modal-body" style="text-align: left;">
                <p style="margin-bottom: 16px; font-size: 13px; color: var(--text-secondary);">${product.description}</p>
                
                <!-- Input Link Pesan -->
                <div style="margin-bottom: 16px;">
                    <label style="display: block; font-size: 13px; margin-bottom: 8px; font-weight: 600;">
                        <i class="ri-link"></i> Link Pesan:
                    </label>
                    <input type="url" id="reactionLink" placeholder="https://whatsapp.com/channel/xxx/804" 
                           style="width: 100%; padding: 12px; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 12px; color: white; font-size: 14px;">
                    <p style="font-size: 10px; color: var(--text-secondary); margin-top: 4px;">
                        Contoh: https://whatsapp.com/channel/0029VbAgFKULSmbeJMLfmR3b/804
                    </p>
                </div>
                
                <!-- Input Emoji (max 5) -->
                <div style="margin-bottom: 20px;">
                    <label style="display: block; font-size: 13px; margin-bottom: 8px; font-weight: 600;">
                        <i class="ri-emotion-line"></i> Emoji (max 5):
                    </label>
                    <input type="text" id="reactionEmoji" placeholder="😅😘😌😒🥺" maxlength="10"
                           style="width: 100%; padding: 12px; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 12px; color: white; font-size: 18px; letter-spacing: 4px;">
                    <p style="font-size: 10px; color: var(--text-secondary); margin-top: 4px;">
                        
                    </p>
                </div>
                
                <button class="btn-buy-now" id="proceedToReactionPayment" style="width: 100%;">
                    <i class="ri-flashlight-line"></i> Bayar Rp ${formatPrice(product.price)}
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Validasi emoji (max 5 karakter)
    const emojiInput = document.getElementById('reactionEmoji');
    if (emojiInput) {
        emojiInput.addEventListener('input', function(e) {
            let value = e.target.value;
            // Batasi max 10 karakter (karena emoji 2 byte)
            if (value.length > 10) {
                e.target.value = value.slice(0, 10);
            }
            // Hitung jumlah emoji (estimasi)
            const emojiCount = [...value].filter(c => /[\u{1F600}-\u{1F6FF}]/u.test(c)).length;
            if (emojiCount > 5) {
                e.target.value = value.slice(0, -2);
                showToast('⚠️ Maksimal 5 emoji!', true);
            }
        });
    }
    
    document.getElementById('proceedToReactionPayment').addEventListener('click', function() {
        const link = document.getElementById('reactionLink').value.trim();
        const emoji = document.getElementById('reactionEmoji').value.trim();
        
        // Validasi link
        if (!link) {
            showToast('❌ Masukkan link pesan WhatsApp!', true);
            return;
        }
        
        if (!link.includes('whatsapp.com/channel/')) {
            showToast('❌ Link tidak valid! Masukkan link pesan saluran WhatsApp', true);
            return;
        }
        
        // Validasi emoji
        if (!emoji) {
            showToast('❌ Masukkan emoji!', true);
            return;
        }
        
        // Hitung jumlah emoji
        const emojiCount = [...emoji].filter(c => /[\u{1F600}-\u{1F6FF}]/u.test(c)).length;
        if (emojiCount > 5) {
            showToast('❌ Maksimal 5 emoji!', true);
            return;
        }
        
        // Simpan data
        window.pendingReactionData = {
            link: link,
            emoji: emoji,
            emojiCount: emojiCount
        };
        
        // Tutup modal input
        modal.remove();
        
        // Lanjut ke QRIS
        const totalPrice = product.price;
        const qrTotal = document.getElementById('qrTotal');
        if (qrTotal) qrTotal.textContent = formatPrice(totalPrice);
        
        const qrisModal = document.getElementById('qrisModal');
        if (qrisModal) qrisModal.classList.add('active');
        
        window.pendingOrder = {
            items: [{ 
                name: product.name, 
                quantity: 1,
                reactionLink: link,
                reactionEmoji: emoji
            }],
            totalItems: 1,
            totalPrice: totalPrice,
            isReactionService: true,
            reactionLink: link,
            reactionEmoji: emoji
        };
    });
}


//🙏🤩💪🤩💪🤩💪🤩💪🤩

// ================================================
// RENDER LOWONGAN KERJA
// ================================================
function renderLoker() {
    const container = document.getElementById('lokerContainer');
    if (!container) return;
    
    if (lokerData.length === 0) {
        container.innerHTML = '<div class="empty-loker">Belum ada lowongan tersedia saat ini.</div>';
        return;
    }
    
    container.innerHTML = lokerData.map(loker => {
        const statusClass = loker.status === 'open' ? 'status-open' : 'status-closed';
        const statusText = loker.status === 'open' ? 'Dibuka' : 'Ditutup';
        
        return `
            <div class="loker-card">
                <div class="loker-header">
                    <div class="loker-icon">
                        <i class="${loker.icon}"></i>
                    </div>
                    <div class="loker-title">
                        <h3>${escapeHtml(loker.name)}</h3>
                        <span class="loker-status ${statusClass}">${statusText}</span>
                    </div>
                </div>
                <div class="loker-body">
                    <div class="loker-info">
                        <div class="info-item">
                            <i class="ri-money-dollar-circle-line"></i>
                            <span>${escapeHtml(loker.salary)}</span>
                        </div>
                        <div class="info-item">
                            <i class="ri-time-line"></i>
                            <span>${escapeHtml(loker.schedule)}</span>
                        </div>
                        <div class="info-item">
                            <i class="ri-user-line"></i>
                            <span>${escapeHtml(loker.need)}</span>
                        </div>
                    </div>
                    <div class="loker-deskripsi">
                        <p><strong>Deskripsi:</strong></p>
                        <p>${escapeHtml(loker.description)}</p>
                    </div>
                    <div class="loker-kualifikasi">
                        <p><strong>Kualifikasi:</strong></p>
                        <ul>
                            ${loker.qualifications.map(q => `<li><i class="ri-check-line"></i> ${escapeHtml(q)}</li>`).join('')}
                        </ul>
                    </div>
                    ${loker.note ? `
                    <div class="loker-note">
                        <i class="ri-information-line"></i>
                        <span>${escapeHtml(loker.note)}</span>
                    </div>
                    ` : ''}
                    <button class="loker-daftar-btn" onclick="applyLoker('${escapeHtml(loker.name)}')" ${loker.status === 'closed' ? 'disabled' : ''}>
                        <i class="ri-send-plane-line"></i> Lamar Sekarang
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Fungsi lamar kerja
function applyLoker(positionName) {
    const { jam, tanggal, tahun } = getCurrentDateTime();
    const message = `Halo Yuss Xy 👋%0A%0A` +
        `Saya tertarik dengan lowongan *${positionName}* di YussXy Store.%0A%0A` +
        `Berikut data saya:%0A` +
        `• Nama: [isi nama]%0A` +
        `• Usia: [isi usia]%0A` +
        `• Pengalaman: [isi pengalaman]%0A` +
        `• Alasan melamar: [isi alasan]%0A%0A` +
        `Mohon info lebih lanjut untuk proses seleksi.%0A` +
        `Terima kasih`;
    
    window.open(`https://wa.me/6283183469343?text=${message}`, '_blank');
}





//😂😂😁😂😁☺😁

// ================================================
// MODAL DAFTAR APLIKASI PREMIUM
// ================================================
function showAppBundleModal() {
    const modal = document.getElementById('appBundleModal');
    const modalBody = document.getElementById('appBundleBody');
    
    document.body.classList.add('modal-open');
    
    let html = `<div class="apps-list">`;
    
    premiumApps.forEach(app => {
        let statusClass = '';
        let statusText = '';
        let disabledBuy = '';
        
        if (app.status === 'available') {
            statusClass = 'status-available';
            statusText = 'Tersedia';
            disabledBuy = '';
        } else if (app.status === 'sold_out') {
            statusClass = 'status-sold_out';
            statusText = 'Habis';
            disabledBuy = 'disabled';
        } else if (app.status === 'coming_soon') {
            statusClass = 'status-coming_soon';
            statusText = 'Segera';
            disabledBuy = 'disabled';
        }
        
        html += `
            <div class="app-item ${app.status === 'sold_out' ? 'sold_out' : ''}">
                <img src="${app.image}" class="app-item-image" onerror="this.src='https://placehold.co/120x80/333/white?text=App'">
                <div class="app-item-info">
                    <div class="app-item-name">
                        ${escapeHtml(app.name)}
                        <span class="app-item-price">${escapeHtml(app.price)}</span>
                    </div>
                    <div class="app-item-desc">${escapeHtml(app.description)}</div>
                    <span class="app-status-badge ${statusClass}">${statusText}</span>
                </div>
                <button class="app-buy-btn" onclick="buyApp(${app.id})" ${disabledBuy}>
                    <i class="ri-shopping-cart-line"></i> Beli
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    modalBody.innerHTML = html;
    modal.classList.add('active');
}

// Fungsi beli aplikasi tertentu
function buyApp(appId) {
    const app = premiumApps.find(a => a.id === appId);
    if (!app) return;
    
    if (app.status !== 'available') {
        showToast('❌ Aplikasi tidak tersedia saat ini', true);
        return;
    }
    
    // Tutup modal bundle
    closeAppBundleModal();
    
    // Buat produk sementara untuk checkout
    const tempProduct = {
        id: 999 + appId,
        name: app.name,
        description: app.description,
        price: parseInt(app.price.replace(/[^0-9]/g, '')),
        image: app.image,
        isNegotiable: false,
        benefits: [app.features]
    };
    
    // Simpan ke pending order
    const totalPrice = tempProduct.price;
    const qrTotal = document.getElementById('qrTotal');
    if (qrTotal) qrTotal.textContent = formatPrice(totalPrice);
    
    const qrisModal = document.getElementById('qrisModal');
    if (qrisModal) qrisModal.classList.add('active');
    
    window.pendingOrder = {
        items: [{ name: tempProduct.name, quantity: 1 }],
        totalItems: 1,
        totalPrice: totalPrice
    };
}

function closeAppBundleModal() {
    const modal = document.getElementById('appBundleModal');
    modal.classList.remove('active');
    
    // Kembalikan scroll ke body
    document.body.classList.remove('modal-open');
}


// Event listener close modal
document.addEventListener('DOMContentLoaded', function() {
    const closeAppBundle = document.getElementById('closeAppBundleModal');
    if (closeAppBundle) {
        closeAppBundle.addEventListener('click', closeAppBundleModal);
    }
    
    const appBundleModal = document.getElementById('appBundleModal');
    if (appBundleModal) {
        appBundleModal.addEventListener('click', (e) => {
            if (e.target === appBundleModal) closeAppBundleModal();
        });
    }
}); 

//😊😊😊😊😊

// Mencegah scroll di dalam modal agar tidak menembus ke belakang
document.addEventListener('DOMContentLoaded', function() {
    const appBundleModal = document.getElementById('appBundleModal');
    if (appBundleModal) {
        appBundleModal.addEventListener('wheel', function(e) {
            // Biarkan scroll di dalam modal, tapi hentikan propagasi
            e.stopPropagation();
        });
        
        appBundleModal.addEventListener('touchmove', function(e) {
            e.stopPropagation();
        });
    }
});


//🙏😁🤪😁🤪😁🤪😁🤪😁


// ================================================
// TANYA STOK PRODUK (NOKOS DLL)
// ================================================
function askStock(product) {
    let message = "Halo Yuss Xy 👋\n\n";
    message += "Saya tertarik dengan produk *" + product.name + "*.\n\n";
    message += "📦 Detail Produk:\n";
    message += "• Nama: " + product.name + "\n";
    message += "• Harga: " + product.price + "\n\n";
    message += "Apakah stok untuk produk ini masih tersedia?\n";
    message += "Saya ingin melakukan pembelian.\n\n";
    message += "Mohon infonya ya 🙏\n";
    message += "Terima kasih.";
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6283183469343?text=${encodedMessage}`, '_blank');
}



//🙏😁🤪😁🤪😁🤪😁🤪😁


// ================================================
// MODAL SUNTIK SOSMED
// ================================================
let selectedService = null;

function showSocialMediaModal() {
    const modal = document.getElementById('socialMediaModal');
    if (!modal) return;
    
    const serviceSelect = document.getElementById('serviceSelect');
    const serviceDetail = document.getElementById('serviceDetail');
    
    serviceDetail.style.display = 'none';
    selectedService = null;
    
    let options = '<option value="">-- Pilih Layanan --</option>';
    socialMediaServices.forEach(service => {
        let statusText = '';
        if (service.status === 'sold_out') statusText = ' (Habis)';
        if (service.status === 'coming_soon') statusText = ' (Segera)';
        options += `<option value="${service.id}" data-status="${service.status}">${service.name}${statusText}</option>`;
    });
    serviceSelect.innerHTML = options;
    
    modal.classList.add('active');
    
    serviceSelect.onchange = function() {
        const serviceId = parseInt(this.value);
        if (!serviceId) {
            serviceDetail.style.display = 'none';
            selectedService = null;
            return;
        }
        
        const service = socialMediaServices.find(s => s.id === serviceId);
        if (!service) return;
        
        selectedService = service;
        
        const isAvailable = service.status === 'available';
        const statusText = service.status === 'available' ? 'Tersedia' : (service.status === 'sold_out' ? 'Habis' : 'Segera');
        const statusColor = service.status === 'available' ? '#10b981' : (service.status === 'sold_out' ? '#6b7280' : '#f59e0b');
        
        document.getElementById('selectedServiceName').innerHTML = `${service.name} <span style="font-size: 9px; padding: 2px 8px; border-radius: 20px; background: ${statusColor}; color: white; margin-left: 6px;">${statusText}</span>`;
        document.getElementById('selectedServicePrice').innerHTML = `Rp ${service.price.toLocaleString('id-ID')} / ${service.unit}`;
        document.getElementById('selectedServiceDesc').innerHTML = service.description;
        
        const quantityInput = document.getElementById('serviceQuantity');
        quantityInput.value = 1000;
        quantityInput.disabled = !isAvailable;
        
        document.getElementById('orderNowBtn').disabled = !isAvailable;
        document.getElementById('addToCartServiceBtn').disabled = !isAvailable;
        
        updatePriceBreakdownFlexible(service);
        
        serviceDetail.style.display = 'block';
    };
    
    const quantityInput = document.getElementById('serviceQuantity');
    quantityInput.oninput = function() {
        if (selectedService) {
            updatePriceBreakdownFlexible(selectedService);
        }
    };
    
    document.querySelectorAll('.quick-btn').forEach(btn => {
        btn.onclick = () => {
            if (selectedService) {
                const qty = parseInt(btn.dataset.qty);
                quantityInput.value = qty;
                updatePriceBreakdownFlexible(selectedService);
            }
        };
    });
    
    // TOMBOL MASUKAN KERANJANG
    document.getElementById('addToCartServiceBtn').onclick = function() {
        const availableService = socialMediaServices.find(s => s.status === 'available');
        
        if (!availableService) {
            showToast('Maaf, layanan sedang tidak tersedia', true);
            return;
        }
        
        const quantity = 1000;
        
        const unitMatch = availableService.unit.match(/([\d\.]+)/);
        const unitValue = unitMatch ? parseFloat(unitMatch[0].replace(/\./g, '')) : 1;
        
        const totalPrice = (quantity / unitValue) * availableService.price;
        const orderName = `${availableService.name}`;
        
        cart.push({
            id: Date.now(),
            name: orderName,
            price: totalPrice,
            image: "image/produk/produk23.jpg",
            quantity: 1
        });
        
        saveCart();
        renderCart();
        updateCartBadges();
        
        showToast(`${orderName} ditambahkan ke keranjang!`);
        closeSocialMediaModal();
    };
    
    // TOMBOL PESAN SEKARANG
    document.getElementById('orderNowBtn').onclick = function() {
        if (!selectedService) {
            showToast('Pilih layanan terlebih dahulu', true);
            return;
        }
        if (selectedService.status !== 'available') {
            showToast('Layanan tidak tersedia', true);
            return;
        }
        
        let quantity = parseInt(quantityInput.value) || 0;
        if (quantity <= 0) {
            showToast('Masukkan jumlah pesanan', true);
            return;
        }
        
        const unitMatch = selectedService.unit.match(/([\d\.]+)/);
        const unitValue = unitMatch ? parseFloat(unitMatch[0].replace(/\./g, '')) : 1;
        
        const totalPrice = (quantity / unitValue) * selectedService.price;
        const orderName = `${selectedService.name} - ${quantity.toLocaleString('id-ID')} ${selectedService.unit.replace(/[\d\.]+\s*/, '')}`;
        
        closeSocialMediaModal();
        
        const qrTotal = document.getElementById('qrTotal');
        if (qrTotal) qrTotal.textContent = formatPrice(totalPrice);
        
        const qrisModal = document.getElementById('qrisModal');
        if (qrisModal) qrisModal.classList.add('active');
        
        window.pendingOrder = {
            items: [{ name: orderName, quantity: 1 }],
            totalItems: 1,
            totalPrice: totalPrice
        };
    };
}

function updatePriceBreakdownFlexible(service) {
    let quantity = parseInt(document.getElementById('serviceQuantity').value) || 0;
    
    const unitMatch = service.unit.match(/([\d\.]+)/);
    const unitValue = unitMatch ? parseFloat(unitMatch[0].replace(/\./g, '')) : 1;
    
    const totalPrice = (quantity / unitValue) * service.price;
    
    document.getElementById('pricePerThousand').innerHTML = `Rp ${service.price.toLocaleString('id-ID')} / ${service.unit}`;
    document.getElementById('totalPrice').innerHTML = `Rp ${totalPrice.toLocaleString('id-ID')}`;
}

function closeSocialMediaModal() {
    const modal = document.getElementById('socialMediaModal');
    if (modal) modal.classList.remove('active');
    selectedService = null;
}





//🙏😁🤪😁🤪😁🤪😁🤪😁

// ================================================
// TAMBAH SUNTIK SOSMED KE KERANJANG (LANGSUNG, TANPA MODAL)
// ================================================
function addSocialMediaToCart() {
    // Cari layanan pertama yang tersedia
    const availableService = socialMediaServices.find(s => s.status === 'available');
    
    if (!availableService) {
        showToast('Maaf, layanan sedang tidak tersedia', true);
        return;
    }
    
    const quantity = 1000; // jumlah default
    
    // Ekstrak angka dari unit (contoh: "1.000 pengikut" -> 1000)
    const unitMatch = availableService.unit.match(/([\d\.]+)/);
    const unitValue = unitMatch ? parseFloat(unitMatch[0].replace(/\./g, '')) : 1;
    
    // Hitung total harga
    const totalPrice = (quantity / unitValue) * availableService.price;
    const orderName = availableService.name;
    
    // Tambah ke keranjang
    cart.push({
        id: Date.now(),
        name: orderName,
        price: totalPrice,
        image: "image/produk/produk23.jpg",
        quantity: 1
    });
    
    saveCart();
    renderCart();
    updateCartBadges();
    
    showToast(`${orderName} ditambahkan ke keranjang!`);
}

//🙏😁🤪😁🤪😁🤪😁🤪😁






function escapeHtml(text) {
    if (!text) return '';
    return text.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}





// Event listener close modal
document.addEventListener('DOMContentLoaded', function() {
    const closeSocialMedia = document.getElementById('closeSocialMediaModal');
    if (closeSocialMedia) {
        closeSocialMedia.addEventListener('click', closeSocialMediaModal);
    }
    
    const socialMediaModal = document.getElementById('socialMediaModal');
    if (socialMediaModal) {
        socialMediaModal.addEventListener('click', (e) => {
            if (e.target === socialMediaModal) closeSocialMediaModal();
        });
    }
});






//😛😛😛😛😛😛😛😛😛😛😛
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
