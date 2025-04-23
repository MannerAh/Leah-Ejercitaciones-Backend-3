// Ejercicio 9
// Imprimir los números de 1 a N (siendo N un número que se lee) cada uno con su respectivo factorial.

/*  1. Número N
    2.  */

    let N = 5

    for (let i= 1; i <= N; i++){
        let factorial = 1;
        for (let j = 1; j <= i; j++){
            factorial = factorial * j;
        }
        console.log(i + '! = ' + factorial);
    }