const prompt = require('prompt-sync')();

let texto = prompt("Digite um texto: ");

let palavraMaiuscula = (texto) => "Texto em Caixa Alta: " + texto.toUpperCase()

console.log(palavraMaiuscula(texto))