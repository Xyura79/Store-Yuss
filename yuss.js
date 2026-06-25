(function() {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
    }

    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'icon-btn theme-toggle';
    toggleBtn.style.cssText = `
        position: fixed;
        top: 16px;
        right: 16px;
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        color: var(--text-primary);
        font-size: 20px;
        cursor: pointer;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transition: all 0.3s ease;
    `;
    toggleBtn.innerHTML = document.body.classList.contains('light-mode') ?
        '<i class="ri-moon-line"></i>' :
        '<i class="ri-sun-line"></i>';

    toggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            this.innerHTML = '<i class="ri-moon-line"></i>';
        } else {
            localStorage.setItem('theme', 'dark');
            this.innerHTML = '<i class="ri-sun-line"></i>';
        }
    });

    document.body.appendChild(toggleBtn);

    const style = document.createElement('style');
    style.textContent = `
        body.light-mode .theme-toggle {
            background: #ffffff !important;
            border-color: #e2e8f0 !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.06) !important;
        }
        .theme-toggle:active {
            transform: scale(0.92);
        }
    `;
    document.head.appendChild(style);
})();

function openQrisZoom(imageSrc) {
    const overlay = document.getElementById('qrisZoomOverlay');
    const zoomImage = document.getElementById('qrisZoomImage');
    if (!overlay || !zoomImage) return;

    zoomImage.src = imageSrc;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeQrisZoom() {
    const overlay = document.getElementById('qrisZoomOverlay');
    if (!overlay) return;
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeQrisZoom();
    }
});

const urlParams = new URLSearchParams(window.location.search);
const depositId = urlParams.get('depositId');
const username = urlParams.get('username');
const amount = urlParams.get('amount');
const uniqueCode = urlParams.get('uniqueCode');
const totalAmount = urlParams.get('totalAmount');
const qrImage = urlParams.get('qrImage');
const ramaDepositId = urlParams.get('ramaDepositId') || depositId;

let timeLeft = 900;
let checkInterval = null;
let timerInterval = null;
let isExpired = false;
let isProcessing = false;
let isSuccess = false;
let isFirstCheck = true;

const usernameDisplay = document.getElementById('usernameDisplay');
const balanceDisplay = document.getElementById('balanceDisplay');
const userAvatar = document.getElementById('userAvatar');
const totalAmountEl = document.getElementById('totalAmount');
const amountBaseEl = document.getElementById('amountBase');
const uniqueCodeDisplay = document.getElementById('uniqueCodeDisplay');
const qrisImage = document.getElementById('qrisImage');
const qrisLink = document.getElementById('qrisLink');
const qrLoading = document.getElementById('qrLoading');
const statusBox = document.getElementById('statusBox');
const statusText = document.getElementById('statusText');
const timerDisplay = document.getElementById('timerDisplay');
const checkStatusBtn = document.getElementById('checkStatusBtn');
const backToStoreBtn = document.getElementById('backToStoreBtn');
const manualConfirmBtn = document.getElementById('manualConfirmBtn');
const downloadQrisBtn = document.getElementById('downloadQrisBtn');
const statusDot = document.getElementById('statusDot');
const headerStatusText = document.getElementById('headerStatusText');
const trxIdDisplay = document.getElementById('trxIdDisplay');
const copyTrxBtn = document.getElementById('copyTrxBtn');

function getCurrentDateTime() {
    const now = new Date();
    const jam = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    const tanggal = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long' });
    const tahun = now.getFullYear();
    return { jam, tanggal, tahun };
}

async function sendDepositNotification(username, amount) {
    const { jam, tanggal, tahun } = getCurrentDateTime();
    const message = '*⟦ PEMBELIAN SALDO BERHASIL ⟧*\n\n' +
        '☞ 👤 Username          : ' + username + '\n' +
        '☞ 💰 Saldo Dibeli      : Rp ' + parseInt(amount).toLocaleString('id-ID') + '\n' +
        '☞ 📅 Tanggal: ' + tanggal + ' ' + jam + '\n' +
        '☞ ✅ Status    : Berhasil\n\n' +
        'Terima kasih atas kepercayaan Anda kepada \n' +
        'Yuss Xy Store.\n\n' +
        '*Download Aplikasi Yuss Xy Store:*\n' +
        'https://www.mediafire.com/file/q2va9jlgf3xy0pm/DIGITAL+SHOOP+-+YUSS+XY.apk/file';

    try {
        const response = await fetch('https://backend-delta-steel-38.vercel.app/api/rc', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'sb_secret_Ok9VVXILGV6zybDzN0zVpA_U5k___GF'
            },
            body: JSON.stringify({
                type: "send",
                target: "120363403696927236@newsletter",
                message: message
            })
        });
        return await response.json();
    } catch (error) {
        console.error('Gagal kirim deposit testimoni:', error);
        return { success: false, error: error.message };
    }
}

