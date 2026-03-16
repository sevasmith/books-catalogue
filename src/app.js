import { fetchBooks } from './api/fetch-books';
import { createHeader } from './components/create-header';
import { createMain } from './components/create-main';
import { createFooter } from './components/create-footer';
import { createBookCard } from './utils/create-book-card';
import './style.css';
import { createFavoriteCard } from './utils/create-favorite-card';

const app = () => {
  const root = document.getElementById('root');

  let favorites = [];

  const onSearch = (query) => {
    fetchBooks(query)
      .then((data) => {
        data.docs.forEach((book) => {
          const bookCard = createBookCard(book, onLike);
          booksContainer.appendChild(bookCard);
        });
        console.log('Books found:', data);
      })
      .catch((error) => {
        console.error('Error during search:', error);
      });
  };

  const onLike = (book) => {

    const favoriteCard = createFavoriteCard(book);
    console.log(book);
    favoritesContainer.append(favoriteCard);

    // if (favorites.some((fav) => fav.key === book.key)) {
    //   favorites = favorites.filter((fav) => fav.key !== book.key);
    // } else {
    //   favorites.push(book);
    // }
    // favoritesContainer.innerHTML = '';
    // favorites.forEach((favorite) => {
    //   const favoriteCard = createFavoriteCard(favorite);
    //   favoritesContainer.append(favoriteCard);
    // });
  };

  const header = createHeader();
  const { main, booksContainer, favoritesContainer } = createMain(onSearch);
  const footer = createFooter();
  root.append(header, main, footer);
};

app();
