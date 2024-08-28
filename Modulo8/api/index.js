const express = require('express')
const app = express()
const port = 3000


app.use((req, res, next) => {
    const authHeader = req.headers['authorization']
    if(!authHeader) {
        res.status(403).send('Acesso negado: Token invalido!.')
        throw new Error('Token Invalido')
    } else {
        next()
    }
})

app.get('/protected', (req, res) => {
    if(req.headers['authorization'] == 'senhasecreta') {
        res.send('Bem Vindo à área protegida!!')
    } else {
        res.status(403).send('Acesso negado: Token invalido!')
        throw new Error('Token Invalido')
    }
})

app.listen(port , () => {
    console.log(`Porta ${port}`)
})