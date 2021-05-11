const Usuario = require('../models').Usuario

exports.listAll = (req, res) => {
    Usuario.findAll()
        .then(usuario => {res.send(usuario)})
        .catch(error => {res.send(error)})
}

exports.creatOne = (req, res) => {
    const {nome,email,senha,especializacao,imagem} = req.body
    Usuario.create({nome,email,senha,especializacao,imagem})
        .then(usuario => {res.send(usuario)})
        .catch(error => {res.send(error)})
}

exports.listOne = (req, res) => {
    Usuario.findAll({where:{ id:req.params.id}})
        .then(usuario => {res.send(usuario)})
        .catch(error => {res.send(error)})
}

exports.updateOne = (req, res) => {
    const {nome,email,senha,especializacao,imagem} = req.body
    Usuario.update(
        {nome,email,senha,especializacao,imagem},
        {where:{id:req.params.id}})
        .then(usuario => {res.send(usuario)})
        .catch(error => {res.send(error)})
}

exports.deleteOne = (req, res) => {
    Usuario.destroy({where:{id:req.params.id}})
        .then(usuario => {res.send({
            mensagem: 'Usuario deletado com sucesso',
            data: usuario
        })
    })
}