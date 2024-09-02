let { flashcards } = require('../data')

function delflashcard(req, res) {
    const { id } = req.params
    const index = flashcards.findIndex((flash) => flash.id == id)

    if(index === -1) {
        return res.status(404).send('Flashcard não encontrado')
    }

    const flashcarddel = flashcards.splice(index, 1)[0] 

    res.status(200).send({mensagem: 'Deletado', flashcard: flashcarddel})
}

module.exports = delflashcard