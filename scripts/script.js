// Change navbar background color on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-dark');
        navbar.classList.remove('bg-transparent'); // Use if you start with transparent
    } else {
        navbar.classList.remove('bg-dark');
    }
});

console.log("ElectroVolt script loaded successfully!");