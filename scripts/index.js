/* **************************************************** */
/* *********************** INDEX ********************** */
/* **************************************************** */

/* CIERRO EL NAVBAR-TOGGLER UNA VEZ ELEGIDA UNA OPCIÓN DEL NAVBAR */

document.addEventListener('DOMContentLoaded', function () {
    // Obtengo una referencia al botón del Navbar que activa la funcionalidad de colapso
    let navbarToggler = document.querySelector('.navbar-toggler')

    // Obtengo una referencia a la barra de navegación (Navbar)
    let navbarCollapse = document.querySelector('.navbar-collapse')

    // Obtengo una lista de todos los elementos de enlace (links) dentro del Navbar
    let navLinks = document.querySelectorAll('.nav-link')

    // Añado un event listener a cada enlace para cerrar el Navbar después de hacer clic
    navLinks.forEach(function (navLink) {
        navLink.addEventListener('click', function () {
            // Verifica si el Navbar está colapsado o no
            if (!navbarCollapse.classList.contains('show')) {
                return; // Si ya está colapsado, no hagas nada
            }

            // Si el Navbar está expandido, haz clic en el botón de colapso
            navbarToggler.click()
        });
    });
});