function showToast(message, isError) {
    if (isError === undefined) isError = false;
    const existing = document.querySelector('.toast-payment');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-payment' + (isError ? ' error' : ' success');

    const icon = isError ? 'ri-error-warning-line' : 'ri-checkbox-circle-fill';
    const iconColor = isError ? '#f87171' : '#34d399';

    toast.innerHTML = `
        <div class="toast-icon" style="background: ${isError ? 'rgba(239,68,68,0.12)' : 'rgba(16,185,129,0.12)'}; border-color: ${isError ? 'rgba(239,68,68,0.2)' : 'rgba(16,185,129,0.2)'};">
            <i class="${icon}" style="color: ${iconColor};"></i>
        </div>
        <div class="toast-content">
            <div class="toast-title">${isError ? 'Gagal' : 'Berhasil'}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" onclick="this.closest('.toast-payment').remove()">
            <i class="ri-close-line"></i>
        </button>
        <div class="toast-progress" style="background: ${isError ? '#ef4444' : '#10b981'};"></div>
    `;

    document.body.appendChild(toast);
    requestAnimationFrame(function() { toast.classList.add('show'); });

    setTimeout(function() {
        toast.classList.remove('show');
        toast.classList.add('hide');
        setTimeout(function() {
            if (toast.parentNode) toast.remove();
        }, 350);
    }, 2800);
}

function formatPrice(num) {
    if (!num) return '0';
    return parseInt(num).toLocaleString('id-ID');
}

function goBackToStore() {
    window.location.href = 'index.html';
}

function downloadQris() {
    const imgSrc = qrisImage.src;
    if (!imgSrc || imgSrc.includes('placehold')) {
        showToast('QRIS belum tersedia untuk di-download', true);
        return;
    }

    showToast('Mengunduh QRIS...');

    fetch(imgSrc)
        .then(function(response) { return response.blob(); })
        .then(function(blob) {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'QRIS_YussXy_' + depositId + '.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);
            showToast('QRIS berhasil di-download');
        })
        .catch(function() {
            window.open(imgSrc, '_blank');
            showToast('QRIS dibuka di tab baru');
        });
}

function copyTrxId() {
    const trxId = trxIdDisplay.textContent;
    if (!trxId || trxId === '-') {
        showToast('ID Transaksi belum tersedia', true);
        return;
    }
    navigator.clipboard.writeText(trxId).then(function() {
        showToast('ID Transaksi disalin');
    }).catch(function() {
        showToast('Gagal menyalin', true);
    });
}

