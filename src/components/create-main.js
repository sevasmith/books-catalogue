import { createHeartIcon } from '../utils/create-heart-icon';

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
    onSubmit(query);
  });

  const statusWindow = document.createElement('div');
  statusWindow.classList.add('status-window');

  const statusMessage = document.createElement('p');
  statusMessage.classList.add('status-message');

  const bottomContainer = document.createElement('div');
  bottomContainer.classList.add('main-bottom-container');

  const booksContainer = document.createElement('div');
  booksContainer.classList.add('books-container');

  const favoritesSection = document.createElement('div');
  favoritesSection.classList.add('favorites-section');

  const favoritesContainer = document.createElement('div');
  favoritesContainer.classList.add('favorites-container');

  const favoritesHeader = document.createElement('div');
  favoritesHeader.classList.add('favorites-header');

  const favoritesHeaderIconContainer = document.createElement('div');
  favoritesHeaderIconContainer.classList.add('favorites-header-icon-container');

  const favoritesHeaderIcon = createHeartIcon();
  favoritesHeaderIcon.classList.add('favorites-header-icon');

  const favoritesHeaderText = document.createElement('div');
  favoritesHeaderText.classList.add('favorites-header-text');

  const favoritesHeaderTitle = document.createElement('h3');
  favoritesHeaderTitle.textContent = 'Favorites';

  const favoritesHeaderDescription = document.createElement('p');
  favoritesHeaderDescription.classList.add('favorites-header-description');
  favoritesHeaderDescription.textContent = '0 books saved';

  favoritesHeaderText.append(favoritesHeaderTitle, favoritesHeaderDescription);
  favoritesHeaderIconContainer.appendChild(favoritesHeaderIcon);
  favoritesHeader.append(favoritesHeaderIconContainer, favoritesHeaderText);
  favoritesSection.append(favoritesHeader, favoritesContainer);

  textContainer.append(title, description);
  searchForm.append(searchInput, searchButton, statusWindow);
  statusWindow.appendChild(statusMessage);
  topContainer.append(textContainer, searchForm);
  bottomContainer.append(booksContainer, favoritesSection);
  main.append(topContainer, bottomContainer);

  return {
    main,
    booksContainer,
    favoritesContainer,
    favoritesHeaderDescription,
    statusMessage,
  };
};
