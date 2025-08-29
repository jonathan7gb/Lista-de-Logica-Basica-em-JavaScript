const prompt = require('prompt-sync')();

let ano = parseInt(prompt("Digite um ano qualquer: "));

if(ano % 4 === 0){
    console.log(ano + " é um ano bissexto.");
}else{
    console.log(ano + " não é um ano bissexto.");
}
