// Ejercicio 2
// Realizar la multiplicación de dos números enteros A y B mediante sumas sucesivas, hacer tres
// algoritmos con cada estructura repetitiva.

const tipoCiclo = 3

// // Ciclo for:
if(tipoCiclo == 1){

let a = 16;
let b = 64;
let suma = 0;

for (let i = 1 ; suma < a*b ; i+=2){
    suma += i
    console.log(suma);
    
}
}


// Ciclo while:
if(tipoCiclo == 2){

let a = 40;
let b = 24
let suma = 0

while (suma < a * b){
    suma+=10
    console.log(suma);
}


}

// // Ciclo do-while
if(tipoCiclo == 3){

let a = 55
let b = 90
let suma = 0   

do {
    suma += 5
    console.log(suma);
}   while(suma < a * b)

}