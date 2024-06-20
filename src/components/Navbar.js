import React from 'react';
import { Navbar, Form, FormControl, Button, Container } from 'react-bootstrap';
import './Navbar.css';

const NavigationBar = ({ setQuery, searchBooks, handleNextPage, handlePreviousPage, page }) => {
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchBooks();
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="brand-name">Book Recommender</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Form inline onSubmit={handleSearch} className="d-flex">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleInputChange} />
            <Button variant="outline-light" type="submit">Search</Button>
          </Form>
          <div className="d-flex align-items-center">
            {page > 1 && <Button variant="outline-light" onClick={handlePreviousPage} className="mr-2">Previous</Button>}
            <Button variant="outline-light" onClick={handleNextPage}>Next</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
