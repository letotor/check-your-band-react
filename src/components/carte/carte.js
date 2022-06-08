
    var map = L.map('map').setView([51.505, -0.09], 13); //coordoné GPS
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 15, //zoom carte
        attribution: '© OpenStreetMap'
    }).addTo(map);//tuile

    var marker = L.marker([51.5, -0.09]).addTo(map); //marqueurs

    var circle = L.circle([51.508, -0.11], { //cercle
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);

    var polygon = L.polygon([ //polygon
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ]).addTo(map);

    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    circle.bindPopup("I am a circle.");
    polygon.bindPopup("I am a polygon.");
    var popup = L.popup();// pop up sur marquers
    
    function onMapClick(e) { //clique sur la map
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }
    map.on('click', onMapClick);
    
