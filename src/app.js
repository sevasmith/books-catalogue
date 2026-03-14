import { fetchBooks } from './api/fetch-books';
import { createHeader } from './components/create-header';
import { createMain } from './components/create-main';
import { createFooter } from './components/create-footer';
import { createBookCard } from './utils/create-book-card';
import './style.css';

const app = () => {
  const root = document.getElementById('root');

  const onSearch = (query) => {
    fetchBooks(query)
      .then((data) => {
        data.docs.forEach((book) => {
          const bookCard = createBookCard(book);
          booksContainer.appendChild(bookCard);
        });
        console.log('Books found:', data);
      })
      .catch((error) => {
        console.error('Error during search:', error);
      });
  };

  const header = createHeader();
  const { main, booksContainer } = createMain(onSearch);
  const footer = createFooter();
  root.append(header, main, footer);
};

app();
