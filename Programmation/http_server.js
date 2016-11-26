/**
 * Created by acharland on 11/16/16.
 */
var http = require('http');
var mysql = require('mysql');



const PORT =8080;

function handleRequest(request, response) {
    response.end('It workss!! Path Hit' + request.url);
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'acharland',
        password: '',
        database: 'Agence_de_location'
    });

    connection.connect(function (err) {

    });
}
var server = http.createServer(handleRequest);

if (err) throw err;
connection.query(
    {
        sql: "insert into Liste_Clients values(null,?,?,?,?,?)",
        values: [Prenom,Nom,Adresse,Ville,Permit]

    });
server.listen(PORT, function() {

    console.log("Server listening on: http://localhost:%s", PORT);
});
