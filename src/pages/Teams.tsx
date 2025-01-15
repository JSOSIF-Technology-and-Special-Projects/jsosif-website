"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchTeams } from "../data/mockApi"; // Import the updated mock data
import TeamCard from "../components/TeamCard"; // Reuse the `TeamCard` component for members
import jsosifteam from "../assets/jsosifteam.png"; // Import the banner image

interface Team {
	name: string;
	members: {
		name: string;
		role: string;
		program: string;
		year: string;
		joined: string;
		image: string;
		linkedin: string;
	}[];
}

export default function Teams() {
	const [teams, setTeams] = useState<Team[]>([]);

	useEffect(() => {
		// Fetch teams data
		const fetchData = async () => {
			const data = await fetchTeams();
			setTeams(data);
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
				src={jsosifteam}
				alt="Our Team Banner"
				style={{ height: scrollPosition / 8 + 400 }}
				className={`w-full object-cover -z-0 ${
					scrollPosition > 0 ? "fixed" : "absolute"
				} ${scrollPosition > 400 && "hidden"}`}
			/>
			{/* Overlay Content */}
			<div className="flex items-start justify-center mt-10 mb-64 z-10">
				<div className="flex flex-col items-center justify-center gap-2">
					<div className="flex flex-col items-center justify-center w-fit bg-primary opacity-90">
						<h1 className="text-7xl font-medium text-white px-16 py-2 rounded-sm shadow-md">
							Our Team
						</h1>
					</div>
					<div className="flex flex-col items-center justify-center">
						<div className="w-screen bg-primary h-0.5 mb-1" />
						<div className="w-screen bg-primary h-1" />
					</div>
				</div>
			</div>
			<div className="relative z-10 bg-white">
				{/* Teams Section */}
				<div className="my-12">
					<h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
						Meet Our Teams
					</h1>

					{/* Render Each Team */}
					{teams.map((team, index) => (
						<div
							key={index}
							id={team.name.replace(/\s+/g, "-").toLowerCase()}
							className="mb-12"
						>
							{/* Team Header */}
							<h2 className="text-2xl font-bold text-blue-800 pb-4 text-center">
								{team.name}
							</h2>

							{/* Team Members */}
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
								{team.members.map((member, idx) => (
									<TeamCard key={idx} member={member} />
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
