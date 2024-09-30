const axios = require('axios')
const express = require("express")
const app = express()
app.use(express.json())

app.get('/clima/:cidade', async (req, res) => {
const { cidade } = req.params
    try {
        const resultado = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid={API_KEY}&units=metric`)
        res.status(200).send(resultado.data)
    } catch (error) {
        res.status(500).send(console.error(error));
    }
})

app.listen(3000, () => {
    console.log('Servidor rodando em https://localhost:3000')
})