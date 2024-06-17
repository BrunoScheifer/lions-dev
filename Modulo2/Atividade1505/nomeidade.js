let nome
let idade

console.log('Quantos seu nome?')
process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('Qual sua idade?')

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
    })
})

function processamento(nome, idade) {
    var falta = 18 - idade    
    
    if (idade >= 18) {
        console.log(`${nome}, você é maior de idade`)
    } else {
        console.log(`${nome}, você não é maior de idade e falta ${falta} anos para ser`)
    }
}