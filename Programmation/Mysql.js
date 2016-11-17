/*** Created by acharland on 11/9/16.*/

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'acharland',
    password:'',
    database:'Agence_de_location'
});


connection.connect(function (err) {


    for (var i = 0; i < 5; i++) {
        var Prenom = "User_" + i;
        var Nom = "Last_" + i;
        var Adresse = "Adresse_" + i;
        var Ville = "Ville_" + i;
        var Permit = "Permit" + i;
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