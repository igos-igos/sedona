let menuLink = document.querySelectorAll('.navigation__link');
let menuOpen = document.querySelector('.navigation__btn--open');
let menuClose = document.querySelector('.navigation__btn--close');

menuOpen.addEventListener('click', () => {
  for (i = 0; i < menuLink.length; i++) {
    menuLink[i].classList.remove('display-none')
  }
  menuClose.classList.remove('display-none');
})

menuClose.addEventListener('click', () => {
  for (i = 0; i < menuLink.length; i++) {
    menuLink[i].classList.add('display-none');
  }
  menuClose.classList.add('display-none');
})
