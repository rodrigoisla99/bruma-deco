// // FUNCION DE ORDEN SUPERIOR
const productos = [
    { id: 1, nombre: "Lámpara colgante", cantidad: 1, precio: 1650, img: "lampara-colgante.webp" },
    { id: 2, nombre: "Almohadón bali", cantidad: 1, precio: 1410, img: "almohadon-bali.webp" },
    { id: 3, nombre: "Frascos especieros", cantidad: 1, precio: 385, img: "frascos-especieros.webp" },
    { id: 4, nombre: "Growler", cantidad: 1, precio: 800, img: "growler.webp" },
    { id: 5, nombre: "Dispenser", cantidad: 1, precio: 450, img: "dispenser.webp" },
    { id: 6, nombre: "Almohadón viena", cantidad: 1, precio: 2090, img: "almohadon-viena.webp" },
    { id: 7, nombre: "Frascos kitchen", cantidad: 1, precio: 1080, img: "almohadon-viena.webp" },
    { id: 8, nombre: "Almohadón Bombay", cantidad: 1, precio: 1650, img: "almohadon-viena.webp" },
];

// ARRAY
let articulosCarrito = [];
// let preciosCarrito= [];

const body = document.body;
const vaciarCarrito = document.querySelector('.boton-vaciar');
// const contenedorCarrito = document.querySelector('#lista-carrito');

let resultado = document.querySelector('.contenedor-uno');

let titulo = document.createElement('h1');
titulo.setAttribute('class', 'text-center mt-5');
body.prepend(titulo);


// let input = document.getElementById('input');
// let boton = document.querySelector('#btn');
// const carritoWrapper = document.getElementById("carrito-wrapper");
// const carritoContainer = document.getElementById("carrito-container");


function agregarCarrito(id)
{
    const selected = productos.find(producto => producto.id === id);
    const inCart = articulosCarrito.find(producto => producto.id === selected.id);

    if(inCart == null){
        selected.cantidad = 1;
        selected.total = selected.precio;
        articulosCarrito.push(selected);
    }else{
        inCart.cantidad++;
        inCart.total = selected.precio*inCart.cantidad;
    }

    carritoHTML();

}

function crearTarjetasHTML(zapatillas){
    resultado.innerHTML = "";

    for(const producto of zapatillas){
        resultado.innerHTML += `
                                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12" style="margin:20px 0">
                                    <div class="card product-card" >
                                                <img src=${producto.img} class="card-img-top product-image">
                                        <div class="card-body">
                                                <h5 class="card-title">${producto.nombre}</h5>
                                                <p class="card-text">Marca: ${producto.marca} <br> Precio: $${producto.precio}</p>
                                                <button class="btn btn-primary add-to-cart agregar-carrito" onclick="agregarCarrito(${producto.id})">Añadir Carrito</button>
                                        </div>
                                    </div>
                                </div>    
                                `
    }
};

function carritoHTML(){
    //limpiar HTML
    limpiarHTML();


    //recorre el carrito y crea HTML
    articulosCarrito.forEach(zapatilla => {
        const { img, nombre, precio, cantidad, id } = zapatilla;

        const row = document.createElement('div')
        row.classList.add("cart-item");
        row.innerHTML = `
            <img src="${img}" width="100" />
            <span> ${nombre} </span>
            <span> ${precio} </span>
            <span> ${cantidad} </span>
            <span><div class="close-btn" onclick="eliminarProducto(${id})" >&times;</div></span>
        ` ;

        //agrega el HTML del carrito al tbody
        contenedorCarrito.appendChild(row);
    });

    //agregar el carrito al storage
    sincronizarStorage();

}

function eliminarProducto(id){
    articulosCarrito = articulosCarrito.filter(producto => producto.id != id);
    carritoHTML();  
}

function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito))
}

