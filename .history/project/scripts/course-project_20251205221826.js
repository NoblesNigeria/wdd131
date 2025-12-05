// Function to populate address
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
    const container = document.getElementById("address");
    if (!container) return; // Prevent errors if element doesn't exist

    container.innerHTML = `
        <p><strong>Plot Number:</strong> ${address.plotNumber}</p>
        <p><strong>Street:</strong> ${address.streetName}</p>
        <p><strong>Town:</strong> ${address.townName}</p>
        <p><strong>City:</strong> ${address.city}</p>
        <p><strong>Country:</strong> ${address.country}</p>
        <p><strong>Tel:</strong> <a href="tel:${address.tel}">${address.tel}</a></p>
        <p><strong>Email:</strong> <a href="mailto:${address.email}">${address.email}</a></p>
    `;
}

// Run after page loads
document.addEventListener("DOMContentLoaded", populateAddress);


const form = document.getElementById("myForm");

// When form is submitted
form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent page reload

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Save to local storage
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    // Show confirmation
    document.getElementById("result").innerText =
        "Saved: " + name + " (" + email + ")";
});

    const savedName = localStorage.getItem("userName");
    const savedEmail = localStorage.getItem("userEmail");

    if (savedName && savedEmail) {
        document.getElementById("name").value = savedName;
        document.getElementById("email").value = savedEmail;
    }

