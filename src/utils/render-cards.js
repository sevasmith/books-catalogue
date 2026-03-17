import { waitForImages } from './wait-for-images';

export const renderCards = async (items, createCardFn, container) => {
  const fragment = document.createDocumentFragment();
  const images = [];

  items.forEach((item) => {
    const bookCard = createCardFn(item);
    bookCard.dataset.key = item.key;
    fragment.appendChild(bookCard);

    const img = bookCard.querySelector('img');
    if (img) images.push(img);
  });

  await waitForImages(images);

  container.innerHTML = '';
  container.appendChild(fragment);
};
