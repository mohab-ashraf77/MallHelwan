document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark' || savedTheme === 'light') {
        bodyElement.setAttribute('data-theme', savedTheme);
    } else {
        bodyElement.setAttribute('data-theme', 'light');
    }

    themeToggleBtn?.addEventListener('click', () => {
        const currentTheme = bodyElement.getAttribute('data-theme') || 'light';
        const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
        bodyElement.setAttribute('data-theme', nextTheme);
        localStorage.setItem('theme', nextTheme);
    });
});

function toggleNav() {
  const nav = document.querySelector('.nav-container');
  if (!nav) return;
  nav.classList.toggle('open');
}