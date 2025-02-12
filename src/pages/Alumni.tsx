"use client";

import React, { useEffect, useState } from "react";
import AlumniCard from "../components/AlumniCard"; // Reuse the new AlumniCard component
import { fetchAlumni } from "../data/mockApi"; // Use the fetchAlumni function
import alumnibackground from "../assets/alumnibackground.webp"; // Replace with your actual banner image
import Image from "next/image";

interface Alumni {
	name: string;
	position: string;
	company: string;
	program: string;
	image: string;
	linkedin: string;
	blurb: string;
	year: string;
}

export default function Alumni() {
	const [alumni, setAlumni] = useState<Alumni[]>([]);

	useEffect(() => {
		// Fetch alumni data from the mock API
		const fetchData = async () => {
			const alumniData = await fetchAlumni();
			setAlumni(alumniData);
		};

		fetchData();
	}, []);

	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="min-h-screen flex flex-col w-full bg-white">
			{/* Banner Section */}
			<Image
				src={alumnibackground}
				alt="Our Alumni Banner"
				style={{ height: scrollPosition / 8 + 400 }}
				className={`w-full object-cover -z-0 ${
					scrollPosition > 0 ? "fixed" : "absolute"
				} ${scrollPosition > 400 && "hidden"}`}
			/>
			{/* Overlay Content */}
			<div className="flex items-start justify-center mt-10 mb-40 sm:mb-64 z-10 overflow-hidden">
				<div className="flex flex-col items-center justify-center gap-2">
					<div className="flex flex-col items-center justify-center w-fit bg-primary opacity-90">
						<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white px-16 py-2 rounded-sm shadow-md">
							Our Alumni
						</h1>
					</div>
					<div className="flex flex-col items-center justify-center">
						<div className="w-screen bg-primary h-0.5 mb-1" />
						<div className="w-screen bg-primary h-1" />
					</div>
				</div>
			</div>

			{/* Alumni Section */}
			<div className="relative z-10 bg-white flex flex-col py-12 items-center w-full">
				{/* Alumni Cards */}
				<div className="grid grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-20 w-full px-4 sm:px-10 md:px-40 xl:px-64 2xl:px-0 2xl:w-[50vw] h-full">
					{alumni.map((alum, idx) => (
						<AlumniCard key={idx} alumni={alum} />
					))}
				</div>
			</div>
		</div>
	);
}
