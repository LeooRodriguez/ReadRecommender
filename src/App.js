import React, { useState } from 'react';
import NavigationBar from './components/Navbar';
import BookList from './components/BookList';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const searchBooks = async (page = 1) => {
    if (query.trim() === '') return;
    setLoading(true);
    const limit = 10; 
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}&page=${page}&limit=${limit}`);
    const data = await response.json();


    const filteredBooks = data.docs.filter(book => book.cover_i);

    setBooks(filteredBooks || []);
    setPage(page);
    setLoading(false);
  };

  const handleNextPage = () => {
    searchBooks(page + 1);
  };

  const handlePreviousPage = () => {
    searchBooks(page - 1);
  };

  return (
    <div className="App">
      <NavigationBar
        setQuery={setQuery}
        searchBooks={searchBooks}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        page={page}
      />
      <div className="container mt-4">
        {loading ? <div>Loading...</div> : <BookList books={books} />} 
      </div>
      <Footer />
    </div>
  );
};
// TOOD modificar ese loading lo antes posible
export default App;
