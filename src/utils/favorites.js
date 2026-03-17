export const getFavorites = () => {
  const favs = localStorage.getItem('favorites');
  return favs ? JSON.parse(favs) : [];
};

export const setFavorites = (favorites) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const findFavorite = (book, favorites) => {
  return favorites.some((fav) => fav.key === book.key);
};

export const toggleFavorite = (book, favorites) => {
  const index = favorites.findIndex((fav) => fav.key === book.key);
  if (index > -1) favorites.splice(index, 1);
  else favorites.push(book);

  setFavorites(favorites);
};
