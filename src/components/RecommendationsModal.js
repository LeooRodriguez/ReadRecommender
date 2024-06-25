import React, { useEffect, useState, useCallback } from 'react';
import { Modal, Button, ListGroup, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RecommendationsModal.css';

const RecommendationsModal = ({ show, handleClose, savedBooks }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecommendations = useCallback(async () => {
    if (savedBooks.length === 0) {
      return;
    }

    const firstAuthor = savedBooks[0].author_name ? savedBooks[0].author_name[0] : null;
    const firstSubject = savedBooks[0].subject ? savedBooks[0].subject[0] : null;

    console.log("Fetching recommendations for author:", firstAuthor);
    console.log("Fetching recommendations for subject:", firstSubject);

    setLoading(true);

    try {
      const fetchBooks = async (type, query) => {
        const response = await fetch(`https://openlibrary.org/search.json?${type}=${encodeURIComponent(query)}&limit=3`);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${type}=${query}`);
        }
        const data = await response.json();
        return data.docs.filter(book => book.cover_i);
      };

      const authorBooks = firstAuthor ? await fetchBooks('author', firstAuthor) : [];
      const subjectBooks = firstSubject ? await fetchBooks('subject', firstSubject) : [];

      const combinedBooks = [...authorBooks, ...subjectBooks];
      const uniqueBooks = Array.from(new Set(combinedBooks.map(book => book.key)))
        .map(key => combinedBooks.find(book => book.key === key));

      console.log("Filtered books by author with covers:", authorBooks);
      console.log("Filtered books by subject with covers:", subjectBooks);
      console.log("Combined unique books:", uniqueBooks);

      setRecommendations(uniqueBooks);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    } finally {
      setLoading(false);
    }
  }, [savedBooks]);

  const handleSaveBook = (book) => {
    const nextBooks = JSON.parse(localStorage.getItem('nextBooks')) || [];
    nextBooks.push(book);
    localStorage.setItem('nextBooks', JSON.stringify(nextBooks));
    alert(`${book.title} has been saved to your next books.`);
  };

  useEffect(() => {
    if (show) {
      fetchRecommendations();
    }
  }, [show, fetchRecommendations]);

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Recommended Books</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading ? (
          <div className="loading-spinner">
            <Spinner animation="border" role="status">
              <span className="sr-only"></span>
            </Spinner>
          </div>
        ) : (
          <ListGroup>
            {recommendations.length === 0 ? (
              <p>No recommendations found.</p>
            ) : (
              recommendations.map((book, index) => (
                <ListGroup.Item key={index}>
                  <img 
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`} 
                    alt={book.title} 
                    className="recommendation-cover"
                  />
                  <div className="recommendation-info">
                    <h5>{book.title}</h5>
                    <p>{book.author_name?.join(', ')}</p>
                    <Button variant="primary" onClick={() => handleSaveBook(book)}>Save to Next Books</Button>
                  </div>
                </ListGroup.Item>
              ))
            )}
          </ListGroup>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RecommendationsModal;
