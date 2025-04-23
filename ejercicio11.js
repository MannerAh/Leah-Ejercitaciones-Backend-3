// 11. Calcular el factorial de 10 números diferentes cuyos valores se leen.

const prompt = require('prompt-sync')({sigint:true});

for (let i = 1; i<=10; i++){
    let numero = parseFloat(prompt(`Ingrese el número ${i}: `))

    if (isNaN(numero)){
        console.log('Ingresa un número válido');
        i--;
        continue;
    }
    
    if (numero<0){
        console.log('El factorial no se puede calcular en números negativos');
    }

    let factorial = 1;
       
    for (let j = 1; j <= numero; j++){
            factorial = factorial * j;
        }
        console.log(i + '! = ' + factorial);
}