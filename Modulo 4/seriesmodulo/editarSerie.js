const { listarSerie } = require('./listarSerie')

function editarSerie(series, rl, callback) {
    if (series.length == 0){
		console.log("Não há séries adicionadas")
        callback()
	} else {
        listarSerie(series)
            rl.question('Digite a série que voçê quer editar: ', (numero) => {
                if(numero > 0 && numero <= series.length) {
                    rl.question('Digite o novo nome: ', (nome) => {
                        rl.question('Digite o novo ano: ', (ano) => {
                            rl.question('Digite o novo genero: ', (genero) => {
                                rl.question('Digite a nova classificação: ', (idade) => {
                                    rl.question('Digite o novo diretor: ', (diretor) => {
                                        series[numero - 1] = {
                                            nome,
                                            ano,
                                            genero,
                                            idade,
                                            diretor,
                                        }
                                        console.log('Editado com sucesso')
                                        callback()
                                    })
                                })
                            }) 
                        })
                    })
                } else {
                    console.log('\nNúmero inválido, tente novamente.')
					callback()
                }
            })
        }
    }

module.exports = { editarSerie }