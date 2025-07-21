function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    hora = ('0' + hora).slice(-2)
    minutos = ('0' + minutos).slice(-2)
    
    msg.innerHTML = `Agora são ${hora}:${minutos}`

    if(hora >= 0 && hora < 12 && minutos <= 59){
        img.src = 'imagens/manha.png'
        msg.innerHTML += '<p>Bom dia!</p>'
        document.body.style.background = '#ad9059'
    } else if(hora >= 12 && hora <= 18 && minutos <= 59){
        img.src = 'imagens/tarde.png'
        msg.innerHTML += '<p>Boa tarde!</p>'
        document.body.style.background = '#c16b4d'
    } else{
        img.src = 'imagens/noite.png'
        msg.innerHTML += '<p>Boa noite!</p>'
        document.body.style.background = '#3b4f79'
    }
}