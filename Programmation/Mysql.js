/*** Created by acharland on 11/9/16.*/

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'acharland',
    password:'',
    database:'Agence_de_location'
});


connection.connect(function (err) {
    if (err) throw err;


    for (var i = 0; i< 300; i++) {
        var Prenom = "User" + i;
        var Nom = "Last" + i;
        var Adresse = "adresse" + i;
        var Ville = "ville" + i;
        var Permit = "numero permit" + i;

        connection.query(
            {
                sql: "insert into Liste_Clients values(null,?,?,?,?,?)",
                values: [Prenom,Nom,Adresse,Ville,Permit],

            },

            function (err, rows, fields) {
                if (err) throw err;

                console.log("added");
            });
    }
    connection.end();
});