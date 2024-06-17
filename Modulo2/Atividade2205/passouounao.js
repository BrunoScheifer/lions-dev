var nota1
var nota2
var resposta

console.log('qual a primeira nota?')
process.stdin.once('data', function(data) {
    nota1 = parseInt(data.toString().trim())
    console.log('qual a segunda nota?')

    process.stdin.once('data', function(data) {
        nota2 = parseInt(data.toString().trim())
        processamento(nota1, nota2)
        process.exit()
    })
})

function processamento(nota1, nota2) {
var media = (nota1 + nota2) / 2

    if (media >= 8) {
        console.log(`Parabens, você passou com a nota ${media}`)
    } else {
        console.log(`Que pena, você ficou de recuperação pois teve media ${media}`)
    }
}