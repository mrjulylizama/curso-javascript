function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClicButtonPriceDiscount() {

    const inputPrice = parseFloat(document.getElementById("inputPrice").value);
    const inputCupon = document.getElementById("inputCupon").value;

    const cupones = [
        {
            name: "Marco polo",
            descuento: 15,
        },
        {
            name: "Se la vá o se la piensa",
            descuento: 25,
        },
        {
            name: "Pues si mi cielo",
            descuento: 30,
        }
    ];

    const isCouponValueValid = function (cupones) {
        return cupones.name === inputCupon;
    };

    const userCoupon = cupones.find(isCouponValueValid);

    if (!userCoupon) {

        alert("El cupón " + inputCupon + " no es válido");

    } else {
        const descuento = userCoupon.descuento;
        const precioConDescuento = calcularPrecioConDescuento(inputPrice, descuento);
    
        const resultado = document.getElementById("resultado");
        resultado.innerText = "El precio con descuento es $" + precioConDescuento;
    };
};