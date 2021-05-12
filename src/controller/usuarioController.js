const Usuario = require('../models').Usuario
const multer = require('multer')
const {v4:uuidv4} = require('uuid')

exports.listAll = (req, res) => {
    Usuario.findAll()
        .then(usuario => {res.send(usuario)})
        .catch(error => {res.send(error)})
}

exports.creatOne = (req, res) => {
    const {nome,email,senha,especializacao,imagem} = req.body
    Usuario.create({nome,email,senha,especializacao,imagem})
        .then(
            usuario => {res.send(usuario)},
            console.log(req.file)
            )
        .catch(error => {res.send(error)})
}

exports.listOne = (req, res) => {
    Usuario.findAll({where:{ id:req.params.id}})
        .then(usuario => {res.send(usuario)})
        .catch(error => {res.send(error)})
}

exports.updateOne = (req, res) => {
    const {nome,email,senha,especializacao,imagem} = req.body
    //const imagem = "/uploads/profile_"+req.params.id+".jpg"
    
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
