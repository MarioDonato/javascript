function verificar(){
    var ano = new Date().getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value == 0 || Number(fano.value) > ano){
        alert('Erro. Verifique as dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radioname')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'

            if (idade <= 10){
                //crianca
                img.setAttribute('src', 'imagens/cirancah.jpg')
            } else if (idade <= 21){ 
                //jovem
            } else if (idade <= 50){
                //adulto
            } else {
                //veio
            }

        } else {
            genero = 'Mulher'
            if (idade <= 10){
                //crianca
            } else if (idade <= 21){ 
                //jovem
            } else if (idade <= 50){
                //adulto
            } else {
                //veio
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um ${mae} ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}