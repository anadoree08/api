const express = require('express');

const app = express();
const PORT = 3000;

// Rota GET /hello
app.get('/hello', (req, res) => {
    res.json({
        message: 'Olá, Mundo!'
    });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});