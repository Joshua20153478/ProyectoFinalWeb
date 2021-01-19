var mysql = require('../../db/mysql')

module.exports = {
    listarDeudasUsuario: (req,res) => {
        let id = req.params.id;
        mysql.query('select where owner_id = ?', id, (err,rows,fields) =>{ // PONER CONSULTA
            if(!err){
                res.json(rows);
            }
            else{
                res.json(err)
            }
        })
    },
    crear: (req,res) => {
        mysql.query('insert into set ?', req.body, (err,rows,fields) =>{ // PONER CONSULTA
            if(!err){
                res.json(rows);
            }
            else{
                res.json(err)
            }
    })
    },
    eliminar: (req,res) =>{
        let id = req.params.id;
        mysql.query('  where id=?', id, (err,rows,fields) =>{ // PONER CONSULTA
            if(!err){
                res.json(rows);
            }
            else{
                res.json(err)
            }
        })
}
}