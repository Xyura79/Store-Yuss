// ================================================
// DATA PRODUK
// ================================================
// ==========================================
const WHATSAPP_CHANNEL_URL = "https://whatsapp.com/channel/0029VbAgFKULSmbeJMLfmR3b";
const ADMIN_PHONE_NUMBER = "6283183469343";
const phoneNumber = '6283183469343';

const tools = ['toolTiktok', 'toolYoutube', 'toolSpotify', 'toolFacebook', 'toolCapcut', 'toolInstagram', 'toolFakelobby', 'toolFakedana', 'toolFakelobbyml', 'toolFakejago', 'toolPassword', 'toolLorem', 'toolQrcode', 'toolSertifikatlol', 'toolWrMLBB', 'toolEmojimix', 'toolBeritaMLBB', 'toolTiktokhashtag', 'toolTranslate', 'toolSpotifysearch', 'toolLyrics', 'toolYtsearch', 'toolPpcouple', 'toolDeviceid', 'toolCekacount'];



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
    type: "hot-banner-content",
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
    type: "hot",
    isSocialMediaService: true
},
    
    
    
    
{
    id: 14,
    name: "Nokos",
    description: "Dapat nomor WhatsApp, Telegram, atau Dana murah meriah",
    price: "Pilih",
    image: "image/produk/produk13.jpg",
    category: "digital",
    isNegotiable: true,
    type: "hot",
    hasNokosOption: true,  // TAMBAHKAN INI
    benefits: [
        "Dapat nomor whatsapp murah meriah",
        "Pilih aplikasi sesuai kebutuhan",
        "Pilih negara sesuai keinginan"
    ],
    note: ""
},

    
        {
        id: 7,
        name: "Panel Pterodactly",
        description: "Server yang Siap Hosting bot kamu, Anti delay, dan bergaransi",
        price: "Rp 500",
        image: "image/produk/produk6.jpg",
        category: "digital",
        isNegotiable: false,
        type: "hot",
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
    id: 19,
    name: "Reaction Pesan Saluran",
    description: "Memberikan 100+ Reaksi emoji ke pesan di saluran WhatsApp anda",
    price: 800,
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
    id: 26,
    name: "Paket Hemat Reaction Wa",
    description: "Otomatis nge reaction pesan baru di saluran mu selama 1/2 hari tergantung pesanan mu",
    price: "Tanya Stok",
    image: "image/produk/produk25.jpg",
    category: "jasa",
    isNegotiable: false,
    type: "sold_out",
    hasDurationOption: true,
    benefits: [
        "Semua Pesan saluran mu banyak reaksi nya",
        "Saluran Full Reaction",
        "100+ reaction walaupun pengikut saluran kurang dari 100"
    ]
},
    
    


    
        {
    id: 29,
    name: "Website Store",
    description: "Web store ini akan membantu kamu dalam berjualan, Pembeli jadi tidak perlu tanya tanya harga, prodyk apa yang di jual, karna sudah tersedia di web, dan pembeli tinggal memilih. Kamu mendapatkan web dan script nya",
    price: 20000,
    image: "image/produk/produk26.jpg",
    category: "digital",
    isNegotiable: false,
    type: "new",
    benefits: [
        "Punya Web Store Permanen",
        "Free Deploy Vercel",
        "Free ADD 10 Produk",
        
    ]
},
    
    
    
    
        {
    id: 17,
    name: "Aplikasi Pembuat Logo JB",
    description: "Keuntungannya, Buat Logo Gak Perlu Susah Lagi, Tinggal Ganti Teks Langsung Jadi, Bisa Jualan Logo JB",
    price: 5000,
    image: "image/produk/produk18.jpg",
    category: "digital",
    isNegotiable: false,
    type: "hot",
    benefits: [
        "Bisa buat logo dengan mudah",
        "bisa jualan logo"
    ]
},
    
    
    
        {
    id: 30,
    name: "Aplikasi Auto Sv Kontak",
    description: "Keuntungannya, Kontak Jadi Banyak, Gak perlu sv 1 1, udah otomatis nge save kontak tidak di kenal, cocok buat anak jb",
    price: 5000,
    image: "image/produk/produk27.jpg",
    category: "digital",
    isNegotiable: false,
    type: "new",
    benefits: [
        "Otomatis Save Kontak Tidak Di kenal",
        "Kontak Jadi Banyak"
    ]
},
    
    
    
    
    
    
    
    
    
    
    
    
    
    
            {
    id: 24,
    name: "Mentahan Design",
    description: "Berisi Font, Image, apk pixelab mod, ibis paint mod",
    price: 6000,
    image: "image/produk/produk24.jpg",
    category: "digital",
    isNegotiable: false,
    type: "neww",
    benefits: [
        "Dapat Mentahan untuk desain",
        "bisa di jual lagi"
    ]
},
   
   
   
   
    
            {
    id: 25,
    name: "Jasa Rekber",
    description: "Mau beli akun tapi takut ketipu? Tenang kami siap jadi orang ke tiga yang memberikan keamanan di transaksi mu",
    price: "Fee",
    image: "image/produk/produk22.jpg",
    category: "digital",
    isNegotiable: false,
    type: "",
    isConsultation: true
    
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
    id: 18,
    name: "Jasa Joki Game",
    description: "Cape Main Tapi Kalah Terus?, Mari Pakai Jasa Kami, Murah Amanah Dan Terpercaya",
    price: 500,
    image: "image/produk/produk19.jpg",
    category: "jasa",
    isNegotiable: false,
    type: "none",
    isConsultation: true,
    benefits: [
        "Rank mu jadi tinggi tanpa cape"
    ],
    note: "membutuhkan waktu 1 hari + tergantung pemesanan"
},
    
    
    



{
    id: 15,
    name: "Jasa Bug",
    description: "Punya Musuh?, Mau Balas Dendam?, Jasa ini Akan Balaskan Dendam Kamu Ke target",
    price: "Rp 4000",
    image: "image/produk/produk14.jpg",
    category: "digital",
    isNegotiable: false,
    type: "coming_soon",
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
    type: "hot",
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
}




//🥑😒🥑🫡😒🫡😒🫡😒🫡😒
//😒😇😒😇😒😇😒😇😒😇😒












];

//😑🥺🥹🥺😊🥺😋














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
        price: 75000,
        unit: "1.000 pengikut",
        status: "available",
        description: "Tambahkan pengikut ke saluran WhatsApp anda",
        minQuantity: 50
    },
    {
        id: 2,
        name: "WhatsApp Poll Vote",
        price: 160000,
        unit: "1.000 Vote",
        status: "available",
        description: "Suntik Polling/Vote Saluran whatsapp",
        minQuantity: 50
    },
    {
        id: 3,
        name: "TikTok View",
        price: 7000,
        unit: "1.000 View",
        status: "available",
        description: "Tambahkan View ke video TikTok",
        minQuantity: 500
    },
    {
        id: 4,
        name: "TikTok Like+View",
        price: 15000,
        unit: "1.000 Like",
        status: "available",
        description: "Menambahkan  Like ke VT Anda",
        minQuantity: 100
    },
        {
        id: 5,
        name: "TikTok Follower",
        price: 70000,
        unit: "1.000 Follower",
        status: "available",
        description: "Menambah Follower ke akun TikTok",
        minQuantity: 20
    },

    
              {
        id: 6,
        name: "Instagram like",
        price: 50000,
        unit: "1.000 Like",
        status: "available",
        description: "Menambah Like ke Reels anda",
        minQuantity: 25
    },
    
    
                  {
        id: 7,
        name: "Facebook Like",
        price: 10000,
        unit: "1.000 Like",
        status: "available",
        description: "Menambah Like Facebook",
        minQuantity: 100
    },
    
    
    
    
    
    
];


//🙏😁🤪😁🤪😁🤪😁🤪😁
//🙏😁🤪😁🤪😁🤪😁🤪😁



// ================================================
// DATA NEGARA UNTUK NOKOS
// ================================================
const nokosCountries = {
    whatsapp: {
        indonesia: { name: "Indonesia", code: "+62", price: 6000, countryCode: "id" },
        philippines: { name: "Filipina", code: "+63", price: 9000, countryCode: "ph" },
        malaysia: { name: "Malaysia", code: "+60", price: 14000, countryCode: "my" },
        thailand: { name: "Thailand", code: "+66", price: 18000, countryCode: "th" },
        colombia: { name: "Colombia", code: "+57", price: 10000, countryCode: "co" },
        afghanistan: { name: "Afganistan", code: "+93", price: 20000, countryCode: "af" },
        albania: { name: "Albania", code: "+355", price: 11000, countryCode: "al" },
        algeria: { name: "Algeria", code: "+213", price: 11000, countryCode: "dz" },
        austria: { name: "Austria", code: "+43", price: 15000, countryCode: "at" },
        brazil: { name: "Brazil", code: "+55", price: 19500, countryCode: "br" }
    },
    telegram: {
        indonesia: { name: "Indonesia", code: "+62", price: 4000, countryCode: "id" },
        philippines: { name: "Filipina", code: "+63", price: 7000, countryCode: "ph" },
        malaysia: { name: "Malaysia", code: "+60", price: 9700, countryCode: "my" },
        colombia: { name: "Colombia", code: "+57", price: 7000, countryCode: "co" }
    },
    dana: {
        indonesia: { name: "Indonesia", code: "+62", price: 4600, countryCode: "id" }
    }
};





















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
        
        if (item.panelUsername || (orderDetails.isPanelService && orderDetails.panelUsername)) {
            const username = item.panelUsername || orderDetails.panelUsername;
            message += `• Username Panel: ${username}%0A`;
        }
        
        if (item.ram || orderDetails.panelRam) {
            const ram = item.ram || orderDetails.panelRam;
            message += `• RAM: ${ram}%0A`;
        }
        
        if (item.targetNumber || (orderDetails.isBugService && orderDetails.bugTarget)) {
            const target = item.targetNumber || orderDetails.bugTarget;
            message += `• Nomor Target: ${target}%0A`;
        }
        
        if (item.sosmedTarget || orderDetails.sosmedTarget) {
            const target = item.sosmedTarget || orderDetails.sosmedTarget;
            message += `• Target (Link/Username): ${target}%0A`;
        }
        
        if (item.sosmedQuantity || orderDetails.sosmedQuantity) {
            const qty = item.sosmedQuantity || orderDetails.sosmedQuantity;
            message += `• Jumlah Pesanan: ${qty.toLocaleString('id-ID')}%0A`;
        }
        
        if (item.reactionLink || (orderDetails.isReactionService && orderDetails.reactionLink)) {
            const link = item.reactionLink || orderDetails.reactionLink;
            let emoji = item.reactionEmoji || orderDetails.reactionEmoji;
            
            let formattedEmoji = '';
            for (let i = 0; i < emoji.length; i++) {
                const code = emoji.charCodeAt(i);
                if (code >= 0xD800 && code <= 0xDBFF) {
                    formattedEmoji += emoji[i] + emoji[i+1];
                    if (i + 2 < emoji.length) formattedEmoji += ', ';
                    i++;
                } else if (code > 0x7F) {
                    formattedEmoji += emoji[i];
                    if (i + 1 < emoji.length) formattedEmoji += ', ';
                } else {
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
    message += `• Waktu: ${jam} • ${tanggal} ${tahun}%0A`;
    
    // ID Perangkat
    const deviceId = localStorage.getItem('device_fingerprint') || 'Tidak tersedia';
    message += `• ID: ${deviceId}%0A%0A`;
    
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
        
//🙏😁🤪😁🤪😁🤪😁🤪😁
        
        
        
        
        








































// Di dalam renderProducts(), cek untuk produk Nokos
if (product.id === 14 || product.hasNokosOption) {
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
                    <button class="btn-buy-now" onclick="event.stopPropagation(); buyNow(${product.id});" style="background: linear-gradient(90deg, #f59e0b, #d97706);">
                        <i class="ri-list-check"></i> Pilih
                    </button>
                    <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id});" ${disabledCart}>
                        <i class="ri-shopping-cart-line"></i> Keranjang
                    </button>
                </div>
            </div>
        </div>
    `;
}



        
        
        //🙏😁🤪😁🤪😁🤪😁🤪😁
        
        // Di dalam renderProducts(), untuk produk isSocialMediaService
if (product.isSocialMediaService || product.id === 21) {
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
// FUNGSI TAMPILKAN QRIS DENGAN LOADING CEPAT
// ================================================
function showQrisModalWithButton() {
    const modal = document.getElementById('qrisModal');
    const qrisImage = document.getElementById('qrisImage');
    const qrisLoading = document.getElementById('qrisLoading');
    const qrisLinkContainer = document.getElementById('qrisLinkContainer');
    
    // Tampilkan loading spinner
    if (qrisLoading) {
        qrisLoading.style.display = 'flex';
    }
    
    // Sembunyikan gambar dulu
    if (qrisImage) {
        qrisImage.style.opacity = '0';
        qrisImage.style.display = 'none';
    }
    
    // PASTIKAN LINK SELALU TAMPIL (tanpa diatur display)
    if (qrisLinkContainer) {
        qrisLinkContainer.style.display = 'flex';
        qrisLinkContainer.style.justifyContent = 'center';
    }
    
    // Preload gambar dengan cache buster (biar cepat)
    const qrisUrl = 'image/qris/qris.jpg';
    const img = new Image();
    img.onload = function() {
        // Gambar selesai dimuat
        if (qrisImage) {
            qrisImage.src = qrisUrl;
            qrisImage.style.display = 'block';
            qrisImage.style.opacity = '1';
            setupQrisZoom();
            
        }
        if (qrisLoading) {
            qrisLoading.style.display = 'none';
        }
    };
    img.onerror = function() {
        // Jika gagal load, tetap sembunyikan loading
        if (qrisLoading) {
            qrisLoading.style.display = 'none';
        }
        // Tampilkan pesan error di link (opsional)
        if (qrisLinkContainer) {
            qrisLinkContainer.style.background = 'rgba(239, 68, 68, 0.1)';
        }
    };
    img.src = qrisUrl;
    
    // Tampilkan modal
    if (modal) {
        modal.classList.add('active');
    }
}








let qrisZoomReady = false;

function setupQrisZoom() {
    if (qrisZoomReady) return;
    
    const qrisImage = document.getElementById('qrisImage');
    if (!qrisImage) return;

    qrisImage.style.cursor = 'pointer';

    qrisImage.addEventListener('click', function() {
        const overlay = document.createElement('div');
        overlay.className = 'qris-fullscreen-overlay';
        overlay.innerHTML = `
            <button class="qris-fullscreen-close">
                <i class="ri-close-line"></i>
            </button>
            <img src="${qrisImage.src}" alt="QRIS">
        `;

        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';

        requestAnimationFrame(() => {
            overlay.classList.add('active');
        });

        function closeOverlay() {
            overlay.classList.remove('active');
            setTimeout(() => {
                overlay.remove();
                document.body.style.overflow = '';
            }, 300);
        }

        overlay.querySelector('.qris-fullscreen-close').addEventListener('click', closeOverlay);
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) closeOverlay();
        });
    });

    qrisZoomReady = true;
}




// ================================================
// UPDATE FUNGSI BUY NOW
// ================================================

function buyNow(productId) {
    console.log("buyNow dipanggil untuk ID:", productId);
    
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.log("Produk tidak ditemukan!");
        return;
    }
    
    console.log("Produk:", product.name);
    
    
    
     // CEK APAKAH PRODUK NOKOS
    if (product.hasNokosOption) {
        console.log("Ini produk Nokos dengan pilihan aplikasi dan negara");
        showNokosModal(product);
        return;
    }
    
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
    
    
    
     // CEK APAKAH PRODUK PAKET HEMAT REACTION (DURASI)
    if (product.hasDurationOption) {
        showReactionDurationModal(product);
        return;
    }
    
    
    // KHUSUS PRODUK WEBSITE STORE (ID 29)
if (product.id === 29 || product.name === "Website Store") {
    console.log("Ini produk Website Store, buka modal form");
    showWebsiteStoreModal(product);
    return;
}
    
    
    
    
    
    
    
    // CEK APAKAH PRODUK PUNYA VARIAN RAM
    if (product.hasVariant) {
        console.log("Ini produk dengan varian");
        showVariantModal(product, (selectedProduct) => {
            const totalPrice = selectedProduct.price;
            
            const qrTotal = document.getElementById('qrTotal');
            if (qrTotal) qrTotal.textContent = formatPrice(totalPrice);
            
            // === UBAH INI ===
            showQrisModalWithButton();
            
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
    
    // === UBAH INI ===
    showQrisModalWithButton();
    
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


if (pageName === 'special') {
        const modal = document.getElementById('specialComingSoonModal');
        if (modal) modal.classList.add('active');
        return; // Jangan lanjutkan navigasi
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






function confirmPayment() {
    if (window.pendingOrder) {
        // Cek apakah ini pesanan website store
        if (window.pendingOrder.isWebsiteOrder && window.pendingOrder.websiteData) {
            const data = window.pendingOrder.websiteData;
            const { jam, tanggal, tahun } = getCurrentDateTime();
            
            let message = `Halo Yuss Xy 👋%0A%0A`;
            message += `Saya ingin memesan *Website Store*.%0A%0A`;
            message += `📦 DETAIL PESANAN WEBSITE%0A%0A`;
            message += `Nama Website: ${data.webName}%0A`;
            message += `Nama Owner: ${data.ownerName}%0A`;
            message += `Telegram: ${data.telegramLink || '-'}%0A`;
            message += `Instagram: ${data.instagramLink || '-'}%0A`;
            message += `WhatsApp Owner: ${data.ownerWA}%0A`;
            message += `WhatsApp Admin: ${data.adminWA || '-'}%0A`;
            message += `Harga: Rp ${data.productPrice.toLocaleString('id-ID')}%0A%0A`;
            message += `✅ Pembayaran sudah saya lakukan.%0A%0A`;
            message += `Mohon segera diproses untuk pembuatan website store saya.%0A`;
            message += `Terima kasih 🙏%0A%0A`;
            message += `Waktu: ${jam} • ${tanggal} ${tahun}`;
            
            window.open(`https://wa.me/${ADMIN_PHONE_NUMBER}?text=${message}`, '_blank');
        }
        // Cek apakah ini pesanan bug service
        else if (window.pendingOrder.isBugService || (window.pendingBugTarget && !window.pendingOrder.bugTarget)) {
            if (window.pendingBugTarget && !window.pendingOrder.bugTarget) {
                window.pendingOrder.bugTarget = window.pendingBugTarget;
                window.pendingOrder.isBugService = true;
            }
            sendWhatsAppConfirmation(window.pendingOrder);
        }
        // Pesanan biasa
        else {
            sendWhatsAppConfirmation(window.pendingOrder);
        }
        
        // Reset cart
        cart = [];
        saveCart();
        renderCart();
        
        // Tutup modal QRIS
        const modal = document.getElementById('qrisModal');
        if (modal) modal.classList.remove('active');
        
        // Kembali ke halaman produk
        navigateToPage('products');
        
        showToast('✅ Pesanan berhasil dikonfirmasi!');
        
        // Reset semua data pending
        window.pendingOrder = null;
        window.pendingBugTarget = null;
        window.websiteOrderData = null;
    }
}







