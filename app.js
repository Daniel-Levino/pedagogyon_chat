const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const usuario = require('./src/routes/usuarioRoutes')
const mensagem = require('./src/routes/mensagemRoute')

usuario(app)
mensagem(app)

app.use('/uploads', express.static('uploads'))

module.exports = (app)