function init() {
    if (!depositId || !username) {
        showToast('Parameter tidak valid. Kembali ke toko.', true);
        statusBox.className = 'status-box expired';
        statusBox.innerHTML = '<i class="ri-error-warning-line"></i> <span>Parameter tidak valid</span>';
        checkStatusBtn.disabled = true;
        checkStatusBtn.style.opacity = '0.5';
        setTimeout(goBackToStore, 2000);
        return;
    }

    usernameDisplay.textContent = username;
    userAvatar.textContent = username.charAt(0).toUpperCase();

    if (totalAmount) {
        totalAmountEl.textContent = 'Rp ' + formatPrice(totalAmount);
    }

    if (amount) {
        amountBaseEl.textContent = formatPrice(amount);
    }

    if (uniqueCode) {
        uniqueCodeDisplay.textContent = uniqueCode;
    }

    if (ramaDepositId) {
        trxIdDisplay.textContent = ramaDepositId;
    }

    if (qrImage) {
        qrisImage.onload = function() {
            qrisImage.classList.add('loaded');
            qrLoading.style.display = 'none';
        };
        qrisImage.onerror = function() {
            this.src = 'https://placehold.co/200x200/333/white?text=QRIS';
            this.classList.add('loaded');
            qrLoading.style.display = 'none';
            showToast('Gagal memuat QRIS, gunakan link', true);
        };
        qrisImage.src = qrImage;
        qrisLink.href = qrImage;

        qrisImage.addEventListener('click', function() {
            if (this.src && !this.src.includes('placehold')) {
                openQrisZoom(this.src);
            }
        });

        setTimeout(function() {
            if (!qrisImage.classList.contains('loaded')) {
                qrLoading.style.display = 'none';
                qrisImage.src = 'https://placehold.co/200x200/333/white?text=QRIS';
                qrisImage.classList.add('loaded');
            }
        }, 8000);
    } else {
        qrLoading.style.display = 'none';
        qrisImage.src = 'https://placehold.co/200x200/333/white?text=QRIS';
        qrisImage.classList.add('loaded');
    }

    downloadQrisBtn.addEventListener('click', downloadQris);
    copyTrxBtn.addEventListener('click', copyTrxId);

    loadUserBalance();
    startTimer();
    checkInterval = setInterval(checkStatus, 5000);

    checkStatusBtn.addEventListener('click', checkStatus);
    backToStoreBtn.addEventListener('click', goBackToStore);
    manualConfirmBtn.addEventListener('click', manualConfirm);

    setStatus('pending', 'ri-time-line', 'Menunggu pembayaran...');
    showToast('Silakan scan QRIS untuk membayar');
}

function setStatus(type, icon, text) {
    statusBox.className = 'status-box ' + type;
    statusBox.innerHTML = '<i class="' + icon + '"></i> <span>' + text + '</span>';

    if (type === 'pending') {
        statusDot.className = 'dot active';
        headerStatusText.textContent = 'Menunggu';
    } else if (type === 'success') {
        statusDot.className = 'dot active';
        headerStatusText.textContent = 'Berhasil';
    } else if (type === 'expired') {
        statusDot.className = 'dot inactive';
        headerStatusText.textContent = 'Kadaluarsa';
    }
}

