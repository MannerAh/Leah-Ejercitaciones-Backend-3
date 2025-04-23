// Ejercicio 8
// Obtener el resto de la división entera a%b de dos números enteros positivos mediante restas.

let a = 512
let b = 12
let c = a

for (c; c >= a%b; c-=4){
    console.log(c);
}