// ================================================
// EVENT LISTENERS
// ================================================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCart();
    updateCartBadges();
    showSkeletonLoading();
    initSholatWidget();
    initQuoteWidget();
    
    
    
    
    
    
    
    
    
    
    
    
   setTimeout(() => {
        renderProductsWithImageLoading();
        renderCart();
        updateCartBadges();
    }, 300);
    
    
    
    
    
    
    
    
    
    
    
    

    
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

// =================================
function chatWithOwner() {
    const phoneNumber = '6283183469343';
    const { jam, tanggal, tahun } = getCurrentDateTime();
    
    let message = "Halo Yuss Xy 👋%0A%0A";
    message += "Saya tertarik dengan produk yang tersedia di YussXy Store.%0A%0A";
    message += "Saya ingin mengetahui informasi lebih lanjut mengenai produk yang dijual serta ketersediaannya.%0A%0A";
    message += "Mohon bantuannya ya 🙏%0A";
    message += "Terima kasih.";
    
    console.log("Chat owner diklik, membuka WhatsApp...");
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}


//===============
// EVENT LISTENER SETELAH DOM LOAD
// ==============







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
    qrisZoomReady = false;
}





























































































document.addEventListener('DOMContentLoaded', function() {
    // ================================================
    // GENERATE DEVICE ID OTOMATIS (KALAU BELUM ADA)
    // ================================================
    if (!localStorage.getItem('device_fingerprint')) {
        generateAndSaveDeviceId();
    }

    async function generateAndSaveDeviceId() {
        try {
            const code = await generateDeviceCode();
            localStorage.setItem('device_fingerprint', code);
            console.log('Device ID dibuat otomatis:', code);
        } catch(e) {
            console.log('Gagal generate device ID:', e);
        }
    }

    // ================================================
    // CEK BANNED & UNBAN (DI PALING ATAS)
    // ================================================
    const deviceId = localStorage.getItem('device_fingerprint');
    
    if (deviceId && typeof BANNED_DEVICE_IDS !== 'undefined' && BANNED_DEVICE_IDS.length > 0) {
        if (BANNED_DEVICE_IDS.includes(deviceId)) {
            localStorage.setItem('was_banned', 'true');
            window.location.href = 'ban/ban.html';
            return;
        }
    }
    
    const wasBanned = localStorage.getItem('was_banned') === 'true';
    if (wasBanned && deviceId && typeof BANNED_DEVICE_IDS !== 'undefined') {
        if (!BANNED_DEVICE_IDS.includes(deviceId)) {
            localStorage.removeItem('was_banned');
            window.location.href = 'ban/unban.html';
            return;
        }
    }

    // ================================================
    // BANNER & ACTION BUTTONS
    // ================================================
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
    
    // ================================================
    // MODAL COMING SOON FITUR SPECIAL
    // ================================================
    const closeSpecialBtn = document.getElementById('closeSpecialModalBtn');
    if (closeSpecialBtn) {
        closeSpecialBtn.addEventListener('click', function() {
            const modal = document.getElementById('specialComingSoonModal');
            if (modal) {
                modal.classList.remove('active');
            }
        });
    }
    
    const specialModal = document.getElementById('specialComingSoonModal');
    if (specialModal) {
        specialModal.addEventListener('click', function(e) {
            if (e.target === specialModal) {
                specialModal.classList.remove('active');
            }
        });
    }
    
    // ================================================
    // BOTTOM NAVIGATION - TOMBOL SPESIAL
    // ================================================
    const navItems = document.querySelectorAll('.nav-item');
    if (navItems.length > 0) {
        navItems.forEach(function(item) {
            item.addEventListener('click', function(e) {
                const page = this.dataset.page;
                
                navItems.forEach(function(nav) {
                    nav.classList.remove('active');
                    nav.classList.remove('special-active');
                });
                
                if (page === 'special') {
                    e.preventDefault();
                    this.classList.add('special-active');
                    this.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        if (this) this.style.transform = '';
                    }, 150);
                    
                    const modal = document.getElementById('specialComingSoonModal');
                    if (modal) {
                        modal.classList.add('active');
                    }
                    return;
                }
                
                if (page && typeof navigateToPage === 'function') {
                    this.classList.add('active');
                    navigateToPage(page);
                }
            });
        });
    }
});
















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

else if (toolName === 'deviceid') {
    document.getElementById('toolDeviceid').style.display = 'block';
    showDeviceCode();
    setupDeviceCodeCopy();
}


else if (toolName === 'deviceid') {
    document.getElementById('toolDeviceid').style.display = 'block';
    showDeviceCode();
    setupDeviceCodeCopy();
}




else if (toolName === 'cekaccount') {
    document.getElementById('toolCekaccount').style.display = 'block';
    showAccountId();
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
// TOOL CEK ID ACCOUNT (LENGKAP DENGAN DETAIL PERANGKAT)
// ================================================

// Fungsi untuk mendapatkan semua detail perangkat
function getDeviceDetails() {
    return {
        userAgent: navigator.userAgent,
        platform: navigator.platform || 'unknown',
        screenSize: `${screen.width} x ${screen.height}`,
        screenColorDepth: `${screen.colorDepth} bit`,
        language: navigator.language,
        languageList: navigator.languages ? navigator.languages.join(', ') : '-',
        timezoneOffset: `UTC ${new Date().getTimezoneOffset() / -60} jam`,
        timezoneName: Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown',
        hardwareConcurrency: navigator.hardwareConcurrency || 'unknown',
        deviceMemory: navigator.deviceMemory ? `${navigator.deviceMemory} GB` : 'unknown',
        touchSupport: 'ontouchstart' in window ? 'Ya' : 'Tidak',
        online: navigator.onLine ? 'Online' : 'Offline',
        cookiesEnabled: navigator.cookieEnabled ? 'Ya' : 'Tidak',
        doNotTrack: navigator.doNotTrack || 'Tidak disetel'
    };
}

// Fungsi render detail perangkat ke HTML
function renderDeviceDetails() {
    const details = getDeviceDetails();
    const container = document.getElementById('deviceDetailsList');
    if (!container) return;
    
    const detailItems = [
        { icon: 'ri-smartphone-line', label: 'Platform', value: details.platform },
        { icon: 'ri-computer-line', label: 'User Agent', value: details.userAgent.substring(0, 80) + '...', small: true },
        { icon: 'ri-aspect-ratio-line', label: 'Resolusi Layar', value: details.screenSize },
        { icon: 'ri-palette-line', label: 'Depth Warna', value: details.screenColorDepth },
        { icon: 'ri-translate-2', label: 'Bahasa', value: details.language },
        { icon: 'ri-time-line', label: 'Timezone', value: details.timezoneName + ` (${details.timezoneOffset})` },
        { icon: 'ri-cpu-line', label: 'CPU Core', value: details.hardwareConcurrency },
        { icon: 'ri-memory-card-line', label: 'RAM (estimasi)', value: details.deviceMemory },
        { icon: 'ri-fingerprint-line', label: 'Touchscreen', value: details.touchSupport },
        { icon: 'ri-wifi-line', label: 'Status Koneksi', value: details.online }
    ];
    
    container.innerHTML = detailItems.map(item => `
        <div style="display: flex; align-items: flex-start; gap: 12px; padding: 10px; background: var(--bg-card); border-radius: 12px; border-left: 3px solid var(--accent);">
            <i class="${item.icon}" style="font-size: 20px; color: var(--accent);"></i>
            <div style="flex: 1;">
                <div style="font-size: 11px; color: var(--text-secondary);">${item.label}</div>
                <div style="font-size: 12px; font-weight: 500; word-break: break-word; ${item.small ? 'font-size: 10px;' : ''}">${item.value}</div>
            </div>
        </div>
    `).join('');
}

// Fungsi utama untuk menampilkan ID Account
async function showAccountId() {
    const deviceIdElem = document.getElementById('accountDeviceId');
    if (!deviceIdElem) return;
    
    deviceIdElem.innerHTML = '<i class="ri-loader-4-line" style="animation: spin 1s linear infinite;"></i> Menghasilkan ID...';
    
    const code = await generateDeviceCode(); // pakai fungsi yang sudah ada
    deviceIdElem.innerHTML = code;
    
    // Simpan ke localStorage
    localStorage.setItem('device_fingerprint', code);
    
    // Render detail perangkat
    renderDeviceDetails();
    
    // Setup tombol copy
    setupAccountCopyButton();
    
    // Setup tombol share
    setupAccountShareButton();
}

function setupAccountCopyButton() {
    const copyBtn = document.getElementById('copyAccountIdBtn');
    if (!copyBtn) return;
    
    // Hapus event lama biar tidak dobel
    const newCopyBtn = copyBtn.cloneNode(true);
    copyBtn.parentNode.replaceChild(newCopyBtn, copyBtn);
    
    newCopyBtn.addEventListener('click', async () => {
        const codeElem = document.getElementById('accountDeviceId');
        let code = codeElem.innerText;
        if (code.includes('Menghasilkan') || code === '--') {
            showToast('❌ ID belum siap, tunggu sebentar', true);
            return;
        }
        navigator.clipboard.writeText(code).then(() => {
            showToast('✅ ID Account disalin!');
        }).catch(() => {
            showToast('❌ Gagal menyalin', true);
        });
    });
}

function setupAccountShareButton() {
    const shareBtn = document.getElementById('shareAccountIdBtn');
    if (!shareBtn) return;
    
    const newShareBtn = shareBtn.cloneNode(true);
    shareBtn.parentNode.replaceChild(newShareBtn, shareBtn);
    
    newShareBtn.addEventListener('click', async () => {
        const codeElem = document.getElementById('accountDeviceId');
        let code = codeElem.innerText;
        if (code.includes('Menghasilkan') || code === '--') {
            showToast('❌ ID belum siap', true);
            return;
        }
        
        const details = getDeviceDetails();
        const message = `Halo Admin YussXy Store 👋%0A%0A` +
            `Berikut ID Account saya:%0A` +
            `━━━━━━━━━━━━━━━━%0A` +
            `🔑 ID Account: ${code}%0A%0A` +
            `DETAIL PERANGKAT:%0A` +
            `• Platform: ${details.platform}%0A` +
            `• Resolusi: ${details.screenSize}%0A` +
            `• Bahasa: ${details.language}%0A` +
            `• Timezone: ${details.timezoneName}%0A` +
            `• CPU Core: ${details.hardwareConcurrency}%0A` +
            `━━━━━━━━━━━━━━━━%0A%0A` +
            `Mohon info untuk aktivasi akun. Terima kasih 🙏`;
        
        window.open(`https://wa.me/6283183469343?text=${message}`, '_blank');
        showToast('✅ Pesan dikirim ke admin');
    });
}



















// ================================================
// GENERATE KODE UNIK PERANGKAT (DEVICE FINGERPRINT)
// ================================================

// Fungsi hash sederhana (fallback jika crypto.subtle tidak tersedia)
function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash).toString(16).slice(0, 16).toUpperCase();
}

