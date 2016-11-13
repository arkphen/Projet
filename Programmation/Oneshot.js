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
    var prenom = "User" + i;
    var nom = "Last" + i;

    if (err) throw err;
    connection.query(
        {
            sql: "insert into professeur values(null,'Alexandre','Charland')",

        },
        function (err, rows) {
            if (err) throw err;

            console.log("added");
            connection.end();
        });

});