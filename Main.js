// Variables.
let images = ["images/main_page/Porsche_911.png", "images/main_page/Toyota_hilux.jpg", "images/main_page/BMW_X5.jpg"];
let numberOfImages = images.length;
let i = 0;

// Main function that cycles through the images.
// Each images has 3 seconds before being changed.
setInterval(function() {

    let img = document.getElementById("Images");
    
    let src = images[i];

    img.src = src;

    i++;

    if (i == numberOfImages) {

        i = 0;

    }

}, 3000);