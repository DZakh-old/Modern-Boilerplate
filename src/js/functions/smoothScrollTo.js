const smoothScrollTo = elementId => {
  const e = document.getElementById(elementId);

  e.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
};

export const activateSmoothScroll = () => {
  const links = document.querySelectorAll('[data-smooth-scroll-to]');

  links.forEach(link => {
    link.addEventListener('click', e => {
      smoothScrollTo(e.currentTarget.dataset.smoothScrollTo);
    });
  });
};
