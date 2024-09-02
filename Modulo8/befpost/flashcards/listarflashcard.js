const { flashcards } = require('../data')

const listarflashcard = (req, res) => {
    res.status(200).send(flashcards)
}

module.exports = listarflashcard