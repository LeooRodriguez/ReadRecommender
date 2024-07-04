import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NextBooksPage.css';

const NextBooksPage = () => {
  const [nextBooks, setNextBooks] = useState([]);

  useEffect(() => {
    const books = JSON.parse(localStorage.getItem('nextBooks')) || [];
    console.log('Loaded books:', books); // Verifica la estructura de los datos cargados
    setNextBooks(books);
  }, []);

  const clearNextBooks = () => {
    localStorage.removeItem('nextBooks');
    setNextBooks([]);
  };

  return (
    <Container className="next-books-page">
      <Row>
        <Col>
          <h1 className="page-title">Next Books</h1>
          {nextBooks.length > 0 && (
            <div className="center-button">
              <Button variant="danger" onClick={clearNextBooks} className="mb-4">
                Clear Next Books
              </Button>
            </div>
          )}
          <Row className="justify-content-center mt-4">
            {nextBooks.length === 0 ? (
              <p>No books added to the list.</p>
            ) : (
              nextBooks.map((book, index) => (
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

export default NextBooksPage;
