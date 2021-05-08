const cliente = require('../controller/clienteController')
module.exports = function (app) {
    app.route('/cliente')
        .get(cliente.listAll)
        .post(cliente.creatOne)
    
    app.route('/cliente/:id')
        .get(cliente.listOne)
        .put(cliente.updateOne)
        .delete(cliente.deleteOne)
}