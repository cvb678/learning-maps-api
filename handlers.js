'use strict'

let newHandlers = function() {

  let getDistance = function() {
    let locations = state.getLocations();

    if(locations.length === 2) {
       let newPath = new google.maps.Polyline({
         path: locations,
         geodesic: true,
         strokeColor: '#FF0000',
         strokeOpacity: 1.0,
         strokeWeight: 2
       });

       state.addLine(newPath);
       let orig = locations[0];
       let dest = locations[1];
       let distance = utils.measureDist(orig.lat(), orig.lng(), dest.lat(), dest.lng());
       alert("Distance between points is: " + distance + " meters");
    }
  };

  function getAddress(geocoder, map, latlng) {
    geocoder.geocode({'location': latlng}, function(results, status) {
      if (status === 'OK') {
        if (results[1]) {
          utils.placeMarker(latlng, map, results[1].formatted_address);
        } else {
          return "Couldn't find the address";
        }
      } else {
        return "Couldn't find the address";
      }
    });
  }
  return {
    getDistance: getDistance,
    getAddress: getAddress
  }

}
