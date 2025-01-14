"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface AlumniCardProps {
  alumni: {
    name: string;
    position: string; // Current position
    company: string;
    program: string;
    image: string;
    linkedin: string;
  };
}

export default function AlumniCard({ alumni }: AlumniCardProps) {
  return (
    <div className="w-[300px] h-[450px] bg-white shadow-lg rounded-lg overflow-hidden mx-auto flex flex-col">
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
  );
}
