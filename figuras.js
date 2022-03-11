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

    function perimetroTriangulo(lado1, lado2, base) {
        return lado1 + lado2 + base;
    };

    function areaTriangulo (base, altura) {
        return (base * altura) / 2;
    };

    function alturaTriangulo(lado1, lado2, base) {
       if (lado1 === lado2){
            lado1Elevado = Math.pow(lado1,2);
            base = base / 2;
            baseElevado = Math.pow(base,2);
            resta = lado1Elevado - baseElevado;
            altura = Math.sqrt(resta);
            return altura;
       }else{
         console.log("Lado 1 y lado 2 tienen que ser el mismo número");
       };
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

// Aquí interactuamos con el HTML
// Funciones para Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
};

// Funciones para Triángulo

function calcularPerimetroTriangulo() {
    const lado1 = parseFloat(document.getElementById("inputTrianguloLado1").value);
    const lado2 = parseFloat(document.getElementById("inputTrianguloLado2").value);
    const base = parseFloat(document.getElementById("inputTrianguloBase").value);
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
};

function calcularAreaTriangulo() {
    const base = document.getElementById("inputTrianguloBase").value;
    const altura = document.getElementById("inputTrianguloAltura").value;
    const area = areaTriangulo(base, altura);
    alert(area);
};

// Funciones para Circulo

function calcularAreaCirculo() {
    const dato = parseFloat(document.getElementById("inputRadioCirculo").value);
    const area = areaCirculo(dato);
    alert(area);
};

function calcularDiametroCirculo() {
    const dato = parseFloat(document.getElementById("inputRadioCirculo").value);
    const diametro = diametroCirculo(dato);
    alert(diametro);
};

function calcularPerimetroCirculo() {
    const dato = parseFloat(document.getElementById("inputRadioCirculo").value);
    const perimetro = perimetroCirculo(dato);
    alert(perimetro);
};