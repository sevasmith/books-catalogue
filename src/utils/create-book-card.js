import { createHeartIcon } from './create-heart-icon';

export const createBookCard = (book, onLike) => {
  const card = document.createElement('div');
  card.classList.add('book-card');

  const coverContainer = document.createElement('div');
  coverContainer.classList.add('book-cover-container');

  const cover = document.createElement('img');
  if (book.cover_i) {
    cover.src = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
    cover.alt = `${book.title} cover`;
  } else {
    cover.src = 'https://placehold.co/150x200?text=No+cover';
    cover.alt = 'No cover available';
  }

  const likeButton = document.createElement('div');
  likeButton.classList.add('book-like-button');
  likeButton.addEventListener('click', () => {
    likeIcon.classList.toggle('liked');
    onLike(book);
  });

  const likeIcon = createHeartIcon();
  likeIcon.classList.add('book-like-icon');

  const textContainer = document.createElement('div');
  textContainer.classList.add('book-text-container');

  const title = document.createElement('p');
  title.textContent = book.title || 'No Title';
  title.classList.add('book-title');

  const author = document.createElement('p');
  author.textContent = `${book.author_name ? book.author_name.slice(0, 2).join(', ') : 'Unknown Author'}`;
  author.classList.add('book-author');

  const year = document.createElement('p');
  year.textContent = `${book.first_publish_year || 'Unknown Year'}`;
  year.classList.add('book-year');

  likeButton.appendChild(likeIcon);
  coverContainer.appendChild(cover);
  textContainer.append(title, author, year);
  card.append(coverContainer, textContainer, likeButton);
  return card;
};
