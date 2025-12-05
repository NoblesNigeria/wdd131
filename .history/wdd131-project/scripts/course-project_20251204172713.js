document.getElementById('current-year').textContent = new Date().getFullYear();
// Set last modified date in footer
document.getElementById('last-modified').textContent = document.lastModified;

 const address=[{
    plotNumber:"010",
    streetName:"Imafidon",
    townName: "Evboneka",
    city: "Benin City",
    country: "Nigeria",
    tel: "+2348038090539",
    email: "noblesnigeria@gmail.com"
 },];
 address.forEach(item=> {
    item=document.getElementById(".company-address")
 })
 document.getElementById(".company-address")