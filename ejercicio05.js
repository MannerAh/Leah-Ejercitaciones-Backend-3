// Ejercicio 5
// Imprimir los números pares desde N (siendo N un número par que se lee) en forma descendente hasta 2.

/* 1. Un número random par N
 2. Contar desde N a 2, DESCENDIENDO par por par*/

 let N = 64

 if (N % 2 === 0){
    for (let i = N; i >=2; i -= 2){
        console.log(i);
    }
 }