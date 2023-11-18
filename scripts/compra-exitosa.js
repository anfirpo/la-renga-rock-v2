/* **************************************************** */
/* ******************* COMPRA EXITOSA ***************** */
/* **************************************************** */

let loginToken = JSON.parse(localStorage.getItem("loginToken"))

if (loginToken == "entradas") {

    localStorage.removeItem("loginToken")
    localStorage.removeItem("carritoCompra")

} else if (loginToken == "merchandising") {

    localStorage.removeItem("loginToken")
    localStorage.removeItem("carritoMerchandising")

} else {

    console.log("Surgió un error poco común")

}