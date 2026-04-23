// Express para criação de APIs
const express = require('express');
// FS para leitura de arquivos
const fs = require('fs');

// Cria a aplicação
const app = express();

// Define a porta
const PORT = 3003;

// Caminho do arquivo JSON
const ARQUIVO = './produtos.json';

// Inicia o servidor
app.listen(PORT, () => {
    console.log('=== PROJETO PRODUTOS ===');
    console.log('Servidor rodando na porta: ' + PORT);

});