var http = require('http');

// Start an HTTP server
function ladate() {

}
http.createServer(function (request, response) {

    Function
    ladate();
    {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end("Hello Connect");
    }
}).listen(8081);