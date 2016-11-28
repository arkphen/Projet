/**
 * Created by acharland on 11/28/16.
 */
var http = require('http');
var mysql = require('mysql');
var url = require('url');
const PORT = 8080;
var req =('SELECT * FROM Liste_Clients');


function handleRequest(request, response) {

    var url = request.url;
    var ID_Client = url.split("/")[1];

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'acharland',
        password: '',
        database: 'Agence_de_location'
    });

    connection.connect(function (err) {
        if (err) throw err;

        connection.query(
            {
                sql: "SELECT * FROM Liste_Clients WHERE ID_Client = ?",
                values: [ID_Client]

            },
            function (err, rows, fields) {
                if (err) throw err;

                response.end(JSON.stringify);
                connection.end();
            });
    });


}
var server = http.createServer(handleRequest);

server.listen(PORT, function () {

    console.log("Server listening on: http://localhost:%s", PORT);
});