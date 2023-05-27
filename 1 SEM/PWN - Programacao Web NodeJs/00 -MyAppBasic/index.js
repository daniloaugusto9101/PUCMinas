// framework que ajuda criação de rotas e protocolo HTTP
const express = require('express');
const server = express();

// Rota da API
server.get('/', (req, res)=>{
    return res.json({mensagem: 'Nossa api esta funcioando'})
});


// Metodo que fica escutado a porta
server.listen(3333, ()=>{
    console.log('Servidor esta funcionando');
});