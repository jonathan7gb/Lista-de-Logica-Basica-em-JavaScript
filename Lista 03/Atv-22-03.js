let frutas = ['Maçã', 'Banana', 'Laranja']
console.log(frutas);

console.log(frutas[1]);

frutas.push("Morango")
console.log(frutas);

frutas.shift()
console.log(frutas);

let numeros = [1,2,3,6,7,8]
numeros.push(10)
console.log(numeros);

numeros.pop()
console.log(numeros);

numeros.unshift(1)
console.log(numeros);

numeros.shift()
console.log(numeros);

let frutas2 = ['Manga', 'Abacaxi', 'Melancia']
let todasFrutas = frutas.concat(frutas2)

console.log(todasFrutas);

let duasPrimeiras = todasFrutas.slice(0, 2)
console.log(duasPrimeiras);

todasFrutas.splice(1,1)
console.log(todasFrutas);

