function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 40.730610, lng: -73.935242},
    zoom: 13,
  });
  const request = {
    radius: "500",
    query: "coffee"
  };

  const input = document.getElementById('searchTextField');
  const autocomplete = new google.maps.places.Autocomplete(input);
};


  function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}

//search box autocomplete
const input = document.querySelector(".location");


goButton = document.querySelector(".go");

goButton.addEventListener("click",function() {
  initMap();
});
