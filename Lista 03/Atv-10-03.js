const prompt = require('prompt-sync')();

let num = 0
let numeros = []

for(let i = 0; i < 3; i++){
    num = parseFloat(prompt(`Digite o ${i+1}° número: `));
    numeros.push(num)
}

console.log(numeros.sort(function(a, b){
    return b-a;
}))