/* ************************************* */
/* ******** compra-carrito-pago ******** */
/* ************************************* */

/* Inicializo variables parte del carrito */
let descartarCarrito = document.getElementById("descartarCarrito")
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

/* Recuperar de localStorage. Despliego todos los productos agregados al carrito con JavaScript: */
let carritoCompra = []

if (localStorage.getItem("carritoCompra")) {
    carritoCompra = JSON.parse(localStorage.getItem("carritoCompra"))
} else { }

/* Alerta "carrito de compra vacío" */
function volverCarritoVacio() {
    Swal.fire({
        text: "Tu carrito de compra está vacío",
        icon: "warning",
        showCancelButton: false,
        confirmButtonText: "Volver",
        allowOutsideClick: false
    }).then((result) => {
        if (result.isConfirmed) {
            /* Redirecciono a compra-entradas después de aceptar */
            window.location.href = "compra-entradas.html"
        }
    })
}

/* Si el carrito está vacío, me devuelve a la página de selección */
if (carritoCompra && carritoCompra.length != 0) {

    let n = 0

    while (n == 0) {
        function actualizarCarrito() {

            /* Pongo n=1 para salir del while cuando termine */
            n = 1

            /* Le pongo código a las selecciones */
            let codigoInicial = 1;

            for (let i = 0; i < carritoCompra.length; i++) {
                carritoCompra[i].codigo = codigoInicial;
                codigoInicial++;
            }

            carritoCompra.forEach(function (seleccion) {

                let contenedorPrincipal = document.createElement("div")
                contenedorPrincipal.classList.add("container-fluid", "d-flex", "flex-wrap", "align-items-center", "my-3")
                contenedorPrincipal.innerHTML =
                    `<h4 class="card-header col-11 fw-bold fs-6">${seleccion.fecha}</h4>
                        <i id="trash${seleccion.codigo}" class="fa-regular fa-trash-can col-1 text-end pointer"></i>
                        <div class="card-body">
                            <h5 class="card-title fst-italic py-2 fs-6">. Sector: ${seleccion.sector}</h5>
                            <p class="card-text py-2 fs-6">. p/u: $${seleccion.preciounitario}</p>
                            <p class="card-text py-2 fs-6">. Cantidad: ${seleccion.cantidad} entradas</p>
                            <h5 class="card-title py-2 fw-bold fs-6">. Total: $${parseInt(seleccion.preciounitario) * parseInt(seleccion.cantidad)}</h5>
                            <hr class="mt-5">
                        </div>`

                carritoProductos.appendChild(contenedorPrincipal)

                const trashCan = contenedorPrincipal.querySelector(`#trash${seleccion.codigo}`)

                /* Botón para borrar la selección */
                trashCan.addEventListener("click", function () {
                    carritoCompra.splice(trashCan.id - 1, 1)

                    /* Guardar en localStorage */
                    localStorage.setItem("carritoCompra", JSON.stringify(carritoCompra))

                    /* Limpio el carrito y el resumen */
                    carritoProductos.innerHTML = ""

                    /* Limpio el carrito */
                    carritoResumen.innerHTML = ""

                    /* Actualizo el carrito */
                    n = 0
                    actualizarCarrito()

                    /* Escondo de nuevo el método de pago si estaba desplegado. Si no quedan producto, regreso a compra entradas */
                    if (carritoCompra && carritoCompra.length != 0) {
                        if (formPagoEntradas.classList.contains("show")) {
                            formPagoEntradas.classList.toggle("show")
                        } else { }
                    } else {
                        volverCarritoVacio()
                    }
                })

            })

            /* Despliego el resumen del carrito con JavaScript: */
            carritoCompra.forEach(function (seleccion) {

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

    /* Función para limpiar el carrito */
    descartarCarrito.addEventListener("click", function () {

        carritoCompra.length = 0

        /* Guardar en localStorage */
        localStorage.setItem("carritoCompra", JSON.stringify(carritoCompra))

        /* Limpio el carrito y el resumen */
        carritoProductos.innerHTML = ""

        /* Limpio el carrito */
        carritoResumen.innerHTML = ""

        /* Actualizo el carrito */
        n = 0

        /* Escondo de nuevo el método de pago si estaba desplegado. Si no quedan producto, regreso a compra entradas */
        if (carritoCompra && carritoCompra.length != 0) {
            if (formPagoEntradas.classList.contains("show")) {
                formPagoEntradas.classList.toggle("show")
            } else { }
        } else {
            volverCarritoVacio()
        }
    })

    /* Listener para ir al método y procesamiento de pago: */
    irAlPago.addEventListener("click", function () {

        if (carritoCompra.length != 0) {
            if (formPagoEntradas.classList.contains("show")) {
            } else {
                formPagoEntradas.classList.toggle("show")
            }
        } else {
            volverCarritoVacio()
        }
    })

    /* Uso el listener para decirle al botón a qué página quiero que me redirija */
    document.getElementById("formularioPago").addEventListener("submit", function (event) {
        /* Previene el comportamiento por defecto de envío del formulario */
        event.preventDefault()

        /* Después de la validación, redirige a la página deseada */
        window.location.href = "compra-exitosa.html"
    })

} else {
    volverCarritoVacio()
}


