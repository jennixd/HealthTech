// Initialize Leaflet map
var map = L.map('map').setView([1.3521, 103.8198], 11); // Set initial map view to Singapore

// Add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add COVID-19 hotspot markers
var hotspots = [
    { name: 'Hotspot 1', lat: 1.3456, lng: 103.8575, cases: 10 },
    { name: 'Hotspot 2', lat: 1.3095, lng: 103.7759, cases: 15 },
    // Add more hotspot data as needed
];

hotspots.forEach(function(hotspot) {
    var popupContent = '<strong>' + hotspot.name + '</strong><br>' +
                       'Cases: ' + hotspot.cases;
    
    L.marker([hotspot.lat, hotspot.lng]).addTo(map)
        .bindPopup(popupContent);
});