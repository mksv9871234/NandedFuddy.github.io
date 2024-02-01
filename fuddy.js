document.addEventListener("DOMContentLoaded", function() {

  // Call the function to add rows when needed
  function updateFoodList() {
    var tbody = document.getElementById("menuFoodlist");
    
    // Loop through the array and create rows
    for (var i = tbody.children.length; i < dataArray.length; i++) {
        var row = tbody.insertRow(i);
        
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
 
        cell1.innerHTML = '<img src="' + dataArray[i].image + '" alt="Food Image" style="width: 80px; height: 80px;">';
        cell2.innerHTML = dataArray[i].name;
        cell3.innerHTML = dataArray[i].price;
        cell4.innerHTML = dataArray[i].location;
        cell5.innerHTML =  '<button onclick="addToFavorites(' + i + ',this)">Add</button>';
        
        row.addEventListener("click",function(){
            showmap();
          
        })
    }
}

updateFoodList();
function showmap(){
    map = document.getElementById("mapbox");
    map.style.display = 'block'
    map.style.position = 'fixed'

}

//   function openMap(location) {
//     const mapElement = document.getElementById("map");

//     if (!mapElement) {
//       console.error("Element with ID 'map' not found.");
//       return;
//     }

//     const map = new google.maps.Map(mapElement, {
//       center: location,
//       zoom: 12
//     });

//     const marker = new google.maps.Marker({
//       position: location,
//       map: map,
//       title: "Food Location"
//     });
//   }

// Call the function to initially load the data

// Optionally, you can set up a timer or other mechanisms
// to periodically update the data throughout the day
// For example, update the data every hour:
// setInterval(updateFoodList, 3600000);

// hero button efect infinite
//  function applyBoxShadow() {

//   shadwoicon = document.getElementById("forshadow");

//  shadwoicon.style.boxShadow = '0 0 30px white, 0 0 50px white';

//   setTimeout(function() {

//       shadwoicon.style.boxShadow = 'none';

//       setTimeout(applyBoxShadow, 4000);
//   }, 4000);
// }
// applyBoxShadow();
// scroll animation

window.addEventListener('scroll', function () {
var header = document.getElementById('header');
var scrollPosition = window.scrollY;

if (scrollPosition > 400) {
header.classList.add('scrolled');
} else {
header.classList.remove('scrolled');
}
});

})


function humbclick(){
dropcontent = document.getElementById("dropcontent")
if( dropcontent.style.display == 'none'){
dropcontent.style.display = 'flex'
dropcontent.style.flexDirection = 'column'
dropcontent.style.justifyContent = 'center'
dropcontent.classList.toggle('show-menu');

}else{
dropcontent.style.display = 'none'

}
}

function closemap(){
    map = document.getElementById("mapbox");
    map.style.display = 'none'
    close = document.getElementById("close");
}

var map;
var directionsService;
var directionsRenderer;
var isFullScreen = false;

// Create a promise that resolves when the Google Maps API has loaded
function loadGoogleMaps() {
return new Promise(resolve => {
window.initMap = function () {
    resolve();
};
});
}

// Initialize the map
async function initMap() {
await loadGoogleMaps();

// Initial map configuration
var mapOptions = {
center: {lat: 19.159500, lng:77.310898},
zoom: 8
};

// Create the map
map = new google.maps.Map(document.getElementById('map-container'), mapOptions);

// Now that the map is initialized, you can execute the next code here
console.log('Map has been fully loaded. Next code can be executed.');

   // Initialize directions service and renderer
   directionsService = new google.maps.DirectionsService();
   directionsRenderer = new google.maps.DirectionsRenderer();
   directionsRenderer.setMap(map);

    // Get user's location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            // Set map center to user's location
            map.setCenter(userLocation);

            // Calculate and display directions
            calculateAndDisplayRoute(userLocation);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
} 

function calculateAndDisplayRoute(userLocation) {
    // Snap user's location to the nearest road using the Roads API
    google.maps.geometry.encoding.decodePath(userLocation, function (decodedPath) {
        var snappedLocation = decodedPath[0];

        // Specify the destination location
        var destination = { lat: 18.520760, lng:73.855408 };

        // Request directions from snapped user's location to the destination
        directionsService.route({
            origin: snappedLocation,
            destination: destination,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                // Display the route on the map
                directionsRenderer.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    });
}



function loadGoogleMapsScript() {
const script = document.createElement("script");
script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBImvT743RvFKMlBojcnUHcsHjIc4paP0E&libraries=places&callback=initMap";
script.async = true;
document.head.appendChild(script);
}
// Call the function to load the Google Maps API
loadGoogleMapsScript();



function mapRoadsapi() {
    // Replace YOUR_API_KEY with your actual API key
    var apiKey = 'AIzaSyBImvT743RvFKMlBojcnUHcsHjIc4paP0E';

    // Create the first script element for Maps JavaScript API
    var script1 = document.createElement('script');
    script1.src = 'https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&libraries=places';
    script1.defer = true;

    // Create the second script element for Geometry Library
    var script2 = document.createElement('script');
    script2.src = 'https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&libraries=geometry';
    script2.defer = true;

    // Append both script elements to the document head
    document.head.appendChild(script1);
    document.head.appendChild(script2);

    // Call the initMap function when both scripts are loaded
    script2.onload = function () {
        initMap();
    };
}
  // Call the initMap function when the page loads
  window.onload = function () {
    initMap();
};
