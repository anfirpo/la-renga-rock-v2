/* ************************************* */
/* ******** compra-carrito-pago ******** */
/* ************************************* */

document.addEventListener("DOMContentLoaded", function () {

    /* Inicializo variables parte del carrito */
    let carritoProductos = document.getElementById("carritoProductos")
    let carritoResumen = document.getElementById("carritoResumen")
    let subtotalResumen = document.getElementById("subtotalResumen")
    let costoServicioResumen = document.getElementById("costoServicioResumen")
    let totalResumen = document.getElementById("totalResumen")
    let irAlPago = document.getElementById("irAlPago")
    let subtotalResumenValor = 0
    let costoServicioResumenValor = 0

    /* Inicializo variables parte del pago */
    let formPagoEntradas = document.getElementById("formPagoEntradas")

    /* Despliego todos los productos agregados al carrito con JavaScript: */

    let carritoCompra = [{ fecha: 'SEP 24 - MENDOZA, ARGENTINA - ESTADIO MALVINAS ARGENTINAS', sector: 'PLATEA BAJA', preciounitario: 20000, cantidad: '4', preciototal: 80000 }, { fecha: 'SEP 12 - CÓRDOBA, ARGENTINA - ESTADIO MARIO ALBERTO KEMPES', sector: 'CAMPO VIP', preciounitario: 25000, cantidad: '1', preciototal: 25000 }, { fecha: 'AGO 26 - BUENOS AIRES, ARGENTINA - ESTADIO TOMÁS ADOLFO DUCÓ', sector: 'POPULAR', preciounitario: 10000, cantidad: '4', preciototal: 40000 }]

    /* Si el carrito está vacío, me devuelve a la página de selección */
    if (carritoCompra.length != 0) {

        let n = 0

        while (n == 0) {
            console.log("Entra al while")
            function actualizarCarrito() {
                console.log("Entra al function")

                /* Pongo n=1 para salir del while cuando termine */
                n = 1
                console.log(carritoCompra)

                /* Le pongo código a las selecciones */
                let codigoInicial = 1;

                for (let i = 0; i < carritoCompra.length; i++) {
                    carritoCompra[i].codigo = codigoInicial;
                    codigoInicial++;
                }

                carritoCompra.forEach(function (seleccion) {

                    console.log("entró a las cards solas")

                    let contenedorPrincipal = document.createElement("div")
                    contenedorPrincipal.classList.add("container-fluid", "d-flex", "flex-wrap", "align-items-center", "my-3")
                    carritoProductos.appendChild(contenedorPrincipal)

                    let header = document.createElement("h4")
                    header.classList.add("card-header", "col-11", "fw-bold", "fs-6")
                    header.textContent = seleccion.fecha
                    contenedorPrincipal.appendChild(header)

                    let trashCan = document.createElement("i")
                    trashCan.id = seleccion.codigo
                    trashCan.classList.add("fa-regular", "fa-trash-can", "col-1", "text-end", "pointer")
                    contenedorPrincipal.appendChild(trashCan)
                    console.log(trashCan.id)

                    let contenedorBody = document.createElement("div")
                    contenedorBody.classList.add("card-body")
                    contenedorPrincipal.appendChild(contenedorBody)

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

                    /* Botón para borrar la selección */
                    trashCan.onclick = function () {
                        console.log("Has hecho clic en el botón: " + trashCan.id)
                        console.log(trashCan.id - 1)
                        carritoCompra.splice(trashCan.id - 1, 1)
                        console.log(carritoCompra)

                        /* Limpio el carrito y el resumen */
                        carritoProductos.innerHTML = ""
                        console.log("Limpio el carrito")/* Limpio el carrito */
                        carritoResumen.innerHTML = ""
                        console.log("Limpio el resumen")

                        /* Actualizo el carrito */
                        console.log("Pongo n en 0")
                        n = 0
                        console.log("El valor de n: " + n)
                        actualizarCarrito()

                        /* Escondo de nuevo el método de pago si estaba desplegado */
                        if (formPagoEntradas.classList.contains("show")) {
                            formPagoEntradas.classList.toggle("show")
                        } else { }

                        /* Escondo de nuevo el método de pago si estaba desplegado. Si no quedan producto, regreso a compra entradas */
                        if (carritoCompra.length != 0) {
                            if (formPagoEntradas.classList.contains("show")) {
                                formPagoEntradas.classList.toggle("show")
                            } else { }
                        } else {
                            alert("Tu carrito de compra está vacío")

                            /* Redirecciono a compra-entradas después de aceptar */
                            window.location.href = "compra-entradas.html"
                        }
                    }

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

                subtotalResumenValor = carritoCompra.reduce((total, producto) => total + producto.preciototal, 0)
                subtotalResumen.textContent = "Subtotal: $" + subtotalResumenValor

                costoServicioResumenValor = parseInt(((subtotalResumenValor * 3) / 100) * carritoCompra.length)
                costoServicioResumen.textContent = "Costo del servicio: $" + costoServicioResumenValor

                totalResumen.textContent = "Total: $" + (subtotalResumenValor + costoServicioResumenValor)

            }
            actualizarCarrito()
        }

        /* Listener para ir al método y procesamiento de pago: */
        irAlPago.addEventListener("click", function () {

            if (carritoCompra.length != 0) {
                if (formPagoEntradas.classList.contains("show")) {
                } else {
                    formPagoEntradas.classList.toggle("show")
                }
            } else {
                alert("Tu carrito de compra está vacío")

                /* Redirecciono a compra-entradas después de aceptar */
                window.location.href = "compra-entradas.html"
            }
        })

        /* Uso el listener para decirle al botón a qué página quiero que me redirija */
        document.getElementById("formularioPago").addEventListener("submit", function (event) {
            // Previene el comportamiento por defecto de envío del formulario
            event.preventDefault();

            // Después de la validación, redirige a la página deseada
            window.location.href = "compra-exitosa.html"
        });

    } else {
        alert("Tu carrito de compra está vacío")

        /* Redirecciono a compra-entradas después de aceptar */
        window.location.href = "compra-entradas.html"
    }

})