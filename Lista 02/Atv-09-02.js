function vogais(texto){
    var totalVogais = 0
    for(var i = 0; i <= texto.length - 1; i++){
        if("aeiouAEIOU".includes(texto[i]) == true){
            totalVogais++
        }
    }

    console.log("Total de vogais: " + totalVogais)
}

vogais("Ola mundo tudo bem com voces")