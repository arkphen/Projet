/**
 * Created by acharland on 11/26/16.
 */
/** Heure **/
var timeObj = new Date();
var heures = timeObj.getHours();
var minutes = timeObj.getMinutes();
var secondes = timeObj.getSeconds();
newtime = heures + ":" + minutes + ":" + secondes;
console.log(newtime);


/** Date **/
var dateObj = new Date();
var mois = dateObj.getUTCMonth() + 1; //months from 1-12
var jours = dateObj.getUTCDate();
var annees = dateObj.getUTCFullYear();
newdate = annees + "/" + mois + "/" + jours;
console.log(newdate);