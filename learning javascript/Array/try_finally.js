function retornaHora (data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de data')
    }

    if (!data) {
        data = new Date()
    }
    
    return data.toLocaleTimeString ('pt-BR', {
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12:true     // formato de 12
    })

}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch(e) {
    // tratar o erro
}finally {
    console.log ('Tenha um bom dia');
}


