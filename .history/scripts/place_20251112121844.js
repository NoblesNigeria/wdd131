// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();
// Set last modified date in footer
document.getElementById('last-modified').textContent = document.lastModified;

let tem= "10°c";
let cond= "Partly Cloudy";
let windSpd= "5km/h";
let windChill= "9.8°c";
document.getElementById('temperature').textContent = tem;
document.getElementById('conditions').textContent = cond;
document.getElementById('wind-speed').textContent = windSpd;

function calculateWindChill(t, s) 