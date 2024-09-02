const express = require("express")
const app = express()
const port = 3000
app.use(express.json())
const listarbaralho = require('./baralhos/listarbaralhos')
const criarbaralho = require('./baralhos/criarbaralho')
const attbaralho = require('./baralhos/attbaralho')
const delbaralho = require('./baralhos/delbaralho')
const listarflashcard = require('./flashcards/listarflashcard')
const criarflashcard = require('./flashcards/criarflashcard')
const attflashcard = require('./flashcards/attflashcard')
const delflashcard = require('./flashcards/delflashcard')
const flashbyid = require('./flashcards/flashbyid')
const flashbybaralho = require('./flashcards/flashbybaralho')
const flashbypergunta = require('./flashcards/flashbypergunta')


app.get('/baralho', listarbaralho)



app.post('/baralho', criarbaralho)

app.post('/flashcard', criarflashcard)

app.put('/baralho/:id', attbaralho)

app.put('/flashcard/:id', attflashcard)

app.delete('/baralho/:id', delbaralho)

app.delete('/flashcard/:id', delflashcard)

app.get('/flashcard/:id', flashbyid)

app.get('/flashcard/baralho/:idBaralho', flashbybaralho)

app.get('/flashcard', flashbypergunta)

app.get('/', (req, res) => {
    res.send('Funcionando')
})

app.listen(port, () => {
    console.log(`Rodando no site https://localhost:${port}`)
})