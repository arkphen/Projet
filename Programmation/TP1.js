var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs");



var mysql = require('mysql');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'acharland',
    password: '',
    database: 'Agence_de_Location'
});

var createTable = 'INSERT INTO Liste_Clients(Prenom,Nom,Adresse,Ville,Permit) VALUE(?,?,?,?,?)';

var readTable = 'SELECT * FROM Liste_Clients';

var updateRecord = 'UPDATE Liste_Clients SET salary = ? WHERE name=?';

var deleteRecord = 'DELETE FROM Liste_Clients WHERE name=?';


pool.getConnection(function (err, connection) {
    // Create the http server.
    http.createServer(function (request, response) {
        var uri = url.parse(request.url).pathname
            , filename = path.join(process.cwd(), uri);

        path.exists(filename, function (exists) {
            if (!exists) {
                response.writeHead(404, {"Content-Type": "text/plain"});
                response.write("404 Not Found\n");
                response.end();
                return;
            }

            if (fs.statSync(filename).isDirectory()) filename += '/index.html';

            fs.readFile(filename, "binary", function (err, file) {
                if (err) {
                    response.writeHead(500, {"Content-Type": "text/plain"});
                    response.write(err + "\n");
                    response.end();
                    return;
                }

                response.writeHead(200);
                response.write(file, "binary");
                response.end();
            });
        });


        //cree le client.
        connection.query(createTable, ['?', '?', '?', '?', '?'], function (err) {
            if (err) throw err;
            else {
                console.log('Le client a ete ajouter');
            }
        });

        //Read table.
        connection.query(readTable, function (err, rows) {
            if (err) throw err;
            console.log(rows);

        });

        //Update a record.
        connection.query(updateRecord, ['?', '?', '?', '?', '?'], function (err, res) {
            if (err) throw err;
            else {
                console.log('Le client a ete modifier');
            }
        });

        //Delete a record.
        connection.query(deleteRecord, ['?'], function (err, res) {
            if (err) throw err;
            else {
                console.log('Le client a ete supprimer.');
            }
        });


        connection.release();//release the connection
    });
}).listen(8080);

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");