const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let jogos = []

exibirMenu()
function exibirMenu() {
	console.log(`
	Menu:
	1. Cadastrar jogo
	2. jogos escolhidos
	3. Editar jogo
    	4. Remover jogo
	5. Sair

	`)

	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarJogo()
				break
			case '2':
				jogosEscolhidos()
				break
            case '3':
                editarJogo()
				break
			case '4':
				removerJogo()
				break
			case '5':
				rl.close()
                break
			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function cadastrarJogo() {
	rl.question('Digite o nome do jogo: ', (nome) => {
		rl.question('Digite o tipo do jogo: ', (tipo) => {
			rl.question('Digite a desenvolvedora do jogo: ', (desenvolvedor) => {
				jogos.push({ nome: nome, tipo : tipo, desenvolvedor: (desenvolvedor) })
				console.log('Jogo adicionado com sucesso!')
				exibirMenu()
			})
		})
	})
}

function jogosEscolhidos() {
    if(jogos.length == 0) {
    	console.log('Nenhum jogo adicionado')
    } else {
        console.log('Lista de jogos:')
		jogos.forEach((jogos, index) => {
			console.log(`${index + 1}. nome: ${jogos.nome}
			tipo: ${jogos.tipo}, 
			desenvolvedor: ${jogos.desenvolvedor}`)
		}
	)}
	exibirMenu()
}

function editarJogo() {
	if (jogos.length == 0) {
		console.log('Nenhum jogo cadastrado')
		exibirMenu()
	} else {
		console.log('Lista de jogos')
		jogos.forEach((jogos, index) => {
			console.log(`${index + 1}. ${jogos.nome}`)
		})
		rl.question('Digite o número do elemento que deseja editar: ', (numero) => {
			if (numero > 0 && numero <= jogos.length) {
				rl.question('Digite o novo nome: ', (nome) => {
					rl.question('Digite o novo tipo: ', (tipo) => {
						rl.question('Digite a nova desenvolvedora: ', (desenvolvedor) => {
							jogos[numero - 1] = {
								nome,
								tipo,
								desenvolvedor
							}
							console.log('editado com sucesso!')
							exibirMenu()
						})
					})
				})
			} else {
				console.log('Número inválido, tente novamente.')
				exibirMenu()
			}
		})
	}
}

function removerJogo() {
	if (jogos.length == 0) {
		console.log('Nenhum jogo adicionado')
		exibirMenu()
	} else {
		console.log('Lista de jogos')
		jogos.forEach((jogos, index) => {
			console.log(`${index + 1}. ${jogos}`)
		})
		rl.question('Qual jogo deseja remover: ', (numero) => {
			if (numero > 0 && numero <= jogos.length) {
				jogos.splice(numero - 1, 1)
				console.log('Jogo removido!')
				exibirMenu()
			} else {
				console.log('Invalido, tente denovo')
				exibirMenu()
			}
		})
	}
}