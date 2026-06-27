


(function() {
    const pending = localStorage.getItem('pending_deposit');
    if (pending) {
        try {
            const data = JSON.parse(pending);
            const elapsed = Date.now() - data.timestamp;
            const maxAge = 900000;
            
            if (elapsed >= maxAge) {
                localStorage.removeItem('pending_deposit');
                console.log('🗑️ Pending deposit expired and removed (home check)');
                return;
            }
            
            if (elapsed < maxAge) {
                const remaining = Math.floor((maxAge - elapsed) / 1000);
                console.log('⏰ Sisa waktu deposit:', remaining, 'detik');
                
                const url = 'yuss.html?' +
                    'depositId=' + data.depositId +
                    '&username=' + encodeURIComponent(data.username) +
                    '&amount=' + data.amount +
                    '&uniqueCode=' + data.uniqueCode +
                    '&totalAmount=' + data.totalAmount +
                    '&qrImage=' + encodeURIComponent(data.qrImage || '') +
                    '&ramaDepositId=' + (data.ramaDepositId || data.depositId);
                window.location.href = url;
                return;
            }
        } catch(e) {
            console.error('Error parsing pending deposit:', e);
            localStorage.removeItem('pending_deposit');
        }
    }
})();




const WHATSAPP_CHANNEL_URL = "https://whatsapp.com/channel/0029VbAgFKULSmbeJMLfmR3b";
const ADMIN_PHONE_NUMBER = "6283183469343";
const phoneNumber = '6283183469343';

const tools = ['toolTiktok', 'toolYoutube', 'toolSpotify', 'toolFacebook', 'toolCapcut', 'toolInstagram', 'toolFakelobby', 'toolFakedana', 'toolFakelobbyml', 'toolFakejago', 'toolPassword', 'toolLorem', 'toolQrcode', 'toolSertifikatlol', 'toolWrMLBB', 'toolEmojimix', 'toolBeritaMLBB', 'toolTiktokhashtag', 'toolTranslate', 'toolSpotifysearch', 'toolLyrics', 'toolYtsearch', 'toolPpcouple', 'toolDeviceid', 'toolCekacount'];

const STORE_WHITELIST_PRODUCTS = [
    32, 20, 27, 31, 17, 30, 24
];


const channelId = "120363403696927236@newsletter";

/*const channelId = '120363403696927236@newsletter';*/

/*const CHANNEL_ID = "120363403696927236@newsletter";*/

const APP_DOWNLOAD_LINK = "https://www.mediafire.com/file/q2va9jlgf3xy0pm/DIGITAL+SHOOP+-+YUSS+XY.apk/file";




const WEB3FORMS_ACCESS_KEY = "048cda4c-a479-40f1-a2d6-41b7a6f030a3";
const ADMIN_EMAIL = "yussalmount@gmail.com"; 


let historyCurrentPage = 1;
const itemsPerPage = 5;
let allTransactions = [];







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
    isAppBundle: true
},
    
    
    
    
    {
    id: 27,
    name: "Suntik Sosmed Otomatis",
    description: "Layanan Suntik Sosmed - Proses Langsung Otomatis",
    price: "Lihat Daftar",
    image: "image/produk/produk29.jpg",
    category: "digital",
    type: "hot",
    isAutoSosmed: true
},
    
    
    
    
    {
    id: 31,
    name: "Reaction Saluran WA",
    description: "Kirim 500/1000+ reaction emoji ke pesan saluran WhatsApp anda",
    price: 1000,
    image: "image/produk/produk28.jpg",
    category: "jasa",
    isNegotiable: false,
    type: "hot",
    isReaction1000Service: true,
    benefits: [
        "1000 reaction sekaligus",
        "Pesan saluran mu banjir reaksi",
        "Cocok untuk pamer ke teman"
    ]
},
    
    
    
            {
    id: 17,
    name: "Aplikasi Pembuat Logo JB",
    description: "Keuntungannya, Buat Logo Gak Perlu Susah Lagi, Tinggal Ganti Teks Langsung Jadi, Bisa Jualan Logo JB",
    price: 3500,
    image: "image/produk/produk18.jpg",
    category: "digital",
    isNegotiable: false,
    type: "hot",
    downloadLink: "https://www.mediafire.com/file/itv2m80pkcfp6k9/Apk+Pembuat+Logo+Jb.apk/file",
    isApkOrderService: true,
    benefits: [
        "Bisa buat logo dengan mudah",
        "bisa jualan logo"
    ]
},
    
    
    
    
    
    {
    id: 30,
    name: "Aplikasi Auto Sv Kontak",
    description: "Keuntungannya, Kontak Jadi Banyak, Gak perlu sv 1 1, udah otomatis nge save kontak tidak di kenal, cocok buat anak jb",
    price: 3500,
    image: "image/produk/produk27.jpg",
    category: "digital",
    isNegotiable: false,
    type: "hot",
    downloadLink: "https://www.mediafire.com/file/t4tcvdr86mfmdvn/APK+AUTO+SAVE.apk/file",
    benefits: [
        "Otomatis Save Kontak Tidak Di kenal",
        "Kontak Jadi Banyak"
    ]
},
    
    {
    id: 32,
    name: "Apk Nonton Bioskop Free",
    description: "Nonton Film Free",
    price: 3000,
    image: "image/produk/produk30.jpg",
    category: "digital",
    isNegotiable: false,
    type: "new",
    downloadLink: "https://www.mediafire.com/file/eg1svnk5os28wm3/movieid_1001_V3.0.3.apk/file?dkey=rp41je0tmez&r=420",
    isApkOrderService: true,  
    benefits: [
        "Bisa nonton film secara gratis",
        "Bisa di jual lagi"
    ]
},
    
    
    
    
    
    
    
    
    
    {
    id: 24,
    name: "Mentahan Design",
    description: "Berisi Font, Image",
    price: 6000,
    image: "image/produk/produk24.jpg",
    category: "digital",
    isNegotiable: false,
    type: "none",
    downloadLink: "https://www.mediafire.com/file/x5natgxmrrotbfs/font+dan+mentahan+design.zip/file",
    isDesignOrderService: true,
    benefits: [
        "Dapat Mentahan untuk desain",
        "bisa di jual lagi"
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
    type: "none",
    benefits: [
        "Punya Web Store Permanen",
        "Free Deploy Vercel",
        "Free ADD 10 Produk",
        
    ]
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
    hasNokosOption: true, 
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
    name: "Reaction 90+ emoji",
    description: "Memberikan 100+ Reaksi emoji ke pesan di saluran WhatsApp anda",
    price: 800,
    image: "image/produk/produk20.jpg",
    category: "jasa",
    isNegotiable: false,
    type: "sold_out",
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
    type: "hot",
    hasDurationOption: true,
    benefits: [
        "Semua Pesan saluran mu banyak reaksi nya",
        "Saluran Full Reaction",
        "100+ reaction walaupun pengikut saluran kurang dari 100"
    ]
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
        name: "TikTok Follower",
        price: 70000,
        unit: "1.000 Follower",
        status: "available",
        description: "Menambah Follower ke akun TikTok",
        minQuantity: 20
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








const autoSosmedServices = [
    {
        id: 1,
        name: "Pengikut Saluran WhatsApp",
        price: 80000,
        unit: "Pengikut",
        service_id: "226",
        description: "Tambahkan pengikut ke saluran WhatsApp - Proses Otomatis",
        minQuantity: 10,
        maxQuantity: 10000,
        placeholder: "https://whatsapp.com/channel/xxxxx",
        needLink: true,
        step: 10,
        addAtSymbol: false,
        regex: /^https:\/\/whatsapp\.com\/channel\/[a-zA-Z0-9]+$/
    },
    
    {
        id: 2,
        name: "TikTok View",
        price: 3500,
        unit: "View",
        service_id: "29",
        description: "Tambahkan view ke video TikTok - Proses Otomatis",
        minQuantity: 100,
        maxQuantity: 10000,
        placeholder: "https://vt.tiktok.com/xxxxx",
        needLink: true,
        step: 500,
        addAtSymbol: false
    },
    {
        id: 3,
        name: "TikTok Like",
        price: 15000,
        unit: "Like",
        service_id: "3162",
        description: "Tambahkan like ke video TikTok - Proses Otomatis",
        minQuantity: 10,
        maxQuantity: 10000,
        placeholder: "https://vt.tiktok.com/xxxxx",
        needLink: true,
        step: 100,
        addAtSymbol: false
    },
        {
        id: 4,
        name: "TikTok Followers",
        price: 70000,
        unit: "Pengikut",
        service_id: "419",
        description: "Tambahkan Foll ke Akun TikTok",
        minQuantity: 10,
        maxQuantity: 10000,
        placeholder: "@yuss_xy/link profil",
        needLink: true,
        step: 100,
        addAtSymbol: false
    },
    
    
    
    {
        id: 5,
        name: "Instagram Followers",
        price: 20000,
        unit: "Pengikut",
        service_id: "390",
        description: "Tambahkan Followers ke Akun Instagram",
        minQuantity: 10,
        maxQuantity: 10000,
        placeholder: "Username/link profil",
        needLink: true,
        step: 100,
        addAtSymbol: false
    },
    
    
    
    
    {
        id: 6,
        name: "Instagram Like Indonesia",
        price: 50000,
        unit: "Like",
        service_id: "3180",
        description: "Tambahkan like ke postingan/reels Instagram - Proses Otomatis",
        minQuantity: 25,
        maxQuantity: 5000,
        placeholder: "https://www.instagram.com/p/xxxxx atau /reel/xxxxx",
        needLink: true,
        step: 25,
        addAtSymbol: false
    },
    {
        id: 7,
        name: "Facebook Post Like",
        price: 10000,
        unit: "Like",
        service_id: "3127",
        description: "Tambahkan like ke postingan Facebook - Proses Otomatis",
        minQuantity: 100,
        maxQuantity: 10000,
        placeholder: "https://www.facebook.com/xxxxx/posts/xxxxx",
        needLink: true,
        step: 100,
        addAtSymbol: false
    }
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
        showToast('Maaf, produk ini sedang habis.', true);
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
    
    
    // CEK SUNTIK SOSMED OTOMATIS (ID 22)
    if (product.isAutoSosmed || product.id === 27) {
        showAutoSosmedModal();
        return;
    }
    
    
    
    // Di dalam showProductDetail, cek produk ID 20 (Aplikasi Premium)
if (product.id === 20 || product.isAppBundle) {
    showPremiumAppsModal();
    return;
}
    
    
    
    
    
    
     // CEK APAKAH PRODUK PAKET HEMAT REACTION (DURASI)
    if (product.hasDurationOption) {
        showReactionDurationModal(product);
        return;
    }
    
    if (product.id === 31 || product.name === "Reaction 1000 emoji") {
    showReaction1000Modal(product);
    return;
}
    
    
    if (product.isApkOrderService || product.id === 17 || product.id === 32) {
        showApkOrderModal(product);
        return;
    }


    
    
    
    
  if (product.id === 30) {
    showAutoSaveApkModal(product);
    return;
}  
    
    
    
    
    
    
    
    
    
    
    // KHUSUS PRODUK WEBSITE STORE (ID 29)
if (product.id === 29 || product.name === "Website Store") {
    console.log("Ini produk Website Store, buka modal form");
    showWebsiteStoreModal(product);
    return;
}
    
    
    
    if (product.id === 24) {
    showDesignOrderModal(product);
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
            showProfessionalToast(selectedProduct.name, 'added');
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
    showProfessionalToast(product.name, 'added');
}

function showProfessionalToast(productName, type = 'added') {
    const existingToast = document.querySelector('.toast-professional');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast-professional';
    
    const icon = type === 'added' ? 'ri-checkbox-circle-fill' : 'ri-error-warning-fill';
    const color = type === 'added' ? '#10b981' : '#ef4444';
    const message = type === 'added' ? 'ditambahkan ke keranjang' : 'gagal ditambahkan';
    
    toast.innerHTML = `
        <div class="toast-icon" style="background: ${color}20; border-color: ${color}40;">
            <i class="${icon}" style="color: ${color};"></i>
        </div>
        <div class="toast-content">
            <div class="toast-title">${productName}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" onclick="this.closest('.toast-professional').remove()">
            <i class="ri-close-line"></i>
        </button>
        <div class="toast-progress" style="background: ${color};"></div>
    `;
    
    document.body.appendChild(toast);
    
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });
    
    const progress = toast.querySelector('.toast-progress');
    if (progress) {
        progress.style.animation = 'toastProgress 2.5s linear forwards';
    }
    
    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('hide');
        setTimeout(() => {
            if (toast.parentNode) toast.remove();
        }, 300);
    }, 2800);
    
    toast.querySelector('.toast-close').addEventListener('click', function(e) {
        e.stopPropagation();
        toast.classList.remove('show');
        toast.classList.add('hide');
        setTimeout(() => {
            if (toast.parentNode) toast.remove();
        }, 300);
    });
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
    
    
    
    
if (pageName === 'history') {
    loadHistory();
}
    
    
    
   if (pageName === 'info') {
        loadUserProfile();
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
        if (window.pendingOrder.isDeposit) {
            const nominal = window.pendingOrder.depositNominal;
            const { jam, tanggal, tahun } = getCurrentDateTime();
            const deviceId = localStorage.getItem('device_fingerprint') || 'Tidak tersedia';
            
            const savedUser = localStorage.getItem('app_user');
            let username = 'Tidak diketahui';
            if (savedUser) {
                try {
                    const userData = JSON.parse(savedUser);
                    username = userData.username || userData.name || 'Tidak diketahui';
                } catch(e) {}
            }
            
            let message = `Halo Yuss Xy 👋%0A%0A`;
            message += `Saya ingin melakukan konfirmasi pembelian Saldo *YussXy*.%0A%0A`;
            message += `📦 Detail:%0A`;
            message += `• Username: ${username}%0A`;
            message += `• Deposit Saldo Rp ${nominal.toLocaleString('id-ID')} %0A`;
            message += `• Waktu: ${jam} • ${tanggal} ${tahun}%0A`;
            message += `• ID: ${deviceId}%0A%0A`;
            message += `✅ Pembayaran sudah saya lakukan.%0A%0A`;
            message += `Mohon segera diproses untuk layanan yang telah saya pesan.%0A`;
            message += `Terima kasih 🙏`;
            
            window.open(`https://wa.me/${ADMIN_PHONE_NUMBER}?text=${message}`, '_blank');
        }
        else if (window.pendingOrder.isWebsiteOrder && window.pendingOrder.websiteData) {
            const data = window.pendingOrder.websiteData;
            const { jam, tanggal, tahun } = getCurrentDateTime();
            
            const savedUser = localStorage.getItem('app_user');
            let username = 'Tidak diketahui';
            if (savedUser) {
                try {
                    const userData = JSON.parse(savedUser);
                    username = userData.username || userData.name || 'Tidak diketahui';
                } catch(e) {}
            }
            
            let message = `Halo Yuss Xy 👋%0A%0A`;
            message += `Saya ingin memesan *Website Store*.%0A%0A`;
            message += `📦 DETAIL PESANAN WEBSITE%0A%0A`;
            message += `• Username: ${username}%0A`;
            message += `• Nama Website: ${data.webName}%0A`;
            message += `• Nama Owner: ${data.ownerName}%0A`;
            message += `• Telegram: ${data.telegramLink || '-'}%0A`;
            message += `• Instagram: ${data.instagramLink || '-'}%0A`;
            message += `• WhatsApp Owner: ${data.ownerWA}%0A`;
            message += `• WhatsApp Admin: ${data.adminWA || '-'}%0A`;
            message += `• Harga: Rp ${data.productPrice.toLocaleString('id-ID')}%0A%0A`;
            message += `✅ Pembayaran sudah saya lakukan.%0A%0A`;
            message += `Mohon segera diproses untuk pembuatan website store saya.%0A`;
            message += `Terima kasih 🙏%0A%0A`;
            message += `Waktu: ${jam} • ${tanggal} ${tahun}`;
            
            window.open(`https://wa.me/${ADMIN_PHONE_NUMBER}?text=${message}`, '_blank');
        }
        else if (window.pendingOrder.isBugService || (window.pendingBugTarget && !window.pendingOrder.bugTarget)) {
            if (window.pendingBugTarget && !window.pendingOrder.bugTarget) {
                window.pendingOrder.bugTarget = window.pendingBugTarget;
                window.pendingOrder.isBugService = true;
            }
            sendWhatsAppConfirmation(window.pendingOrder);
        }
        else {
            sendWhatsAppConfirmation(window.pendingOrder);
        }
        
        cart = [];
        saveCart();
        renderCart();
        
        const modal = document.getElementById('qrisModal');
        if (modal) modal.classList.remove('active');
        
        navigateToPage('products');
        
        showToast('✅ Pesanan berhasil dikonfirmasi!');
        
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
    loadUserStatistics();
    getSaldo();
    loadLoginInfo();
    
    
    
    
    
    
    
    
    
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








(async () => {

    const deviceId = localStorage.getItem('device_fingerprint');
    if (!deviceId) return;

    try {

        const res = await fetch(
            `https://backend-delta-steel-38.vercel.app/api/cekban?device_id=${encodeURIComponent(deviceId)}`,
            { cache: "no-store" }
        );

        const data = await res.json();

        const isBanned = data?.banned === true;

        // ================= BANNED =================
        if (isBanned) {

            localStorage.setItem("ban_state", "banned");

            if (!location.pathname.includes("ban/ban.html")) {
                location.replace("ban/ban.html");
            }

            return;
        }

        // ================= NOT BANNED =================
        const lastState = localStorage.getItem("ban_state");

        if (lastState === "banned" && !isBanned) {

            localStorage.setItem("ban_state", "unbanned");

            if (!location.pathname.includes("ban/unban.html")) {
                location.replace("ban/unban.html");
            }

            return;
        }

        // reset kalau normal
        localStorage.setItem("ban_state", "ok");

    } catch (err) {
        console.error("cekban error:", err);
    }

})();



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
// FUNGSI TIKTOK DOWNLOADER - API NANZZ (FIXED)
// ================================================

const downloadTiktokBtn = document.getElementById('downloadTiktokBtn');
const tiktokUrlInput = document.getElementById('tiktokUrl');
const tiktokResult = document.getElementById('tiktokResult');

if (downloadTiktokBtn) {
    downloadTiktokBtn.addEventListener('click', async function() {
        let url = tiktokUrlInput.value.trim();
        if (!url) {
            showToast('Masukkan URL TikTok!', true);
            return;
        }

        tiktokResult.style.display = 'block';
        tiktokResult.innerHTML = '<div class="result-loading"><i class="ri-loader-4-line" style="animation: spin 1s linear infinite;"></i> Memproses video...</div>';

        try {
            const encodedUrl = encodeURIComponent(url);
            
            // COBA API NANZZ
            const apiUrl1 = `https://api-nanzz.my.id/docs/api/donwloader/tiktok.php?url=${encodedUrl}`;
            
            let response = await fetch(apiUrl1);
            let data = await response.json();

            // Jika NANZZ gagal, coba API CADANGAN (siputzx)
            if (!data.status || !data.data || !data.data.video_tanpa_watermark) {
                console.log('API NANZZ gagal, coba API cadangan...');
                
                const apiUrl2 = `https://api.siputzx.my.id/api/d/tiktok?url=${encodedUrl}`;
                response = await fetch(apiUrl2);
                data = await response.json();
                
                if (data.status && data.data && data.data.media) {
                    // Ambil video dari media array
                    let videoUrl = null;
                    let quality = 'SD';
                    
                    const hdMedia = data.data.media.find(m => m.type === 'video_hd' || m.quality === 'HD');
                    if (hdMedia && (hdMedia.url || hdMedia.backup)) {
                        videoUrl = hdMedia.url || hdMedia.backup;
                        quality = 'HD';
                    } else {
                        const sdMedia = data.data.media.find(m => m.type === 'video' || m.quality === 'SD');
                        if (sdMedia && sdMedia.url) {
                            videoUrl = sdMedia.url;
                            quality = 'SD';
                        }
                    }
                    
                    if (videoUrl) {
                        const cleanTitle = (data.data.title || 'Video_Tiktok').replace(/[^a-z0-9]/gi, '_').substring(0, 40);
                        const fileName = `YussXy-Tools-${cleanTitle}.mp4`;
                        
                        let html = `
                            <div class="result-thumb">
                                <img src="${data.data.thumbnail || ''}" alt="Thumbnail" onerror="this.src='https://placehold.co/80x142/333/white?text=No+Image'">
                                <div class="result-info-small">
                                    <p><strong>${(data.data.title || 'No Title').substring(0, 60)}</strong></p>
                                    <p>Author: ${data.data.author || 'Unknown'}</p>
                                    <p>Kualitas: ${quality}</p>
                                </div>
                            </div>
                            <button class="direct-download-btn" id="directDownloadBtn">
                                <i class="ri-download-line"></i> Download Video (${quality})
                            </button>
                        `;
                        tiktokResult.innerHTML = html;

                        document.getElementById('directDownloadBtn').addEventListener('click', function() {
                            const link = document.createElement('a');
                            link.href = videoUrl;
                            link.download = fileName;
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                            showToast('Download dimulai...');
                        });

                        showToast('Video siap download!');
                        return;
                    }
                }
                
                // Jika semua gagal
                tiktokResult.innerHTML = `<div class="result-error">Gagal memproses video. Cek URL atau coba lagi nanti.</div>`;
                showToast('Gagal memproses video', true);
                return;
            }

            // PROSES DATA DARI API NANZZ
            const result = data.data;
            const videoUrl = result.video_tanpa_watermark;
            const audioUrl = result.audio_mp3;
            const caption = result.caption || 'No caption';
            const author = result.author || 'Unknown';

            // CEK URL VALID
            if (!videoUrl || videoUrl.includes('null') || videoUrl === 'null') {
                tiktokResult.innerHTML = `<div class="result-error">Link video tidak valid atau expired. Coba lagi.</div>`;
                showToast('Link video tidak valid', true);
                return;
            }

            const cleanTitle = (caption || 'Video_Tiktok').replace(/[^a-z0-9]/gi, '_').substring(0, 40);
            const fileName = `YussXy-Tools-${cleanTitle}.mp4`;

            let html = `
                <div class="result-thumb">
                    <div class="result-info-small">
                        <p><strong>${caption.substring(0, 60)}${caption.length > 60 ? '...' : ''}</strong></p>
                        <p>Author: ${author}</p>
                    </div>
                </div>
                <div class="result-buttons">
                    <button class="direct-download-btn" id="directDownloadBtn">
                        <i class="ri-download-line"></i> Download Video
                    </button>
            `;

            if (audioUrl && audioUrl !== 'null' && !audioUrl.includes('null')) {
                html += `
                    <button class="direct-download-btn audio-btn" id="directDownloadAudioBtn">
                        <i class="ri-music-line"></i> Download Audio
                    </button>
                `;
            }

            html += `</div>`;
            tiktokResult.innerHTML = html;

            document.getElementById('directDownloadBtn').addEventListener('click', function() {
                const link = document.createElement('a');
                link.href = videoUrl;
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                showToast('Download video dimulai...');
            });

            const audioBtn = document.getElementById('directDownloadAudioBtn');
            if (audioBtn) {
                audioBtn.addEventListener('click', function() {
                    const link = document.createElement('a');
                    link.href = audioUrl;
                    link.download = `${cleanTitle}.mp3`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    showToast('Download audio dimulai...');
                });
            }

            showToast('Video siap download!');

        } catch (error) {
            console.error('TikTok download error:', error);
            tiktokResult.innerHTML = `<div class="result-error">Error: ${error.message}</div>`;
            showToast('Gagal koneksi ke server', true);
        }
    });
}



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
// MODAL APLIKASI PREMIUM (BOTTOM SHEET)
// ================================================

function showAppBundleModal() {
    const modal = document.getElementById('premiumAppsModal');
    const appsList = document.getElementById('premiumAppsList');
    
    if (!modal || !appsList) return;
    
    // Data aplikasi premium
    const premiumAppsData = [
        { id: 1, name: "Alight Motion Premium", price: 4500, icon: "ri-film-line", status: "available", description: "1 tahun" },
        { id: 2, name: "Canva Pro", price: 4000, icon: "ri-palette-line", status: "available", description: "1 bulan" },
        { id: 3, name: "Disney+ Sharing", price: 27000, icon: "ri-movie-line", status: "available", description: "1 bulan" },
        { id: 4, name: "Viu Premium", price: 3000, icon: "ri-tv-line", status: "available", description: "Lifetime" },
        { id: 5, name: "Spotify Premium", price: 20500, icon: "ri-spotify-line", status: "sold_out", description: "1 bulan" },
        { id: 6, name: "CapCut Premium", price: 21000, icon: "ri-video-line", status: "coming_soon", description: "1 bulan" }
    ];
    
    // Render grid aplikasi
    appsList.innerHTML = `
        <div class="premium-apps-grid">
            ${premiumAppsData.map(app => {
                let statusBadge = '';
                let disabledClass = '';
                
                if (app.status === 'available') {
                    statusBadge = '<span class="premium-app-badge badge-available">Tersedia</span>';
                } else if (app.status === 'sold_out') {
                    statusBadge = '<span class="premium-app-badge badge-sold-out">Habis</span>';
                    disabledClass = 'disabled';
                } else if (app.status === 'coming_soon') {
                    statusBadge = '<span class="premium-app-badge badge-coming-soon">Segera</span>';
                    disabledClass = 'disabled';
                }
                
                return `
                    <div class="premium-app-card ${disabledClass}" data-app-id="${app.id}" data-app-name="${app.name}" data-app-price="${app.price}" data-app-status="${app.status}">
                        <div class="premium-app-icon">
                            <i class="${app.icon}"></i>
                        </div>
                        <div class="premium-app-name">${app.name}</div>
                        <div class="premium-app-price">Rp ${app.price.toLocaleString('id-ID')}</div>
                        ${statusBadge}
                        <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px;">${app.description}</div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
    
    // Event listener untuk setiap card aplikasi
    document.querySelectorAll('.premium-app-card').forEach(card => {
        card.addEventListener('click', () => {
            const appId = parseInt(card.dataset.appId);
            const appName = card.dataset.appName;
            const appPrice = parseInt(card.dataset.appPrice);
            const appStatus = card.dataset.appStatus;
            
            if (appStatus !== 'available') {
                if (appStatus === 'sold_out') {
                    showToast('❌ Aplikasi sedang habis!', true);
                } else if (appStatus === 'coming_soon') {
                    showToast('⏳ Aplikasi akan segera hadir!', true);
                }
                return;
            }
            
            // Tutup modal
            closePremiumAppsModal();
            
            // Proses pembelian
            processPremiumAppPurchase(appId, appName, appPrice);
        });
    });
    
    modal.classList.add('active');
    document.body.classList.add('modal-open');
}

function closePremiumAppsModal() {
    const modal = document.getElementById('premiumAppsModal');
    if (modal) {
        modal.classList.add('closing');
        setTimeout(() => {
            modal.classList.remove('active', 'closing');
            document.body.classList.remove('modal-open');
        }, 250);
    }
}

// Proses pembelian aplikasi premium
async function processPremiumAppPurchase(appId, appName, appPrice) {
    // Ambil data user dari localStorage
    const savedUser = localStorage.getItem('app_user');
    if (!savedUser) {
        showToast('❌ Silakan login terlebih dahulu!', true);
        return;
    }
    
    let userData;
    try {
        userData = JSON.parse(savedUser);
    } catch(e) {
        showToast('❌ Gagal membaca data user', true);
        return;
    }
    
    const username = userData.username;
    if (!username) {
        showToast('❌ Username tidak ditemukan!', true);
        return;
    }
    
    // Tampilkan loading
    showToast('⏳ Memeriksa saldo...');
    
    try {
        // Cek saldo user
        const balanceRes = await fetch('https://backend-delta-steel-38.vercel.app/api/balance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF'
            },
            body: JSON.stringify({
                action: 'get',
                username: username
            })
        });
        
        const balanceData = await balanceRes.json();
        const currentBalance = balanceData.data?.balance || 0;
        
        if (currentBalance < appPrice) {
            showToast(`❌ Saldo tidak cukup! Saldo: Rp ${currentBalance.toLocaleString('id-ID')}`, true);
            return;
        }
        
        // Tampilkan QRIS untuk pembayaran (karena ini masih manual via WhatsApp dulu)
        const qrTotal = document.getElementById('qrTotal');
        if (qrTotal) qrTotal.textContent = `Rp ${appPrice.toLocaleString('id-ID')}`;
        
        showQrisModalWithButton();
        
        window.pendingOrder = {
            items: [{ name: appName, quantity: 1 }],
            totalItems: 1,
            totalPrice: appPrice,
            isPremiumApp: true,
            appId: appId,
            appName: appName
        };
        
    } catch (error) {
        console.error('Error:', error);
        showToast('❌ Gagal memproses pesanan', true);
    }
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


