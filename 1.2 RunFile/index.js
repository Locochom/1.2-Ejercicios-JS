
/*/Ejercicio 2
// Declaración de variables con diferentes tipos de datos
let nombre = "Juan"; // Tipo string (texto)
const edad = 25; // Tipo número
var esEstudiante = true; // Tipo booleano (true o false)
let habilidades = ["JavaScript", "Node.js", "HTML"]; // Array (lista de valores)
let datos = { ciudad: "CDMX", pais: "México" }; // Objeto con propiedades clave-valor

// Mostrar valores en la consola
console.log("Nombre:", nombre); // Imprime el string "Juan"
console.log("Edad:", edad); // Imprime 25
console.log("Es estudiante:", esEstudiante); // Imprime true
console.log("Habilidades:", habilidades); // Imprime el array completo
console.log("Datos personales:", datos); // Imprime el objeto con ciudad y país
*/

/*/Ejercicio 3

// Creamos un array con diferentes tipos de valores
let elementos = [42, "Hola", true, { nombre: "Carlos" }, [1, 2, 3]];

// Imprimimos el array completo
console.log("Array con diferentes tipos:", elementos);

// Accedemos a elementos específicos del array
console.log("Primer elemento:", elementos[0]); // 42
console.log("Último elemento:", elementos[elementos.length - 1]); // [1, 2, 3]
*/

/*/Ejercicio 4

// Función que recibe dos números y una operación como string
function calcular(num1, num2, operacion) {
    switch (operacion) {
        case "suma":
            return num1 + num2; // Suma los números
        case "resta":
            return num1 - num2; // Resta los números
        case "multiplicacion":
            return num1 * num2; // Multiplica los números
        case "division":
            return num2 !== 0 ? num1 / num2 : "Error: División por cero"; // Evita dividir entre 0
        default:
            return "Operación no válida"; // Devuelve un mensaje si la operación no es válida
    }
}

// Llamadas a la función con diferentes operaciones
console.log("Suma:", calcular(10, 5, "suma")); // 15
console.log("División:", calcular(10, 7, "division")); // Error
*/

/*/Ejercicio 5

// Función flecha que convierte un texto a mayúsculas
const convertirMayusculas = (texto) => console.log(texto.toUpperCase());

// Prueba de la función con un string
convertirMayusculas("hola mundo"); // "HOLA MUNDO"
*/

/*/Ejercicio 6

// Usamos un bucle for para recorrer del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(i); // Imprime cada número en la consola
}
*/

/*/Ejercicio 7

// Creamos un objeto que representa un coche
let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    color: "Rojo"
};

// Mostramos el objeto completo
console.log("Datos del coche:", coche);
*/

/*/Ejercicio 8

// Definimos un objeto llamado 'coche' con algunas propiedades
let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2022,
    color: "Rojo",
    
    // Agregamos un método dentro del objeto
    describir: function () {
        return `Este coche es un ${this.marca} ${this.modelo} del año ${this.anio}, color ${this.color}.`;
    }
};

// Llamamos al método describir e imprimimos el resultado en la consola
console.log(coche.describir());
*/

/*/Ejercicio 9

// Importamos el módulo math.js usando require
const math = require('./math'); // El './' indica que está en el mismo directorio

// Llamamos a las funciones del módulo
console.log("Suma:", math.suma(10, 5)); // Llama a la función suma del módulo
console.log("Resta:", math.resta(10, 5)); // Llama a la función resta del módulo
console.log("Multiplicación:", math.multiplicacion(10, 5)); // Multiplicación
console.log("División:", math.division(10, 5)); // División
*/

/*/Ejercicio 10

// Simula una operación asincrónica
function operacionAsincrona(numero, callback) {
    setTimeout(() => {
        let resultado = numero * 3; // Simula un cálculo
        callback(resultado); // Llama al callback con el resultado
    }, 2000); // Espera 2 segundos
}

// Llamamos a la función con un número y un callback
operacionAsincrona(5, (resultado) => {
    console.log("Resultado de la operación:", resultado);
});
*/

/*/Ejercicio 11

try {
    let cadena = "123abc"; // Contiene letras, no es un número válido
    let numero = parseInt(cadena); // Intentamos convertir a número

    if (isNaN(numero)) { // Verifica si el resultado es un número válido
        throw new Error("No es un número válido");
    }

    console.log("Número convertido:", numero);
} catch (error) {
    console.log("Error:", error.message); // Captura y muestra el error
}
*/
