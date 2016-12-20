/**
 * Created by acharland on 12/19/16.
 */
var fs = require('fs');
var http= require('http');
const PORT = 8080;
/*
 Cette fonction retourne vrai si elle a répondu pour ce fichier et faux sinon.  Présentement, les type de fichiers supportés sont html, gif et jpg.  Le répertoire courant est utilisé comme base pour les fichiers.  Assurez vous que le "working directory" de votre serveur est bien situé.
 */
function handleResquest()
function handleFile(request, response) {

    if (! request.url.match(/^.*\..*$/)) {
        return false;
    }

    var extension = request.url.split(".")[1];
    var types = {
        "html": "text/html",
        "jpg": "image/jpeg",
        "gif": "image/gif"
    };

    var mimeType = types[extension];
    if ( mimeType != undefined) {

        response.setHeader('Content-Type', mimeType);
    }

    fs.readFile( __drname + request.url, function (err, data) {
        if (err) {
            response.statusCode = 404;
            response.end();
            return true;
        }

        response.statusCode = 200;
        response.end(data);
        return true;
    });
}
var server = http.createServer(handleRequest);
if (request.url.endsWith("")) {
    response.end()
} else {
    if (request.url.endsWith("")) {
        response.end();
    }
}
}



var server = http.createServer(handleRequest);

server.listen(PORT, function () {

    console.log("Server listening on: http://localhost:%s", PORT);
});
