const prompt = require('prompt-sync')();

let num = parseFloat(prompt("Digite o número: "));

console.log("Antecessor: " + (num -1)) 
console.log("Numéro: " + (num)) 
console.log("Sucessor: " + (num +1)) 