let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
let soma = 0
let media
let notaMaxima = notas[0]
let notaMinima = notas[0]
let acimaMedia = []
let reprovados = 0

for(let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}

for(i = 0; i < notas.length; i++) {
    soma += notas[i]
}
media = soma / notas.length
console.log(`A media das notas é ${media}`)

for(i = 0; i < notas.length; i++) {
    if(notas[i] > notaMaxima) {
        notaMaxima = notas[i]
    } else if(notas[i] < notaMinima) {
        notaMinima = notas[i]
    }
}
console.log(`A nota mais alta é ${notaMaxima}`)
console.log(`A nota mais baixa é ${notaMinima}`)

for(i = 0; i < notas.length; i++) {
    if(notas[i] >= media){
        acimaMedia.push(notas[i])
    }
}
console.log(`As notas acima da média são: ${acimaMedia}`)

notas.push(5.8)
console.log(`O array atualizado é ${notas}`)

for(i = 0; i < notas.length; i++) {
    if(notas[i] < 6.0) {
        reprovados++
    }
}
console.log(`O numero de notas reprovadas são: ${reprovados}`)