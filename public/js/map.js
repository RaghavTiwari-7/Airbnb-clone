mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: listing.geometry.coordinates, // starting position [lng, lat]
    zoom: 10 // starting zoom
});


 
// Should output something like: [-74.5, 40] ([lng, lat])
const marker1 = new mapboxgl.Marker({ color: "red"})
.setLngLat(listing.geometry.coordinates)// listing geometry coordintaes
.setPopup(popup = new mapboxgl.Popup({offset: 25})
.setHTML(
  `<h4>${listing.location}</h4><p>Exact Location will be provided after booking</p>`
))
.addTo(map);     

// map.on('load', () => {
//   const el = document.createElement('div');
//   el.style.backgroundImage = 'url(https://docs.mapbox.com/mapbox-gl-js/assets/cat.png)';
//   el.style.width = '50px';
//   el.style.height = '50px';
//   el.style.backgroundSize = 'cover';

//   new mapboxgl.Marker({ element: el })
//     .setLngLat(listing.geometry.coordinates) // Your coordinates
//     .addTo(map);
// });