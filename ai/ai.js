// ================================================
// AI CHAT - YussXy Store (FIXED localStorage)
// ================================================

// Theme dari localStorage
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
}

// ==================== VARIABEL ====================
let currentAI = 'chatgpt';
let currentAIName = 'ChatGPT';
let chatHistory = [];
let isTyping = false;

// Background settings
let bgSettings = {
    image: null,
    darkness: 0.5,
    blur: 0,
    opacity: 1
};

// DOM Elements
const chatWrapper = document.getElementById('chatWrapper');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const aiNameSpan = document.getElementById('aiName');
const selectedAINameSpan = document.getElementById('selectedAIName');

// ==================== API AI (11 AI) ====================
const API_URLS = {
    chatgpt: (msg) => `https://api.nexray.eu.cc/ai/chatgpt?text=${encodeURIComponent(msg)}`,
    dolphin: (msg) => `https://api.nexray.eu.cc/ai/dolphin?text=${encodeURIComponent(msg)}&template=logical`,
    dracin: (msg) => `https://api.nexray.eu.cc/ai/dracin-tts?text=${encodeURIComponent(msg)}&speed=1.0&volume=0.3&music=true`,
    felo: (msg) => `https://api.nexray.eu.cc/ai/felo?text=${encodeURIComponent(msg)}`,
    wormgpt: (msg) => `https://bintangapi.full.diskon.cloud/api/aichat/wormgpt/?q=${encodeURIComponent(msg)}`,
    bintangai: (msg) => `https://bintangapi.full.diskon.cloud/api/aichat/bintangai/?message=${encodeURIComponent(msg)}`,
    islam: (msg) => `https://bintangapi.full.diskon.cloud/api/aichat/islam/?text=${encodeURIComponent(msg)}`,
    gpt35: (msg) => `https://bintangapi.full.diskon.cloud/api/aichat/gpt-3.5-turbo/?text=${encodeURIComponent(msg)}`,
    copilot: (msg) => `https://bintangapi.full.diskon.cloud/api/aichat/copilot-ai/?text=${encodeURIComponent(msg)}`,
    claude: (msg) => `https://bintangapi.full.diskon.cloud/api/aichat/Claude-ai/?text=${encodeURIComponent(msg)}`,
    gemini: (msg) => `https://bintangapi.full.diskon.cloud/api/aichat/gemini/?text=${encodeURIComponent(msg)}`
};

// Parse response untuk setiap AI
function parseResponse(ai, data) {
    if (ai === 'chatgpt') return data.result || 'Maaf, tidak ada respons';
    if (ai === 'dolphin') return data.result || 'Maaf, tidak ada respons';
    if (ai === 'dracin') {
        if (data.result && (data.result.includes('.mp3') || data.result.includes('/tmp/'))) {
            return data.result;
        }
        return data.result || 'Maaf, tidak bisa menghasilkan suara';
    }
    if (ai === 'felo') return data.result || 'Maaf, tidak ada respons';
    if (ai === 'wormgpt') return data.answer || 'Maaf, tidak ada respons';
    if (ai === 'bintangai') return data.result || 'Maaf, tidak ada respons';
    if (ai === 'islam') return data.result || 'Maaf, tidak ada respons';
    if (ai === 'gpt35') return data.result || 'Maaf, tidak ada respons';
    if (ai === 'copilot') {
        if (data.result && data.result.text) return data.result.text;
        return data.result || 'Maaf, tidak ada respons';
    }
    if (ai === 'claude') return data.result || 'Maaf, tidak ada respons';
    if (ai === 'gemini') return data.result || 'Maaf, tidak ada respons';
    return 'Maaf, tidak ada respons';
}

// ==================== FORMAT BOLD OTOMATIS ====================
function formatBoldText(text) {
    if (!text) return '';
    
    let escaped = text.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
    
    escaped = escaped.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    escaped = escaped.replace(/\*(.*?)\*/g, '<em>$1</em>');
    escaped = escaped.replace(/\n/g, '<br>');
    
    return escaped;
}

