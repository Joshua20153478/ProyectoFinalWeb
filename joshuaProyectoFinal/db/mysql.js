const mysql = require ('mysql'); // CAMBIE NOMBRE DE CONST DE MSYQL A MYSQL
const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root', // CAMBIAR CONTRASEÑA A TU CONTRASEÑA PARA INGRESAR A PHPmyadmin
    database:'cobros' // CAMBIE NOMBRE A TU BASE DE DATOS
});

mysqlConnection.connect((err) =>{
    if(err){
        console.log(err);
        return;
    } else{
        console.log('conexión exitosa a bd'); 
    }
});

module.exports = mysqlConnection;