'use strict'

let newUtils = function() {
  
  let placeMarker = function(latlng, map, address) {
    let marker = new google.maps.Marker({
      position: latlng,
      map: map
    });

    let infowindow = new google.maps.InfoWindow({
      content: address
    });

    marker.addListener('mouseover', function() {
      infowindow.open(map, marker);
    });

    state.addMarker(marker);
    state.addLocation(latlng);
  };

  let measureDist = function(lat1, lon1, lat2, lon2) {
    let R = 6378.137; // Radius of earth in KM
    let dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
    let dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
    let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    let d = R * c;
    return Math.round(d*1000); // meters
  };

  return {
    placeMarker: placeMarker,
    measureDist: measureDist
  }

};
