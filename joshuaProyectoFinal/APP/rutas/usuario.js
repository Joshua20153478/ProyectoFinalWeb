var usuarioController = require('../controllers/usuarioController');  ;
var router = require('express').Router();

router.get('/:id', (req,res) =>{
    usuarioController.informacion(req,res);
})

module.exports = router