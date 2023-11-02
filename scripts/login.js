/* **************************************************** */
/* ***************** FORMULARIO LOGIN ***************** */
/* **************************************************** */

document.addEventListener("DOMContentLoaded", function () {

    /* Creo las constantes en js para cada variable del formulario */
    const jsUserName = document.getElementById("userName")
    const jsUserSurname = document.getElementById("userSurname")
    const jsUserPhone = document.getElementById("userPhone")
    const jsUserEmail = document.getElementById("userEmail")
    const jsUserPass = document.getElementById("userPass")
    const jsTycCheck = document.getElementById("tycFormCheck")
    const jsLoginButton = document.getElementById("loginButton")

    /* Chequeo si completé todos los datos para habilitar el botón */
    /*     function checkInputs() {
            if (jsUserName.value.trim() !== "" && jsUserSurname.value.trim() !== "" && jsUserPhone.value.trim() !== "" && jsUserEmail.value.trim() !== "" && jsUserPass.value.trim() !== "" && jsTycCheck.checked) {
                jsLoginButton.removeAttribute("disabled")
            } else {
                jsLoginButton.setAttribute("disabled", "true")
            }
        } */

    /* Uso el listener para ir avisando qué datos voy completando */
    /*     jsUserName.addEventListener("input", checkInputs)
        jsUserSurname.addEventListener("input", checkInputs)
        jsUserPhone.addEventListener("input", checkInputs)
        jsUserEmail.addEventListener("input", checkInputs)
        jsUserPass.addEventListener("input", checkInputs)
        jsTycCheck.addEventListener("click", checkInputs) */

    /* Uso el listener para decirle al botón a qué página quiero que me redirija */
    /*     jsLoginButton.addEventListener("click", function () {
            window.location.href = "compra-entradas.html"
        }) */

    /* Uso el listener para decirle al botón a qué página quiero que me redirija */
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        /* Previene el comportamiento por defecto de envío del formulario */
        event.preventDefault()

        /* Después de la validación, redirige a la página deseada */
        window.location.href = "compra-entradas.html"
    })

})