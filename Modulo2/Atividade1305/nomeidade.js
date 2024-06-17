let nome
let idade
const ano = 2024

console.log('qual seu nome')

process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('qual sua idade')

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
    })
})

function processamento(nome, idade) {
    var nascimento = ano - idade
    console.log(`voce nasceu em ${nascimento} caso nao tenho feito aniversario voce nasceu em ${nascimento-1} .`)

}