async function generateDeviceCode() {
    // Kumpulkan data perangkat
    const data = [
        navigator.userAgent,
        screen.width + 'x' + screen.height,
        screen.colorDepth,
        navigator.language,
        new Date().getTimezoneOffset(),
        navigator.hardwareConcurrency || 'unknown',
        getCanvasFingerprint()
    ].join('|');
    
    // Coba pakai crypto.subtle jika tersedia (HTTPS atau secure context)
    if (window.crypto && window.crypto.subtle) {
        try {
            const encoder = new TextEncoder();
            const hashBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(data));
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
            return hashHex.slice(0, 16).toUpperCase();
        } catch(e) {
            console.warn("crypto.subtle gagal, fallback ke simple hash", e);
            return simpleHash(data);
        }
    } else {
        console.warn("crypto.subtle tidak tersedia, pakai simple hash");
        return simpleHash(data);
    }
}

// Canvas fingerprint (opsional, untuk tingkatkan keunikan)
function getCanvasFingerprint() {
    try {
        const canvas = document.createElement('canvas');
        canvas.width = 200;
        canvas.height = 50;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#f60';
        ctx.fillRect(0, 0, 200, 50);
        ctx.fillStyle = '#fff';
        ctx.font = '14px Arial';
        ctx.fillText('YussXyStore', 10, 30);
        return canvas.toDataURL();
    } catch(e) {
        return 'canvas_error';
    }
}

// Fungsi untuk menampilkan kode di tool
async function showDeviceCode() {
    const resultDiv = document.getElementById('deviceCodeResult');
    if (!resultDiv) return;
    
    resultDiv.innerHTML = '<i class="ri-loader-4-line" style="animation: spin 1s linear infinite;"></i> Menghasilkan kode...';
    const code = await generateDeviceCode();
    resultDiv.innerHTML = code;
    
    // Simpan ke localStorage agar bisa dicek nanti (opsional)
    localStorage.setItem('device_fingerprint', code);
}

// Event listener untuk tombol salin
function setupDeviceCodeCopy() {
    const copyBtn = document.getElementById('copyDeviceCodeBtn');
    if (!copyBtn) return;
    
    // Hapus event listener lama jika ada (biar tidak dobel)
    const newCopyBtn = copyBtn.cloneNode(true);
    copyBtn.parentNode.replaceChild(newCopyBtn, copyBtn);
    
    newCopyBtn.addEventListener('click', async () => {
        const codeElem = document.getElementById('deviceCodeResult');
        let code = codeElem.innerText;
        if (code.includes('Menghasilkan') || code === '--') {
            showToast('❌ Kode belum siap, tunggu sebentar', true);
            return;
        }
        navigator.clipboard.writeText(code).then(() => {
            showToast('✅ Kode perangkat disalin!');
        }).catch(() => {
            showToast('Gagal menyalin', true);
        });
    });
}






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
        // API BARU: siputzx.my.id
        const apiUrl = `https://api.siputzx.my.id/api/s/youtube?query=${encodedQuery}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.status === true && data.data && data.data.length > 0) {
            const videos = data.data;
            
            let html = `<div style="margin-bottom: 12px; font-size: 12px; color: var(--text-secondary);"><i class="ri-youtube-line"></i> Ditemukan ${videos.length} video untuk "${escapeHtml(query)}"</div>`;
            
            videos.forEach(video => {
                // Format views
                let viewText = video.views ? (video.views >= 1000 ? (video.views / 1000).toFixed(1) + ' rb' : video.views.toString()) : '-';
                if (video.views >= 1000000) viewText = (video.views / 1000000).toFixed(1) + ' jt';
                viewText = viewText + ' views';
                
                // Format author name
                const authorName = video.author?.name || 'Unknown Channel';
                
                html += `
                    <div class="yt-video-card">
                        <img src="${video.thumbnail || video.image}" class="yt-thumbnail" alt="Thumbnail" onerror="this.src='https://placehold.co/100x56/333/white?text=Error'">
                        <div class="yt-video-info">
                            <div class="yt-video-title">${escapeHtml(video.title)}</div>
                            <div class="yt-video-channel">
                                <i class="ri-user-line"></i> ${escapeHtml(authorName)}
                            </div>
                            <div class="yt-video-meta">
                                <span><i class="ri-time-line"></i> ${video.duration?.timestamp || video.timestamp || '-'}</span>
                                <span><i class="ri-eye-line"></i> ${viewText}</span>
                                <span><i class="ri-calendar-line"></i> ${video.ago || '-'}</span>
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
            ytSearchResult.innerHTML = '<div class="yt-empty"><i class="ri-youtube-line"></i> Tidak ada video ditemukan. Coba kata kunci lain.</div>';
            showToast('❌ Tidak ada hasil', true);
        }
    } catch(e) {
        console.error('Error:', e);
        ytSearchResult.innerHTML = `<div class="yt-error">❌ Error: ${e.message}</div>`;
        showToast('❌ Gagal koneksi ke server', true);
    }
}

