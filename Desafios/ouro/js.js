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
        if (fsex[0].checked){
            genero = ' Homem'
            if (idade <= 10){
                //crianca
                img.setAttribute('src', 'imagens/cirancah.jpg')
            } else if (idade <= 21){ 
                img.setAttribute('src', 'imagens/jovemm.jpg')
                //jovem
            } else if (idade <= 50){
                img.setAttribute('src', 'imagens/adultoh.jpg')
                //adulto
            } else {
                img.setAttribute('src', 'imagens/velhoh.jpg')
                //veio
            }

        } else {
            genero = 'a Mulher'
            if (idade <= 10){
                img.setAttribute('src', 'imagens/criancam.jpg')
                //crianca
            } else if (idade <= 21){ 
                img.setAttribute('src', 'imagens/jovemm.jpg')
                //jovem
            } else if (idade <= 50){
                img.setAttribute('src', 'imagens/adultom.jpg')
                //adulto
            } else {
                img.setAttribute('src', 'imagens/velhom.jpg')
                //veio
            }
        }
        res.innerHTML = `Detectamos um${genero} com ${idade} anos`

    }
}