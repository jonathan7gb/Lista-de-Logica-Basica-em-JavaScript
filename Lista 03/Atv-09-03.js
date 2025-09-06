const prompt = require('prompt-sync')();

function ordenarNumeros(numeros = []){
    numeros.sort(function(a,b){
        return a - b;
    });
    console.log(numeros);
}

ordenarNumeros([5,10,2])