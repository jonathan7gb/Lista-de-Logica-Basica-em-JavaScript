let numeros = [1,2,3,10,20,30,100,200,300]
console.log(numeros);

numeros.join(", ")
console.log(numeros);

numeros.reverse()
console.log(numeros);

let numeros2 = numeros.slice(0,2)
console.log(numeros2);

numeros.sort()
console.log(numeros);

let pares = numeros.filter(function(num){
    return num % 2 === 0
})
console.log(pares);

let quadrados = numeros.map(function(num){
    return num*num;
})
console.log(quadrados);

let soma = numeros.reduce(function(total, num){
    return total + num;
})
console.log(soma);

numeros.forEach(function(num, indice){
    console.log(indice, num);
});
