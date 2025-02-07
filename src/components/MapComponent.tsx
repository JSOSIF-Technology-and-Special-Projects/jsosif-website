import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const center = {
  lat: 42.3050989623961,
  lng: -83.06467324703436,
};

//marker icon
const markerIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const OpenPopupOnLoad = () => {
  const map = useMap();
  useEffect(() => {
    const marker = L.marker(center, { icon: markerIcon }).addTo(map);
    marker.bindPopup(
      `<h1 class="font-medium text-sm md:text-base">John Simpson Odette Student Investment Fund</h1><p>Odette School of Business @ University of Windsor</p>`
    ).openPopup();
  }, [map]);
  return null;
};

//dont allow user to move or anything
const MapComponent = () => {
  return (
    <div className="w-full h-screen max-h-[15rem] lg:max-h-[50vh] m-0 p-0">
      <MapContainer
        center={center}
        zoom={14}
        style={{ width: "100%", height: "100%" }}
        className="z-0"
        scrollWheelZoom={false}
        dragging={false}
        touchZoom={false}
        doubleClickZoom={false}
        boxZoom={false}
        keyboard={false}
        attributionControl={false}
      >
        {/* dark map theme */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          opacity={0.7}
        />
        <OpenPopupOnLoad />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
