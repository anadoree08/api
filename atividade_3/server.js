//Express para criação de APIs
const express = require('express');

//Cria a aplicação
const app = express();

//Define a porta
const PORT = 3000;

//Permite JSON no body
app.use(express.json());

/* MIDDLEWARE (Ex 3)*/
app.use((req, res, next) => {
    console.log("Método:", req.method, "| URL:", req.url);
    next();
});

/*TAREFAS (Ex 2)*/
let tarefas = [];

//GET
app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});

//POST
app.post('/tarefas', (req, res) => {
    const nome = req.body.nome;

    if (!nome) {
        return res.status(400).json({ erro: "Nome obrigatório" });
    }

    const nova = {
        id: tarefas.length,
        nome: nome
    };

    tarefas.push(nova);

    res.status(201).json(nova);
});

//DELETE
app.delete('/tarefas/:id', (req, res, next) => {
    const id = parseInt(req.params.id);

    if (id < 0 || id >= tarefas.length) {
        return next(new Error("Tarefa não encontrada"));
    }

    const removida = tarefas.splice(id, 1);

    res.json(removida[0]);
});

/* USUÁRIOS (Ex 7)*/
let usuarios = [];

//GET
app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

//POST
app.post('/usuarios', (req, res) => {
    const nome = req.body.nome;

    if (!nome) {
        return res.status(400).json({ erro: "Nome obrigatório" });
    }

    const novo = {
        id: usuarios.length,
        nome: nome
    };

    usuarios.push(novo);

    res.status(201).json(novo);
});

//GET por id
app.get('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (id < 0 || id >= usuarios.length) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    res.json(usuarios[id]);
});

//PUT
app.put('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const nome = req.body.nome;

    if (id < 0 || id >= usuarios.length) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    usuarios[id].nome = nome;

    res.json(usuarios[id]);
});

//DELETE
app.delete('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (id < 0 || id >= usuarios.length) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    const removido = usuarios.splice(id, 1);

    res.json(removido[0]);
});

/* ERRO (Ex 4)*/
app.use((err, req, res, next) => {
    res.status(400).json({
        erro: err.message
    });
});

//Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});