function formatMessage(text) {
    if (text.includes('```')) {
        const parts = text.split(/(```[\s\S]*?```)/g);
        let formatted = '';
        for (let part of parts) {
            if (part.startsWith('```') && part.endsWith('```')) {
                const code = part.slice(3, -3).trim();
                const uniqueId = 'copy_' + Date.now() + '_' + Math.random();
                formatted += `
                    <div class="code-block" data-id="${uniqueId}">
                        <pre>${escapeHtml(code)}</pre>
                        <button class="copy-code-btn" onclick="window.copyCode('${uniqueId}')">Salin</button>
                    </div>
                `;
            } else {
                formatted += formatBoldText(part);
            }
        }
        return formatted;
    }
    
    if (text && (text.includes('api.nexray.eu.cc/tmp/') || (text.startsWith('https://') && text.endsWith('.mp3')))) {
        let audioUrl = text;
        if (text.includes('.mp3')) {
            const mp3Index = text.indexOf('.mp3');
            audioUrl = text.substring(0, mp3Index + 4);
        }
        return `
            <div class="audio-message">
                <audio class="ai-audio-player" controls autoplay preload="auto">
                    <source src="${audioUrl}" type="audio/mpeg">
                </audio>
            </div>
        `;
    }
    
    return formatBoldText(text);
}

