const { flashcards } = require('../data')

function flashbypergunta(req, res) {
    const { per } = req.query

    const index = flashcards.filter(flash => flash.pergunta.toLowerCase().includes(per.toLowerCase()))

    if(index.length == 0) {
        res.status(404).send('Pergunta não encontrada')
    }

    res.status(200).send(index)
}

module.exports = flashbypergunta