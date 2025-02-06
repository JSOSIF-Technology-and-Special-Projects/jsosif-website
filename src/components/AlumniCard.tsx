//alumni card component that displays alumni information and a read more button that opens a modal with more information

"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

//props for the alumni card component
interface AlumniCardProps {
	alumni: {
		name: string;
		position: string;
		company: string;
		program: string;
		image: string;
		linkedin: string;
		year: string;
		blurb: string;
	};
}

export default function AlumniCard({ alumni }: AlumniCardProps) {
	//states for the modal
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleReadMoreClick = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	//useEffect to disable scrolling when the modal is open
	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isModalOpen]);

	const name = alumni.name.split(" ");

	return (
		<>
			<div className="w-full bg-white overflow-hidden mx-auto flex flex-col h-full">
				{/* Image */}
				<img
					className="w-full min-h-[12rem] max-h-[12rem] sm:min-h-[20rem] sm:max-h-[20rem] object-cover object-center"
					src={alumni.image ? alumni.image : "images/nicofazio.png"}
					alt={alumni.name}
				/>

				{/* Content */}
				<div className="mt-4 flex flex-col justify-between">
					<div className="flex flex-col">
						<h3 className="text-sm sm:text-xl font-serif text-primary min-h-12 sm:min-h-14 mb-2">
							{alumni.position}
						</h3>
						<div className="flex flex-col w-full mb-4">
							<h1 className="text-lg sm:text-4xl xl:text-3xl 2xl:text-4xl font-semibold sm:font-medium font-serif">
								{name[0]}
							</h1>
							<h1 className="text-lg sm:text-4xl xl:text-3xl 2xl:text-4xl font-semibold sm:font-medium font-serif">
								{name[1]}
							</h1>
						</div>
						<p className="mt-2 text-sm sm:text-base text-gray-600">
							<strong>Company:</strong> {alumni.company}
						</p>
						<p className="text-sm sm:text-base text-gray-600">
							<strong>Program:</strong> {alumni.program}
						</p>
						<p className="text-sm sm:text-base text-gray-600 mb-4">
							<strong>Years on Fund:</strong> {alumni.year}
						</p>
						<p className="text-sm sm:text-base text-gray-600 line-clamp-4">
							<strong>Blurb:</strong> {alumni.blurb}
						</p>
						<button
							onClick={handleReadMoreClick}
							className="text-primary text-left underline"
						>
							Read more
						</button>
					</div>
					{/* LinkedIn Button */}
					{alumni.linkedin && (
						<a
							href={alumni.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center mt-4"
						>
							<div className="p-1 w-8 h-8 sm:w-12 sm:h-12 bg-primary text-white text-sm font-medium rounded hover:bg-blue-700">
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

			<div
				className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-auto duration-500 transition-all ${
					!isModalOpen
						? "opacity-0 pointer-events-none"
						: "opacity-100 pointer-events-auto"
				}`}
			>
				{/* translate-y-32 pointer-events-none */}
				<div
					className={`bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative overflow-auto mx-4 transition-all duration-500
					${isModalOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-32"}`}
				>
					<button
						onClick={handleCloseModal}
						className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 p-4"
					>
						<FontAwesomeIcon icon={faTimes} size="lg" />
					</button>
					<div className="p-4">
						<h2 className="text-2xl font-bold text-blue-800 mb-4">
							{alumni.name}
						</h2>
						<p className="text-gray-600">{alumni.blurb}</p>
					</div>
				</div>
			</div>
		</>
	);
}
