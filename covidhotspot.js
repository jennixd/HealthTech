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

async function fetchData() {
  const url = 'https://covid-193.p.rapidapi.com/statistics?country=Singapore';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '65d77adcd3msh7deac1c0b3521f4p1a78c2jsn6f157e5d05a3',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json(); // Parse response as JSON
    //console.log(result); // Log the entire JSON response

    // Extract specific data
    const country = result.response[0].country;
    const population = result.response[0].population;
    const totalCases = result.response[0].cases.total;
    const deaths = result.response[0].deaths.total;
    const tests = result.response[0].tests.total;
    const day = result.response[0].day;

    // Display the result in HTML
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `
      <p>Country: ${country}</p>
      <p>Population: ${population}</p>
      <p>Total cases: ${totalCases}</p>
      <p>Total deaths: ${deaths}</p>
      <p>Total tests: ${tests}</p>
      <p>Day: ${day}</p>
    `;
  } catch (error) {
    console.error(error);
  }
}

// Call the async function
fetchData();