// Fungsi untuk download video YouTube (opsional)
async function downloadYtVideo(videoId, title) {
    if (!videoId) {
        showToast('❌ Video ID tidak ditemukan', true);
        return;
    }
    
    showToast('⏳ Mendapatkan link download...', false);
    
    try {
        // Gunakan API download YouTube (contoh, bisa disesuaikan)
        const apiUrl = `https://api.siputzx.my.id/api/download/youtube?url=https://youtube.com/watch?v=${videoId}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.status === true && data.result && data.result.media) {
            // Cari format audio terbaik (biasanya format terakhir atau yang mp4)
            const media = data.result.media;
            let downloadUrl = null;
            
            if (media.mp4 && media.mp4[0]) {
                downloadUrl = media.mp4[0].url;
            } else if (media['3gp'] && media['3gp'][0]) {
                downloadUrl = media['3gp'][0].url;
            } else if (media.video && media.video[0]) {
                downloadUrl = media.video[0].url;
            }
            
            if (downloadUrl) {
                const cleanTitle = title.replace(/[^a-z0-9]/gi, '_').substring(0, 40);
                const fileName = `YussXy-YouTube-${cleanTitle}.mp4`;
                
                const a = document.createElement('a');
                a.href = downloadUrl;
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                showToast('⏬ Download video dimulai...');
            } else {
                showToast('❌ Tidak ada link download tersedia', true);
            }
        } else {
            showToast('❌ Gagal mendapatkan link download', true);
        }
    } catch(e) {
        console.error('Download error:', e);
        showToast('❌ Gagal download video', true);
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
        // API BARU: kyzznekoo.zone.id
        const apiUrl = `https://kyzznekoo.zone.id/api/search/spotify?q=${encodedQuery}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.status && data.result && data.result.length > 0) {
            const tracks = data.result;
            
            let html = `<div style="margin-bottom: 12px; font-size: 12px; color: var(--text-secondary);">🎵 Ditemukan ${tracks.length} lagu</div>`;
            
            tracks.forEach((track, index) => {
                // Format tanggal rilis (dari API baru, release_date mungkin tidak ada)
                let releaseDate = '';
                if (track.album && track.album.release_date) {
                    const date = new Date(track.album.release_date);
                    if (!isNaN(date.getTime())) {
                        releaseDate = date.toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' });
                    }
                }
                
                // Ambil thumbnail dari album.images (API baru)
                let thumbnail = '';
                if (track.album && track.album.images && track.album.images.length) {
                    const img = track.album.images.find(i => i.width === 300) || track.album.images[0];
                    thumbnail = img.url;
                } else {
                    thumbnail = track.thumbnail || '';
                }
                
                // Ambil artist name dari array artists (API baru)
                let artistName = '';
                if (track.artists && track.artists.length) {
                    artistName = track.artists.map(a => a.name).join(', ');
                } else {
                    artistName = track.artist || 'Unknown';
                }
                
                // Ambil album name (API baru)
                let albumName = track.album?.name || track.album_name || '-';
                
                // Format durasi dari ms (API baru)
                let duration = track.duration_ms ? formatDuration(track.duration_ms) : (track.duration || '-');
                
                // Popularitas (API baru mungkin tidak ada)
                let popularity = track.popularity || 0;
                
                html += `
                    <div class="spotify-track-card" data-track-url="${escapeHtml(track.url || track.uri)}">
                        <img src="${thumbnail}" class="spotify-thumbnail" alt="Thumbnail" onerror="this.src='https://placehold.co/60x60/333/white?text=🎵'">
                        <div class="spotify-track-info">
                            <div class="spotify-track-title">${escapeHtml(track.name || track.title)}</div>
                            <div class="spotify-track-artist">${escapeHtml(artistName)}</div>
                            <div class="spotify-track-meta">
                                <span><i class="ri-time-line"></i> ${duration}</span>
                                <span><i class="ri-album-line"></i> ${escapeHtml(albumName)}</span>
                                ${releaseDate ? `<span><i class="ri-calendar-line"></i> ${releaseDate}</span>` : ''}
                                <span class="spotify-popularity"><i class="ri-heart-line"></i> ${popularity}%</span>
                            </div>
                            <div class="spotify-track-buttons">
                                <button class="spotify-btn spotify-btn-copy" onclick="copySpotifyLink('${escapeHtml(track.url || track.uri)}')">
                                    <i class="ri-file-copy-line"></i> Salin Link
                                </button>
                                <button class="spotify-btn spotify-btn-open" onclick="window.open('${escapeHtml(track.url || track.uri)}', '_blank')">
                                    <i class="ri-external-link-line"></i> Buka di Spotify
                                </button>
                                <button class="spotify-btn spotify-btn-other" onclick="searchOtherVersions('${escapeHtml(track.name || track.title)}', '${escapeHtml(artistName)}')">
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

// Helper function untuk format durasi dari milliseconds
function formatDuration(ms) {
    if (!ms) return '-';
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
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
            // API BARU: kyzznekoo.zone.id
            const apiUrl = `https://kyzznekoo.zone.id/api/canvas/fakedana?nominal=${encodeURIComponent(nominal)}`;
            const response = await fetch(apiUrl);
            
            // Cek apakah response ok
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);

            // Format nominal untuk tampilan
            let nominalNumber = parseInt(nominal.replace(/[^0-9]/g, ''));
            let formattedNominal = isNaN(nominalNumber) ? nominal : `Rp ${nominalNumber.toLocaleString('id-ID')}`;

            danaResult.innerHTML = `
                <div class="dana-result">
                    <div class="dana-info">
                        <i class="ri-bank-card-line" style="font-size: 40px; color: #0085FF;"></i>
                        <div class="dana-details">
                            <p><strong>${escapeHtml(formattedNominal)}</strong></p>
                            <p><i class="ri-wallet-line"></i> Fake Saldo DANA</p>
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
                link.download = `fakedana_${nominal.replace(/[^0-9]/g, '')}.png`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                showToast('⏬ Download dimulai...');
            });

            showToast('✅ Berhasil generate!');
        } catch(e) {
            console.error('Dana generator error:', e);
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
        // Default avatar baru sesuai permintaan
        let defaultAvatar = 'https://files.catbox.moe/htswya.jpg';
        let finalAvatar = avatarUrl || defaultAvatar;

        mlResult.style.display = 'block';
        mlResult.innerHTML = '<div class="result-loading"><i class="ri-loader-4-line" style="animation: spin 1s linear infinite;"></i> Generating lobby...</div>';

        try {
            const encodedAvatar = encodeURIComponent(finalAvatar);
            const encodedNickname = encodeURIComponent(nickname);
            // API BARU: kyzznekoo.zone.id
            const apiUrl = `https://kyzznekoo.zone.id/api/canvas/fakeml?pp=${encodedAvatar}&nama=${encodedNickname}`;
            const response = await fetch(apiUrl);
            
            // Cek apakah response ok
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
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
                            <p><strong>Nickname: ${escapeHtml(nickname)}</strong></p>
                            <p><i class="ri-gamepad-line"></i> Fake Lobby Mobile Legend</p>
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
                link.download = `FakeLobbyML_${nickname.replace(/[^a-z0-9]/gi, '_')}.png`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                showToast('⏬ Download dimulai...');
            });

            showToast('✅ Lobby berhasil dibuat!');
        } catch(e) {
            console.error('ML Generator error:', e);
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
            showToast('❌ Masukkan Nickname!', true);
            return;
        }

        ffResult.style.display = 'block';
        ffResult.innerHTML = '<div class="result-loading"><i class="ri-loader-4-line" style="animation: spin 1s linear infinite;"></i> Generating lobby...</div>';

        try {
            const encodedNickname = encodeURIComponent(nickname);
            // API BARU: kyzznekoo.zone.id
            const apiUrl = `https://kyzznekoo.zone.id/api/canvas/fakeff?nama=${encodedNickname}`;
            
            // Fetch gambar langsung sebagai blob
            const response = await fetch(apiUrl);
            
            // Cek apakah response ok
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            const blob = await response.blob();
            
            // Konversi blob ke URL gambar
            const imageUrl = URL.createObjectURL(blob);
            
            let html = `
                <div class="ff-result">
                    <div class="ff-info">
                        <img src="${imageUrl}" class="ff-image" alt="Fake Lobby FF">
                        <div class="ff-details">
                            <p><strong>Nickname: ${escapeHtml(nickname)}</strong></p>
                            <p><i class="ri-gamepad-line"></i> Fake Lobby Free Fire</p>
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
                link.download = `FakeLobby_${nickname.replace(/[^a-z0-9]/gi, '_')}.png`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                showToast('⏬ Download gambar dimulai...');
            });

            showToast('✅ Berhasil Membuat Image');
        } catch(e) {
            console.error('FF Generator error:', e);
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
            // API BARU: api.siputzx.my.id
            const apiUrl = `https://api.siputzx.my.id/api/d/capcut?url=${encodedUrl}`;
            const response = await fetch(apiUrl);
            const data = await response.json();

            // Response baru: { status: true, data: { code, title, originalVideoUrl, coverUrl, authorName } }
            if (data.status === true && data.data && data.data.originalVideoUrl) {
                const res = data.data;
                const videoUrl = res.originalVideoUrl;
                const thumbnail = res.coverUrl;
                const title = res.title || 'CapCut_Video';
                const author = res.authorName || 'Unknown';

                // Bersihkan judul untuk nama file
                const cleanTitle = title.replace(/[^a-z0-9]/gi, '_').substring(0, 40);
                const fileName = `YussXy-CapCut-${cleanTitle}.mp4`;

                let html = `
                    <div class="capcut-result">
                        <div class="capcut-info">
                            ${thumbnail ? `<img src="${thumbnail}" class="capcut-thumb" onerror="this.style.display='none'">` : '<i class="ri-video-line" style="font-size: 40px; color: var(--accent);"></i>'}
                            <div class="capcut-details">
                                <p><strong>${escapeHtml(title.substring(0, 60))}</strong></p>
                                <p><i class="ri-user-line"></i> ${escapeHtml(author)}</p>
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
            console.error('CapCut download error:', e);
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
            // API BARU: api-faa.my.id
            const apiUrl = `https://api-faa.my.id/faa/fbdownload?url=${encodedUrl}`;
            const response = await fetch(apiUrl);
            const data = await response.json();

            // Response baru: { status: true, creator: "Faa", result: { media: { video_sd, video_hd } } }
            if (data.status === true && data.result && data.result.media) {
                const media = data.result.media;
                
                // Pilih kualitas video (prioritas HD, lalu SD)
                let videoUrl = media.video_hd || media.video_sd;
                let quality = media.video_hd ? 'HD' : 'SD';
                const title = `Facebook_Video_${Date.now()}`;
                
                // Bersihkan judul untuk nama file
                const cleanTitle = title.replace(/[^a-z0-9]/gi, '_').substring(0, 40);
                const fileName = `YussXy-FB-${cleanTitle}.mp4`;

                let html = `
                    <div class="facebook-result">
                        <div class="facebook-info">
                            <i class="ri-facebook-line" style="font-size: 40px; color: #1877F2;"></i>
                            <div class="facebook-details">
                                <p><strong>Video Facebook</strong></p>
                                <p><i class="ri-video-line"></i> Kualitas: ${quality}</p>
                            </div>
                        </div>
                        <div class="result-buttons">
                            <button class="direct-download-btn" id="fbDirectDownloadBtn">
                                <i class="ri-download-line"></i> Download Video (${quality})
                            </button>
                        </div>
                    </div>
                `;
                
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

                showToast('✅ Video siap di download!');
            } else {
                facebookResult.innerHTML = `<div class="result-error">❌ Gagal: URL tidak valid atau video tidak ditemukan</div>`;
                showToast('❌ Gagal download, cek URL Facebook', true);
            }
        } catch(e) {
            console.error('Facebook download error:', e);
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
            // API BARU: kyzznekoo.zone.id
            const apiUrl = `https://kyzznekoo.zone.id/api/downloader/spotify?url=${encodedUrl}`;
            const response = await fetch(apiUrl);
            const data = await response.json();

            // Response baru: { status: true, result: { download: { url }, title, artist, image } }
            if (data.status && data.result && data.result.download && data.result.download.url) {
                const result = data.result;
                const audioUrl = result.download.url;
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
                                <p><strong>${escapeHtml(title)}</strong></p>
                                <p><i class="ri-mic-line"></i> ${escapeHtml(artist)}</p>
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
            console.error('Download error:', e);
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
            // API BARU: api-faa.my.id
            const apiUrl = `https://api-faa.my.id/faa/igdl?url=${encodedUrl}`;
            const response = await fetch(apiUrl);
            const data = await response.json();

            // Response baru: { status: true, creator: "Faa", result: { url: [...], metadata } }
            if (data.status === true && data.result && data.result.url && data.result.url.length > 0) {
                // Ambil URL media pertama (bisa video atau foto)
                const mediaUrl = data.result.url[0];
                const metadata = data.result.metadata;
                const isVideo = metadata?.isVideo === true;
                const username = metadata?.username || 'Unknown';
                const caption = metadata?.caption || 'Instagram Media';
                
                let html = '';
                
                if (isVideo) {
                    const fileName = `YussXy-IG-Video-${username}-${Date.now()}.mp4`;
                    
                    html = `
                        <div class="instagram-result">
                            <div class="instagram-info">
                                <i class="ri-instagram-line" style="font-size: 40px; color: #E4405F;"></i>
                                <div class="instagram-details">
                                    <p><strong>Instagram Video</strong></p>
                                    <p><i class="ri-user-line"></i> @${escapeHtml(username)}</p>
                                    <p><i class="ri-heart-line"></i> ${metadata?.like?.toLocaleString() || 0} likes</p>
                                    ${caption ? `<p><i class="ri-chat-1-line"></i> ${escapeHtml(caption.substring(0, 50))}${caption.length > 50 ? '...' : ''}</p>` : ''}
                                </div>
                            </div>
                            <button class="direct-download-btn" id="igDirectDownloadBtn">
                                <i class="ri-download-line"></i> Download Video (MP4)
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
                        showToast(`⏬ Download video dimulai...`);
                    });
                    
                } else {
                    // Untuk foto (image)
                    const fileName = `YussXy-IG-Photo-${username}-${Date.now()}.jpg`;
                    
                    html = `
                        <div class="instagram-result">
                            <div class="instagram-info">
                                <img src="${mediaUrl}" class="instagram-photo" onerror="this.src='https://placehold.co/300x300/333/white?text=Error'">
                                <div class="instagram-details">
                                    <p><strong>Instagram Foto</strong></p>
                                    <p><i class="ri-user-line"></i> @${escapeHtml(username)}</p>
                                    <p><i class="ri-heart-line"></i> ${metadata?.like?.toLocaleString() || 0} likes</p>
                                    ${caption ? `<p><i class="ri-chat-1-line"></i> ${escapeHtml(caption.substring(0, 50))}${caption.length > 50 ? '...' : ''}</p>` : ''}
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
            console.error('Instagram download error:', e);
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
            // API BARU: Ambil info video pake API MP3 (dapat title & thumbnail)
            const apiUrl = `https://api-faa.my.id/faa/ytmp3?url=${encodedUrl}`;
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.status === true && data.result) {
                currentYoutubeData = {
                    title: data.result.title,
                    thumbnail: data.result.thumbnail,
                    duration: data.result.duration,
                    url: url
                };

                let durationText = data.result.duration || 'Unknown';

                let html = `
                    <div class="youtube-thumb">
                        <img src="${data.result.thumbnail}" alt="Thumbnail" onerror="this.src='https://placehold.co/100x56/333/white?text=YouTube'">
                        <div class="youtube-info-small">
                            <p><strong>${escapeHtml(data.result.title.substring(0, 50))}</strong></p>
                            <p><i class="ri-time-line"></i> Durasi: ${durationText}</p>
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
            console.error('Youtube process error:', e);
            youtubeResult.innerHTML = `<div class="result-error">❌ Error: ${e.message}</div>`;
            showToast('❌ Gagal koneksi ke server', true);
        }
    });
}

// Fungsi download MP4 dengan resolusi tertentu (menggunakan API ytmp4)
async function downloadYoutubeMP4(resolusi) {
    if (!currentYoutubeData) return;
    
    showToast(`⏬ Mengambil video ${resolusi}p...`);
    
    try {
        const encodedUrl = encodeURIComponent(currentYoutubeData.url);
        // API BARU: ytmp4 dengan parameter url
        const apiUrl = `https://api-faa.my.id/faa/ytmp4?url=${encodedUrl}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        // Response: { status: true, result: { download_url, format } }
        if (data.status === true && data.result && data.result.download_url) {
            const fileName = `YussXy-YT-${currentYoutubeData.title.replace(/[^a-z0-9]/gi, '_').substring(0, 40)}.mp4`;
            const link = document.createElement('a');
            link.href = data.result.download_url;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showToast(`⏬ Download video dimulai...`);
        } else {
            showToast('❌ Gagal mengambil video', true);
        }
    } catch(e) {
        console.error('MP4 download error:', e);
        showToast('❌ Error: ' + e.message, true);
    }
}

// Fungsi download MP3 (menggunakan API ytmp3)
async function downloadYoutubeMP3() {
    if (!currentYoutubeData) return;
    
    showToast('⏬ Mengambil audio MP3...');
    
    try {
        const encodedUrl = encodeURIComponent(currentYoutubeData.url);
        // API BARU: ytmp3
        const apiUrl = `https://api-faa.my.id/faa/ytmp3?url=${encodedUrl}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        // Response: { status: true, result: { mp3, title, thumbnail } }
        if (data.status === true && data.result && data.result.mp3) {
            const fileName = `YussXy-YT-${currentYoutubeData.title.replace(/[^a-z0-9]/gi, '_').substring(0, 40)}.mp3`;
            const link = document.createElement('a');
            link.href = data.result.mp3;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showToast('⏬ Download MP3 dimulai...');
        } else {
            showToast('❌ Gagal mengambil audio', true);
        }
    } catch(e) {
        console.error('MP3 download error:', e);
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
    
    if (typeof testimonials === 'undefined') {
        console.log("testimonials tidak ditemukan");
        return;
    }
    
    grid.innerHTML = testimonials.map(t => `
        <div class="testimoni-card">
            <div class="testimoni-image">
                <div class="testimoni-skeleton"></div>
                <img src="${t.image}" alt="Produk" class="testimoni-img skeleton-loading" 
                     onload="this.classList.remove('skeleton-loading'); this.previousElementSibling.remove();" 
                     onerror="this.src='https://placehold.co/140x140/333/white?text=Error'; this.classList.remove('skeleton-loading'); this.previousElementSibling.remove();">
            </div>
            <div class="testimoni-badge">
                <i class="ri-verified-badge-line"></i> TRANSAKSI BERHASIL
            </div>
            <div class="testimoni-product">
                <p><i class="ri-shopping-bag-line"></i> <strong>${t.product}</strong></p>
                <p><i class="ri-money-dollar-circle-line"></i> ${t.price}</p>
                <p><i class="ri-calendar-line"></i> ${t.date} <i class="ri-time-line"></i> ${t.time}</p>
            </div>
            <div class="testimoni-divider"></div>
            <div class="testimoni-footer">
                <p><i class="ri-check-double-line"></i> Proses cepat & aman</p>
                <p><i class="ri-shield-check-line"></i> Layanan aktif setiap hari</p>
                <p class="testimoni-admin"><i class="ri-user-star-line"></i> Admin: YussXy</p>
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
https://www.mediafire.com/file/q2va9jlgf3xy0pm/DIGITAL+SHOOP+-+YUSS+XY.apk/file

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

// FUNGSI UNTUK UPDATE STATUS TOMBOL
function updateButtonsState(quantity, minQuantity = 50) {
    const orderBtn = document.getElementById('orderNowBtn');
    const addToCartBtn = document.getElementById('addToCartServiceBtn');
    
    if (!orderBtn || !addToCartBtn) return;
    
    // Tombol nonaktif jika quantity kurang dari minimal ATAU quantity tidak valid
    if (isNaN(quantity) || quantity < minQuantity || quantity <= 0) {
        orderBtn.disabled = true;
        addToCartBtn.disabled = true;
        orderBtn.style.opacity = '0.5';
        addToCartBtn.style.opacity = '0.5';
        orderBtn.style.cursor = 'not-allowed';
        addToCartBtn.style.cursor = 'not-allowed';
        orderBtn.style.pointerEvents = 'none';
        addToCartBtn.style.pointerEvents = 'none';
    } else {
        orderBtn.disabled = false;
        addToCartBtn.disabled = false;
        orderBtn.style.opacity = '1';
        addToCartBtn.style.opacity = '1';
        orderBtn.style.cursor = 'pointer';
        addToCartBtn.style.cursor = 'pointer';
        orderBtn.style.pointerEvents = 'auto';
        addToCartBtn.style.pointerEvents = 'auto';
    }
}



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
    const minQty = service.minQuantity || 50;
    
    document.getElementById('selectedServiceName').innerHTML = `${service.name} <span style="font-size: 9px; padding: 2px 8px; border-radius: 20px; background: ${statusColor}; color: white; margin-left: 6px;">${statusText}</span>`;
    document.getElementById('selectedServicePrice').innerHTML = `Rp ${service.price.toLocaleString('id-ID')} / ${service.unit}`;
    document.getElementById('selectedServiceDesc').innerHTML = service.description;
    
    // ========== UPDATE TEKS MINIMAL ==========
    const minQtyValue = document.getElementById('minQtyValue');
    if (minQtyValue) {
        minQtyValue.textContent = minQty.toLocaleString('id-ID');
    }
    
    const quantityInput = document.getElementById('serviceQuantity');
    quantityInput.value = minQty;
    quantityInput.min = minQty;
    quantityInput.disabled = !isAvailable;
    
    if (isAvailable) {
        updateButtonsState(minQty, minQty);
    } else {
        document.getElementById('orderNowBtn').disabled = true;
        document.getElementById('addToCartServiceBtn').disabled = true;
    }
    
    updatePriceBreakdownFlexible(service);
    
    serviceDetail.style.display = 'block';
};



    const quantityInput = document.getElementById('serviceQuantity');
    
    
    
quantityInput.oninput = function() {
    if (!selectedService) return;
    
    let value = parseInt(this.value);
    const minQty = selectedService.minQuantity || 50;
    
    // Hanya update tombol (aktif/nonaktif) tanpa memaksa mengubah nilai
    if (!isNaN(value) && value >= minQty) {
        updateButtonsState(value, minQty);
    } else {
        updateButtonsState(0, minQty); // tombol nonaktif
    }
    
    // Update harga tetap jalan meskipun kurang dari minimal
    if (!isNaN(value) && value > 0) {
        updatePriceBreakdownFlexible(selectedService);
    } else {
        const priceText = `Rp ${selectedService.price.toLocaleString('id-ID')} / ${selectedService.unit}`;
        document.getElementById('pricePerThousand').innerHTML = priceText;
        document.getElementById('totalPrice').innerHTML = 'Rp 0';
    }
};
    
    
    
    quantityInput.onblur = function() {
    if (!selectedService) return;
    
    let value = parseInt(this.value);
    const minQty = selectedService.minQuantity || 50;
    
    // JANGAN PAKSA jadi minQty di sini, biarkan user bebas
    
    if (!isNaN(value) && value >= minQty) {
        updateButtonsState(value, minQty);
    } else {
        updateButtonsState(0, minQty);
    }
    
    updatePriceBreakdownFlexible(selectedService);
};


    
    const qtyDecrBtn = document.getElementById('qtyDecrBtn');
    if (qtyDecrBtn) {
        qtyDecrBtn.onclick = function() {
            const qtyInput = document.getElementById('serviceQuantity');
            if (!qtyInput || !selectedService) return;
            
            const minQty = selectedService.minQuantity || 50;
            let currentVal = parseInt(qtyInput.value) || 1000;
            let newVal = currentVal - 50;
            
            if (newVal >= minQty) {
                qtyInput.value = newVal;
                updateButtonsState(newVal, minQty);
                updatePriceBreakdownFlexible(selectedService);
            } else if (currentVal > minQty) {
                qtyInput.value = minQty;
                updateButtonsState(minQty, minQty);
                updatePriceBreakdownFlexible(selectedService);
            } else {
                showToast(`Minimal pesan ${minQty}!`, true);
            }
        };
    }
    
    const qtyIncrBtn = document.getElementById('qtyIncrBtn');
    if (qtyIncrBtn) {
        qtyIncrBtn.onclick = function() {
            const qtyInput = document.getElementById('serviceQuantity');
            if (!qtyInput || !selectedService) return;
            
            const minQty = selectedService.minQuantity || 50;
            let currentVal = parseInt(qtyInput.value) || 1000;
            let newVal = currentVal + 50;
            
            qtyInput.value = newVal;
            updateButtonsState(newVal, minQty);
            updatePriceBreakdownFlexible(selectedService);
        };
    }
    
    
    
    
    const addToCartBtn = document.getElementById('addToCartServiceBtn');
    addToCartBtn.onclick = function(e) {
        if (this.disabled === true) {
            e.preventDefault();
            e.stopPropagation();
            const minQty = selectedService ? (selectedService.minQuantity || 50) : 50;
            showToast(`Minimal pesan ${minQty}!`, true);
            return false;
        }
        
        const targetInput = document.getElementById('serviceTarget');
        const target = targetInput ? targetInput.value.trim() : '';
        
        if (!target) {
            showToast('Masukkan target (link/username/ID) terlebih dahulu!', true);
            return false;
        }
        
        const availableService = socialMediaServices.find(s => s.status === 'available');
        
        if (!availableService) {
            showToast('Maaf, layanan sedang tidak tersedia', true);
            return false;
        }
        
        const minQty = availableService.minQuantity || 50;
        let quantity = parseInt(quantityInput.value) || 0;
        
        if (quantity < minQty) {
            showToast(`Minimal pesan ${minQty}!`, true);
            quantityInput.value = minQty;
            quantity = minQty;
            updateButtonsState(minQty, minQty);
            updatePriceBreakdownFlexible(availableService);
            return false;
        }
        
        const unitMatch = availableService.unit.match(/([\d\.]+)/);
        const unitValue = unitMatch ? parseFloat(unitMatch[0].replace(/\./g, '')) : 1;
        
        const totalPrice = (quantity / unitValue) * availableService.price;
        const orderName = `${availableService.name} (${target.substring(0, 30)})`;
        
        cart.push({
            id: Date.now(),
            name: orderName,
            price: totalPrice,
            image: "image/produk/produk23.jpg",
            quantity: 1,
            sosmedTarget: target,
            sosmedQuantity: quantity
        });
        
        saveCart();
        renderCart();
        updateCartBadges();
        
        showToast(`${orderName} ditambahkan ke keranjang!`);
        closeSocialMediaModal();
        return false;
    };
    
    const orderNowBtn = document.getElementById('orderNowBtn');
    orderNowBtn.onclick = function(e) {
        if (this.disabled === true) {
            e.preventDefault();
            e.stopPropagation();
            const minQty = selectedService ? (selectedService.minQuantity || 50) : 50;
            showToast(`Minimal pesan ${minQty}!`, true);
            return false;
        }
        
        if (!selectedService) {
            showToast('Pilih layanan terlebih dahulu', true);
            return false;
        }
        if (selectedService.status !== 'available') {
            showToast('Layanan tidak tersedia', true);
            return false;
        }
        
        const targetInput = document.getElementById('serviceTarget');
        const target = targetInput ? targetInput.value.trim() : '';
        
        if (!target) {
            showToast('Masukkan target (link/username/ID) terlebih dahulu!', true);
            return false;
        }
        
        const minQty = selectedService.minQuantity || 50;
        let quantity = parseInt(quantityInput.value) || 0;
        
        if (quantity < minQty) {
            showToast(`Minimal pesan ${minQty}!`, true);
            quantityInput.value = minQty;
            quantity = minQty;
            updateButtonsState(minQty, minQty);
            updatePriceBreakdownFlexible(selectedService);
            return false;
        }
        
        if (quantity <= 0) {
            showToast('Masukkan jumlah pesanan', true);
            return false;
        }
        
        const unitMatch = selectedService.unit.match(/([\d\.]+)/);
        const unitValue = unitMatch ? parseFloat(unitMatch[0].replace(/\./g, '')) : 1;
        
        const totalPrice = (quantity / unitValue) * selectedService.price;
        const orderName = `${selectedService.name} - ${quantity.toLocaleString('id-ID')} ${selectedService.unit.replace(/[\d\.]+\s*/, '')}`;
        
        closeSocialMediaModal();
        
        const qrTotal = document.getElementById('qrTotal');
        if (qrTotal) qrTotal.textContent = formatPrice(totalPrice);
        
        showQrisModalWithButton();
        
        window.pendingOrder = {
            items: [{ 
                name: orderName, 
                quantity: 1,
                sosmedTarget: target,
                sosmedQuantity: quantity
            }],
            totalItems: 1,
            totalPrice: totalPrice,
            sosmedTarget: target,
            sosmedQuantity: quantity
        };
        return false;
    };
}


function closeSocialMediaModal() {
    const modal = document.getElementById('socialMediaModal');
    if (modal) modal.classList.remove('active');
    selectedService = null;
}

function updatePriceBreakdownFlexible(service) {
    let quantity = parseInt(document.getElementById('serviceQuantity').value) || 0;
    const minQty = service.minQuantity || 50;
    
    // HITUNG HARGA TETAP BERJALAN meskipun quantity kurang dari minQty
    if (!quantity || quantity <= 0) {
        document.getElementById('pricePerThousand').innerHTML = `Rp ${service.price.toLocaleString('id-ID')} / ${service.unit}`;
        document.getElementById('totalPrice').innerHTML = 'Rp 0';
        
        // Hapus warning jika ada
        removeMinQuantityWarning();
        return;
    }
    
    // Hitung total harga
    const unitMatch = service.unit.match(/([\d\.]+)/);
    const unitValue = unitMatch ? parseFloat(unitMatch[0].replace(/\./g, '')) : 1;
    const totalPrice = (quantity / unitValue) * service.price;
    
    document.getElementById('pricePerThousand').innerHTML = `Rp ${service.price.toLocaleString('id-ID')} / ${service.unit}`;
    document.getElementById('totalPrice').innerHTML = `Rp ${totalPrice.toLocaleString('id-ID')}`;
    
    // ========== TAMBAHAN: TAMPILKAN PERINGATAN MINIMAL ==========
    if (quantity < minQty) {
        showMinQuantityWarning(minQty, service.unit);
    } else {
        removeMinQuantityWarning();
    }
}

// Fungsi untuk menampilkan peringatan minimal
function showMinQuantityWarning(minQty, unit) {
    // Cek apakah warning sudah ada
    let warning = document.getElementById('minQuantityWarning');
    if (warning) return;
    
    // Buat elemen warning
    warning = document.createElement('div');
    warning.id = 'minQuantityWarning';
    warning.style.cssText = `
        font-size: 10px;
        color: #f59e0b;
        background: rgba(245, 158, 11, 0.1);
        padding: 8px 12px;
        border-radius: 20px;
        margin-top: 10px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
    `;
    
    // Bersihkan nama unit (hilangkan angka)
    let cleanUnit = unit.replace(/[\d\.]+\s*/, '');
    warning.innerHTML = `<i class="ri-information-line"></i> Minimal pesanan adalah ${minQty.toLocaleString('id-ID')} ${cleanUnit}`;
    
    // Tempatkan di bawah input quantity
    const quantityGroup = document.querySelector('.quantity-input-group');
    if (quantityGroup && !document.getElementById('minQuantityWarning')) {
        quantityGroup.appendChild(warning);
    }
}

// Fungsi untuk menghapus peringatan minimal
function removeMinQuantityWarning() {
    const warning = document.getElementById('minQuantityWarning');
    if (warning) warning.remove();
}

//🙏😁🤪😁🤪😁🤪😁🤪😁

// ================================================
// TAMBAH SUNTIK SOSMED KE KERANJANG (LANGSUNG, TANPA MODAL)
// ================================================
function addSocialMediaToCart() {
    const availableService = socialMediaServices.find(s => s.status === 'available');
    
    if (!availableService) {
        showToast('Maaf, layanan sedang tidak tersedia', true);
        return;
    }
    
    // DEFAULT 1000 (tetap)
    const quantity = 1000;
    
    const unitMatch = availableService.unit.match(/([\d\.]+)/);
    const unitValue = unitMatch ? parseFloat(unitMatch[0].replace(/\./g, '')) : 1;
    
    const totalPrice = (quantity / unitValue) * availableService.price;
    const orderName = availableService.name;
    
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


//😭😭😭😭


let selectedDurationProduct = null;

function showReactionDurationModal(product) {
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

                <!-- Pilihan Durasi -->
                <div style="margin-bottom: 20px;">
                    <label style="display: block; font-size: 13px; margin-bottom: 8px; font-weight: 600;">
                        <i class="ri-time-line"></i> Pilih Durasi:
                    </label>
                    <div style="display: flex; gap: 12px;">
                        <button class="duration-option-btn" data-duration="1" data-price="10000" style="flex: 1; padding: 12px; border-radius: 12px; background: var(--bg-secondary); border: 1px solid var(--border); color: white; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                            1 Hari<br>
                            <span style="font-size: 11px; color: #3b82f6;">Rp 10.000</span>
                        </button>
                        <button class="duration-option-btn" data-duration="2" data-price="15000" style="flex: 1; padding: 12px; border-radius: 12px; background: var(--bg-secondary); border: 1px solid var(--border); color: white; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                            2 Hari<br>
                            <span style="font-size: 11px; color: #3b82f6;">Rp 15.000</span>
                        </button>
                    </div>
                </div>

                <!-- Input Link Pesan (Opsional) -->
                <div style="margin-bottom: 16px;">
                    <label style="display: block; font-size: 13px; margin-bottom: 8px; font-weight: 600;">
                        <i class="ri-link"></i> Link Pesan Saluran (Opsional):
                    </label>
                    <input type="url" id="reactionLinkDuration" placeholder="https://whatsapp.com/channel/xxx/804" 
                           style="width: 100%; padding: 12px; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 12px; color: white; font-size: 14px;">
                </div>

                <!-- Input Emoji (Opsional) -->
                <div style="margin-bottom: 20px;">
                    <label style="display: block; font-size: 13px; margin-bottom: 8px; font-weight: 600;">
                        <i class="ri-emotion-line"></i> Emoji (Opsional, max 5):
                    </label>
                    <input type="text" id="reactionEmojiDuration" placeholder="😅😘😌😒🥺" maxlength="10"
                           style="width: 100%; padding: 12px; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 12px; color: white; font-size: 18px; letter-spacing: 4px;">
                </div>

                <!-- Tombol Tanya Stok (LANGSUNG WHATSAPP, TANPA QRIS) -->
                <button class="btn-ask-stock" id="askStockDurationBtn" style="width: 100%; background: #25D366; border: none; padding: 14px; border-radius: 30px; color: white; font-weight: 600; font-size: 14px; display: flex; align-items: center; justify-content: center; gap: 8px; cursor: pointer;">
                    <i class="ri-whatsapp-line"></i> Tanya Stok via WhatsApp
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    let selectedDuration = null;
    let selectedPrice = null;

    // Event listener untuk tombol durasi
    document.querySelectorAll('.duration-option-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Reset style semua tombol durasi
            document.querySelectorAll('.duration-option-btn').forEach(b => {
                b.style.background = 'var(--bg-secondary)';
                b.style.border = '1px solid var(--border)';
                const priceSpan = b.querySelector('span');
                if (priceSpan) priceSpan.style.color = '#3b82f6';
            });

            // Highlight tombol yang dipilih dengan warna MERAH
            this.style.background = 'var(--accent)';
            this.style.border = '1px solid var(--accent)';

            // Ubah teks harga di tombol yang dipilih menjadi BIRU
            const selectedPriceSpan = this.querySelector('span');
            if (selectedPriceSpan) selectedPriceSpan.style.color = '#3b82f6';

            selectedDuration = parseInt(this.dataset.duration);
            selectedPrice = parseInt(this.dataset.price);
        });
    });

    // Tombol Tanya Stok - LANGSUNG KE WHATSAPP, TANPA QRIS
    document.getElementById('askStockDurationBtn').addEventListener('click', function() {
        const link = document.getElementById('reactionLinkDuration').value.trim();
        const emoji = document.getElementById('reactionEmojiDuration').value.trim();

        let message = "Halo Yuss Xy 👋%0A%0A";
        message += "Saya tertarik dengan produk Paket Hemat Reaction WhatsApp dan ingin melakukan pemesanan.%0A%0A";
        message += "Detail pesanan:%0A%0A";

        if (selectedDuration) {
            message += `- Durasi: ${selectedDuration} Hari%0A`;
            message += `- Harga: Rp ${selectedPrice.toLocaleString('id-ID')}%0A`;
        }

        if (link) {
            message += `- Link Pesan: ${link}%0A`;
        }

        if (emoji) {
            message += `- Emoji: ${emoji}%0A`;
        }

        message += "%0A";
        message += "Apakah paket ini masih tersedia? Jika masih ready, saya ingin lanjut order.%0A%0A";
        message += "Mohon info dan arahannya. Terima kasih 🙏";

        window.open(`https://wa.me/6283183469343?text=${message}`, '_blank');

        showToast("Pertanyaan stok terkirim ke owner");

        modal.remove();
    });
}




//🙏😁🤪😁🤪😁🤪😁🤪😁
//🙏😁🤪😁🤪😁🤪😁🤪😁

// ================================================
// SKELETON LOADING UNTUK PRODUK
// ================================================

// Fungsi untuk menampilkan skeleton loading
function showSkeletonLoading() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    const skeletonCount = 6; // Jumlah skeleton yang ditampilkan
    
    let skeletonHtml = '';
    for (let i = 0; i < skeletonCount; i++) {
        skeletonHtml += `
            <div class="product-card skeleton-card">
                <div class="product-image-wrapper">
                    <div class="skeleton-image"></div>
                </div>
                <div class="product-info">
                    <div class="skeleton-text long"></div>
                    <div class="skeleton-text short" style="margin-top: 8px;"></div>
                    <div class="product-buttons" style="margin-top: 12px;">
                        <div class="skeleton-button" style="flex: 1;"></div>
                        <div class="skeleton-button" style="flex: 1; margin-left: 8px;"></div>
                    </div>
                </div>
            </div>
        `;
    }
    
    productsGrid.innerHTML = skeletonHtml;
}

