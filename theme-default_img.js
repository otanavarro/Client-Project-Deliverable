// Select all images on the page
document.querySelectorAll('img').forEach(img => {
    img.onerror = function() {
        this.onerror = null; // Prevents infinite loop if default image is missing
        this.src = '../images/default_image.jpg'; // Correct fallback path
        this.alt = "Default image"; // Optional, to provide meaningful alt text
    };
});

const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

// Ensure the correct ID is used
document.querySelector('#theme-toggle').addEventListener('click', toggleDarkMode);
a