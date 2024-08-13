const readline = require('readline')
const { adicionarSerie } = require('./adicionarSerie')
const { editarSerie } = require('./editarSerie')
const { listarSerie } = require('./listarSerie')
const { removerSerie } = require('./removerSerie')
const { marcarConcluido } = require('./marcarConcluido')

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

let series = []

exibirMenu()
function exibirMenu() {
    console.log(`
    Menu:
    1. Adicionar Série
    2. Editar Serie
    3. Listar Séries
    4. Remover Série
    5. Marcar como Concluido
    6. Sair
    `)

rl.question('Escolha uma opção: ', (opcao) => {
    switch(opcao) {
        case '1':
            adicionarSerie(series, rl, exibirMenu)
            break
        case '2':
            editarSerie(series, rl, exibirMenu)
            break
        case '3':
            listarSerie(series)
            exibirMenu()
            break
        case '4':
            removerSerie(series, rl, exibirMenu)
            break
        case '5':
            marcarConcluido(series, rl, exibirMenu)
            break
        case '6':
            rl.close()
            break
        default:
            console.log('Numero invalido, tente denovo!')
            exibirMenu()
            break
        }
    })
}