const carrito = JSON.parse(localStorage.getItem('carrito')) || []

const seccionCarrito = document.getElementById('carrito')

function mostrarCarrito() {
    seccionCarrito.innerHTML = ""
    if (carrito.length=== 0) {`
    <div style="text-align: center">
        <p>No hay productos</p>
        <a class:"btn" href="/"> Volver al catalogo</a>
        <a href="/">Volver al catalogo</a>
    </div>
    `
    } else {
        for (producto of carrito) {
            const { id, nombre, precio, img, cantidad } = producto
            const productoHTML = `
            <div class="producto-carrito">
                <img src="./${img}"></img>
                <h3>${nombre}</h3>
                <p>${precio}</p>
                <p>Cantidad:${cantidad}</p>
                <button class="btn" onclick="quitarDelCarrito(${id})">Eliminar</button>
            </div>
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
    <h3>Resumen</h3>
    <p>Total: $${total}</p>
    <a class="btn" href="../Paginas/comprar.html">Comprar</a>
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