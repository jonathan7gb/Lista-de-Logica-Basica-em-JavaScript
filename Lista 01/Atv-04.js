const prompt = require('prompt-sync')();

let num = parseInt(prompt("Digite um número: "));
var fatorial = num;

for(let i = num; i >= 2; i--){
    fatorial = fatorial * (i - 1);
}

console.log("O fatorial de " + num + " é: " + fatorial);
