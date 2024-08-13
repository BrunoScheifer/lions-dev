function listarSerie(series) {
	if (series.length === 0) {
		console.log('Nenhuma série adicionado ainda!')
	} else {
		console.log('Lista de séries:')
		series.forEach((series, index) => {
            console.log(`
            ${index + 1}. Nome: ${series.nome}
            Ano: ${series.ano}
            Genero: ${series.genero}
            Classificação: ${series.idade}
            Diretor: ${series.diretor}
            Status: ${series.concluido}
            `)
        })
    }
}

module.exports = { listarSerie }