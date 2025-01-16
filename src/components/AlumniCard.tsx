"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface AlumniCardProps {
  alumni: {
    name: string;
    position: string; // Current position
    company: string;
    program: string;
    image: string;
    linkedin: string;
    year: string;
    blurb: string;
  };
}

export default function AlumniCard({ alumni }: AlumniCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMoreClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <>
      <div className="w-[300px] bg-white shadow-lg rounded-lg overflow-hidden mx-auto flex flex-col">
        {/* Image */}
        <img
          className="w-full h-[200px] object-cover"
          src={alumni.image}
          alt={alumni.name}
        />

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{alumni.position}</h3>
            <h2 className="text-2xl font-bold text-blue-800">{alumni.name}</h2>
            <p className="mt-2 text-gray-600">
              <strong>Company:</strong> {alumni.company}
            </p>
            <p className="text-gray-600">
              <strong>Program:</strong> {alumni.program}
            </p>
            <p className="text-gray-600">
              <strong>Years on Fund:</strong> {alumni.year}
            </p>
            <p className="text-gray-600">
              <strong>Blurb:</strong> <button onClick={handleReadMoreClick} className="text-blue-800 underline">Read more</button>
            </p>
          </div>
          {/* LinkedIn Button */}
          {alumni.linkedin && (
            <a
              href={alumni.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4"
            >
              <div className="px-4 py-2 bg-blue-800 text-white text-sm font-medium rounded hover:bg-blue-700">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </a>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative vh-[80%] overflow-auto">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 p-4"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
            <div className="p-4">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">{alumni.name}</h2>
              <p className="text-gray-600">
                {alumni.blurb}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
