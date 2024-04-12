let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slidesContainer = document.getElementsByClassName("carousel-slide")[0];
    if (!slidesContainer) {
        console.log("No slides container found. Exiting function.");
        return; // Exit the function if no container is found
    }
    
    let slides = slidesContainer.getElementsByTagName("img");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

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
