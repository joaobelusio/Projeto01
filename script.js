if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);

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