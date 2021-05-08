const Profissional = require('../models').Profissional

exports.listAll = (req, res) => {
    Profissional.findAll()
        .then(profissional => {res.send(profissional)})
        .catch(error => {res.send(error)})
}

exports.creatOne = (req, res) => {
    const {nome,email,senha,imagem,especializacao} = req.body
    Profissional.create({nome,email,senha,imagem,especializacao})
        .then(profissional => {res.send(profissional)})
        .catch(error => {res.send(error)})
}

exports.listOne = (req, res) => {
    Profissional.findAll({where:{ id:req.params.id}})
        .then(profissional => {res.send(profissional)})
        .catch(error => {res.send(error)})
}

exports.updateOne = (req, res) => {
    const {nome,email,senha,imagem,especializacao} = req.body
    Profissional.update(
        {nome,email,senha,imagem,especializacao},
        {where:{id:req.params.id}})
        .then(profissional => {res.send(profissional)})
        .catch(error => {res.send(error)})
}

exports.deleteOne = (req, res) => {
    Profissional.destroy({where:{id:req.params.id}})
        .then(profissional => {res.send({
            mensagem: 'Profissional deletado com sucesso',
            data: profissional
        })
    })
}