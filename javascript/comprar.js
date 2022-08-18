new Cleave('#tarjeta', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
        }
});

new Cleave("#vencimiento", {
    date: true,
    datePattern: ['m', 'y'],
    delimiter: '/'
});

new Cleave("#codigo", {
    numericOnly: true,
    blocks: [4]
});


const botonConfirmarCompra = document.querySelector("#confirmarCompra")// , p = document.querySelector(".mensaje");

botonConfirmarCompra.addEventListener("click", () => {
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'La compra se realizó correctamente',
        showConfirmButton: false,
        timer: 9500
      })
});