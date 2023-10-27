/* **************************************************** */
/* ****************** COMPRA ENTRADAS ***************** */
/* **************************************************** */

/* Crear los Arrays en JavaScript: */
let fechas = ["AGO 26 - BUENOS AIRES, ARGENTINA - ESTADIO TOMÁS ADOLFO DUCÓ", "SEP 12 - CÓRDOBA, ARGENTINA - ESTADIO MARIO ALBERTO KEMPES", "SEP 24 - MENDOZA, ARGENTINA - ESTADIO MALVINAS ARGENTINAS", "OCT 26 - TIERRA DEL FUEGO, ARGENTINA - HANGAR DEL VIEJO AEROPUERTO", "NOV 6 - BUENOS AIRES, ARGENTINA - ESTADIO LIBERTADORES DE AMÉRICA"];

let sectores = ["PLATEA ALTA - $15000", "PLATEA BAJA - $20000", "POPULAR - $10000", "CAMPO - $12500", "CAMPO VIP - $25000"]

let cantidad = [1, 2, 3, 4, 5]

/* Array de objetos para probar */
/* let miArray = [{ codigo: 0, color: "rojo" }, { codigo: 1, color: "azul" }, { codigo: 2, color: "verde" }] */

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

/* Creo la clase constructora "Seleccion" e inicializo el array "carritoCompra" */
let carritoCompra = []

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

/* Llenar el Dropdown de fechas con JavaScript: */
fechas.forEach(function (fecha) {
    let elemento = document.createElement("a")
    elemento.classList.add("dropdown-item")
    elemento.textContent = fecha
    elemento.addEventListener("click", function () {

        fechaRecital.value = fecha

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
    elemento.textContent = sector
    elemento.addEventListener("click", function () {

        sectorRecital.value = sector

        let sectorSplitPrecio = sector.split("$")
        let sectorSplitLugar = sector.split(" -")

        sectorLugar = sectorSplitLugar[0]
        sectorPrecio = parseInt(sectorSplitPrecio[1])

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

    } else {
        console.log("No hay algún dropdown abierto")
    }
}

/* Asigno funciones a los botones */
botonDescartarCompra.addEventListener("click", function () {

    limpiarSeleccion()
})

botonAgregarCompra.addEventListener("click", function () {

    if (totalRecitalValor.classList.contains("show")) {

        carritoCompra.push(new Seleccion(fechaRecital.value, sectorLugar, sectorPrecio, entradasRecital.value))

        console.log(carritoCompra)

        limpiarSeleccion()
    } else {
        alert("Aún quedan campos sin seleccionar")
    }
})

botonFinalizarCompra.addEventListener("click", function () {

    window.location.href = "compra-carrito-pago.html"
})
