const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!!!')
})

app.get('/outro', (req, res) => {
    res.send('Boas vindas voce me achou')
})

app.get('/info', (req, res) => {
    res.send('Esse site foi feito usando express!')
})

app.get('*', (req, res) => {
    res.status(404).send('Pagina não encontrada')
})

app.listen(port , () => {
    console.log(`Porta ${port}`)
})