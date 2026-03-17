import { fetchBooks } from './api/fetch-books';
import { createHeader } from './components/create-header';
import { createMain } from './components/create-main';
import { createFooter } from './components/create-footer';
import { createBookCard } from './components/create-book-card';
import { createFavoriteCard } from './components/create-favorite-card';
import { defaultBooks } from './storage/defaultBooks';
import { renderCards } from './utils/render-cards';
import { findFavorite, getFavorites, toggleFavorite } from './utils/favorites';
import './style.css';

const app = async () => {
  const root = document.getElementById('root');

  let favorites = getFavorites();

  const onSearch = async (query) => {
    if (!query) {
      setStatus('empty');
      return;
    }
    setStatus('loading');

    try {
      const data = await fetchBooks(query);

      if (!data.docs || data.docs.length === 0) {
        setStatus('error', 'No results found. Please try a different query');
        return;
      }

      await renderCards(
        data.docs,
        (book) => createBookCard(book, onLike, findFavorite(book, favorites)),
        booksContainer
      );

      setStatus('idle');
    } catch (error) {
      setStatus('error', 'Failed to fetch books. Please try again later');
      console.error('Error during search:', error);
    }
  };

  const onLike = (book) => {
    toggleFavorite(book, favorites);
    updateFavorites();
    updateBookCard(book);
  };

  const setStatus = (status, messageText = '') => {
    statusMessage.className = 'status-message';

    if (status === 'loading') {
      statusMessage.textContent = 'Loading...';
    } else if (status === 'error') {
      statusMessage.classList.add('status-error');
      statusMessage.textContent =
        messageText || 'An error occurred. Please try again.';
    } else if (status === 'empty') {
      statusMessage.textContent = 'Please enter a query';
    } else {
      statusMessage.textContent = '';
    }
  };

  const updateBookCard = (book) => {
    const bookCard = booksContainer.querySelector(`[data-key="${book.key}"]`);
    if (bookCard) {
      const likeIcon = bookCard.querySelector('.book-like-icon');
      if (likeIcon) {
        likeIcon.classList.toggle('liked', findFavorite(book, favorites));
      }
    }
  };

  const updateFavorites = async () => {
    await renderCards(
      favorites,
      (favorite) => createFavoriteCard(favorite, onLike),
      favoritesContainer
    );

    const favoritesCount = favorites.length;
    favoritesHeaderDescription.textContent = `${favoritesCount} book${favoritesCount !== 1 ? 's' : ''} saved`;
  };

  const header = createHeader();
  const {
    main,
    booksContainer,
    favoritesContainer,
    favoritesHeaderDescription,
    statusMessage,
  } = createMain(onSearch);
  const footer = createFooter();

  await renderCards(
    defaultBooks,
    (book) => createBookCard(book, onLike, findFavorite(book, favorites)),
    booksContainer
  );

  updateFavorites();
  setStatus('idle');

  root.append(header, main, footer);
};

app();
