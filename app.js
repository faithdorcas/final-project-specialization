// Data for high and low population density areas in Kenya
const highPopulationAreas = [
    { name: 'Nairobi', lat: -1.2864, lng: 36.8172 },
    { name: 'Mombasa', lat: -4.0435, lng: 39.6682 },
    { name: 'Kisumu', lat: -0.0917, lng: 34.7674 }
];

const lowPopulationAreas = [
    { name: 'Turkana', lat: 3.2394, lng: 35.6214 },
    { name: 'Samburu', lat: 1.3544, lng: 36.7399 },
    { name: 'Marsabit', lat: 2.3375, lng: 37.9764 }
];

// Function to show the map and plot the points
document.getElementById('showMapBtn').addEventListener('click', function() {
    var mapDiv = document.getElementById('map');
    mapDiv.style.display = 'block';  // Show the map

    // Create the map centered at Kenya
    var map = L.map('map').setView([1.2921, 36.8219], 6);  // Centered at Nairobi, Kenya

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add markers for high population areas
    highPopulationAreas.forEach(function(area) {
        var marker = L.marker([area.lat, area.lng], {icon: L.icon({iconUrl: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'})}).addTo(map);
        marker.bindPopup(`<b>High Population Area:</b> ${area.name}`);
    });

    // Add markers for low population areas
    lowPopulationAreas.forEach(function(area) {
        var marker = L.marker([area.lat, area.lng], {icon: L.icon({iconUrl: 'https://maps.google.com/mapfiles/ms/icons/orange-dot.png'})}).addTo(map);
        marker.bindPopup(`<b>Low Population Area:</b> ${area.name}`);
    });
});