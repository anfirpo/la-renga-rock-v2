/* **************************************************** */
/* ***************** FORMULARIO LOGIN ***************** */
/* **************************************************** */

document.addEventListener("DOMContentLoaded", function () {

    /* Uso el listener para decirle al botón a qué página quiero que me redirija */
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        /* Previene el comportamiento por defecto de envío del formulario */
        event.preventDefault()

        /* Después de la validación, redirige a la página deseada */
        window.location.href = "compra-entradas.html"
    })

})