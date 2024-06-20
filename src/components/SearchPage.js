import React, { useState } from 'react';
import BookList from './BookList';
import { Bars } from 'react-loader-spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchPage.css';

const SearchPage = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

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
    setHasSearched(true);
  };

  const handleNextPage = () => {
    searchBooks(page + 1);
  };

  const handlePreviousPage = () => {
    searchBooks(page - 1);
  };

  return (
    <div className="container mt-4">
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search for books" 
          onChange={(e) => setQuery(e.target.value)} 
          className="form-control"
        />
        <button onClick={() => searchBooks()} className="btn btn-primary ml-2">Search</button>
        {hasSearched && (
          <>
            {page > 1 && <button onClick={handlePreviousPage} className="btn btn-secondary ml-2">Previous</button>}
            <button onClick={handleNextPage} className="btn btn-secondary ml-2">Next</button>
          </>
        )}
      </div>
      {loading ? (
        <div className="loading">
          <Bars
            height="100"
            width="100"
            color="#007bff"
            ariaLabel="loading"
          />
        </div>
      ) : (
        <BookList books={books} />
      )}
    </div>
  );
};

export default SearchPage;
