import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center mb-2">
          <Col xs="auto">
            <a href="https://github.com/LeooRodriguez" target="_blank" rel="noopener noreferrer" className="footer-icon">
              <FaGithub size={24} />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://linkedin.com/in/leonardo-rodríguez-4560b4224" target="_blank" rel="noopener noreferrer" className="footer-icon">
              <FaLinkedin size={24} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
