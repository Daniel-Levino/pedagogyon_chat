const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const cliente = require('./src/routes/clienteRoutes')
const mensagem = require('./src/routes/mensagemRoute')
const profissional = require('./src/routes/profissionalRoute')

cliente(app)
mensagem(app)
profissional(app)


app.listen(port)
