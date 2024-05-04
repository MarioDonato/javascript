function carregar(){
    var div = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var hora = new Date().getHours()
    var hora = '19'
    div.innerHTML = `Agora sao ${hora} horas`
    if (hora < 12){
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora < 18){
        document.body.style.backgroundColor = '#b9845f'
    } else {
        document.body.style.backgroundColor = '#515154'
    }
}