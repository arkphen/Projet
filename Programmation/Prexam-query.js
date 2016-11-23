/**
 * Created by acharland on 11/23/16.
 */
/**
 * Created by acharland on 11/23/16.
 */

var http = require('http');
var mysql = require('mysql');

const PORT =8080;
var req = {
    "Ligne_facture" : "select * from Ligne_facture where id = ?",
};

function handleRequest(request, response) {

    var url = request.url;
    var fid = url.split("/")[1];
    var montantt = url.split("/")[2];

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'acharland',
        password: '',
        database: 'prexam'
    });

    connection.connect(function (err) {
        if (err) throw err;
        connection.query(
            {
                sql: req[fid],
                values: [montantt]

            },
            function (err, rows) {
                if (err) throw err;

                response.end(JSON.stringify(rows));
                connection.end();
            });
    });


}
var server = http.createServer(handleRequest);

server.listen(PORT, function () {

    console.log("Server listening on: http://localhost:%s", PORT);
});