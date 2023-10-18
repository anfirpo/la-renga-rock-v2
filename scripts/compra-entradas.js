/* Crear los Arrays en JavaScript: */
let fechas = ["AGO 26 - BUENOS AIRES, ARGENTINA - ESTADIO TOMÁS ADOLFO DUCÓ", "SEP 12 - CÓRDOBA, ARGENTINA - ESTADIO MARIO ALBERTO KEMPES", "SEP 24 - MENDOZA, ARGENTINA - ESTADIO MALVINAS ARGENTINAS", "OCT 26 - TIERRA DEL FUEGO, ARGENTINA - HANGAR DEL VIEJO AEROPUERTO", "NOV 6 - BUENOS AIRES, ARGENTINA - ESTADIO LIBERTADORES DE AMÉRICA"];

let sectores = ["PLATEA ALTA", "PLATEA BAJA", "POPULAR", "CAMPO", "CAMPO VIP"]

/* Llenar el Dropdown con JavaScript: */
let dropdownFechas = document.getElementById("dropdownMenuFechas");

fechas.forEach(function (opcion) {
    let elemento = document.createElement("a");
    elemento.classList.add("dropdown-item");
    elemento.textContent = opcion;
    elemento.href = "#"; // Puedes asignar un enlace aquí si es necesario
    elemento.addEventListener("click", function () {
        valorSeleccionado = opcion;
        console.log("Valor seleccionado:", valorSeleccionado);
        // Aquí puedes realizar acciones con el valor seleccionado
    });
    dropdownFechas.appendChild(elemento);
});

sectores.forEach(function (sector) {
    let elemento = document.createElement("a");
    elemento.classList.add("dropdown-item");
    elemento.textContent = sector;
    elemento.href = "#"; // Puedes asignar un enlace aquí si es necesario
    elemento.addEventListener("click", function () {
        valorSeleccionado = sector;
        console.log("Valor seleccionado:", valorSeleccionado);
        // Aquí puedes realizar acciones con el valor seleccionado
    });
    dropdownSectores.appendChild(elemento);
});