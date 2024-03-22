// Map initialization 
    var map = L.map('map').setView([12.2278138, 79.4266086], 8);

    //osm layer
    var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    osm.addTo(map);





  // Add controller on the left
  L.control.scale({ position: 'bottomleft' }).addTo(map);


    var cityMarker = L.marker([12.2278138, 79.4266086]).addTo(map);
cityMarker.bindPopup("Hello, my city❤!").openPopup();

var collegeMarker = L.marker([12.2131253, 79.0709192]).addTo(map);
collegeMarker.bindPopup("Hello, my college😊").openPopup();
var circle = L.circle([12.2131253, 79.0709192], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 50
}).addTo(map);



    


    var marker;

    var geocoder = L.Control.geocoder({
    defaultMarkGeocode: false,
    placeholder: 'Search for a place...',
    errorMessage: 'Nothing found.',
    showResultIcons: true,
    collapsed: true
  }).on('markgeocode', function(e) {
    if (marker) {
      map.removeLayer(marker);
    }
      else {
          alert('can not marker ');
      }
    marker = L.marker(e.geocode.center).addTo(map);
    map.setView(e.geocode.center, 13);
  }).addTo(map);

// Add locate control to the right-top corner of the map
L.control.locate({ position: 'topright' }).addTo(map);

    // Function to show the toast with custom body content and color
    function showToast(content, color) {
    $('.toast-body').html(content);
    $('.toast').removeClass('toast-red toast-orange toast-blue').addClass('toast-' + color);
    $('.toast').toast('show');
  }
 
    function Alertsound() {
      // Play sound
      var audio = new Audio('music/emergency-alarm-with-reverb-29431.mp3'); // Replace 'alert_sound.mp3' with the path to your sound file
      audio.play();

      // Vibrate
      window.navigator.vibrate([200, 20000, 200]); // Vibrate for 200ms, pause for 20000ms, vibrate for 200ms
    }
    

    // Function to calculate distance between two points (latitude and longitude)
    function calculateDistance(lat1, long1, lat2, long2) {
      const distance = Math.acos(
        Math.sin(lat1 * Math.PI) * Math.sin(lat2 * Math.PI) +
        Math.cos(lat1 * Math.PI) * Math.cos(lat2 * Math.PI) * Math.cos(Math.abs(long1 - long2) * Math.PI)
      );

      // Return the distance in meters
      return distance * 6370981.162; // Earth's radius in meters
    }

    function handleGeolocation(position) {
  const userLat = position.coords.latitude;
  const userLong = position.coords.longitude;
  const accuracy = position.coords.accuracy; // Adding accuracy information
  window.confirm(`Latitude: ${userLat}, Longitude: ${userLong}, Accuracy: ${accuracy} meters`);

  // Coordinates of the target location (hard-coded for demonstration)
  const targetLat = 12.2278138; //12.2278138, 79.4266086 home Replace with actual latitude
  const targetLong = 79.4266086; //12.2131253, 79.0709192college Replace with actual longitude
  let markerUser = new L.marker([targetLat, targetLong]).addTo(map);
        markerUser.bindPopup("Marked Location");

  // Check if the user is within the 30-meter radius
  const distanceToTarget = calculateDistance(userLat, userLong, targetLat, targetLong);
  if (distanceToTarget >= 1000) {
    Alertsound();
    showToast(`You are within 30 meters of the target location! Distance: ${distanceToTarget} meters`, 'red');
    //alert(distanceToTarget);
    }
        else if(distanceToTarget <= 5000) {
    Alertsound();
    showToast(`You are within 50 meters of the target location! Distance: ${distanceToTarget} meters`, 'red');
    //alert(distanceToTarget);
     }
        
        else {
    Alertsound();
    showToast(`You are outside the 30-meter radius. Distance:  meters`, 'orange');
    //alert(distanceToTarget);
  }
}

    function handleGeolocationError(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          alert("User did not share geolocation data.");
          break;
        case error.POSITION_UNAVAILABLE:
          alert("Could not detect current position.");
          break;
        case error.TIMEOUT:
          alert("Retrieving position timed out.");
          break;
        default:
          alert("Unknown error.");
          break;
      }
    }

    // Request user's geolocation
    navigator.geolocation.getCurrentPosition(handleGeolocation, handleGeolocationError);
 