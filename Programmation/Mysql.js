/**
 * Created by acharland on 11/16/16.
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'acharland',
    password:'',
    database:'Agence_de_location'
});


connection.connect(function (err) {

            function (err, rows, fields) {
                if (err) throw err;

                console.log("ADDED");
            });
    }
    connection.end();
});