import heartSvg from '../assets/heart.svg?raw';

export const createHeartIcon = () => {
  const wrapper = document.createElement('span');
  wrapper.innerHTML = heartSvg;
  return wrapper.firstElementChild;
};
