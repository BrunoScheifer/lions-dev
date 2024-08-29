const { baralhos } = require('../data')

const listarbaralho = (req, res) => {
    res.status(200).send(baralhos)
}

module.exports = listarbaralho