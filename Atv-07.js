const prompt = require('prompt-sync')();

let palavra = prompt("Digite uma palavra: ");
var palavra_convertida = "";

for(let i = palavra.length - 1; i >= 0; i--){
    palavra_convertida = palavra_convertida + palavra[i]
}

if(palavra == palavra_convertida){
    console.log("A palavra " + palavra + " é um palíndromo.");
    console.log(palavra_convertida);
}else{
    console.log("A palavra " + palavra + " não é um palíndromo.");
    console.log(palavra_convertida);
}