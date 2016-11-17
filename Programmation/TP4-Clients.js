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
        var Marque = "marque_" + a;
        var Modele = "modele_" + a;
        var Annee = null + a;
        var Kilometrage = null + a;
        var Numero_Permit = null + a;

        if (err) throw err;
        connection.query(
            {
                sql: "insert into Liste_Vehicules values(null,?,?,?,?,?)",
                values: [Marque, Modele, Annee, Kilometrage, Numero_Permit]
            },

            function (err, rows, fields) {
                if (err) throw err;

                console.log("added");
            });

    }
    connection.end();
});