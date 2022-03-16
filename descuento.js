// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClicButtonPriceDiscount() {

    const cupones = [
        "Marco polo",
        "Se la vá o se la piensa",
        "Pues si mi cielo",
    ];

    const inputPrice = parseFloat(document.getElementById("inputPrice").value);
    const inputCupon = document.getElementById("inputCupon").value;

    if (!cupones.includes(inputCupon)) {
        alert("El cupón " + inputCupon + " no es válido");
    } else if (inputCupon === "Marco polo") {
        descuento = 15;
    } else if(inputCupon === "Se la vá o se la piensa") {
        descuento = 25;
    } else if(inputCupon === "Pues si mi cielo") {
        descuento = 30;
    }; 

    const precioConDescuento = calcularPrecioConDescuento(inputPrice, descuento);
    const resultado = document.getElementById("resultado");
    resultado.innerText = "El precio con descuento es $" + precioConDescuento;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });