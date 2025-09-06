const prompt = require('prompt-sync')();

let num = parseInt(prompt("Digite um número: "));

if(num > 20){
    console.log(num/2)
}