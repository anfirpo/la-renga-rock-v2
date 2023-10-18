/* Crear los Arrays en JavaScript e inicializar las variables: */
let fechas = ["AGO 26 - BUENOS AIRES, ARGENTINA - ESTADIO TOMÁS ADOLFO DUCÓ", "SEP 12 - CÓRDOBA, ARGENTINA - ESTADIO MARIO ALBERTO KEMPES", "SEP 24 - MENDOZA, ARGENTINA - ESTADIO MALVINAS ARGENTINAS", "OCT 26 - TIERRA DEL FUEGO, ARGENTINA - HANGAR DEL VIEJO AEROPUERTO", "NOV 6 - BUENOS AIRES, ARGENTINA - ESTADIO LIBERTADORES DE AMÉRICA"];

let sectores = ["PLATEA ALTA - $15000", "PLATEA BAJA - $20000", "POPULAR - $10000", "CAMPO - $12500", "CAMPO VIP - $25000"]

let cantidad = [1, 2, 3, 4, 5]

let dropdownMenuFechas = document.getElementById("dropdownMenuFechas");
let dropdownMenuSectores = document.getElementById("dropdownMenuSectores");
let dropdownMenuCantidad = document.getElementById("dropdownMenuCantidad");
let dropdownSectores = document.getElementById("dropdownSectores");
let dropdownCantidad = document.getElementById("dropdownCantidad");

/* Llenar el Dropdown de fechas con JavaScript: */
fechas.forEach(function (opcion) {
    let elemento = document.createElement("a");
    elemento.classList.add("dropdown-item");
    elemento.textContent = opcion;
    elemento.href = "#";
    elemento.addEventListener("click", function () {
        fechaElegida = opcion;
        console.log("Valor seleccionado:", fechaElegida);

        if (dropdownSectores.classList.contains("show")) {
        } else {
            dropdownSectores.classList.toggle("show");
        }
    });
    dropdownMenuFechas.appendChild(elemento);
});

/* Llenar el Dropdown de sectores con JavaScript: */
sectores.forEach(function (sector) {
    let elemento = document.createElement("a");
    elemento.classList.add("dropdown-item");
    elemento.textContent = sector;
    elemento.href = "#";
    elemento.addEventListener("click", function () {
        sectorElegido = sector;
        console.log("Valor seleccionado:", sectorElegido);

        if (dropdownCantidad.classList.contains("show")) {
        } else {
            dropdownCantidad.classList.toggle("show");
        }
    });
    dropdownMenuSectores.appendChild(elemento);
});

/* Llenar el Dropdown de cantidad con JavaScript: */
cantidad.forEach(function (cant) {
    let elemento = document.createElement("a");
    elemento.classList.add("dropdown-item");
    elemento.textContent = cant;
    elemento.href = "#";
    elemento.addEventListener("click", function () {
        cantidadElegida = cant;
        console.log("Valor seleccionado:", cantidadElegida);
    });
    dropdownMenuCantidad.appendChild(elemento);
});