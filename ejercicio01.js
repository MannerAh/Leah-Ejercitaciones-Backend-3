// Ejercicio 1
// Hacer los algoritmos que calculen el promedio de una serie de notas hasta que se ingrese una nota
// negativa, utilizar las tres estructuras repetitivas.
/* 1. Prompt con notas
    2. Nota negativa para terminar input
    3. Suma de las notas
    4. Calcular el promedio */

const prompt = require('prompt-sync')({ sigint: true })


const tipoCiclo = 3


 //Ciclo for:

 if (tipoCiclo == 1){

let suma = 0;
let iteracion = 0;
let nota;

 for(nota = 0; nota >= 0; iteracion++){
    nota = parseFloat(prompt('Ingresar valor (Ingresar número negativo para salir): '))

    if(nota < 0) {
         break;
     }
     if (isNaN(nota)) {
        console.log('Ingresar un número válido');
        iteracion--;
        continue;
     }
     suma += nota
 }

 let promedio = suma / iteracion;
 console.log('El promedio es: ' + promedio.toFixed(2));

}


// Ciclo do-while:

if (tipoCiclo == 2){

let nota;
let suma = 0
let iteracion = 0;

do{
    nota = parseFloat(prompt('Ingresar valor (Número (-) para terminar): '))

    if (nota < 0){
        break
    }

    if (isNaN(nota)) {
        console.log('Ingresar número válido');
        continue;
    }

    suma += nota
    iteracion++
  
}while(true)

suma += nota

if (iteracion > 0){
const promedio = suma / iteracion
console.log('El promedio de notas es: ' + promedio.toFixed(2));
} else {
    console.log('No se ingresaron notas válidas');
}

}


                        // Ciclo while:

if (tipoCiclo == 3){

let nota = 0 
let suma = 0
let iteracion = 0

while (true) {

    nota = parseFloat(prompt('Digite o valor (Número (-) para terminar): '))

    if (nota < 0){
    break
    }

    if(isNaN(nota)){
        console.log('Digite um número válido');
    continue
    }

    iteracion++
    suma += nota;
}

    

    if (iteracion > 0){

        let media = suma / iteracion;

        console.log('A média das notas é: ' + media.toFixed(2));

    } else {
        console.log('Nenhuma nota válida foi digitada.');
    }

}