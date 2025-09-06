const prompt = require('prompt-sync')();

let idade = parseInt(prompt("Digite a idade: "));

if(idade < 16){
    console.log("Não eleitor!")
}else if(idade > 65 || idade < 18 && idade >= 16){
    console.log("Eleitor Facultativo!")
}else{
    console.log("Eleitor Obrigatório!")
}
