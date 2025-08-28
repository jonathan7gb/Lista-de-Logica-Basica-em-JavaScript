const prompt = require('prompt-sync')();

let temp = parseInt(prompt("Digite uma temperatura em celsius ºC: "));
let fahrenheit = (temp * 9/5) + 32;
console.log(temp + "ºC equivalem a " + fahrenheit + "ºF.");