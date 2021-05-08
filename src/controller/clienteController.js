const Cliente = require('../models').Cliente

exports.listAll = (req, res) => {
    Cliente.findAll()
        .then(cliente => {res.send(cliente)})
        .catch(error => {res.send(error)})
}

exports.creatOne = (req, res) => {
    const {nome,email,senha,imagem} = req.body
    Cliente.create({nome,email,senha,imagem})
        .then(cliente => {res.send(cliente)})
        .catch(error => {res.send(error)})
}

exports.listOne = (req, res) => {
    Cliente.findAll({where:{ id:req.params.id}})
        .then(cliente => {res.send(cliente)})
        .catch(error => {res.send(error)})
}

exports.updateOne = (req, res) => {
    const {nome,email,senha,imagem} = req.body
    Cliente.update(
        {nome,email,senha,imagem},
        {where:{id:req.params.id}})
        .then(cliente => {res.send(cliente)})
        .catch(error => {res.send(error)})
}

exports.deleteOne = (req, res) => {
    Cliente.destroy({where:{id:req.params.id}})
        .then(cliente => {res.send({
            mensagem: 'Usuario deletado com sucesso',
            data: cliente
        })
    })
}