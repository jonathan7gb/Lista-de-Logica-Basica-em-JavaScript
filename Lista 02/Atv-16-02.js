var frutas = ["maçã", "banana", "laranja"]
console.log(frutas[1])
frutas.push("manga")
frutas.shift()
console.log(frutas.length)

for(var i = 0; i <= frutas.length - 1; i++){
    console.log(frutas[i])
}

frutas.forEach(function(item) {
  console.log(item);
});

let frutasOutro = frutas.map(function(fruta) {
  return fruta.length;
});
console.log(frutasOutro); 

let frutasMais5Letras = frutas.filter(function(fruta) {
    if(fruta.length > 5){
        return fruta;
    }
});
console.log(frutasMais5Letras); 


let numeros = [1, 2, 3, 4];
let soma = numeros.reduce(function(total, numero) {
  return total + numero;
}, 0);
console.log(soma); 