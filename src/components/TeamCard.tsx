//team card component that displays the team members of the jsosif team on the team page, was used for alumni card

"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface TeamCardProps {
	member: {
		name: string;
		firstName: string;
		lastName: string;
		role: string;
		program: string;
		year: string;
		joined: string;
		image: string;
		linkedin: string;
	};
}

export default function TeamCard({ member }: TeamCardProps) {
	return (
		<div className="w-full bg-white overflow-hidden mx-auto flex flex-col h-full">
			{/* Image */}
			<img
				className="w-full min-h-[20rem] max-h-[20rem] object-cover object-center"
				src={member.image ? member.image : "/images/jacobsweet.png"}
				alt={member.name}
			/>

			{/* Content */}
			<div className="flex flex-col justify-between mt-4 h-full">
				<div className="flex flex-col">
					<h3 className="text-xl font-serif text-primary min-h-14 mb-2">
						{member.role}
					</h3>
					<div className="flex flex-col w-full mb-4">
						<h1 className="text-4xl font-medium font-serif">
							{member.firstName}
						</h1>
						<h1 className="text-4xl font-medium font-serif">
							{member.lastName}
						</h1>
					</div>
					<p className="mt-2 text-gray-600">
						<strong>Program:</strong> {member.program}
					</p>
					<p className="text-gray-600 mb-4">
						<strong>Year:</strong> {member.year}
					</p>
					<p className="text-gray-600">
						JSOSIF member since {member.joined}
					</p>
				</div>
				{/* LinkedIn Button */}
				{member.linkedin && (
					<a
						href={member.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center mt-4"
					>
						<div className="p-1 w-12 h-12 bg-primary text-white text-sm font-medium rounded hover:bg-blue-700">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
								/>
							</svg>
						</div>
					</a>
				)}
			</div>
		</div>
	);
}
