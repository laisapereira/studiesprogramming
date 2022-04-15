function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    // var hora = data.getHours()

    var hora = 12
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'pexels-ave-calvar-martinez-3030459.jpg'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src ='Group1.png'
    } else {
        // BOA NOITE!
        img.src = 'Logo.png'
    }
}


