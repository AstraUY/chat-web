document.getElementById('sendButton').addEventListener('click', sendMessage);
document.getElementById('voiceButton').addEventListener('click', sendVoiceMessage);

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    if (message !== '') {
        const chatWindow = document.getElementById('chatWindow');
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.className = 'message';
        chatWindow.appendChild(messageElement);
        messageInput.value = '';
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
}

function sendVoiceMessage() {
    alert('Función de mensaje por voz aún no implementada');
}
