import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import BookModal from './BookModal';

const BookList = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
    setShowModal(false);
  };

  return (
    <>
      <Row>
        {books.map((book) => (
          <Col xs={12} sm={6} md={4} key={book.key} onClick={() => handleShowModal(book)}>
            <Card className="mb-4" style={{ cursor: 'pointer' }}>
              <Card.Img variant="top" src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.author_name?.join(', ')}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <BookModal show={showModal} handleClose={handleCloseModal} book={selectedBook} />
    </>
  );
};

export default BookList;
