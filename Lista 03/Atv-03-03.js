const prompt = require('prompt-sync')();

let velocidade_media = parseInt(prompt("Digite a velocidade média: "));
let tempo_horas = parseInt(prompt("Digite a o tempo em horas: "));

let calculo = velocidade_media * tempo_horas
console.log("Distância percorrida: " + calculo + " kilometros")
