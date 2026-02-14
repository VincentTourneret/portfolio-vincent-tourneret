/**
 * Affiche le header uniquement lorsque la page n’est pas tout en haut (scrollY > 0).
 */
const initHeaderScroll = () => {
  const header = document.getElementById('site-header');
  if (!header?.classList.contains('banner--scroll')) return;

  const setHeaderVisible = (visible) => {
    header.classList.toggle('banner--visible', visible);
    header.setAttribute('aria-hidden', visible ? 'false' : 'true');
  };

  const handleScroll = () => setHeaderVisible(window.scrollY > 0);

  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('load', handleScroll);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeaderScroll);
} else {
  initHeaderScroll();
}
