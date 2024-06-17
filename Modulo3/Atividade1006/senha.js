let senha = ''
let numeroAleatorio
let comprimentoSenha
let caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'

console.log('Quantos caracteres tem a senha')
process.stdin.once('data', function(data) {
    comprimentoSenha = parseInt(data)

for(let i = 0; i < comprimentoSenha; i++) {
    numeroAleatorio = Math.floor(Math.random() * caracteres.length)
    senha = senha + caracteres.charAt(numeroAleatorio)
    }
    console.log(senha)
    process.exit()
})