let originalProducts = [...products];


async function renderProductsWithSkeleton() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    
    showSkeletonLoading();
    

    setTimeout(() => {
        renderProducts();
    }, 300);
}





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


function normalizeEmoji(input) {
    return input
        .replace(/\s/g, ",")          // spasi → koma
        .split(",")                   // pecah
        .map(e => e.trim())
        .filter(Boolean)
        .join(",");
}



// =============================
// VALID LINK CHANNEL MESSAGE
// =============================


function isValidChannelLink(url) {
    return /^https:\/\/whatsapp\.com\/channel\/[a-zA-Z0-9]+\/\d+$/.test(url);
}

function showReaction1000Modal(product) {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.style.display = 'flex';

    modal.innerHTML = `
        <div class="modal-content" style="max-width: 360px;">
            <div class="modal-header">
                <h3><i class="ri-whatsapp-line"></i> ${product.name}</h3>
                <button class="modal-close" onclick="this.closest('.modal').remove()">
                    <i class="ri-close-line"></i>
                </button>
            </div>

            <div class="modal-body" id="reactionBody" style="text-align:left;">
                <p style="font-size:13px;color:var(--text-secondary);margin-bottom:10px;">
                    ${product.description}
                </p>

                <p style="font-size:18px;font-weight:700;color:var(--accent);margin-bottom:10px;">
                    Harga: Rp ${product.price.toLocaleString('id-ID')}
                </p>

                <div class="deposit-info" style="margin-bottom:16px;background:rgba(16,185,129,0.1);">
                    <i class="ri-information-line"></i>
                    <span>1000 reaction akan dikirim ke pesan saluran</span>
                </div>

                <label style="font-size:13px;font-weight:600;margin-bottom:8px;display:block;">
                    <i class="ri-link"></i> Link Pesan Saluran
                </label>
                <input id="reactionLinkInput"
                    placeholder="https://whatsapp.com/channel/xxxxx/1234"
                    style="width:100%;padding:12px;border-radius:12px;background:var(--bg-secondary);border:1px solid var(--border);color:white;margin-bottom:10px;">

                <label style="font-size:13px;font-weight:600;margin-bottom:8px;display:block;">
                    <i class="ri-emotion-line"></i> Emoji (pisahkan dengan koma)
                </label>
                <input id="reactionEmojiInput"
                    placeholder="😄,🔥,😍"
                    style="width:100%;padding:12px;border-radius:12px;background:var(--bg-secondary);border:1px solid var(--border);color:white;font-size:18px;margin-bottom:10px;">

                <div class="deposit-info" style="margin-bottom:16px;background:rgba(245,158,11,0.1);">
                    <i class="ri-wallet-line"></i>
                    <span>Saldo akan dipotong <strong>Rp ${product.price.toLocaleString('id-ID')}</strong> jika berhasil</span>
                </div>

                <button id="processReaction1000Btn"
                    style="width:100%;padding:14px;border-radius:12px;background:#e53935;color:#fff;font-weight:700;font-size:16px;">
                    <i class="ri-flashlight-line"></i> Kirim 1000 Reaction
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const btn = document.getElementById('processReaction1000Btn');

    btn.addEventListener('click', async () => {
        const link = document.getElementById('reactionLinkInput').value.trim();
        let emoji = document.getElementById('reactionEmojiInput').value.trim();
        
        // Ambil data user dari localStorage (hasil login)
        const savedUser = localStorage.getItem('app_user');
        let targetIdentifier = null;
        
        if (savedUser) {
            try {
                const userData = JSON.parse(savedUser);
                targetIdentifier = userData.username || userData.phone;
            } catch(e) {}
        }
        
        if (!targetIdentifier) {
            showToast("User tidak ditemukan, silakan login ulang", true);
            return;
        }

        if (!link || !emoji) return showToast("Isi link & emoji", true);

        if (!isValidChannelLink(link)) {
            return showToast("Link harus format channel message (contoh: .../channel/xxx/1234)", true);
        }

        if (!emoji.includes(",")) {
            return showToast("Emoji wajib dipisah koma", true);
        }

        emoji = normalizeEmoji(emoji);

        btn.disabled = true;
        btn.innerHTML = '<div class="loading-spinner" style="width:20px;height:20px;"></div> Memproses...';

        try {
            // =========================
            // CARI USER BERDASARKAN USERNAME ATAU NOMOR HP
            // =========================
            const searchRes = await fetch("https://backend-delta-steel-38.vercel.app/api/balance", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF"
                },
                body: JSON.stringify({
                    action: "search_user",
                    query: targetIdentifier
                })
            });

            const searchData = await searchRes.json();
            
            if (!searchData.success || !searchData.data) {
                showToast("User tidak ditemukan di database", true);
                btn.disabled = false;
                btn.innerHTML = '<i class="ri-flashlight-line"></i> Kirim 1000 Reaction';
                return;
            }
            
            // ✅ AMBIL USERNAME UNTUK POTONG SALDO (bukan device_id)
            const username = searchData.data.username;
            const currentBalance = searchData.data.balance || 0;
            
            if (!username) {
                showToast("User tidak memiliki username", true);
                btn.disabled = false;
                btn.innerHTML = '<i class="ri-flashlight-line"></i> Kirim 1000 Reaction';
                return;
            }

            // =========================
            // CEK SALDO
            // =========================
            if (currentBalance < product.price) {
                showToast(`Saldo tidak cukup! Saldo: Rp ${currentBalance.toLocaleString('id-ID')}`, true);
                btn.disabled = false;
                btn.innerHTML = '<i class="ri-flashlight-line"></i> Kirim 1000 Reaction';
                return;
            }

            // =========================
            // KIRIM RCWA
            // =========================
            const rcRes = await fetch("https://backend-delta-steel-38.vercel.app/api/rc", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF"
                },
                body: JSON.stringify({
                    type: "send",
                    target: "6283159657382@s.whatsapp.net",
                    message: `.chreact ${link} ${emoji}`
                })
            });

            const rcData = await rcRes.json();
            if (!rcData.success) throw new Error("Gagal kirim bot");

            // =========================
            // ✅ POTONG SALDO MENGGUNAKAN USERNAME (bukan device_id)
            // =========================
            const sub = await fetch("https://backend-delta-steel-38.vercel.app/api/balance", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF"
                },
                body: JSON.stringify({
                    action: "sub",
                    username: username,  // ✅ PAKAI USERNAME, BUKAN DEVICE_ID
                    amount: product.price
                })
            });

            const subData = await sub.json();
            if (!subData.success) throw new Error("Gagal potong saldo");

            // =========================
            // SIMPAN TRANSAKSI KE DATABASE
            // =========================
            const transactionId = 'TRX' + Date.now().toString().slice(-8) + Math.floor(Math.random() * 1000);
            const { jam, tanggal, tahun } = getCurrentDateTime();
            
            const saveTransRes = await fetch("https://backend-delta-steel-38.vercel.app/api/balance", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF"
                },
                body: JSON.stringify({
                    action: "add_transaction",
                    username: username,  // ✅ PAKAI USERNAME, BUKAN DEVICE_ID
                    trx_id: {
                        id: transactionId,
                        product_id: product.id,
                        product_name: product.name,
                        type: "reaction",
                        amount: product.price,
                        target_link: link,
                        emoji: emoji,
                        status: "success",
                        created_at: new Date().toISOString()
                    }
                })
            });
            
            const saveTransData = await saveTransRes.json();
            if (!saveTransData.success) {
                console.warn('Transaksi gagal disimpan:', saveTransData.message);
            }





await sendTestimoniToChannel(
    product.name,
    '1000 Reaction',
    username,
    product.price,
    transactionId,
    username
);







            // =========================
            // RESULT UI (TIDAK CLOSE MODAL)
            // =========================
            document.getElementById("reactionBody").innerHTML = `
                <div style="background: linear-gradient(145deg, #0f172a, #0a0f1a); padding: 24px 20px; border-radius: 24px; color: #fff; text-align: center; border: 1px solid rgba(16, 185, 129, 0.2);">
                    
                    <div style="display: flex; justify-content: center; margin-bottom: 16px;">
                        <div style="background: linear-gradient(135deg, #10b981, #059669); width: 70px; height: 70px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);">
                            <i class="ri-check-line" style="font-size: 40px; color: white;"></i>
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(90deg, #10b981, #059669); padding: 4px 16px; border-radius: 40px; display: inline-block; margin-bottom: 20px;">
                        <b style="font-size: 14px;">REACTION TERKIRIM</b>
                    </div>
                    
                    <div style="background: rgba(16, 185, 129, 0.1); border-radius: 16px; padding: 16px; margin-bottom: 20px; text-align: left;">
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <i class="ri-whatsapp-line" style="font-size: 20px; color: #10b981;"></i>
                            <span><b>${product.name}</b></span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                            <i class="ri-link" style="font-size: 20px; color: #f59e0b;"></i>
                            <span>Link: <b style="color: #f59e0b; word-break: break-all;">${link.substring(0, 50)}${link.length > 50 ? '...' : ''}</b></span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                            <i class="ri-emotion-line" style="font-size: 20px; color: #f59e0b;"></i>
                            <span>Emoji: <b style="color: #f59e0b;">${emoji}</b></span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                            <i class="ri-money-dollar-circle-line" style="font-size: 20px; color: #f59e0b;"></i>
                            <span>Harga: <b style="color: #f59e0b;">Rp ${product.price.toLocaleString('id-ID')}</b></span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <i class="ri-wallet-line" style="font-size: 20px; color: #3b82f6;"></i>
                            <span>Sisa Saldo: <b style="color: #3b82f6;">Rp ${subData.data.balance.toLocaleString('id-ID')}</b></span>
                        </div>
                    </div>
                    
                    <div style="background: rgba(16, 185, 129, 0.15); border-radius: 12px; padding: 12px;">
                        <i class="ri-checkbox-circle-line" style="color: #10b981; font-size: 16px; margin-right: 6px;"></i>
                        <span style="color: #10b981;">✅ 1000 reaction telah dikirim ke pesan saluran!</span>
                    </div>
                    
                    <div style="margin-top: 20px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.1);">
                        <span style="font-size: 11px; color: #64748b;">ID Transaksi: ${transactionId}</span>
                        <br>
                        <span style="font-size: 10px; color: #64748b;">Username: ${username}</span>
                    </div>
                </div>
            `;

            // Refresh saldo di halaman utama
            if (typeof getSaldo === 'function') {
                getSaldo();
            }
            
            // Refresh riwayat jika halaman history terbuka
            if (typeof loadHistory === 'function' && document.getElementById('historyPage').classList.contains('active')) {
                loadHistory();
            }

        } catch (err) {
            console.error(err);
            showToast("Error: " + err.message, true);
            document.getElementById("reactionBody").innerHTML = `
                <div style="background: #111; padding: 20px; border-radius: 12px; text-align: center;">
                    <i class="ri-error-warning-line" style="font-size: 48px; color: #ef4444;"></i>
                    <p style="color: #ef4444; margin-top: 12px;">❌ Gagal memproses reaction</p>
                    <p style="font-size: 12px; color: var(--text-secondary);">${err.message}</p>
                    <button onclick="location.reload()" style="margin-top: 16px; padding: 8px 16px; background: var(--accent); border: none; border-radius: 30px; color: white; cursor: pointer;">Tutup</button>
                </div>
            `;
        }

        btn.disabled = false;
        btn.innerHTML = '<i class="ri-flashlight-line"></i> Kirim 1000 Reaction';
    });
}


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


//🫴😁👍🏿😁👍🏿😁👍🏿👍🏿😁



function showDepositBottomSheet() {
  const savedUser = localStorage.getItem('app_user');
  let username = 'kamu';
  if (savedUser) {
    try {
      const userData = JSON.parse(savedUser);
      username = userData.username || userData.name || 'kamu';
    } catch(e) {}
  }

  const overlay = document.createElement('div');
  overlay.className = 'deposit-overlay';
  overlay.innerHTML = `
    <div class="deposit-bottom-sheet">
      <div class="deposit-handle"></div>
      <div class="deposit-header">
        <i class="ri-wallet-3-line"></i>
        <h3>Deposit Saldo</h3>
        <button class="deposit-close-btn" id="closeDepositSheet">
          <i class="ri-close-line"></i>
        </button>
      </div>
      <div class="deposit-body">
        <div class="deposit-info" style="background: rgba(16,185,129,0.1); margin-bottom:16px;">
          <i class="ri-information-line"></i>
          <span>Saldo akan masuk ke username <strong>${username}</strong></span>
        </div>

        <div class="deposit-input-group">
          <label><i class="ri-money-dollar-circle-line"></i> Jumlah Deposit</label>
          <input type="number" id="depositAmount" placeholder="Minimal Rp 500" min="500" step="1000">
        </div>

        <div class="deposit-suggest">
          <button class="suggest-btn" data-nominal="1000">Rp1.000</button>
          <button class="suggest-btn" data-nominal="10000">Rp10.000</button>
          <button class="suggest-btn" data-nominal="50000">Rp50.000</button>
          <button class="suggest-btn" data-nominal="100000">Rp100.000</button>
        </div>

        <div style="display: flex; gap: 10px; margin-top: 8px;">
          <button class="deposit-bayar-btn" id="depositOtomatisBtn" style="flex: 1; background: linear-gradient(90deg, #10b981, #059669);">
            <i class="ri-qr-code-line"></i> Otomatis
          </button>
          <button class="deposit-bayar-btn" id="depositManualBtn" style="flex: 1; background: linear-gradient(90deg, #f59e0b, #d97706);">
            <i class="ri-whatsapp-line"></i> Manual
          </button>
        </div>

        <div style="margin-top: 10px; text-align: center; font-size: 10px; color: var(--text-secondary);">
          <i class="ri-information-line"></i> Otomatis: QRIS dinamis + cek status otomatis | Manual: QRIS statis + konfirmasi WA
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('show'), 10);

  document.getElementById('closeDepositSheet').addEventListener('click', function() {
    overlay.classList.remove('show');
    setTimeout(function() { overlay.remove(); }, 300);
  });

  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      overlay.classList.remove('show');
      setTimeout(function() { overlay.remove(); }, 300);
    }
  });

  document.querySelectorAll('.suggest-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.getElementById('depositAmount').value = this.dataset.nominal;
    });
  });

  document.getElementById('depositOtomatisBtn').addEventListener('click', function() {
    const input = document.getElementById('depositAmount');
    let nominal = parseInt(input.value);
    
    if (isNaN(nominal) || nominal < 500) {
      showToast('Minimal deposit Rp 500', true);
      return;
    }

    overlay.classList.remove('show');
    setTimeout(function() { overlay.remove(); }, 300);

    createDepositOtomatis(nominal);
  });

  document.getElementById('depositManualBtn').addEventListener('click', function() {
    const input = document.getElementById('depositAmount');
    let nominal = parseInt(input.value);
    
    if (isNaN(nominal) || nominal < 500) {
      showToast('Minimal deposit Rp 500', true);
      return;
    }

    overlay.classList.remove('show');
    setTimeout(function() { overlay.remove(); }, 300);

    createDepositManual(nominal);
  });
}


function showQrisManualModal(username, amount, qrisImage, jam, tanggal, tahun, deviceId) {
  const overlay = document.createElement('div');
  overlay.className = 'deposit-overlay';
  overlay.innerHTML = `
    <div class="deposit-bottom-sheet qris-deposit-sheet">
      <div class="deposit-handle"></div>
      <div class="deposit-header">
        <i class="ri-qr-code-line"></i>
        <h3>Deposit Manual</h3>
        <button class="deposit-close-btn" id="closeManualQris">
          <i class="ri-close-line"></i>
        </button>
      </div>
      <div class="deposit-body" style="text-align: center; padding: 0 16px 20px;">
        
        <div class="deposit-info" style="margin-bottom: 16px; background: rgba(245,158,11,0.1);">
          <i class="ri-information-line"></i>
          <span>Bayar <strong>Rp ${amount.toLocaleString('id-ID')}</strong> ke QRIS di bawah</span>
        </div>

        <div style="background: #ffffff; border-radius: 20px; padding: 16px; margin-bottom: 16px;">
          <img id="manualQrisImage" 
               src="${qrisImage}" 
               alt="QRIS" 
               style="width: 100%; max-width: 320px; height: auto; aspect-ratio: 1/1; object-fit: contain; margin: 0 auto; display: block; cursor: pointer;"
               onerror="this.src='https://placehold.co/320x320/333/white?text=QRIS'">
          <p style="font-size: 10px; color: #64748b; margin-top: 8px;">
            <i class="ri-zoom-in-line"></i> Klik gambar untuk memperbesar
          </p>
        </div>

        <div style="display: flex; gap: 10px;">
          <button id="manualConfirmWaBtn" class="deposit-bayar-btn" style="flex: 1; background: linear-gradient(90deg, #25D366, #128C7E);">
            <i class="ri-whatsapp-line"></i> Konfirmasi via WhatsApp
          </button>
        </div>

        <p style="font-size: 10px; color: var(--text-secondary); margin-top: 12px;">
          <i class="ri-time-line"></i> Setelah bayar, klik Konfirmasi untuk kirim pesan ke admin
        </p>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  setTimeout(function() { overlay.classList.add('show'); }, 10);

  var qrisImg = document.getElementById('manualQrisImage');
  if (qrisImg) {
    qrisImg.addEventListener('click', function() {
      if (this.src && !this.src.includes('placehold')) {
        showZoomImage(this.src);
      }
    });
  }

  document.getElementById('closeManualQris').addEventListener('click', function() {
    overlay.classList.remove('show');
    setTimeout(function() { overlay.remove(); }, 300);
  });

  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      overlay.classList.remove('show');
      setTimeout(function() { overlay.remove(); }, 300);
    }
  });

  document.getElementById('manualConfirmWaBtn').addEventListener('click', function() {
    var message = 
      'Halo Yuss Xy 👋\n\n' +
      'Saya ingin melakukan konfirmasi deposit manual.\n\n' +
      '📦 Detail Deposit:\n' +
      '• Username: ' + username + '\n' +
      '• Jumlah Deposit: Rp ' + amount.toLocaleString('id-ID') + '\n' +
      '• Waktu: ' + jam + ' • ' + tanggal + ' ' + tahun + '\n' +
      '• Device ID: ' + deviceId + '\n\n' +
      '✅ Pembayaran sudah saya lakukan.\n\n' +
      'Mohon segera diproses.\n' +
      'Terima kasih 🙏';

    window.open('https://wa.me/6283183469343?text=' + encodeURIComponent(message), '_blank');
    showToast('Pesan konfirmasi terkirim ke admin');

    overlay.classList.remove('show');
    setTimeout(function() { overlay.remove(); }, 300);
  });
}


function createDepositManual(amount) {
  console.log('createDepositManual dipanggil, amount:', amount);
  
  const savedUser = localStorage.getItem('app_user');
  if (!savedUser) {
    showToast('Silakan login terlebih dahulu', true);
    return;
  }

  let userData;
  try {
    userData = JSON.parse(savedUser);
  } catch(e) {
    showToast('Gagal membaca data user', true);
    return;
  }

  const username = userData.username || userData.name;
  if (!username) {
    showToast('Username tidak ditemukan!', true);
    return;
  }

  if (!amount || amount < 500) {
    showToast('Minimal deposit Rp 500', true);
    return;
  }

  // ===== TIDAK ADA CEK STORE CLOSE =====
  // DEPOSIT MANUAL TETAP BISA

  const { jam, tanggal, tahun } = getCurrentDateTime();
  const deviceId = localStorage.getItem('device_fingerprint') || 'Tidak tersedia';

  const qrisImage = 'image/qris/qris.jpg';
  
  showQrisManualModal(username, amount, qrisImage, jam, tanggal, tahun, deviceId);
}



async function checkDepositStatus() {
  const statusText = document.getElementById('depositStatusText');
  
  if (statusText) {
    statusText.innerHTML = '<div class="loading-spinner"></div> Mengecek status pembayaran...';
  }
  
  try {
    const response = await fetch('https://backend-delta-steel-38.vercel.app/api/pakasir', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF'
      },
      body: JSON.stringify({
        action: 'check_status',  // ← BUAT ENDPOINT BARU
        order_id: depositData.order_id
      })
    });
    
    const data = await response.json();
    
    if (data.status === 'completed') {
      // Baru sukses
      statusText.innerHTML = '✅ Pembayaran BERHASIL!';
      getSaldo();
      setTimeout(() => closeModal(), 2000);
    } else if (data.status === 'pending') {
      statusText.innerHTML = '⏳ Menunggu pembayaran...';
    } else if (data.status === 'expired') {
      statusText.innerHTML = '❌ QRIS sudah kadaluarsa. Silakan deposit ulang.';
    }
  } catch (error) {
    statusText.innerHTML = '❌ Gagal cek status';
  }
}







function showDepositConfirmationModal(orderId, nominal, username) {
    let modal = document.getElementById('depositConfirmModal');
    if (modal) modal.remove();
    
    modal = document.createElement('div');
    modal.id = 'depositConfirmModal';
    modal.className = 'modal active';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 340px;">
            <div class="modal-header">
                <h3><i class="ri-wallet-3-line"></i> Konfirmasi Deposit</h3>
                <button class="modal-close" onclick="closeDepositConfirmModal()">
                    <i class="ri-close-line"></i>
                </button>
            </div>
            <div class="modal-body" style="text-align: center;">
                <div style="margin-bottom: 16px;">
                    <i class="ri-information-line" style="font-size: 48px; color: #f59e0b;"></i>
                </div>
                <p style="font-weight: 700; font-size: 16px;">Menunggu Konfirmasi Pembayaran</p>
                <p style="font-size: 13px; color: var(--text-secondary); margin-top: 8px;">
                    Deposit <strong>Rp ${nominal.toLocaleString('id-ID')}</strong>
                </p>
                <div class="deposit-info" style="margin: 16px 0; background: rgba(59,130,246,0.1);">
                    <i class="ri-information-line"></i>
                    <span>Order ID: <strong>${orderId}</strong></span>
                </div>
                <p style="font-size: 12px; color: var(--text-secondary);">
                    Setelah melakukan pembayaran, klik tombol di bawah untuk konfirmasi.
                </p>
                <button id="confirmDepositBtn" class="confirm-payment-btn" style="margin-top: 20px; background: #10b981;">
                    <i class="ri-whatsapp-line"></i> Konfirmasi Pembayaran
                </button>
                <button id="checkStatusBtn" style="margin-top: 12px; background: transparent; border: 1px solid var(--border); padding: 10px; border-radius: 30px; color: var(--text-primary); width: 100%; cursor: pointer;">
                    <i class="ri-refresh-line"></i> Cek Status Deposit
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    const confirmBtn = document.getElementById('confirmDepositBtn');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            const { jam, tanggal, tahun } = getCurrentDateTime();
            const deviceId = localStorage.getItem('device_fingerprint') || 'Tidak tersedia';
            
            let message = `Halo Yuss Xy 👋%0A%0A`;
            message += `Saya ingin melakukan konfirmasi deposit saldo.%0A%0A`;
            message += `📦 Detail Deposit:%0A`;
            message += `• Username: ${username}%0A`;
            message += `• Order ID: ${orderId}%0A`;
            message += `• Jumlah Deposit: Rp ${nominal.toLocaleString('id-ID')}%0A`;
            message += `• Waktu: ${jam} • ${tanggal} ${tahun}%0A`;
            message += `• Device ID: ${deviceId}%0A%0A`;
            message += `✅ Pembayaran sudah saya lakukan.%0A%0A`;
            message += `Mohon segera diproses.%0A`;
            message += `Terima kasih 🙏`;
            
            window.open(`https://wa.me/6283183469343?text=${message}`, '_blank');
            showToast('✅ Pesan konfirmasi terkirim');
            
            setTimeout(() => {
                closeDepositConfirmModal();
            }, 2000);
        });
    }
    
    const checkBtn = document.getElementById('checkStatusBtn');
    if (checkBtn) {
        checkBtn.addEventListener('click', async () => {
            checkBtn.disabled = true;
            checkBtn.innerHTML = '<div class="loading-spinner" style="width: 16px; height: 16px;"></div> Mengecek...';
            
            try {
                const response = await fetch('https://backend-delta-steel-38.vercel.app/api/pakasir', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': 'sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF'
                    },
                    body: JSON.stringify({
                        action: 'manual_update',
                        order_id: orderId,
                        amount: nominal,
                        username: username
                    })
                });
                
                const data = await response.json();
                
                if (data.success) {
                    showToast(`✅ Deposit berhasil! Saldo baru: Rp ${data.new_balance.toLocaleString('id-ID')}`);
                    getSaldo();
                    closeDepositConfirmModal();
                } else {
                    showToast('❌ Deposit belum terverifikasi. Silakan konfirmasi via WhatsApp.', true);
                }
            } catch (error) {
                showToast('❌ Gagal cek status', true);
            } finally {
                checkBtn.disabled = false;
                checkBtn.innerHTML = '<i class="ri-refresh-line"></i> Cek Status Deposit';
            }
        });
    }
}






// ============================================================
// DEPOSIT OTOMATIS - PAKAI API + REDIRECT KE YUSS.HTML
// ============================================================


async function createDepositOtomatis(amount) {
  const savedUser = localStorage.getItem('app_user');
  if (!savedUser) {
    showToast('Silakan login terlebih dahulu', true);
    return;
  }

  let userData;
  try {
    userData = JSON.parse(savedUser);
  } catch(e) {
    showToast('Gagal membaca data user', true);
    return;
  }

  const username = userData.username;
  if (!username) {
    showToast('Username tidak ditemukan', true);
    return;
  }

  if (!amount || amount < 500) {
    showToast('Minimal deposit Rp 500', true);
    return;
  }

  showToast('Membuat permintaan deposit...');

  try {
    const response = await fetch('https://backend-delta-steel-38.vercel.app/api/deposit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        action: 'create',
        username: username,
        amount: amount
      })
    });

    const data = await response.json();

    if (!data.success) {
      showToast(data.message || 'Gagal membuat deposit', true);
      return;
    }

    const deposit = data.data;

    const url = 'yuss.html?' +
      'depositId=' + deposit.depositId +
      '&username=' + encodeURIComponent(username) +
      '&amount=' + deposit.amount +
      '&uniqueCode=' + deposit.uniqueCode +
      '&totalAmount=' + deposit.totalAmount +
      '&qrImage=' + encodeURIComponent(deposit.qrImage) +
      '&qrString=' + encodeURIComponent(deposit.qrString);

    console.log('Redirect ke:', url);
    window.location.href = url;

  } catch (error) {
    console.error('Error:', error);
    showToast('Gagal koneksi ke server', true);
  }
}



// ================================================
// FUNGSI TUTUP BOTTOM SHEET
// ================================================

function closeDepositSheet(overlay) {
    overlay.classList.remove('show');
    setTimeout(() => {
        overlay.remove();
    }, 300);
}



function closeDepositSheet(overlay) {
    overlay.classList.remove('show');
    setTimeout(() => {
        overlay.remove();
    }, 300);
}

function closeDepositSheet(overlay) {
    overlay.classList.remove('show');
    setTimeout(() => {
        overlay.remove();
    }, 300);
}






// Fungsi tutup bottom sheet dengan animasi
function closeDepositSheet(overlay) {
    overlay.classList.remove('show');
    setTimeout(() => {
        overlay.remove();
    }, 300);
}

// Event listener tombol deposit
document.addEventListener('DOMContentLoaded', function() {
    const depositBtn = document.getElementById('depositBtn');
    if (depositBtn) {
        depositBtn.addEventListener('click', showDepositBottomSheet);
    }
});

// Panggil fungsi getSaldo
async function testGetSaldo() {
    const savedUser = localStorage.getItem('app_user');
    console.log('=== GET SALDO ===');
    console.log('savedUser:', savedUser);
    
    if (!savedUser) {
        console.log('User tidak login');
        return;
    }
    
    const userData = JSON.parse(savedUser);
    const username = userData.username;
    console.log('Username yang dicari:', username);
    
    const res = await fetch("https://backend-delta-steel-38.vercel.app/api/balance", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF"
        },
        body: JSON.stringify({
            action: "search_user",
            query: username
        })
    });
    
    const data = await res.json();
    console.log('Hasil search_user:', data);
    
    if (data.success && data.data) {
        console.log('✅ Saldo yang didapat:', data.data.balance);
    } else {
        console.log('❌ User tidak ditemukan');
    }
}

testGetSaldo();

document.addEventListener("DOMContentLoaded", () => {
    getSaldo();
});



//🤏🤏🤏🤏🤏


