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

// Livros

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

// deletar livro
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

// Estudantes

let esquemaEstudante = new mongoose.Schema({
    nome: {type: String, required: true},
    matricula: {type: Number, required: true},
    curso: {type: String, required: true},
    ano: {type: Number, required: true}
})


const Estudante = mongoose.model('Estudante', esquemaEstudante)

// criar estudante

async function criarEstudante( nome, matricula, curso, ano) {
    try {
        const novoEstudante = new Estudante({ nome, matricula, curso, ano})
        return await novoEstudante.save()
    } catch(erro) {
        console.error('Estudante não adicionado', erro)
    }
}

app.post('/estudantes', async (req, res) => {
    try {
        const { nome, matricula, curso, ano} = req.body
        const novoEstudante = await criarEstudante(nome, matricula, curso, ano)

        res.status(200).json({mensagem: 'Estudante adicionado', Estudante: novoEstudante})
    } catch (erro) {
        res.status(500).json({mensagem: 'Erro ao adicionar', erro: erro.message})
    }
})

// Listar estudantes

async function listarestudantes() {
    try {
        return await Estudante.find()
    } catch(erro) {
        console.error("Nenhum estudante encontrado", erro)
    }
}

app.get('/estudantes', async (req, res) => {
    try {
        const estudantes = await listarestudantes()
        res.status(200).json(estudantes)
    } catch(erro) {
        res.status(500).json({mensagem: 'Nenhum estudante encontrado', erro: erro.message})
    }
})

// Atualizar estudante

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
