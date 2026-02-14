/**
 * Timeline expérience – animations au scroll avec GSAP et ScrollTrigger.
 * Chaque item apparaît en fondu + slide quand il entre dans le viewport.
 * La ligne verticale se remplit au scroll (scrub).
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const initExperiencesTimeline = () => {
  const container = document.getElementById('experiences-timeline');
  if (!container) return;

  const line = container.querySelector('.js-timeline-line');
  const items = container.querySelectorAll('.js-timeline-item');

  if (!line || !items.length) return;

  // Ligne de progression : scaleY 0 → 1 au scroll sur la section
  gsap.fromTo(
    line,
    { scaleY: 0, transformOrigin: 'top center' },
    {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top 70%',
        end: 'bottom 30%',
        scrub: 1.2,
      },
    }
  );

  // Chaque item : fade + slide depuis la gauche ou la droite (alterné)
  items.forEach((item, i) => {
    const content = item.querySelector('.js-timeline-content');
    const isRight = item.classList.contains('timeline-item--right');

    gsap.fromTo(
      content,
      {
        opacity: 0,
        x: isRight ? 40 : -40,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Point sur la ligne : léger scale au passage
    const dot = item.querySelector('.js-timeline-dot');
    if (dot) {
      gsap.fromTo(
        dot,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: item,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initExperiencesTimeline);
} else {
  initExperiencesTimeline();
}
