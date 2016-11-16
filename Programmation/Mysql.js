/**
 * Created by acharland on 11/9/16.
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'acharland',
    password:'',
    database:'Agence_de_location'
});


connection.connect(function (err) {
    if (err) throw err;


    for (var i = 0; i< 1000; i++) {
        var prenom = "User" + i;
        var nom = "Last" + i;

        connection.query(
            {
                sql: "delete from professeur where prenom=?",
                values: [prenom]
            },
            function (err, rows, fields) {
                if (err) throw err;

                console.log("REMOVE");
            });
    }
    connection.end();
});