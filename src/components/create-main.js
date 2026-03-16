import heartIcon from '../assets/heart.svg';

export const createMain = (onSubmit) => {
  const main = document.createElement('main');
  main.classList.add('main');

  const topContainer = document.createElement('div');
  topContainer.classList.add('main-top-container');

  const textContainer = document.createElement('div');
  textContainer.classList.add('main-text-container');

  const title = document.createElement('h1');
  title.textContent = 'Discover Your Next Great Read';
  title.classList.add('main-title');

  const description = document.createElement('p');
  description.classList.add('main-description');
  description.textContent =
    'Search millions of books, build your library, and never loose track of what to read next';

  const searchForm = document.createElement('form');
  searchForm.classList.add('search-form');

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search for books by title or author...';
  searchInput.classList.add('search-input');

  const searchButton = document.createElement('button');
  searchButton.type = 'submit';
  searchButton.textContent = 'Search';
  searchButton.classList.add('search-button');

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
      onSubmit(query);
    }
  });

  const bottomContainer = document.createElement('div');
  bottomContainer.classList.add('main-bottom-container');

  const booksContainer = document.createElement('div');
  booksContainer.classList.add('books-container');

  const favoritesContainer = document.createElement('div');
  favoritesContainer.classList.add('favorites-container');

  const favoritesHeader = document.createElement('div');
  favoritesHeader.classList.add('favorites-header');

  const favoritesIcon = document.createElement('img');
  favoritesIcon.classList.add('favorites-icon');
  favoritesIcon.src = heartIcon;

  const favoritesText = document.createElement('div');
  favoritesText.classList.add('favorites-text');

  const favoritesTitle = document.createElement('h3');
  favoritesTitle.textContent = 'Favorites';

  const favoritesDescription = document.createElement('p');
  favoritesDescription.classList.add('favorites-description');
  favoritesDescription.textContent = '0 books saved';

  favoritesText.append(favoritesTitle, favoritesDescription);
  favoritesHeader.append(favoritesIcon, favoritesText);
  favoritesContainer.append(favoritesHeader);

  textContainer.append(title, description);
  searchForm.append(searchInput, searchButton);
  topContainer.append(textContainer, searchForm);
  bottomContainer.append(booksContainer, favoritesContainer);
  main.append(topContainer, bottomContainer);

  return { main, booksContainer };
};
