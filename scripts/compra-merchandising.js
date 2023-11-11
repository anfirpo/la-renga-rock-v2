const carrito = []
const contenedor = document.querySelector("div.container#divcontenedor")
const btnCarrito = document.querySelector("img#logo")
const inputBuscar = document.querySelector("input#inputBusqueda")

function crearCardError() {
    return `<div class="div-card-error">
                <div class="imagen-error">🤦🏻‍♂️</div>
                <div class="leyenda-error">No pudimos cargar los productos</div>
                <div class="leyenda-intento">Intenta nuevamente en unos segundos.</div>
            </div>`
}

function crearCardHTML(producto) {
    return `<div class="card" style="width: 18rem;">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">$ ${producto.precio}</p>
                    <button id="${producto.id}" class="add-to-cart">Agregar</button>
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

