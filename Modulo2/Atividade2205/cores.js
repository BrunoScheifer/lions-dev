var coresFavoritas = ['preto', 'azul', 'verde']
var coresEspeciais = []
var corDoUsuario

console.log('Qual sua cor favorita?')
process.stdin.once('data', function(data) {
    corDoUsuario = data.toString().trim()
    processamento(corDoUsuario)
    process.exit()
})

function processamento(corDoUsuario) {
    if (coresFavoritas.includes(corDoUsuario)) {
    console.log('A sua cor favorita é uma das favoritas da turma')
} else {
    console.log('A sua cor favorita é diferente das da turma vamos adicionar')
    coresEspeciais.push(corDoUsuario)
}
console.log(`As cores favoritas são ${coresFavoritas}`)
console.log(`A cores especiais são ${coresEspeciais}`)
console.log(`A quantidade de cores é ${coresFavoritas.length}`)
}