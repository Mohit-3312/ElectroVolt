// script.js
function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-holder').innerHTML = data;
        })
        .catch(error => console.error('Error loading the navbar:', error));
}

// Run the function when the page loads
window.onload = loadNavbar;