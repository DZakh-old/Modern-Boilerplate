const smoothScrollTo = elementId => {
  const element = document.getElementById(elementId);
  element.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
};

export const activateSmoothScroll = () => {
  const links = document.querySelectorAll('.smooth-scroll-to');
  links.forEach(link => {
    link.addEventListener('click', element => {
      element.preventDefault();
      element.stopPropagation();
      smoothScrollTo(element.target.dataset.id);
    });
  });
};
