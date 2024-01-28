
        var dataArray = [
            {image: "img/biryani.jpg", name: "Biryani",price:"200$", details: "Delicious pasta with creamy sauce." },
            {image: "img/rice.jpg", name: "Rice",price:"100$", details: "Healthy and flavorful grilled salmon." },
            {image: "img/nashta.jpg", name: "Nashta",price:"60$", details: "A pizza with a variety of vegetarian toppings." },
            {image: "img/piza.jpg", name: "Pizaa",price:"80$", details: "Decadent chocolate cake for dessert." },
            {image: "img/food.jpg", name: "khichdi",price:"70$", details: "Delicious pasta with creamy sauce." },
            {image: "img/idlidosa.jpg", name: "IdliDosa",price:"150$", details: "Healthy and flavorful grilled salmon." },
            {image: "img/food.jpg", name: "tari",price:"300$", details: "A pizza with a variety of vegetarian toppings." },
            {image: "img/rice2.jpg", name: "Rice",price:"250$", details: "Decadent chocolate cake for dessert." },
            {image: "img/vadapav.jpg", name: "Vadapav",price:"200$", details: "Delicious pasta with creamy sauce." },
            {image: "img/black tea.jpg", name: "Black Tee",price:"100$", details: "Healthy and flavorful grilled salmon." },
            {image: "img/coffee.jpg", name: "Coffee",price:"60$", details: "A pizza with a variety of vegetarian toppings." },
            {image: "img/smosa.jpg", name: "Samosa",price:"80$", details: "Decadent chocolate cake for dessert." },
            {image: "img/food.jpg", name: "Carbonara",price:"70$", details: "Delicious pasta with creamy sauce." },
            {image: "img/food.jpg", name: "B Salmon",price:"150$", details: "Healthy and flavorful grilled salmon." },
            {image: "img/food.jpg", name: "C Pizza",price:"300$", details: "A pizza with a variety of vegetarian toppings." },
            {image: "img/food.jpg", name: "D",price:"250$", details: "Decadent chocolate cake for dessert." }
          ];


          var favoritesList = [];
          // favorites list display function
          function Yourlist() {
            var table = document.getElementById("Yourlist");
        
            // Clear the existing rows
            table.innerHTML = "";
        
            // Loop through the favoritesList array and create rows
            for (var i = 0; i < favoritesList.length; i++) {
                var row = table.insertRow(i);
        
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
        
                cell1.innerHTML = '<img src="' + favoritesList[i].image + '" alt="Food Image" style="width: 80px; height: 80px;">';
                cell2.innerHTML = favoritesList[i].name;
                cell3.innerHTML = favoritesList[i].price;
                cell4.innerHTML = favoritesList[i].details;
            }
        }
        
              // Call the function to add rows when needed
    function addToFavorites(index, button) {
        var selectedItem = dataArray[index];

        // Toggle the button's background color
        button.id = (button.id === "selected-button") ? "" : "selected-button";
      
        // Add or remove the item from the favorites list based on the class
        if (button.id == "selected-button") {
          favoritesList.push(selectedItem);
          console.log("Added to favorites:", selectedItem);
        } else {
          favoritesList = favoritesList.filter(item => item !== selectedItem);
          console.log("Removed from favorites:", selectedItem);
        }
        Yourlist(); // Corrected function name
      }
