var agora = new Date().getDay()

// pega o dia da semana na hordem dos js
/* 
domingo = 0
segunda = 1
terca = 2
quarta =3
quinta = 4
sexta = 5 
sabado = 6
*/
var lol = `o dia da semana eh `
switch(agora){
    case 0:
        lol += `domingo`
        break
    case 1:
        lol +=`segunda`
        break
    case 2:
        lol +=`terca`
        break
    case 3:
        lol +=`quarta`
        break
    case 4:
        lol +=`quinta`
        break
    case 5:
        lol +=`sexta`
        break
    case 6:
        lol +=`sabado`
        break
    default:
        lol +=`ERRO`
}
console.log(`${lol}`)