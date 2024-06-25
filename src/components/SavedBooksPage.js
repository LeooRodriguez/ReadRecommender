import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SavedBooksPage.css';

const SavedBooksPage = () => {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    const books = JSON.parse(localStorage.getItem('savedBooks')) || [];
    setSavedBooks(books);
  }, []);

  const removeBook = (index) => {
    const updatedBooks = savedBooks.filter((_, i) => i !== index);
    setSavedBooks(updatedBooks);
    localStorage.setItem('savedBooks', JSON.stringify(updatedBooks));
  };

  return (
    <Container className="saved-books-page">
      <Row>
        <Col>
          <h1 className="page-title">Saved Books</h1>
          <Row>
            {savedBooks.length === 0 ? (
              <p>No books saved yet.</p>
            ) : (
              savedBooks.map((book, index) => (
                <Col md={4} key={index} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>
                        <strong>Author:</strong> {book.author_name?.join(', ')}<br/>
                        <strong>First Published:</strong> {book.first_publish_year}<br/>
                        <strong>Publisher:</strong> {book.publisher?.join(', ')}<br/>
                        <strong>Subjects:</strong> {book.subject?.slice(0, 3).join(', ')}
                      </Card.Text>
                      <Button variant="danger" onClick={() => removeBook(index)}>Remove</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SavedBooksPage;