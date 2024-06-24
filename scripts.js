function sendMessage() {
    var input = document.getElementById('input').value.toLowerCase();
    if (input.includes('reproduce')) {
        var song = encodeURIComponent('nombre de la canción'); // Reemplaza 'nombre de la canción' con el nombre de la canción que quieras reproducir
        var url = 'https://www.youtube.com/results?search_query=' + song;
        window.open(url, '_blank');
    } else {
        alert('No comprendo. Intenta de nuevo.');
    }
}