// Fungsi untuk memuat gambar dengan loading individual
function loadImageWithSkeleton(imgElement, src) {
    if (!imgElement) return;
    
    // Tambah class loading
    imgElement.classList.add('skeleton-loading');
    imgElement.style.opacity = '0';
    
    // Buat image object untuk preload
    const tempImg = new Image();
    tempImg.onload = function() {
        imgElement.src = src;
        imgElement.classList.remove('skeleton-loading');
        imgElement.style.opacity = '1';
    };
    tempImg.onerror = function() {
        imgElement.src = 'https://placehold.co/300x300/333/white?text=Error';
        imgElement.classList.remove('skeleton-loading');
        imgElement.style.opacity = '1';
    };
    tempImg.src = src;
}

// MODIFIKASI fungsi renderProducts (tambahkan skeleton loading)
// Simpan products asli ke variable global
let originalProducts = [...products];

// Fungsi render dengan efek loading
async function renderProductsWithSkeleton() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    // Tampilkan skeleton dulu
    showSkeletonLoading();
    
    // Simulasi delay loading (opsional, biar keliatan efeknya)
    setTimeout(() => {
        renderProducts();
    }, 300);
}

// MODIFIKASI renderProducts yang sudah ada
// Cari fungsi renderProducts() dan tambahkan loading individual untuk gambar

