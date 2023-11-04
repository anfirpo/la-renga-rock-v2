/* **************************************************** */
/* ****************** COMPRA ENTRADAS ***************** */
/* **************************************************** */

/* Creo las variables que apuntan a los filtros en HTML: */
let filterInput = document.getElementById("filterInput")
let filterButton = document.getElementById("filterButton")

/* Creo las variables que apuntan a los dropdown en HTML: */
let dropdownMenuFechas = document.getElementById("dropdownMenuFechas")
let dropdownMenuSectores = document.getElementById("dropdownMenuSectores")
let dropdownMenuCantidad = document.getElementById("dropdownMenuCantidad")
let dropdownSectores = document.getElementById("dropdownSectores")
let dropdownCantidad = document.getElementById("dropdownCantidad")

/* Inicializo las variables que apuntan a los input de los dropdown en HTML: */
let fechaRecital = document.getElementById("fechaRecital")
fechaRecital.value = ""
let sectorRecital = document.getElementById("sectorRecital")
sectorRecital.value = ""
let entradasRecital = document.getElementById("entradasRecital")
entradasRecital.value = 0

/* Inicializo las variables que apuntan a los input de total parcial en HTML: */
let totalRecitalTexto = document.getElementById("totalRecitalTexto")
let totalRecitalValor = document.getElementById("totalRecitalValor")
totalRecitalValor.value = 0


/* Inicializo el array "carritoCompra". Recuperar de localStorage. Despliego todos los productos agregados al carrito con JavaScript: */

let carritoCompra = []

if (localStorage.getItem("carritoCompra")) {
    carritoCompra = JSON.parse(localStorage.getItem("carritoCompra"))
} else { }

/* Creo la clase constructora "Seleccion" */
class Seleccion {
    constructor(fecha, sector, precioUnitario, cantidad) {
        this.fecha = fecha
        this.sector = sector
        this.preciounitario = precioUnitario
        this.cantidad = cantidad
        this.preciototal = precioUnitario * cantidad
    }
}

/* Declaro los botones de descarte y compra */
let botonDescartarCompra = document.getElementById("botonDescartarCompra")
let botonAgregarCompra = document.getElementById("botonAgregarCompra")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")

/* Declaro las siguientes variables para que sean globales */
let sectorLugar = ""
let sectorPrecio = 0

/* Event Listener para el search & filter */
filterButton.addEventListener("click", function () {

    if (filterInput.value != "") {
        console.log("Filtré")
    } else {
        console.log("No filtré")
    }
})

/* Llenar el Dropdown de fechas con JavaScript: */
fechas.forEach(function (fecha) {
    let elemento = document.createElement("a")
    elemento.classList.add("dropdown-item")

    /* Reduzco la cantidad de caracteres del mes */
    let mesAbreviado = fecha.mes.slice(0, 3)

    /* Creo el template string "fechasTemplate" */
    let fechasTemplate = `${mesAbreviado} ${fecha.dia} - ${fecha.pais}, ${fecha.provincia} - ${fecha.lugar}`
    elemento.textContent = fechasTemplate

    elemento.addEventListener("click", function () {

        fechaRecital.value = fechasTemplate

        if (dropdownSectores.classList.contains("show")) {
        } else {
            fechaRecital.classList.toggle("show")
            dropdownSectores.classList.toggle("show")
        }
    })
    dropdownMenuFechas.appendChild(elemento)
})

/* Llenar el Dropdown de sectores con JavaScript: */
sectores.forEach(function (sector) {
    let elemento = document.createElement("a")
    elemento.classList.add("dropdown-item")

    /* Creo el template string "sectoresTemplate" */
    let sectoresTemplate = `${sector.sector} - $${sector.precio}`
    elemento.textContent = sectoresTemplate

    elemento.addEventListener("click", function () {

        sectorRecital.value = sectoresTemplate

        sectorLugar = sector.sector
        sectorPrecio = parseInt(sector.precio)

        /* Hago la cuenta del total de compra de esta selección. Esta sentencia la tengo que escribir acá ya que, en el caso de haber elegido una opción para cada dropdown, si yo quisiera modificar luego un sector, sin modificar la cantidad de entradas a comprar, esta es la forma en que se actualizaría el total */
        totalRecitalValor.value = entradasRecital.value * sectorPrecio

        if (dropdownCantidad.classList.contains("show")) {
        } else {
            sectorRecital.classList.toggle("show")
            dropdownCantidad.classList.toggle("show")
        }
    })
    dropdownMenuSectores.appendChild(elemento)
})

/* Llenar el Dropdown de cantidad con JavaScript: */
cantidad.forEach(function (cant) {
    let elemento = document.createElement("a")
    elemento.classList.add("dropdown-item")
    elemento.textContent = cant
    elemento.addEventListener("click", function () {

        entradasRecital.value = parseInt(cant)

        /* Hago la cuenta del total de compra de esta selección */
        totalRecitalValor.value = cant * sectorPrecio

        if (entradasRecital.classList.contains("show")) {
        } else {
            entradasRecital.classList.toggle("show")
            totalRecitalTexto.classList.toggle("show")
            totalRecitalValor.classList.toggle("show")
        }
    })
    dropdownMenuCantidad.appendChild(elemento)
})

/* Función que borra los datos seleccionados a la hora de comprar la entrada */
function limpiarSeleccion() {
    fechaRecital.value = ""
    sectorRecital.value = ""
    entradasRecital.value = 0
    totalRecitalValor.value = 0

    if (fechaRecital.classList.contains("show") && sectorRecital.classList.contains("show") && entradasRecital.classList.contains("show")) {
        fechaRecital.classList.toggle("show")
        dropdownSectores.classList.toggle("show")
        sectorRecital.classList.toggle("show")
        dropdownCantidad.classList.toggle("show")
        entradasRecital.classList.toggle("show")
        totalRecitalTexto.classList.toggle("show")
        totalRecitalValor.classList.toggle("show")

    } else if (fechaRecital.classList.contains("show") && sectorRecital.classList.contains("show")) {
        fechaRecital.classList.toggle("show")
        dropdownSectores.classList.toggle("show")
        sectorRecital.classList.toggle("show")
        dropdownCantidad.classList.toggle("show")

    } else if (fechaRecital.classList.contains("show")) {
        fechaRecital.classList.toggle("show")
        dropdownSectores.classList.toggle("show")

    } else { }
}

/* Asigno funciones a los botones */
botonDescartarCompra.addEventListener("click", function () {

    limpiarSeleccion()
})

botonAgregarCompra.addEventListener("click", function () {

    if (totalRecitalValor.classList.contains("show")) {

        carritoCompra.push(new Seleccion(fechaRecital.value, sectorLugar, sectorPrecio, entradasRecital.value))

        /* Guardar en localStorage */
        localStorage.setItem("carritoCompra", JSON.stringify(carritoCompra))

        limpiarSeleccion()
    } else {
        alert("Aún quedan campos sin seleccionar")
    }
})

botonFinalizarCompra.addEventListener("click", function () {

    window.location.href = "compra-carrito-pago.html"
})
