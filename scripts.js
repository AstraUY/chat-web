document.getElementById('sendButton').addEventListener('click', sendMessage);
document.getElementById('messageInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    if (message !== '') {
        const response = processText(message);
        displayMessage(message, 'user');
        displayMessage(response, 'bot');
        messageInput.value = '';
    }
}

function processText(text) {
    if (text.startsWith('reproduce ')) {
        const cancion = text.substring(10);
        return `Reproduciendo ${cancion} en YouTube`; // Esta línea simula la reproducción de la canción
    } else if (text.startsWith('busca ') || text.startsWith('buscame ')) {
        const busqueda = text.substring(text.startsWith('busca ') ? 6 : 8);
        return `Buscando ${busqueda} en Google`; // Esta línea simula la búsqueda en Google
    } else {
        return "Lo siento, no pude procesar tu solicitud.";
    }
}

function displayMessage(message, sender) {
    const chatWindow = document.getElementById('chatWindow');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add('message', sender);
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
