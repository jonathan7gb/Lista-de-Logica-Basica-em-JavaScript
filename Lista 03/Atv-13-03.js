const prompt = require('prompt-sync')();

let capital = parseFloat(prompt("Digite o capital inicial: R$"));
let tempo_meses = parseInt(prompt("Digite o tempo em meses: "));
let taxa = parseFloat(prompt("Digite a taxa de juros mensal (%): "));

function investimo(capital, tempo, taxa){
    let conta = capital * (1+(taxa)) * tempo
    console.log(conta.toFixed(2))
}

investimo(capital, tempo_meses, taxa)