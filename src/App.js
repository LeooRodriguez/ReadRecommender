import React, { useState } from 'react';
import NavigationBar from './components/Navbar';
import BookList from './components/BookList';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

const App = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');

  const searchBooks = async () => {
    if (query.trim() === '') return;
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
    const data = await response.json();
    setBooks(data.docs || []);
  };

  return (
    <div className="App">
      <NavigationBar setQuery={setQuery} searchBooks={searchBooks} />
      <div className="container mt-4">
        <BookList books={books} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
