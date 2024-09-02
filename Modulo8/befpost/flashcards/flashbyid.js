const { flashcards } = require('../data')

function flashbyid(req, res) {
    const { id } = req.params
    let flash = flashcards.find(flash => flash.id == id)

    if(!flash) {
        return res.status(404).send('Flashcard não encontrado')
    }
    
    res.status(200).send(flash)
}

module.exports = flashbyid