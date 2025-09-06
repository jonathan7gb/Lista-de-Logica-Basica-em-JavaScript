const prompt = require('prompt-sync')();

let valor_produto = parseFloat(prompt("Digite o valor do produto: R$"));
let lucro = 0;

if(valor_produto < 20){
    lucro = 1.45
}else{
    lucro = 1.3
}

console.log("Ele deve vender a R$" + (valor_produto*lucro))
