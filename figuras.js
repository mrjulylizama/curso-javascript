// Código del cuadrado
console.group("Cuadrados");
    
    function perimetroCuadrado(lado) {
        return lado * 4;
    };

    function areaCuadrado(lado) {
        return lado * lado;
    };

console.groupEnd();

// Código del Tríangulo
console.group("Triangulo");

    function perimetroTriangulo (lado1, lado2, base) {
        return lado1 + lado2 + base;
    };

    function areaTriangulo (base, altura) {
        return (base * altura) / 2;
    };

console.groupEnd();

// Código del círculo
console.group("Circulo");

// Radio
    function radioCirculo (radio) {
        return radio;
    };

//  Díametro
    function diametroCirculo (radio) {
        return radio * 2;
    };

// PI
    const PI = Math.PI;
    console.log("El PI es: " + PI);

// Circurferencia
    function perimetroCirculo (radio) {
        const diametro = diametroCirculo(radio);
        return diametro * PI;
    };

// Área    
    function areaCirculo (radio) {
        return (radio * radio) * PI
    };

console.groupEnd();