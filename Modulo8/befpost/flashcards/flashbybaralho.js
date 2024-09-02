const { flashcards } = require('../data')

function flashbybaralho(req, res) {
    const { idBaralho } = req.params

    const index = flashcards.filter(flash => flash.idBaralho === parseInt(idBaralho))

    if(index.length == 0) {
        res.status(404).send('Baralho não encontrado')
    } else {
        res.status(200).send(index)
    }
}

module.exports = flashbybaralho