import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';

const HomePage = () => {
  const carouselItems = [
    { id: 1, image: 'https://images.pexels.com/photos/2228586/pexels-photo-2228586.jpeg', caption: 'Explore a World of Books' },
    { id: 2, image: 'https://images.pexels.com/photos/3207628/pexels-photo-3207628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', caption: 'Find Your Next Favorite Read' },
    { id: 3, image: 'https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', caption: 'Discover New Authors and Genres' }

  ];

  const testimonials = [
    { id: 1, text: "I've found so many great books thanks to this site!", name: "Camila Parker" },
    { id: 2, text: "A fantastic resource for any book lover.", name: "Jane Swift" },
    { id: 3, text: "Highly recommend for anyone looking to discover new reads.", name: "Bob Johnson" }
  ];

  return (
    <div className="homepage">
      <Container fluid className="highlight-section">
        <Row className="justify-content-center align-items-center text-center">
          <Col md={8}>
            <motion.div 
              initial={{ opacity: 0, y: -50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }}
            >
              <h1 className="highlight-text">Discover Your Next Favorite Book</h1>
              <Button variant="primary" size="lg" href="/search" className="highlight-button">Start Exploring</Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mt-5">
          <Col md={12}>
            <Carousel showThumbs={false} autoPlay infiniteLoop>
              {carouselItems.map(item => (
                <div key={item.id}>
                  <img src={item.image} alt={item.caption} />
                  <p className="legend">{item.caption}</p>
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
        <Row className="mt-5 text-center section">
          <Col md={12}>
            <h5>Buy Books Online</h5>
            <p>Find your favorite books from these popular online stores.</p>
            <Button variant="primary" size="lg" href="https://books.google.com" target="_blank" rel="noopener noreferrer" className="m-2">Google Books</Button>
            <Button variant="primary" size="lg" href="https://www.amazon.com/books-used-books-textbooks/b?ie=UTF8&node=283155" target="_blank" rel="noopener noreferrer" className="m-2">Amazon</Button>
            <Button variant="primary" size="lg" href="https://www.barnesandnoble.com" target="_blank" rel="noopener noreferrer" className="m-2">Barnes & Noble</Button>
            <Button variant="primary" size="lg" href="https://bookoutlet.com/" target="_blank" rel="noopener noreferrer" className="m-2">BookOulet</Button>
          </Col>
        </Row>
        <Row className="mt-5 text-center section">
          <Col md={12}>
            <h5>User Testimonials</h5>
            <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
              {testimonials.map(testimonial => (
                <div key={testimonial.id}>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <p className="testimonial-name">- {testimonial.name}</p>
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
        <Row className="mt-5 text-center section">
          <Col md={12}>
            <h5>Terms and Conditions</h5>
            <p>
              Welcome to Read Recommender! By using Read Recommender, you agree to the following terms and conditions:
            </p>
            <ul>
              <li>You agree to use Read Recommender for lawful purposes only.</li>
              <li>You will not use Read Recommender to distribute any harmful or illegal content.</li>
              <li>We reserve the right to terminate or restrict your access to Read Recommender at any time without notice.</li>
              <li>We do not guarantee the accuracy, completeness, or usefulness of any information provided on Read Recommender.</li>
              <li>We are not responsible for any third-party content accessed through links on Read Recommender.</li>
            </ul>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
