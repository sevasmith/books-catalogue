export const fetchBooks = async (query) => {
  const formattedQuery = query.replace(/\s+/g, '+');

  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${formattedQuery}&limit=10`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};
