
/* Crear el Array en JavaScript: */
let opciones = ["Opción 1", "Opción 2", "Opción 3", "Opción 4"];

/* Llenar el Dropdown con JavaScript: */
let dropdown = document.getElementById('myDropdown');

opciones.forEach(function (opcion) {
    let elemento = document.createElement("a");
    elemento.classList.add("dropdown-item");
    elemento.textContent = opcion;
    elemento.href = "#"; // Puedes asignar un enlace aquí si es necesario
    elemento.addEventListener('click', function () {
        valorSeleccionado = opcion;
        console.log("Valor seleccionado:", valorSeleccionado);
        // Aquí puedes realizar acciones con el valor seleccionado
    });
    dropdown.appendChild(elemento);
});

