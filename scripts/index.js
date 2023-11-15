/* **************************************************** */
/* *********************** INDEX ********************** */
/* **************************************************** */

/* CIERRO EL NAVBAR-TOGGLER UNA VEZ ELEGIDA UNA OPCIÓN DEL NAVBAR */

document.addEventListener("DOMContentLoaded", function () {
    let navbarToggler = document.querySelector(".navbar-toggler")
    let navbarCollapse = document.querySelector(".navbar-collapse")
    let navLinks = document.querySelectorAll(".nav-link")
    let merchButton = document.querySelector("#merchButton")
    let entradasButton = document.querySelectorAll(".entradasButton")

    let loginToken = ""

    navLinks.forEach(function (navLink) {
        navLink.addEventListener("click", function () {
            if (!navbarCollapse.classList.contains("show")) {
                /* Si ya está colapsado, no hagas nada */
                return
            }

            /* Si el Navbar está expandido, haz clic en el botón de colapso */
            navbarToggler.click()
        })
    })

    entradasButton.forEach(function (entradaButton) {
        entradaButton.addEventListener("click", function () {

            loginToken = "entradas"

            /* Guardar en localStorage */
            localStorage.setItem("loginToken", JSON.stringify(loginToken))
        })
    })

    merchButton.addEventListener("click", function () {

        loginToken = "merchandising"

        /* Guardar en localStorage */
        localStorage.setItem("loginToken", JSON.stringify(loginToken))
    })
})