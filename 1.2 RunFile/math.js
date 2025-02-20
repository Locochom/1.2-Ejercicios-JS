// Definimos las funciones matemáticas básicas
function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    return b !== 0 ? a / b : "Error: División por cero";
}

// Exportamos las funciones para que puedan ser usadas en otro archivo
module.exports = { suma, resta, multiplicacion, division };
