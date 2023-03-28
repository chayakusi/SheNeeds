import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navbar from './Components/Navbar';
import './Share.css';

const SharePage = () => {
  return (
    <>
      <Navbar />
      <Container className="share-container">
        <Row>
          <Col>
            <h1>Share Our Cause</h1>
            <p>Spreading the word about our organization and the importance of menstrual hygiene is crucial to our success. Help us raise awareness by sharing our cause with your friends and family on social media.</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <div className="social-media-icons">
              <Button variant="outline-primary" as="a" href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></Button>
              <Button variant="outline-primary" as="a" href="https://www.twitter.com"><i className="fab fa-twitter"></i></Button>
              <Button variant="outline-primary" as="a" href="https://www.instagram.com"><i className="fab fa-instagram"></i></Button>
              <Button variant="outline-primary" as="a" href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></Button>
              <Button variant="outline-primary" as="a" href="https://www.youtube.com"><i className="fab fa-youtube"></i></Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SharePage;