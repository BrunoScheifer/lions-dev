const { processarRequest } = require('./server')

function solicitarListagem() {
    const requisicao = { acao: 'LISTAR' }
    const resposta = processarRequest(requisicao)

    console.log('Lista de séries: ', resposta)
}

function solicitarAdicao(nome, ano) {
    const requisicao = { acao: 'ADICIONAR', nome, ano}
    const respostaServidor = processarRequest(requisicao)

    console.log('Resposta: ', respostaServidor)
}

function solicitarConsulta(nome) {
    const requisicao = { acao: 'CONSULTAR', nome}
    const resposta = processarRequest(requisicao)

    console.log('Resposta: ', resposta)
}

function solicitarRemocao(id) {
   const requisicao = { acao: 'REMOVER', id}
   const resposta = processarRequest(requisicao)

   console.log('Removido', resposta)
}

solicitarListagem()
solicitarConsulta('Doctor Who')
solicitarAdicao('sim', 'nao')
solicitarListagem()
solicitarRemocao(4)
solicitarListagem()