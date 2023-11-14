const carrito = []
const cantidadPorCategoria = {}
const contenedor = document.querySelector("div.container#divcontenedor")
const btnCarrito = document.querySelector("img#logo")
const inputBuscar = document.querySelector("input#inputBusqueda")
const menuMerchandising = document.querySelector("#menuMerchandising")
let allProducts = document.querySelector("#allProducts")

/* Cantidad de productos que vendo */
allProducts.textContent = productos.length

/* Cantidad de productos por categoría */
productos.forEach(producto => {
    const { categoria } = producto

    if (cantidadPorCategoria[categoria]) {
        cantidadPorCategoria[categoria]++
    } else {
        cantidadPorCategoria[categoria] = 1
    }
})

/* Sección para crear cada categoría en HTML */
function crearCategoria(objeto, clave) {
    return `<li class="list-group-item d-flex justify-content-between align-items-center">
                ${clave}
                <span class="badge bg-primary rounded-pill">${objeto[clave]}</span>
                </li>`
}

/* Creo todas las categorías recorriendo el objeto cantidadPorCategoria*/
for (let categoria in cantidadPorCategoria) {
    menuMerchandising.innerHTML += crearCategoria(cantidadPorCategoria, categoria)
}

/* Sección para productos en tarjetas */
function crearCardError() {
    return `<div class="div-card-error">
                <div class="imagen-error">🤦🏻‍♂️</div>
                <div class="leyenda-error">No pudimos cargar los productos</div>
                <div class="leyenda-intento">Intenta nuevamente en unos segundos.</div>
            </div>`
}

function crearCardHTML(producto) {
    return `<div class="card my-3" style="width: 20rem">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <hr>
                <div class="card-body text-center">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">$ ${producto.precio}</p>
                    <button id="${producto.id}" class="add-to-cart btn btn-primary">Agregar</button>
                </div>
            </div>`
}

function cargarProductos(stock) {
    if (stock.length > 0) {
        contenedor.innerHTML = ""
        stock.forEach((producto) => contenedor.innerHTML += crearCardHTML(producto))
        activarClickEnBotones()
    } else {
        contenedor.innerHTML = crearCardError()
    }
}

function activarClickEnBotones() {
    const botonesAgregar = document.querySelectorAll("button.add-to-cart")
    botonesAgregar.forEach((boton) => { // e, ev, evt, event
        boton.addEventListener("click", (e) => {
            const id = parseInt(e.target.id)
            const productoSeleccionado = productos.find((producto) => producto.id === id)
            carrito.push(productoSeleccionado)
            console.table(carrito)
        })
    })

}

cargarProductos(productos)

// método Add Event Listener

/* btnCarrito.addEventListener("click", () => {
    alert("Hiciste click en el carrito.")
})

btnCarrito.addEventListener("mousemove", () => {
    btnCarrito.title = "Carrito sin productos"
})

inputBuscar.addEventListener("search", () => {
    let textoAbuscar = inputBuscar.value.trim().toLowerCase()
    let resultado = productos.filter((producto) => producto.nombre.toLowerCase().includes(textoAbuscar))
    console.table(resultado)
    cargarProductos(resultado)

}) */

