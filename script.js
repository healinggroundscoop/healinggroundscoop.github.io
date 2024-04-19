// Image Carousel
let slideIndex = 0;
let slides = document.getElementsByClassName("carousel-slide")[0].getElementsByTagName("img");
let dots = document.getElementsByClassName("dot");
let slideInterval;

function initCarousel() {
  showSlides(slideIndex); // Initialize the carousel
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 6000); // Change image every 6 seconds
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("carousel-slide")[0].getElementsByTagName("img");
    let dots = document.getElementsByClassName("dot");
  
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to the first slide
    }
  
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
  
    slides[slideIndex-1].style.display = "block"; // Show the current slide
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex); // Start with the first slide
});

// Touch events for swipe functionality
let touchStartPos = 0;
let touchEndPos = 0;

document.querySelector('.carousel-slide').addEventListener('touchstart', e => {
  touchStartPos = e.touches[0].clientX;
});

document.querySelector('.carousel-slide').addEventListener('touchmove', e => {
  touchEndPos = e.touches[0].clientX;
});

document.querySelector('.carousel-slide').addEventListener('touchend', () => {
  if (touchStartPos - touchEndPos > 50) {
    // swipe left
    plusSlides(1);
  } else if (touchStartPos - touchEndPos < -50) {
    // swipe right
    plusSlides(-1);
  }
});



// Improved navbar toggle functionality
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');

    if (toggleButton && nav) {
        toggleButton.addEventListener('click', function() {
            nav.classList.toggle('show');
            // Toggle for 'X' icon transformation
            toggleButton.classList.toggle('open');

            // Adjust position based on nav visibility
            if (nav.classList.contains('show')) {
                toggleButton.style.position = 'fixed';
            } else {
                toggleButton.style.position = 'absolute';
            }
        });
    } else {
        console.log('Navbar elements not found!');
    }
});



// For the FAQ page
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqAnswer = button.nextElementSibling;
        faqAnswer.style.display = faqAnswer.style.display === 'block' ? 'none' : 'block';
    });
});
