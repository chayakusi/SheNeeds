import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker, DirectionsRenderer, InfoWindow } from "@react-google-maps/api";

const Map = ({ dropOffLocations, center, zoom }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [directions, setDirections] = useState(null);

  const onMarkerClick = (location) => {
    setSelectedLocation(location);
    const directionsService = new window.google.maps.DirectionsService();
    const origin = new window.google.maps.LatLng(center.lat, center.lng);
    const destination = new window.google.maps.LatLng(location.lat, location.lng);

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  };

  const onInfoWindowClose = () => {
    setSelectedLocation(null);
    setDirections(null);
  };

  return (
    <LoadScript googleMapsApiKey="API_KEY">
      <div style={{ height: "400px", width: "100%" }}>
        <GoogleMap mapContainerStyle={{ height: "100%", width: "100%" }} center={center} zoom={zoom}>
          {dropOffLocations.map((location, index) => (
            <Marker
              key={index}
              position={{ lat: location.lat, lng: location.lng }}
              onClick={() => onMarkerClick(location)}
            >
              {selectedLocation && selectedLocation.lat === location.lat && selectedLocation.lng === location.lng && (
                <InfoWindow onCloseClick={onInfoWindowClose}>
                  <div>
                    <h3>{selectedLocation.address}</h3>
                    <button onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`)}>Get Directions</button>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          ))}
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default Map;