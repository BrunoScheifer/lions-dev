let dados = [
    {id: 1, nome: 'Breaking Bad', ano: '2008'},
    {id: 2, nome: 'Doctor Who', ano: '1966'},
    {id: 3, nome: 'Community', ano: '2009'}
]

function processarRequest(requisicao) {
    const { acao, id, nome, ano } = requisicao

    switch(acao) {
        case "LISTAR":
            return dados
        case 'ADICIONAR':
            const novaSerie = { id: dados.length + 1, nome, ano }

            dados.push(novaSerie)

            return { mensagem: 'Série adicionada', novaSerie }
        case 'CONSULTAR':
            return dados.find(data => data.nome === nome) || { mensagem: 'Série não encontrada'}
        case 'REMOVER':
            const index = dados.findIndex(data => data.id === id) || { mensagem: 'Não encontrado'}
            return dados.splice(index, 1)
        default:
            return { mensagem: "Ação Invalida" }
    }
}

module.exports = { processarRequest }