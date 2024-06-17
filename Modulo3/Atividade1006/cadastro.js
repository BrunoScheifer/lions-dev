const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let funcionarios = []
let salarioMaior

exibirMenu()
function exibirMenu() {
	console.log(`
	Menu:
	1. Cadastrar funcionário
	2. Funcionarios Cadastrados
    3. Funcionario com maior salario
	4. Editar funcionario
    5. Remover funcionario
	6. Sair

	`)

	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarFuncionario()
				break
			case '2':
				funcionariosCadastrados()
				break
            case '3':
                maiorSalario()
                break
            case '4':
                editarFuncionario()
				break
			case '5':
				removerFuncionario()
				break
			case '6':
				rl.close()
                break
			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function cadastrarFuncionario() {
	rl.question('Digite o nome do funcionário: ', (nome) => {
		rl.question('Digite o cargo do funcionário: ', (cargo) => {
			rl.question('Digite o salário do funcionário: ', (salario) => {
				funcionarios.push({ nome: nome, cargo: cargo, salario: parseFloat(salario) })
				console.log('Funcionário cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
}

function funcionariosCadastrados() {
    if(funcionarios.length === 0) {
    	console.log('Nenhum funcionario cadastrado')
    } else {
        console.log('Lista de funcionarios:')
		funcionarios.forEach((funcionarios, index) => {
			console.log(`${index + 1}. 
			nome: ${funcionarios.nome})
			cargo: ${funcionarios.cargo}, 
			salario: R$${funcionarios.salario.toFixed(2)}`)
		})
	}
	exibirMenu()
}

function maiorSalario() {
	if(funcionarios.length == 0) {
		console.log('Nenhum funcionario cadastrado')
	} else {
		salarioMaior = funcionarios[0]
		for(let i = 0; i < funcionarios.length; i++) {
			if(funcionarios[i].salario > salarioMaior.salario) {
				salarioMaior = funcionarios[i]
			}
		}
	console.log(`O funcionario com maior salario é:
		Nome: ${salarioMaior.nome}
		Cargo: ${salarioMaior.cargo}
		Salario: ${salarioMaior.salario.toFixed(2)}`)
	}
	exibirMenu()
}

function editarFuncionario() {
	if (funcionarios.length == 0) {
		console.log('Nenhum funcionario cadastrado')
		exibirMenu()
	} else {
		console.log('Lista de funcionarios')
		funcionarios.forEach((funcionarios, index) => {
			console.log(`${index + 1}. ${funcionarios}`)
		rl.question('Digite o número do elemento que deseja editar: ', (numero) => {
			if (numero > 0 && numero <= funcionarios.length) {
				rl.question('Digite o novo nome: ', (nome) => {
					rl.question('Digite o novo cargo: ', (cargo) => {
						rl.question('Digite o novo salario: ', (salario) => {
							funcionarios[numero - 1] = {
								nome,
								cargo,
								salario
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
)}
}


function removerFuncionario() {
	if (funcionarios.length == 0) {
		console.log('Nenhum funcionario cadastrado')
		exibirMenu()
	} else {
		console.log('Lista de funcionarios')
		funcionarios.forEach((funcionarios, index) => {
			console.log(`${index + 1}. ${funcionarios}`)
		})
		rl.question('Qual funcionario deseja remover: ', (numero) => {
			if (numero > 0 && numero <= funcionarios.length) {
				funcionarios.splice(numero - 1, 1)
				console.log('Funcionario removido!')
				exibirMenu()
			} else {
				console.log('Invalido, tente denovo')
				exibirMenu()
			}
		})
	}
}