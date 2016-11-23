/**
 * Created by acharland on 11/23/16.
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'acharland',
    password: '',
    database: 'prexam'
});
connection.connect(function (err) {

    for (var b = 0; b < 3; b++) {
        var nom = "nom" + b;
        var date_creation = "20161121";
        var paye = 1;

        if (err) throw err;
        connection.query(
            {
                sql: "insert into Facture values(null,?,?,?)",
                values: [nom, date_creation, paye]
            },

            function (err,rows) {
                if (err) throw err;


                for (var a = 0; a < 3; a++) {
                    var montant = "0" + a;
                    var quantite = "0" + a;
                    var produit = "produit" + a;
                    var facture_id = rows.insertId;

                    connection.query(
                        {
                            sql: "insert into Ligne_facture values(null,?,?,?,?)",
                            values: [montant, quantite, produit, facture_id]
                        },

                        function (err) {
                            if (err) throw err;

                            console.log("added");
                        });

                    console.log("added");
                }
            })
    }
});
