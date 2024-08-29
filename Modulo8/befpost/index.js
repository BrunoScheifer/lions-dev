const express = require("express")
const app = express()
const port = 3000
app.use(express.json())
const listarbaralho = require('./baralhos/listarbaralhos')
const criarbaralho = require('./baralhos/criarbaralho')
const attbaralho = require('./baralhos/attbaralho')
const delbaralho = require('./baralhos/delbaralho')




app.get('/baralho', listarbaralho)

app.post('/baralho', criarbaralho)

app.put('/baralho/:id', attbaralho)

app.delete('/baralho/:id', delbaralho)

app.get('/', (req, res) => {
    res.send('Funcionando')
})

app.listen(port, () => {
    console.log(`Rodando no site https://localhost${port}`)
})