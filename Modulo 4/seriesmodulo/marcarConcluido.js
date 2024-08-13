const { listarSerie } = require('./listarSerie')

function marcarConcluido(series , rl, callback) {
	if (series.length === 0) {
		console.log('Nenhuma série adicionada ainda!')
		callback()
	} else {
		listarSerie(series)
		rl.question('Qual série voçê quer marcar como concluida?: ', (numero) => {
			if (numero > 0 && numero <= series.length) {
				series[numero-1].concluido = true
			}
			console.log("Marcado com sucesso")
			callback()
		}
	)}
}

module.exports = { marcarConcluido }