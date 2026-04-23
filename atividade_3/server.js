//Express para criação de APIs
const express = require('express');

//Cria a aplicação
const app = express();

//Define a porta
const PORT = 3000;

//Permite receber JSON no body
app.use(express.json());

//Array de tarefas (em memória)
let tarefas = [];

//GET - listar todas as tarefas
app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});

//POST - adicionar nova tarefa
app.post('/tarefas', (req, res) => {
    const { nome } = req.body;

    if (!nome) {
        return res.status(400).json({ erro: "Nome é obrigatório" });
    }

    const novaTarefa = {
        id: tarefas.length,
        nome: nome
    };

    tarefas.push(novaTarefa);

    res.status(201).json({
        mensagem: "Tarefa adicionada com sucesso!",
        tarefa: novaTarefa
    });
});

//DELETE - remover tarefa por ID
app.delete('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (id < 0 || id >= tarefas.length) {
        return res.status(404).json({ erro: "Tarefa não encontrada" });
    }

    const removida = tarefas.splice(id, 1);

    res.json({
        mensagem: "Tarefa removida com sucesso!",
        tarefa: removida[0]
    });
});

//Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});