var router = require('express').Router();

var cargo = require('./cargo')
router.use('/cargo',cargo)

var usuario = require('./usuario')
router.use('/usuario',usuario)

router.get('/', (req,res) =>{ 
    res.status(200).json({message: 'conexión exitosa a la API'})
} )
module.exports = router