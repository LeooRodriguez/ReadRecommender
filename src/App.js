import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import SavedBooksPage from './components/SavedBooksPage';
import NextBooksPage from './components/NextBooksPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<div className="search-page"><SearchPage /></div>} />
          <Route path="/saved" element={<SavedBooksPage />} />
          <Route path="/nextbooks" element={<NextBooksPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
