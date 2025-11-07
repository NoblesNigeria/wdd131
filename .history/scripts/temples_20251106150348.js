document.getElementById('current-year').textContent = new Date().getFullYear();
        // Set last modified date in footer
document.getElementById('last-modified').textContent = document.lastModified;
        // Toggle navigation menu
menuBar = document.querySelector('.navigator');
hamButton = document.querySelector('#menu');
hamButton.addEventListener('click', () => {
    menuBar.classList.toggle('open');
    
}