function showApkOrderModal(product) {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.style.display = 'flex';

    modal.innerHTML = `
        <div class="modal-content" style="max-width: 360px;">
            <div class="modal-header">
                <h3><i class="ri-android-line"></i> ${product.name}</h3>
                <button class="modal-close" onclick="this.closest('.modal').remove()">
                    <i class="ri-close-line"></i>
                </button>
            </div>

            <div class="modal-body" id="apkOrderBody" style="text-align:left;">
                <p style="font-size:13px;color:var(--text-secondary);margin-bottom:10px;">
                    ${product.description}
                </p>

                <p style="font-size:18px;font-weight:700;color:var(--accent);margin-bottom:10px;">
                    Harga: Rp ${product.price.toLocaleString('id-ID')}
                </p>

                <div class="deposit-info" style="margin-bottom:16px;background:rgba(16,185,129,0.1);">
                    <i class="ri-information-line"></i>
                    <span>Link APK akan dikirim via WhatsApp</span>
                </div>

                <label style="font-size:13px;font-weight:600;margin-bottom:8px;display:block;">
                    <i class="ri-whatsapp-line"></i> Nomor WhatsApp
                </label>
                <select id="countryCodeSelect" style="width:100%;padding:12px;border-radius:12px;background:var(--bg-secondary);border:1px solid var(--border);color:white;margin-bottom:10px;">
                    <option value="62">🇮🇩 Indonesia (+62)</option>
                    <option value="60">🇲🇾 Malaysia (+60)</option>
                    <option value="65">🇸🇬 Singapore (+65)</option>
                    <option value="63">🇵🇭 Philippines (+63)</option>
                    <option value="66">🇹🇭 Thailand (+66)</option>
                    <option value="1">🇺🇸 USA (+1)</option>
                    <option value="44">🇬🇧 UK (+44)</option>
                    <option value="61">🇦🇺 Australia (+61)</option>
                    <option value="81">🇯🇵 Japan (+81)</option>
                    <option value="82">🇰🇷 South Korea (+82)</option>
                    <option value="86">🇨🇳 China (+86)</option>
                    <option value="91">🇮🇳 India (+91)</option>
                </select>

                <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px;">
                    <span style="background:var(--bg-secondary);padding:12px;border-radius:12px;border:1px solid var(--border);font-weight:700;" id="selectedCountryCode">+62</span>
                    <input type="tel" id="phoneNumberInput" placeholder="81234567890" 
                           style="flex:1;padding:12px;border-radius:12px;background:var(--bg-secondary);border:1px solid var(--border);color:white;font-size:14px;">
                </div>

                <div class="deposit-info" style="margin-bottom:16px;background:rgba(245,158,11,0.1);">
                    <i class="ri-wallet-line"></i>
                    <span>Saldo akan dipotong <strong>Rp ${product.price.toLocaleString('id-ID')}</strong> jika berhasil</span>
                </div>

                <button id="processApkOrderBtn" style="width:100%;padding:14px;border-radius:12px;background:linear-gradient(90deg,#10b981,#059669);color:white;font-weight:700;font-size:16px;border:none;cursor:pointer;">
                    <i class="ri-flashlight-line"></i> Beli & Kirim ke WA
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const countrySelect = document.getElementById('countryCodeSelect');
    const countryCodeSpan = document.getElementById('selectedCountryCode');
    const phoneInput = document.getElementById('phoneNumberInput');
    const processBtn = document.getElementById('processApkOrderBtn');

    countrySelect.addEventListener('change', function() {
        countryCodeSpan.textContent = '+' + this.value;
    });

    processBtn.addEventListener('click', async () => {
        let countryCode = countrySelect.value;
        let phoneNumber = phoneInput.value.trim();
        
        // Ambil data user dari localStorage (hasil login)
        const savedUser = localStorage.getItem('app_user');
        let targetIdentifier = null;
        
        if (savedUser) {
            try {
                const userData = JSON.parse(savedUser);
                targetIdentifier = userData.username || userData.phone;
            } catch(e) {}
        }
        
        if (!targetIdentifier) {
            showToast("User tidak ditemukan, silakan login ulang", true);
            return;
        }
        
        let cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
        if (cleanNumber.startsWith('0')) {
            cleanNumber = cleanNumber.substring(1);
        }
        const fullNumber = countryCode + cleanNumber;

        if (!phoneNumber) {
            showToast('❌ Masukkan nomor WhatsApp!', true);
            return;
        }

        if (cleanNumber.length < 9) {
            showToast('❌ Nomor WhatsApp tidak valid! Minimal 9 digit', true);
            return;
        }

        processBtn.disabled = true;
        processBtn.innerHTML = '<div class="loading-spinner" style="width:20px;height:20px;"></div> Memproses...';

        try {
            // =========================
            // CARI USER BERDASARKAN USERNAME ATAU NOMOR HP
            // =========================
            const searchRes = await fetch("https://backend-delta-steel-38.vercel.app/api/balance", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF"
                },
                body: JSON.stringify({
                    action: "search_user",
                    query: targetIdentifier
                })
            });

            const searchData = await searchRes.json();
            
            if (!searchData.success || !searchData.data) {
                showToast("User tidak ditemukan di database", true);
                processBtn.disabled = false;
                processBtn.innerHTML = '<i class="ri-flashlight-line"></i> Beli & Kirim ke WA';
                return;
            }
            
            // ✅ AMBIL USERNAME UNTUK POTONG SALDO (bukan device_id)
            const username = searchData.data.username;
            const currentBalance = searchData.data.balance || 0;
            
            if (!username) {
                showToast("User tidak memiliki username", true);
                processBtn.disabled = false;
                processBtn.innerHTML = '<i class="ri-flashlight-line"></i> Beli & Kirim ke WA';
                return;
            }

            const productPrice = product.price;

            if (currentBalance < productPrice) {
                showToast(`❌ Saldo tidak mencukupi! Saldo: Rp ${currentBalance.toLocaleString('id-ID')}`, true);
                processBtn.disabled = false;
                processBtn.innerHTML = '<i class="ri-flashlight-line"></i> Beli & Kirim ke WA';
                return;
            }

            const { jam, tanggal, tahun } = getCurrentDateTime();
            const transactionId = 'TRX' + Date.now().toString().slice(-8) + Math.floor(Math.random() * 1000);
            const newBalance = currentBalance - productPrice;

            const message = `Halo kak, terima kasih sudah order di YussXy Store.\n\n` +
                `Berikut link APK yang sudah kakak beli:\n` +
                `${product.downloadLink}\n\n` +
                `Data transaksi:\n` +
                `· ID Transaksi : ${transactionId}\n` +
                `· Tgl beli : ${tanggal} ${jam}\n` +
                `· Saldo terpotong : Rp ${productPrice.toLocaleString('id-ID')}\n` +
                `· Sisa saldo : Rp ${newBalance.toLocaleString('id-ID')}\n` +
                `· Username : ${username}\n\n` +
                `Terima kasih sudah berbelanja di YussXy Store 🙏`;

            // =========================
            // KIRIM PESAN VIA RC WA
            // =========================
            const rcRes = await fetch('https://backend-delta-steel-38.vercel.app/api/rc', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF'
                },
                body: JSON.stringify({
                    type: 'send',
                    target: fullNumber + '@s.whatsapp.net',
                    message: message
                })
            });

            const rcData = await rcRes.json();

            if (!rcData.success) {
                throw new Error('Gagal kirim pesan via bot');
            }

            // =========================
            // ✅ POTONG SALDO MENGGUNAKAN USERNAME (bukan device_id)
            // =========================
            const subRes = await fetch('https://backend-delta-steel-38.vercel.app/api/balance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF'
                },
                body: JSON.stringify({
                    action: 'sub',
                    username: username,  // ✅ PAKAI USERNAME, BUKAN DEVICE_ID
                    amount: productPrice
                })
            });

            const subData = await subRes.json();

            if (!subData.success) {
                throw new Error('Gagal potong saldo');
            }

            // =========================
            // SIMPAN TRANSAKSI KE DATABASE
            // =========================
            const saveTransRes = await fetch('https://backend-delta-steel-38.vercel.app/api/balance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF'
                },
                body: JSON.stringify({
                    action: 'add_transaction',
                    username: username,  // ✅ PAKAI USERNAME, BUKAN DEVICE_ID
                    trx_id: {
                        id: transactionId,
                        product_id: product.id,
                        product_name: product.name,
                        type: 'apk',
                        amount: productPrice,
                        phone: fullNumber,
                        status: 'success',
                        created_at: new Date().toISOString()
                    }
                })
            });

            const saveTransData = await saveTransRes.json();
            
            if (!saveTransData.success) {
                console.warn('Transaksi gagal disimpan ke database:', saveTransData.message);
            }

await sendTestimoniToChannel(
    product.name,
    '1',
    username,
    productPrice,
    transactionId,
    username
);









            // =========================
            // TAMPILKAN HASIL SUKSES
            // =========================
            document.getElementById('apkOrderBody').innerHTML = `
                <div style="background: linear-gradient(145deg, #0f172a, #0a0f1a); padding: 24px 20px; border-radius: 24px; color: #fff; font-size: 13px; line-height: 1.6; text-align: center; border: 1px solid rgba(16, 185, 129, 0.2); box-shadow: 0 8px 20px rgba(0,0,0,0.3);">
                    
                    <div style="display: flex; justify-content: center; margin-bottom: 16px;">
                        <div style="background: linear-gradient(135deg, #10b981, #059669); width: 70px; height: 70px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);">
                            <i class="ri-check-line" style="font-size: 40px; color: white;"></i>
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(90deg, #10b981, #059669); padding: 4px 16px; border-radius: 40px; display: inline-block; margin-bottom: 20px;">
                        <b style="font-size: 14px;">PEMBELIAN BERHASIL</b>
                    </div>
                    
                    <div style="background: rgba(16, 185, 129, 0.1); border-radius: 16px; padding: 16px; margin-bottom: 20px; text-align: left;">
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <i class="ri-shopping-bag-line" style="font-size: 20px; color: #10b981;"></i>
                            <span><b>${product.name}</b></span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                            <i class="ri-money-dollar-circle-line" style="font-size: 20px; color: #f59e0b;"></i>
                            <span>Harga: <b style="color: #f59e0b;">Rp ${productPrice.toLocaleString('id-ID')}</b></span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                            <i class="ri-wallet-line" style="font-size: 20px; color: #3b82f6;"></i>
                            <span>Sisa Saldo: <b style="color: #3b82f6;">Rp ${subData.data.balance.toLocaleString('id-ID')}</b></span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                            <i class="ri-whatsapp-line" style="font-size: 20px; color: #25D366;"></i>
                            <span>Dikirim ke: <b style="color: #25D366;">+${fullNumber}</b></span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <i class="ri-user-line" style="font-size: 20px; color: #8b5cf6;"></i>
                            <span>Username: <b style="color: #8b5cf6;">${username}</b></span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <i class="ri-database-2-line" style="font-size: 20px; color: #8b5cf6;"></i>
                            <span>ID Transaksi: <b style="color: #8b5cf6; font-family: monospace;">${transactionId}</b></span>
                        </div>
                    </div>
                    
                    <div style="background: rgba(16, 185, 129, 0.15); border-radius: 12px; padding: 12px;">
                        <i class="ri-checkbox-circle-line" style="color: #10b981; font-size: 16px; margin-right: 6px;"></i>
                        <span style="color: #10b981;">✅ Link APK telah dikirim ke WhatsApp kamu!</span>
                    </div>
                    
                    <div style="margin-top: 20px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.1);">
                        <span style="font-size: 11px; color: #64748b;">Terima kasih sudah berbelanja di YussXy Store 🙏</span>
                    </div>
                </div>
            `;

            // Refresh saldo di halaman utama
            if (typeof getSaldo === 'function') {
                getSaldo();
            }

        } catch (err) {
            console.error('Error:', err);
            showToast('❌ Error: ' + err.message, true);
            processBtn.disabled = false;
            processBtn.innerHTML = '<i class="ri-flashlight-line"></i> Beli & Kirim ke WA';
        }
    });
}














function showDesignOrderModal(product) {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.style.display = 'flex';

    modal.innerHTML = `
        <div class="modal-content" style="max-width: 360px;">
            <div class="modal-header">
                <h3><i class="ri-palette-line"></i> ${product.name}</h3>
                <button class="modal-close" onclick="this.closest('.modal').remove()">
                    <i class="ri-close-line"></i>
                </button>
            </div>

            <div class="modal-body" id="designOrderBody" style="text-align:left;">
                <p style="font-size:13px;color:var(--text-secondary);margin-bottom:10px;">
                    ${product.description}
                </p>

                <p style="font-size:18px;font-weight:700;color:var(--accent);margin-bottom:10px;">
                    Harga: Rp ${product.price.toLocaleString('id-ID')}
                </p>

                <div class="deposit-info" style="margin-bottom:16px;background:rgba(16,185,129,0.1);">
                    <i class="ri-information-line"></i>
                    <span>Link Mentahan Design akan dikirim via WhatsApp</span>
                </div>

                <label style="font-size:13px;font-weight:600;margin-bottom:8px;display:block;">
                    <i class="ri-whatsapp-line"></i> Nomor WhatsApp
                </label>
                <select id="countryCodeSelect" style="width:100%;padding:12px;border-radius:12px;background:var(--bg-secondary);border:1px solid var(--border);color:white;margin-bottom:10px;">
                    <option value="62">🇮🇩 Indonesia (+62)</option>
                    <option value="60">🇲🇾 Malaysia (+60)</option>
                    <option value="65">🇸🇬 Singapore (+65)</option>
                    <option value="63">🇵🇭 Philippines (+63)</option>
                    <option value="66">🇹🇭 Thailand (+66)</option>
                    <option value="1">🇺🇸 USA (+1)</option>
                    <option value="44">🇬🇧 UK (+44)</option>
                    <option value="61">🇦🇺 Australia (+61)</option>
                    <option value="81">🇯🇵 Japan (+81)</option>
                    <option value="82">🇰🇷 South Korea (+82)</option>
                    <option value="86">🇨🇳 China (+86)</option>
                    <option value="91">🇮🇳 India (+91)</option>
                </select>

                <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px;">
                    <span style="background:var(--bg-secondary);padding:12px;border-radius:12px;border:1px solid var(--border);font-weight:700;" id="selectedCountryCode">+62</span>
                    <input type="tel" id="phoneNumberInput" placeholder="81234567890" 
                           style="flex:1;padding:12px;border-radius:12px;background:var(--bg-secondary);border:1px solid var(--border);color:white;font-size:14px;">
                </div>

                <div class="deposit-info" style="margin-bottom:16px;background:rgba(245,158,11,0.1);">
                    <i class="ri-wallet-line"></i>
                    <span>Saldo akan dipotong <strong>Rp ${product.price.toLocaleString('id-ID')}</strong> jika berhasil</span>
                </div>

                <button id="processDesignOrderBtn" style="width:100%;padding:14px;border-radius:12px;background:linear-gradient(90deg,#10b981,#059669);color:white;font-weight:700;font-size:16px;border:none;cursor:pointer;">
                    <i class="ri-flashlight-line"></i> Beli & Kirim ke WA
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const countrySelect = document.getElementById('countryCodeSelect');
    const countryCodeSpan = document.getElementById('selectedCountryCode');
    const phoneInput = document.getElementById('phoneNumberInput');
    const processBtn = document.getElementById('processDesignOrderBtn');

    countrySelect.addEventListener('change', function() {
        countryCodeSpan.textContent = '+' + this.value;
    });

    processBtn.addEventListener('click', async () => {
        let countryCode = countrySelect.value;
        let phoneNumber = phoneInput.value.trim();
        
        // Ambil data user dari localStorage (hasil login)
        const savedUser = localStorage.getItem('app_user');
        let targetIdentifier = null;
        
        if (savedUser) {
            try {
                const userData = JSON.parse(savedUser);
                targetIdentifier = userData.username || userData.phone;
            } catch(e) {}
        }
        
        if (!targetIdentifier) {
            showToast("User tidak ditemukan, silakan login ulang", true);
            return;
        }
        
        let cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
        if (cleanNumber.startsWith('0')) {
            cleanNumber = cleanNumber.substring(1);
        }
        const fullNumber = countryCode + cleanNumber;

        if (!phoneNumber) {
            showToast('❌ Masukkan nomor WhatsApp!', true);
            return;
        }

        if (cleanNumber.length < 9) {
            showToast('❌ Nomor WhatsApp tidak valid! Minimal 9 digit', true);
            return;
        }

        processBtn.disabled = true;
        processBtn.innerHTML = '<div class="loading-spinner" style="width:20px;height:20px;"></div> Memproses...';

        try {
            // =========================
            // CARI USER BERDASARKAN USERNAME ATAU NOMOR HP
            // =========================
            const searchRes = await fetch("https://backend-delta-steel-38.vercel.app/api/balance", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF"
                },
                body: JSON.stringify({
                    action: "search_user",
                    query: targetIdentifier
                })
            });

            const searchData = await searchRes.json();
            
            if (!searchData.success || !searchData.data) {
                showToast("User tidak ditemukan di database", true);
                processBtn.disabled = false;
                processBtn.innerHTML = '<i class="ri-flashlight-line"></i> Beli & Kirim ke WA';
                return;
            }
            
            // ✅ AMBIL USERNAME UNTUK POTONG SALDO (bukan device_id)
            const username = searchData.data.username;
            const currentBalance = searchData.data.balance || 0;
            
            if (!username) {
                showToast("User tidak memiliki username", true);
                processBtn.disabled = false;
                processBtn.innerHTML = '<i class="ri-flashlight-line"></i> Beli & Kirim ke WA';
                return;
            }

            const productPrice = product.price;

            if (currentBalance < productPrice) {
                showToast(`❌ Saldo tidak mencukupi! Saldo: Rp ${currentBalance.toLocaleString('id-ID')}`, true);
                processBtn.disabled = false;
                processBtn.innerHTML = '<i class="ri-flashlight-line"></i> Beli & Kirim ke WA';
                return;
            }

            const { jam, tanggal, tahun } = getCurrentDateTime();
            const transactionId = 'TRX' + Date.now().toString().slice(-8) + Math.floor(Math.random() * 1000);
            const newBalance = currentBalance - productPrice;

            const message = `Halo kak, terima kasih sudah order di YussXy Store\n\n` +
                `Berikut link Mentahan Design yang sudah kakak beli:\n` +
                `${product.downloadLink}\n\n` +
                `Data transaksi:\n` +
                `· ID Transaksi : ${transactionId}\n` +
                `· Tgl beli : ${tanggal} ${jam}\n` +
                `· Saldo terpotong : Rp ${productPrice.toLocaleString('id-ID')}\n` +
                `· Sisa saldo : Rp ${newBalance.toLocaleString('id-ID')}\n` +
                `· Username : ${username}\n\n` +
                `Terima kasih sudah berbelanja di YussXy Store 🙏`;

            // =========================
            // KIRIM PESAN VIA RC WA
            // =========================
            const rcRes = await fetch('https://backend-delta-steel-38.vercel.app/api/rc', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF'
                },
                body: JSON.stringify({
                    type: 'send',
                    target: fullNumber + '@s.whatsapp.net',
                    message: message
                })
            });

            const rcData = await rcRes.json();

            if (!rcData.success) {
                throw new Error('Gagal kirim pesan via bot');
            }

            // =========================
            // ✅ POTONG SALDO MENGGUNAKAN USERNAME (bukan device_id)
            // =========================
            const subRes = await fetch('https://backend-delta-steel-38.vercel.app/api/balance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF'
                },
                body: JSON.stringify({
                    action: 'sub',
                    username: username,  // ✅ PAKAI USERNAME, BUKAN DEVICE_ID
                    amount: productPrice
                })
            });

            const subData = await subRes.json();

            if (!subData.success) {
                throw new Error('Gagal potong saldo');
            }

            // =========================
            // SIMPAN TRANSAKSI KE DATABASE
            // =========================
            const saveTransRes = await fetch('https://backend-delta-steel-38.vercel.app/api/balance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF'
                },
                body: JSON.stringify({
                    action: 'add_transaction',
                    username: username,  // ✅ PAKAI USERNAME, BUKAN DEVICE_ID
                    trx_id: {
                        id: transactionId,
                        product_id: product.id,
                        product_name: product.name,
                        type: 'design',
                        amount: productPrice,
                        phone: fullNumber,
                        status: 'success',
                        created_at: new Date().toISOString()
                    }
                })
            });





await sendTestimoniToChannel(
    product.name,
    '1',
    username,
    productPrice,
    transactionId,
    username
);




            const saveTransData = await saveTransRes.json();
            
            if (!saveTransData.success) {
                console.warn('Transaksi gagal disimpan ke database:', saveTransData.message);
            }

            // =========================
            // TAMPILKAN HASIL SUKSES
            // =========================
            document.getElementById('designOrderBody').innerHTML = `
                <div style="background: linear-gradient(145deg, #0f172a, #0a0f1a); padding: 24px 20px; border-radius: 24px; color: #fff; font-size: 13px; line-height: 1.6; text-align: center; border: 1px solid rgba(16, 185, 129, 0.2); box-shadow: 0 8px 20px rgba(0,0,0,0.3);">
                    
                    <div style="display: flex; justify-content: center; margin-bottom: 16px;">
                        <div style="background: linear-gradient(135deg, #10b981, #059669); width: 70px; height: 70px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);">
                            <i class="ri-check-line" style="font-size: 40px; color: white;"></i>
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(90deg, #10b981, #059669); padding: 4px 16px; border-radius: 40px; display: inline-block; margin-bottom: 20px;">
                        <b style="font-size: 14px;">PEMBELIAN BERHASIL</b>
                    </div>
                    
                    <div style="background: rgba(16, 185, 129, 0.1); border-radius: 16px; padding: 16px; margin-bottom: 20px; text-align: left;">
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <i class="ri-shopping-bag-line" style="font-size: 20px; color: #10b981;"></i>
                            <span><b>${product.name}</b></span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                            <i class="ri-money-dollar-circle-line" style="font-size: 20px; color: #f59e0b;"></i>
                            <span>Harga: <b style="color: #f59e0b;">Rp ${productPrice.toLocaleString('id-ID')}</b></span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                            <i class="ri-wallet-line" style="font-size: 20px; color: #3b82f6;"></i>
                            <span>Sisa Saldo: <b style="color: #3b82f6;">Rp ${subData.data.balance.toLocaleString('id-ID')}</b></span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                            <i class="ri-whatsapp-line" style="font-size: 20px; color: #25D366;"></i>
                            <span>Dikirim ke: <b style="color: #25D366;">+${fullNumber}</b></span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <i class="ri-user-line" style="font-size: 20px; color: #8b5cf6;"></i>
                            <span>Username: <b style="color: #8b5cf6;">${username}</b></span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <i class="ri-database-2-line" style="font-size: 20px; color: #8b5cf6;"></i>
                            <span>ID Transaksi: <b style="color: #8b5cf6; font-family: monospace;">${transactionId}</b></span>
                        </div>
                    </div>
                    
                    <div style="background: rgba(16, 185, 129, 0.15); border-radius: 12px; padding: 12px;">
                        <i class="ri-checkbox-circle-line" style="color: #10b981; font-size: 16px; margin-right: 6px;"></i>
                        <span style="color: #10b981;">✅ Link Mentahan Design telah dikirim ke WhatsApp kamu!</span>
                    </div>
                    
                    <div style="margin-top: 20px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.1);">
                        <span style="font-size: 11px; color: #64748b;">Terima kasih sudah berbelanja di YussXy Store 🙏</span>
                    </div>
                </div>
            `;

            // Refresh saldo di halaman utama
            if (typeof getSaldo === 'function') {
                getSaldo();
            }

        } catch (err) {
            console.error('Error:', err);
            showToast('❌ Error: ' + err.message, true);
            processBtn.disabled = false;
            processBtn.innerHTML = '<i class="ri-flashlight-line"></i> Beli & Kirim ke WA';
        }
    });
}

