/*
estamos considerando que los cargos se van a poder realizar 
únicamente desde el html del propietario
*/

var cargoController = require('../controllers/cargoController');
var router = require('express').Router();

/* 
recuperar cargos de un usuario en específico 
crear un campo donde el propietario ingrese el id del usuario deseado y regrese todas sus deudas
*/
router.get('/usuario/:id', (req,res) =>{
    cargoController.listarDeudasUsuario(req,res);
})

// generar un cargo
router.post('/', (req,res) =>{
    cargoController.crear(req,res);
})

//eliminar un cargo
router.delete('/:id', (req,res) =>{
    cargoController.eliminar(req,res);
})