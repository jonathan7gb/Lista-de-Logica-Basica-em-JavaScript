var texto = "JavaScript"
var palavra_invertida = ""

for(var i = texto.length - 1; i >= 0; i--){
    palavra_invertida = palavra_invertida + texto[i]
}

console.log(palavra_invertida)