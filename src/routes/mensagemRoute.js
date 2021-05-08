const mensagem = require('../controller/mensagemController')

module.exports = function (app) {
    app.route('/mensagem')
        .get(mensagem.listAll)
        .post(mensagem.creatOne)
    
    app.route('/mensagem/:id')
        .get(mensagem.listOne)
        .put(mensagem.updateOne)
        .delete(mensagem.deleteOne)
}