const prompt = require('prompt-sync')({sigint: true})
const {listarContatos} = require('./listar.js')
const {adicionarContato} = require('./adicionar.js')
const {removerContato} = require('./remover.js')
const {editarContato} = require('./editar.js')


let contatos = [
    {nome: 'Alice', telefone: '1234-5678', email: 'alice@example.com' },
    {nome: 'Bob', telefone: '8765-4321', email: 'bob@example.com' },
    {nome: 'Carol', telefone: '5678-1234', email: 'carol@example.com' }
  ];
  

menuContatos()
function menuContatos() {
console.log(`
            Menu de contatos:
            
            1. Listar Contatos
            2. Adicionar Contatos
            3. remover contatos
            4. Editar Contato
            5. Sair do programa

`)

let opção = prompt('escolha uma opção: ')

switch(opção) {
    case '1':
        listarContatos(contatos)
        menuContatos()
        break;
    case '2':
        adicionarContato(contatos, prompt, menuContatos)
        break;
    case '3':
        removerContato(contatos, prompt, menuContatos)
        break;
    case '4':
        editarContato(contatos, prompt, menuContatos)
        break;
    case '5':
        console.log('Saindo')
        process.exit()
        break;
    }
}

