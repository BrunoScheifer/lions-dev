let { baralhos, flashcards } = require('../data')

function delbaralho(req, res) {
    const { id } = req.params
    const index = baralhos.findIndex((bar) => bar.id == id)

    if(index === -1) {
        return res.status(404).send('Baralho não encontrado')
    }

    const baralhodel = baralhos.splice(index, 1)[0] 

    res.status(200).send({mensagem: 'Deletado', baralho: baralhodel})
}

module.exports = delbaralho