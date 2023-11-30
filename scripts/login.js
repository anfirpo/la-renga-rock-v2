/* **************************************************** */
/* ***************** FORMULARIO LOGIN ***************** */
/* **************************************************** */

document.addEventListener("DOMContentLoaded", function () {

    let loginToken = ""

    if (localStorage.getItem("loginToken")) {
        loginToken = JSON.parse(localStorage.getItem("loginToken"))
    } else { }

    /* Uso el listener para decirle al botón a qué página quiero que me redirija */
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        /* Previene el comportamiento por defecto de envío del formulario */
        event.preventDefault()

        if (loginToken == "entradas") {
            /* Después de la validación, redirige a la página deseada */
            window.location.href = "compra-entradas.html"
        } else if (loginToken == "merchandising") {
            /* Después de la validación, redirige a la página deseada */
            window.location.href = "compra-merchandising.html"
        } else {
            console.log("Surgió un error poco común")
            window.location.href = "../index.html"
        }
    })

})