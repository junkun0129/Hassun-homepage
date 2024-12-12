import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 35.6895, // Example: Tokyo
  lng: 139.6917,
};

const MyMap: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey={"AIzaSyCLMvo_s8JFciYhn2XIBjYADYPn6Vzk_Yw"}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMap;
