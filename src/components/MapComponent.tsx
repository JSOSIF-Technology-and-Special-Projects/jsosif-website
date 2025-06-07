import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const center = {
	lat: 42.3070989623961, //maybe fix this but works for now
	lng: -83.06467324703436,
};

//marker icon
const markerIcon = new L.Icon({
	iconUrl:
		"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
	shadowUrl:
		"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [0, -40],
	shadowSize: [41, 41],
});

//white blurb that pops up
const OpenPopupOnLoad = () => {
	const map = useMap();
	useEffect(() => {
		map.setView(center, 14, { animate: true }); // Adjust map view slightly upwards
		const marker = L.marker(center, { icon: markerIcon }).addTo(map);
		marker
			.bindPopup(
				`<div style="max-width: 200px; word-wrap: break-word; font-size: 14px; text-align: center;">
        <h1 style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">John Simpson Odette Student Investment Fund</h1>
        <p>Odette School of Business @ University of Windsor</p>
      </div>`
			)
			.openPopup();
	}, [map]);
	return null;
};

//dont allow user to move or anything
const MapComponent = () => {
	return (
		<div className="w-full h-[15rem] md:h-[30vh] lg:h-[50vh] m-0 p-0">
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
