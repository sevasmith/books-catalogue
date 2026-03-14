export const createBookCard = (book) => {
  const card = document.createElement('div');
  card.classList.add('book-card');

  //   const cover = document.createElement('img');
  //   if (book.cover_i) {
  //     cover.src = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
  //     cover.alt = `${book.title} cover`;
  //   } else {
  //     cover.src = 'https://via.placeholder.com/150x200?text=No+Cover';
  //     cover.alt = 'No cover available';
  //   }

  const title = document.createElement('p');
  title.textContent = book.title || 'No Title Available';
  title.classList.add('book-title');

  //   const author = document.createElement('p');
  //   author.textContent = `Author: ${book.author_name ? book.author_name.join(', ') : 'Unknown'}`;
  //   author.classList.add('book-author');

  //   const year = document.createElement('p');
  //   year.textContent = `First Published: ${book.first_publish_year || 'Unknown'}`;
  //   year.classList.add('book-year');

  card.append(title);
  return card;
};
