let { flashcards } = require('../data')

function criarflashcard(req, res) {
    const novoFlashcard = {
        id: flashcards.length + 1,
        pergunta: req.body.pergunta,
        resposta: req.body.resposta,
        idBaralho: parseInt(req.body.idBaralho)
    }
    flashcards.push(novoFlashcard)

    res.status(201).send({mensagem: 'Flashcard adicionado', flashcards: novoFlashcard})
}

module.exports = criarflashcard