function escapeHtml(text) {
    if (!text) return '';
    return text.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// ==================== CHAT FUNCTIONS ====================
function getCurrentTime() {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
}

function addMessageToDOM(sender, text, time, saveToHistory = true) {
    const formattedText = formatMessage(text);
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.innerHTML = `
        <div class="bubble">
            ${formattedText}
            <div class="message-time">
                <i class="ri-time-line"></i> <span class="msg-time">${time}</span>
            </div>
        </div>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    if (saveToHistory) {
        chatHistory.push({ sender, text, time, id: Date.now() });
        saveChatHistory();
    }
}

function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message ai typing-message';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="bubble">
            <div class="typing-indicator">
                <span></span><span></span><span></span>
            </div>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
    const typing = document.getElementById('typingIndicator');
    if (typing) typing.remove();
}

async function sendToAI(message) {
    const url = API_URLS[currentAI](message);
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.status === true || data.code === 200) {
            let reply = parseResponse(currentAI, data);
            return reply;
        }
        return 'Maaf, terjadi kesalahan. Coba lagi nanti.';
    } catch (error) {
        console.error('Error:', error);
        return 'Maaf, terjadi error koneksi. Periksa internet kamu.';
    }
}

async function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    addMessageToDOM('user', message, getCurrentTime(), true);
    chatInput.value = '';
    
    showTypingIndicator();
    const reply = await sendToAI(message);
    removeTypingIndicator();
    
    addMessageToDOM('ai', reply, getCurrentTime(), true);
}

function switchAI(aiKey, aiName) {
    currentAI = aiKey;
    currentAIName = aiName;
    selectedAINameSpan.innerText = aiName;
    aiNameSpan.innerHTML = `${aiName} <span style="font-size: 10px; color: #10b981;">●</span>`;
    
    document.querySelectorAll('.ai-option').forEach(opt => {
        opt.classList.remove('active');
        if (opt.dataset.ai === aiKey) opt.classList.add('active');
    });
    
    localStorage.setItem('selected_ai', aiKey);
    
    let welcomeMsg = `AI berhasil diganti ke **${aiName}**! ✨\n\n`;
    if (aiKey === 'dracin') {
        welcomeMsg += 'Kirimkan teks dan saya akan mengubahnya menjadi suara! 🎵';
    } else if (aiKey === 'felo') {
        welcomeMsg += 'Saya bisa memberikan jawaban dengan referensi sumber terpercaya. 📚';
    } else {
        welcomeMsg += `Ada yang ingin ditanyakan?`;
    }
    
    addMessageToDOM('ai', welcomeMsg, getCurrentTime(), true);
}

// ==================== BACKGROUND FUNCTIONS ====================
function loadBgSettings() {
    const saved = localStorage.getItem('ai_chat_bg');
    if (saved) {
        try {
            bgSettings = JSON.parse(saved);
            applyBackground();
        } catch(e) {}
    }
}

function applyBackground() {
    if (bgSettings.image) {
        chatWrapper.style.backgroundImage = `url(${bgSettings.image})`;
        chatWrapper.style.backgroundSize = 'cover';
        chatWrapper.style.backgroundPosition = 'center';
        chatWrapper.style.backgroundRepeat = 'no-repeat';
        
        const oldOverlay = document.querySelector('.bg-overlay');
        if (oldOverlay) oldOverlay.remove();
        
        const overlay = document.createElement('div');
        overlay.className = 'bg-overlay';
        overlay.style.background = `rgba(0, 0, 0, ${bgSettings.darkness})`;
        overlay.style.backdropFilter = `blur(${bgSettings.blur}px)`;
        overlay.style.opacity = bgSettings.opacity;
        chatWrapper.insertBefore(overlay, chatWrapper.firstChild);
        
        document.querySelectorAll('.chat-header, .chat-messages, .chat-input-area').forEach(el => {
            el.style.position = 'relative';
            el.style.zIndex = '1';
        });
    } else {
        chatWrapper.style.backgroundImage = '';
        const overlay = document.querySelector('.bg-overlay');
        if (overlay) overlay.remove();
    }
}

function saveBgSettings() {
    localStorage.setItem('ai_chat_bg', JSON.stringify(bgSettings));
    applyBackground();
}

// ==================== CHAT HISTORY (FIXED) ====================
function saveChatHistory() {
    localStorage.setItem('ai_chat_history', JSON.stringify(chatHistory));
    console.log('Chat history saved:', chatHistory.length, 'messages');
}

function loadChatHistory() {
    const saved = localStorage.getItem('ai_chat_history');
    console.log('Loading chat history from localStorage:', saved ? 'found' : 'not found');
    
    if (saved) {
        try {
            chatHistory = JSON.parse(saved);
            console.log('Chat history loaded:', chatHistory.length, 'messages');
            renderChatHistory();
        } catch(e) {
            console.error('Error parsing chat history:', e);
            chatHistory = [];
        }
    }
    
    // Jika tidak ada history, buat pesan sambutan
    if (chatHistory.length === 0) {
        console.log('No history found, creating welcome message');
        const welcomeMsg = `Halo! 👋 Saya **${currentAIName}**, asisten AI dari **YussXy Store**.\n\n💡 **Yang bisa saya bantu:**\n• Tanyakan apa saja\n• Pilih AI lain dari menu atas\n• Atur background dengan klik ikon gerigi\n\nAda yang ingin ditanyakan?`;
        addMessageToDOM('ai', welcomeMsg, getCurrentTime(), true);
    }
}

function renderChatHistory() {
    if (!chatMessages) return;
    chatMessages.innerHTML = '';
    chatHistory.forEach(msg => {
        addMessageToDOM(msg.sender, msg.text, msg.time, false);
    });
    chatMessages.scrollTop = chatMessages.scrollHeight;
    console.log('Rendered', chatHistory.length, 'messages');
}

function clearChatHistory() {
    chatHistory = [];
    saveChatHistory();
    chatMessages.innerHTML = '';
    const welcomeMsg = `Halo! 👋 Saya **${currentAIName}**, asisten AI dari **YussXy Store**.\n\nRiwayat chat telah dihapus. Ada yang bisa saya bantu?`;
    addMessageToDOM('ai', welcomeMsg, getCurrentTime(), true);
    showToast('Riwayat chat berhasil dihapus');
}

// ==================== COPY CODE ====================
window.copyCode = function(uniqueId) {
    const codeBlock = document.querySelector(`.code-block[data-id="${uniqueId}"]`);
    if (codeBlock) {
        const code = codeBlock.querySelector('pre').innerText;
        navigator.clipboard.writeText(code).then(() => {
            const btn = codeBlock.querySelector('.copy-code-btn');
            btn.innerText = 'Tersalin!';
            setTimeout(() => btn.innerText = 'Salin', 1500);
        });
    }
};

function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--accent);
        color: white;
        padding: 8px 16px;
        border-radius: 30px;
        font-size: 12px;
        z-index: 1000;
        white-space: nowrap;
    `;
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

// ==================== EVENT LISTENERS ====================
sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// AI Modal
const aiModal = document.getElementById('aiModal');
const aiSelectorBtn = document.getElementById('aiSelectorBtn');
const closeAiModal = document.getElementById('closeAiModal');

aiSelectorBtn.addEventListener('click', () => aiModal.classList.add('active'));
closeAiModal.addEventListener('click', () => aiModal.classList.remove('active'));

document.querySelectorAll('.ai-option').forEach(option => {
    option.addEventListener('click', () => {
        const aiKey = option.dataset.ai;
        const aiName = option.dataset.name;
        switchAI(aiKey, aiName);
        aiModal.classList.remove('active');
    });
});

// Settings Modal
const settingsModal = document.getElementById('settingsModal');
const settingsBtn = document.getElementById('settingsBtn');
const closeSettingsModal = document.getElementById('closeSettingsModal');

settingsBtn.addEventListener('click', () => {
    document.getElementById('darknessSlider').value = bgSettings.darkness;
    document.getElementById('darknessValue').innerText = Math.round(bgSettings.darkness * 100) + '%';
    document.getElementById('blurSlider').value = bgSettings.blur;
    document.getElementById('blurValue').innerText = bgSettings.blur + 'px';
    document.getElementById('opacitySlider').value = bgSettings.opacity;
    document.getElementById('opacityValue').innerText = Math.round(bgSettings.opacity * 100) + '%';
    if (bgSettings.image) {
        document.getElementById('bgPreview').style.backgroundImage = `url(${bgSettings.image})`;
        document.getElementById('bgPreview').style.backgroundSize = 'cover';
        document.getElementById('bgPreview').style.backgroundPosition = 'center';
    }
    settingsModal.classList.add('active');
});

closeSettingsModal.addEventListener('click', () => settingsModal.classList.remove('active'));

// Upload background
const uploadBgBtn = document.getElementById('uploadBgBtn');
const bgUpload = document.getElementById('bgUpload');

uploadBgBtn.addEventListener('click', () => bgUpload.click());
bgUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            bgSettings.image = event.target.result;
            document.getElementById('bgPreview').style.backgroundImage = `url(${bgSettings.image})`;
            saveBgSettings();
        };
        reader.readAsDataURL(file);
    }
});