function showAutoSaveApkModal(product) {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.style.display = 'flex';

    modal.innerHTML = `
        <div class="modal-content" style="max-width: 360px;">
            <div class="modal-header">
                <h3><i class="ri-android-line"></i> ${product.name}</h3>
                <button class="modal-close" onclick="this.closest('.modal').remove()">
                    <i class="ri-close-line"></i>
                </button>
            </div>

            <div class="modal-body" id="apkOrderBody" style="text-align:left;">
                <p style="font-size:13px;color:var(--text-secondary);margin-bottom:10px;">
                    ${product.description}
                </p>

                <p style="font-size:18px;font-weight:700;color:var(--accent);margin-bottom:10px;">
                    Harga: Rp ${product.price.toLocaleString('id-ID')}
                </p>

                <div class="deposit-info" style="margin-bottom:16px;background:rgba(16,185,129,0.1);">
                    <i class="ri-information-line"></i>
                    <span>Link APK akan dikirim via WhatsApp</span>
                </div>

                <label style="font-size:13px;font-weight:600;margin-bottom:8px;display:block;">
                    <i class="ri-whatsapp-line"></i> Nomor WhatsApp
                </label>
                <select id="countryCodeSelect" style="width:100%;padding:12px;border-radius:12px;background:var(--bg-secondary);border:1px solid var(--border);color:white;margin-bottom:10px;">
                    <option value="62">🇮🇩 Indonesia (+62)</option>
                    <option value="60">🇲🇾 Malaysia (+60)</option>
                    <option value="65">🇸🇬 Singapore (+65)</option>
                    <option value="63">🇵🇭 Philippines (+63)</option>
                    <option value="66">🇹🇭 Thailand (+66)</option>
                    <option value="1">🇺🇸 USA (+1)</option>
                    <option value="44">🇬🇧 UK (+44)</option>
                    <option value="61">🇦🇺 Australia (+61)</option>
                    <option value="81">🇯🇵 Japan (+81)</option>
                    <option value="82">🇰🇷 South Korea (+82)</option>
                    <option value="86">🇨🇳 China (+86)</option>
                    <option value="91">🇮🇳 India (+91)</option>
                </select>

                <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px;">
                    <span style="background:var(--bg-secondary);padding:12px;border-radius:12px;border:1px solid var(--border);font-weight:700;" id="selectedCountryCode">+62</span>
                    <input type="tel" id="phoneNumberInput" placeholder="81234567890" 
                           style="flex:1;padding:12px;border-radius:12px;background:var(--bg-secondary);border:1px solid var(--border);color:white;font-size:14px;">
                </div>

                <div class="deposit-info" style="margin-bottom:16px;background:rgba(245,158,11,0.1);">
                    <i class="ri-wallet-line"></i>
                    <span>Saldo akan dipotong <strong>Rp ${product.price.toLocaleString('id-ID')}</strong> jika berhasil</span>
                </div>

                <button id="processApkOrderBtn" style="width:100%;padding:14px;border-radius:12px;background:linear-gradient(90deg,#10b981,#059669);color:white;font-weight:700;font-size:16px;border:none;cursor:pointer;">
                    <i class="ri-flashlight-line"></i> Beli & Kirim ke WA
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const countrySelect = document.getElementById('countryCodeSelect');
    const countryCodeSpan = document.getElementById('selectedCountryCode');
    const phoneInput = document.getElementById('phoneNumberInput');
    const processBtn = document.getElementById('processApkOrderBtn');

    countrySelect.addEventListener('change', function() {
        countryCodeSpan.textContent = '+' + this.value;
    });

    processBtn.addEventListener('click', async () => {
        let countryCode = countrySelect.value;
        let phoneNumber = phoneInput.value.trim();
        
        // Ambil data user dari localStorage (hasil login)
        const savedUser = localStorage.getItem('app_user');
        let targetIdentifier = null;
        
        if (savedUser) {
            try {
                const userData = JSON.parse(savedUser);
                targetIdentifier = userData.username || userData.phone;
            } catch(e) {}
        }
        
        if (!targetIdentifier) {
            showToast("User tidak ditemukan, silakan login ulang", true);
            return;
        }
        
        let cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
        if (cleanNumber.startsWith('0')) {
            cleanNumber = cleanNumber.substring(1);
        }
        const fullNumber = countryCode + cleanNumber;

        if (!phoneNumber) {
            showToast('❌ Masukkan nomor WhatsApp!', true);
            return;
        }

        if (cleanNumber.length < 9) {
            showToast('❌ Nomor WhatsApp tidak valid! Minimal 9 digit', true);
            return;
        }

        processBtn.disabled = true;
        processBtn.innerHTML = '<div class="loading-spinner" style="width:20px;height:20px;"></div> Memproses...';

        try {
            // =========================
            // CARI USER BERDASARKAN USERNAME ATAU NOMOR HP
            // =========================
            const searchRes = await fetch("https://backend-delta-steel-38.vercel.app/api/balance", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF"
                },
                body: JSON.stringify({
                    action: "search_user",
                    query: targetIdentifier
                })
            });

            const searchData = await searchRes.json();
            
            if (!searchData.success || !searchData.data) {
                showToast("User tidak ditemukan di database", true);
                processBtn.disabled = false;
                processBtn.innerHTML = '<i class="ri-flashlight-line"></i> Beli & Kirim ke WA';
                return;
            }
            
            // ✅ AMBIL USERNAME UNTUK POTONG SALDO (bukan device_id)
            const username = searchData.data.username;
            const currentBalance = searchData.data.balance || 0;
            
            if (!username) {
                showToast("User tidak memiliki username", true);
                processBtn.disabled = false;
                processBtn.innerHTML = '<i class="ri-flashlight-line"></i> Beli & Kirim ke WA';
                return;
            }

            const productPrice = product.price;

            if (currentBalance < productPrice) {
                showToast(`❌ Saldo tidak mencukupi! Saldo: Rp ${currentBalance.toLocaleString('id-ID')}`, true);
                processBtn.disabled = false;
                processBtn.innerHTML = '<i class="ri-flashlight-line"></i> Beli & Kirim ke WA';
                return;
            }

            const { jam, tanggal, tahun } = getCurrentDateTime();
            const transactionId = 'TRX' + Date.now().toString().slice(-8) + Math.floor(Math.random() * 1000);
            const newBalance = currentBalance - productPrice;

            const message = `Halo kak, terima kasih sudah order di YussXy Store\n\n` +
                `Berikut link APK Auto Sv Kontak yang sudah kakak beli:\n` +
                `${product.downloadLink}\n\n` +
                `Data transaksi:\n` +
                `· ID Transaksi : ${transactionId}\n` +
                `· Tgl beli : ${tanggal} ${jam}\n` +
                `· Saldo terpotong : Rp ${productPrice.toLocaleString('id-ID')}\n` +
                `· Sisa saldo : Rp ${newBalance.toLocaleString('id-ID')}\n` +
                `· Username : ${username}\n\n` +
                `Terima kasih sudah berbelanja di YussXy Store 🙏`;

            // =========================
            // KIRIM PESAN VIA RC WA
            // =========================
            const rcRes = await fetch('https://backend-delta-steel-38.vercel.app/api/rc', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF'
                },
                body: JSON.stringify({
                    type: 'send',
                    target: fullNumber + '@s.whatsapp.net',
                    message: message
                })
            });

            const rcData = await rcRes.json();

            if (!rcData.success) {
                throw new Error('Gagal kirim pesan via bot');
            }

            // =========================
            // ✅ POTONG SALDO MENGGUNAKAN USERNAME (bukan device_id)
            // =========================
            const subRes = await fetch('https://backend-delta-steel-38.vercel.app/api/balance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF'
                },
                body: JSON.stringify({
                    action: 'sub',
                    username: username,  // ✅ PAKAI USERNAME, BUKAN DEVICE_ID
                    amount: productPrice
                })
            });

            const subData = await subRes.json();

            if (!subData.success) {
                throw new Error('Gagal potong saldo');
            }

            // =========================
            // SIMPAN TRANSAKSI KE DATABASE
            // =========================
            const saveTransRes = await fetch('https://backend-delta-steel-38.vercel.app/api/balance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF'
                },
                body: JSON.stringify({
                    action: 'add_transaction',
                    username: username,  // ✅ PAKAI USERNAME, BUKAN DEVICE_ID
                    trx_id: {
                        id: transactionId,
                        product_id: product.id,
                        product_name: product.name,
                        type: 'apk',
                        amount: productPrice,
                        phone: fullNumber,
                        status: 'success',
                        created_at: new Date().toISOString()
                    }
                })
            });
            
            await sendTestimoniToChannel(
    product.name,
    '1',
    username,
    productPrice,
    transactionId,
    username
);
            
            
            
            
            
            

            const saveTransData = await saveTransRes.json();
            
            if (!saveTransData.success) {
                console.warn('Transaksi gagal disimpan ke database:', saveTransData.message);
            }

            // =========================
            // TAMPILKAN HASIL SUKSES
            // =========================
            document.getElementById('apkOrderBody').innerHTML = `
                <div style="background: linear-gradient(145deg, #0f172a, #0a0f1a); padding: 24px 20px; border-radius: 24px; color: #fff; font-size: 13px; line-height: 1.6; text-align: center; border: 1px solid rgba(16, 185, 129, 0.2); box-shadow: 0 8px 20px rgba(0,0,0,0.3);">
                    
                    <div style="display: flex; justify-content: center; margin-bottom: 16px;">
                        <div style="background: linear-gradient(135deg, #10b981, #059669); width: 70px; height: 70px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);">
                            <i class="ri-check-line" style="font-size: 40px; color: white;"></i>
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(90deg, #10b981, #059669); padding: 4px 16px; border-radius: 40px; display: inline-block; margin-bottom: 20px;">
                        <b style="font-size: 14px;">PEMBELIAN BERHASIL</b>
                    </div>
                    
                    <div style="background: rgba(16, 185, 129, 0.1); border-radius: 16px; padding: 16px; margin-bottom: 20px; text-align: left;">
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <i class="ri-shopping-bag-line" style="font-size: 20px; color: #10b981;"></i>
                            <span><b>${product.name}</b></span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                            <i class="ri-money-dollar-circle-line" style="font-size: 20px; color: #f59e0b;"></i>
                            <span>Harga: <b style="color: #f59e0b;">Rp ${productPrice.toLocaleString('id-ID')}</b></span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                            <i class="ri-wallet-line" style="font-size: 20px; color: #3b82f6;"></i>
                            <span>Sisa Saldo: <b style="color: #3b82f6;">Rp ${subData.data.balance.toLocaleString('id-ID')}</b></span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                            <i class="ri-whatsapp-line" style="font-size: 20px; color: #25D366;"></i>
                            <span>Dikirim ke: <b style="color: #25D366;">+${fullNumber}</b></span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <i class="ri-user-line" style="font-size: 20px; color: #8b5cf6;"></i>
                            <span>Username: <b style="color: #8b5cf6;">${username}</b></span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <i class="ri-database-2-line" style="font-size: 20px; color: #8b5cf6;"></i>
                            <span>ID Transaksi: <b style="color: #8b5cf6; font-family: monospace;">${transactionId}</b></span>
                        </div>
                    </div>
                    
                    <div style="background: rgba(16, 185, 129, 0.15); border-radius: 12px; padding: 12px;">
                        <i class="ri-checkbox-circle-line" style="color: #10b981; font-size: 16px; margin-right: 6px;"></i>
                        <span style="color: #10b981;">✅ Link APK telah dikirim ke WhatsApp kamu!</span>
                    </div>
                    
                    <div style="margin-top: 20px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.1);">
                        <span style="font-size: 11px; color: #64748b;">Terima kasih sudah berbelanja di YussXy Store 🙏</span>
                    </div>
                </div>
            `;

            // Refresh saldo di halaman utama
            if (typeof getSaldo === 'function') {
                getSaldo();
            }

        } catch (err) {
            console.error('Error:', err);
            showToast('❌ Error: ' + err.message, true);
            processBtn.disabled = false;
            processBtn.innerHTML = '<i class="ri-flashlight-line"></i> Beli & Kirim ke WA';
        }
    });
}






//🤏🤏🤏🤏🤏





// ================================================
// LOAD HISTORY (BERDASARKAN USERNAME)
// ================================================
async function loadHistory() {
    console.log("=== loadHistory dipanggil ===");
    
    const savedUser = localStorage.getItem('app_user');
    if (!savedUser) {
        console.log("User tidak login");
        const historyList = document.getElementById('historyList');
        if (historyList) historyList.innerHTML = '<div class="history-empty"><i class="ri-error-warning-line"></i><p>Silakan login terlebih dahulu</p></div>';
        return;
    }
    
    let userData;
    try {
        userData = JSON.parse(savedUser);
    } catch(e) {
        console.error("Gagal parse user", e);
        return;
    }
    
    const identifier = userData.username || userData.phone;
    if (!identifier) {
        console.log("Tidak ada username/phone di localStorage");
        return;
    }
    console.log("Mengambil riwayat untuk:", identifier);
    
    const loading = document.getElementById('historyLoading');
    const historyList = document.getElementById('historyList');
    const paginationDiv = document.getElementById('historyPagination');
    
    if (loading) loading.style.display = 'flex';
    if (historyList) historyList.style.display = 'none';
    if (paginationDiv) paginationDiv.style.display = 'none';
    
    try {
        const response = await fetch('https://backend-delta-steel-38.vercel.app/api/balance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF'
            },
            body: JSON.stringify({
                action: 'get_transactions',
                username: identifier
            })
        });
        const data = await response.json();
        console.log("Response dari server:", data);
        
        if (loading) loading.style.display = 'none';
        if (historyList) historyList.style.display = 'block';
        
        if (data.success && data.data && data.data.transactions && data.data.transactions.length > 0) {
            allTransactions = data.data.transactions;
            // Urutkan dari terbaru
            allTransactions.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            historyCurrentPage = 1;
            renderHistoryPage();
            if (paginationDiv) paginationDiv.style.display = 'flex';
        } else {
            historyList.innerHTML = `
                <div class="history-empty">
                    <i class="ri-history-line"></i>
                    <p>Belum ada transaksi</p>
                    <span>Mulai belanja di YussXy Store</span>
                </div>
            `;
            if (paginationDiv) paginationDiv.style.display = 'none';
        }
    } catch (error) {
        console.error("Error loadHistory:", error);
        if (loading) loading.style.display = 'none';
        if (historyList) {
            historyList.style.display = 'block';
            historyList.innerHTML = `<div class="history-empty"><i class="ri-error-warning-line"></i><p>Gagal memuat riwayat: ${error.message}</p></div>`;
        }
    }
}


function renderHistoryPage() {
    const historyList = document.getElementById('historyList');
    const paginationDiv = document.getElementById('historyPagination');
    if (!historyList) return;
    
    if (!allTransactions.length) {
        historyList.innerHTML = `<div class="history-empty"><i class="ri-history-line"></i><p>Belum ada transaksi</p></div>`;
        if (paginationDiv) paginationDiv.style.display = 'none';
        return;
    }
    
    const totalPages = Math.ceil(allTransactions.length / itemsPerPage);
    const startIndex = (historyCurrentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageTransactions = allTransactions.slice(startIndex, endIndex);
    
    historyList.innerHTML = pageTransactions.map(trx => {
        const date = new Date(trx.created_at);
        const formattedDate = date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
        const formattedTime = date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
        
        let typeIcon = 'ri-shopping-bag-line';
        switch(trx.type) {
            case 'apk': typeIcon = 'ri-android-line'; break;
            case 'design': typeIcon = 'ri-palette-line'; break;
            case 'reaction': typeIcon = 'ri-emotion-line'; break;
            case 'deposit': typeIcon = 'ri-wallet-line'; break;
            case 'transfer': typeIcon = 'ri-bank-card-line'; break;
            case 'auto_sosmed': typeIcon = 'ri-flashlight-line'; break;
            default: typeIcon = 'ri-shopping-bag-line';
        }
        
        // Escape HTML untuk keamanan
        const escapeAttr = (str) => {
            if (!str) return '';
            return String(str).replace(/'/g, "\\'").replace(/"/g, '&quot;');
        };
        
        let detailHtml = '';
        
        // Phone - bisa copy
        if (trx.phone) {
            detailHtml += `
                <div class="history-detail-item copyable" onclick="copyToClipboard('${trx.phone}', 'Nomor WhatsApp')">
                    <i class="ri-whatsapp-line"></i>
                    <span>Dikirim ke</span>
                    <strong>+${trx.phone}</strong>
                    <i class="ri-file-copy-line copy-icon"></i>
                </div>
            `;
        }
        
        // Target Link - bisa copy
        if (trx.target_link) {
            const shortLink = trx.target_link.length > 50 ? trx.target_link.substring(0, 50) + '...' : trx.target_link;
            detailHtml += `
                <div class="history-detail-item copyable" onclick="copyToClipboard('${escapeAttr(trx.target_link)}', 'Link Target')">
                    <i class="ri-link"></i>
                    <span>Target Link</span>
                    <strong style="word-break: break-all;">${shortLink}</strong>
                    <i class="ri-file-copy-line copy-icon"></i>
                </div>
            `;
        }
        
        // Emoji - bisa copy
        if (trx.emoji) {
            detailHtml += `
                <div class="history-detail-item copyable" onclick="copyToClipboard('${trx.emoji}', 'Emoji')">
                    <i class="ri-emotion-line"></i>
                    <span>Emoji</span>
                    <strong style="font-size: 16px;">${trx.emoji}</strong>
                    <i class="ri-file-copy-line copy-icon"></i>
                </div>
            `;
        }
        
        // Target (untuk auto_sosmed) - bisa copy
        if (trx.target) {
            const shortTarget = trx.target.length > 50 ? trx.target.substring(0, 50) + '...' : trx.target;
            detailHtml += `
                <div class="history-detail-item copyable" onclick="copyToClipboard('${escapeAttr(trx.target)}', 'Target')">
                    <i class="ri-link"></i>
                    <span>Target</span>
                    <strong style="word-break: break-all;">${shortTarget}</strong>
                    <i class="ri-file-copy-line copy-icon"></i>
                </div>
            `;
        }
        
        // Quantity - bisa copy
        if (trx.quantity) {
            detailHtml += `
                <div class="history-detail-item copyable" onclick="copyToClipboard('${trx.quantity}', 'Jumlah')">
                    <i class="ri-bar-chart-line"></i>
                    <span>Jumlah</span>
                    <strong>${trx.quantity.toLocaleString('id-ID')}</strong>
                    <i class="ri-file-copy-line copy-icon"></i>
                </div>
            `;
        }
        
        return `
            <div class="history-card">
                <div class="history-card-header">
                    <div class="history-product">
                        <div class="history-product-icon"><i class="${typeIcon}"></i></div>
                        <div class="history-product-info">
                            <h4>${escapeHtml(trx.product_name || 'Produk Digital')}</h4>
                            <span>${trx.type ? trx.type.toUpperCase() : 'TRANSAKSI'}</span>
                        </div>
                    </div>
                    <span class="history-status status-success"><i class="ri-checkbox-circle-line"></i> Sukses</span>
                </div>
                <div class="history-card-body">
                    <div class="history-details">
                        <div class="history-detail-item copyable" onclick="copyToClipboard('${trx.id}', 'ID Transaksi')">
                            <i class="ri-qr-code-line"></i>
                            <span>ID Transaksi</span>
                            <strong style="color: #60a5fa; font-family: monospace;">${trx.id}</strong>
                            <i class="ri-file-copy-line copy-icon"></i>
                        </div>
                        <div class="history-detail-item copyable" onclick="copyToClipboard('${trx.amount}', 'Jumlah')">
                            <i class="ri-money-dollar-circle-line"></i>
                            <span>Jumlah</span>
                            <strong class="amount">Rp ${trx.amount.toLocaleString('id-ID')}</strong>
                            <i class="ri-file-copy-line copy-icon"></i>
                        </div>
                        <div class="history-detail-item copyable" onclick="copyToClipboard('${formattedDate} ${formattedTime}', 'Tanggal')">
                            <i class="ri-calendar-line"></i>
                            <span>Tanggal</span>
                            <strong>${formattedDate} ${formattedTime}</strong>
                            <i class="ri-file-copy-line copy-icon"></i>
                        </div>
                        ${detailHtml}
                    </div>
                </div>
                <div class="history-footer">
                    <i class="ri-store-line"></i>
                    <span>YussXy Store</span>
                    <i class="ri-arrow-right-s-line"></i>
                </div>
            </div>
        `;
    }).join('');
    
    // Pagination
    if (totalPages > 1) {
        paginationDiv.style.display = 'flex';
        paginationDiv.innerHTML = `
            <button class="pagination-btn" id="prevPageBtn" ${historyCurrentPage === 1 ? 'disabled' : ''}>
                <i class="ri-arrow-left-s-line"></i>
            </button>
            <div class="pagination-info">${historyCurrentPage} / ${totalPages}</div>
            <button class="pagination-btn" id="nextPageBtn" ${historyCurrentPage === totalPages ? 'disabled' : ''}>
                <i class="ri-arrow-right-s-line"></i>
            </button>
        `;
        
        const prevBtn = document.getElementById('prevPageBtn');
        const nextBtn = document.getElementById('nextPageBtn');
        
        if (prevBtn) {
            const newPrevBtn = prevBtn.cloneNode(true);
            prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
            newPrevBtn.onclick = () => {
                if (historyCurrentPage > 1) {
                    historyCurrentPage--;
                    renderHistoryPage();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            };
        }
        
        if (nextBtn) {
            const newNextBtn = nextBtn.cloneNode(true);
            nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
            newNextBtn.onclick = () => {
                if (historyCurrentPage < totalPages) {
                    historyCurrentPage++;
                    renderHistoryPage();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            };
        }
    } else {
        paginationDiv.style.display = 'none';
    }
}

// Fungsi bantu copy
function copyToClipboard(text, label) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(`✅ ${label} disalin: ${text}`);
    }).catch(() => {
        showToast(`❌ Gagal menyalin ${label}`, true);
    });
}



// ================================================
// RIWAYAT TRANSAKSI & BADGE NOTIFIKASI
// ================================================

async function checkUnreadTransactions() {
    const savedUser = localStorage.getItem('app_user');
    if (!savedUser) return;
    
    let targetIdentifier = null;
    try {
        const userData = JSON.parse(savedUser);
        targetIdentifier = userData.username || userData.phone;
    } catch(e) {}
    
    if (!targetIdentifier) return;
    
    try {
        const response = await fetch("https://backend-delta-steel-38.vercel.app/api/balance", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF"
            },
            body: JSON.stringify({
                action: "get_transactions",
                username: targetIdentifier
            })
        });
        
        const data = await response.json();
        const lastSeenKey = `last_seen_transaction_${targetIdentifier}`;
        const lastSeen = localStorage.getItem(lastSeenKey) || 0;
        
        if (data.success && data.data.transactions && data.data.transactions.length > 0) {
            const latestDate = Math.max(...data.data.transactions.map(t => new Date(t.created_at).getTime()));
            const historyBadge = document.getElementById('historyBadge');
            
            if (historyBadge) {
                if (latestDate > lastSeen) {
                    historyBadge.style.display = 'inline-block';
                } else {
                    historyBadge.style.display = 'none';
                }
            }
        }
    } catch (error) {
        console.error('Error:', error);
    }
}











document.addEventListener('DOMContentLoaded', function() {

    checkUnreadTransactions();
    

    setInterval(checkUnreadTransactions, 30000);
});


//👋👋👋👋👋👋




// ================================================
// LOAD USER STATISTICS - FIXED VERSION
// ================================================








async function loadUserStatistics() {
    const totalUsersElem = document.getElementById('totalUsers');
    const topUserElem = document.getElementById('topUser');
    const topProductElem = document.getElementById('topProduct');
    if (!totalUsersElem) return;
    totalUsersElem.innerHTML = '<i class="ri-loader-4-line animate-spin"></i>';
    topUserElem.innerHTML = '<i class="ri-loader-4-line animate-spin"></i>';
    topProductElem.innerHTML = '<i class="ri-loader-4-line animate-spin"></i>';
    try {
        const allDevicesRes = await fetch("https://backend-delta-steel-38.vercel.app/api/balance", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF"
            },
            body: JSON.stringify({ action: "get_all_users" })
        });
        const allUsersData = await allDevicesRes.json();
        if (allUsersData.success && allUsersData.users) {
            const allUsers = allUsersData.users;
            const usersWithActivity = allUsers.filter(u => 
                (u.username && u.username !== null) || 
                (u.trx_id && Array.isArray(u.trx_id) && u.trx_id.length > 0)
            );
            totalUsersElem.innerText = usersWithActivity.length;
            
            // ========== FIX: PASANG EVENT LISTENER DENGAN AMAN ==========
            const totalUserCard = document.querySelector('.stats-three-grid .stat-card:nth-child(1)');
            if (totalUserCard) {
                totalUserCard.style.cursor = 'pointer';
                totalUserCard.onclick = function(e) {
                    e.stopPropagation();
                    console.log("🖱️ Total User card diklik!");
                    showAllUsersModal();
                };
                console.log("✅ Event listener terpasang pada Total User card");
            } else {
                console.log("❌ Total User card tidak ditemukan!");
            }
            
            let userSpending = [];
            let productSales = {};
            for (const user of allUsers) {
                let totalSpent = 0;
                let displayName = user.username;
                if (!displayName && user.device_id) {
                    displayName = user.device_id.slice(0, 8) + '...';
                } else if (!displayName) {
                    displayName = 'Anonymous';
                }
                if (user.trx_id && Array.isArray(user.trx_id) && user.trx_id.length > 0) {
                    for (const trx of user.trx_id) {
                        const amount = trx.amount || 0;
                        totalSpent += amount;
                        let productName = trx.product_name || "Produk Lain";
                        if (trx.product_id === 31 || trx.type === 'reaction' || productName.includes("Reaction")) {
                            productName = "Reaction 1000 emoji";
                        }
                        if (trx.product_id === 19 || productName.includes("Reaction 90+")) {
                            productName = "Reaction 90+ emoji";
                        }
                        if (trx.product_id === 17) productName = "Aplikasi Pembuat Logo JB";
                        if (trx.product_id === 30) productName = "Aplikasi Auto Sv Kontak";
                        if (trx.product_id === 32) productName = "Apk Nonton Bioskop Free";
                        if (trx.type === 'deposit') {
                            productName = "Deposit Saldo";
                        }
                        if (trx.type === 'transfer') {
                            productName = "Transfer ke DANA";
                        }
                        if (trx.type === 'auto_sosmed') {
                            productName = trx.product_name || "Suntik Sosmed Otomatis";
                        }
                        if (trx.type === 'premium_app') {
                            productName = trx.product_name || "Aplikasi Premium";
                        }
                        if (trx.product_id === 29) {
                            productName = "Website Store";
                        }
                        if (!productSales[productName]) {
                            productSales[productName] = { count: 0, total: 0 };
                        }
                        productSales[productName].count++;
                        productSales[productName].total += amount;
                    }
                }
                if (totalSpent > 0) {
                    userSpending.push({ 
                        username: displayName, 
                        originalName: user.username,
                        device_id: user.device_id,
                        phone: user.phone,
                        total: totalSpent,
                        transactionCount: user.trx_id ? user.trx_id.length : 0,
                        rawData: user
                    });
                }
            }
            userSpending.sort((a, b) => b.total - a.total);
            const topUserCard = document.querySelector('.stats-three-grid .stat-card:nth-child(2)');
            if (userSpending.length > 0) {
                const topUser = userSpending[0];
                topUserElem.innerHTML = `${topUser.username}<br><span style="font-size: 10px; color: #10b981;">Rp ${topUser.total.toLocaleString('id-ID')}</span>`;
                topUserElem.classList.add('small');
                if (topUserCard) {
                    topUserCard.style.cursor = 'pointer';
                    topUserCard.onclick = () => {
                        let hiddenPhone = topUser.phone || '-';
                        if (hiddenPhone !== '-' && hiddenPhone.length > 5) {
                            hiddenPhone = hiddenPhone.substring(0, 5) + '***';
                        } else if (hiddenPhone !== '-' && hiddenPhone.length <= 5) {
                            hiddenPhone = hiddenPhone.substring(0, 2) + '***';
                        }
                        const content = `
                            <div style="display: flex; flex-direction: column; gap: 12px;">
                                <div style="background: rgba(16,185,129,0.1); padding: 12px; border-radius: 12px; text-align: center;">
                                    <i class="ri-medal-line" style="font-size: 32px; color: #10b981;"></i>
                                    <div style="font-size: 20px; font-weight: 800; margin-top: 8px;">🏆 TOP USER</div>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label"><i class="ri-user-line"></i> Nama</span>
                                    <span class="detail-value">${topUser.originalName || topUser.username}</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label"><i class="ri-phone-line"></i> Nomor HP</span>
                                    <span class="detail-value">${hiddenPhone}</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label"><i class="ri-device-line"></i> Device ID</span>
                                    <span class="detail-value">${topUser.device_id || '-'}</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label"><i class="ri-money-dollar-circle-line"></i> Total Belanja</span>
                                    <span class="detail-value" style="color: #10b981;">Rp ${topUser.total.toLocaleString('id-ID')}</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label"><i class="ri-shopping-bag-line"></i> Jumlah Transaksi</span>
                                    <span class="detail-value">${topUser.transactionCount} transaksi</span>
                                </div>
                            </div>
                        `;
                        showDetailModal('Detail Top User', content);
                    };
                }
            } else {
                topUserElem.innerText = '-';
            }
            let topProduct = null;
            let topProductCount = 0;
            let topProductFullData = null;
            for (const [name, data] of Object.entries(productSales)) {
                if (data.count > topProductCount) {
                    topProductCount = data.count;
                    topProduct = name;
                    topProductFullData = data;
                }
            }
            const topProductCard = document.querySelector('.stats-three-grid .stat-card:nth-child(3)');
            if (topProduct) {
                const shortName = topProduct.length > 15 ? topProduct.substring(0, 15) + '...' : topProduct;
                topProductElem.innerHTML = `${shortName}<br><span style="font-size: 10px; color: #10b981;">${topProductCount}x terjual</span>`;
                topProductElem.classList.add('small');
                if (topProductCard) {
                    topProductCard.style.cursor = 'pointer';
                    topProductCard.onclick = () => {
                        const totalRevenue = topProductFullData ? topProductFullData.total : 0;
                        const content = `
                            <div style="display: flex; flex-direction: column; gap: 12px;">
                                <div style="background: rgba(16,185,129,0.1); padding: 12px; border-radius: 12px; text-align: center;">
                                    <i class="ri-shopping-bag-3-line" style="font-size: 32px; color: #10b981;"></i>
                                    <div style="font-size: 20px; font-weight: 800; margin-top: 8px;">📦 TOP PEMBELIAN</div>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label"><i class="ri-shopping-bag-line"></i> Nama Produk</span>
                                    <span class="detail-value">${topProduct}</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label"><i class="ri-bar-chart-line"></i> Total Terjual</span>
                                    <span class="detail-value" style="color: #10b981;">${topProductCount} kali</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label"><i class="ri-money-dollar-circle-line"></i> Total Pendapatan</span>
                                    <span class="detail-value" style="color: #10b981;">Rp ${totalRevenue.toLocaleString('id-ID')}</span>
                                </div>
                            </div>
                        `;
                        showDetailModal('Detail Top Pembelian', content);
                    };
                }
            } else {
                topProductElem.innerText = '-';
            }
        } else {
            totalUsersElem.innerText = '0';
            topUserElem.innerText = '-';
            topProductElem.innerText = '-';
        }
    } catch (error) {
        console.error("❌ Error loading statistics:", error);
        totalUsersElem.innerText = '?';
        topUserElem.innerText = 'Error';
        topProductElem.innerText = 'Error';
    }
}

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        loadUserStatistics();
        setInterval(loadUserStatistics, 30000);
    });
}



async function showAllUsersModal() {
    const toast = document.createElement('div');
    toast.className = 'toast-professional';
    toast.innerHTML = `
        <div class="toast-icon" style="background: rgba(59, 130, 246, 0.12); border-color: rgba(59, 130, 246, 0.2);">
            <i class="ri-loader-4-line" style="color: #3b82f6; animation: spin 0.8s linear infinite;"></i>
        </div>
        <div class="toast-content">
            <div class="toast-title" style="color: var(--text-primary);">Memuat daftar user...</div>
        </div>
        <div class="toast-progress" style="background: #3b82f6; animation-play-state: paused;"></div>
    `;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    
    try {
        const response = await fetch("https://backend-delta-steel-38.vercel.app/api/balance", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF"
            },
            body: JSON.stringify({ action: "get_all_users" })
        });
        const data = await response.json();
        toast.remove();
        
        if (!data.success || !data.users) {
            showProfessionalToast('Gagal mengambil data user', 'error');
            return;
        }
        
        const users = data.users;
        users.sort((a, b) => (b.balance || 0) - (a.balance || 0));
        
        const userData = users.map(user => {
            let totalSpent = 0;
            if (user.trx_id && Array.isArray(user.trx_id)) {
                for (const trx of user.trx_id) {
                    totalSpent += trx.amount || 0;
                }
            }
            let maskedPhone = '-';
            if (user.phone) {
                const phone = user.phone.replace(/\D/g, '');
                if (phone.length >= 8) {
                    maskedPhone = phone.substring(0, 3) + '*****' + phone.substring(phone.length - 3);
                } else if (phone.length >= 5) {
                    maskedPhone = phone.substring(0, 2) + '***' + phone.substring(phone.length - 2);
                } else {
                    maskedPhone = phone;
                }
            }
            return {
                ...user,
                totalSpent: totalSpent,
                displayName: user.username || user.phone || user.device_id?.slice(0, 8) + '...' || 'Anonymous',
                initial: (user.username || user.phone || '?').charAt(0).toUpperCase(),
                maskedPhone: maskedPhone
            };
        });
        
        const ITEMS_PER_PAGE = 20;
        let currentPage = 1;
        let filteredData = [...userData];
        const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
        
        function renderUserPage(page) {
            const start = (page - 1) * ITEMS_PER_PAGE;
            const end = start + ITEMS_PER_PAGE;
            const pageData = filteredData.slice(start, end);
            
            const tbody = document.getElementById('userTableBody');
            if (!tbody) return;
            
            if (pageData.length === 0) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="4" style="text-align: center; padding: 30px; color: var(--text-secondary);">
                            <i class="ri-search-line" style="font-size: 24px; display: block; margin-bottom: 8px;"></i>
                            User tidak ditemukan
                        </td>
                    </tr>
                `;
            } else {
                tbody.innerHTML = pageData.map((user, index) => `
                    <tr class="user-table-row" data-user='${JSON.stringify(user).replace(/'/g, "&#39;")}'>
                        <td>${start + index + 1}</td>
                        <td>
                            <div class="user-cell-name">
                                <div class="user-avatar" style="background: ${getColorFromName(user.displayName)};">${user.initial}</div>
                                <div>
                                    <div class="user-name">${user.displayName}</div>
                                    ${user.maskedPhone !== '-' ? `<div class="user-phone">${user.maskedPhone}</div>` : ''}
                                </div>
                            </div>
                        </td>
                        <td class="user-cell-balance">Rp ${(user.balance || 0).toLocaleString('id-ID')}</td>
                        <td class="user-cell-spent">Rp ${user.totalSpent.toLocaleString('id-ID')}</td>
                    </tr>
                `).join('');
            }
            
            document.querySelectorAll('.user-table-row').forEach(row => {
                row.addEventListener('click', function() {
                    const user = JSON.parse(this.dataset.user);
                    showUserProfileModal(user);
                });
            });
            
            const pageInfo = document.getElementById('userPageInfo');
            const prevBtn = document.getElementById('userPrevPage');
            const nextBtn = document.getElementById('userNextPage');
            if (pageInfo) pageInfo.textContent = page + ' / ' + totalPages;
            if (prevBtn) prevBtn.disabled = page <= 1;
            if (nextBtn) nextBtn.disabled = page >= totalPages;
        }
        
        function performSearch(keyword) {
            const searchTerm = keyword.toLowerCase().trim();
            if (!searchTerm) {
                filteredData = [...userData];
            } else {
                filteredData = userData.filter(user => {
                    const name = (user.displayName || '').toLowerCase();
                    const phone = (user.maskedPhone || '').toLowerCase();
                    const username = (user.username || '').toLowerCase();
                    return name.includes(searchTerm) || phone.includes(searchTerm) || username.includes(searchTerm);
                });
            }
            currentPage = 1;
            const newTotalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
            document.getElementById('userPageInfo').textContent = '1 / ' + Math.max(newTotalPages, 1);
            renderUserPage(1);
        }
        
        const modal = document.createElement('div');
        modal.className = 'modal active user-list-modal';
        modal.style.display = 'flex';
        modal.innerHTML = `
            <div class="modal-content user-list-content">
                <div class="modal-header user-list-header">
                    <div class="user-list-title">
                        <i class="ri-group-line"></i>
                        <h3>Daftar User</h3>
                        <span class="user-count-badge">${users.length}</span>
                    </div>
                    <button class="modal-close" id="closeUserListModal">
                        <i class="ri-close-line"></i>
                    </button>
                </div>
                <div class="modal-body user-list-body">
                    <div class="user-list-stats">
                        <div class="user-stat-item">
                            <span class="user-stat-number">${users.length}</span>
                            <span class="user-stat-label">Total User</span>
                        </div>
                        <div class="user-stat-item">
                            <span class="user-stat-number">${userData.filter(u => u.balance > 0).length}</span>
                            <span class="user-stat-label">User Aktif</span>
                        </div>
                    </div>
                    <div class="user-list-search">
                        <i class="ri-search-line"></i>
                        <input type="text" id="userListSearch" placeholder="Cari user..." class="user-search-input">
                        <button class="user-search-clear" id="userSearchClear" style="display: none;">
                            <i class="ri-close-circle-line"></i>
                        </button>
                    </div>
                    <div class="user-search-info" id="userSearchInfo" style="display: none;"></div>
                    <div class="user-table-wrapper">
                        <table class="user-table">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>User</th>
                                    <th>Saldo</th>
                                    <th>Total Belanja</th>
                                </tr>
                            </thead>
                            <tbody id="userTableBody"></tbody>
                        </table>
                    </div>
                    <div class="user-pagination" id="userPagination">
                        <button class="user-page-btn" id="userPrevPage" disabled>
                            <i class="ri-arrow-left-s-line"></i>
                        </button>
                        <span id="userPageInfo">1 / ${totalPages}</span>
                        <button class="user-page-btn" id="userNextPage">
                            <i class="ri-arrow-right-s-line"></i>
                        </button>
                    </div>
                </div>
                <div class="user-list-footer">
                    <button class="user-list-close-btn" id="closeUserListBtn">
                        <i class="ri-close-line"></i> Tutup
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        renderUserPage(1);
        
        document.getElementById('userPrevPage').addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                renderUserPage(currentPage);
            }
        });
        
        document.getElementById('userNextPage').addEventListener('click', function() {
            const maxPage = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
            if (currentPage < maxPage) {
                currentPage++;
                renderUserPage(currentPage);
            }
        });
        
        const searchInput = document.getElementById('userListSearch');
        const searchClear = document.getElementById('userSearchClear');
        const searchInfo = document.getElementById('userSearchInfo');
        
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                const keyword = this.value;
                const searchInfo = document.getElementById('userSearchInfo');
                const searchClear = document.getElementById('userSearchClear');
                
                if (keyword.length > 0) {
                    if (searchClear) searchClear.style.display = 'flex';
                } else {
                    if (searchClear) searchClear.style.display = 'none';
                }
                
                performSearch(keyword);
                
                if (searchInfo) {
                    if (keyword.length > 0) {
                        searchInfo.style.display = 'block';
                        searchInfo.innerHTML = `
                            <i class="ri-search-line"></i>
                            Menampilkan <strong>${filteredData.length}</strong> dari <strong>${userData.length}</strong> user
                        `;
                    } else {
                        searchInfo.style.display = 'none';
                    }
                }
            });
        }
        
        if (searchClear) {
            searchClear.addEventListener('click', function() {
                if (searchInput) {
                    searchInput.value = '';
                    this.style.display = 'none';
                    performSearch('');
                    if (searchInfo) searchInfo.style.display = 'none';
                    searchInput.focus();
                }
            });
        }
        
        const closeBtn1 = document.getElementById('closeUserListModal');
        const closeBtn2 = document.getElementById('closeUserListBtn');
        const closeModal = () => {
            modal.classList.add('closing');
            setTimeout(() => {
                modal.remove();
            }, 250);
        };
        if (closeBtn1) closeBtn1.addEventListener('click', closeModal);
        if (closeBtn2) closeBtn2.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
        
        showProfessionalToast(users.length + ' user dimuat', 'added');
        
    } catch (error) {
        console.error('Error:', error);
        toast.remove();
        showProfessionalToast('Gagal memuat daftar user', 'error');
    }
}

function showUserProfileModal(user) {
    const displayName = user.username || user.phone || user.device_id?.slice(0, 8) + '...' || 'Anonymous';
    const initial = displayName.charAt(0).toUpperCase();
    const color = getColorFromName(displayName);
    
    let totalSpent = 0;
    let transactionCount = 0;
    if (user.trx_id && Array.isArray(user.trx_id)) {
        for (const trx of user.trx_id) {
            totalSpent += trx.amount || 0;
            transactionCount++;
        }
    }
    
    let maskedPhone = '-';
    if (user.phone) {
        const phone = user.phone.replace(/\D/g, '');
        if (phone.length >= 8) {
            maskedPhone = phone.substring(0, 3) + '*****' + phone.substring(phone.length - 3);
        } else if (phone.length >= 5) {
            maskedPhone = phone.substring(0, 2) + '***' + phone.substring(phone.length - 2);
        } else {
            maskedPhone = phone;
        }
    }
    
    let lastTransaction = '-';
    if (user.trx_id && Array.isArray(user.trx_id) && user.trx_id.length > 0) {
        const lastTrx = user.trx_id[user.trx_id.length - 1];
        if (lastTrx && lastTrx.created_at) {
            const date = new Date(lastTrx.created_at);
            lastTransaction = date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
        }
    }
    
    const modal = document.createElement('div');
    modal.className = 'modal active user-profile-modal';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-content user-profile-content">
            <div class="modal-header user-profile-header">
                <button class="modal-back" id="closeUserProfileModal">
                    <i class="ri-arrow-left-line"></i>
                </button>
                <h3>Profil User</h3>
                <button class="modal-close" id="closeUserProfileModalBtn">
                    <i class="ri-close-line"></i>
                </button>
            </div>
            <div class="modal-body user-profile-body">
                <div class="user-profile-avatar-section">
                    <div class="user-profile-avatar" style="background: ${color};">${initial}</div>
                    <div class="user-profile-name">${displayName}</div>
                    ${user.role ? `<div class="user-profile-role">${user.role}</div>` : ''}
                </div>
                <div class="user-profile-divider"></div>
                <div class="user-profile-info-grid">
                    <div class="user-profile-item">
                        <div class="user-profile-icon"><i class="ri-user-line"></i></div>
                        <div>
                            <div class="user-profile-label">Username</div>
                            <div class="user-profile-value">${user.username || '-'}</div>
                        </div>
                    </div>
                    <div class="user-profile-item">
                        <div class="user-profile-icon"><i class="ri-phone-line"></i></div>
                        <div>
                            <div class="user-profile-label">Nomor HP</div>
                            <div class="user-profile-value">${maskedPhone}</div>
                        </div>
                    </div>
                    <div class="user-profile-item">
                        <div class="user-profile-icon"><i class="ri-mail-line"></i></div>
                        <div>
                            <div class="user-profile-label">Email</div>
                            <div class="user-profile-value">${user.email || '-'}</div>
                        </div>
                    </div>
                    <div class="user-profile-item">
                        <div class="user-profile-icon"><i class="ri-fingerprint-line"></i></div>
                        <div>
                            <div class="user-profile-label">Device ID</div>
                            <div class="user-profile-value mono">${user.device_id || '-'}</div>
                        </div>
                    </div>
                    <div class="user-profile-item highlight">
                        <div class="user-profile-icon"><i class="ri-wallet-3-line"></i></div>
                        <div>
                            <div class="user-profile-label">Saldo</div>
                            <div class="user-profile-value balance">Rp ${(user.balance || 0).toLocaleString('id-ID')}</div>
                        </div>
                    </div>
                    <div class="user-profile-item">
                        <div class="user-profile-icon"><i class="ri-shopping-bag-3-line"></i></div>
                        <div>
                            <div class="user-profile-label">Total Belanja</div>
                            <div class="user-profile-value spent">Rp ${totalSpent.toLocaleString('id-ID')}</div>
                        </div>
                    </div>
                    <div class="user-profile-item">
                        <div class="user-profile-icon"><i class="ri-list-check"></i></div>
                        <div>
                            <div class="user-profile-label">Jumlah Transaksi</div>
                            <div class="user-profile-value">${transactionCount} transaksi</div>
                        </div>
                    </div>
                    <div class="user-profile-item">
                        <div class="user-profile-icon"><i class="ri-calendar-line"></i></div>
                        <div>
                            <div class="user-profile-label">Terakhir Transaksi</div>
                            <div class="user-profile-value">${lastTransaction}</div>
                        </div>
                    </div>
                    ${user.created_at ? `
                    <div class="user-profile-item">
                        <div class="user-profile-icon"><i class="ri-calendar-2-line"></i></div>
                        <div>
                            <div class="user-profile-label">Bergabung</div>
                            <div class="user-profile-value">${new Date(user.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
                        </div>
                    </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    const closeModal = () => {
        modal.classList.add('closing');
        setTimeout(() => {
            modal.remove();
        }, 250);
    };
    
    document.getElementById('closeUserProfileModal')?.addEventListener('click', closeModal);
    document.getElementById('closeUserProfileModalBtn')?.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}


function getColorFromName(name) {
    if (!name) return '#ef4444';
    const colors = [
        '#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6',
        '#ec4899', '#14b8a6', '#f97316', '#6366f1', '#06b6d4'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
}










// ================================================
// DETAIL TOP USER & TOP PEMBELIAN (MODAL POPUP)
// ================================================

let topUserData = null;
let topProductData = null;

function showDetailModal(title, content) {
    const oldModal = document.getElementById('customDetailModal');
    if (oldModal) oldModal.remove();
    
    const modal = document.createElement('div');
    modal.id = 'customDetailModal';
    modal.className = 'custom-detail-modal';
    modal.innerHTML = `
        <div class="custom-detail-overlay"></div>
        <div class="custom-detail-content">
            <div class="custom-detail-header">
                <i class="ri-information-line"></i>
                <h3>${title}</h3>
                <button class="custom-detail-close">
                    <i class="ri-close-line"></i>
                </button>
            </div>
            <div class="custom-detail-body">
                ${content}
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    setTimeout(() => modal.classList.add('show'), 10);
    
    modal.querySelector('.custom-detail-close').addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    });
    modal.querySelector('.custom-detail-overlay').addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    });
}









async function getUserName() {
    try {
        const deviceId = localStorage.getItem("device_fingerprint");
        if (!deviceId) return null;
        
        const response = await fetch("https://backend-delta-steel-38.vercel.app/api/balance", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF"
            },
            body: JSON.stringify({
                action: "get",
                device_id: deviceId
            })
        });
        
        const data = await response.json();
        
        if (data.success && data.data) {
            return data.data.username || data.data.phone || null;
        }
        return null;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}


async function updateUserNameDisplay() {
    const userNameSpan = document.getElementById('userNameDisplay');
    if (!userNameSpan) return;
    
    const username = await getUserName();
    if (username) {
        userNameSpan.textContent = username;
        userNameSpan.style.display = 'inline-block';
    } else {
        userNameSpan.style.display = 'none';
    }
}

// Update fungsi getSaldo yang sudah ada, tambahkan panggilan updateUserNameDisplay
async function getSaldo() {
    try {
        const savedUser = localStorage.getItem('app_user');
        
        if (!savedUser) {
            console.log("User belum login");
            document.getElementById("userSaldoAmount").innerHTML = `<span class="saldo-value">Rp 0</span>`;
            return;
        }
        
        const userData = JSON.parse(savedUser);
        const username = userData.username || userData.name;
        const phone = userData.phone;
        const identifier = username || phone;
        
        if (!identifier) {
            document.getElementById("userSaldoAmount").innerHTML = `<span class="saldo-value">Rp 0</span>`;
            return;
        }
        
        const searchRes = await fetch("https://backend-delta-steel-38.vercel.app/api/balance", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF"
            },
            body: JSON.stringify({
                action: "search_user",
                query: identifier
            })
        });
        
        const searchData = await searchRes.json();
        
        if (searchData.success && searchData.data) {
            const user = searchData.data;
            const balance = user.balance || 0;
            
            // TAMPILKAN SALDO DENGAN DESAIN BARU
            document.getElementById("userSaldoAmount").innerHTML = `
                <span class="saldo-value">
                    <span class="saldo-currency">Rp</span>
                    <span class="saldo-number">${balance.toLocaleString('id-ID')}</span>
                </span>
            `;
            
            if (user.device_id && !localStorage.getItem('device_fingerprint')) {
                localStorage.setItem('device_fingerprint', user.device_id);
            }
            
        } else {
            document.getElementById("userSaldoAmount").innerHTML = `<span class="saldo-value">Rp 0</span>`;
        }
        
    } catch (err) {
        console.log("Error getSaldo:", err.message);
        document.getElementById("userSaldoAmount").innerHTML = `<span class="saldo-value">Rp 0</span>`;
    }
}

// ================================================
// CEK SESSION USER DAN AMBIL DATA DARI DATABASE
// ================================================

async function checkUserSession() {
    const savedUser = localStorage.getItem('app_user');
    if (!savedUser) {
        window.location.href = 'mm/mm.html';
        return false;
    }
    
    try {
        const userData = JSON.parse(savedUser);
        const deviceId = userData.device_id || localStorage.getItem('device_fingerprint');
        
        if (!deviceId) {
            window.location.href = 'mm.html';
            return false;
        }
        
        // Verifikasi ke database
        const response = await fetch("https://backend-delta-steel-38.vercel.app/api/balance", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF"
            },
            body: JSON.stringify({
                action: "get",
                device_id: deviceId
            })
        });
        
        const data = await response.json();
        
        if (!data.success || !data.data) {
            // Session tidak valid, hapus dan redirect ke login
            localStorage.removeItem('app_user');
            window.location.href = 'mm.html';
            return false;
        }
        
        // Update currentUser dengan data terbaru dari database
        window.currentUser = {
            ...userData,
            username: data.data.username,
            phone: data.data.phone,
            balance: data.data.balance
        };
        
        return true;
        
    } catch (error) {
        console.error('Session check error:', error);
        return false;
    }
}

// Fungsi logout
function userLogout() {
    localStorage.removeItem('app_user');
    localStorage.removeItem('device_fingerprint');
    window.location.href = 'mm/mm.html';
}





// ================================================
// FUNGSI TAMBAH DEVICE ID (MANUAL INPUT)
// ================================================

async function addMyDeviceId() {
    console.log("🔧 addMyDeviceId dipanggil");
    
    const savedUser = localStorage.getItem('app_user');
    if (!savedUser) {
        showToast('❌ Silakan login terlebih dahulu!', true);
        return;
    }
    
    let userData;
    try {
        userData = JSON.parse(savedUser);
    } catch(e) {
        showToast('❌ Gagal membaca data user', true);
        return;
    }
    
    const identifier = userData.username || userData.phone;
    const newDeviceId = document.getElementById('manualDeviceId').value.trim().toUpperCase();
    
    console.log("📝 Identifier:", identifier);
    console.log("📝 Device ID:", newDeviceId);
    
    if (!newDeviceId) {
        showToast('❌ Masukkan Device ID terlebih dahulu!', true);
        return;
    }
    
    if (!/^[A-F0-9]{16}$/.test(newDeviceId)) {
        showToast('❌ Device ID harus 16 karakter (huruf A-F dan angka 0-9)', true);
        return;
    }
    
    const resultBox = document.getElementById('addDeviceResult');
    const addBtn = document.getElementById('addDeviceIdBtn');
    const deviceInput = document.getElementById('manualDeviceId');
    
    if (resultBox) {
        resultBox.innerHTML = '<div style="color: #3b82f6;"><i class="ri-loader-4-line animate-spin"></i> Memproses...</div>';
    }
    if (addBtn) {
        addBtn.disabled = true;
        addBtn.style.opacity = '0.5';
        addBtn.innerHTML = '<i class="ri-loader-4-line animate-spin"></i> Memproses...';
    }
    if (deviceInput) {
        deviceInput.disabled = true;
    }
    
    try {
        const res = await fetch("https://backend-delta-steel-38.vercel.app/api/balance", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF"
            },
            body: JSON.stringify({
                action: "update_device_id",
                username: identifier,
                device_id: newDeviceId
            })
        });
        
        const data = await res.json();
        console.log("📡 Response:", data);
        
        if (data.success) {
            localStorage.setItem('device_fingerprint', newDeviceId);
            
            if (resultBox) {
                resultBox.innerHTML = `
                    <div style="background: rgba(16,185,129,0.2); padding: 10px; border-radius: 8px; color: #10b981;">
                        <i class="ri-checkbox-circle-line"></i> Device ID berhasil disimpan!
                    </div>
                `;
            }
            showToast('✅ Device ID berhasil ditambahkan ke akun Anda!');
            
            if (deviceInput) {
                deviceInput.value = '';
            }
            
            setTimeout(() => {
                loadUserProfile();
                if (addBtn) {
                    addBtn.disabled = false;
                    addBtn.style.opacity = '1';
                    addBtn.innerHTML = '<i class="ri-fingerprint-line"></i> Simpan Device ID';
                }
                if (deviceInput) {
                    deviceInput.disabled = false;
                }
            }, 1500);
        } else {
            if (resultBox) {
                resultBox.innerHTML = `<div style="color: #f87171;">❌ ${data.message || 'Gagal menambahkan Device ID'}</div>`;
            }
            showToast('❌ Gagal menambahkan Device ID', true);
            if (addBtn) {
                addBtn.disabled = false;
                addBtn.style.opacity = '1';
                addBtn.innerHTML = '<i class="ri-fingerprint-line"></i> Simpan Device ID';
            }
            if (deviceInput) {
                deviceInput.disabled = false;
            }
        }
    } catch (error) {
        console.error('Error:', error);
        if (resultBox) {
            resultBox.innerHTML = '<div style="color: #f87171;">❌ Gagal koneksi ke server</div>';
        }
        showToast('❌ Gagal koneksi ke server', true);
        if (addBtn) {
            addBtn.disabled = false;
            addBtn.style.opacity = '1';
            addBtn.innerHTML = '<i class="ri-fingerprint-line"></i> Simpan Device ID';
        }
        if (deviceInput) {
            deviceInput.disabled = false;
        }
    }
}

// ================================================
// LOAD USER PROFILE
// ================================================

async function loadUserProfile() {
    const savedUser = localStorage.getItem('app_user');
    
    if (!savedUser) {
        console.log('User tidak login');
        return;
    }
    
    let username = null;
    try {
        const userData = JSON.parse(savedUser);
        username = userData.username;
    } catch(e) {
        console.log('Error parsing user data');
        return;
    }
    
    if (!username) {
        console.log('Username tidak ditemukan');
        return;
    }
    
    try {
        const response = await fetch("https://backend-delta-steel-38.vercel.app/api/balance", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF"
            },
            body: JSON.stringify({
                action: "search_user",
                query: username
            })
        });
        
        const data = await response.json();
        
        if (data.success && data.data) {
            const user = data.data;
            
            const usernameElem = document.getElementById('profileUsername');
            const phoneElem = document.getElementById('profilePhone');
            const emailElem = document.getElementById('profileEmail');
            const roleElem = document.getElementById('profileRole');
            const balanceElem = document.getElementById('profileBalance');
            const deviceIdElem = document.getElementById('profileDeviceId');
            const deviceStatusText = document.getElementById('deviceStatusText');
            const joinDateElem = document.getElementById('profileJoinDate');
            
            if (usernameElem) usernameElem.textContent = user.username || '-';
            if (phoneElem) phoneElem.textContent = user.phone || '-';
            if (emailElem) emailElem.textContent = user.email || '-';
            if (roleElem) roleElem.textContent = user.role || 'user';
            if (balanceElem) balanceElem.innerHTML = `Rp ${(user.balance || 0).toLocaleString('id-ID')}`;
            
            if (deviceIdElem) {
                if (user.device_id) {
                    deviceIdElem.innerHTML = `<span style="font-family: monospace; color: #10b981;">${user.device_id}</span>`;
                    if (deviceStatusText) {
                        deviceStatusText.innerHTML = '✅ Device ID sudah terdaftar.';
                        deviceStatusText.style.color = '#10b981';
                    }
                    // Sembunyikan section tambah device
                    const addSection = document.getElementById('addDeviceSection');
                    if (addSection) addSection.style.display = 'none';
                } else {
                    deviceIdElem.innerHTML = '<span style="color: #f59e0b;">Belum ada</span>';
                    if (deviceStatusText) {
                        deviceStatusText.innerHTML = '⚠️ Akun Anda belum memiliki Device ID. Masukkan Device ID di atas.';
                        deviceStatusText.style.color = '#f59e0b';
                    }
                    // Tampilkan section tambah device
                    const addSection = document.getElementById('addDeviceSection');
                    if (addSection) addSection.style.display = 'block';
                }
            }
            
            if (user.created_at && joinDateElem) {
                const date = new Date(user.created_at);
                joinDateElem.textContent = date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
            } else if (joinDateElem) {
                joinDateElem.textContent = '-';
            }
        }
    } catch (error) {
        console.error('Error loading profile:', error);
    }
}









// ================================================
// EVENT LISTENER (PASTIKAN TOMBOL BERFUNGSI)
// ================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ DOM loaded, memasang event listener...");
    
    // Gunakan setTimeout untuk memastikan element sudah ada
    setTimeout(function() {
        const addDeviceBtn = document.getElementById('addDeviceIdBtn');
        console.log("🔍 addDeviceIdBtn ditemukan:", addDeviceBtn);
        
        if (addDeviceBtn) {
            // Hapus semua event listener lama
            const newBtn = addDeviceBtn.cloneNode(true);
            addDeviceBtn.parentNode.replaceChild(newBtn, addDeviceBtn);
            newBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log("🖱️ Tombol diklik!");
                addMyDeviceId();
            });
            console.log("✅ Event listener terpasang!");
        } else {
            console.log("❌ Tombol addDeviceIdBtn tidak ditemukan!");
        }
    }, 500);
    
    // Auto uppercase saat user mengetik
    const deviceInput = document.getElementById('manualDeviceId');
    if (deviceInput) {
        deviceInput.addEventListener('input', function() {
            this.value = this.value.toUpperCase().replace(/[^A-F0-9]/g, '');
        });
    }
    
    // Load profile
    loadUserProfile();
});





const logoutBtnInfo = document.getElementById('logoutBtnInfo');
if (logoutBtnInfo) {
    logoutBtnInfo.addEventListener('click', () => {
        userLogout();
    });
}









// ================================================
// LOAD LOGIN INFO GRID
// ================================================

async function loadLoginInfo() {
    const savedUser = localStorage.getItem('app_user');
    
    const usernameElem = document.getElementById('loginUsername');
    const phoneElem = document.getElementById('loginPhone');
    const roleElem = document.getElementById('loginRole');
    
    if (!savedUser) {
        if (usernameElem) usernameElem.textContent = 'Belum Login';
        if (phoneElem) phoneElem.textContent = '-';
        if (roleElem) roleElem.textContent = '-';
        return;
    }
    
    try {
        const userData = JSON.parse(savedUser);
        const username = userData.username;
        const phone = userData.phone;
        const role = userData.role || 'user';
        
        if (usernameElem) usernameElem.textContent = username || '-';
        if (phoneElem) {
            let shortPhone = phone;
            if (phone && phone.length > 10) {
                shortPhone = phone.substring(0, 5) + '...' + phone.substring(phone.length - 3);
            }
            phoneElem.textContent = shortPhone || '-';
        }
        if (roleElem) roleElem.textContent = role;
        
    } catch (error) {
        console.error('Error loading login info:', error);
        if (usernameElem) usernameElem.textContent = 'Error';
        if (phoneElem) phoneElem.textContent = '-';
        if (roleElem) roleElem.textContent = '-';
    }
}












// ================================================
// MODAL SUNTIK SOSMED OTOMATIS
// ================================================

let selectedAutoService = null;
function showAutoSosmedModal() {
    const modal = document.getElementById('autoSosmedModal');
    if (!modal) return;
    const closeBtn = document.getElementById('closeAutoSosmedModal');
    if (closeBtn) {
        const newCloseBtn = closeBtn.cloneNode(true);
        closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);
        newCloseBtn.onclick = function() {
            closeAutoSosmedModal();
        };
    }
    modal.onclick = function(e) {
        if (e.target === modal) {
            closeAutoSosmedModal();
        }
    };
    const modalBody = document.getElementById('autoSosmedBody');
    if (modalBody) {
        modalBody.innerHTML = `
            <div class="service-selector">
                <label><i class="ri-service-line"></i> Pilih Layanan</label>
                <select id="autoServiceSelect" class="service-select">
                    <option value="">-- Pilih Layanan --</option>
                </select>
            </div>
            <div id="autoServiceDetail" style="display: none;">
                <div class="service-info-card">
                    <div class="service-name" id="autoSelectedServiceName"></div>
                    <div class="service-price-info" id="autoSelectedServicePrice"></div>
                    <div class="service-desc" id="autoSelectedServiceDesc"></div>
                </div>
                <div class="target-input-group">
                    <label><i class="ri-link"></i> Target</label>
                    <input type="text" id="autoServiceTarget" class="service-target-input" placeholder="">
                    <p class="target-hint" id="autoTargetHint"></p>
                </div>
                <div class="quantity-input-group">
                    <label><i class="ri-bar-chart-line"></i> Jumlah Pesanan</label>
                    <div class="min-quantity-badge">
                        <div class="min-quantity-content">
                            <i class="ri-information-line"></i>
                            <span>Minimal pesan <strong id="autoMinQtyValue">-</strong></span>
                        </div>
                    </div>
                    <div class="quantity-wrapper">
                        <button type="button" class="qty-decr-btn" id="autoQtyDecrBtn">-</button>
                        <input type="number" id="autoServiceQuantity" class="service-quantity" value="1000" min="50" step="50">
                        <button type="button" class="qty-incr-btn" id="autoQtyIncrBtn">+</button>
                    </div>
                </div>
                <div class="price-breakdown">
                    <div class="breakdown-item">
                        <span>Harga per unit</span>
                        <span id="autoPricePerUnit">Rp 0</span>
                    </div>
                    <div class="breakdown-item total">
                        <span>Total Harga</span>
                        <span id="autoTotalPrice">Rp 0</span>
                    </div>
                </div>
                <div class="modal-buttons-service">
                    <button class="order-now-service-btn" id="autoOrderNowBtn">
                        <i class="ri-flashlight-line"></i> Pesan Sekarang
                    </button>
                </div>
                <div style="margin-top: 16px; text-align: center; padding-top: 12px; border-top: 1px solid var(--border);">
                    <button onclick="window.location.href='layanan.html'" style="background: var(--bg-secondary); border: 1px solid var(--border); color: var(--text-primary); font-size: 13px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; padding: 10px 24px; border-radius: 30px; transition: all 0.3s ease; width: 100%; justify-content: center;" onmouseover="this.style.background='var(--accent)'; this.style.color='white'; this.style.borderColor='var(--accent)'" onmouseout="this.style.background='var(--bg-secondary)'; this.style.color='var(--text-primary)'; this.style.borderColor='var(--border)'">
                        <i class="ri-file-text-line" style="font-size: 18px;"></i>
                        Ketentuan Layanan
                        <i class="ri-arrow-right-line" style="font-size: 16px;"></i>
                    </button>
                </div>
            </div>
        `;
    }
    const newServiceSelect = document.getElementById('autoServiceSelect');
    const newServiceDetail = document.getElementById('autoServiceDetail');
    let options = '<option value="">-- Pilih Layanan --</option>';
    autoSosmedServices.forEach(service => {
        options += `<option value="${service.id}">${service.name}</option>`;
    });
    if (newServiceSelect) newServiceSelect.innerHTML = options;
    modal.classList.add('active');
    if (newServiceSelect) {
        newServiceSelect.onchange = function() {
            const serviceId = parseInt(this.value);
            if (!serviceId) {
                if (newServiceDetail) newServiceDetail.style.display = 'none';
                selectedAutoService = null;
                return;
            }
            const service = autoSosmedServices.find(s => s.id === serviceId);
            if (!service) return;
            selectedAutoService = service;
            const nameEl = document.getElementById('autoSelectedServiceName');
            const priceEl = document.getElementById('autoSelectedServicePrice');
            const descEl = document.getElementById('autoSelectedServiceDesc');
            const targetInput = document.getElementById('autoServiceTarget');
            const targetHint = document.getElementById('autoTargetHint');
            const minQtyEl = document.getElementById('autoMinQtyValue');
            const quantityInput = document.getElementById('autoServiceQuantity');
            if (nameEl) nameEl.innerHTML = service.name;
            if (priceEl) priceEl.innerHTML = `Rp ${service.price.toLocaleString('id-ID')} / 1.000 ${service.unit}`;
            if (descEl) descEl.innerHTML = service.description;
            if (targetInput) targetInput.placeholder = service.placeholder;
            if (targetInput) targetInput.value = '';
            if (targetHint) {
                if (service.id === 1) {
                    targetHint.innerHTML = 'Masukkan link saluran WhatsApp (contoh: https://whatsapp.com/channel/xxxxx)';
                } else if (service.id === 2 || service.id === 3) {
                    targetHint.innerHTML = 'Masukkan link video TikTok';
                } else if (service.id === 4) {
                    targetHint.innerHTML = 'Masukkan username tiktok wajib dengan tanda @ (@yuss_xy)';
                } else if (service.id === 5) {
                    targetHint.innerHTML = 'Masukkan username Instagram mu atau link profil ke akun mu tanpa @';    
                } else if (service.id === 6) {
                    targetHint.innerHTML = 'Masukkan link postingan instagram reels';
                } else if (service.id === 7) {
                    targetHint.innerHTML = 'Masukkan link postingan facebook';
                }
            }
            if (minQtyEl) minQtyEl.textContent = service.minQuantity.toLocaleString('id-ID');
            if (quantityInput) {
                quantityInput.value = service.minQuantity;
                quantityInput.min = service.minQuantity;
                quantityInput.step = service.step;
            }
            updateAutoPrice();
            if (newServiceDetail) newServiceDetail.style.display = 'block';
        };
    }
    const quantityInput = document.getElementById('autoServiceQuantity');
    const qtyDecr = document.getElementById('autoQtyDecrBtn');
    const qtyIncr = document.getElementById('autoQtyIncrBtn');
    function updateAutoPrice() {
        if (!selectedAutoService) return;
        if (!quantityInput) return;
        let quantity = parseInt(quantityInput.value) || selectedAutoService.minQuantity;
        const minQty = selectedAutoService.minQuantity;
        if (quantity < minQty) quantity = minQty;
        const totalPrice = (quantity / 1000) * selectedAutoService.price;
        const pricePerUnitEl = document.getElementById('autoPricePerUnit');
        const totalPriceEl = document.getElementById('autoTotalPrice');
        if (pricePerUnitEl) {
            pricePerUnitEl.innerHTML = `Rp ${selectedAutoService.price.toLocaleString('id-ID')} / 1.000 ${selectedAutoService.unit}`;
        }
        if (totalPriceEl) {
            totalPriceEl.innerHTML = `Rp ${totalPrice.toLocaleString('id-ID')}`;
        }
    }
    if (quantityInput) quantityInput.oninput = updateAutoPrice;
    if (qtyDecr) {
        const newQtyDecr = qtyDecr.cloneNode(true);
        qtyDecr.parentNode.replaceChild(newQtyDecr, qtyDecr);
        newQtyDecr.onclick = () => {
            if (!selectedAutoService || !quantityInput) return;
            let val = parseInt(quantityInput.value) || selectedAutoService.minQuantity;
            const minQty = selectedAutoService.minQuantity;
            const step = selectedAutoService.step;
            if (val - step >= minQty) {
                quantityInput.value = val - step;
                updateAutoPrice();
            }
        };
    }
    if (qtyIncr) {
        const newQtyIncr = qtyIncr.cloneNode(true);
        qtyIncr.parentNode.replaceChild(newQtyIncr, qtyIncr);
        newQtyIncr.onclick = () => {
            if (!selectedAutoService || !quantityInput) return;
            let val = parseInt(quantityInput.value) || selectedAutoService.minQuantity;
            const step = selectedAutoService.step;
            quantityInput.value = val + step;
            updateAutoPrice();
        };
    }
    const orderBtn = document.getElementById('autoOrderNowBtn');
    if (orderBtn) {
        const newOrderBtn = orderBtn.cloneNode(true);
        orderBtn.parentNode.replaceChild(newOrderBtn, orderBtn);
        let isProcessing = false;
        newOrderBtn.onclick = async () => {
            if (isProcessing) {
                showToast('⏳ Proses sedang berjalan, tunggu sebentar...', true);
                return;
            }
            if (!selectedAutoService) {
                showToast('Pilih layanan terlebih dahulu', true);
                return;
            }
            const targetInput = document.getElementById('autoServiceTarget');
            let target = targetInput ? targetInput.value.trim() : '';
            if (!target) {
                showToast('Masukkan target terlebih dahulu!', true);
                return;
            }
            if (selectedAutoService.id === 1) {
                const waRegex = /^https:\/\/whatsapp\.com\/channel\/[a-zA-Z0-9]+$/;
                if (!waRegex.test(target)) {
                    showToast('Masukkan link saluran WhatsApp yang valid!', true);
                    return;
                }
            } else if (selectedAutoService.id === 2 || selectedAutoService.id === 3) {
                if (!target.includes('tiktok.com')) {
                    showToast('Masukkan link video TikTok yang valid!', true);
                    return;
                }
            } else if (selectedAutoService.id === 4) {
                let cleanTarget = target.replace(/^@/, '');
                const tiktokRegex = /^[a-zA-Z0-9_.]+$/;
                const tiktokLinkRegex = /https?:\/\/(www\.)?tiktok\.com\/@[a-zA-Z0-9_.]+/;
                if (!tiktokRegex.test(cleanTarget) && !tiktokLinkRegex.test(target)) {
                    showToast('Masukkan username TikTok atau link profil!', true);
                    return;
                }
                if (!target.includes('tiktok.com') && !target.startsWith('@')) {
                    target = '@' + cleanTarget;
                }
            } else if (selectedAutoService.id === 5) {
                let cleanTarget = target.replace(/^@/, '');
                const igRegex = /^[a-zA-Z0-9_.]+$/;
                const igLinkRegex = /https?:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9_.]+\/?/;
                if (!igRegex.test(cleanTarget) && !igLinkRegex.test(target)) {
                    showToast('Masukkan username Instagram atau link profil!', true);
                    return;
                }
                if (!target.includes('instagram.com') && !target.startsWith('@')) {
                    target = '@' + cleanTarget;
                }
            } else if (selectedAutoService.id === 6) {
                const igPostRegex = /https?:\/\/(www\.)?instagram\.com\/(p|reel)\/[a-zA-Z0-9_-]+/;
                if (!igPostRegex.test(target)) {
                    showToast('Masukkan link postingan atau reels Instagram yang valid!', true);
                    return;
                }
            } else if (selectedAutoService.id === 7) {
                if (!target.includes('facebook.com')) {
                    showToast('Masukkan link postingan Facebook yang valid!', true);
                    return;
                }
            }
            const quantityInputEl = document.getElementById('autoServiceQuantity');
            let quantity = quantityInputEl ? parseInt(quantityInputEl.value) : selectedAutoService.minQuantity;
            const minQty = selectedAutoService.minQuantity;
            if (quantity < minQty) {
                showToast(`Minimal ${minQty.toLocaleString('id-ID')} ${selectedAutoService.unit}!`, true);
                return;
            }
            const totalPrice = Math.round((quantity / 1000) * selectedAutoService.price);
            isProcessing = true;
            newOrderBtn.disabled = true;
            newOrderBtn.style.opacity = '0.5';
            try {
                await processAutoSosmedOrder(selectedAutoService, target, quantity, totalPrice);
            } finally {
                isProcessing = false;
                newOrderBtn.disabled = false;
                newOrderBtn.style.opacity = '1';
            }
        };
    }
}
function closeAutoSosmedModal() {
    const modal = document.getElementById('autoSosmedModal');
    if (modal) {
        modal.classList.remove('active');
    }
    selectedAutoService = null;
}





async function processAutoSosmedOrder(service, target, quantity, totalPrice) {
    const modal = document.getElementById('autoSosmedModal');
    const modalBody = document.getElementById('autoSosmedBody');
    if (!modalBody) {
        showToast('Error: Modal tidak ditemukan', true);
        return;
    }
    modalBody.innerHTML = `
        <div style="text-align: center; padding: 30px 20px;">
            <div style="display: inline-block; width: 40px; height: 40px; border: 3px solid var(--border); border-top-color: var(--accent); border-radius: 50%; animation: spin 0.8s linear infinite; margin-bottom: 16px;"></div>
            <p style="font-size: 14px; color: var(--text-secondary);">Memproses pesanan...</p>
            <p style="font-size: 11px; color: var(--text-secondary); margin-top: 8px;">${service.name} - ${quantity.toLocaleString('id-ID')} ${service.unit}</p>
        </div>
    `;
    const savedUser = localStorage.getItem('app_user');
    if (!savedUser) {
        showResultError(modalBody, 'Silakan login terlebih dahulu!');
        return;
    }
    let targetIdentifier = null;
    try {
        const userData = JSON.parse(savedUser);
        targetIdentifier = userData.username || userData.phone;
    } catch(e) {
        showResultError(modalBody, 'Gagal membaca data user');
        return;
    }
    if (!targetIdentifier) {
        showResultError(modalBody, 'User tidak ditemukan, silakan login ulang');
        return;
    }
    try {
        const checkBalanceRes = await fetch("https://backend-delta-steel-38.vercel.app/api/balance", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF"
            },
            body: JSON.stringify({
                action: "get",
                username: targetIdentifier
            })
        });
        const balanceData = await checkBalanceRes.json();
        if (!balanceData.success) {
            showResultError(modalBody, 'Gagal cek saldo: ' + (balanceData.message || 'Unknown error'));
            return;
        }
        const currentBalance = balanceData.data.balance || 0;
        if (currentBalance < totalPrice) {
            showResultError(modalBody, `Saldo tidak cukup! Saldo: Rp ${currentBalance.toLocaleString('id-ID')}, Harga: Rp ${totalPrice.toLocaleString('id-ID')}`);
            return;
        }
        const orderRes = await fetch("https://backend-delta-steel-38.vercel.app/api/order", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                action: "order",
                service: service.service_id,
                target: target,
                quantity: quantity.toString()
            })
        });
        if (!orderRes.ok) {
            throw new Error(`HTTP ${orderRes.status}: ${orderRes.statusText}`);
        }
        const orderData = await orderRes.json();
        if (!orderData.response) {
            let errorMsg = orderData.message || "Gagal memproses order";
            showResultError(modalBody, errorMsg);
            return;
        }
        const subRes = await fetch('https://backend-delta-steel-38.vercel.app/api/balance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF'
            },
            body: JSON.stringify({
                action: 'sub',
                username: targetIdentifier,
                amount: totalPrice
            })
        });
        const subData = await subRes.json();
        if (!subData.success) {
            console.error("⚠️ Gagal potong saldo, tapi order sudah terbuat di All-Uneed!");
            showResultError(modalBody, 'Pesanan dibuat! Tapi gagal potong saldo. Hubungi admin.');
            return;
        }
        const transactionId = 'TRX' + Date.now().toString().slice(-8) + Math.floor(Math.random() * 1000);
        await fetch('https://backend-delta-steel-38.vercel.app/api/balance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF'
            },
            body: JSON.stringify({
                action: 'add_transaction',
                username: targetIdentifier,
                trx_id: {
                    id: transactionId,
                    order_id: orderData.data.id,
                    product_name: `${service.name} ${quantity.toLocaleString('id-ID')} ${service.unit}`,
                    type: 'auto_sosmed',
                    amount: totalPrice,
                    target: target,
                    quantity: quantity,
                    status: 'success',
                    created_at: new Date().toISOString()
                }
            })
        });
        await sendTestimoniToChannel(
            service.name,
            `${quantity.toLocaleString('id-ID')} ${service.unit}`,
            targetIdentifier,
            totalPrice,
            transactionId,
            targetIdentifier
        );
        showResultSuccess(modalBody, service, target, quantity, totalPrice, orderData.data.id, subData.data.balance);
        if (typeof getSaldo === 'function') getSaldo();
        if (typeof loadHistory === 'function') loadHistory();
    } catch (error) {
        console.error('❌ ERROR DETAIL:', error);
        let errorMsg = error.message;
        if (error.message.includes('Failed to fetch')) {
            errorMsg = 'Gagal koneksi ke server. Cek koneksi internet atau CORS.';
        }
        showResultError(modalBody, errorMsg);
    }
}
function showResultSuccess(modalBody, service, target, quantity, totalPrice, orderId, newBalance) {
    modalBody.innerHTML = `
        <div style="background: linear-gradient(145deg, #0f172a, #0a0f1a); padding: 24px 20px; border-radius: 24px; color: #fff; text-align: center; border: 1px solid rgba(16, 185, 129, 0.2);">
            <div style="display: flex; justify-content: center; margin-bottom: 16px;">
                <div style="background: linear-gradient(135deg, #10b981, #059669); width: 70px; height: 70px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);">
                    <i class="ri-check-line" style="font-size: 40px; color: white;"></i>
                </div>
            </div>
            <div style="background: linear-gradient(90deg, #10b981, #059669); padding: 4px 16px; border-radius: 40px; display: inline-block; margin-bottom: 20px;">
                <b style="font-size: 14px;">PEMBELIAN BERHASIL</b>
            </div>
            <div style="background: rgba(16, 185, 129, 0.1); border-radius: 16px; padding: 16px; margin-bottom: 20px; text-align: left;">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <i class="ri-flashlight-line" style="font-size: 20px; color: #10b981;"></i>
                    <span><b>${service.name}</b></span>
                </div>
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                    <i class="ri-link" style="font-size: 20px; color: #f59e0b;"></i>
                    <span>Target: <b style="color: #f59e0b; word-break: break-all;">${target.substring(0, 50)}${target.length > 50 ? '...' : ''}</b></span>
                </div>
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                    <i class="ri-bar-chart-line" style="font-size: 20px; color: #f59e0b;"></i>
                    <span>Jumlah: <b style="color: #f59e0b;">${quantity.toLocaleString('id-ID')} ${service.unit}</b></span>
                </div>
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                    <i class="ri-money-dollar-circle-line" style="font-size: 20px; color: #f59e0b;"></i>
                    <span>Harga: <b style="color: #f59e0b;">Rp ${totalPrice.toLocaleString('id-ID')}</b></span>
                </div>
                <div style="display: flex; align-items: center; gap: 12px;">
                    <i class="ri-wallet-line" style="font-size: 20px; color: #3b82f6;"></i>
                    <span>Sisa Saldo: <b style="color: #3b82f6;">Rp ${newBalance.toLocaleString('id-ID')}</b></span>
                </div>
            </div>
            <div style="background: rgba(16, 185, 129, 0.15); border-radius: 12px; padding: 12px; margin-bottom: 16px;">
                <i class="ri-checkbox-circle-line" style="color: #10b981; font-size: 16px; margin-right: 6px;"></i>
                <span style="color: #10b981;">✅ Order ID: <strong>${orderId}</strong> - Sedang diproses</span>
            </div>
            <button onclick="location.reload()" style="background: var(--accent); border: none; padding: 10px 20px; border-radius: 30px; color: white; font-weight: 600; cursor: pointer; width: 100%;">
                <i class="ri-close-line"></i> Tutup
            </button>
        </div>
    `;
}
function showResultError(modalBody, errorMessage) {
    modalBody.innerHTML = `
        <div style="background: linear-gradient(145deg, #0f172a, #0a0f1a); padding: 24px 20px; border-radius: 24px; color: #fff; text-align: center; border: 1px solid rgba(239, 68, 68, 0.2);">
            <div style="display: flex; justify-content: center; margin-bottom: 16px;">
                <div style="background: linear-gradient(135deg, #ef4444, #dc2626); width: 70px; height: 70px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 20px rgba(239, 68, 68, 0.5);">
                    <i class="ri-close-line" style="font-size: 40px; color: white;"></i>
                </div>
            </div>
            <div style="background: linear-gradient(90deg, #ef4444, #dc2626); padding: 4px 16px; border-radius: 40px; display: inline-block; margin-bottom: 20px;">
                <b style="font-size: 14px;">PEMBELIAN GAGAL</b>
            </div>
            <div style="background: rgba(239, 68, 68, 0.1); border-radius: 16px; padding: 16px; margin-bottom: 20px;">
                <p style="color: #f87171; margin-bottom: 8px;"><i class="ri-error-warning-line"></i> Terjadi kesalahan:</p>
                <p style="color: #fca5a5; font-size: 13px;">${errorMessage}</p>
            </div>
            <div style="display: flex; gap: 12px;">
                <button onclick="location.reload()" style="flex: 1; background: var(--accent); border: none; padding: 10px; border-radius: 30px; color: white; font-weight: 600; cursor: pointer;">
                    <i class="ri-refresh-line"></i> Coba Lagi
                </button>
                <button onclick="closeAutoSosmedModal()" style="flex: 1; background: transparent; border: 1px solid var(--border); padding: 10px; border-radius: 30px; color: var(--text-primary); font-weight: 600; cursor: pointer;">
                    <i class="ri-close-line"></i> Tutup
                </button>
            </div>
        </div>
    `;
}




function closeAutoSosmedModal() {
    const modal = document.getElementById('autoSosmedModal');
    if (modal) {
        modal.classList.remove('active');
    }
    selectedAutoService = null;
}




async function processAutoSosmedOrder(service, target, quantity, totalPrice) {
    const modal = document.getElementById('autoSosmedModal');
    const modalBody = document.getElementById('autoSosmedBody');
    
    if (!modalBody) {
        showToast('Error: Modal tidak ditemukan', true);
        return;
    }
    
    modalBody.innerHTML = `
        <div style="text-align: center; padding: 30px 20px;">
            <div style="display: inline-block; width: 40px; height: 40px; border: 3px solid var(--border); border-top-color: var(--accent); border-radius: 50%; animation: spin 0.8s linear infinite; margin-bottom: 16px;"></div>
            <p style="font-size: 14px; color: var(--text-secondary);">Memproses pesanan...</p>
            <p style="font-size: 11px; color: var(--text-secondary); margin-top: 8px;">${service.name} - ${quantity.toLocaleString('id-ID')} ${service.unit}</p>
        </div>
    `;
    
    const savedUser = localStorage.getItem('app_user');
    if (!savedUser) {
        showResultError(modalBody, 'Silakan login terlebih dahulu!');
        return;
    }
    
    let targetIdentifier = null;
    try {
        const userData = JSON.parse(savedUser);
        targetIdentifier = userData.username || userData.phone;
    } catch(e) {
        showResultError(modalBody, 'Gagal membaca data user');
        return;
    }
    
    if (!targetIdentifier) {
        showResultError(modalBody, 'User tidak ditemukan, silakan login ulang');
        return;
    }
    
    try {
        // CEK SALDO DULU (pakai username)
        console.log("🔍 Cek saldo user:", targetIdentifier);
        
        const checkBalanceRes = await fetch("https://backend-delta-steel-38.vercel.app/api/balance", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF"
            },
            body: JSON.stringify({
                action: "get",
                username: targetIdentifier
            })
        });
        
        const balanceData = await checkBalanceRes.json();
        console.log("📡 Hasil cek saldo:", balanceData);
        
        if (!balanceData.success) {
            showResultError(modalBody, 'Gagal cek saldo: ' + (balanceData.message || 'Unknown error'));
            return;
        }
        
        const currentBalance = balanceData.data.balance || 0;
        
        if (currentBalance < totalPrice) {
            showResultError(modalBody, `Saldo tidak cukup! Saldo: Rp ${currentBalance.toLocaleString('id-ID')}, Harga: Rp ${totalPrice.toLocaleString('id-ID')}`);
            return;
        }
        
        // PANGGIL API ALL-UNEED
        console.log("📡 Memanggil API order...");
        console.log(`   - service: ${service.service_id}`);
        console.log(`   - target: ${target}`);
        console.log(`   - quantity: ${quantity}`);
        
        const orderRes = await fetch("https://backend-delta-steel-38.vercel.app/api/order", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                action: "order",
                service: service.service_id,
                target: target,
                quantity: quantity.toString()
            })
        });
        
        console.log("📡 Response status:", orderRes.status);
        
        if (!orderRes.ok) {
            throw new Error(`HTTP ${orderRes.status}: ${orderRes.statusText}`);
        }
        
        const orderData = await orderRes.json();
        console.log("📡 Response orderData:", orderData);
        
        if (!orderData.response) {
            let errorMsg = orderData.message || "Gagal memproses order";
            showResultError(modalBody, errorMsg);
            return;
        }
        
        console.log(`✅ Order berhasil! ID: ${orderData.data.id}, Price: ${orderData.data.price}`);
        
        // POTONG SALDO (pakai username)
        console.log("📡 Memotong saldo...");
        
        const subRes = await fetch('https://backend-delta-steel-38.vercel.app/api/balance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF'
            },
            body: JSON.stringify({
                action: 'sub',
                username: targetIdentifier,
                amount: totalPrice
            })
        });
        
        const subData = await subRes.json();
        console.log("📡 Hasil potong saldo:", subData);
        
        if (!subData.success) {
            console.error("⚠️ Gagal potong saldo, tapi order sudah terbuat di All-Uneed!");
            showResultError(modalBody, 'Pesanan dibuat! Tapi gagal potong saldo. Hubungi admin.');
            return;
        }
        
        // SIMPAN TRANSAKSI (pakai username)
        const transactionId = 'TRX' + Date.now().toString().slice(-8) + Math.floor(Math.random() * 1000);
        
        await fetch('https://backend-delta-steel-38.vercel.app/api/balance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF'
            },
            body: JSON.stringify({
                action: 'add_transaction',
                username: targetIdentifier,
                trx_id: {
                    id: transactionId,
                    order_id: orderData.data.id,
                    product_name: `${service.name} ${quantity.toLocaleString('id-ID')} ${service.unit}`,
                    type: 'auto_sosmed',
                    amount: totalPrice,
                    target: target,
                    quantity: quantity,
                    status: 'success',
                    created_at: new Date().toISOString()
                }
            })
        });
        
        
        
        
        
        


await sendTestimoniToChannel(
    service.name,
    `${quantity.toLocaleString('id-ID')} ${service.unit}`,
    targetIdentifier,  // targetIdentifier untuk parameter ke-3
    totalPrice,
    transactionId,
    targetIdentifier   // targetIdentifier untuk parameter username (ke-6)
);
        
        
        
        
        // TAMPILKAN HASIL SUKSES
        showResultSuccess(modalBody, service, target, quantity, totalPrice, orderData.data.id, subData.data.balance);
        
        if (typeof getSaldo === 'function') getSaldo();
        if (typeof loadHistory === 'function') loadHistory();
        
    } catch (error) {
        console.error('❌ ERROR DETAIL:', error);
        console.error('❌ Error message:', error.message);
        console.error('❌ Error stack:', error.stack);
        
        let errorMsg = error.message;
        if (error.message.includes('Failed to fetch')) {
            errorMsg = 'Gagal koneksi ke server. Cek koneksi internet atau CORS.';
        }
        showResultError(modalBody, errorMsg);
    }
}

function showResultSuccess(modalBody, service, target, quantity, totalPrice, orderId, newBalance) {
    modalBody.innerHTML = `
        <div style="background: linear-gradient(145deg, #0f172a, #0a0f1a); padding: 24px 20px; border-radius: 24px; color: #fff; text-align: center; border: 1px solid rgba(16, 185, 129, 0.2);">
            
            <div style="display: flex; justify-content: center; margin-bottom: 16px;">
                <div style="background: linear-gradient(135deg, #10b981, #059669); width: 70px; height: 70px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);">
                    <i class="ri-check-line" style="font-size: 40px; color: white;"></i>
                </div>
            </div>
            
            <div style="background: linear-gradient(90deg, #10b981, #059669); padding: 4px 16px; border-radius: 40px; display: inline-block; margin-bottom: 20px;">
                <b style="font-size: 14px;">PEMBELIAN BERHASIL</b>
            </div>
            
            <div style="background: rgba(16, 185, 129, 0.1); border-radius: 16px; padding: 16px; margin-bottom: 20px; text-align: left;">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <i class="ri-flashlight-line" style="font-size: 20px; color: #10b981;"></i>
                    <span><b>${service.name}</b></span>
                </div>
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                    <i class="ri-link" style="font-size: 20px; color: #f59e0b;"></i>
                    <span>Target: <b style="color: #f59e0b; word-break: break-all;">${target.substring(0, 50)}${target.length > 50 ? '...' : ''}</b></span>
                </div>
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                    <i class="ri-bar-chart-line" style="font-size: 20px; color: #f59e0b;"></i>
                    <span>Jumlah: <b style="color: #f59e0b;">${quantity.toLocaleString('id-ID')} ${service.unit}</b></span>
                </div>
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                    <i class="ri-money-dollar-circle-line" style="font-size: 20px; color: #f59e0b;"></i>
                    <span>Harga: <b style="color: #f59e0b;">Rp ${totalPrice.toLocaleString('id-ID')}</b></span>
                </div>
                <div style="display: flex; align-items: center; gap: 12px;">
                    <i class="ri-wallet-line" style="font-size: 20px; color: #3b82f6;"></i>
                    <span>Sisa Saldo: <b style="color: #3b82f6;">Rp ${newBalance.toLocaleString('id-ID')}</b></span>
                </div>
            </div>
            
            <div style="background: rgba(16, 185, 129, 0.15); border-radius: 12px; padding: 12px; margin-bottom: 16px;">
                <i class="ri-checkbox-circle-line" style="color: #10b981; font-size: 16px; margin-right: 6px;"></i>
                <span style="color: #10b981;">✅ Order ID: <strong>${orderId}</strong> - Sedang diproses</span>
            </div>
            
            <button onclick="location.reload()" style="background: var(--accent); border: none; padding: 10px 20px; border-radius: 30px; color: white; font-weight: 600; cursor: pointer; width: 100%;">
                <i class="ri-close-line"></i> Tutup
            </button>
        </div>
    `;
}









function showResultError(modalBody, errorMessage) {
    modalBody.innerHTML = `
        <div style="background: linear-gradient(145deg, #0f172a, #0a0f1a); padding: 24px 20px; border-radius: 24px; color: #fff; text-align: center; border: 1px solid rgba(239, 68, 68, 0.2);">
            
            <div style="display: flex; justify-content: center; margin-bottom: 16px;">
                <div style="background: linear-gradient(135deg, #ef4444, #dc2626); width: 70px; height: 70px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 20px rgba(239, 68, 68, 0.5);">
                    <i class="ri-close-line" style="font-size: 40px; color: white;"></i>
                </div>
            </div>
            
            <div style="background: linear-gradient(90deg, #ef4444, #dc2626); padding: 4px 16px; border-radius: 40px; display: inline-block; margin-bottom: 20px;">
                <b style="font-size: 14px;">PEMBELIAN GAGAL</b>
            </div>
            
            <div style="background: rgba(239, 68, 68, 0.1); border-radius: 16px; padding: 16px; margin-bottom: 20px;">
                <p style="color: #f87171; margin-bottom: 8px;"><i class="ri-error-warning-line"></i> Terjadi kesalahan:</p>
                <p style="color: #fca5a5; font-size: 13px;">${errorMessage}</p>
            </div>
            
            <div style="display: flex; gap: 12px;">
                <button onclick="location.reload()" style="flex: 1; background: var(--accent); border: none; padding: 10px; border-radius: 30px; color: white; font-weight: 600; cursor: pointer;">
                    <i class="ri-refresh-line"></i> Coba Lagi
                </button>
                <button onclick="closeAutoSosmedModal()" style="flex: 1; background: transparent; border: 1px solid var(--border); padding: 10px; border-radius: 30px; color: var(--text-primary); font-weight: 600; cursor: pointer;">
                    <i class="ri-close-line"></i> Tutup
                </button>
            </div>
        </div>
    `;
}

function showLoadingToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.style.background = '#3b82f6';
    toast.innerHTML = `<i class="ri-loader-4-line" style="animation: spin 0.8s linear infinite;"></i> ${message}`;
    document.body.appendChild(toast);
    return toast;
}






//😯😮😯😮😯😮😯😮😯



const PREMIUM_APPS = [
    { id: 1, name: "Alight Motion (April 2027)", desc: "Exp April 2027", logo: "image/apk/am.jpg", premku_id: 2, harga_jual: 4000 },
    { id: 2, name: "Alight Motion (Mei 2027)", desc: "Exp Mei 2027", logo: "image/apk/am.jpg", premku_id: 116, harga_jual: 5000 },
    { id: 3, name: "Canva Pro", desc: "1 bulan", logo: "image/apk/canva.jpg", premku_id: 125, harga_jual: 3500 },
    { id: 4, name: "Viu Premium", desc: "Lifetime", logo: "image/apk/viu.jpg", premku_id: 8, harga_jual: 4000 }
];

let premiumStocksCache = null;

async function premkuProxy(premku_action, premku_body = {}) {
    try {
        const response = await fetch('https://backend-delta-steel-38.vercel.app/api/balance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF'
            },
            body: JSON.stringify({
                action: 'premku_proxy',
                premku_action: premku_action,
                premku_body: premku_body
            })
        });
        return await response.json();
    } catch (error) {
        console.error('Proxy error:', error);
        return { success: false, error: error.message };
    }
}

async function fetchAllPremiumStocks() {
    const data = await premkuProxy('products');
    const stocks = {};
    if (data.success && data.products) {
        for (const app of PREMIUM_APPS) {
            const serverProduct = data.products.find(p => p.id === app.premku_id);
            if (serverProduct) {
                stocks[app.id] = {
                    stock: serverProduct.stock || 0,
                    available: serverProduct.status === 'available' && serverProduct.stock > 0
                };
            } else {
                stocks[app.id] = { stock: 0, available: false };
            }
        }
    } else {
        for (const app of PREMIUM_APPS) {
            stocks[app.id] = { stock: 0, available: false };
        }
    }
    return stocks;
}

async function createPremkuOrder(productId, qty = 1) {
    const app = PREMIUM_APPS.find(a => a.id === productId);
    if (!app) return { success: false, message: 'Produk tidak ditemukan' };
    const refId = `YUSSXY_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
    const data = await premkuProxy('order', {
        product_id: app.premku_id,
        qty: qty,
        ref_id: refId
    });
    if (data.success) {
        return { success: true, invoice: data.invoice, ref_id: refId, total: data.total };
    }
    return { success: false, message: data.message };
}

async function checkPremkuOrderStatus(invoice) {
    const data = await premkuProxy('status', { invoice: invoice });
    if (data.success) {
        return { success: true, status: data.status, accounts: data.accounts || [] };
    }
    return { success: false, message: data.message };
}

async function checkOrderByInvoice(invoice) {
    const data = await premkuProxy('status', { invoice: invoice });
    if (data.success && data.status === 'success') {
        return { success: true, accounts: data.accounts || [], invoice: data.invoice, product: data.product };
    }
    return { success: false, message: data.message || 'Order tidak ditemukan atau belum sukses' };
}

async function showPremiumAppsModal() {
    const modal = document.getElementById('premiumAppsModal');
    const appsGrid = document.getElementById('premiumAppsGrid');
    if (!modal || !appsGrid) return;
    
    appsGrid.innerHTML = `<div style="text-align: center; padding: 40px; grid-column: span 2;"><div class="loading-spinner" style="width: 32px; height: 32px; margin: 0 auto 16px;"></div><p>Memuat daftar aplikasi...</p></div>`;
    modal.classList.add('active');
    document.body.classList.add('modal-open');
    
    if (!premiumStocksCache) {
        premiumStocksCache = await fetchAllPremiumStocks();
    }
    
    const appsWithStock = PREMIUM_APPS.map(app => {
        const stockInfo = premiumStocksCache[app.id] || { stock: 0, available: false };
        return { ...app, stock: stockInfo.stock, isAvailable: stockInfo.available };
    });
    
    appsGrid.innerHTML = appsWithStock.map(app => {
        let badgeClass = '', badgeText = '', disabledClass = '', stockClass = '', stockText = '';
        if (app.isAvailable) {
            badgeClass = 'badge-available';
            badgeText = 'Tersedia';
            if (app.stock > 0 && app.stock < 20) {
                stockClass = 'stock-low';
                stockText = `Stok: ${app.stock} (tersisa sedikit)`;
            } else if (app.stock >= 20) {
                stockClass = 'stock-available';
                stockText = `Stok: ${app.stock}`;
            }
        } else {
            badgeClass = 'badge-sold-out';
            badgeText = 'Habis';
            disabledClass = 'disabled';
            stockClass = 'stock-out';
            stockText = 'Stok habis';
        }
        return `<div class="premium-app-card ${disabledClass}" data-app-id="${app.id}" data-app-name="${app.name}" data-app-price="${app.harga_jual}" data-app-status="${app.isAvailable ? 'available' : 'sold_out'}" data-premku-id="${app.premku_id}">
            <div class="premium-app-logo"><img src="${app.logo}" alt="${app.name}" onerror="this.src='https://placehold.co/55x55/333/white?text=${app.name.charAt(0)}'"></div>
            <div class="premium-app-name">${app.name}</div>
            <div class="premium-app-price">Rp ${app.harga_jual.toLocaleString('id-ID')}</div>
            <div class="premium-app-desc">${app.desc}</div>
            <div class="premium-app-stock ${stockClass}">${stockText}</div>
            <span class="premium-app-badge ${badgeClass}">${badgeText}</span>
        </div>`;
    }).join('');
    
    attachPremiumCardEvents();
}

function attachPremiumCardEvents() {
    document.querySelectorAll('.premium-app-card').forEach(card => {
        const newCard = card.cloneNode(true);
        card.parentNode.replaceChild(newCard, card);
        
        newCard.addEventListener('click', async () => {
            const appId = parseInt(newCard.dataset.appId);
            const appName = newCard.dataset.appName;
            const appPrice = parseInt(newCard.dataset.appPrice);
            const appStatus = newCard.dataset.appStatus;
            
            if (appStatus !== 'available') {
                showToast('❌ Stok aplikasi sedang habis!', true);
                return;
            }
            
            closePremiumAppsModal();
            
            let isProcessing = false;
            
            const confirmModal = document.createElement('div');
            confirmModal.className = 'modal active';
            confirmModal.style.display = 'flex';
            confirmModal.innerHTML = `
                <div class="modal-content" style="max-width: 320px;">
                    <div class="modal-header">
                        <h3>Konfirmasi Pembelian</h3>
                        <button class="modal-close" onclick="this.closest('.modal').remove()"><i class="ri-close-line"></i></button>
                    </div>
                    <div class="modal-body" style="text-align: center;">
                        <div class="premium-app-logo" style="width: 60px; height: 60px; margin: 0 auto 10px;">
                            <img src="${newCard.querySelector('.premium-app-logo img').src}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 12px;">
                        </div>
                        <p style="font-weight: 700; font-size: 16px;">${appName}</p>
                        <p style="font-size: 20px; font-weight: 800; color: #10b981; margin: 8px 0;">Rp ${appPrice.toLocaleString('id-ID')}</p>
                        <p style="font-size: 12px; color: var(--text-secondary); margin-bottom: 20px;">Saldo akan dipotong jika pembelian berhasil</p>
                        <div style="display: flex; gap: 12px;">
                            <button class="confirm-btn cancel" id="cancelPurchaseBtn" style="flex: 1; padding: 10px; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 30px; color: white; cursor: pointer;">Batal</button>
                            <button class="confirm-btn ok" id="confirmPurchaseBtn" style="flex: 1; padding: 10px; background: linear-gradient(90deg, var(--accent), var(--accent-hover)); border: none; border-radius: 30px; color: white; cursor: pointer;">Beli Sekarang</button>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(confirmModal);
            
            const confirmBtn = document.getElementById('confirmPurchaseBtn');
            const cancelBtn = document.getElementById('cancelPurchaseBtn');
            
            if (cancelBtn) {
                cancelBtn.addEventListener('click', () => {
                    confirmModal.remove();
                });
            }
            
            if (confirmBtn) {
                confirmBtn.addEventListener('click', async () => {
                    if (isProcessing) return;
                    isProcessing = true;
                    
                    confirmBtn.innerHTML = '<div class="loading-spinner" style="width: 18px; height: 18px;"></div> Memproses...';
                    confirmBtn.disabled = true;
                    if (cancelBtn) {
                        cancelBtn.disabled = true;
                        cancelBtn.style.opacity = '0.5';
                    }
                    
                    await processPremiumAppPurchase(appId, appName, appPrice, confirmModal);
                });
            }
        });
    });
}

function closePremiumAppsModal() {
    const modal = document.getElementById('premiumAppsModal');
    if (modal) {
        modal.classList.add('closing');
        setTimeout(() => {
            modal.classList.remove('active', 'closing');
            document.body.classList.remove('modal-open');
        }, 250);
    }
}

async function processPremiumAppPurchase(appId, appName, appPrice, confirmModal) {
    const savedUser = localStorage.getItem('app_user');
    if (!savedUser) {
        showToast('❌ Silakan login terlebih dahulu!', true);
        if (confirmModal) confirmModal.remove();
        return;
    }
    
    let userData;
    try { userData = JSON.parse(savedUser); } catch(e) { 
        showToast('❌ Gagal membaca data user', true);
        if (confirmModal) confirmModal.remove();
        return;
    }
    
    const username = userData.username;
    if (!username) { 
        showToast('❌ Username tidak ditemukan!', true);
        if (confirmModal) confirmModal.remove();
        return;
    }
    
    try {
        const balanceRes = await fetch('https://backend-delta-steel-38.vercel.app/api/balance', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-api-key': 'sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF' },
            body: JSON.stringify({ action: 'get', username: username })
        });
        const balanceData = await balanceRes.json();
        const currentBalance = balanceData.data?.balance || 0;
        
        if (currentBalance < appPrice) {
            showToast(`❌ Saldo tidak cukup! Saldo: Rp ${currentBalance.toLocaleString('id-ID')}`, true);
            if (confirmModal) confirmModal.remove();
            return;
        }
        
        const orderResult = await createPremkuOrder(appId, 1);
        if (!orderResult.success) {
            showToast(`❌ Gagal order: ${orderResult.message}`, true);
            if (confirmModal) confirmModal.remove();
            return;
        }
        
        const invoice = orderResult.invoice;
        const refId = orderResult.ref_id;
        
        let statusResult = null;
        for (let i = 0; i < 15; i++) {
            await new Promise(r => setTimeout(r, 2000));
            statusResult = await checkPremkuOrderStatus(invoice);
            if (statusResult.status === 'success') break;
        }
        
        if (!statusResult || statusResult.status !== 'success') {
            if (confirmModal) confirmModal.remove();
            showInvoiceStatusModal(invoice, refId, appName, 'pending');
            return;
        }
        
        const accounts = statusResult.accounts || [];
        if (accounts.length === 0) {
            showToast('❌ Akun tidak ditemukan', true);
            if (confirmModal) confirmModal.remove();
            return;
        }
        
        const subRes = await fetch('https://backend-delta-steel-38.vercel.app/api/balance', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-api-key': 'sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF' },
            body: JSON.stringify({ action: 'sub', username: username, amount: appPrice })
        });
        const subData = await subRes.json();
        
        if (!subData.success) {
            showToast('❌ Gagal memotong saldo', true);
            if (confirmModal) confirmModal.remove();
            return;
        }
        
        const transactionId = 'TRX' + Date.now().toString().slice(-8) + Math.floor(Math.random() * 1000);
        
        await fetch('https://backend-delta-steel-38.vercel.app/api/balance', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-api-key': 'sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF' },
            body: JSON.stringify({
                action: 'add_transaction',
                username: username,
                trx_id: {
                    id: transactionId,
                    product_id: appId,
                    product_name: appName,
                    type: 'premium_app',
                    amount: appPrice,
                    invoice: invoice,
                    ref_id: refId,
                    accounts: accounts,
                    status: 'success',
                    created_at: new Date().toISOString()
                }
            })
        });
        
        if (confirmModal) confirmModal.remove();
        
        showPremiumAccountModal(appName, accounts, subData.data.balance, invoice, refId);
        
        if (typeof getSaldo === 'function') getSaldo();
        if (typeof loadHistory === 'function') loadHistory();
        
    } catch (error) {
        console.error('Error:', error);
        showToast('❌ Gagal memproses pesanan: ' + error.message, true);
        if (confirmModal) confirmModal.remove();
    }
}

function showInvoiceStatusModal(invoice, refId, appName, status) {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 340px;">
            <div class="modal-header">
                <h3><i class="ri-information-line"></i> Status Pesanan</h3>
                <button class="modal-close" onclick="this.closest('.modal').remove()"><i class="ri-close-line"></i></button>
            </div>
            <div class="modal-body" style="text-align: left;">
                <div style="text-align: center; margin-bottom: 16px;">
                    <div style="background: #f59e0b; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
                        <i class="ri-time-line" style="font-size: 28px; color: white;"></i>
                    </div>
                    <p style="font-weight: 700; margin-top: 8px;">${appName}</p>
                    <p style="font-size: 12px; color: #f59e0b;">Status: ${status === 'pending' ? '⏳ Sedang diproses' : '❌ Gagal'}</p>
                </div>
                <div class="history-detail-item copyable" onclick="copyToClipboard('${invoice}', 'Invoice ID')" style="margin-bottom: 10px;">
                    <i class="ri-qr-code-line"></i>
                    <span>Invoice ID</span>
                    <strong style="color: #60a5fa;">${invoice}</strong>
                    <i class="ri-file-copy-line copy-icon"></i>
                </div>
                <div class="history-detail-item copyable" onclick="copyToClipboard('${refId}', 'Ref ID')" style="margin-bottom: 10px;">
                    <i class="ri-fingerprint-line"></i>
                    <span>Ref ID</span>
                    <strong style="color: #f59e0b;">${refId}</strong>
                    <i class="ri-file-copy-line copy-icon"></i>
                </div>
                <p style="font-size: 11px; color: var(--text-secondary); text-align: center; margin-top: 8px;">
                    Simpan Invoice ID untuk cek status nanti
                </p>
                <button class="confirm-payment-btn" onclick="this.closest('.modal').remove()" style="margin-top: 16px; background: var(--accent);">
                    <i class="ri-check-line"></i> Tutup
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function showPremiumAccountModal(appName, accounts, newBalance, invoice, refId) {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.style.display = 'flex';
    
    let accountsHtml = '';
    accounts.forEach((acc, index) => {
        accountsHtml += `
            <div style="background: var(--bg-secondary); border-radius: 12px; padding: 14px; margin-bottom: 12px; border: 1px solid rgba(239,68,68,0.15);">
                <div style="font-size: 11px; color: var(--accent); margin-bottom: 8px; font-weight: 600;">Akun ${index + 1}</div>
                <div class="history-detail-item copyable" onclick="copyToClipboard('${acc.username}', 'Username')" style="margin-bottom: 8px; background: var(--bg-card);">
                    <i class="ri-mail-line"></i>
                    <span>Username / Email</span>
                    <strong style="color: #60a5fa;">${acc.username}</strong>
                    <i class="ri-file-copy-line copy-icon"></i>
                </div>
                <div class="history-detail-item copyable" onclick="copyToClipboard('${acc.password}', 'Password')" style="background: var(--bg-card);">
                    <i class="ri-lock-line"></i>
                    <span>Password</span>
                    <strong style="color: #f59e0b;">${acc.password}</strong>
                    <i class="ri-file-copy-line copy-icon"></i>
                </div>
            </div>
        `;
    });
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 360px;">
            <div class="modal-header">
                <h3><i class="ri-checkbox-circle-line" style="color: #10b981;"></i> Pembelian Berhasil</h3>
                <button class="modal-close" onclick="this.closest('.modal').remove()"><i class="ri-close-line"></i></button>
            </div>
            <div class="modal-body" style="text-align: left;">
                <div style="text-align: center; margin-bottom: 16px;">
                    <div style="background: #10b981; width: 55px; height: 55px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
                        <i class="ri-check-line" style="font-size: 30px; color: white;"></i>
                    </div>
                    <p style="font-weight: 800; margin-top: 10px; font-size: 16px;">${appName}</p>
                    <p style="font-size: 11px; color: var(--text-secondary);">Akun sudah siap digunakan</p>
                </div>
                ${accountsHtml}
                <div class="history-detail-item copyable" onclick="copyToClipboard('${invoice}', 'Invoice ID')" style="margin-bottom: 8px;">
                    <i class="ri-qr-code-line"></i>
                    <span>Invoice ID</span>
                    <strong style="color: #60a5fa;">${invoice}</strong>
                    <i class="ri-file-copy-line copy-icon"></i>
                </div>
                <div class="history-detail-item copyable" onclick="copyToClipboard('${refId}', 'Ref ID')" style="margin-bottom: 8px;">
                    <i class="ri-fingerprint-line"></i>
                    <span>Ref ID</span>
                    <strong style="color: #f59e0b;">${refId}</strong>
                    <i class="ri-file-copy-line copy-icon"></i>
                </div>
                <div class="history-detail-item" style="background: var(--bg-secondary); margin-top: 8px;">
                    <i class="ri-wallet-line"></i>
                    <span>Sisa Saldo</span>
                    <strong style="color: #10b981;">Rp ${newBalance.toLocaleString('id-ID')}</strong>
                </div>
                <button class="confirm-payment-btn" onclick="this.closest('.modal').remove()" style="margin-top: 16px; background: linear-gradient(90deg, var(--accent), var(--accent-hover));">
                    <i class="ri-check-line"></i> Tutup
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

const closePremiumModalBtn = document.getElementById('closePremiumAppsModal');
if (closePremiumModalBtn) {
    closePremiumModalBtn.addEventListener('click', function() {
        closePremiumAppsModal();
    });
}

const premiumModal = document.getElementById('premiumAppsModal');
if (premiumModal) {
    premiumModal.addEventListener('click', function(e) {
        if (e.target === premiumModal) {
            closePremiumAppsModal();
        }
    });
}











const checkInvoiceBtn = document.getElementById('checkInvoiceBtn');
const searchInvoiceInput = document.getElementById('searchInvoiceInput');
const invoiceResult = document.getElementById('invoiceResult');

if (checkInvoiceBtn) {
    // Hapus event listener lama jika ada
    const newCheckBtn = checkInvoiceBtn.cloneNode(true);
    checkInvoiceBtn.parentNode.replaceChild(newCheckBtn, checkInvoiceBtn);
    
    newCheckBtn.addEventListener('click', async function() {
        const invoice = searchInvoiceInput ? searchInvoiceInput.value.trim() : '';
        
        if (!invoice) {
            if (invoiceResult) {
                invoiceResult.style.display = 'block';
                invoiceResult.innerHTML = '<div style="color: #ef4444; padding: 10px; background: rgba(239,68,68,0.1); border-radius: 10px;">❌ Masukkan Invoice ID terlebih dahulu</div>';
            }
            return;
        }
        
        if (invoiceResult) {
            invoiceResult.style.display = 'block';
            invoiceResult.innerHTML = '<div style="padding: 10px;"><div class="loading-spinner" style="width: 20px; height: 20px;"></div> Mengecek pesanan...</div>';
        }
        
        const result = await checkOrderByInvoice(invoice);
        
        if (result.success && result.accounts && result.accounts.length > 0) {
            let accountsHtml = '';
            result.accounts.forEach((acc, idx) => {
                accountsHtml += `
                    <div style="background: var(--bg-secondary); border-radius: 10px; padding: 10px; margin-bottom: 10px;">
                        <div style="font-size: 11px; color: var(--accent); margin-bottom: 6px;">Akun ${idx + 1}</div>
                        <div class="history-detail-item copyable" onclick="copyToClipboard('${acc.username}', 'Username')" style="margin-bottom: 6px; background: var(--bg-card);">
                            <i class="ri-mail-line"></i>
                            <span>Username/Email</span>
                            <strong style="color: #60a5fa;">${acc.username}</strong>
                            <i class="ri-file-copy-line copy-icon"></i>
                        </div>
                        <div class="history-detail-item copyable" onclick="copyToClipboard('${acc.password}', 'Password')" style="background: var(--bg-card);">
                            <i class="ri-lock-line"></i>
                            <span>Password</span>
                            <strong style="color: #f59e0b;">${acc.password}</strong>
                            <i class="ri-file-copy-line copy-icon"></i>
                        </div>
                    </div>
                `;
            });
            
            if (invoiceResult) {
                invoiceResult.innerHTML = `
                    <div style="background: rgba(16,185,129,0.15); border-radius: 12px; padding: 12px; border-left: 3px solid #10b981;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
                            <div><i class="ri-checkbox-circle-line" style="color: #10b981;"></i> <strong>Pesanan Ditemukan</strong></div>
                            <div class="history-detail-item copyable" onclick="copyToClipboard('${invoice}', 'Invoice ID')" style="display: inline-flex; background: rgba(0,0,0,0.2); padding: 4px 10px; border-radius: 20px; margin: 0;">
                                <span style="font-size: 10px;">Invoice: ${invoice}</span>
                                <i class="ri-file-copy-line copy-icon" style="font-size: 12px;"></i>
                            </div>
                        </div>
                        <div style="font-size: 12px; margin-bottom: 8px;">Produk: <strong>${result.product || '-'}</strong></div>
                        ${accountsHtml}
                        <button onclick="document.getElementById('invoiceResult').style.display = 'none'; document.getElementById('searchInvoiceInput').value = '';" style="width: 100%; padding: 8px; background: var(--accent); border: none; border-radius: 30px; color: white; font-size: 12px; cursor: pointer; margin-top: 8px;">Tutup</button>
                    </div>
                `;
            }
        } else {
            if (invoiceResult) {
                invoiceResult.innerHTML = `<div style="color: #ef4444; padding: 10px; background: rgba(239,68,68,0.1); border-radius: 10px;">❌ ${result.message || 'Pesanan tidak ditemukan atau belum sukses'}</div>`;
            }
        }
    });
}

// Enter key support
if (searchInvoiceInput) {
    searchInvoiceInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const btn = document.getElementById('checkInvoiceBtn');
            if (btn) btn.click();
        }
    });
}




// ================================================
// STORE STATUS - COMPACT VERSION
// ================================================

const STORE_API_URL = "https://backend-delta-steel-38.vercel.app/api/store-setting";

let lastStoreStatus = null;
let isStoreClosed = false;



function isProductAvailable(productId) {
    if (!isStoreClosed) return true;
    return STORE_WHITELIST_PRODUCTS.includes(productId);
}

async function fetchStoreStatusCompact() {
    const card = document.getElementById('storeStatusCompact');
    if (!card) return;
    
    const icon = document.getElementById('statusCompactIcon');
    const badge = document.getElementById('statusCompactBadge');
    const dot = document.getElementById('compactDot');
    const text = document.getElementById('compactText');
    const body = document.getElementById('statusCompactBody');
    const refreshBtn = document.getElementById('compactRefresh');
    
    card.className = 'store-status-compact status-loading';
    if (text) text.textContent = 'Memuat...';
    if (dot) dot.style.background = '#60a5fa';
    if (badge) {
        badge.style.background = 'rgba(59, 130, 246, 0.06)';
        badge.style.color = '#60a5fa';
    }
    if (icon) {
        icon.style.background = 'rgba(59, 130, 246, 0.08)';
        icon.querySelector('i').style.color = '#60a5fa';
        icon.querySelector('i').className = 'ri-loader-4-line';
    }
    
    if (body) {
        body.innerHTML = `
            <div class="status-compact-loading">
                <span class="compact-spinner"></span>
                <span>Memuat status...</span>
            </div>
        `;
    }
    
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);
        
        const response = await fetch(STORE_API_URL, {
            cache: "no-store",
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        
        const data = await response.json();
        
        if (data.success === true) {
            const isClosed = data.is_closed || false;
            const reason = data.reason || "Sedang maintenance";
            const openTime = data.open_time || "13.00";
            const message = data.message || "Haloo, Saya close dulu ya.";
            
            lastStoreStatus = { isClosed, reason, openTime, message };
            isStoreClosed = isClosed;
            
            if (isClosed) {
                renderStoreClosedCompact(reason, openTime);
                disableStoreProducts();
            } else {
                renderStoreOpenCompact();
                enableStoreProducts();
            }
        } else {
            throw new Error('Gagal mengambil status');
        }
    } catch (error) {
        console.error('Error fetch status:', error);
        renderStoreErrorCompact();
    }
}

function renderStoreOpenCompact() {
    const card = document.getElementById('storeStatusCompact');
    const icon = document.getElementById('statusCompactIcon');
    const dot = document.getElementById('compactDot');
    const text = document.getElementById('compactText');
    const badge = document.getElementById('statusCompactBadge');
    const body = document.getElementById('statusCompactBody');
    
    if (!card || !body) return;
    
    card.className = 'store-status-compact status-open';
    
    if (icon) {
        icon.style.background = 'rgba(16, 185, 129, 0.12)';
        icon.querySelector('i').className = 'ri-store-3-line';
        icon.querySelector('i').style.color = '#10b981';
    }
    
    if (dot) {
        dot.style.background = '#10b981';
    }
    if (text) text.textContent = 'Status';
    if (badge) {
        badge.style.background = 'rgba(16, 185, 129, 0.08)';
        badge.style.color = '#10b981';
    }
    
    body.innerHTML = `
        <div class="status-compact-open">
            <div class="open-icon">
                <i class="ri-check-line"></i>
            </div>
            <div class="open-info">
                <span class="main">Layanan Open</span>
                <span class="sub"></span>
            </div>
            <span class="open-label">
                <i class="ri-checkbox-circle-line"></i> Buka
            </span>
        </div>
    `;
}

function renderStoreClosedCompact(reason, openTime) {
    const card = document.getElementById('storeStatusCompact');
    const icon = document.getElementById('statusCompactIcon');
    const dot = document.getElementById('compactDot');
    const text = document.getElementById('compactText');
    const badge = document.getElementById('statusCompactBadge');
    const body = document.getElementById('statusCompactBody');
    
    if (!card || !body) return;
    
    card.className = 'store-status-compact status-closed';
    
    if (icon) {
        icon.style.background = 'rgba(239, 68, 68, 0.12)';
        icon.querySelector('i').className = 'ri-store-3-line';
        icon.querySelector('i').style.color = '#ef4444';
    }
    
    if (dot) {
        dot.style.background = '#ef4444';
    }
    if (text) text.textContent = 'Status';
    if (badge) {
        badge.style.background = 'rgba(239, 68, 68, 0.08)';
        badge.style.color = '#ef4444';
    }
    
    body.innerHTML = `
        <div class="status-compact-closed">
            <div class="closed-icon">
                <i class="ri-close-line"></i>
            </div>
            <div class="closed-info">
                <span class="main">Layanan sedang TUTUP</span>
                <span class="estimate">
                    <i class="ri-time-line"></i> Perkiraan Buka: <strong>Jam ${escapeHtml(openTime)} </strong>
                </span>
            </div>
            <span class="closed-label">
                <i class="ri-lock-line"></i> Tutup
            </span>
        </div>
    `;
}

function renderStoreErrorCompact() {
    const card = document.getElementById('storeStatusCompact');
    const icon = document.getElementById('statusCompactIcon');
    const dot = document.getElementById('compactDot');
    const text = document.getElementById('compactText');
    const badge = document.getElementById('statusCompactBadge');
    const body = document.getElementById('statusCompactBody');
    
    if (!card || !body) return;
    
    card.className = 'store-status-compact';
    
    if (icon) {
        icon.style.background = 'rgba(239, 68, 68, 0.08)';
        icon.querySelector('i').className = 'ri-error-warning-line';
        icon.querySelector('i').style.color = '#ef4444';
    }
    
    if (dot) {
        dot.style.background = '#ef4444';
    }
    if (text) text.textContent = 'Error';
    if (badge) {
        badge.style.background = 'rgba(239, 68, 68, 0.06)';
        badge.style.color = '#ef4444';
    }
    
    body.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px; color: #ef4444; width: 100%; font-size: 11px;">
            <i class="ri-error-warning-line"></i>
            <span>Gagal memuat status toko</span>
            <span style="font-size: 9px; color: var(--text-secondary); margin-left: auto;">Coba refresh</span>
        </div>
    `;
}

function disableStoreProducts() {
    const allProducts = products || [];
    
    allProducts.forEach(product => {
        if (!STORE_WHITELIST_PRODUCTS.includes(product.id)) {
            product._disabled = true;
        } else {
            product._disabled = false;
        }
    });
    
    renderProductsWithStoreStatus();
}

function enableStoreProducts() {
    const allProducts = products || [];
    
    allProducts.forEach(product => {
        product._disabled = false;
    });
    
    renderProductsWithStoreStatus();
}


function renderProductsWithStoreStatus() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    const allProducts = products || [];
    
    productsGrid.innerHTML = allProducts.map(product => {
        let isSoldOut = product.type === 'sold_out';
        let isComingSoon = product.type === 'coming_soon';
        let isStoreClosed = product._disabled === true;
        let isManualDeposit = product.id === 1;
        let isDisabled = isSoldOut || isComingSoon || isStoreClosed;
        
        if (isManualDeposit) {
            isStoreClosed = false;
            isDisabled = false;
        }
        
        let badgeHtml = '';
        if (product.type === 'hot') {
            badgeHtml = '<div class="product-badge badge-hot"><i class="ri-fire-line"></i> HOT</div>';
        } else if (product.type === 'rekomendasi') {
            badgeHtml = '<div class="product-badge badge-rekomendasi"><i class="ri-star-line"></i> REKOMENDASI</div>';
        } else if (product.type === 'new') {
            badgeHtml = '<div class="product-badge badge-new"><i class="ri-flashlight-line"></i> NEW</div>';
        } else if (product.type === 'diskon') {
            badgeHtml = '<div class="product-badge badge-diskon"><i class="ri-price-tag-3-line"></i> DISKON</div>';
        } else if (isSoldOut) {
            badgeHtml = '<div class="product-badge badge-sold"><i class="ri-close-circle-line"></i> HABIS</div>';
        } else if (isComingSoon) {
            badgeHtml = '<div class="product-badge badge-coming"><i class="ri-time-line"></i> SEGERA</div>';
        } else if (isStoreClosed && !isManualDeposit) {
            badgeHtml = '<div class="product-badge badge-closed"><i class="ri-lock-line"></i> TUTUP</div>';
        }
        
        let priceHtml = `<div class="product-price">${typeof getDisplayPrice === 'function' ? getDisplayPrice(product) : product.price}</div>`;
        
        let buyButtonHtml = '';
        let cartButtonHtml = '';
        
        if (isSoldOut) {
            buyButtonHtml = `
                <button class="btn-buy-now" disabled style="opacity:0.5;cursor:not-allowed;pointer-events:none;">
                    <i class="ri-close-circle-line"></i> Habis
                </button>
            `;
            cartButtonHtml = `
                <button class="btn-add-cart" disabled style="opacity:0.5;cursor:not-allowed;pointer-events:none;">
                    <i class="ri-close-circle-line"></i> Habis
                </button>
            `;
        } else if (isComingSoon) {
            buyButtonHtml = `
                <button class="btn-buy-now" disabled style="opacity:0.5;cursor:not-allowed;pointer-events:none;">
                    <i class="ri-time-line"></i> Segera
                </button>
            `;
            cartButtonHtml = `
                <button class="btn-add-cart" disabled style="opacity:0.5;cursor:not-allowed;pointer-events:none;">
                    <i class="ri-time-line"></i> Segera
                </button>
            `;
        } else if (isStoreClosed && !isManualDeposit) {
            buyButtonHtml = `
                <button class="btn-buy-now" disabled style="opacity:0.5;cursor:not-allowed;pointer-events:none;">
                    <i class="ri-lock-line"></i> Tutup
                </button>
            `;
            cartButtonHtml = `
                <button class="btn-add-cart" disabled style="opacity:0.5;cursor:not-allowed;pointer-events:none;">
                    <i class="ri-lock-line"></i> Tutup
                </button>
            `;
        } else {
            buyButtonHtml = `
                <button class="btn-buy-now" onclick="event.stopPropagation(); buyNow(${product.id});">
                    <i class="ri-flashlight-line"></i> Beli
                </button>
            `;
            cartButtonHtml = `
                <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id});">
                    <i class="ri-shopping-cart-line"></i> Keranjang
                </button>
            `;
        }
        
        let clickHandler = '';
        if (!isDisabled) {
            clickHandler = `onclick="showProductDetail(${product.id})"`;
        }
        
        return `
            <div class="product-card ${isDisabled ? 'product-disabled' : ''}" data-product-id="${product.id}" ${clickHandler}>
                <div class="product-image-wrapper">
                    ${badgeHtml}
                    <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://placehold.co/300x300/333/white?text=Error'">
                </div>
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    ${priceHtml}
                    <div class="product-buttons">
                        ${buyButtonHtml}
                        ${cartButtonHtml}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function disableStoreProducts() {
    const allProducts = products || [];
    
    allProducts.forEach(product => {
        if (product.id === 1) {
            product._disabled = false;
        } else if (!STORE_WHITELIST_PRODUCTS.includes(product.id)) {
            product._disabled = true;
        } else {
            product._disabled = false;
        }
    });
    
    renderProductsWithStoreStatus();
}






function getCachedStoreStatus() {
    return lastStoreStatus;
}

function setupStatusRefresh() {
    const refreshBtn = document.getElementById('compactRefresh');
    if (!refreshBtn) return;
    
    const newBtn = refreshBtn.cloneNode(true);
    refreshBtn.parentNode.replaceChild(newBtn, refreshBtn);
    
    newBtn.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.add('spinning');
        fetchStoreStatusCompact().finally(() => {
            setTimeout(() => {
                this.classList.remove('spinning');
            }, 300);
        });
    });
}

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function initStoreStatus() {
    fetchStoreStatusCompact();
    setupStatusRefresh();
    setInterval(fetchStoreStatusCompact, 30000);
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initStoreStatus, 200);
});






//😭1😭🌟😭🌟😭🌟

async function sendTestimoniToChannel(productName, quantity, targetIdentifier, amount, transactionId, username) {
    const { jam, tanggal, tahun } = getCurrentDateTime();
    
  const message = `*⟦ PEMBELIAN BERHASIL ⟧*

☞ 📦 Produk    : ${productName}
☞ 📊 Jumlah    : ${quantity}
☞ 👤 Username    : ${username}
☞ 💵 Harga Produk : Rp ${amount.toLocaleString('id-ID')}
☞ 🧾 ID Transaksi   : ${transactionId}
☞ 💳 Pembayaran    : Saldo YussXy
☞ 📅 Tanggal : ${tanggal} ${jam}

*Download Aplikasi Yuss Xy Store*
${APP_DOWNLOAD_LINK}`;


    
    try {
        const response = await fetch('https://backend-delta-steel-38.vercel.app/api/rc', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF'
            },
            body: JSON.stringify({
                type: 'send',
                target: channelId,
                message: message
            })
        });
        
        const data = await response.json();
        console.log('✅ Testimoni terkirim:', data);
        return data;
    } catch (error) {
        console.error('❌ Gagal kirim testimoni:', error);
        return { success: false, error: error.message };
    }
}








// ================================================
// INFO TABS
// ================================================

document.addEventListener('DOMContentLoaded', function() {
    // Tab switching
    document.querySelectorAll('.info-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            // Hapus active semua tab
            document.querySelectorAll('.info-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.info-tab-content').forEach(c => c.classList.remove('active'));
            
            // Active tab
            this.classList.add('active');
            const target = this.dataset.tab;
            document.getElementById('tab' + target.charAt(0).toUpperCase() + target.slice(1)).classList.add('active');
        });
    });
});


// ================================================
// UPDATE TOTAL PRODUCTS DI INFO PAGE
// ================================================

function updateTotalProducts() {
    const totalProductsElem = document.getElementById('totalProductsInfo');
    const totalProductsElemOld = document.getElementById('totalProducts');
    
    if (typeof products !== 'undefined' && Array.isArray(products)) {
        const total = products.length;
        
        if (totalProductsElem) {
            totalProductsElem.textContent = total;
        }
        
        if (totalProductsElemOld) {
            totalProductsElemOld.textContent = total;
        }
    }
}

// ================================================
// LOAD USER PROFILE
// ================================================

async function loadUserProfile() {
    const savedUser = localStorage.getItem('app_user');
    if (!savedUser) {
        return;
    }
    
    try {
        const userData = JSON.parse(savedUser);
        const username = userData.username;
        
        if (!username) {
            return;
        }
        
        const response = await fetch("https://backend-delta-steel-38.vercel.app/api/balance", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF"
            },
            body: JSON.stringify({
                action: "admin_get_user",
                username: username
            })
        });
        
        const data = await response.json();
        
        if (data.success && data.data) {
            const user = data.data;
            
            const elements = {
                'profileDisplayName': user.username || '-',
                'profileDisplayRole': user.role || 'user',
                'profileUsername': user.username || '-',
                'profilePhone': user.phone || '-',
                'profileEmail': user.email || '-',
                'profileRole': user.role || 'user',
                'profileDeviceId': user.device_id || 'Belum terdaftar',
                'profilePassword': user.password || '********'
            };
            
            for (const [id, value] of Object.entries(elements)) {
                const el = document.getElementById(id);
                if (el) el.textContent = value;
            }
            
            const balanceEl = document.getElementById('profileBalance');
            if (balanceEl) {
                balanceEl.textContent = `Rp ${(user.balance || 0).toLocaleString('id-ID')}`;
            }
            
            if (user.created_at) {
                const date = new Date(user.created_at);
                const joinEl = document.getElementById('profileJoinDate');
                if (joinEl) {
                    joinEl.textContent = date.toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    });
                }
            }
        }
        
    } catch (error) {
        console.error('Error loading profile:', error);
    }
    
    updateTotalProducts();
}

// ================================================
// INFO TABS
// ================================================

function initInfoTabs() {
    const tabs = document.querySelectorAll('.info-tab');
    
    if (!tabs.length) {
        return;
    }
    
    tabs.forEach(tab => {
        const newTab = tab.cloneNode(true);
        tab.parentNode.replaceChild(newTab, tab);
        
        newTab.addEventListener('click', function() {
            document.querySelectorAll('.info-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.info-tab-content').forEach(c => c.classList.remove('active'));
            
            this.classList.add('active');
            const target = this.dataset.tab;
            
            const targetId = 'tab' + target.charAt(0).toUpperCase() + target.slice(1);
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// ================================================
// INIT
// ================================================

document.addEventListener('DOMContentLoaded', function() {
    initInfoTabs();
    loadUserProfile();
    setTimeout(updateTotalProducts, 500);
});



// ================================================
// LOGOUT KONFIRMASI MODAL - FAK BERFUNGSI
// ================================================

function showLogoutConfirm() {
    // Ambil username dari localStorage
    const savedUser = localStorage.getItem('app_user');
    let username = 'Kamu';
    
    if (savedUser) {
        try {
            const userData = JSON.parse(savedUser);
            username = userData.username || userData.name || 'Kamu';
        } catch(e) {
            console.error('Error parsing user data:', e);
        }
    }
    
    // Update username di modal
    const usernameEl = document.getElementById('logoutUsername');
    if (usernameEl) {
        usernameEl.textContent = username;
    }
    
    // Tampilkan modal
    const modal = document.getElementById('logoutConfirmModal');
    if (modal) {
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
    }
}

function closeLogoutConfirm() {
    const modal = document.getElementById('logoutConfirmModal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

function confirmLogout() {
    console.log('🚪 Proses logout dimulai...');
    
    // Hapus semua data user
    localStorage.removeItem('app_user');
    localStorage.removeItem('device_fingerprint');
    localStorage.removeItem('ban_state');
    localStorage.removeItem('cart');
    
    // Hapus session data lainnya
    sessionStorage.clear();
    
    console.log('✅ Data user telah dihapus');
    
    // Tutup modal
    closeLogoutConfirm();
    
    // Redirect ke halaman login dengan delay
    setTimeout(() => {
        window.location.href = 'mm/mm.html';
    }, 300);
}

// ================================================
// EVENT LISTENER - PASTIKAN BERFUNGSI
// ================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔍 Logout event listener initialized');
    
    // ===== TOMBOL LOGOUT DI INFO PAGE =====
    const logoutBtn = document.getElementById('logoutBtnInfo');
    if (logoutBtn) {
        console.log('✅ Tombol logout ditemukan');
        
        // Hapus event listener lama biar ga dobel
        const newLogoutBtn = logoutBtn.cloneNode(true);
        logoutBtn.parentNode.replaceChild(newLogoutBtn, logoutBtn);
        
        newLogoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('🖱️ Tombol logout diklik!');
            showLogoutConfirm();
        });
    } else {
        console.warn('⚠️ Tombol logout tidak ditemukan!');
    }
    
    // ===== TOMBOL BATAL =====
    const cancelBtn = document.getElementById('logoutCancelBtn');
    if (cancelBtn) {
        const newCancelBtn = cancelBtn.cloneNode(true);
        cancelBtn.parentNode.replaceChild(newCancelBtn, cancelBtn);
        
        newCancelBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('❌ Logout dibatalkan');
            closeLogoutConfirm();
        });
    }
    
    // ===== TOMBOL YA LOGOUT =====
    const confirmBtn = document.getElementById('logoutConfirmBtn');
    if (confirmBtn) {
        const newConfirmBtn = confirmBtn.cloneNode(true);
        confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
        
        newConfirmBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('✅ Konfirmasi logout');
            confirmLogout();
        });
    }
    
    // ===== KLIK OVERLAY =====
    const modal = document.getElementById('logoutConfirmModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                console.log('🔲 Klik overlay, batal logout');
                closeLogoutConfirm();
            }
        });
    }
    
    // ===== TOMBOL ESC =====
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('logoutConfirmModal');
            if (modal && modal.classList.contains('active')) {
                console.log('⌨️ ESC ditekan, batal logout');
                closeLogoutConfirm();
            }
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('togglePasswordBtn');
    const passwordEl = document.getElementById('profilePassword');
    
    if (toggleBtn && passwordEl) {
        let isVisible = false;
        let originalPassword = '';
        
        toggleBtn.addEventListener('click', function() {
            isVisible = !isVisible;
            
            if (isVisible) {
                if (!originalPassword) {
                    originalPassword = passwordEl.textContent;
                }
                
                if (originalPassword === '********') {
                    passwordEl.textContent = 'Belum diset';
                } else {
                    passwordEl.textContent = originalPassword;
                }
                
                passwordEl.classList.add('show');
                this.innerHTML = '<i class="ri-eye-off-line"></i>';
            } else {
                passwordEl.textContent = '********';
                passwordEl.classList.remove('show');
                this.innerHTML = '<i class="ri-eye-line"></i>';
            }
        });
    }
});


// ================================================
// BUKA CHAT ROOM DARI SPECIAL PAGE
// ================================================

function openChatRoom() {
    // Cek apakah user sudah login
    const savedUser = localStorage.getItem('app_user');
    if (!savedUser) {
        showToast('Silakan login terlebih dahulu!', true);
        setTimeout(() => {
            window.location.href = 'mm/mm.html';
        }, 1500);
        return;
    }
    
    // Redirect ke chat room
    window.location.href = 'kom/kom.html';
}

// Tambahkan event listener jika tombol chat room menggunakan ID
document.addEventListener('DOMContentLoaded', function() {
    const chatRoomBtn = document.getElementById('chatRoomBtn');
    if (chatRoomBtn) {
        chatRoomBtn.addEventListener('click', openChatRoom);
    }
});












// ================================================
// AKTIVITAS TERBARU
// ================================================

let activityData = [];
let activityInterval = null;
let isLoadingActivity = false;
let lastRefreshTime = 0;
const COOLDOWN_SECONDS = 60;
let isActivityInitialized = false;

async function loadActivity() {
    const container = document.getElementById('activityList');
    if (!container) return;
    
    if (isLoadingActivity) return;
    isLoadingActivity = true;
    
    container.innerHTML = `
        <div style="display:flex;justify-content:center;align-items:center;height:100%;min-height:150px;flex-direction:column;gap:12px;">
            <div class="loading-dots">
                <span></span><span></span><span></span>
            </div>
            <p style="font-size:12px;color:var(--text-secondary);">Memuat aktivitas...</p>
        </div>
    `;
    
    try {
        const usersResponse = await fetch("https://backend-delta-steel-38.vercel.app/api/balance", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF"
            },
            body: JSON.stringify({ 
                action: "get_all_users" 
            })
        });
        
        const usersData = await usersResponse.json();
        
        if (!usersData.success || !usersData.users) {
            container.innerHTML = `
                <div class="empty-activity">
                    <i class="ri-error-warning-line"></i>
                    <p>Gagal memuat data user</p>
                </div>
            `;
            isLoadingActivity = false;
            return;
        }
        
        let allTransactions = [];
        
        for (const user of usersData.users) {
            const username = user.username || user.phone || user.device_id || 'Anonymous';
            
            if (user.trx_id && Array.isArray(user.trx_id) && user.trx_id.length > 0) {
                for (const trx of user.trx_id) {
                    allTransactions.push({
                        ...trx,
                        username: username,
                        user_id: user.device_id || user.id,
                        user_phone: user.phone,
                        user_role: user.role || 'user'
                    });
                }
            }
        }
        
        if (allTransactions.length === 0) {
            container.innerHTML = `
                <div class="empty-activity">
                    <i class="ri-inbox-line"></i>
                    <p>Belum ada aktivitas transaksi</p>
                    <p style="font-size:11px;margin-top:4px;">Aktivitas akan muncul setelah ada pembelian</p>
                </div>
            `;
            isLoadingActivity = false;
            return;
        }
        
        allTransactions.sort((a, b) => {
            const dateA = new Date(a.created_at || a.$createdAt || 0);
            const dateB = new Date(b.created_at || b.$createdAt || 0);
            return dateB - dateA;
        });
        
        activityData = allTransactions;
        renderActivity(allTransactions);
        
        const countEl = document.getElementById('activityCount');
        if (countEl) countEl.textContent = allTransactions.length;
        
    } catch (err) {
        container.innerHTML = `
            <div class="empty-activity">
                <i class="ri-error-warning-line"></i>
                <p>Gagal memuat aktivitas</p>
                <p style="font-size:11px;color:#ef4444;margin-top:4px;">${escapeHtml(err.message || 'Unknown error')}</p>
                <button onclick="loadActivity()" 
                        style="margin-top:12px;padding:8px 20px;background:#0a7e8c;border:none;border-radius:20px;color:white;cursor:pointer;">
                    <i class="ri-refresh-line"></i> Coba Lagi
                </button>
            </div>
        `;
    }
    
    isLoadingActivity = false;
}

function renderActivity(transactions) {
    const container = document.getElementById('activityList');
    if (!container) return;
    
    if (!transactions || transactions.length === 0) {
        container.innerHTML = `
            <div class="empty-activity">
                <i class="ri-inbox-line"></i>
                <p>Belum ada aktivitas transaksi</p>
            </div>
        `;
        return;
    }
    
    const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4', '#14b8a6', '#f97316', '#6366f1'];
    
    let html = '';
    let maxItems = 50;
    const displayData = transactions.slice(0, maxItems);
    
    displayData.forEach((trx) => {
        let username = trx.username || trx.user || 'Anonymous';
        let displayName = username;
        if (displayName.length > 20) {
            displayName = displayName.substring(0, 17) + '...';
        }
        
        let productName = trx.product_name || trx.product || 'Produk Digital';
        let type = trx.type || trx.transaction_type || 'purchase';
        let actionText = 'membeli';
        let iconClass = 'ri-shopping-bag-line';
        let iconColor = '#10b981';
        
        const productId = trx.product_id || trx.id;
        
        if (type === 'deposit' || productName.toLowerCase().includes('deposit')) {
            actionText = 'deposit saldo';
            iconClass = 'ri-wallet-3-line';
            iconColor = '#f59e0b';
            productName = 'Deposit Saldo';
        } else if (type === 'reaction' || productName.toLowerCase().includes('reaction') || productId === 31 || productId === 19) {
            actionText = 'mengirim reaction';
            iconClass = 'ri-emotion-line';
            iconColor = '#ec4899';
            if (productId === 31) productName = 'Reaction 1000';
            else if (productId === 19) productName = 'Reaction 90+';
        } else if (type === 'auto_sosmed' || productName.toLowerCase().includes('suntik')) {
            actionText = 'membeli suntik';
            iconClass = 'ri-rocket-2-line';
            iconColor = '#8b5cf6';
        } else if (type === 'premium_app' || productName.toLowerCase().includes('aplikasi')) {
            actionText = 'membeli aplikasi';
            iconClass = 'ri-apps-2-line';
            iconColor = '#3b82f6';
        } else if (type === 'transfer' || productName.toLowerCase().includes('transfer')) {
            actionText = 'transfer dana';
            iconClass = 'ri-bank-card-line';
            iconColor = '#06b6d4';
        } else if (type === 'apk' || productName.toLowerCase().includes('apk')) {
            actionText = 'membeli APK';
            iconClass = 'ri-android-line';
            iconColor = '#22c55e';
        } else if (type === 'design' || productName.toLowerCase().includes('design')) {
            actionText = 'membeli design';
            iconClass = 'ri-palette-line';
            iconColor = '#ec4899';
        } else if (type === 'website' || productName.toLowerCase().includes('website')) {
            actionText = 'membeli website';
            iconClass = 'ri-global-line';
            iconColor = '#3b82f6';
        }
        
        if (productId === 17) {
            productName = 'Aplikasi Pembuat Logo JB';
            actionText = 'membeli APK';
            iconClass = 'ri-android-line';
            iconColor = '#22c55e';
        } else if (productId === 30) {
            productName = 'Aplikasi Auto Sv Kontak';
            actionText = 'membeli APK';
            iconClass = 'ri-android-line';
            iconColor = '#22c55e';
        } else if (productId === 32) {
            productName = 'Apk Nonton Bioskop Free';
            actionText = 'membeli APK';
            iconClass = 'ri-android-line';
            iconColor = '#22c55e';
        } else if (productId === 29) {
            productName = 'Website Store';
            actionText = 'membeli website';
            iconClass = 'ri-global-line';
            iconColor = '#3b82f6';
        } else if (productId === 20 || productId === 21) {
            productName = 'Aplikasi Premium';
            actionText = 'membeli aplikasi';
            iconClass = 'ri-apps-2-line';
            iconColor = '#3b82f6';
        } else if (productId === 14) {
            productName = 'Nokos';
            actionText = 'membeli nomor';
            iconClass = 'ri-phone-line';
            iconColor = '#f59e0b';
        } else if (productId === 1) {
            productName = 'Transfer DANA';
            actionText = 'transfer dana';
            iconClass = 'ri-bank-card-line';
            iconColor = '#06b6d4';
        }
        
        const colorIndex = username.length % colors.length;
        const avatarColor = colors[colorIndex];
        const initial = username.charAt(0).toUpperCase() || '?';
        
        const date = new Date(trx.created_at || trx.$createdAt || Date.now());
        const time = date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
        const dateStr = date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
        
        let amount = trx.amount || trx.price || 0;
        let amountText = amount > 0 ? `Rp ${amount.toLocaleString('id-ID')}` : '';
        
        let trxId = trx.id || trx.transaction_id || '-';
        if (trxId.length > 10) trxId = trxId.substring(0, 8) + '...';
        
        let status = trx.status || 'success';
        let statusIcon = 'ri-checkbox-circle-line';
        let statusColor = '#10b981';
        if (status === 'pending') { 
            statusIcon = 'ri-time-line'; 
            statusColor = '#f59e0b';
        }
        if (status === 'failed') { 
            statusIcon = 'ri-close-circle-line'; 
            statusColor = '#ef4444';
        }
        
        let quantity = trx.quantity || trx.qty || 1;
        let qtyText = quantity > 1 ? `(${quantity}x)` : '';
        
        html += `
            <div class="activity-item" title="ID: ${trxId}">
                <div class="activity-avatar" style="background: ${avatarColor};">
                    ${initial}
                </div>
                <div class="activity-content">
                    <div class="activity-user">
                        <i class="${iconClass}" style="color: ${iconColor}; font-size: 12px;"></i>
                        <span>${escapeHtml(displayName)}</span>
                        <i class="${statusIcon}" style="color: ${statusColor}; font-size: 10px;"></i>
                    </div>
                    <div class="activity-action">
                        ${actionText} <strong class="activity-product">${escapeHtml(productName)}</strong>
                        ${qtyText}
                        ${amountText ? `<span style="color:#f59e0b;font-weight:600;">${amountText}</span>` : ''}
                        <span style="font-size:8px;color:var(--text-secondary);opacity:0.4;margin-left:3px;">#${trxId}</span>
                    </div>
                </div>
                <div class="activity-time">${dateStr} ${time}</div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    const countEl = document.getElementById('activityCount');
    if (countEl) {
        const total = transactions.length;
        const shown = Math.min(total, maxItems);
        countEl.textContent = total > maxItems ? `${shown}/${total}` : total;
    }
}

function refreshActivity() {
    const btn = document.getElementById('activityRefreshBtn');
    const now = Date.now();
    const timeSinceLast = (now - lastRefreshTime) / 1000;
    
    if (timeSinceLast < COOLDOWN_SECONDS) {
        const remaining = Math.ceil(COOLDOWN_SECONDS - timeSinceLast);
        showToast(`Tunggu ${remaining} detik untuk refresh lagi`, true);
        
        if (btn) {
            btn.style.animation = 'shake 0.4s ease';
            setTimeout(() => {
                if (btn) btn.style.animation = '';
            }, 400);
        }
        return;
    }
    
    if (btn) {
        btn.classList.add('spinning');
        btn.disabled = true;
    }
    
    lastRefreshTime = now;
    
    loadActivity().finally(() => {
        if (btn) {
            setTimeout(() => {
                btn.classList.remove('spinning');
                btn.disabled = false;
                showToast('Aktivitas diperbarui!');
            }, 500);
        }
    });
}

function initActivityWidget() {
    if (isActivityInitialized) return;
    isActivityInitialized = true;
    
    lastRefreshTime = Date.now();
    loadActivity();
    
    if (activityInterval) {
        clearInterval(activityInterval);
    }
    activityInterval = setInterval(loadActivity, 60000);
}

function showToast(message, isError = false) {
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: ${isError ? 'rgba(239,68,68,0.9)' : 'rgba(16,185,129,0.9)'};
        color: white;
        padding: 10px 20px;
        border-radius: 30px;
        font-size: 13px;
        font-weight: 500;
        z-index: 9999;
        backdrop-filter: blur(8px);
        box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        animation: toastSlideIn 0.25s ease forwards;
        max-width: 85%;
        text-align: center;
        white-space: nowrap;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'toastFadeOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

function initSpecialPageActivity() {
    const specialPage = document.getElementById('specialPage');
    if (!specialPage) return;
    
    if (specialPage.classList.contains('active')) {
        setTimeout(initActivityWidget, 300);
    }
}

const activityObserver = new MutationObserver(function() {
    const specialPage = document.getElementById('specialPage');
    if (specialPage && specialPage.classList.contains('active')) {
        initSpecialPageActivity();
    }
});

if (document.body) {
    activityObserver.observe(document.body, { 
        attributes: true, 
        attributeFilter: ['class'] 
    });
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initSpecialPageActivity, 500);
});

if (typeof navigateToPage === 'function') {
    const originalNav = window.navigateToPage || navigateToPage;
    window.navigateToPage = function(pageName) {
        originalNav(pageName);
        if (pageName === 'special') {
            setTimeout(initSpecialPageActivity, 400);
        }
    };
}

window.loadActivity = loadActivity;
window.refreshActivity = refreshActivity;
window.initActivityWidget = initActivityWidget;









































































































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

window.createDepositOtomatis = createDepositOtomatis; 
window.showDepositBottomSheet = showDepositBottomSheet; 
window.createDepositManual = createDepositManual;
window.showQrisZoomManual = showQrisZoomManual;
window.showQrisManualModal = showQrisManualModal;



