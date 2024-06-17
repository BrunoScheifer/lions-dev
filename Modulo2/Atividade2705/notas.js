var notas = [4, 6, 2, 9, 10, 8, 6, 5, 8, 7]
var soma = 0
var notaMaior = notas[0]
var notaMenor = notas[0]
var acimaMedia = 0
var notasReprovadas = 0

for (i = 0; i < notas.length; i++) {
    soma += notas[i]
}
var media = soma / notas.length
console.log(`A média é ${media}`)

for (i = 0; i < notas.length; i++){
    if (notas[i] > notaMaior) {
        notaMaior = notas[i]
    } else if (notas[i] < notaMenor) {
        notaMenor = notas[i]
    }
}
console.log(`A maior nota é ${notaMaior}`)
console.log(`A menor nota é ${notaMenor}`)

for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= media) {
        acimaMedia ++
    }
}

console.log(`O numero de notas acima da média é ${acimaMedia}`)

notas.push(3)
console.log(`O array atualizado é ${notas}`)

for (i = 0; i < notas.length; i++) {
    if (notas[i] < 8.0) {
        notasReprovadas++
    }
}
console.log(`As notas reprovadas são ${notasReprovadas}`)