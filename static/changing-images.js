// Array of image paths
const images = [
    "/static/images/jicho1.png",
    "/static/images/jicho2.png",
    "/static/images/jicho3.png",
    "/static/images/jicho4.png",
    "/static/images/jicho5.png"
];

// Index to track the current image
let currentIndex = 0;

// Function to change the image
function changeImage() {
    const imgElement = document.getElementById("changing-image");
    currentIndex = (currentIndex + 1) % images.length; // Cycle through images
    imgElement.src = images[currentIndex];
}

// Change image every 5 seconds
setInterval(changeImage, 5000);