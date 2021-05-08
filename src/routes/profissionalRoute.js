const profissional = require('../controller/profissionalController')
module.exports = function (app) {
    app.route('/profissional')
        .get(profissional.listAll)
        .post(profissional.creatOne)
    
    app.route('/profissional/:id')
        .get(profissional.listOne)
        .put(profissional.updateOne)
        .delete(profissional.deleteOne)
}