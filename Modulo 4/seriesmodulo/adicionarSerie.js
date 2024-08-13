function adicionarSerie(series, rl, callback) {
    rl.question('Qual o nome da série?: ', (nome) => {
        rl.question('Qual o ano de lançamento da série: ', (ano) => {
            rl.question('Qual o genero da série: ', (genero) => {
                rl.question('Qual a classificação indicativa da série: ', (idade) => {
                    rl.question('Qual o diretor(a) da série: ', (diretor) => {

                        series.push({nome: nome, ano: parseInt(ano), genero: genero, idade: idade, diretor: diretor, concluido: false})
                        console.log('Série adicionada com sucesso!')
                        callback()
                    })
                })
            })
        })
    })
}

module.exports = { adicionarSerie }