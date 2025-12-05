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

    // Build and insert the address markup
    function populateAddress(obj) {
      const container = document.getElementById('address');

      // create an <address> element (semantic HTML)
      const addrEl = document.createElement('address');

      // Line for street / plot
      const line1 = document.createElement('div');
      line1.textContent = `Plot/House: ${obj.plotNumber}, ${obj.streetName}`;
      addrEl.appendChild(line1);

      // Town and city
      const line2 = document.createElement('div');
      line2.textContent = `${obj.townName}, ${obj.city}`;
      addrEl.appendChild(line2);

      // Country
      const line3 = document.createElement('div');
      line3.textContent = obj.country;
      addrEl.appendChild(line3);

      // Telephone (clickable)
      const telLine = document.createElement('div');
      telLine.innerHTML = `<span class="label">Tel:</span> <a href="tel:${obj.tel}">${obj.tel}</a>`;
      addrEl.appendChild(telLine);

      // Email (clickable)
      const emailLine = document.createElement('div');
      emailLine.innerHTML = `<span class="label">Email:</span> <a href="mailto:${obj.email}">${obj.email}</a>`;
      addrEl.appendChild(emailLine);

      // Clear any previous content and append
      container.innerHTML = '';
      container.appendChild(addrEl);
    }
    document

    // Run once DOM is ready
    document.addEventListener('DOMContentLoaded', () => populateAddress(address));
