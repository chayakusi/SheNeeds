import React from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const Map = ({ dropOffLocations, center, zoom, selectedLocation, onMapClick, onMarkerClick }) => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDTfhI-ZbPtq69HUxbt1WhMhW2KZo9lDTs"
    >
        <div style={{ height: "400px", width: "100%" }}>
            <GoogleMap
                mapContainerStyle={{ height: "100%", width: "100%" }}
                center={center}
                zoom={zoom}
                onClick={onMapClick}
            >
                {dropOffLocations.map((location, index) => (
                <Marker
                    key={index}
                    position={{ lat: location.lat, lng: location.lng }}
                    onClick={() => onMarkerClick(location)}
                >
                    {selectedLocation && selectedLocation.lat === location.lat && selectedLocation.lng === location.lng && (
                    <InfoWindow position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }} onCloseClick={() => onMarkerClick(null)}>
                        <div>{selectedLocation.formatted_address}</div>
                    </InfoWindow>
                    )}
                </Marker>
                ))}
            </GoogleMap>
        </div>
    </LoadScript>
  );
};

export default Map;