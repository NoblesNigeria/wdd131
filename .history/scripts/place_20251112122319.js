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

function calculateWindChill(t, s) {
    let wc = 13.12 + (0.6215 * 10) - (11. * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
    return Math.round(wc * 10) / 10;
}