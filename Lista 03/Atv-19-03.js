let idades = [18, 19, 54, 30, 23]

let idadeMaiores = idades.every(function(idade){
    return idade >= 18;
})

if(idadeMaiores == true){
    console.log("Todas idades maiores que 18!!");
}else{
    console.log("Não são todas idades maiores que 18");
}