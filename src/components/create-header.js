import bookLogo from '../assets/book.svg';

export const createHeader = () => {
  const header = document.createElement('header');
  header.classList.add('header');

  const headerWrapper = document.createElement('div');
  headerWrapper.classList.add('header-wrapper');

  const content = document.createElement('div');
  content.classList.add('header-content');

  const logo = document.createElement('img');
  logo.classList.add('header-logo');
  logo.src = bookLogo;

  const text = document.createElement('div');
  text.classList.add('header-text');

  const title = document.createElement('h2');
  title.textContent = 'The Library';
  title.classList.add('header-title');

  const description = document.createElement('p');
  description.textContent = 'Discover your next favorite book';

  text.append(title, description);
  content.append(logo, text);
  headerWrapper.append(content);
  header.append(headerWrapper);

  return header;
};
