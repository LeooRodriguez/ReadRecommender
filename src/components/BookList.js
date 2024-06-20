import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const BookList = ({ books }) => {
  return (
    <Row>
      {books.map((book) => (
        <Col xs={12} sm={6} md={4} key={book.key}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.author_name?.join(', ')}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default BookList;
