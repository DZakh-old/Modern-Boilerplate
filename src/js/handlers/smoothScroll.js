import smoothscroll from 'smoothscroll-polyfill';

import { elements } from '../utils/elements';

smoothscroll.polyfill();

const { mastheadElement } = elements;

const prepareSmoothScroll = linkEl => {
  const destinationEl = document.getElementById(linkEl.dataset.smoothScrollTo);
  const blockOption = linkEl.dataset.smoothScrollBlock || 'start';

  if (blockOption === 'start') {
    const EXTRA_OFFSET = mastheadElement.offsetHeight - 3;

    const anchorEl = document.createElement('div');

    destinationEl.setAttribute('style', 'position: relative;');
    anchorEl.setAttribute('style', `position: absolute; top: -${EXTRA_OFFSET}px; left: 0;`);

    destinationEl.appendChild(anchorEl);

    linkEl.addEventListener('click', () => {
      anchorEl.scrollIntoView({
        block: blockOption,
        behavior: 'smooth',
      });
    });
  }

  if (blockOption === 'center') {
    linkEl.addEventListener('click', () => {
      destinationEl.scrollIntoView({
        block: blockOption,
        behavior: 'smooth',
      });
    });
  }
};

export const activateSmoothScroll = () => {
  const linkEls = [...document.querySelectorAll('[data-smooth-scroll-to]')];

  linkEls.forEach(linkEl => prepareSmoothScroll(linkEl));
};
