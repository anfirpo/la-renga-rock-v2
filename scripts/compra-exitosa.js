/* **************************************************** */
/* ******************* COMPRA EXITOSA ***************** */
/* **************************************************** */

if (loginToken == "entradas") {

    localStorage.removeItem("loginToken")
    localStorage.removeItem("carritoCompra")

} else if (loginToken == "merchandising") {

    localStorage.removeItem("loginToken")
    localStorage.removeItem("carritoMerchandising")

} else {

    console.log("Surgió un error poco común")

}