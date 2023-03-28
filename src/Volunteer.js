import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navbar from './Components/Navbar';
import './Volunteer.css';

const VolunteerPage = () => {
  return (
    <>
      <Navbar />
      <Container className="volunteer-container">
        <Row>
          <Col>
            <h1>Volunteer Your Time and Skills</h1>
            <p>Volunteering your time and skills is a great way to support our cause. Whether you want to help us distribute sanitary pads or organize events to raise awareness, we welcome your support.</p>
            <p>To volunteer, please fill out the form below and we will get in touch with you:</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea className="form-control" id="message" rows="5"></textarea>
              </div>
              <Button variant="primary" type="submit">Submit</Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default VolunteerPage;