let { flashcards } = require('../data')

function attflashcard(req, res) {
    const { id } = req.params
    const novaPergunta = req.body.pergunta
    const novaResposta = req.body.resposta

    const flashcard = flashcards.find((flash) => flash.id == id)

    flashcard.pergunta = novaPergunta
    flashcard.resposta = novaResposta

    res.status(201).send({mensagem: 'Atualizado', flashcard: flashcard})

}



module.exports = attflashcard