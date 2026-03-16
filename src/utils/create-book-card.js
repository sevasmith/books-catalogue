import heartIcon from '../assets/heart.svg';

export const createBookCard = (book) => {
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
  likeButton.classList.add('like-button');

  const likeIcon = document.createElement('img');
  likeIcon.classList.add('like-icon');
  likeIcon.src = heartIcon;

  const textContainer = document.createElement('div');
  textContainer.classList.add('book-text-container');

  const title = document.createElement('p');
  title.textContent = book.title || 'No Title';
  title.classList.add('book-title');

  const author = document.createElement('p');
  author.textContent = `${book.author_name ? book.author_name.splice(0, 2).join(', ') : 'Unknown Author'}`;
  author.classList.add('book-author');

  const year = document.createElement('p');
  year.textContent = `${book.first_publish_year || 'Unknown Year'}`;
  year.classList.add('book-year');

  likeButton.append(likeIcon);
  coverContainer.appendChild(cover);
  textContainer.append(title, author, year);
  card.append(coverContainer, textContainer, likeButton);
  return card;
};
