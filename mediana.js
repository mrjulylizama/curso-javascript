function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;

};

const lista1 = [
    50,
    25,
    80,
    30,
];

lista1.sort(function(a,b){return a - b;});


const mitadlista1 = parseInt(lista1.length / 2);

function esPar(numero) {

    if (numero % 2 === 0){
        return true;
    } else {
        return false
    };

};

function calcularMediana(mediana) {

    if (esPar(lista1.length)) {
        const elemento1 = lista1[mitadlista1 - 1];
        const elemento2 = lista1[mitadlista1];

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
        ]);

    mediana = promedioElemento1y2

    } else {
        mediana = lista1[mitadlista1];
    };

    return mediana;
};