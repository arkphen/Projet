/*** Created by acharland on 11/9/16.*/

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'acharland',
    password: '',
    database: 'Agence_de_location'
});

connection.connect(function (err) {

    for (var a = 0; a < 5; a++) {
        var Date_Debut = 20160101;
        var Vehicule = null + a;
        var ID_Client = null + a;

        if (err) throw err;
        connection.query(
            {
                sql: "insert into Location values(null,?,?,?)",
                values: [Date_Debut, Vehicule, ID_Client]
            },

            function (err, rows, fields) {
                if (err) throw err;

                console.log("added");
            });

    }
    connection.end();
});