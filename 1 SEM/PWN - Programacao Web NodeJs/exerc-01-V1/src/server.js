const fs = require('fs');
const express = require('express');
const server = express();
server.use(express.json());
require('dotenv').config();
const PORT = process.env.PORT || 3333

const crud = {
    getAll() {
        return JSON.parse(fs.readFileSync('./src/db.json', { encoding: 'utf-8' }));
    },
    getId(id) {
        const db = crud.getAll()
        return arr = db.filter(item => item.id == id)
    },
    post(produto) {
        let db = crud.getAll();
        db.push(produto)
        fs.writeFileSync('./src/db.json', JSON.stringify(db), { encoding: 'utf-8' })
    },

    put(id, corpo) {
        let db = crud.getAll();
        const objeto = db.find(obj => obj.id == id);
        if (objeto) {
            objeto.id = corpo.id
            objeto.descricao = corpo.descricao
            objeto.valor = corpo.valor
            objeto.marca = corpo.marca
        }
        fs.writeFileSync('./src/db.json', JSON.stringify(db), { encoding: 'utf-8' })
    },
    delete(id) {
        let db = crud.getAll();
        const index = db.findIndex(obj => obj.id == id);
        if (index !== -1) {
            db.splice(index, 1)
            console.log(index);
        } else {
            console.log("nao encotrado");
        }
        fs.writeFileSync('./src/db.json', JSON.stringify(db), { encoding: 'utf-8' })
    },

}

server.get('/', (req, res) => {
    return res.json(crud.getAll())
});

server.get('/:id', (req, res) => {
    const id = req.params.id;
    return res.json(crud.getId(id))
});

server.post('/', (req, res) => {
    const corpoRequisicao = req.body;
    return res.json(crud.post(corpoRequisicao))
});

server.put('/:id', (req, res) => {
    const corpoRequisicao = req.body;
    const id = req.params.id;
    return res.json(crud.put(id, corpoRequisicao))
});
server.delete('/:id', (req, res) => {
    const id = req.params.id;
    return res.json(crud.delete(id))
});



server.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));