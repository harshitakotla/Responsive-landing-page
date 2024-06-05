window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(90deg, #162d50, #1b3d70)'; // Darker gradient on scroll
    } else {
        navbar.style.background = 'linear-gradient(90deg, #1e3c72, #2a5298)'; // Original gradient
    }
});
