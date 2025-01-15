import React, { useState } from "react";
import {
	GoogleMap,
	InfoWindow,
	LoadScript,
	Marker,
} from "@react-google-maps/api";

const MapComponent = () => {
	const mapStyles = [
		{
			featureType: "all",
			elementType: "labels.text.fill",
			stylers: [
				{ saturation: 36 },
				{ color: "#000000" },
				{ lightness: 60 },
			],
		},
		{
			featureType: "all",
			elementType: "labels.text.stroke",
			stylers: [
				{ visibility: "on" },
				{ color: "#000000" },
				{ lightness: 16 },
			],
		},
		{
			featureType: "all",
			elementType: "labels.icon",
			stylers: [{ visibility: "off" }],
		},
		{
			featureType: "administrative",
			elementType: "geometry.fill",
			stylers: [{ color: "#000000" }, { lightness: 20 }],
		},
		{
			featureType: "administrative",
			elementType: "geometry.stroke",
			stylers: [{ color: "#000000" }, { lightness: 17 }, { weight: 1.2 }],
		},
		{
			featureType: "landscape",
			elementType: "geometry",
			stylers: [{ color: "#000000" }, { lightness: 28 }],
		},
		{
			featureType: "poi",
			elementType: "geometry",
			stylers: [{ color: "#000000" }, { lightness: 24 }],
		},
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [{ color: "#000000" }, { lightness: 17 }],
		},
		{
			featureType: "road.highway",
			elementType: "geometry.stroke",
			stylers: [{ color: "#000000" }, { lightness: 29 }, { weight: 0.2 }],
		},
		{
			featureType: "road.arterial",
			elementType: "geometry",
			stylers: [{ color: "#000000" }, { lightness: 18 }],
		},
		{
			featureType: "road.local",
			elementType: "geometry",
			stylers: [{ color: "#000000" }, { lightness: 16 }],
		},
		{
			featureType: "transit",
			elementType: "geometry",
			stylers: [{ color: "#000000" }, { lightness: 19 }],
		},
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [{ color: "#000000" }, { lightness: 17 }],
		},
	];

	const containerStyle = {
		width: "100%",
		height: "100%", // Use full height of the parent container
		margin: 0, // Remove any default margins
		padding: 0, // Remove any default padding
	};

	const center = {
		lat: 42.3050989623961, // Replace with your desired latitude
		lng: -83.06467324703436, // Replace with your desired longitude
	};

	const [marker, markerRef] = useState<Marker | null>(null);
	const [infoWindow, setInfoWindow] = useState(true);

	const handleInfoCloseClick = () => {
		setInfoWindow(false);
	};

	const handleInfoOpenClick = () => {
		setInfoWindow(true);
	};

	return (
		<div
			className="w-full h-screen max-h-[50vh] m-0 p-0"
			style={{ margin: 0, padding: 0, overflow: "hidden" }} // Ensure no extra white space
		>
			<LoadScript
				googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY || ""}
			>
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={center}
					zoom={14}
					options={{ styles: mapStyles }}
				>
					<Marker
						ref={(newRef) => markerRef(newRef)}
						position={center}
						onClick={handleInfoOpenClick}
					>
						{infoWindow && marker ? (
							<InfoWindow
								//@ts-expect-error anchor prop is not recognized by TypeScript
								anchor={marker}
								onDomReady={() => setInfoWindow(true)}
								onUnmount={() => setInfoWindow(false)}
								onCloseClick={handleInfoCloseClick}
							>
								<div>
									<h1 className="font-medium">
										John Simpson Odette Student Investment
										Fund
									</h1>
									<p>
										Odette School of Business @ University
										of Windsor
									</p>
								</div>
							</InfoWindow>
						) : null}
					</Marker>
				</GoogleMap>
			</LoadScript>
		</div>
	);
};

export default MapComponent;
