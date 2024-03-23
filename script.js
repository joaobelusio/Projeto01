document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([0, 0], 13); // Inicializa o mapa com uma posição genérica

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var customIcon = L.icon({
        iconUrl: 'images/pinIconKid.png',
        iconSize: [47, 59], // Tamanho do ícone
        iconAnchor: [22, 94], // Ponto do ícone que corresponderá à localização do marcador
        popupAnchor: [-3, -76] // Ponto a partir do qual o popup deve abrir em relação ao iconAnchor
    });

    var userMarker = L.marker([0, 0], {icon: customIcon}).addTo(map); // Cria o marcador com uma posição inicial genérica

    if ("geolocation" in navigator) {
        navigator.geolocation.watchPosition(function(position) {
            var newPos = [position.coords.latitude, position.coords.longitude];
            map.setView(newPos, map.getZoom()); // Atualiza o centro do mapa para a nova posição
            userMarker.setLatLng(newPos); // Atualiza a posição do marcador para a nova posição
        }, function(error) {
            console.log(error);
            alert('Não foi possível obter a localização.');
        }, {
            enableHighAccuracy: true,
            maximumAge: 10000,
            timeout: 5000
        });
    } else {
        alert("Geolocalização não é suportada pelo seu navegador.");
    }
});
