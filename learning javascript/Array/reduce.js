// some todos os numeros (reduce)
// retorne um aray com os pares (filter)
// retorne um array com o dobro dos valores (map)


const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]
/* const total = numeros.reduce(function(acumulador, numero, index,array ){
    acumulador += numero
    return acumulador
}, 0)

console.log(total) */ 

/* const total = numeros.reduce(function (acumulador,numero, index,array ){
    //if (numero % 2 === 0) acumulador.push(numero)
    // acumulador.push(numero*2)

    if (numero % 2 === 0) {
        acumulador += numero
    }
    return acumulador
   
}, 0)

console.log(total) */


const pessoas = [
    {nome: 'Luiz', idade:62},
    {nome:'Maria', idade: 230},
    {nome:'Eduardo', idade:55},
    {nome: 'Letícia', idade:19},
    {nome:'Rosana', idade:32},
    {nome:'Wallace', idade:47},
];

const Older = pessoas.reduce(function (acumulador, pessoa, index){
   if (acumulador.idade > pessoa.idade) return acumulador
   return pessoa
    
    
})

console.log(Older)
