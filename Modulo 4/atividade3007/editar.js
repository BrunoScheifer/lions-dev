const {listarContatos} = require('./listar.js')

function editarContato(contatos, prompt, callback) {
    listarContatos(contatos)

    let index = prompt('Qual contato deseja editar: ')

    if (index > 0 && index <= contatos.length) {
        let novoNome = prompt('Digite o novo Nome: ')
        let novoNumero = prompt('Digite o novo Numero: ')
        let novoEmail = prompt ('Digite o Novo Email: ')
    
    contatos[index - 1].nome = novoNome
    contatos[index - 1].telefone = novoNumero
    contatos[index - 1].email = novoEmail

    console.log('Contato editado com sucesso')
    }

    callback()
}

module.exports = { editarContato }