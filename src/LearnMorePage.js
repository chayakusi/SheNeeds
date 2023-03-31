import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navbar from './Components/Navbar';
import './LearnMore.css';

const LearnMorePage = () => {
  return (
    <>
      <Navbar />
      <Container className="learn-more-container">
        <Row>
        <Col>
            <h1>Menstruation and Its Impact</h1>
            <p>Menstruation is a natural biological process that occurs in females every month. During this time, the lining of the uterus is shed through the vagina in the form of blood and other fluids. Although menstruation is a natural process, it is often surrounded by shame and stigma, leading to a lack of awareness and support for females during this time.</p>
            <p>Many girls and women around the world face challenges related to menstruation. In developing countries, the lack of access to menstrual hygiene products, such as sanitary pads, can cause girls to miss school and even drop out altogether. Without proper menstrual hygiene, girls are at a higher risk of infections, reproductive health issues, and social isolation. In developed countries, the cost of menstrual hygiene products can be prohibitive for low-income individuals, leading to difficulties in managing menstruation with dignity.</p>
            <p>At our organization, we aim to break the stigma surrounding menstruation and provide girls and women with access to menstrual hygiene products so they can continue their education and reach their full potential. We believe that menstruation should not be a barrier to education, employment, or participation in society.</p>
            </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h2>How You Can Help</h2>
            <p>There are several ways you can help make a difference:</p>
            <ul>
              <li>Donate to our organization to support our cause</li>
              <li>Volunteer your time and skills to help us distribute sanitary pads and raise awareness</li>
              <li>Spread the word about our organization and the importance of menstrual hygiene</li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h2>Donate Now</h2>
            <p>Your donation can make a big impact on the lives of girls in need. Every dollar helps us purchase and distribute sanitary pads and other menstrual hygiene products.</p>
            <Button variant="primary" size="lg" as="a" href="/donate">Donate Now</Button>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h2>Volunteer</h2>
            <p>Volunteering your time and skills is a great way to support our cause. Whether you want to help us distribute sanitary pads or organize events to raise awareness, we welcome your support.</p>
            <Button variant="primary" size="lg" as="a" href="/volunteer">Volunteer Now</Button>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h2>Share Our Cause</h2>
            <p>Spreading the word about our organization and the importance of menstrual hygiene is crucial to our success. Help us raise awareness by sharing our cause with your friends and family on social media.</p>
            <Button variant="primary" size="lg" as="a" href="/share">Share Now</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LearnMorePage;