const button = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('aios_theme');

if (savedTheme === 'light') {
  document.body.classList.add('light');
  button.textContent = 'Тёмная тема';
}

button.addEventListener('click', () => {
  document.body.classList.toggle('light');

  const isLight = document.body.classList.contains('light');
  button.textContent = isLight ? 'Тёмная тема' : 'Светлая тема';
  localStorage.setItem('aios_theme', isLight ? 'light' : 'dark');
});
