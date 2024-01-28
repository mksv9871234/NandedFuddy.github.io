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
                cell4.innerHTML = dataArray[i].details;
                cell5.innerHTML =  '<button onclick="addToFavorites(' + i + ',this)">Add</button>';
              
            }
        }

        updateFoodList();
        

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





var map;
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
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    };

    // Create the map
    map = new google.maps.Map(document.getElementById('map-container'), mapOptions);

    // Now that the map is initialized, you can execute the next code here
    console.log('Map has been fully loaded. Next code can be executed.');
}

  function loadGoogleMapsScript() {
    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyASLL0Pb7vHCFPh5G3YijSowHw7Rw0pleI&libraries=places&callback=initMap";
    script.async = true;
    document.head.appendChild(script);
  }
  // Call the function to load the Google Maps API
  loadGoogleMapsScript();

function toggleFullScreen() {
    var mapContainer = document.getElementById('map-container');

    // Toggle full screen
    if (!isFullScreen) {
        mapContainer.style.height = '100vh';
        mapContainer.style.width = '100%';
    } else {
        mapContainer.style.height = '400px';
        mapContainer.style.width = '100%';
    }

    // Resize the map to fit the new container size
    google.maps.event.trigger(map, 'resize');
    isFullScreen = !isFullScreen;
}

// Initialize the map once the page has loaded
document.addEventListener('DOMContentLoaded', initMap);
