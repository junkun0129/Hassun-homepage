import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import hassunMaker from "../../assets/hassun-map-marker.svg";
const containerStyle = {
  width: "100%",
  height: "200px", // 縦幅を小さくしたい場合はここを調整
};

const center = {
  lat: 34.46673255133638, // Example: Tokyo
  lng: 132.50718194964753,
};
const mapOptions = {
  disableDefaultUI: true, // デフォルトのUI（コントロール、ズームなど）を無効化
  zoomControl: false, // ズームコントロールを無効化
  scrollwheel: false, // スクロールでのズームを無効化
  mapTypeControl: false, // 地図の種類変更を無効化
  streetViewControl: false, // ストリートビューコントロールを無効化
  fullscreenControl: false, // フルスクリーンコントロールを無効化
};

const customIcon = {
  url: hassunMaker, // SVGアイコン
};
const MyMap: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey={"AIzaSyCLMvo_s8JFciYhn2XIBjYADYPn6Vzk_Yw"}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        options={mapOptions} // オプションを渡してすべてのUIを無効化
      >
        <Marker position={center} icon={customIcon} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMap;
