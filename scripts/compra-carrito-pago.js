/* ************************************* */
/* ******** compra-carrito-pago ******** */
/* ************************************* */

document.addEventListener("DOMContentLoaded", function () {

    /* Inicializo variables parte del carrito */
    let carritoProductos = document.getElementById("carritoProductos")
    let trashCan = []
    let i = 0
    let contenedorPrincipal = []
    let j = 0
    let carritoResumen = document.getElementById("carritoResumen")
    let subtotalResumen = document.getElementById("subtotalResumen")
    let costoServicioResumen = document.getElementById("costoServicioResumen")
    let totalResumen = document.getElementById("totalResumen")
    let irAlPago = document.getElementById("irAlPago")

    /* Inicializo variables parte del pago */
    let formPagoEntradas = document.getElementById("formPagoEntradas")
    const numeroTarjeta = document.getElementById("numeroTarjeta")
    const nombreTarjeta = document.getElementById("nombreTarjeta")
    const vencimientoTarjeta = document.getElementById("vencimientoTarjeta")
    const codigoTarjeta = document.getElementById("codigoTarjeta")
    const dniTarjeta = document.getElementById("dniTarjeta")
    const confirmarEmail = document.getElementById("confirmarEmail")
    let comprarButton = document.getElementById("comprarButton")

    /* Despliego todos los productos agregados al carrito con JavaScript: */

    let carritoCompra = [{ codigo: 1, fecha: 'SEP 24 - MENDOZA, ARGENTINA - ESTADIO MALVINAS ARGENTINAS', sector: 'PLATEA BAJA', preciounitario: 20000, cantidad: '4', preciototal: 80000 }, { codigo: 2, fecha: 'SEP 12 - CÓRDOBA, ARGENTINA - ESTADIO MARIO ALBERTO KEMPES', sector: 'CAMPO VIP', preciounitario: 25000, cantidad: '1', preciototal: 25000 }, { codigo: 3, fecha: 'AGO 26 - BUENOS AIRES, ARGENTINA - ESTADIO TOMÁS ADOLFO DUCÓ', sector: 'POPULAR', preciounitario: 10000, cantidad: '4', preciototal: 40000 }]

    carritoCompra.forEach(function (seleccion) {

        console.log("entró a las cards solas")

        contenedorPrincipal[j] = document.createElement("div")
        contenedorPrincipal[j].classList.add("container-fluid", "d-flex", "flex-wrap", "align-items-center", "my-3")
        carritoProductos.appendChild(contenedorPrincipal[j])

        let header = document.createElement("h4")
        header.classList.add("card-header", "col-11", "fw-bold", "fs-6")
        header.textContent = seleccion.fecha
        contenedorPrincipal[j].appendChild(header)

        trashCan[i] = document.createElement("i")
        trashCan[i].classList.add("fa-regular", "fa-trash-can", "col-1", "text-end", "pointer")
        contenedorPrincipal[j].appendChild(trashCan[i])

        let contenedorBody = document.createElement("div")
        contenedorBody.classList.add("card-body")
        contenedorPrincipal[j].appendChild(contenedorBody)

        let sector = document.createElement("h5")
        sector.classList.add("card-title", "fst-italic", "py-2", "fs-6")
        sector.textContent = ". Sector: " + seleccion.sector
        contenedorBody.appendChild(sector)

        let precioUnitario = document.createElement("p")
        precioUnitario.classList.add("card-text", "py-2", "fs-6")
        precioUnitario.textContent = ". p/u: $" + seleccion.preciounitario
        contenedorBody.appendChild(precioUnitario)

        let cantidadEntradas = document.createElement("p")
        cantidadEntradas.classList.add("card-text", "py-2", "fs-6")
        cantidadEntradas.textContent = ". Cantidad: " + seleccion.cantidad + " entradas"
        contenedorBody.appendChild(cantidadEntradas)

        let precioParcialSeleccion = document.createElement("h5")
        precioParcialSeleccion.classList.add("card-title", "py-2", "fw-bold", "fs-6")
        precioParcialSeleccion.textContent = ". Total: $" + parseInt(seleccion.preciounitario) * parseInt(seleccion.cantidad)
        contenedorBody.appendChild(precioParcialSeleccion)

        let lineaHorizontal = document.createElement("hr")
        carritoProductos.appendChild(lineaHorizontal)

        i++
        j++

    })

    /* Uso el listener para decirle al tacho de basura qué selección quiero borrar */
    trashCan.forEach(function (bin) {

        bin.addEventListener("click", function () {

            n = 0
            console.log("borrar selección " + n)
            n++
        })
    })

    /* Despliego el resumen del carrito con JavaScript: */

    carritoCompra.forEach(function (seleccion) {

        console.log("entró al resumen")

        let fechaResumen = document.createElement("p")
        fechaResumen.classList.add("card-text", "mb-5", "mt-3")
        fechaResumen.textContent = seleccion.fecha
        carritoResumen.appendChild(fechaResumen)

        /* Obtengo el primer hijo del div carritoResumen */
        let primerElemento = carritoResumen.firstChild

        /* Inserto fechaResumen antes del primer elemento */
        carritoResumen.insertBefore(fechaResumen, primerElemento)

    })

    /* Calculo Subtotal, coste de servicio, y total: */

    let subtotalResumenValor = carritoCompra.reduce((total, producto) => total + producto.preciototal, 0)
    subtotalResumen.textContent = "Subtotal: $" + subtotalResumenValor

    let costoServicioResumenValor = parseInt(((subtotalResumenValor * 3) / 100) * carritoCompra.length)
    costoServicioResumen.textContent = "Costo del servicio: $" + costoServicioResumenValor

    totalResumen.textContent = "Total: $" + (subtotalResumenValor + costoServicioResumenValor)

    /* Listener para ir al método y procesamiento de pago: */
    irAlPago.addEventListener("click", function () {

        if (formPagoEntradas.classList.contains("show")) {
        } else {
            formPagoEntradas.classList.toggle("show")
        }
    })

    /* Chequeo si completé todos los datos de la tarjeta para habilitar el botón */
    function checkInputsPago() {
        if (numeroTarjeta.value.trim() !== "" && nombreTarjeta.value.trim() !== "" && vencimientoTarjeta.value.trim() !== "" && codigoTarjeta.value.trim() !== "" && dniTarjeta.value.trim() !== "" && confirmarEmail.value.trim() !== "") {
            comprarButton.removeAttribute("disabled")
        } else {
            comprarButton.setAttribute("disabled", "true")
        }
    }

    /* Uso el listener para ir avisando qué datos voy completando */
    numeroTarjeta.addEventListener("input", checkInputsPago)
    nombreTarjeta.addEventListener("input", checkInputsPago)
    vencimientoTarjeta.addEventListener("input", checkInputsPago)
    codigoTarjeta.addEventListener("input", checkInputsPago)
    dniTarjeta.addEventListener("input", checkInputsPago)
    confirmarEmail.addEventListener("input", checkInputsPago)

    /* Uso el listener para decirle al botón a qué página quiero que me redirija */
    comprarButton.addEventListener("click", function () {

        window.location.href = "compra-exitosa.html"
    })

})