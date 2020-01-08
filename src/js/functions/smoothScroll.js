const smoothScrollTo = elementId => {
  const el = document.getElementById(elementId);

  // It's usefull when you have some fixed header
  // const extraSpace = headerElement.offsetHeight;
  const extraSpace = 0;

  window.scroll({
    top: el.offsetTop - extraSpace,
    behavior: 'smooth',
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