// Atau buat fungsi baru untuk render dengan loading per gambar
function renderProductsWithImageLoading() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = products.map(product => {
        let badgeHtml = '';
        let disabledClass = '';
        let disabledBuy = '';
        let disabledCart = '';
        let diskonClass = '';

        // Tentukan badge dan status (sama seperti renderProducts)
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
        
        let priceHtml = `<div class="product-price">${getDisplayPrice(product)}</div>`;
        
        // CEK APLIKASI PREMIUM (BUNDLE) - TOMBOL "LIHAT"
        if (product.isAppBundle || product.id === 20) {
            return `
                <div class="product-card ${disabledClass}" data-product-id="${product.id}">
                    <div class="product-image-wrapper">
                        ${badgeHtml}
                        <img src="${product.image}" alt="${product.name}" class="product-image" 
                             data-src="${product.image}"
                             onerror="this.src='https://placehold.co/300x300/333/white?text=Error'"
                             loading="lazy">
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
        
        // CEK SUNTIK SOSMED - TOMBOL "PESAN"
        if (product.isSocialMediaService || product.id === 21) {
            return `
                <div class="product-card ${disabledClass}" data-product-id="${product.id}">
                    <div class="product-image-wrapper">
                        ${badgeHtml}
                        <img src="${product.image}" alt="${product.name}" class="product-image" 
                             data-src="${product.image}"
                             onerror="this.src='https://placehold.co/300x300/333/white?text=Error'"
                             loading="lazy">
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
        
        // PRODUK BIASA - TOMBOL "BELI"
        return `
            <div class="product-card ${disabledClass}" data-product-id="${product.id}">
                <div class="product-image-wrapper">
                    ${badgeHtml}
                    <img src="${product.image}" alt="${product.name}" class="product-image" 
                         data-src="${product.image}"
                         onerror="this.src='https://placehold.co/300x300/333/white?text=Error'"
                         loading="lazy">
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
    
    // ... sisa kode imageObserver dll tetap sama

    
    //🙏😁🤪😁🤪😁🤪😁🤪😁
  
    // Tambahkan efek lazy loading dengan Intersection Observer
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.dataset.src;
                if (src && img.src !== src) {
                    // Tambah effect loading
                    img.classList.add('skeleton-loading');
                    img.style.opacity = '0';
                    
                    const tempImg = new Image();
                    tempImg.onload = () => {
                        img.src = src;
                        img.classList.remove('skeleton-loading');
                        img.style.opacity = '1';
                    };
                    tempImg.src = src;
                }
                observer.unobserve(img);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.product-image').forEach(img => {
        imageObserver.observe(img);
    });
    
    // Event klik untuk detail produk
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

// GANTI renderProducts yang lama dengan yang baru
// Atau panggil renderProductsWithImageLoading() di DOMContentLoaded
//🙏😁🤪😁🤪😁🤪😁🤪😁
//🙏😁🤪😁🤪😁🤪😁🤪😁
//🙏😁🤪😁🤪😁🤪😁🤪😁






// ================================================
// MODAL NOKOS (PILIH APLIKASI & NEGARA)
// ================================================
let selectedNokosApp = null;
let selectedNokosCountry = null;
let selectedNokosPrice = null;

function showNokosModal(product) {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 400px;">
            <div class="modal-header">
                <h3><i class="ri-phone-line"></i> ${product.name}</h3>
                <button class="modal-close" onclick="this.closest('.modal').remove()">
                    <i class="ri-close-line"></i>
                </button>
            </div>
            <div class="modal-body" style="text-align: left;">
                <p style="margin-bottom: 16px; font-size: 13px; color: var(--text-secondary);">${product.description}</p>
                
                <!-- Pilih Aplikasi -->
                <div style="margin-bottom: 20px;">
                    <label style="display: block; font-size: 13px; margin-bottom: 8px; font-weight: 600;">
                        <i class="ri-apps-line"></i> Pilih Aplikasi:
                    </label>
                    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                        <button class="nokos-app-btn" data-app="whatsapp" style="flex: 1; padding: 10px; border-radius: 12px; background: var(--bg-secondary); border: 1px solid var(--border); color: white; cursor: pointer;">
                            <i class="ri-whatsapp-line"></i> WhatsApp
                        </button>
                        <button class="nokos-app-btn" data-app="telegram" style="flex: 1; padding: 10px; border-radius: 12px; background: var(--bg-secondary); border: 1px solid var(--border); color: white; cursor: pointer;">
                            <i class="ri-telegram-line"></i> Telegram
                        </button>
                        <button class="nokos-app-btn" data-app="dana" style="flex: 1; padding: 10px; border-radius: 12px; background: var(--bg-secondary); border: 1px solid var(--border); color: white; cursor: pointer;">
                            <i class="ri-bank-card-line"></i> Dana
                        </button>
                    </div>
                </div>
                
                <!-- Pilih Negara (akan diisi JS) -->
                <div id="nokosCountryContainer" style="display: none; margin-bottom: 20px;">
                    <label style="display: block; font-size: 13px; margin-bottom: 8px; font-weight: 600;">
                        <i class="ri-map-pin-line"></i> Pilih Negara:
                    </label>
                    <div id="nokosCountryList" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; max-height: 250px; overflow-y: auto; padding: 4px;">
                        <!-- Negara akan diisi JS -->
                    </div>
                </div>
                
                <!-- Info Harga -->
                <div id="nokosPriceInfo" style="display: none; background: var(--bg-secondary); border-radius: 12px; padding: 12px; margin-bottom: 20px; text-align: center;">
                    <span style="font-size: 12px; color: var(--text-secondary);">Harga yang akan dibayar:</span>
                    <div style="font-size: 24px; font-weight: 700; color: var(--accent);" id="nokosSelectedPrice">Rp 0</div>
                </div>
                
                <!-- Tombol Tanya Stok -->
                <button class="btn-ask-stock" id="nokosAskStockBtn" disabled style="width: 100%; background: #25D366; border: none; padding: 14px; border-radius: 30px; color: white; font-weight: 600; font-size: 14px; display: flex; align-items: center; justify-content: center; gap: 8px; opacity: 0.5; cursor: not-allowed;">
                    <i class="ri-whatsapp-line"></i> Tanya Stok via WhatsApp
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    let selectedApp = null;
    let selectedCountry = null;
    let selectedPrice = null;
    
    // Event listener untuk tombol aplikasi
    document.querySelectorAll('.nokos-app-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.nokos-app-btn').forEach(b => {
                b.style.background = 'var(--bg-secondary)';
                b.style.border = '1px solid var(--border)';
            });
            
            this.style.background = 'var(--accent)';
            this.style.border = '1px solid var(--accent)';
            
            selectedApp = this.dataset.app;
            
            // Tampilkan container negara
            const countryContainer = document.getElementById('nokosCountryContainer');
            const countryList = document.getElementById('nokosCountryList');
            
            // Reset pilihan negara
            selectedCountry = null;
            selectedPrice = null;
            document.getElementById('nokosSelectedPrice').innerHTML = 'Rp 0';
            document.getElementById('nokosAskStockBtn').disabled = true;
            document.getElementById('nokosAskStockBtn').style.opacity = '0.5';
            document.getElementById('nokosAskStockBtn').style.cursor = 'not-allowed';
            
            // Isi daftar negara sesuai aplikasi
            const countries = nokosCountries[selectedApp];
            if (countries) {
                countryContainer.style.display = 'block';
                countryList.innerHTML = '';
                
                Object.keys(countries).forEach(key => {
                    const country = countries[key];
                    countryList.innerHTML += `
                        <button class="nokos-country-btn" data-country-key="${key}" data-country-name="${country.name}" data-country-code="${country.code}" data-price="${country.price}" style="padding: 10px; border-radius: 10px; background: var(--bg-secondary); border: 1px solid var(--border); color: white; cursor: pointer; text-align: left;">
                            <div style="font-weight: 600;">${country.name}</div>
                            <div style="font-size: 11px; color: var(--text-secondary);">${country.code}</div>
                            <div style="font-size: 12px; color: var(--accent);">Rp ${country.price.toLocaleString('id-ID')}</div>
                        </button>
                    `;
                });
                
                // Event listener untuk tombol negara
                document.querySelectorAll('.nokos-country-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        document.querySelectorAll('.nokos-country-btn').forEach(b => {
                            b.style.background = 'var(--bg-secondary)';
                            b.style.border = '1px solid var(--border)';
                        });
                        
                        this.style.background = 'rgba(239, 68, 68, 0.2)';
                        this.style.border = '1px solid var(--accent)';
                        
                        selectedCountry = this.dataset.countryName;
                        selectedPrice = parseInt(this.dataset.price);
                        
                        document.getElementById('nokosSelectedPrice').innerHTML = `Rp ${selectedPrice.toLocaleString('id-ID')}`;
                        document.getElementById('nokosAskStockBtn').disabled = false;
                        document.getElementById('nokosAskStockBtn').style.opacity = '1';
                        document.getElementById('nokosAskStockBtn').style.cursor = 'pointer';
                    });
                });
            } else {
                countryContainer.style.display = 'none';
            }
        });
    });
    
    // Tombol Tanya Stok
    document.getElementById('nokosAskStockBtn').addEventListener('click', function() {
        if (this.disabled) return;
        
        let message = "Halo Yuss Xy 👋%0A%0A";
        message += "Saya tertarik dengan produk Nokos WhatsApp Indo.%0A%0A";
        message += "================================%0A";
        message += "DETAIL PEMESANAN%0A";
        message += "================================%0A%0A";
        message += `Aplikasi: ${selectedApp === 'whatsapp' ? 'WhatsApp' : (selectedApp === 'telegram' ? 'Telegram' : 'Dana')}%0A`;
        message += `Negara: ${selectedCountry}%0A`;
        message += `Harga: Rp ${selectedPrice.toLocaleString('id-ID')}%0A%0A`;
        message += "================================%0A%0A";
        message += "Apakah stok untuk nomor ini masih tersedia?%0A";
        message += "Saya ingin melakukan pemesanan.%0A%0A";
        message += "Mohon infonya ya 🙏";
        
        window.open(`https://wa.me/6283183469343?text=${message}`, '_blank');
        
        showToast("Pertanyaan stok terkirim ke owner");
        
        modal.remove();
    });
}





//🟡🟡🟡🟡🟡🟡🟡

//🟡🟡🟡🟡🟡🟡🟡


// ================================================
// SPOTIFY PLAYER (FIXED - MULTIPLE LIBRARY)
// ================================================

let spotifyAudio = null;
let isSpotifyPlaying = false;
let currentSpotifyTrack = null;
let currentPlayIndex = -1;
let searchResults = [];
let currentLoadingOverlay = null;

let spotifyLibrary = [];

