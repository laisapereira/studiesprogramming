// Filter

/* const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]

const filtrados = numeros.filter(numero => numero > 10)
    console.log(filtrados)

 */

// Retornar pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Luiz', idade:62},
    {nome:'Maria', idade: 23},
    {nome:'Eduardo', idade:55},
    {nome: 'Letícia', idade:19},
    {nome:'Rosana', idade:32},
    {nome:'Wallace', idade:47},
];

const letras = pessoas.filter(pessoa => pessoa.nome.length >= 5)
const idade = pessoas.filter(pessoa => pessoa.idade >= 50)
console.log(idade)

const nomeComA = pessoas.filter(pessoa => {
    return pessoa.nome.toLowerCase().endsWith('a')

})


    console.log(nomeComA)



 
