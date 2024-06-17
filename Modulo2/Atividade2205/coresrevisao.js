var coresFavoritas = ['preto', 'azul', 'verde']
var coresEspeciais = []
var corDoUsuario

console.log('qual sua cor favorita?')
process.stdin.once('data', function(data) {
    corDoUsuario = data.toString().trim()
    processamento(corDoUsuario)
    process.exit()
})

function processamento(corDoUsuario) {
    
if (coresFavoritas.includes('preto', 'azul', 'verde')) {
    console.log('A sua cor favorita é uma das da turma')

} else {
    console.log('A sua cor favorita é diferente das da turma vamos adicionar')
    coresEspeciais.push(corDoUsuario)

}
console.log(`as cores favoritas da turma são ${coresFavoritas}`)
console.log(`A sua cor favorita é ${corDoUsuario}`)
console.log(`O numero de cores favoritas são ${coresFavoritas.length}`)
}