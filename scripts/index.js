// Esto cerrará el Navbar después de hacer clic en un enlace
document.querySelectorAll('.navbar-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Cierra el Navbar
        document.querySelector('.navbar-collapse').classList.remove('show');
    });
});
