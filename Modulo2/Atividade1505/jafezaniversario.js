let nome
let idade
let jaFezAniversario
let resposta
const ano = 2024

console.log('qual seu nome')

process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('qual sua idade')

    process.stdin.once('data', function(data) {
        idade = data.toString().trim()
        
        console.log('voce ja fez aniversario este ano?')
        process.stdin.once('data', function(data) {
            resposta = data.toString().trim()
            processamento (nome, idade, resposta)
            process.exit()
        })
    })
})

function processamento(nome, idade, jaFezAniversario) {
    var nascimento = ano - idade
    
    if (resposta == 'sim') {
        jaFezAniversario = true
    } else {
        jaFezAniversario = false
    }
    
    if (jaFezAniversario == true) { 
        console.log(`${nome}, você nasceu em ${nascimento}.`)
    } else {
        console.log(`${nome}, você nasceu em ${nascimento - 1}.`)
    }
}