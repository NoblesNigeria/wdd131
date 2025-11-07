document.getElementById('current-year').textContent = new Date().getFullYear();
        // Set last modified date in footer
document.getElementById('last-modified').textContent = document.lastModified;
        // Toggle navigation menu
menubar=document.querySelector('.navigator');
hamButton=querySelector('#menu');
hamButton.addEventListener('click', (){
    menubar.classList.toggle('open');
    hamButton.classList.toggle('open');
});
