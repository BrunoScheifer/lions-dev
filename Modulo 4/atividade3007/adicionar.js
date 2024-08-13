const {listarContatos} = require('./listar.js')

function adicionarContato(contatos, prompt, callback) {
    listarContatos(contatos)

    console.log('Digite as informações do contato!: ')

    let nome = prompt('Digite o nome da pessoa: ')
    let telefone = prompt('Digite o telefone da pessoa: ')
    let email = prompt('Digite o email da pessoa: ')

    let novoContato = {
        nome: nome,
        telefone: telefone,
        email: email
    }

    contatos.push(novoContato)
    console.log('Contato Adicionado!')

    callback()
}

module.exports = { adicionarContato }