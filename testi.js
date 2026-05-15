// ================================================
// DATA TESTIMONI - 3 ID DENGAN GAMBAR
// ================================================
let testimonials = [
    {
        id: 1,
        image: "https://files.catbox.moe/2jmx8v.jpg",
        product: "Panel 8GB",
        price: "Rp 8.500",
        date: "15-05-2026",
        time: "07.53"
    },
    {
        id: 2,
        image: "https://files.catbox.moe/czl854.jpg",
        product: "Bot WhatsApp Custom",
        price: "Rp 10.000",
        date: "14-05-2026",
        time: "19.34"
    },
    {
        id: 3,
        image: "https://files.catbox.moe/dn4700.jpg",
        product: "Bot WhatsApp Custom",
        price: "Rp 14.000",
        date: "12-05-2026",
        time: "08.30"
    },
        {
        id: 4,
        image: "https://files.catbox.moe/261cfx.jpg",
        product: "Tools Termux Custom",
        price: "Rp 3.000",
        date: "12-05-2026",
        time: "20.55"
    },
    {
        id: 5,
        image: "https://files.catbox.moe/a8nvs8.jpg",
        product: "Web To Apk",
        price: "Rp 5.000",
        date: "15-05-2026",
        time: "13.24"
    },
    {
        id: 6,
        image: "https://files.catbox.moe/g5cou8.jpg",
        product: "Update Sc Bot Wa",
        price: "Rp 5.000",
        date: "15-05-2026",
        time: "21.14"
    },
    id: 7,
        image: "https://files.catbox.moe/lrb2zt.jpg",
        product: "Transfer ke dana",
        price: "Admin 1.000",
        date: "15-05-2026",
        time: "21.27"
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
