// Example: FAQ toggle
document.addEventListener('DOMContentLoaded', (event) => {
    const faqHeaders = document.querySelectorAll('.faq-header');

    faqHeaders.forEach(header => {
        header.addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('active');
        });
    });
});
