// JavaScript to add some interactivity can be added here
document.addEventListener('DOMContentLoaded', function() {
    // Example: Smooth scroll for navigation
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
