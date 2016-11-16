/**
 * Created by acharland on 11/16/16.
 */
var mysql = require('mysql')
var pool = mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'acharland',
    password:'',
    database:'MonApplication'
});

pool.query(
    {
        sql: "select * from professeur"
    },
    function (err, rows, fields) {
        if (err) throw  err;

        for (var a = 0; a < rows.length; a++){

            console.log("Etudiant", rows[a].prenom, rows[a].nom);
        }
        });