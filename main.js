const input = document.getElementById('searchTextField');
const autocomplete = new google.maps.places.Autocomplete(input);


function initMap() {
  const center = {lat: 40.730610, lng: -73.935242};
  const map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 13,
  });
  const request = {
    location: center,
    radius: 50000,
    query: ['coffee']
  };

  const infoWindow = new google.maps.InfoWindow();

  const service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);

  service.getDetails({
    formatted_address: place.formatted_address
  })

  function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (let i = 0; i < results.length; i++) {
      let place = results[i];
      createMarker(results[i]);
    }
  }
}
  function createMarker(place) {
    const placeLocation = place.geometry.location;
    const marker = new google.maps.Marker({
      map: map,
      position: placeLocation
    });

    marker.addListener('click', function() {
      infoWindow.setContent(place.name + place.formatted_address);
      infoWindow.open(map,this);
    });
    return marker;
  }
};
//geolocation madness




//search box autocomplete

const goButton = document.querySelector(".go");

goButton.addEventListener("click",function() {
  initMap();
});
