const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

// Ensure the correct ID is used
document.querySelector('#theme-toggle').addEventListener('click', toggleDarkMode);
