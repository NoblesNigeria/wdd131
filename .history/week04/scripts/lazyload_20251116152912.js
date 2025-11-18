document.querySelector('#current-year').textContent = new Date().getFullYear();
const lastModified = new Date(document.lastModified);
document.querySelector('.last-modified').textContent = lastModified.toLocaleDateString('en-US', {
    year: 'numeric',