const Usuario = require('../models').Usuario
const multer = require('multer')
const bcrypt = require('bcrypt')

exports.listAll = (req, res) => {
    Usuario.findAll()
        .then(usuario => {res.send(usuario)})
        .catch(error => {res.send(error)})
}

exports.creatOne = (req, res) => {
    bcrypt.hash(req.body.senha,10,(errBcrypt,senha)=>{
        if(errBcrypt){return res.status(500).send({error:errBcrypt})}
        
        const {nome,email,especializacao,imagem} = req.body
        Usuario.create({nome,email,senha,especializacao,imagem})
            .then(
                usuario => {res.send(usuario)},
                console.log(req.file)
                )
            .catch(error => {res.send(error)})
    })
}

exports.listOne = (req, res) => {
    Usuario.findAll({where:{ id:req.params.id}})
        .then(usuario => {res.send(usuario)})
        .catch(error => {res.send(error)})
}

exports.updateOne = (req, res) => {
    const {nome,email,senha,especializacao} = req.body
    const imagem = "/uploads/profile_"+req.params.id+".jpg"
    
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
