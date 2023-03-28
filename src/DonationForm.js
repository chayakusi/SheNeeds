import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import Map from './Map';

const DonationForm = ({ type }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    zipCode: '',
    numPads: ''
  });
  const [dropOffLocations, setDropOffLocations] = useState([]);
  const [center, setCenter] = useState({ lat: 37.7749, lng: -122.4194 });
  const [zoom, setZoom] = useState(11);
  const [selectedLocation, setSelectedLocation] = useState(null);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  async function getNearbyZipCodes(zipcode) {
    const apiKey = "a68586b0-cd4a-11ed-bd6a-e3a5f3227fd9";
    const radius = 10;
    const url = `https://app.zipcodebase.com/api/v1/radius?apikey=${apiKey}&code=${zipcode}&radius=${radius}&country=us`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const res = data.results.map((zip) => zip.code);
      console.log(res)
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (type === 'donate') {
      alert('Donation request submitted!');
    } else if (type === 'request') {
      alert('Your request has been submitted!');
    }

    //  getNearbyZipCodes(formData.zipCode)    //get list of nearby zipcodes

    const locations = await fetchLocations(formData.zipCode);
    setDropOffLocations(locations);
  };

  const fetchLocations = async (zipCode) => {
    // fetch locations based on zip code using the Google Maps API
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=-33.8670522%2C151.1957362&key=AIzaSyDTfhI-ZbPtq69HUxbt1WhMhW2KZo9lDTs`);
    const data = await response.json();

    // extract the latitude and longitude coordinates of the locations
    const locations = data.results.map((result) => ({
      lat: result.geometry.location.lat,
      lng: result.geometry.location.lng,
      formatted_address: result.formatted_address,
    }));
    
    if (locations.length > 0) {
      const { lat, lng } = locations[0];
      setCenter({ lat, lng });
      setZoom(14);
    }
    return locations;
  };

  const handleMapClick = () => {
    setSelectedLocation(null);
  };

  return (
    <Container>
      {dropOffLocations.length > 0 ? (
        <>
        <Map dropOffLocations={dropOffLocations} center={center} zoom={zoom} selectedLocation={selectedLocation} onMapClick={handleMapClick} onMarkerClick={setSelectedLocation} />
        </>
        ) : (
        <div className='request-section'>
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