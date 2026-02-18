
document.addEventListener('DOMContentLoaded', () => {
  // ===================== Рейтинг =====================
  const stars = document.querySelectorAll('.star');
  let rating = 0;

  if (stars.length) {
    console.log(stars);
    stars.forEach(star => {
      star.addEventListener('mouseover', () => {
        const value = parseInt(star.dataset.value);
        console.log(value);
        highlightStars(value);
      });

      star.addEventListener('click', () => {
        
        rating = parseInt(star.dataset.value);
        highlightStarsActive(rating);
      });
    });

    const ratingWrapper = document.querySelector('.rating');
    if (ratingWrapper) {
      ratingWrapper.addEventListener('mouseleave', () => {
        highlightStars(rating);
      });
    }

  
    

    function highlightStarsActive(value) {
      stars.forEach(star => {
        if (parseInt(star.dataset.value) <= value) {
          star.classList.add('active');
        } else {
          star.classList.remove('active');
        }
      });
    }
    function highlightStars(value) {
      stars.forEach(star => {
        if (parseInt(star.dataset.value) <= value) {
          star.classList.add('hight');
        } else {
          star.classList.remove('hight');
        }
      });
    }
  }

  // ===================== Тема =====================
  const toggle = document.querySelector('.theme-switcher');
  if (toggle) {
    toggle.classList.remove('active'); // стартовое состояние
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      const newTheme = toggle.classList.contains('active') ? 'dark' : 'light';
      setTheme(newTheme);
    });
  }

  function setTheme(theme) {
    document.documentElement.className = '';
    document.documentElement.classList.add(`theme-${theme}`);
    localStorage.setItem('theme', theme);
  }
});

// ===================== Прелоадер =====================
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  preloader.style.opacity = '0';
  preloader.style.transition = 'opacity 0.3s ease';
  setTimeout(() => preloader.style.display = 'none', 300);
});
