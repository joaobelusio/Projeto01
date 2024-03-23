if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

        var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
        marker.bindPopup("Você está aqui").openPopup();
    }, function() {
        alert("Não foi possível acessar sua localização.");
    });
} else {
    alert("Geolocalização não é suportada pelo seu navegador.");
}

if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(event) {
        var alpha = event.alpha;
        // Atualize aqui a rotação do marcador baseada em `alpha`
        // Esta é a direção (em graus) na qual o dispositivo está apontando.
    }, false);
}

var customIcon = L.icon({
    iconUrl: 'caminho_para_seu_icone.png',
    iconSize: [38, 95], // tamanho do ícone
    iconAnchor: [22, 94], // ponto do ícone que corresponderá à localização do marcador
    popupAnchor: [-3, -76] // ponto a partir do qual o popup deve abrir em relação ao iconAnchor
});

L.marker([51.5, -0.09], {icon: customIcon}).addTo(map);