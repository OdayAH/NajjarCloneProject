let currentIndex = 0;
const images = document.querySelectorAll('.slider img');

function showNextImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 4000); // Change image every 3 seconds