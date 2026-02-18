(function initTheme() {
  // Всегда стартуем со светлой темы
  setTheme('light');
})();

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.theme-switcher');

  // Ставим тумблер в начальное положение для светлой темы
  toggle.classList.remove('active');

  toggle.addEventListener('click', () => {
    // Переключаем тему и фиксируем тумблер
    toggle.classList.toggle('active');
    const newTheme = toggle.classList.contains('active') ? 'dark' : 'light';
    setTheme(newTheme);
  });
});

// Функция смены темы
function setTheme(theme) {
  document.documentElement.className = ''; // сбрасываем все классы
  document.documentElement.classList.add(`theme-${theme}`);
  localStorage.setItem('theme', theme); // можно оставить для запоминания клика
}