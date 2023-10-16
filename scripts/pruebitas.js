/* Crear el Array en JavaScript: */
let opciones = ["Opción 1", "Opción 2", "Opción 3", "Opción 4"];

/* Llenar el Dropdown con JavaScript: */
let dropdown = document.getElementById("myDropdown");

opciones.forEach(function (opcion) {
    let elemento = document.createElement("a");
    elemento.classList.add("dropdown-item");
    elemento.textContent = opcion;
    elemento.href = "#"; // Puedes asignar un enlace aquí si es necesario
    elemento.addEventListener("click", function () {
        valorSeleccionado = opcion;
        console.log("Valor seleccionado:", valorSeleccionado);
        // Aquí puedes realizar acciones con el valor seleccionado
    });
    dropdown.appendChild(elemento);
});

/* Prueba del Form */
document.addEventListener("DOMContentLoaded", function () {
    const jsUserEmail = document.getElementById("userEmail");
    const jsUserPass = document.getElementById("userPass");
    const jsTycCheck = document.getElementById("tycFormCheck");
    const jsRegistrationButton = document.getElementById("registrationButton");

    function checkInputs() {

        console.log(jsUserEmail.value)
        console.log(jsUserPass.value)

        if (jsUserEmail.value.trim() !== "" && jsUserPass.value.trim() !== "" && jsTycCheck.checked) {
            console.log("Va por TRUE");
            jsRegistrationButton.removeAttribute("disabled");
        } else {
            console.log("Va por FALSE");
            jsRegistrationButton.setAttribute("disabled", "true");
        }
    }

    jsUserEmail.addEventListener("input", checkInputs);
    jsUserPass.addEventListener("input", checkInputs);
    jsTycCheck.addEventListener('click', checkInputs);
});