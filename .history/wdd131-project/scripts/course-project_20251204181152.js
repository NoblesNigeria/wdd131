document.getElementById('current-year').textContent = new Date().getFullYear();
// Set last modified date in footer
document.getElementById('last-modified').textContent = document.lastModified;

const address = {
    plotNumber: "010",
    streetName: "Imafidon",
    townName: "Evboneka",
    city: "Benin City",
    country: "Nigeria",
    tel: "+2348038090539",
    email: "noblesnigeria@gmail.com"
};

// Function to populate address
function populateAddress() {
    document.getElementById("address").innerHTML = `
        <p><strong>Plot Number:</strong> ${address.plotNumber}</p>
        <p><strong>Street:</strong> ${address.streetName}</p>
        <p><strong>Town:</strong> ${address.townName}</p>
        <p><strong>City:</strong> ${address.city}</p>
        <p><strong>Country:</strong> ${address.country}</p>
        <p><strong>Tel:</strong> <a href="tel:${address.tel}">${address.tel}</a></p>
        <p><strong>Email:</strong> <a href="mailto:${address.email}">${address.email}</a></p>
    `;
}

// Call function
populateAddress();
