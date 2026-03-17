# Books Catalogue

## Task

Task description: [Books Catalogue](https://drive.google.com/file/d/1swszcMU9rF_-zRJaA2VchPuU_d7yrAbs/view)

---

## How to run the app

1. Clone the repository:

git clone https://github.com/sevasmith/books-catalogue.git

2. Go to the project folder:

cd books-catalogue

3. Install dependencies:

npm install

4. Run the app:

npm run dev

## Project Structure

- src/
  - api/ — functions for working with external APIs (fetch books)
  - assets/ — icons
  - components/ — UI components (header, main, footer)
  - storage/ — static data (default books)
  - utils/ — helper functions (createBookCard, createFavoriteCard)
  - app.js — main application logic
  - styles.css — application styles

- index.html — entry point

## Features

Search books by title or author
Add/remove books from favorites
Favorites are saved in localStorage
Loading, error, and empty states handling
Smooth rendering (images load before display)

## Deploy

https://sevasmith-books-catalogue.netlify.app/
