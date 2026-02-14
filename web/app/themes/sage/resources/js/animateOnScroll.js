/**
 * Animation au scroll : ajoute .is-in-view quand un élément entre dans le viewport.
 * Utilise Intersection Observer (pas de scroll listener).
 */
const ROOT_MARGIN = '0px 0px -8% 0px';
const THRESHOLD = 0.05;

const initAnimateOnScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-stagger');

  if (!elements.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in-view');
        }
      });
    },
    { rootMargin: ROOT_MARGIN, threshold: THRESHOLD }
  );

  elements.forEach((el) => observer.observe(el));
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimateOnScroll);
} else {
  initAnimateOnScroll();
}
