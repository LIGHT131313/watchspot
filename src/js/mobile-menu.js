(() => {
  const refs = {
    openMenuBtn: document.querySelectorAll('[data-menu-open]'),
    closeMenuBtns: document.querySelectorAll('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.forEach(el => {
    el.addEventListener('click', toggleMenu);
  });

  refs.closeMenuBtns.forEach(el => {
    el.addEventListener('click', toggleMenu);
  });

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
    location.hash = this.getAttribute('href');
  }

  window.addEventListener('hashchange', function () {
    if (
      location.hash === '#aboutus' ||
      location.hash === '#catalog' ||
      location.hash === '#sale'
    ) {
      toggleMenu();
    }
  });
})();