function loadLibrary() {
    const saved = localStorage.getItem('spotify_library');
    if (saved) {
        try {
            spotifyLibrary = JSON.parse(saved);
            console.log('Library loaded:', spotifyLibrary.length, 'songs');
        } catch(e) {
            console.log('Error loading library:', e);
            spotifyLibrary = [];
        }
    } else {
        spotifyLibrary = [];
    }
    renderLibrary();
}

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
    console.log('Adding to library:', track.title, 'ID:', track.id);
    
    // Ganti pengecekan duplikat menggunakan judul + artis (lebih akurat)
    const exists = spotifyLibrary.some(t => 
        t.title === track.title && t.artist === track.artist
    );
    
    if (!exists) {
        
        const newTrack = {
    id: Date.now(), // SELALU pakai timestamp, jangan track.id
    title: track.title,
    artist: track.artist,
    thumbnail: getValidThumbnail(track.thumbnail),
    audioUrl: track.audioUrl
};
        
        spotifyLibrary.unshift(newTrack);
        saveLibrary();
        renderLibrary(); // langsung render ulang
        
        console.log('Library now has:', spotifyLibrary.length, 'songs');
        showToast('✓ ' + track.title + ' ditambahkan ke library');
        return true;
    } else {
        console.log('Duplicate detected, not adding');
        showToast('❓ ' + track.title + ' sudah ada di library', true);
        return false;
    }
}

function renderLibrary() {
    const libraryList = document.getElementById('libraryList');
    if (!libraryList) {
        console.log('libraryList element not found');
        return;
    }
    
    console.log('Rendering library, total songs:', spotifyLibrary.length);
    
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
    
    console.log('Render complete, items:', document.querySelectorAll('.library-item').length);
}

function deleteFromLibrary(index) {
    if (index < 0 || index >= spotifyLibrary.length) return;
    
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
    
    showToast('🗑️ ' + trackName + ' dihapus dari library');
}

function playFromLibrary(index) {
    if (index < 0 || index >= spotifyLibrary.length) return;
    
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
        // API BARU: kyzznekoo.zone.id
        const searchUrl = `https://kyzznekoo.zone.id/api/search/spotify?q=${encodedQuery}`;
        const response = await fetch(searchUrl);
        const data = await response.json();
        
        // Response baru: { status: true, result: [{ name, artists, album, url, ... }] }
        if (data.status === true && data.result && data.result.length > 0) {
            // Konversi data dari API baru ke format yang diharapkan oleh fungsi lama
            const convertedResults = data.result.map(item => {
                // Ambil nama artis dari array artists
                let artistName = 'Unknown';
                if (item.artists && item.artists.length > 0) {
                    artistName = item.artists.map(a => a.name).join(', ');
                }
                
                // Ambil thumbnail dari album images
                let thumbnail = '';
                if (item.album && item.album.images && item.album.images.length > 0) {
                    const img = item.album.images.find(i => i.width === 300) || item.album.images[0];
                    thumbnail = img.url;
                }
                
                return {
                    title: item.name || 'Unknown Title',
                    artist: artistName,
                    thumbnail: thumbnail,
                    url: item.url || item.uri,
                    id: item.id || item.uri?.split(':')[2],
                    duration: item.duration_ms ? formatDuration(item.duration_ms) : ''
                };
            });
            
            searchResults = convertedResults;
            
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
        console.error('Search error:', e);
        resultsContainer.innerHTML = '<div class="search-error">Gagal mencari lagu</div>';
    }
}

