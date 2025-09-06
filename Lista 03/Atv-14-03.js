const prompt = require('prompt-sync')();

let palavra = prompt("Digite o palavra: ");
let letra = prompt("Digite a letra: ");

function verificar_letra_palavra(palavra, letra){
    let totalVezesApareceu = 0;
    for(let i = 0; i < palavra.length; i++){
        if(letra === palavra[i]){
            totalVezesApareceu++;
        }
    }

    console.log(`Total de vezes que a letra ${letra} apareceu na palavra ${palavra}: ${totalVezesApareceu}`)
}

verificar_letra_palavra(palavra, letra)