async function loadUserBalance() {
    try {
        const response = await fetch('https://backend-delta-steel-38.vercel.app/api/balance', {
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

        const data = await response.json();
        if (data.success && data.data) {
            balanceDisplay.innerHTML = '<i class="ri-wallet-line"></i> Saldo: Rp ' + formatPrice(data.data.balance || 0);
            balanceDisplay.classList.remove('loading');
        }
    } catch (error) {
        balanceDisplay.innerHTML = '<i class="ri-wallet-line"></i> Saldo: -';
        balanceDisplay.classList.remove('loading');
    }
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timeLeft = 900;

    timerInterval = setInterval(function() {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            clearInterval(checkInterval);
            isExpired = true;
            setStatus('expired', 'ri-close-line', 'Deposit sudah kadaluarsa!');
            checkStatusBtn.disabled = true;
            checkStatusBtn.style.opacity = '0.5';
            checkStatusBtn.innerHTML = '<i class="ri-close-line"></i> Kadaluarsa';
            manualConfirmBtn.classList.add('hidden');
            showToast('Deposit sudah kadaluarsa!', true);
        }
    }, 1000);
}

function updateTimerDisplay() {
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;
    timerDisplay.textContent = String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');

    if (timeLeft < 60) {
        timerDisplay.classList.add('danger');
        timerDisplay.classList.remove('warning');
    } else if (timeLeft < 180) {
        timerDisplay.classList.add('warning');
        timerDisplay.classList.remove('danger');
    } else {
        timerDisplay.classList.remove('warning', 'danger');
    }
}

async function checkStatus() {
    if (isExpired || isProcessing || isSuccess) return;

    isProcessing = true;
    checkStatusBtn.disabled = true;
    checkStatusBtn.innerHTML = '<div class="spinner"></div> Mengecek...';

    try {
        var response = await fetch('https://backend-delta-steel-38.vercel.app/api/deposit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'check',
                depositId: depositId
            })
        });

        var data = await response.json();

        if (data.success && data.data) {
            var status = data.data.status;

            if (status === 'success') {
                isSuccess = true;
                clearInterval(checkInterval);
                clearInterval(timerInterval);

                setStatus('success', 'ri-check-line', 'Deposit berhasil! Saldo: Rp ' + formatPrice(data.data.balance || 0));
                checkStatusBtn.innerHTML = '<i class="ri-check-line"></i> Berhasil';
                checkStatusBtn.disabled = true;
                checkStatusBtn.style.opacity = '0.5';
                manualConfirmBtn.classList.add('hidden');

                loadUserBalance();
                await sendDepositNotification(username, amount);
                showToast('Deposit Rp ' + formatPrice(amount) + ' berhasil!');

                setTimeout(goBackToStore, 4000);
                return;
            }

            if (status === 'expired') {
                isExpired = true;
                clearInterval(checkInterval);
                clearInterval(timerInterval);
                setStatus('expired', 'ri-close-line', 'Deposit sudah kadaluarsa!');
                checkStatusBtn.innerHTML = '<i class="ri-close-line"></i> Kadaluarsa';
                checkStatusBtn.disabled = true;
                checkStatusBtn.style.opacity = '0.5';
                manualConfirmBtn.classList.add('hidden');
                showToast('Deposit sudah kadaluarsa!', true);
                return;
            }

            if (status === 'pending') {
                if (isFirstCheck) {
                    setStatus('pending', 'ri-time-line', 'Menunggu pembayaran...');
                    isFirstCheck = false;
                    showToast('Tunggu 1-3 menit setelah pembayaran', false);
                }
                checkStatusBtn.innerHTML = '<i class="ri-refresh-line"></i> Cek Status';
            }
        }

    } catch (error) {
        if (isFirstCheck) {
            setStatus('pending', 'ri-error-warning-line', 'Gagal cek status, coba lagi');
        }
        showToast('Gagal cek status', true);
    } finally {
        isProcessing = false;
        checkStatusBtn.disabled = false;
        if (!isExpired && !isSuccess) {
            checkStatusBtn.innerHTML = '<i class="ri-refresh-line"></i> Cek Status';
        }
    }
}

async function manualConfirm() {
    if (isExpired || isProcessing || isSuccess) return;

    isProcessing = true;
    manualConfirmBtn.disabled = true;
    manualConfirmBtn.innerHTML = '<div class="spinner"></div> Memproses...';
    manualConfirmBtn.style.opacity = '0.6';

    try {
        var response = await fetch('https://backend-delta-steel-38.vercel.app/api/deposit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'webhook',
                depositId: depositId,
                status: 'success',
                amount: parseInt(amount) || 0
            })
        });

        var data = await response.json();

        if (data.success) {
            isSuccess = true;
            clearInterval(checkInterval);
            clearInterval(timerInterval);
            setStatus('success', 'ri-check-line', 'Deposit berhasil dikonfirmasi!');
            manualConfirmBtn.innerHTML = '<i class="ri-check-line"></i> Berhasil';
            manualConfirmBtn.disabled = true;
            manualConfirmBtn.style.opacity = '0.5';
            loadUserBalance();
            await sendDepositNotification(username, amount);
            showToast('Deposit berhasil dikonfirmasi!');
            setTimeout(goBackToStore, 3000);
        } else {
            setStatus('pending', 'ri-error-warning-line', 'Gagal konfirmasi');
            manualConfirmBtn.innerHTML = '<i class="ri-check-line"></i> Konfirmasi Manual';
            manualConfirmBtn.disabled = false;
            manualConfirmBtn.style.opacity = '1';
            showToast('Gagal konfirmasi', true);
        }

    } catch (error) {
        setStatus('pending', 'ri-error-warning-line', 'Gagal koneksi ke server');
        manualConfirmBtn.innerHTML = '<i class="ri-check-line"></i> Konfirmasi Manual';
        manualConfirmBtn.disabled = false;
        manualConfirmBtn.style.opacity = '1';
        showToast('Gagal konfirmasi', true);
    } finally {
        isProcessing = false;
    }
}

document.addEventListener('DOMContentLoaded', init);

setTimeout(function() {
    if (!depositId) {
        showToast('Redirect ke toko...', true);
        setTimeout(goBackToStore, 1500);
    }
}, 3000);