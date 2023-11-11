/* **************************************************** */
/* *************** VARIABLES Y CONSTANTES ************* */
/* **************************************************** */

/* Crear los Arrays en JavaScript: */
const fechas = [
    { mes: "JUNIO", dia: 1, pais: "ARGENTINA", provincia: "BUENOS AIRES", lugar: "ESTADIO TOMAS ADOLFO DUCO" },
    { mes: "JUNIO", dia: 15, pais: "ARGENTINA", provincia: "BUENOS AIRES", lugar: "ESTADIO UNICO DE LA PLATA" },
    { mes: "JULIO", dia: 8, pais: "ARGENTINA", provincia: "CORDOBA", lugar: "ESTADIO MARIO ALBERTO KEMPES" },
    { mes: "JULIO", dia: 22, pais: "ARGENTINA", provincia: "CORDOBA", lugar: "ESTATIO MONUMENTAL DE ALTA CORDOBA" },
    { mes: "JULIO", dia: 29, pais: "ARGENTINA", provincia: "SANTE FE", lugar: "ESTADIO GIGANTE DE ARROYITO" },
    { mes: "AGOSTO", dia: 10, pais: "ARGENTINA", provincia: "SANTE FE", lugar: "ESTADIO MARCELO BIELSA" },
    { mes: "AGOSTO", dia: 28, pais: "ARGENTINA", provincia: "BUENOS AIRES", lugar: "ESTADIO VELEZ SARSFIELD" },
    { mes: "AGOSTO", dia: 29, pais: "ARGENTINA", provincia: "BUENOS AIRES", lugar: "ESTADIO VELEZ SARSFIELD" },
    { mes: "SEPTIEMBRE", dia: 15, pais: "ARGENTINA", provincia: "SAN LUIS", lugar: "AUTODROMO DE LA PEDRERA" },
    { mes: "SEPTIEMBRE", dia: 22, pais: "ARGENTINA", provincia: "MENDOZA", lugar: "ESTADIO MALVINAS ARGENTINAS" },
    { mes: "SEPTIEMBRE", dia: 23, pais: "ARGENTINA", provincia: "MENDOZA", lugar: "ESTADIO MALVINAS ARGENTINAS" },
    { mes: "OCTUBRE", dia: 1, pais: "ARGENTINA", provincia: "SALTA", lugar: "ESTADIO DELMI" },
    { mes: "OCTUBRE", dia: 2, pais: "ARGENTINA", provincia: "JUJUY", lugar: "LA TERMINAL" },
    { mes: "OCTUBRE", dia: 18, pais: "ARGENTINA", provincia: "BUENOS AIRES", lugar: "AUTODROMO DE BUENOS AIRES" },
    { mes: "NOVIEMBRE", dia: 6, pais: "ARGENTINA", provincia: "BUENOS AIRES", lugar: "ESTADIO LIBERTADORES DE AMÉRICA" },
    { mes: "NOVIEMBRE", dia: 18, pais: "ARGENTINA", provincia: "BUENOS AIRES", lugar: "AUTODROMO DE LA PLATA" },
    { mes: "NOVIEMBRE", dia: 26, pais: "ARGENTINA", provincia: "CORDOBA", lugar: "ESTADIO MARIO ALBERTO KEMPES" },
    { mes: "DICIEMBRE", dia: 4, pais: "ARGENTINA", provincia: "TIERRA DEL FUEGO", lugar: "HANGAR DEL VIEJO AEROPUERTO" },
    { mes: "DICIEMBRE", dia: 22, pais: "ARGENTINA", provincia: "RIO NEGRO", lugar: "GIMNASIO MARIA AUXILIADORA" },
    { mes: "DICIEMBRE", dia: 29, pais: "ARGENTINA", provincia: "BUENOS AIRES", lugar: "ESTADIO MONUMENTAL" }]

const sectores = [{ sector: "PLATEA ALTA", precio: 15000 }, { sector: "PLATEA BAJA", precio: 20000 }, { sector: "POPULAR", precio: 10000 }, { sector: "CAMPO", precio: 12500 }, { sector: "CAMPO VIP", precio: 25000 }]

const cantidad = [1, 2, 3, 4, 5]

const productos = [
    { id: 1, nombre: 'Notebook i7', imagen: '../img/merchandising/billeteras/billetera-1.jpg', precio: 1000, categoria: 'Portátiles' },
    { id: 2, nombre: 'Smartphone', imagen: '../img/merchandising/billeteras/billetera-1.jpg', precio: 800, categoria: 'Portátiles' },
    { id: 3, nombre: 'Smartwatch', imagen: '../img/merchandising/billeteras/billetera-1.jpg', precio: 200, categoria: 'Portátiles' },
    { id: 4, nombre: 'Micrófono BT', imagen: '../img/merchandising/billeteras/billetera-1.jpg', precio: 50, categoria: 'Audio' },
    { id: 5, nombre: 'Bafles WiFi', imagen: '../img/merchandising/billeteras/billetera-1.jpg', precio: 80, categoria: 'Audio' },
    { id: 6, nombre: 'Auriculares BT', imagen: '../img/merchandising/billeteras/billetera-1.jpg', precio: 60, categoria: 'Audio' },
    { id: 7, nombre: 'Smart TV', imagen: '../img/merchandising/billeteras/billetera-1.jpg', precio: 600, categoria: 'Televisores' },
    { id: 8, nombre: 'Smart-Cam', imagen: '../img/merchandising/billeteras/billetera-1.jpg', precio: 400, categoria: 'Video' },
    { id: 9, nombre: 'All In One', imagen: '../img/merchandising/billeteras/billetera-1.jpg', precio: 900, categoria: 'Desktop' },
    { id: 10, nombre: 'Play Estéishon', imagen: '../img/merchandising/billeteras/billetera-1.jpg', precio: 300, categoria: 'Videojuegos' },
    { id: 11, nombre: 'Notebook gamer', imagen: '../img/merchandising/billeteras/billetera-1.jpg', precio: 1000, categoria: 'Portátiles' },
    { id: 12, nombre: 'iPhone 14', imagen: '../img/merchandising/billeteras/billetera-1.jpg', precio: 800, categoria: 'Portátiles' },
    { id: 13, nombre: 'Apple watch', imagen: '../img/merchandising/billeteras/billetera-1.jpg', precio: 200, categoria: 'Portátiles' },
    { id: 14, nombre: 'Micrófono', imagen: '../img/merchandising/billeteras/billetera-1.jpg', precio: 50, categoria: 'Audio' },
    { id: 15, nombre: 'Bafles potenciados', imagen: '../img/merchandising/billeteras/billetera-1.jpg', precio: 80, categoria: 'Audio' },
    { id: 16, nombre: 'Auriculares', imagen: '../img/merchandising/billeteras/billetera-1.jpg', precio: 60, categoria: 'Audio' },
    { id: 17, nombre: 'Google TV', imagen: '../img/merchandising/billeteras/billetera-1.jpg', precio: 600, categoria: 'Televisores' },
    { id: 18, nombre: 'Cámara fotográfica', imagen: '../img/merchandising/billeteras/billetera-1.jpg', precio: 400, categoria: 'Video' },
    { id: 19, nombre: 'Monitor 32', imagen: '../img/merchandising/billeteras/billetera-1.jpg', precio: 900, categoria: 'Desktop' },
    { id: 20, nombre: 'Nintendo Wii', imagen: '../img/merchandising/billeteras/billetera-1.jpg', precio: 300, categoria: 'Videojuegos' },
]
