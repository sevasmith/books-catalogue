export const createMain = (onSearch) => {
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

  const searchContainer = document.createElement('div');
  searchContainer.classList.add('main-search-container');

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search for books by title or author...';
  searchInput.classList.add('search-input');

  const searchButton = document.createElement('button');
  searchButton.textContent = 'Search';
  searchButton.classList.add('search-button');
  searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
      onSearch(query);
    }
  });

  const bottomContainer = document.createElement('div');
  bottomContainer.classList.add('main-bottom-container');

  const booksContainer = document.createElement('div');
  booksContainer.classList.add('books-container');

  const favoritesContainer = document.createElement('div');
  favoritesContainer.classList.add('favorites-container');

  textContainer.append(title, description);
  searchContainer.append(searchInput, searchButton);
  topContainer.append(textContainer, searchContainer);
  bottomContainer.append(booksContainer, favoritesContainer);
  main.append(topContainer, bottomContainer);

  return { main, booksContainer };
};
