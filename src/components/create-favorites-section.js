import { createHeartIcon } from '../utils/create-heart-icon';

export const createFavoritesSection = () => {
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

  return {
    favoritesSection,
    favoritesContainer,
    favoritesHeaderDescription,
  };
};
