document.getElementById('current-year').textContent = new Date().getFullYear();
        // Set last modified date in footer
document.getElementById('last-modified').textContent = document.lastModified;
        // Toggle navigation menu
document.getElementById('menu').addEventListener('click', function() {
    document.querySelector('.navigator').classList.toggle('open');
}