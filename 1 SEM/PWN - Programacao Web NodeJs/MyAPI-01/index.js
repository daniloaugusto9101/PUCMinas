// Config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const Person = require('./models/Person')

// Forma de ler o JSON / midddleware
app.use(
    express.urlencoded({
        extend: true,
    }),
)

app.use(express.json())


// Rotas da API
app.post('/person', async (req, res) =>{
    // req.body
    const {name, salary, approved} = req.body 
})

// Rota incial / endpoint
app.get('/', (req, res) => {
    // mostrar requisição
    res.json({ message: 'Oi Express' })

    const person = {
        nome,
        salary,
        approved
    }
})

// Entregar uma porta
mongoose
    .connect(
        'mongodb+srv://1472246:uolSd4BURWSCUX7r@cluster0.v1v5jec.mongodb.net/?retryWrites=true&w=majority',
    )
    .then(() => {
        console.log("Conectamos ao MongoDB");
        app.listen(3000)

    })
    .catch((err)=> console.log("Deu erro na seu Mongo: " + err))

// app.listen(3000)
