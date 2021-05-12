const usuario = require('../controller/usuarioController')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './uploads/')
    },
    filename: function(req,file,cb){
        cb(null, "profile_"+req.params.id+".jpg")
    }
})
const fileFilter = (req,file,cb) =>{
    if(file.mimetype === 'image/jpeg'){cb(null,true)}
    else{cb(null,false)}
}
const upload = multer({
    storage:storage,
    fileFilter:fileFilter
})

module.exports = function (app) {
    app.route('/usuario')
        .get(usuario.listAll)
        .post(usuario.creatOne)
    
    app.route('/usuario/:id')
        .get(usuario.listOne)
        .put(upload.single('imageProfile'), usuario.updateOne)
        .delete(usuario.deleteOne)
}