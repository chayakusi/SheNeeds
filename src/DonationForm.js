import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';

const DonationForm = ({type}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    zipCode: '',
    numPads: ''
  });
  const [dropOffLocations, setDropOffLocations] = useState([]);
  const [center, setCenter] = useState({ lat: 37.7749, lng: -122.4194 });
  const [zoom, setZoom] = useState(11);
  const Marker = ({ lat, lng }) => <div className="marker"></div>;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (type === 'donate') {
      alert('Donation request submitted!');
    } else if (type === 'request') {
      alert('Your request has been submitted!');
    }
    const locations = await fetchLocations(formData.zipCode);
    setDropOffLocations(locations);
  };

  const fetchLocations = async (zipCode) => {
    // fetch locations based on zip code using the Google Maps API
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=${process.env.REACT_APP_MAP_API_KEY}`);
    const data = await response.json();

    // extract the latitude and longitude coordinates of the locations
    const locations = data.results.map((result) => ({
      lat: result.geometry.location.lat,
      lng: result.geometry.location.lng,
    }));

    return locations;
  };

  return (
    <Container>
      {dropOffLocations.length > 0 ? (
        <div style={{ height: "400px", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
            defaultCenter={center}
            defaultZoom={zoom}
          >
            {dropOffLocations.map((location, index) => (
              <Marker key={index} lat={location.lat} lng={location.lng} />
            ))}
          </GoogleMapReact>
        </div>
      ) : (
        <div>
          <Form onSubmit={handleSubmit} className="d-flex flex-column align-items-center justify-content-center">
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" name="name" value={formData.name} onChange={handleChange} required />
            </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group as={Col} controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} required />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formZipCode">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="text" placeholder="Enter zip code" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formNumPads">
                <Form.Label>Number of Pads</Form.Label>
                <Form.Control type="number" placeholder="Enter number of pads" name="numPads" value={formData.numPads} onChange={handleChange} required />
              </Form.Group>
            </Row>
            <Row>
              <Col>
                <Button variant="primary" type="submit">
                {type === 'donate' ? 'Donate' : 'Request'}
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      )}
    </Container>
  );
};

export default DonationForm;