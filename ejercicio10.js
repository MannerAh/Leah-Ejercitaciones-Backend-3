// Ejercicio 10
// Imprimir los 100 primeros números de Fibonacci. Recuerde que un número de Fibonacci se calcula
// como la suma de los dos anteriores así: 0, 1, 1, 2, 3, 5, 8, 13...

/*  1. Sumar F */

let a = 0
let b = 1
let f = 100

console.log(a);
console.log(b);

for (let i = 2; i < f; i++){
    let siguiente = a + b;  
    console.log(siguiente);
    a = b
    b = siguiente;
}