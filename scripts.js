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
        // Simula enviar el mensaje y recibir una respuesta
        const response = processText(message);
        displayMessage(message, 'user');
        displayMessage(response, 'bot');
        messageInput.value = '';
    }
}

function processText(text) {
    if (text.startsWith('reproduce ')) {
        const cancion = text.substring(9);
        // Simulación de búsqueda en YouTube y reproducción
        return `Reproduciendo ${cancion} en YouTube`;
    } else if (text.startsWith('busca ') || text.startsWith('buscame ')) {
        const busqueda = text.substring(text.startsWith('busca ') ? 6 : 8);
        // Simulación de búsqueda en Google
        return `Buscando ${busqueda} en Google`;
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
