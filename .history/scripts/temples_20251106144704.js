document.getElementById('current-year').textContent = new Date().getFullYear();
        // Set last modified date in footer
document.getElementById('last-modified').textContent = document.lastModified;
        // Toggle navigation menu
menuar=document.querySelector('.navigator');
hamButton=querySelector('#menu');
hamButton.addEventListener('click', function(){
    menubar.classList.toggle('.show');
    hamButton.classList.toggle('.show');
});
