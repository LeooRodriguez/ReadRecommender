import React from 'react';
import { Modal, Button, Image, Row, Col } from 'react-bootstrap';
import './BookModal.css';

const BookModal = ({ show, handleClose, book }) => {
  if (!book) return null;

  const subjects = book.subject?.slice(0, 3).join(', ');

  const saveBook = () => {
    const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    const bookToSave = {
      title: book.title,
      author_name: book.author_name,
      first_publish_year: book.first_publish_year,
      publisher: book.publisher,
      subject: book.subject,
      cover_i: book.cover_i,
      first_sentence: book.first_sentence,
      description: book.description,
    };

    if (!savedBooks.some(savedBook => savedBook.title === bookToSave.title)) {
      savedBooks.push(bookToSave);
      localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
    }
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{book.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={4}>
            <Image src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} fluid />
          </Col>
          <Col md={8}>
            <p><strong>Author(s):</strong> {book.author_name?.join(', ')}</p>
            <p><strong>First Published:</strong> {book.first_publish_year} </p>
            <p><strong>Publisher:</strong> {book.publisher?.join(', ')}</p>
            <p><strong>Subject(s):</strong> {subjects}</p>
            {book.first_sentence && <p><strong>First Sentence:</strong> {book.first_sentence}</p>}
            {book.description && <p><strong>Description:</strong> {book.description}</p>}
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={saveBook}>
          Save
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookModal;
