/* /* try {
    // executa quando não há erros
} catch(e) {
    //executa quando há erros
} finally {
    //sempre será executado. pode-se omitir o finally
} */

try {
    
    console.log('Abri um arquivo') // tratar console como ações 
    console.log('Manipulei o arquivo e gerou erro')
    //console.log(naoexisto)
    console.log('Fechei o arquivo');  
    
    try {
        console.log(b)
    } catch (e) {
        console.log('Deu erro')
    }
} catch (e) {
    console.log('Tratando o erro')   
}finally {
    console.log('Eu sempre sou executado finally')
}

// perceba que ele pula o ultimo console.log, pq há um erro
//  mas o finally sempre é executado */