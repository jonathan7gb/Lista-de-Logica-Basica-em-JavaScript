const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Digite o 1º número: "));
let num2 = parseFloat(prompt("Digite o 2º número: "));

function subtrair(a, b){
    var subtracao = a - b
    console.log("Diferença entre eles: " + subtracao)
}

subtrair(num1, num2)