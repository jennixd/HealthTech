const vaccinationCenters = [
    { name: '4300 Ang Mo Kio Ave 5 S(569869)', lat: 1.375020, lng: 103.857370 },
    { name: '8 Lower Delta Road S(169198)', lat: 1.2889314, lng: 103.8252506},
    { name: '450 Jurong East Street 21 S(609604)', lat: 1.352048, lng: 103.726985},
    { name: '931 Jurong West Street 42 S(649370)', lat: 1.352048, lng: 103.726985},
    { name: '20 Jalan Damai S(419612)', lat: 1.3346001475910847, lng: 103.91056895256042},
    { name: '10 Pasir Ris Drive 10 S(519385)', lat: 1.379971041297775, lng: 103.93909479493296},
    { name: '19A Sengkang Square S(546911)', lat: 1.3915101, lng: 103.8953638},
    { name: '3A Woodlands Square S(737735)', lat: 28.0495356, lng: 103.8252506},
];

function initMap() {
    const map = L.map('map').setView([1.3521, 103.8198], 11); // Centered around Singapore

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    vaccinationCenters.forEach(center => {
        L.marker([center.lat, center.lng]).addTo(map)
            .bindPopup(`<b>${center.name}</b><br>Vaccination Center`);
    });
}

window.onload = initMap;
