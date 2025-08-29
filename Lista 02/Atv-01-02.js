const prompt = require('prompt-sync')();

let num = parseFloat(prompt("Digite o 1º número: "));
let num2 = parseFloat(prompt("Digite o 2º número: "));


function adicionar(a, b){
    var soma = a + b;
    console.log("Soma: " + soma)
}

adicionar(num, num2)