// Sliders
document.getElementById('darknessSlider').addEventListener('input', (e) => {
    bgSettings.darkness = parseFloat(e.target.value);
    document.getElementById('darknessValue').innerText = Math.round(bgSettings.darkness * 100) + '%';
    saveBgSettings();
});

document.getElementById('blurSlider').addEventListener('input', (e) => {
    bgSettings.blur = parseInt(e.target.value);
    document.getElementById('blurValue').innerText = bgSettings.blur + 'px';
    saveBgSettings();
});

document.getElementById('opacitySlider').addEventListener('input', (e) => {
    bgSettings.opacity = parseFloat(e.target.value);
    document.getElementById('opacityValue').innerText = Math.round(bgSettings.opacity * 100) + '%';
    saveBgSettings();
});

// Reset background
document.getElementById('resetBgBtn').addEventListener('click', () => {
    bgSettings = { image: null, darkness: 0.5, blur: 0, opacity: 1 };
    document.getElementById('bgPreview').style.backgroundImage = '';
    document.getElementById('darknessSlider').value = 0.5;
    document.getElementById('blurSlider').value = 0;
    document.getElementById('opacitySlider').value = 1;
    saveBgSettings();
    showToast('Background direset ke default');
});

// Clear chat
document.getElementById('clearChatBtn').addEventListener('click', () => {
    if (confirm('Hapus semua riwayat chat? Tindakan ini tidak bisa dibatalkan.')) {
        clearChatHistory();
    }
});

// Close modals on outside click
aiModal.addEventListener('click', (e) => { if (e.target === aiModal) aiModal.classList.remove('active'); });
settingsModal.addEventListener('click', (e) => { if (e.target === settingsModal) settingsModal.classList.remove('active'); });

// Load saved AI preference
const savedAI = localStorage.getItem('selected_ai');
if (savedAI && savedAI !== 'chatgpt') {
    const aiOption = document.querySelector(`.ai-option[data-ai="${savedAI}"]`);
    if (aiOption) {
        switchAI(savedAI, aiOption.dataset.name);
    }
}

// ==================== INITIALIZATION ====================
// Load semua data dari localStorage
loadBgSettings();
loadChatHistory();  // Ini akan memuat chat history
chatInput.focus();

console.log('AI Chat initialized, localStorage keys:', {
    history: localStorage.getItem('ai_chat_history') ? 'yes' : 'no',
    bg: localStorage.getItem('ai_chat_bg') ? 'yes' : 'no',
    ai: localStorage.getItem('selected_ai') || 'default'
});