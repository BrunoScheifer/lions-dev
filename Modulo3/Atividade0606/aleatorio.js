let dado

console.log('Quantos lados tem o dado?')
process.stdin.once('data', function(data) {
    dado = parseInt(data.toString().trim())
    processamento(dado)
    process.exit()
})

function processamento(dado) {
    console.log(Math.floor(Math.random() * dado) + 1)
}