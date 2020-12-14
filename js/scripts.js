const mainMenu = document.getElementById('main-menu');
const mainMenuLinks = document.querySelectorAll('.main-menu__link ');

mainMenu.addEventListener('click', e => {
  if (e.target.classList.contains('main-menu__link')) {
    mainMenuLinks.forEach(item => {
      item.classList.remove('main-menu__link--active');
    });

    e.target.classList.add('main-menu__link--active');
  }
});
