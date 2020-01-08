export const getOffsetTop = (el, offsetTop = 0) => {
  if (el) {
    return getOffsetTop(el.offsetParent, offsetTop + el.offsetTop);
  }

  return offsetTop;
};
