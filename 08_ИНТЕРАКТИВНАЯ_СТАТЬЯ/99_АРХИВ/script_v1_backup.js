const кнопка = document.getElementById('themeToggle');
const сохранено = localStorage.getItem('theme');
if (сохранено === 'light') {
  document.body.classList.add('light');
  кнопка.textContent = 'Тёмная тема';
}
кнопка.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const светлая = document.body.classList.contains('light');
  кнопка.textContent = светлая ? 'Тёмная тема' : 'Светлая тема';
  localStorage.setItem('theme', светлая ? 'light' : 'dark');
});
