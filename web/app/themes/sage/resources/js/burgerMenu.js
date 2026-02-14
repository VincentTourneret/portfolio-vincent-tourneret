/**
 * Menu burger : ouverture/fermeture du menu sur mobile.
 */
const initBurgerMenu = () => {
  const header = document.getElementById('site-header');
  const trigger = document.getElementById('burger-toggle');
  const menu = document.getElementById('nav-menu');

  if (!header || !trigger || !menu) return;

  const openLabel = trigger.getAttribute('aria-label') || 'Ouvrir le menu';
  const closeLabel = trigger.getAttribute('data-close-label') || 'Fermer le menu';

  const openMenu = () => {
    header.classList.add('is-menu-open');
    trigger.setAttribute('aria-expanded', 'true');
    trigger.setAttribute('aria-label', closeLabel);
  };

  const closeMenu = () => {
    header.classList.remove('is-menu-open');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-label', openLabel);
  };

  const toggleMenu = () => {
    const isOpen = header.classList.contains('is-menu-open');
    if (isOpen) closeMenu();
    else openMenu();
  };

  trigger.addEventListener('click', toggleMenu);

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => closeMenu());
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBurgerMenu);
} else {
  initBurgerMenu();
}
