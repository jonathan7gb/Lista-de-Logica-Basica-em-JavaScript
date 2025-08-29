const prompt = require('prompt-sync')();

var numeros = []

for(var i = 1; i <= 5; i++){
    let num = parseInt(prompt("Digite um número: "));
    numeros.push(num)
}


function calcularMedia(numeros = []){
    var soma = numeros.reduce(function(total, numero){return total + numero}, 0)
    var media = soma / numeros.length
    console.log("A média do números é: " + media)
}

calcularMedia(numeros)