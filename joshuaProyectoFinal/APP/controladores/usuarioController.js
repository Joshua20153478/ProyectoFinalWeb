var mysql = require('../../db/mysql')

module.exports = {
    informacion: (req,res) => {
        let id = req.params.id;
        mysql.query('  where owner_id = ?', id, (err,rows,fields) =>{ // PONER CONSULTA
            if(!err){
                res.json(rows);
            }
            else{
                res.json(err)
            }
        })
    }
}