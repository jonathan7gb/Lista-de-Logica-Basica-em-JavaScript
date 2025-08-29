function funcaoEspecial(numeros = [], num){
    var total = 0;
    for(var i = 0; i <= numeros.length; i++){
        if(numeros[i] == num){
            total++
        }
    }
    console.log(total)
}


funcaoEspecial([1,2,3,3,3,4,5,5,5,5,6,6,6], 6)