/* const numeros = [1,2,3,6,8,56,89]

const dobro = numeros.map(numero => numero *2)

console.log(dobro)
 */ 

// para cada elemento:
// retorne apenas uma string com o nome da pessoa
// remova apenas a chave "nome" do objeto
// adicione uma chave id em cada objeto

 const pessoas = [
    {nome: 'Luiz', idade:62},
    {nome:'Maria', idade: 23},
    {nome:'Eduardo', idade:55},
    {nome: 'Letícia', idade:19},
    {nome:'Rosana', idade:32},
    {nome:'Wallace', idade:47},
];

/*
const nome = pessoas.map(pessoa=>{
    return pessoa.nome
})

const nomes = nome.join("   ")

console.log(nomes) */

/* const deletar = pessoas.map(pessoa => {
    delete pessoa.nome
    return pessoa
})

console.log(deletar) */


const Ids = pessoas.map(function (pessoa,index) {
    const newObj = { ...pessoa};
    newObj.id = index;
    return newObj
})

console.log (Ids)
console.log(pessoas)


 



