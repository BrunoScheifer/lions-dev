let { baralhos } = require('../data')

function criarbaralho(req, res) {
    const novoBaralho = {
        id: baralhos.length + 1,
        titulo: req.body.titulo
    }
    baralhos.push(novoBaralho)

    res.status(201).send({mensagem: 'Baralho adicionado', baralhos: novoBaralho})
}

module.exports = criarbaralho