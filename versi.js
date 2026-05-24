// ================================================
// DATA TESTIMONI - 3 ID DENGAN GAMBAR
// ================================================


let testimonials = [
    {
        id: 1,
        image: "image/testi/testi01.jpg",
        product: "Panel 8GB",
        price: "Rp 8.500",
        date: "15-05-2026",
        time: "07.53"
    },
    {
        id: 2,
        image: "image/testi/testi02.jpg",
        product: "Bot WhatsApp Custom",
        price: "Rp 10.000",
        date: "14-05-2026",
        time: "19.34"
    },
    {
        id: 3,
        image: "image/testi/testi03.jpg",
        product: "Bot WhatsApp Custom",
        price: "Rp 14.000",
        date: "12-05-2026",
        time: "08.30"
    },
        {
        id: 4,
        image: "image/testi/testi04.jpg",
        product: "Tools Termux Custom",
        price: "Rp 3.000",
        date: "12-05-2026",
        time: "20.55"
    },
    {
        id: 5,
        image: "image/testi/testi05.jpg",
        product: "Web To Apk",
        price: "Rp 5.000",
        date: "15-05-2026",
        time: "13.24"
    },
    {
        id: 6,
        image: "image/testi/testi06.jpg",
        product: "Update Sc Bot Wa",
        price: "Rp 5.000",
        date: "15-05-2026",
        time: "21.14"
    },
    {
    id: 7,
        image: "image/testi/testi07.jpg",
        product: "Transfer ke dana",
        price: "Biaya Admin 1.000",
        date: "15-05-2026",
        time: "21.27"
    },
    {
    id: 8,
        image: "image/testi/testi08.jpg",
        product: "Bot Wa Custom",
        price: "Biaya Admin 1.000",
        date: "16-05-2026",
        time: "23.05"
    },
        {
      id: 9,
        image: "image/testi/testi09.jpg",
        product: "Panel Ptero 3GB",
        price: "Rp 4.000",
        date: "17-05-2026",
        time: "20.17"
    },
            {
      id: 10,
        image: "image/testi/testi10.jpg",
        product: "Panel Ptero 2GB",
        price: "Rp 2.000",
        date: "18-05-2026",
        time: "20.17"
    },
                {
      id: 11,
        image: "image/testi/testi11.jpg",
        product: "Reseller Panel Permanen",
        price: "Rp 25.000",
        date: "20-05-2026",
        time: "17.00"
    },
    {
    id: 12,
        image: "image/testi/testi12.jpg",
        product: "Panel 5 GB",
        price: "Rp 3.000",
        date: "23-05-2026",
        time: "19.38"
        
    },
        {
    id: 13,
        image: "image/testi/testi13.jpg",
        product: "Reaction Pesan Saluran WA",
        price: "Rp 500",
        date: "24-05-2026",
        time: "08.27"
        
    },
            {
    id: 14,
        image: "image/testi/testi14.jpg",
        product: "Reaction Pesan Saluran WA",
        price: "Rp 500",
        date: "24-05-2026",
        time: "08.12"
        
    },
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
];





function renderTestimonials() {
    const grid = document.getElementById('testimoniGrid');
    if (!grid) return;
    
    grid.innerHTML = testimonials.map(t => `
        <div class="testimoni-card">
            <div class="testimoni-image">
                <img src="${t.image}" alt="Produk">
            </div>
            <div class="testimoni-title">
                📢 TRANSAKSI BERHASIL
            </div>
            <div class="testimoni-product">
                <p>📦 <strong>${t.product}</strong></p>
                <p>💰 ${t.price}</p>
                <p>📆 ${t.date} • 🕒 ${t.time}</p>
            </div>
            <div class="testimoni-divider">━━━━━━━━━━</div>
            <div class="testimoni-footer">
                <p>✅ Proses cepat & aman</p>
                <p>✅ Layanan aktif setiap hari</p>
            </div>
        </div>
    `).join('');
}
