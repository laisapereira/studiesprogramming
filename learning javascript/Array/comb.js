// retorne a soma do dobro de todos os pares
// filtrar pares
//dobrar os valores
// reduzir (somar tudo)

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]

const numerosPares = numeros
.filter(numero => 
    numero%2===0)
    .map(numeroPar => numeroPar *2)
    .reduce(function (acumulador, 
        numeroPar, index) {
        return acumulador += numeroPar
    })
console.log(numerosPares)

