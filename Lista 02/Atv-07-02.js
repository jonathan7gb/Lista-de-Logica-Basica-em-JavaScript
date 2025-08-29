
function funcaoEspecial(numeros = [], num){
    var numerosNaCondicao = []
    for(var i = 0; i <= numeros.length -1; i++){
        if(numeros[i] > num){
            numerosNaCondicao.push((numeros[i]))
        }
    }
    console.log(numerosNaCondicao)
}

funcaoEspecial([1,2,3,4,5,6,7,8,9], 6)
