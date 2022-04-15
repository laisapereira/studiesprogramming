 const nomes  = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana']
 //delete nomes[2] --- nao muda o index, aquele elemento fica vazio
/* 
 const novo = [...nomes] // fiz uma cópia do array de nomes em novo

 const removido = nomes.pop()   //  pop, tal como  shift e unshift removem removendo o index tbm
 const eba = nomes.slice(0,4)

 console.log(eba) */


 //const nome = 'Laisa, da Silva, Pereira'
 //const todos = nome.split(', ')

 const todos = [ 'Laisa', 'da Silva', 'Pereira' ]
 const nome = todos.join(' ')
 
 console.log(nome);