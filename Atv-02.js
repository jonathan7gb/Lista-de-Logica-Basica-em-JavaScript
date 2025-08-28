const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Digite o 1º número: "));
let num2 = parseFloat(prompt("Digite o 2º número: "));
let num3 = parseFloat(prompt("Digite o 3º número: "));
let soma = num1 + num2 + num3;

console.log(`A soma dos números é: ${soma}`);

if(soma >= 7){
    console.log("Aprovado");
}else if(soma < 7 && soma >= 4){
    console.log("Em Exame");
}else{
    console.log("Reprovado");
}