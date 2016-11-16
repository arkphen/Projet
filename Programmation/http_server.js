/**
 * Created by acharland on 11/16/16.
 */
var http = require('http');

const PORT =8080;

function handleRequest(request, response){
    response.end('It workss!! Path Hit' + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {

    console.log("Server listening on: http://localhost:%s", PORT);
});