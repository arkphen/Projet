/**
 * Created by acharland on 11/26/16.
 */
var http = require('http');
const PORT = 8080;
function handleRequest(request, response) {

}
function heure() {
    /** Heure **/
    var timeObj = new Date();
    var heures = timeObj.getHours();
    var minutes = timeObj.getMinutes();
    var secondes = timeObj.getSeconds();
    newtime = heures + ":" + minutes + ":" + secondes;
    console.log(newtime);
}
function date() {
    /** Date **/
    var dateObj = new Date();
    var mois = dateObj.getUTCMonth() + 1; //months from 1-12
    var jours = dateObj.getUTCDate();
    var annees = dateObj.getUTCFullYear();
    newdate = annees + "/" + mois + "/" + jours;
    console.log(newdate);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function () {

    console.log("Server listening on: http://localhost:%s", PORT);
});
