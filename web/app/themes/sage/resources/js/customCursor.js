/**
 * Curseur personnalisé : le curseur est un cercle avec le nom de la section qui tourne autour.
 * Cursor.js (mouvement) + GSAP (rotation du texte). Anneau sur liens/boutons.
 * Desktop uniquement (pointer: fine, hover: hover).
 */
import '@phucbm/cursorjs';
import gsap from 'gsap';

const SECTION_LABELS = {
  hero: 'Accueil',
  'a-propos': 'À propos',
  services: 'Services',
  experiences: 'Expérience',
  projets: 'Projets',
  expertise: 'Expertise',
  contact: 'Contact',
};

const SECTION_SELECTORS = 'section[id], footer[id]';
const FOCUS_RING_PADDING = 12;
const CURSOR_TEXT_ROTATION_DURATION = 16;
const CURSOR_SIZE = 56;
const CURSOR_CENTER = CURSOR_SIZE / 2;
const CURSOR_TEXT_RADIUS = 38;
const CURSOR_TEXT_ARC = 100;

const initCustomCursor = () => {
  const prefersPointerFine = window.matchMedia('(pointer: fine)').matches;
  const prefersHover = window.matchMedia('(hover: hover)').matches;
  if (!prefersPointerFine || !prefersHover) return;

  const Cursorjs = typeof window !== 'undefined' && window.Cursorjs;
  if (!Cursorjs) return;

  const focusRing = document.getElementById('cursor-focus-ring');
  if (!focusRing) return;

  // --- Cursor.js : curseur = cercle + texte (caractères positionnés sur le cercle)
  Cursorjs.create({
    id: 'portfolio-cursor',
    speed: 0.2,
    className: 'portfolio-cursor',
    innerHTML: [
      '<span class="portfolio-cursor__ring" aria-hidden="true"></span>',
      '<div class="portfolio-cursor__text-orbit" id="cursor-text-orbit" aria-hidden="true">',
      '<div class="portfolio-cursor__chars" id="cursor-section-chars"></div>',
      '</div>',
    ].join(''),
    matchMedia: '(pointer: fine) and (hover: hover)',
    hover: [
      { selectors: 'a, button, [role="button"]', className: 'cursor-on-link', cursor: 'none' },
    ],
    wrapperCSS: {
      pointerEvents: 'none',
      zIndex: '9998',
      position: 'fixed',
      top: 0,
      left: 0,
    },
    cursorCSS: {
      width: `${CURSOR_SIZE}px`,
      height: `${CURSOR_SIZE}px`,
      borderRadius: '50%',
      border: 'none',
      background: 'transparent',
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      boxShadow: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'visible',
    },
  });

  const cursorWrapper = document.getElementById('portfolio-cursor');
  if (!cursorWrapper) return;

  const textOrbit = document.getElementById('cursor-text-orbit');
  const charsContainer = document.getElementById('cursor-section-chars');
  if (!textOrbit || !charsContainer) return;

  const setCharsOnCircle = (label) => {
    charsContainer.innerHTML = '';
    const chars = Array.from(label);
    if (chars.length === 0) return;
    const n = chars.length;
    const startAngle = -CURSOR_TEXT_ARC / 2;
    const arcSpan = n > 1 ? CURSOR_TEXT_ARC : 0;
    chars.forEach((char, i) => {
      const angle = n > 1 ? startAngle + (i / (n - 1)) * arcSpan : 0;
      const span = document.createElement('span');
      span.className = 'portfolio-cursor__char';
      span.textContent = char;
      span.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translate(0, -${CURSOR_TEXT_RADIUS}px)`;
      charsContainer.appendChild(span);
    });
  };

  setCharsOnCircle('Accueil');

  gsap.to(textOrbit, {
    rotation: 360,
    duration: CURSOR_TEXT_ROTATION_DURATION,
    repeat: -1,
    ease: 'none',
    transformOrigin: '50% 50%',
  });

  const updateSectionText = (clientX, clientY) => {
    const el = document.elementFromPoint(clientX, clientY);
    if (!el) return;
    const section = el.closest(SECTION_SELECTORS);
    const label = section?.id ? (SECTION_LABELS[section.id] || section.id) : 'Accueil';
    if (charsContainer.dataset.current !== label) {
      charsContainer.dataset.current = label;
      setCharsOnCircle(label);
    }
  };

  document.addEventListener('mouseenter', () => document.body.classList.add('has-custom-cursor'));
  document.addEventListener('mouseleave', () => document.body.classList.remove('has-custom-cursor'));

  document.addEventListener('mousemove', (e) => {
    if (!document.body.classList.contains('has-custom-cursor')) {
      document.body.classList.add('has-custom-cursor');
    }
    updateSectionText(e.clientX, e.clientY);
  }, { passive: true });

  // --- Anneau : apparaît depuis le centre du bouton, disparaît en se rétractant au centre
  const focusTargets = document.querySelectorAll('a, button, [role="button"]');
  const padding = FOCUS_RING_PADDING;
  const ringDuration = 0.3;

  const showRing = (target) => {
    gsap.killTweensOf(focusRing);
    document.body.classList.add('cursor-over-focus');
    const r = target.getBoundingClientRect();
    const w = r.width + padding * 2;
    const h = r.height + padding * 2;
    const x = r.left - padding;
    const y = r.top - padding;
    gsap.set(focusRing, {
      width: w,
      height: h,
      x,
      y,
      scale: 0,
      opacity: 1,
    });
    gsap.to(focusRing, {
      scale: 1,
      duration: ringDuration,
      ease: 'power2.out',
    });
  };

  const hideRing = () => {
    gsap.to(focusRing, {
      scale: 0,
      duration: ringDuration,
      ease: 'power2.in',
      onComplete: () => {
        document.body.classList.remove('cursor-over-focus');
      },
    });
  };

  focusTargets.forEach((target) => {
    target.addEventListener('mouseenter', () => showRing(target));
    target.addEventListener('mouseleave', hideRing);
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCustomCursor);
} else {
  initCustomCursor();
}
