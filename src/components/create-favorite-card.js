import { createHeartIcon } from '../utils/create-heart-icon';

export const createFavoriteCard = (favorite, onLike) => {
  const card = document.createElement('div');
  card.classList.add('favorite-card');

  const coverContainer = document.createElement('div');
  coverContainer.classList.add('favorite-cover-container');

  const cover = document.createElement('img');
  if (favorite.cover_i) {
    cover.src = `https://covers.openlibrary.org/b/id/${favorite.cover_i}.jpg`;
    cover.alt = `${favorite.title} cover`;
  } else {
    cover.src = 'https://placehold.co/150x200?text=No+cover';
    cover.alt = 'No cover available';
  }

  const likeButton = document.createElement('div');
  likeButton.classList.add('favorite-like-button');
  likeButton.addEventListener('click', () => onLike(favorite));

  const likeIcon = createHeartIcon();
  likeIcon.classList.add('favorite-like-icon', 'liked');

  const textContainer = document.createElement('div');
  textContainer.classList.add('favorite-text-container');

  const title = document.createElement('h5');
  title.textContent = favorite.title || 'No Title';
  title.classList.add('favorite-title');

  const author = document.createElement('p');
  author.textContent = `${favorite.author_name ? favorite.author_name.slice(0, 2).join(', ') : 'Unknown Author'}`;
  author.classList.add('favorite-author');

  const year = document.createElement('p');
  year.textContent = `${favorite.first_publish_year || 'Unknown Year'}`;
  year.classList.add('favorite-year');

  likeButton.appendChild(likeIcon);
  coverContainer.appendChild(cover);
  textContainer.append(title, author, year);
  card.append(coverContainer, textContainer, likeButton);
  return card;
};
