const express = require('express')
const app = express()
app.use(express.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/livraria')
    .then(() => {
        console.log('Conectado')
    })
    .catch(erro => {
        console.error('Erro ao conectar', erro)
    })

let esquemaLivro = new mongoose.Schema({
    titulo: {type: String, required: true},
    autor: {type: String, required: true},
    ano: {type: Number, required: true},
    genero: {type: String, required: true}
})

const Livro = mongoose.model('Livro', esquemaLivro)

// adicionar livro
async function criarLivro(titulo, autor, ano, genero) {
    try{
        const novoLivro = new Livro({ titulo, autor, ano, genero})
        return await novoLivro.save()
    } catch (erro) {
        console.error('Livro não adicionado', erro)
    }
}

app.post('/livros', async (req, res) => {
    try {
        const {titulo, autor, ano, genero} = req.body
        const novoLivro = await criarLivro(titulo, autor, ano, genero)
        
        res.status(200).json({mensagem: 'Livro Adicionado', Livro: novoLivro})
    } catch (erro) {
        res.status(500).json({mensagem: 'Erro ao adicionar livro', erro: erro.message})
    }
})

// listar livro
async function listarLivros() {
    try {
        return await Livro.find()
    } catch(erro) {
        console.error('Nenhum livro encontrado!', erro);
        throw erro
    }
}

app.get('/livros', async (req, res) => {
    try {
        const livros = await listarLivros()
        res.status(200).json(livros)
    } catch (erro){
        res.status(500).json({mensagem: 'Nenhum livro encontrado', erro: erro.message})
    }
});

//atualizar livro

async function attlivro(id, titulo, autor, ano, genero) {
    try {
        const livroAtualizado = await Livro.findByIdAndUpdate(
            id,
            {titulo, autor, ano, genero},
            {new: true, runValidators: true}
        )
        return livroAtualizado
    } catch(erro) {
        console.error('Não foi possivel atualizar', erro);
        throw erro
    }
}

app.put('/livros/:id', async (req, res) => {
    try {
        const { id } = req.params
        const {titulo, autor, ano, genero} = req.body
        const livroatt = await attlivro(
            id,
            titulo,
            autor,
            ano,
            genero
        )
        if (livroatt) {
            res.status(200).json({mensagem: 'Livro atualizado', Livro: livroatt})
        } else {
            res.status(404).json('Livro não encontrado!')
        }
    } catch(erro) {
        res.status(500).json({mensagem: 'Erro ao atualizar', erro: erro.message})
    }
})

async function dellivro(id) {
    try {
        const livroDeletado = await Livro.findByIdAndDelete(id)
        return livroDeletado
    } catch(erro) {
        console.error('Não foi possivel deletar!', erro)
        throw erro
    }
}

app.delete('/livros/:id', async (req, res) => {
    try {
        const { id } = req.params
        const livroDeletado = await dellivro(id)

        if (dellivro) {
            res.status(200).json({mensagem: 'Livro deletado', livro: livroDeletado})
        } else {
            res.status(404).json('Livro não encontrado')
        } 
    } catch(erro) {
        res.status(500).json('Erro ao deletar!!')
    }
})

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
