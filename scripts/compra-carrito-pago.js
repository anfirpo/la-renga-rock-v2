/* ************************************* */
/* ******** compra-carrito-pago ******** */
/* ************************************* */

/* Inicializo variables */
let carritoProductos = document.getElementById("carritoProductos")
let carritoResumen = document.getElementById("carritoResumen")

/* Despliego todos los productos agregados al carrito con JavaScript: */

let carritoCompra = [{ codigo: 1, fecha: 'SEP 24 - MENDOZA, ARGENTINA - ESTADIO MALVINAS ARGENTINAS', sector: 'PLATEA BAJA', preciounitario: 20000, cantidad: '4' }, { codigo: 2, fecha: 'SEP 12 - CÓRDOBA, ARGENTINA - ESTADIO MARIO ALBERTO KEMPES', sector: 'CAMPO VIP', preciounitario: 25000, cantidad: '1' }, { codigo: 3, fecha: 'AGO 26 - BUENOS AIRES, ARGENTINA - ESTADIO TOMÁS ADOLFO DUCÓ', sector: 'POPULAR', preciounitario: 10000, cantidad: '4' }]

carritoCompra.forEach(function (seleccion) {

    console.log("entró a las cards solas")

    let contenedorPrincipal = document.createElement("div")
    contenedorPrincipal.classList.add("container-fluid", "d-flex", "flex-wrap", "align-items-center")
    carritoProductos.appendChild(contenedorPrincipal)

    let header = document.createElement("h4")
    header.classList.add("card-header", "col-11")
    header.textContent = seleccion.fecha
    contenedorPrincipal.appendChild(header)

    let trashCan = document.createElement("i")
    trashCan.classList.add("fa-regular", "fa-trash-can", "col-1", "text-end")
    contenedorPrincipal.appendChild(trashCan)

    let contenedorBody = document.createElement("div")
    contenedorBody.classList.add("card-body")
    contenedorPrincipal.appendChild(contenedorBody)

    let sector = document.createElement("h5")
    sector.classList.add("card-title")
    sector.textContent = "Sector: " + seleccion.sector
    contenedorBody.appendChild(sector)

    let precioUnitario = document.createElement("p")
    precioUnitario.classList.add("card-text")
    precioUnitario.textContent = "p/u: $" + seleccion.preciounitario
    contenedorBody.appendChild(precioUnitario)

    let cantidadEntradas = document.createElement("p")
    cantidadEntradas.classList.add("card-text")
    cantidadEntradas.textContent = "Cantidad: " + seleccion.cantidad + " entradas"
    contenedorBody.appendChild(cantidadEntradas)

    let precioTotal = document.createElement("h5")
    precioTotal.classList.add("card-title")
    precioTotal.textContent = "$" + parseInt(seleccion.preciounitario) * parseInt(seleccion.cantidad)
    contenedorBody.appendChild(precioTotal)

})

/* Despliego el resumen del carrito con JavaScript: */

carritoCompra.forEach(function (seleccion) {

    console.log("entró al resumen")

    let fechaResumen = document.createElement("p")
    fechaResumen.classList.add("card-text")
    fechaResumen.textContent = seleccion.fecha
    carritoResumen.appendChild(fechaResumen)

    /* Obtengo el primer hijo del div carritoResumen */
    let primerElemento = carritoResumen.firstChild

    /* Inserto fechaResumen antes del primer elemento */
    carritoResumen.insertBefore(fechaResumen, primerElemento)

})

/* Calculo Subtotal, coste de servicio, y total: */

