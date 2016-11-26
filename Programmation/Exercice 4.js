//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT = 8080;

//We need a function which handles requests and send response
function handleRequest(request, response) {

    /** Heure **/
    var timeObj = new Date();
    var heures = timeObj.getHours();
    var minutes = timeObj.getMinutes();
    var secondes = timeObj.getSeconds();
    newtime = heures + ":" + minutes + ":" + secondes;


    /** Date **/
    var dateObj = new Date();
    var mois = dateObj.getUTCMonth() + 1; //months from 1-12
    var jours = dateObj.getUTCDate();
    var annees = dateObj.getUTCFullYear();
    newdate = annees + "/" + mois + "/" + jours;


    if (request.url.endsWith("date")) {
        response.end(newdate)
    } else {
        if (request.url.endsWith("time")) {
            response.end(newtime);
        }
    }
}

var server = http.createServer(handleRequest);

server.listen(PORT, function () {

    console.log("Server listening on: http://localhost:%s", PORT);
});
