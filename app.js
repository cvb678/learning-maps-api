'use strict'

let state = newState();
let utils = newUtils();
let handlers = newHandlers();
let myGeocoder;
let map;

//FOR CONTROL BUTTON
function CenterControl(controlDiv, map) {

 // Set CSS for the control border.
   let controlUI = document.createElement('div');
   controlUI.style.backgroundColor = '#fff';
   controlUI.style.border = '2px solid #fff';
   controlUI.style.borderRadius = '3px';
   controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
   controlUI.style.cursor = 'pointer';
   controlUI.style.marginBottom = '22px';
   controlUI.style.textAlign = 'center';
   controlUI.title = 'Click to calculate distance';
   controlDiv.appendChild(controlUI);

   // Set CSS for the control interior.
   let controlText = document.createElement('div');
   controlText.style.color = 'rgb(25,25,25)';
   controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
   controlText.style.fontSize = '16px';
   controlText.style.lineHeight = '38px';
   controlText.style.paddingLeft = '5px';
   controlText.style.paddingRight = '5px';
   controlText.innerHTML = 'Calculate';
   controlUI.appendChild(controlText);

   controlUI.addEventListener('click', handlers.getDistance);
}

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    disableDefaultUI: false,
    draggable: false,
    maxZoom: 15,
    minZoom: 15,
    center: {lat: 50.0646501, lng: 19.9449799}
  });

  myGeocoder = new google.maps.Geocoder;

  map.addListener('click', function(event) {
    handlers.getAddress(myGeocoder, map, event.latLng);
  });

  let centerControlDiv = document.createElement('div');
  let centerControl = new CenterControl(centerControlDiv, map);

  centerControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

}
