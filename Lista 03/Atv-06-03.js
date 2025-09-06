const prompt = require('prompt-sync')();

let salario = parseFloat(prompt("Digite o salário: "));
let prestacao = parseFloat(prompt("Digite a prestação: "));

let calculo = (prestacao*100)/salario

if(calculo > 20){
    console.log("Empréstimo não pode ser concedido")
}else{
    console.log("Empréstimo pode ser concedido")
}