// Helper function untuk format durasi dari milliseconds
function formatDuration(ms) {
    if (!ms) return '';
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

async function downloadAndAddToLibrary(index) {
    if (index < 0 || index >= searchResults.length) return;
    
    const track = searchResults[index];
    if (!track) return;
    
    const downloadBtn = document.querySelectorAll('.search-download-btn')[index];
    const modalContent = document.querySelector('#spotifyPlayerModal .modal-content');
    
    removeLoadingOverlay();
    
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = `
        <div class="loading-message">
            <i class="ri-loader-4-line"></i>
            <span>Mengunduh <span class="loading-text"></span></span>
            <button class="loading-cancel-btn" id="cancelDownloadBtn">Batal</button>
        </div>
    `;
    if (modalContent) {
        modalContent.style.position = 'relative';
        modalContent.appendChild(loadingOverlay);
        currentLoadingOverlay = loadingOverlay;
    }
    
    const cancelBtn = document.getElementById('cancelDownloadBtn');
    if (cancelBtn) {
        cancelBtn.onclick = () => {
            removeLoadingOverlay();
            if (downloadBtn) {
                downloadBtn.innerHTML = '<i class="ri-download-line"></i> Simpan';
                downloadBtn.disabled = false;
            }
            showToast('Dibatalkan', true);
        };
    }
    
    if (downloadBtn) {
        downloadBtn.innerHTML = '<div class="loading-spinner"></div>';
        downloadBtn.disabled = true;
    }
    
    try {
        const encodedUrl = encodeURIComponent(track.url);
        // API BARU: kyzznekoo.zone.id/downloader/spotify
        const downloadUrl = `https://kyzznekoo.zone.id/api/downloader/spotify?url=${encodedUrl}`;
        const response = await fetch(downloadUrl);
        const data = await response.json();
        
        removeLoadingOverlay();
        
        // Response baru: { status: true, result: { download: { url: "..." }, title, artist, image } }
        if (data.status === true && data.result && data.result.download && data.result.download.url) {
            const trackData = {
                id: track.id || Date.now(),
                title: data.result.title || track.title,
                artist: data.result.artist || track.artist,
                thumbnail: data.result.image || track.thumbnail,
                audioUrl: data.result.download.url
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
        removeLoadingOverlay();
        console.error('Download error:', e);
        showToast('Error: ' + e.message, true);
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
    const downloadBtn = document.getElementById('downloadCurrentBtn');
    const modalContent = document.querySelector('#spotifyPlayerModal .modal-content');
    
    removeLoadingOverlay();
    
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = `
        <div class="loading-message">
            <i class="ri-loader-4-line"></i>
            <span>Menyiapkan lagu <span class="loading-text"></span></span>
            <button class="loading-cancel-btn" id="cancelPlayBtn">Batal</button>
        </div>
    `;
    if (modalContent) {
        modalContent.style.position = 'relative';
        modalContent.appendChild(loadingOverlay);
        currentLoadingOverlay = loadingOverlay;
    }
    
    const cancelBtn = document.getElementById('cancelPlayBtn');
    if (cancelBtn) {
        cancelBtn.onclick = () => {
            removeLoadingOverlay();
            showToast('Dibatalkan', true);
        };
    }
    
    if (playBtn) {
        playBtn.innerHTML = '<div class="loading-spinner"></div>';
        playBtn.disabled = true;
    }
    
    const audio = new Audio(track.audioUrl);
    audio.preload = 'auto';
    audio.volume = 0.5;
    audio.loop = true;
    
    audio.addEventListener('canplaythrough', () => {
        removeLoadingOverlay();
        
        audio.play();
        isSpotifyPlaying = true;
        currentSpotifyTrack = track;
        
        const thumb = getValidThumbnail(track.thumbnail);
        
        // ========== MEDIA SESSION API ==========
        if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: track.title,
                artist: track.artist,
                album: 'YussXy Store Music',
                artwork: [
                    { src: thumb, sizes: '96x96', type: 'image/jpeg' },
                    { src: thumb, sizes: '128x128', type: 'image/jpeg' },
                    { src: thumb, sizes: '192x192', type: 'image/jpeg' },
                    { src: thumb, sizes: '256x256', type: 'image/jpeg' },
                    { src: thumb, sizes: '384x384', type: 'image/jpeg' },
                    { src: thumb, sizes: '512x512', type: 'image/jpeg' },
                ]
            });

            navigator.mediaSession.setActionHandler('play', toggleSpotifyPlay);
            navigator.mediaSession.setActionHandler('pause', pauseSpotifyTrack);
            navigator.mediaSession.setActionHandler('previoustrack', playPrevTrack);
            navigator.mediaSession.setActionHandler('nexttrack', playNextTrack);
        }
        // =====================================
        
        document.getElementById('currentTrackImg').src = thumb;
        document.getElementById('currentTrackTitle').innerHTML = escapeHtml(track.title.substring(0, 35));
        document.getElementById('currentTrackArtist').innerHTML = escapeHtml(track.artist);
        document.getElementById('spotifyCurrentPlayer').style.display = 'block';
        
        if (playBtn) {
            playBtn.innerHTML = '<i class="ri-pause-fill"></i>';
            playBtn.disabled = false;
        }
        
        if (downloadBtn) {
            downloadBtn.disabled = false;
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
    
    // ========== AUTOPLAY NEXT TRACK ==========
    audio.addEventListener('ended', () => {
        // Cek apakah ada lagu berikutnya di library
        if (window.spotifyLibrary && window.spotifyLibrary.length > 0) {
            const nextIndex = currentPlayIndex + 1;
            if (nextIndex < window.spotifyLibrary.length) {
                // Mainkan lagu berikutnya
                playFromLibrary(nextIndex);
                return; // keluar, jangan eksekusi kode berhenti
            }
        }
        
        // Jika tidak ada lagu berikutnya, berhenti seperti biasa
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
        removeLoadingOverlay();
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

function removeLoadingOverlay() {
    if (currentLoadingOverlay && currentLoadingOverlay.remove) {
        currentLoadingOverlay.remove();
        currentLoadingOverlay = null;
    }
}

function playNextTrack() {
    if (currentPlayIndex + 1 < spotifyLibrary.length) {
        playFromLibrary(currentPlayIndex + 1);
    } else if (spotifyLibrary.length > 0) {
        playFromLibrary(0);
    }
}

function playPrevTrack() {
    if (currentPlayIndex - 1 >= 0) {
        playFromLibrary(currentPlayIndex - 1);
    } else if (spotifyLibrary.length > 0) {
        playFromLibrary(spotifyLibrary.length - 1);
    }
}

// INITIALIZATION
document.addEventListener('DOMContentLoaded', function() {
    loadLibrary(); // Load library dari localStorage
    
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
});




//🟡🟡🟡🟡🟡🟡🟡




//🟡🟡🟡🟡🟡🟡🟡






























































// ================================================
// FITUR TEKAN BACK 2X UNTUK KELUAR
// ================================================
let backPressed = false;
let backTimer = null;

// Push state awal agar popstate bisa dideteksi
history.pushState(null, null, location.href);

window.addEventListener('popstate', function(event) {
    // Cek apakah sidebar terbuka
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    if (sidebarOverlay && sidebarOverlay.style.display === 'flex') {
        closeSidebar(); // tutup sidebar
        history.pushState(null, null, location.href);
        event.preventDefault();
        return;
    }
    
    // Cek apakah ada modal yang terbuka
    const anyModalOpen = document.querySelector('.modal.active');
    if (anyModalOpen) {
        anyModalOpen.classList.remove('active');
        history.pushState(null, null, location.href);
        event.preventDefault();
        return;
    }
    
    // Cek apakah sedang di halaman produk (bukan di cart, info, dll)
    const activePage = document.querySelector('.page.active');
    if (activePage && activePage.id === 'productsPage') {
        if (!backPressed) {
            backPressed = true;
            showToast('Tekan sekali lagi untuk keluar', false);
            if (backTimer) clearTimeout(backTimer);
            backTimer = setTimeout(() => {
                backPressed = false;
            }, 2000);
            history.pushState(null, null, location.href);
            event.preventDefault();
        } else {
            // Keluar dari aplikasi
            if (window.navigator && window.navigator.app) {
                window.navigator.app.exitApp(); // untuk Cordova/Capacitor
            } else if (window.close) {
                window.close();
            } else {
                // Alternatif terakhir: arahkan ke halaman kosong
                window.location.href = 'about:blank';
            }
        }
    } else {
        // Jika tidak di halaman produk, balik ke halaman produk
        navigateToPage('products');
        history.pushState(null, null, location.href);
        event.preventDefault();
    }
});





document.addEventListener('DOMContentLoaded', function() {
    // Mencegah drag pada semua gambar
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });

    // Mencegah klik kanan (context menu) pada gambar
    document.addEventListener('contextmenu', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });
});





// ================================================
// GENERATE DEVICE ID OTOMATIS (KALAU BELUM ADA)
// ================================================
if (!localStorage.getItem('device_fingerprint')) {
    generateAndSaveDeviceId();
}

async function generateAndSaveDeviceId() {
    try {
        const code = await generateDeviceCode();
        localStorage.setItem('device_fingerprint', code);
        console.log('Device ID dibuat otomatis:', code);
    } catch(e) {
        console.log('Gagal generate device ID:', e);
    }
}






//💡💡👤👤👤

// ================================================
// ZOOM QRIS TRANSFER
// ================================================
(function() {
    function attachZoom() {
        const qrisImg = document.getElementById('transferQrisImage');
        if (!qrisImg || qrisImg.dataset.zoomAttached === 'true') return;
        
        qrisImg.dataset.zoomAttached = 'true';
        qrisImg.style.cursor = 'pointer';

        qrisImg.addEventListener('click', function() {
            const overlay = document.createElement('div');
            overlay.className = 'qris-fullscreen-overlay';
            overlay.innerHTML = `
                <button class="qris-fullscreen-close">
                    <i class="ri-close-line"></i>
                </button>
                <img src="${this.src}" alt="QRIS">
            `;

            document.body.appendChild(overlay);
            document.body.style.overflow = 'hidden';

            requestAnimationFrame(() => {
                overlay.classList.add('active');
            });

            function closeOverlay() {
                overlay.classList.remove('active');
                setTimeout(() => {
                    overlay.remove();
                    document.body.style.overflow = '';
                }, 300);
            }

            overlay.querySelector('.qris-fullscreen-close').addEventListener('click', closeOverlay);
            overlay.addEventListener('click', function(e) {
                if (e.target === overlay) closeOverlay();
            });
        });
    }

    // Coba langsung
    attachZoom();

    // Coba lagi setelah delay (buat jaga-jaga kalau elemen muncul belakangan)
    setTimeout(attachZoom, 500);
    setTimeout(attachZoom, 1000);
    setTimeout(attachZoom, 2000);
})();









function initSholatWidget() {
    const input = document.getElementById('sholatCityInput');
    const refresh = document.getElementById('sholatRefreshBtn');
    
    // Load default Bandung (TANPA TOAST NOTIF)
    loadJadwalSholatSilent('bandung');
    
    if (refresh && input) {
        refresh.addEventListener('click', function() {
            const kota = input.value.trim();
            if (kota) {
                fetchJadwalSholat(kota);  // dengan toast
            } else {
                showToast('❌ Masukkan nama kota', true);
            }
        });
        
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const kota = input.value.trim();
                if (kota) {
                    fetchJadwalSholat(kota);  // dengan toast
                }
            }
        });
    }
}

// Fungsi baru: load tanpa toast notif
async function loadJadwalSholatSilent(kota) {
    const loading = document.getElementById('sholatLoading');
    const content = document.getElementById('sholatContent');
    
    if (loading) loading.style.display = 'flex';
    if (content) content.style.display = 'none';
    
    try {
        const encodedKota = encodeURIComponent(kota.toLowerCase());
        const response = await fetch(`https://api.nexray.eu.cc/information/jadwalsholat?kota=${encodedKota}`);
        const data = await response.json();
        
        if (data.status && data.result) {
            const r = data.result;
            const j = r.jadwal;
            
            document.getElementById('sholatCityName').textContent = r.kota;
            document.getElementById('sholatDate').textContent = `${r.periode} - ${r.tanggal}`;
            document.getElementById('imsyak').textContent = j.imsyak || '--:--';
            document.getElementById('subuh').textContent = j.subuh || '--:--';
            document.getElementById('terbit').textContent = j.terbit || '--:--';
            document.getElementById('dhuha').textContent = j.dhuha || '--:--';
            document.getElementById('dzuhur').textContent = j.dzuhur || '--:--';
            document.getElementById('ashar').textContent = j.ashar || '--:--';
            document.getElementById('maghrib').textContent = j.maghrib || '--:--';
            document.getElementById('isya').textContent = j.isya || '--:--';
            
            if (content) content.style.display = 'block';
            // TIDAK ADA showToast di sini
        } else {
            if (content) content.style.display = 'none';
        }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        if (loading) loading.style.display = 'none';
    }
}




// ================================================
// JADWAL SHOLAT - MODERN WIDGET (FIXED)
// ================================================

async function fetchJadwalSholat(kota) {
    const loading = document.getElementById('sholatLoading');
    const content = document.getElementById('sholatContent');
    
    if (loading) loading.style.display = 'flex';
    if (content) content.style.display = 'none';
    
    try {
        const encodedKota = encodeURIComponent(kota.toLowerCase());
        const response = await fetch(`https://api.nexray.eu.cc/information/jadwalsholat?kota=${encodedKota}`);
        const data = await response.json();
        
        if (data.status && data.result) {
            const r = data.result;
            const j = r.jadwal;
            
            // Update DOM
            const cityNameSpan = document.getElementById('sholatCityName');
            const dateSpan = document.getElementById('sholatDate');
            if (cityNameSpan) cityNameSpan.textContent = r.kota;
            if (dateSpan) dateSpan.textContent = `${r.periode} - ${r.tanggal}`;
            
            const imsyak = document.getElementById('imsyak');
            const subuh = document.getElementById('subuh');
            const terbit = document.getElementById('terbit');
            const dhuha = document.getElementById('dhuha');
            const dzuhur = document.getElementById('dzuhur');
            const ashar = document.getElementById('ashar');
            const maghrib = document.getElementById('maghrib');
            const isya = document.getElementById('isya');
            
            if (imsyak) imsyak.textContent = j.imsyak || '--:--';
            if (subuh) subuh.textContent = j.subuh || '--:--';
            if (terbit) terbit.textContent = j.terbit || '--:--';
            if (dhuha) dhuha.textContent = j.dhuha || '--:--';
            if (dzuhur) dzuhur.textContent = j.dzuhur || '--:--';
            if (ashar) ashar.textContent = j.ashar || '--:--';
            if (maghrib) maghrib.textContent = j.maghrib || '--:--';
            if (isya) isya.textContent = j.isya || '--:--';
            
            const updateSpan = document.getElementById('sholatUpdateTime');
            if (updateSpan && data.timestamp) {
                const date = new Date(data.timestamp);
                updateSpan.textContent = `Update ${date.toLocaleTimeString('id-ID')}`;
            }
            
            if (content) content.style.display = 'block';
            
            // Hanya tampilkan toast jika bukan load pertama (optional)
            if (!window.isFirstLoad) {
                showToast(`✅ Jadwal ${r.kota}`);
            }
            window.isFirstLoad = true;
            
        } else {
            showToast('❌ Kota tidak ditemukan', true);
            if (content) content.style.display = 'none';
        }
    } catch (error) {
        console.error('Error:', error);
        showToast('❌ Gagal mengambil jadwal', true);
    } finally {
        if (loading) loading.style.display = 'none';
    }
}

// Fungsi untuk load tanpa toast (pertama kali)
async function loadJadwalSholatSilent(kota) {
    const loading = document.getElementById('sholatLoading');
    const content = document.getElementById('sholatContent');
    
    if (loading) loading.style.display = 'flex';
    if (content) content.style.display = 'none';
    
    try {
        const encodedKota = encodeURIComponent(kota.toLowerCase());
        const response = await fetch(`https://api.nexray.eu.cc/information/jadwalsholat?kota=${encodedKota}`);
        const data = await response.json();
        
        if (data.status && data.result) {
            const r = data.result;
            const j = r.jadwal;
            
            const cityNameSpan = document.getElementById('sholatCityName');
            const dateSpan = document.getElementById('sholatDate');
            if (cityNameSpan) cityNameSpan.textContent = r.kota;
            if (dateSpan) dateSpan.textContent = `${r.periode} - ${r.tanggal}`;
            
            document.getElementById('imsyak').textContent = j.imsyak || '--:--';
            document.getElementById('subuh').textContent = j.subuh || '--:--';
            document.getElementById('terbit').textContent = j.terbit || '--:--';
            document.getElementById('dhuha').textContent = j.dhuha || '--:--';
            document.getElementById('dzuhur').textContent = j.dzuhur || '--:--';
            document.getElementById('ashar').textContent = j.ashar || '--:--';
            document.getElementById('maghrib').textContent = j.maghrib || '--:--';
            document.getElementById('isya').textContent = j.isya || '--:--';
            
            if (content) content.style.display = 'block';
        }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        if (loading) loading.style.display = 'none';
    }
}

// Inisialisasi widget
function initSholatWidget() {
    const input = document.getElementById('sholatCityInput');
    const refresh = document.getElementById('sholatRefreshBtn');
    
    if (!input || !refresh) return;
    
    // Set flag untuk first load
    window.isFirstLoad = false;
    
    // Load default Bandung (silent, tanpa toast)
    loadJadwalSholatSilent('bandung');
    
    // Hapus event listener lama (biar tidak double)
    const newRefresh = refresh.cloneNode(true);
    refresh.parentNode.replaceChild(newRefresh, refresh);
    
    // Event klik tombol refresh
    newRefresh.addEventListener('click', function() {
        const kota = input.value.trim();
        if (kota) {
            fetchJadwalSholat(kota);
        } else {
            showToast('❌ Masukkan nama kota', true);
        }
    });
    
    // Event enter key
    input.removeEventListener('keypress', input._listener);
    input._listener = function(e) {
        if (e.key === 'Enter') {
            const kota = input.value.trim();
            if (kota) {
                fetchJadwalSholat(kota);
            } else {
                showToast('❌ Masukkan nama kota', true);
            }
        }
    };
    input.addEventListener('keypress', input._listener);
    
    // Event change (ketika pilih dari datalist)
    input.addEventListener('change', function() {
        const kota = input.value.trim();
        if (kota) {
            fetchJadwalSholat(kota);
        }
    });
}




// ================================================
// RANDOM QUOTE WIDGET
// ================================================

async function fetchRandomQuote() {
    const quoteText = document.getElementById('quoteText');
    if (!quoteText) return;
    
    quoteText.innerHTML = '<i class="ri-loader-4-line" style="display: inline-block; animation: spin 0.8s linear infinite;"></i> Memuat...';
    
    try {
        const response = await fetch('https://kyzznekoo.zone.id/api/random/quotes');
        const data = await response.json();
        
        if (data.status === true && data.result) {
            quoteText.innerHTML = ` ${escapeHtml(data.result)}`;
        } else {
            quoteText.innerHTML = '"Hari ini adalah kesempatan untuk jadi lebih baik."';
        }
    } catch (error) {
        console.error('Error fetching quote:', error);
        quoteText.innerHTML = '"Jangan menyerah, masih ada hari esok."';
    }
}

// Panggil di initSholatWidget atau buat fungsi terpisah
function initQuoteWidget() {
    const refreshBtn = document.getElementById('refreshQuoteBtn');
    
    // Load quote pertama kali
    fetchRandomQuote();
    
    // Event refresh
    if (refreshBtn) {
        refreshBtn.addEventListener('click', fetchRandomQuote);
    }
}





// ================================================
// WEBSITE STORE MODAL (PRODUK ID 29)
// ================================================

let currentPreviewIndex = 0;
let totalPreviews = 3;


function showWebsiteStoreModal(product) {
    const modal = document.getElementById('websiteStoreModal');
    
    // Reset form
    document.getElementById('webName').value = '';
    document.getElementById('ownerName').value = '';
    document.getElementById('telegramLink').value = '';
    document.getElementById('instagramLink').value = '';
    document.getElementById('ownerWA').value = '';
    document.getElementById('adminWA').value = '';
    
    // Tampilkan modal
    modal.classList.add('active');
    
    // ========== TAMBAHAN: Event klik gambar untuk zoom (tombol contoh sudah langsung panggil showZoomImage) ==========
    // Tidak perlu kode carousel karena sudah pakai tombol contoh
    
    // Tombol bayar
    const bayarBtn = document.getElementById('bayarWebsiteBtn');
    const newBayarBtn = bayarBtn.cloneNode(true);
    bayarBtn.parentNode.replaceChild(newBayarBtn, bayarBtn);
    
    newBayarBtn.addEventListener('click', () => {
        // Validasi form
        const webName = document.getElementById('webName').value.trim();
        const ownerName = document.getElementById('ownerName').value.trim();
        const telegramLink = document.getElementById('telegramLink').value.trim();
        const instagramLink = document.getElementById('instagramLink').value.trim();
        const ownerWA = document.getElementById('ownerWA').value.trim();
        const adminWA = document.getElementById('adminWA').value.trim();
        
        if (!webName) {
            showToast('❌ Masukkan Nama Website Store!', true);
            return;
        }
        if (!ownerName) {
            showToast('❌ Masukkan Nama Owner!', true);
            return;
        }
        if (!ownerWA) {
            showToast('❌ Masukkan No WhatsApp Owner!', true);
            return;
        }
        
        // Validasi nomor WA (minimal 10 digit)
        const cleanWA = ownerWA.replace(/\D/g, '');
        if (cleanWA.length < 10) {
            showToast('❌ No WhatsApp Owner tidak valid! Minimal 10 digit.', true);
            return;
        }
        
        // Simpan data ke variable global
        window.websiteOrderData = {
            webName: webName,
            ownerName: ownerName,
            telegramLink: telegramLink || '-',
            instagramLink: instagramLink || '-',
            ownerWA: ownerWA,
            adminWA: adminWA || '-',
            productName: product.name,
            productPrice: product.price
        };
        
        // Tutup modal website
        closeWebsiteModal();
        
        // Tampilkan QRIS
        const totalPrice = product.price;
        const qrTotal = document.getElementById('qrTotal');
        if (qrTotal) qrTotal.textContent = formatPrice(totalPrice);
        
        showQrisModalWithButton();
        
        window.pendingOrder = {
            items: [{ name: product.name, quantity: 1 }],
            totalItems: 1,
            totalPrice: totalPrice,
            isWebsiteOrder: true,
            websiteData: window.websiteOrderData
        };
    });
    
    // Close modal dengan tombol X
    const closeBtn = document.getElementById('closeWebsiteModal');
    if (closeBtn) {
        const newCloseBtn = closeBtn.cloneNode(true);
        closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);
        
        newCloseBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeWebsiteModal();
        });
    }
    
    // Close modal klik overlay (luar modal)
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeWebsiteModal();
        }
    });
}


function closeWebsiteModal() {
    const modal = document.getElementById('websiteStoreModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function updateCarousel() {
    const wrapper = document.getElementById('carouselWrapper');
    if (wrapper) {
        wrapper.style.transform = `translateX(-${currentPreviewIndex * 100}%)`;
    }
}

function updateDots() {
    const dotsContainer = document.getElementById('carouselDots');
    if (!dotsContainer) return;
    
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalPreviews; i++) {
        const dot = document.createElement('span');
        dot.className = `carousel-dot ${i === currentPreviewIndex ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            currentPreviewIndex = i;
            updateCarousel();
            updateDots();
        });
        dotsContainer.appendChild(dot);
    }
}






// ================================================
// ZOOM GAMBAR WEBSITE - DENGAN ANIMASI
// ================================================

function showZoomImage(imageSrc) {
    console.log("showZoomImage dipanggil:", imageSrc);
    
    const modal = document.getElementById('zoomImageModal');
    const zoomImage = document.getElementById('zoomImage');
    
    if (!modal) {
        console.log("Modal zoom tidak ditemukan!");
        return;
    }
    
    if (!zoomImage) {
        console.log("Element zoomImage tidak ditemukan!");
        return;
    }
    
    // Hapus class closing jika ada
    modal.classList.remove('closing');
    
    zoomImage.src = imageSrc;
    modal.classList.add('active');
    
    // Close button dengan animasi
    const closeBtn = document.getElementById('closeZoomModal');
    if (closeBtn) {
        const newCloseBtn = closeBtn.cloneNode(true);
        closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);
        
        newCloseBtn.addEventListener('click', function() {
            closeZoomModalWithAnimation(modal);
        });
    }
    
    // Close klik luar gambar dengan animasi
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeZoomModalWithAnimation(modal);
        }
    });
    
    // Close dengan tombol ESC
    function escHandler(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeZoomModalWithAnimation(modal);
            document.removeEventListener('keydown', escHandler);
        }
    }
    document.addEventListener('keydown', escHandler);
}

function closeZoomModalWithAnimation(modal) {
    if (!modal) return;
    
    // Tambah class closing untuk animasi
    modal.classList.add('closing');
    
    // Tunggu animasi selesai, baru hapus active
    setTimeout(() => {
        modal.classList.remove('active', 'closing');
    }, 250);
}











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
window.playFromLibrary = playFromLibrary;
window.deleteFromLibrary = deleteFromLibrary;
window.downloadAndAddToLibrary = downloadAndAddToLibrary;
window.playNextTrack = playNextTrack;

