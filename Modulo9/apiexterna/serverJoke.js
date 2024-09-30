const express = require("express")
const axios = require("axios")
const app = express()
app.use(express.json())

app.get('/piada', async (req, res) => {
    try {
        const resposta = await axios.get('https://v2.jokeapi.dev/joke/Any?lang=pt')
        res.json(resposta.data)
    } catch (error) {
        res.json(console.error(error))
    }
})

app.listen(3000, () => {
    console.log('Servidor rodando em https://localhost:3000')
})