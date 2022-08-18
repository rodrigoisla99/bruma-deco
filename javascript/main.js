async function fetchProductos() {
    const response = await fetch('../bruma-deco/paraCasa.json');
    return await response.json(); 
}

const seccionProductos = document.querySelectorAll("#productos")

function mostrarCatalogo () {
    for (producto of catalogo) {
        const {id, nombre, precio, img} = producto
        const productoHTML = `
        <section id="menu-carrito">
        <div class="productos">
            <img src="${img}"></img>
            <h3>${nombre}</h3>
            <p>$${precio}</p>
            <button class="anadir-carrito" onclick="sumarAlCarrito(${id})">Agregar al carrito</button>
        </div>
        </section>
    `
    seccionProductos.innerHTML += productoHTML
    }
};

let catalogo = [];

fetchProductos().then(productos => {
    catalogo = productos
    mostrarCatalogo() 
});

const carrito = JSON.parse(localStorage.getItem('carrito')) || []

function sumarAlCarrito (id) {
    const producto = catalogo.find(producto => producto.id == id) 

    if (carrito.find(producto => producto.id == id)) {
        const producto = carrito.find(producto => producto.id == id)
        producto.cantidad++
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        })
    }
    guardarCarrito()
};

function guardarCarrito(){
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const contadorCarrito = document.getElementById('contadorCarrito')

contadorCarrito.innerText = carrito.length


// ESTO ES LO QUE TENIA Y SIRVE
// // ARRAY
// let carrito = [];
// let preciosCarrito= [];

// // // FUNCION DE ORDEN SUPERIOR
// const productos = [
//     { id: 1, nombre: "Lámpara colgante", cantidad: 1, precio: 1650, img: "lampara-colgante.webp" },
//     { id: 2, nombre: "Almohadón bali", cantidad: 1, precio: 1410, img: "almohadon-bali.webp" },
//     { id: 3, nombre: "Frascos especieros", cantidad: 1, precio: 385, img: "frascos-especieros.webp" },
//     { id: 4, nombre: "Growler", cantidad: 1, precio: 800, img: "growler.webp" },
//     { id: 5, nombre: "Dispenser", cantidad: 1, precio: 450, img: "dispenser.webp" },
//     { id: 6, nombre: "Almohadón viena", cantidad: 1, precio: 2090, img: "almohadon-viena.webp" },
//     { id: 7, nombre: "Frascos kitchen", cantidad: 1, precio: 1080, img: "almohadon-viena.webp" },
//     { id: 8, nombre: "Almohadón Bombay", cantidad: 1, precio: 1650, img: "almohadon-viena.webp" },
// ];

const body = document.body;
const vaciarCarrito = document.querySelector('.boton-vaciar')
const fondo = document.querySelector(".contenedor-carrito")
const formulario = document.querySelector('.form-control-nav');
const boton = document.querySelector('.btn-outline-success');
const resultado = document.querySelector('#resultado');
const botonPrueba = document.querySelector('#probando')
const botonesCarritos = document.querySelectorAll('.anadir-carrito')
const textoCarrito = document.querySelector(".nombres-elementos-carrito")
const precioCarrito = document.querySelector(".precios-elementos-carrito")
const botonCarrito = document.querySelector(".material-symbols-outlined")
const precioTotal = document.querySelector('.precio-total')


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

// botonCarrito.addEventListener('click', () => mostrar(fondo))

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

// BUSCADOR EN TIEMPO REAL
// const filtrar = () => {
//     resultado.innerHTML = "";

//     const texto = formulario.value.toLowerCase();
//     for (let producto of productos) {
//         let nombre = producto.nombre.toLowerCase();
//         if (nombre.indexOf(texto) !== -1) {
//             resultado.innerHTML += `
//                 <li>${producto.nombre} - $${producto.precio}</li>
//             `
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

// // EVENTO - ENVIAR FORMULARIO CONTACTO
const botonEnviar = document.querySelector(".enviar-contacto")// , p = document.querySelector(".mensaje");

botonEnviar.addEventListener("click", () => {
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Se envío correctamente',
        showConfirmButton: false,
        timer: 1500
      })
});


// EVENTO - ENVIAR NEWSLETTER
const botonEnviarNewsletter = document.querySelector(".enviar") , p = document.querySelector(".mensaje");

botonEnviarNewsletter.addEventListener("click", () => {
    // p.innerText = "Se envío correctamente" (no funciona)
    Swal.fire('Se envío correctamente')
});
// HASTA ACA ES LO QUE TENIA Y SIRVE
   














// NO SIRVE PERO POR LAS DUDAS NO LO BORRO TODAVIA

// // FUNCION
// function saludar () {
//     let nombreUsuario = prompt ("Ingrese su nombre de usuario"); 

//    alert ("Hola " + nombreUsuario);
// }

// saludar()

// let ingreso= prompt("Buscá un producto o mirá todo el catalogo en el siguiente menú")

// function filtrarProducto(arr,filtro){
//    const filtrado= arr.filter((el)=>{
//        return el.nombre.includes(filtro)
//    });
//    return filtrado;
// }

// const productoFiltrado= filtrarProducto(productos,ingreso)
// console.log(productoFiltrado)


// let valorParcial=0
// let valorFinal=0

// for(i=0; i<7;i++){
//    let articuloSeleccionado=prompt("¿Que producto queres llevar?\n Seleccioná hasta 5 articulos \n\n 1-Lampara colgante ($1.650) \n 2-Almohadón Bali ($1.410) \n 3-Frascos especieros ($385) \n 4-Growler ($800) \n 5-Dispenser ($450) \n 6-Almohadón Viena ($2.090) \n 7-Salir");

//    if (i==7) {
//        valorFinal=valorParcial
//        alert("Muchas gracias por tu compra, el valor de la misma es de $"+valorFinal);
//        break
//    }

//    else if((articuloSeleccionado!=7)&&(articuloSeleccionado!=0)){
//        switch(articuloSeleccionado){
//            case"1": valorParcial=valorParcial+1650;
//            alert("Seleccionaste una lampara colgante - El subtotal de tu compra es: $"+valorParcial);
//            carrito.push("lampara colgante")
//            break;

//            case"2": valorParcial=valorParcial+1410;
//            alert("Seleccionaste un almohadón Bali - El subtotal de tu compra es: $"+valorParcial);
//            carrito.push("almohadón bali")
//            break;

//            case"3": valorParcial=valorParcial+385;
//            alert("Seleccionaste un frasco especiero - El subtotal de tu compra es: $"+valorParcial);
//            carrito.push("frasco especiero")
//            break;

//            case"4": valorParcial=valorParcial+800;
//            alert("Seleccionaste un growler - El subtotal de tu compra es: $"+valorParcial);
//            carrito.push("growler")
//            break;

//            case"5": valorParcial=valorParcial+450;
//            alert("Seleccionaste un dispenser - El subtotal de tu compra es: $"+valorParcial);
//            carrito.push("dispenser")
//            break;

//            case"6": valorParcial=valorParcial+2090;
//            alert("Seleccionaste un almohadón viena - El subtotal de tu compra es: $"+valorParcial);
//            carrito.push("almohadón viena")
//            break;

//            default:
//                alert("Por favor seleccioná una opción valida")
//        }
//    }

//    else if(articuloSeleccionado==7){
//        valorFinal=valorParcial;
//        alert("Seleccionaste estos elementos: " + carrito + "\n\n El valor final de tu compra es $" + valorFinal);
//        break;
//    }

//    else if(articuloSeleccionado==0){
//        alert("Muchas gracias " + nombreUsuario);
//        break;
//    }
// }