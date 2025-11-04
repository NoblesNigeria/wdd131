let radiusOutput = document.getElementById('radius');
let areaOutput = document.querySelector('#area');

let area = 0;
const PI = 3.14159;

let radius = 10;
area = PI * radius * radius;
radiusOutput = radius;
areaOutput = area;

radius = 20;
area = PI * radius * radius;
radiusOutput.text = radius;
areaOutput = area;
radiusOutput=document.querySelector('#radius');
areaOutput=document.querySelector('#area');