const usuario = require('../controller/usuarioController')
module.exports = function (app) {
    app.route('/usuario')
        .get(usuario.listAll)
        .post(usuario.creatOne)
    
    app.route('/usuario/:id')
        .get(usuario.listOne)
        .put(usuario.updateOne)
        .delete(usuario.deleteOne)
}