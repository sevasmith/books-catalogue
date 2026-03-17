export const createFooter = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const footerWrapper = document.createElement('div');
  footerWrapper.classList.add('footer-wrapper');

  const content = document.createElement('div');
  content.classList.add('footer-content');

  const text = document.createElement('div');
  text.classList.add('footer-text');
  text.textContent = 'Powered by\u00A0';

  const link = document.createElement('a');
  link.classList.add('footer-link');
  link.textContent = 'Open Library';
  link.href = 'https://openlibrary.org/';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';

  content.append(text, link);
  footerWrapper.append(content);
  footer.append(footerWrapper);

  return footer;
};
