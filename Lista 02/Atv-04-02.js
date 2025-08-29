const prompt = require('prompt-sync')();

let num = parseInt(prompt("Digite um número: "));

function ehPar(a){
    if(a % 2 === 0){
        console.log("É par: " + true)
    }else{
        console.log("É par: " + false)
    }
}

ehPar(num)