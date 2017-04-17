let newState = function() {

  let locations = [];
  let lines = [];
  let markers = [];

  let addLocation = function(latlng) {
    if(locations.length < 2) {
      locations.push(latlng);
    } else {
      locations.shift();
      locations.push(latlng);
    }
  };

  let addMarker = function(marker) {
    markers.push(marker);
    if(markers.length>2) {
      markers[markers.length-3].setMap(null);
      if(lines.length>0) {
          lines[lines.length-1].setMap(null);
      }
    }
  };

  let addLine = function(path) {
    lines.push(path);
    lines[lines.length-1].setMap(map);
  };

  let getLocations = function() {
    return locations;
  };

  return {
    addLocation: addLocation,
    addMarker: addMarker,
    addLine: addLine,
    getLocations: getLocations
  }
};
