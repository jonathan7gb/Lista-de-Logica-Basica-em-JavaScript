const prompt = require('prompt-sync')();

let num = parseFloat(prompt("Digite o número: "));

console.log("Valor com Reajuste: " + (num * 1.15).toFixed(2))
