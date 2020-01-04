const smoothScrollTo = elementId => {
  if (!elementId) {
    throw new Error(
      'Dataset not found. If you have one, then you need to add `pointer-event:none` to elements inside of your button.'
    );
  }

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
      smoothScrollTo(e.target.dataset.smoothScrollTo);
    });
  });
};
