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



