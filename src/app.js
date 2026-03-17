import { fetchBooks } from './api/fetch-books';
import { createHeader } from './components/create-header';
import { createMain } from './components/create-main';
import { createFooter } from './components/create-footer';
import { createBookCard } from './utils/create-book-card';
import { createFavoriteCard } from './utils/create-favorite-card';
import { defaultBooks } from './storage/defaultBooks';
import './style.css';

const app = () => {
  const root = document.getElementById('root');

  let favorites = localStorage.getItem('favorites')
    ? JSON.parse(localStorage.getItem('favorites'))
    : [];

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

      const fragment = document.createDocumentFragment();
      const images = [];

      data.docs.forEach((book) => {
        const isFavorite = favorites.some((fav) => fav.key === book.key);
        const bookCard = createBookCard(book, onLike, isFavorite);
        bookCard.dataset.key = book.key;
        fragment.appendChild(bookCard);

        const img = bookCard.querySelector('img');
        if (img) images.push(img);
      });

      await Promise.all(
        images.map((img) => {
          return new Promise((resolve) => {
            if (img.complete) resolve();
            else img.onload = img.onerror = resolve;
          });
        })
      );

      booksContainer.innerHTML = '';
      booksContainer.appendChild(fragment);

      setStatus('idle');
    } catch (error) {
      setStatus('error', 'Failed to fetch books. Please try again later');
      console.error('Error during search:', error);
    }
  };

  const onLike = (book) => {
    if (favorites.some((fav) => fav.key === book.key)) {
      favorites = favorites.filter((fav) => fav.key !== book.key);
    } else {
      favorites.push(book);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
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
      console.log(1);
      const likeIcon = bookCard.querySelector('.book-like-icon');
      if (likeIcon) {
        likeIcon.classList.toggle(
          'liked',
          favorites.some((fav) => fav.key === book.key)
        );
        console.log(favorites.some((fav) => fav.key === book.key));
      }
    }
  };

  const updateFavorites = async () => {
    const fragment = document.createDocumentFragment();
    const images = [];

    favorites.forEach((favorite) => {
      const favoriteCard = createFavoriteCard(favorite, onLike);
      favoriteCard.dataset.key = favorite.key;
      fragment.append(favoriteCard);

      const img = favoriteCard.querySelector('img');
      if (img) images.push(img);
    });

    await Promise.all(
      images.map((img) => {
        return new Promise((resolve) => {
          if (img.complete) resolve();
          else img.onload = img.onerror = resolve;
        });
      })
    );

    favoritesContainer.innerHTML = '';
    const favoritesCount = favorites.length;
    favoritesHeaderDescription.textContent = `${favoritesCount} book${favoritesCount !== 1 ? 's' : ''} saved`;
    favoritesContainer.appendChild(fragment);
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

  defaultBooks.forEach((book) => {
    const isFavorite = favorites.some((fav) => fav.key === book.key);
    const bookCard = createBookCard(book, onLike, isFavorite);
    bookCard.dataset.key = book.key;
    booksContainer.appendChild(bookCard);
  });

  updateFavorites();
  setStatus('idle');

  root.append(header, main, footer);
};

app();
