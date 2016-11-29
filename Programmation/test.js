// Include http module,
var http = require('http'),
// And mysql module you've just installed.
    mysql = require("mysql");

// Create the connection.
// Data is default to new mysql installation and should be changed according to your configuration.
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'acharland',
    password: '',
    database: 'Agence_de_location'
});

// Create the http server.
http.createServer(function (request, response) {
    // Attach listener on end event.
    request.on('end', function () {
       // if (request.url == '/') {
        // Query the database.
        connection.query('SELECT * FROM Liste_Clients;', function (error, rows, fields) {
            response.writeHead(200, {
                'Content-Type': 'x-application/json'
            });
            // Send data as JSON string.
            // Rows variable holds the result of the query.
            response.end(JSON.stringify(rows));
        });
        //} else {
            // Indicate that requested file was not found.
        //    response.writeHead(404);
            // And end request without sending any data.
        //    response.end();
        }
);
// Listen on the 8080 port.
}).listen(8080);