import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Components/Navbar';

const HomePage = () => {
  const numPeopleInNeed = 10000; // replace with actual data
  const numDonations = 500; // replace with actual data
  const impact = numDonations * 10; // replace with actual calculation

  return (
    <>
    <Navbar />
    <Container>
      <Row>
        <Col>
          <div className="cover-story">
            <h1>Help Provide Sanitary Pads to Girls in Need</h1>
            <p>There are over <CountUp end={numPeopleInNeed} duration={5} separator="," /> girls in need of sanitary pads in our community. Your donation can make a big impact!</p>
            <Button variant="primary" size="lg" as={Link} to="/donate">Donate Now</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <div className="home-stat">
            <FontAwesomeIcon icon={faHeart} size="3x" />
            <h2><CountUp end={numDonations} duration={5} separator="," /> Donations</h2>
            <p>Your generosity has helped us make a difference in the lives of girls in our community.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="home-stat">
            <FontAwesomeIcon icon={faHeart} size="3x" />
            <h2><CountUp end={impact} duration={5} separator="," /> Pads</h2>
            <p>Your donation can provide a girl with a year's supply of sanitary pads, helping her stay in school and achieve her goals.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="home-stat">
            <FontAwesomeIcon icon={faHeart} size="3x" />
            <h2>Get Involved</h2>
            <p>You can make a difference by donating pads, volunteering your time, or spreading the word about our cause.</p>
            <Button variant="primary" size="sm" className="mt-2" as={Link} to="/get-involved">Learn More</Button>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2>Request Sanitary Pads</h2>
          <p>If you or someone you know needs sanitary pads, please fill out our request form.</p>
          <Button variant="primary" size="lg" className="mr-3" as={Link} to="/request">Request Now</Button>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default HomePage;
