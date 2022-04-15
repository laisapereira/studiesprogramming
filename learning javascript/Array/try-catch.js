
/* try {
    console.log(naoexisto)
} catch (error) {
    console.log('naoexisto nao existe')
    console.log(error)
} */

function soma(x,y) {
    if (
        typeof x !== 'number' || 
        typeof y !== 'number'
        ) {
        throw new Error('x e y precisam ser números') // lançando um novo erro
    }

    return x + y
}


try {
    console.log(soma (1,2));
    console.log(soma ('1',2));  
} catch (error) {       // tratando do erro
    //console.log(error)
    console.log("alog")
}
