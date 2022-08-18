const carrito = JSON.parse(localStorage.getItem('carrito')) || []

const seccionCarrito = document.getElementById('carrito')

function mostrarCarrito() {
    seccionCarrito.innerHTML = ""
    if (carrito.length === 0) {
        seccionCarrito.innerHTML = `
    </div>
            <hr>
        <p style="text-align: center">No hay productos</p>
            <hr>
    </div>
    `
    } else {
        for (producto of carrito) {
            const { id, nombre, precio, img, cantidad } = producto
            const productoHTML = `
            <hr>
            <div class="producto-carrito">
                    <img src="../${img}"></img>
                <div class="especificaciones-carrito">    
                    <h3>${nombre}</h3>
                    <p>$${precio}</p>
                    <p>Cantidad: ${cantidad}</p>
                </div>
                <button class="eliminar-carrito" onclick="quitarDelCarrito(${id})">Eliminar</button>
            </div>
            <hr>
            `
            seccionCarrito.innerHTML += productoHTML
        }
    }
}

mostrarCarrito()

function quitarDelCarrito(id) {
    const producto = carrito.find(producto => producto.id == id)
    if(producto.cantidad === 1){
        carrito.splice(carrito.findIndex(producto => producto.id == id), 1)
    } else {
        producto.cantidad--
    }
    mostrarCarrito()
    mostrarResumen()
    guardarCarrito()
}

function guardarCarrito(){
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const seccionResumen = document.querySelector("#resumen")

function mostrarResumen() {
    seccionResumen.innerHTML = ""
    const total = calcularTotal()
    const resumenHTML = `
    <div class="resumen">
    <h1>Resumen</h1>
    <p class="total">Total: $${total}</p>
    <button class="boton-comprar"><a class="boton-comprar" href="../Paginas/comprar.html">Comprar</a></button>
    </div>`

    seccionResumen.innerHTML = resumenHTML
}

mostrarResumen()

function calcularTotal() {
    let total = 0
    for (producto of carrito) {
        total += producto.precio * producto.cantidad
    }
    return total
}