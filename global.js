document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    themeToggleBtn.addEventListener('click', () => {
        // Check current theme
        const currentTheme = bodyElement.getAttribute('data-theme');

        // Toggle logic
        if (currentTheme === 'light') {
            bodyElement.setAttribute('data-theme', 'dark');
        } else {
            bodyElement.setAttribute('data-theme', 'light');
        }
    });
});