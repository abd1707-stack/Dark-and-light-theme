// script.js

// Select the toggle button and body
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

// Check if the dark mode is already applied (from localStorage)
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
}

// Event listener for toggle button
modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save the current mode in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});
