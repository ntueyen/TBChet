const navLinks = [...document.querySelectorAll('.nav-link')];
const sections = navLinks
  .filter((link) => link.getAttribute('href')?.startsWith('#'))
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const setActiveLink = (id) => {
  navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
};

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setActiveLink(visible.target.id);
  },
  { rootMargin: '-18% 0px -68% 0px', threshold: [0, 0.1, 0.4, 0.8] },
);

sections.forEach((section) => observer.observe(section));
document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