function limpiarHTML(){
    while (contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}



// const body = document.body;
// const vaciarCarrito = document.querySelector('.boton-vaciar')
// const fondo = document.querySelector(".contenedor-carrito")
// const formulario = document.querySelector('.form-control-nav');
// const boton = document.querySelector('.btn-outline-success');
// const resultado = document.querySelector('#resultado');
// const botonPrueba = document.querySelector('#probando')
// const botonesCarritos = document.querySelectorAll('.anadir-carrito')
// const textoCarrito = document.querySelector(".nombres-elementos-carrito")
// const precioCarrito = document.querySelector(".precios-elementos-carrito")
// const botonCarrito = document.querySelector(".material-symbols-outlined")
// const precioTotal = document.querySelector('.precio-total')


// // // CARRITO
// const mostrar = (elem) => {    
//     const valorViejo = elem.style.visibility
//     if (valorViejo==="visible"){
//         elem.style.visibility = "hidden"
//     }else{
//         elem.style.visibility = "visible"
//     }
    
//     // Operador ternario
//     valorViejo==="visible" ? elem.style.visibility = "hidden" : elem.style.visibility = "visible"
//     }

// botonCarrito.addEventListener('mouseover', () => mostrar(fondo))

// // // AGREGAR PRODUCTOS A CARRITO
// const agregarCarrito = (carrito, preciosCarrito, nombre, precio) => {
//     carrito.push(nombre.innerText)
//     preciosCarrito.push(parseFloat(precio.getAttribute("value")))

//     textoCarrito.innerHTML += `<li>${nombre.innerText}</li>`
//     precioCarrito.innerHTML += `<li>${precio.innerText}</li>`

//     let total=0
//     for (let precio of preciosCarrito) {
//         total += precio
//         // precioTotal = precioTotal+precio
//     }
//     precioTotal.innerHTML = total

// //     // GUARDO MI ARRAY EN FORMATO JSON EN EL LOCAL STORAGE
//     localStorage.setItem("carrito", JSON.stringify(carrito));
//     let carritoAlmacenado = JSON.parse(localStorage.getItem("carrito"))
//     carritoAlmacenado 
// }

// for (let botonCarrito of botonesCarritos){
//     const nombreElemento = botonCarrito.parentNode.querySelector(".nombres-productos")
//     const precioElemento = botonCarrito.parentNode.querySelector(".precios-productos")
//     botonCarrito.addEventListener('click', () => agregarCarrito(carrito, preciosCarrito, nombreElemento, precioElemento))
// }

// // // VACIAR CARRITO
// vaciarCarrito.addEventListener('click', () => {
//     carrito = []; 

// fondo.removeChild(textoCarrito);
// fondo.removeChild(precioCarrito);
// fondo.removeChild(precioTotal);
// })

// // // BUSCADOR EN TIEMPO REAL
// const filtrar = () => {
//     resultado.innerHTML = "";

//     const texto = formulario.value.toLowerCase();
//     for (let producto of productos) {
//         let nombre = producto.nombre.toLowerCase();
//         if (nombre.indexOf(texto) !== -1) {
//             resultado.innerHTML += `
//                 <li>${producto.nombre} - $${producto.precio}</li>
//                 `
//         }
//     }

//     if (resultado.innerHTML === "") {
//         resultado.innerHTML += `
//                 <li>Producto no encontrado</li>
//             `
//     }
// }

// boton.addEventListener('click', filtrar);
// formulario.addEventListener("keyup", filtrar)

// // // EVENTO - ENVIAR FORMULARIO CONTACTO
// const botonEnviar = document.querySelector(".enviar-contacto")// , p = document.querySelector(".mensaje");

// botonEnviar.addEventListener("click", () => {
//     Swal.fire({
//         position: 'top-end',
//         icon: 'success',
//         title: 'Se envío correctamente',
//         showConfirmButton: false,
//         timer: 1500
//       })
// });

// // ENVIAR NEWSLETTER
// const botonEnviarNewsletter = document.querySelector(".enviar-newsletter"), p = document.querySelector(".mensaje-newsletter");

// botonEnviarNewsletter.addEventListener("click", () => {
//     // p.innerText = "Se envío correctamente"
//     Swal.fire('Any fool can use a computer')
// });
   