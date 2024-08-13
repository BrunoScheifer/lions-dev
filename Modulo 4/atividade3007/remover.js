const {listarContatos} = require('./listar.js')

function removerContato(contatos, prompt, callback) {
    listarContatos(contatos)

    let index = prompt('Qual contato deseja deletar!: ')

    if (index > 0 && index <= contatos.length) {
        contatos.splice(index - 1, 1)
        console.log('Contato deletado!')
    } else {
        console.log('Nenhum contato encontrado')
    }
    callback()
}

module.exports = { removerContato }