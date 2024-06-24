function processText(text) {
    if (text.startsWith('reproduce ')) {
        const cancion = text.substring(10);
        const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(cancion)}`;
        window.open(url, '_blank');
        return `Reproduciendo ${cancion} en YouTube`;
    } else if (text.startsWith('busca ') || text.startsWith('buscame ')) {
        const busqueda = text.substring(text.startsWith('busca ') ? 6 : 8);
        const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(busqueda)}&sp=EgIQAw%253D%253D`;
        window.open(url, '_blank');
        return `Buscando ${busqueda} en YouTube`;
    } else {
        return "Lo siento, no pude procesar tu solicitud.";
    }
}
