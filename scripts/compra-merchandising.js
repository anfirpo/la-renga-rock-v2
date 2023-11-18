const cantidadPorCategoria = {}
const contenedor = document.querySelector("div.container#divcontenedor")
const btnCarrito = document.querySelector("img#logo")
const filterInputMerchandising = document.querySelector("#filterInputMerchandising")
const filterButtonMerchandising = document.querySelector("#filterButtonMerchandising")
const menuMerchandising = document.querySelector("#menuMerchandising")
let allProducts = document.querySelector("#allProducts")
const logoCarritoMerch = document.querySelector("#logoCarritoMerch")
const cantCarritoMerch = document.querySelector("#cantCarritoMerch")

/* Inicializo el array "carritoCompra". Recuperar de localStorage. Despliego todos los productos agregados al carrito con JavaScript: */

let carritoMerchandising = []

if (localStorage.getItem("carritoMerchandising")) {
    carritoMerchandising = JSON.parse(localStorage.getItem("carritoMerchandising"))
} else { }

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
    return `<li class="list-group-item d-flex justify-content-between align-items-center pointer">
                ${clave}
                <span class="badge bg-primary rounded-pill">${objeto[clave]}</span>
            </li>`
}

/* Creo todas las categorías recorriendo el objeto cantidadPorCategoria*/
for (let categoria in cantidadPorCategoria) {
    menuMerchandising.innerHTML += crearCategoria(cantidadPorCategoria, categoria)
}

/* Filtro por categorías */
const listaCategorias = document.querySelectorAll("#menuMerchandising li")
listaCategorias.forEach((cat) => {
    cat.addEventListener("click", () => {
        if (cat.textContent.includes("todos")) {
            console.log("Toqué todos")
            filterInputMerchandising.value = ""
            cargarProductos(productos)
        }
        else {
            filterInputMerchandising.value = ""
            let textoBusqueda = cat.firstChild.textContent.trim().toLowerCase()
            let resultado = productos.filter((producto) => producto.categoria.toLowerCase().includes(textoBusqueda))
            cargarProductos(resultado)
        }
    })
})

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
                    <h5 class="card-title fs-5">${producto.nombre}</h5>
                    <p class="card-text fs-4">$ ${producto.precio}</p>
                    <button id="${producto.id}" class="add-to-cart btn btn-primary mt-2 fs-5">Agregar</button>
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
            carritoMerchandising.push(productoSeleccionado)
            console.table(carritoMerchandising)

            localStorage.setItem("carritoMerchandising", JSON.stringify(carritoMerchandising))

            actualizarCantidadImagen()
            agregarProductoToast()
        })
    })

}

cargarProductos(productos)
actualizarCantidadImagen()

/* Función filtro */
function filtroProducto() {
    let textoBusqueda = filterInputMerchandising.value.trim().toLowerCase()
    let resultado = productos.filter((producto) => producto.nombre.toLowerCase().includes(textoBusqueda))
    cargarProductos(resultado)
}

/* Filtrado productos por "Enter" */
filterInputMerchandising.addEventListener("search", () => {
    filtroProducto()
})

/* Filtrado productos por "Button" */
filterButtonMerchandising.addEventListener("click", function () {

    if (filterInputMerchandising.value != "") {
        filtroProducto()
    } else {
        console.log("No filtré")
    }
})

/* Toast y Q productos en carrito */
function agregarProductoToast() {
    Toastify({
        text: "¡Producto agregado!",
        offset: {
            y: 10
        },
        duration: 3000,
        gravity: "bottom",
        positionLeft: false,
        style: {
            color: "black",
            background: "#98E662",
            minWidth: "210px",
            height: "auto"
        },
    }).showToast()
}

function actualizarCantidadImagen() {
    if (carritoMerchandising.length == 0) {
        logoCarritoMerch.classList.remove("mx-5")
        console.log("entre if")
    } else {
        cantCarritoMerch.classList.remove("visually-hidden")
        cantCarritoMerch.textContent = parseInt(carritoMerchandising.length)
        console.log("entre else")
    }
}