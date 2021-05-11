const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const cliente = require('./src/routes/clienteRoutes')
const mensagem = require('./src/routes/mensagemRoute')

cliente(app)
mensagem(app)

module.exports = (app)