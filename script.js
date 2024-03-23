document.addEventListener('DOMContentLoaded', function () {
    if ("geolocation" in navigator) {
        navigator.geolocation.watchPosition(function(position) {
            var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            var customIcon = L.icon({
                iconUrl: 'images/pinIconKid.png',
                iconSize: [46, 57], // Tamanho do ícone
                iconAnchor: [22, 94], // Ponto do ícone que corresponderá à localização do marcador
                popupAnchor: [-3, -76] // Ponto a partir do qual o popup deve abrir em relação ao iconAnchor
            });

            L.marker([position.coords.latitude, position.coords.longitude], {icon: customIcon}).addTo(map);
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