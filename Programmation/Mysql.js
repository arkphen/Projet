/*** Created by acharland on 11/9/16.*/

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'acharland',
    password:'',
    database:'Agence_de_location'
});

connection.connect(function (err) {

    for (var a = 0; a < 5; a++) {
        var Prenom = "User_" + a;
        var Nom = "Last_" + a;
        var Adresse = "Adresse_" + a;
        var Ville = "Ville_" + a;
        var Permit = "Permit" + a;

        if (err) throw err;
        connection.query(
            {
                sql: "insert into Liste_Clients values(null,?,?,?,?,?)",
                values: [Prenom,Nom,Adresse,Ville,Permit]
            },

            function (err, rows, fields) {
                if (err) throw err;

                console.log("added");
            });

    }
    connection.end();
});