/*** Created by acharland on 11/9/16.*/

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'acharland',
    password: '',
    database: 'Agence_de_location'
});

connection.connect(function (err) {

    for (var a = 0; a < 500; a++) {
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
    for (var b = 0; b < 500; b++) {
        var Marque = "marque_" + b;
        var Modele = "modele_" + b;
        var Annee = 20160101;
        var Kilometrage = null + b;
        var Numero_Permit = null + b;

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
    for (var c = 0; c < 500; c++) {
        var Prenom = "prenom_" + c;
        var Nom = "nom_" + c;
        var Adresse = "adresse_" + c;
        var Ville = "ville_" + c;
        var Permit = null + c;

        if (err) throw err;
        connection.query(
            {
                sql: "insert into Liste_Clients values(null,?,?,?,?,?)",
                values: [Prenom, Nom, Adresse, Ville, Permit]
            },

            function (err, rows, fields) {
                if (err) throw err;

                console.log("added");
            });
    }


    connection.end();
});