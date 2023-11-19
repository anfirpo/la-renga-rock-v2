/* ************************************* */
/* ***** compra-Merchandising-pago ***** */
/* ************************************* */

/* Inicializo variables parte del carrito */
let descartarCarritoMerch = document.getElementById("descartarCarritoMerch")
let carritoProductosMerch = document.getElementById("carritoProductosMerch")
let carritoResumenMerch = document.getElementById("carritoResumenMerch")
let subtotalResumenMerch = document.getElementById("subtotalResumenMerch")
let costoServicioResumenMerch = document.getElementById("costoServicioResumenMerch")
let totalResumenMerch = document.getElementById("totalResumenMerch")
let irAlPagoMerch = document.getElementById("irAlPagoMerch")
let subtotalResumenValorMerch = 0
let costoServicioResumenValorMerch = 0

/* Inicializo variables parte del pago */
let formPagoEntradasMerch = document.getElementById("formPagoEntradasMerch")

/* Recuperar de localStorage. Despliego todos los productos agregados al carrito con JavaScript: */
let carritoMerchandising = JSON.parse(localStorage.getItem("carritoMerchandising"))

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
            window.location.href = "compra-merchandising.html"
        }
    })
}

/* Si el "loginToken" no existe, te manda a la página de inicio" */
if (localStorage.getItem("loginToken")) {
} else {
    window.location.href = "../index.html"
}


/* Si el carrito está vacío, me devuelve a la página de selección */
if (carritoMerchandising && carritoMerchandising.length != 0) {

    let n = 0

    while (n == 0) {
        function actualizarCarrito() {

            /* Pongo n=1 para salir del while cuando termine */
            n = 1

            /* Le pongo código a las selecciones */
            let codigoInicial = 1;

            for (let i = 0; i < carritoMerchandising.length; i++) {
                carritoMerchandising[i].codigo = codigoInicial;
                codigoInicial++;
            }

            carritoMerchandising.forEach(function (seleccion) {

                let contenedorPrincipalMerch = document.createElement("div")
                contenedorPrincipalMerch.classList.add("container-fluid", "d-flex", "flex-wrap", "align-items-center", "my-3")
                contenedorPrincipalMerch.innerHTML =
                    `<h4 class="card-header col-11 fw-bold fs-6">${seleccion.nombre}</h4>
                        <i id="trash${seleccion.codigo}" class="fa-regular fa-trash-can col-1 text-end pointer"></i>
                        <div class="card-body">
                            <h5 class="card-title fst-italic py-2 fs-6">. Categoria: ${seleccion.categoria}</h5>
                            <p class="card-text py-2 fs-6">. p/u: $${seleccion.precio}</p>
                            <p class="card-text py-2 fs-6">. Cantidad: 3 unidades</p>
                            <h5 class="card-title py-2 fw-bold fs-6">. Total: $${parseInt(seleccion.precio) * parseInt(3)}</h5>
                            <hr class="mt-5">
                        </div>`

                carritoProductosMerch.appendChild(contenedorPrincipalMerch)

                const trashCan = contenedorPrincipalMerch.querySelector(`#trash${seleccion.codigo}`)

                /* Botón para borrar la selección */
                trashCan.addEventListener("click", function () {
                    carritoMerchandising.splice(trashCan.id - 1, 1)

                    /* Guardar en localStorage */
                    localStorage.setItem("carritoMerchandising", JSON.stringify(carritoMerchandising))

                    /* Limpio el carrito y el resumen */
                    carritoProductosMerch.innerHTML = ""

                    /* Limpio el carrito */
                    carritoResumenMerch.innerHTML = ""

                    /* Actualizo el carrito */
                    n = 0
                    actualizarCarrito()

                    /* Escondo de nuevo el método de pago si estaba desplegado. Si no quedan producto, regreso a compra entradas */
                    if (carritoMerchandising && carritoMerchandising.length != 0) {
                        if (formPagoEntradasMerch.classList.contains("show")) {
                            formPagoEntradasMerch.classList.toggle("show")
                        } else { }
                    } else {
                        volverCarritoVacio()
                    }
                })

            })

            /* Despliego el resumen del carrito con JavaScript: */
            carritoMerchandising.forEach(function (seleccion) {

                let nombreProducto = document.createElement("p")
                nombreProducto.classList.add("card-text", "mb-5", "mt-3")
                nombreProducto.textContent = ". 3 x " + seleccion.nombre
                carritoResumenMerch.appendChild(nombreProducto)

                /* Obtengo el primer hijo del div carritoResumenMerch */
                let primerElemento = carritoResumenMerch.firstChild

                /* Inserto fechaResumen antes del primer elemento */
                carritoResumenMerch.insertBefore(nombreProducto, primerElemento)

            })

            /* Calculo Subtotal, coste de servicio, y total: */
            subtotalResumenValorMerch = carritoMerchandising.reduce((total, producto) => total + (producto.precio * 3), 0)
            subtotalResumenMerch.textContent = "Subtotal: $" + subtotalResumenValorMerch

            costoServicioResumenValorMerch = parseInt(((subtotalResumenValorMerch * 3) / 100) * carritoMerchandising.length)
            costoServicioResumenMerch.textContent = "Costo del servicio: $" + costoServicioResumenValorMerch

            totalResumenMerch.textContent = "Total: $" + (subtotalResumenValorMerch + costoServicioResumenValorMerch)

        }

        actualizarCarrito()
    }

    /* Función para limpiar el carrito */
    descartarCarritoMerch.addEventListener("click", function () {

        carritoMerchandising.length = 0

        /* Guardar en localStorage */
        localStorage.setItem("carritoMerchandising", JSON.stringify(carritoMerchandising))

        /* Limpio el carrito y el resumen */
        carritoProductosMerch.innerHTML = ""

        /* Limpio el carrito */
        carritoResumenMerch.innerHTML = ""

        /* Actualizo el carrito */
        n = 0

        /* Escondo de nuevo el método de pago si estaba desplegado. Si no quedan producto, regreso a compra entradas */
        if (carritoMerchandising && carritoMerchandising.length != 0) {
            if (formPagoEntradasMerch.classList.contains("show")) {
                formPagoEntradasMerch.classList.toggle("show")
            } else { }
        } else {
            volverCarritoVacio()
        }
    })

    /* Listener para ir al método y procesamiento de pago: */
    irAlPagoMerch.addEventListener("click", function () {

        if (carritoMerchandising.length != 0) {
            if (formPagoEntradasMerch.classList.contains("show")) {
            } else {
                formPagoEntradasMerch.classList.toggle("show")
            }
        } else {
            volverCarritoVacio()
        }
    })

    /* Uso el listener para decirle al botón a qué página quiero que me redirija */
    document.getElementById("formularioPagoMerch").addEventListener("submit", function (event) {
        /* Previene el comportamiento por defecto de envío del formulario */
        event.preventDefault()

        /* Repliego el form de pago */
        formPagoEntradasMerch.classList.toggle("show")

        /* Después de la validación, redirige a la página deseada */
        window.location.href = "compra-exitosa.html"
    })

} else {
    volverCarritoVacio()
}


