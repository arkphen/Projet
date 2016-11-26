/** Created by acharland on 11/23/16.*/

var http = require('http');

const PORT =8080;

function handleRequest(request, response) {


    connection.connect(function (err) {
        if (err) throw err;
        connection.query(

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