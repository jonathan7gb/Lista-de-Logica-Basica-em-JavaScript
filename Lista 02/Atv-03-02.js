const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Digite o 1º número: "));
let num2 = parseFloat(prompt("Digite o 2º número: "));

var produto = (a, b) => "Produto (Multiplicação): " + a * b;

console.log(produto(num1, num2 ))