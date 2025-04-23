// Ejercicio 4
// Imprimir un listado con los números impares desde 1 hasta 999 y seguidamente otro listado con los
// números pares desde 2 hasta 1000

let imp = 1
let par = 1

for (let imp = 1; imp <= 999; imp++){

    if(imp % 2 === 1){
        console.log(imp);
    }
}
for (let imp = 2; imp <= 999; imp++){

    if(imp % 2 === 0)
        console.log(imp);
}