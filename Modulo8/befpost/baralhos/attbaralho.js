let { baralhos } = require('../data')

function attbaralho(req, res) {
    const { id } = req.params
    const novotitulo = req.body.titulo

    const baralho = baralhos.find((bar) => bar.id == id)

    baralho.titulo = novotitulo

    res.status(201).send({mensagem: 'Atualizado', baralho: baralho})

}



module.exports = attbaralho