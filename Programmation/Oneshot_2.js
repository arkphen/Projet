/**
 * Created by acharland on 11/9/16.
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'acharland',
    password:'',
    database:'Compagnie_Location'
});


connection.connect(function (err) {
    if (err) throw err;


    for (var i = 0; i< 1000; i++) {
        var Marque = "marque" + i;
        var nomModele = "modele" + i;
        var Numero_Serie = "nstest" + i;


        connection.query(
            {
                sql: "insert into Inventaire_de_Vehicules values(null,?,?)",
                values: [Marque,nomModele,Numero_Serie]
            },
            function (err, rows, fields) {
                if (err) throw err;

                console.log("added");
            });
    }
    connection.end();
});