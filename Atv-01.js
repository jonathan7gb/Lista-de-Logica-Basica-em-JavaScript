const prompt = require('prompt-sync')();

let num = parseInt(prompt("Digite um número: "));

if(num > 0){
    console.log("O número é positivo.");
}else if(num < 0){
    console.log("O número é negativo.");
}else{
    console.log("O número é zero.");
}