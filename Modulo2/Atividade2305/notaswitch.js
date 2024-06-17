var nota

console.log('Qual a sua nota?')
process.stdin.once('data', function(data) {
    nota = data.toString().trim()
    nota = (processamento(nota))
    
    if (nota == 'A'||nota == 'B' ||nota == 'C' ) {
        console.log(`Parabens voce foi aprovado com ${nota}`)
} 
    else if (nota == 'D'||nota == 'F') {
        console.log(`Que pena voce foi reprovado com nota ${nota}`)
}
    process.exit()
})

function processamento(nota) {
switch (true) {
    case (nota >= 90 && nota <= 100):
        return 'A'
    case (nota >= 80 && nota <= 89):
        return 'B'
    case (nota >= 70 && nota <= 79):
        return 'C'
    case (nota >= 60 && nota <= 69):
        return 'D'
    case (nota >= 0 && nota <= 59):
        return 'F'
    default:
        console.log('Nota Invalida')
    break;
}}