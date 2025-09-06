const prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Digite o 1° número: "));
let num2 = parseInt(prompt("Digite o 2° número: "));

let soma = num1 + num2

if(soma > 10){
    console.log(soma)
}
