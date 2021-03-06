const Mensagem = require('../models').Mensagem

exports.listAll = (req, res) => {
    Mensagem.findAll()
        .then(mensagem => {res.send(mensagem)})
        .catch(error => {res.send(error)})
}

exports.creatOne = (req, res) => {
    const {idOrigem,idDestino,dataHora,mensagem} = req.body
    Mensagem.create({idOrigem,idDestino,dataHora,mensagem})
        .then(mensagem => {res.send(mensagem)})
        .catch(error => {res.send(error)})
}

exports.listOne = (req, res) => {
    Mensagem.findAll({where:{ id:req.params.id}})
        .then(mensagem => {res.send(mensagem)})
        .catch(error => {res.send(error)})
}

exports.updateOne = (req, res) => {
    const {idOrigem,idDestino,dataHora,mensagem} = req.body
    Mensagem.update(
        {idOrigem,idDestino,dataHora,mensagem},
        {where:{id:req.params.id}})
        .then(mensagem => {res.send(mensagem)})
        .catch(error => {res.send(error)})
}

exports.deleteOne = (req, res) => {
    Mensagem.destroy({where:{id:req.params.id}})
        .then(mensagem => {res.send({
            mensagem: 'Mensagem deletada com sucesso',
            data: mensagem
        })
    })
}