// Инициализация темы при загрузке страницы
(function initTheme() {
  const theme = localStorage.getItem('theme');
  if (theme) {
    setTheme(theme);
    const switcher = document.querySelector('.theme-switcher');
    if (switcher) {
      if (theme === 'light') {
        switcher.classList.add('active');
      } else {
        switcher.classList.remove('active');
      }
    }
  }
})();

// После загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  const switcher = document.querySelector('.theme-switcher');

  if (!switcher) return;

  // Навешиваем клик на тумблер
  switcher.addEventListener('click', () => {
    // Переключаем класс active
    switcher.classList.toggle('active');

    // Выбираем тему в зависимости от состояния
    const chosenTheme = switcher.classList.contains('active') ? 'light' : 'dark';
    setTheme(chosenTheme);
  });
});

// Функция установки темы
function setTheme(theme) {
  // Сбрасываем старые классы и ставим новый
  document.documentElement.className = '';
  document.documentElement.classList.add(`theme-${theme}`);
  localStorage.setItem('theme', theme);
}