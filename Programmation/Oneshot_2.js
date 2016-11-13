/**
 * Created by acharland on 11/9/16.
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'acharland',
    password:'',
    database:'MonApplication'
});


connection.connect(function (err) {
    if (err) throw err;


    for (var i = 0; i< 1000; i++) {
        var prenom = "User" + i;
        var nom = "Last" + i;

        connection.query(
            {
                sql: "insert into professeur values(null,?,?)",
                values: [prenom,nom]
            },
            function (err, rows, fields) {
                if (err) throw err;

                console.log("added");
            });
    }
    connection.end();
});