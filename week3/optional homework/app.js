const thumbnailContainer = document.querySelector('.thumbnails');
const largeImage = document.getElementById('largeImage');
const playPauseButton = document.getElementById('playPause');

// Array of image file names in your folder
const imageFiles = [
    'cocona.png',
    'maya.jpeg',
    'harvey.png',
    'jurin.jpeg',
];

let currentIndex = 0;
let intervalId = null;
let isPlaying = false;

// Create thumbnail images
imageFiles.forEach((imageFile, index) => {
    const thumbnail = document.createElement('img');
    thumbnail.classList.add('thumbnail');
    thumbnail.src = imageFile;
    thumbnail.addEventListener('click', () => showImage(index));
    thumbnailContainer.appendChild(thumbnail);
});

// Function to display the selected image
function showImage(index) {
    currentIndex = index;
    largeImage.src = imageFiles[index];
}

// Function to start or pause the automatic slideshow
function togglePlayPause() {
    if (isPlaying) {
        clearInterval(intervalId);
        playPauseButton.textContent = 'Play';
    } else {
        intervalId = setInterval(showNextImage, 3000); // Change image every 3 seconds
        playPauseButton.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
}

// Function to show the next image in the slideshow
function showNextImage() {
    currentIndex = (currentIndex + 1) % imageFiles.length;
    showImage(currentIndex);
}

// Initial image display and play/pause button setup
showImage(currentIndex);
playPauseButton.addEventListener('click', togglePlayPause);
togglePlayPause(); // Start the slideshow initially
