"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface TeamCardProps {
  member: {
    name: string;
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
    <div className="w-[300px] h-[450px] bg-white shadow-lg rounded-lg overflow-hidden mx-auto flex flex-col">
      {/* Image */}
      <img
        className="w-full h-[200px] object-cover"
        src={member.image}
        alt={member.name}
      />

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{member.role}</h3>
          <h2 className="text-2xl font-bold text-blue-800">{member.name}</h2>
          <p className="mt-2 text-gray-600">
            <strong>Program:</strong> {member.program}
          </p>
          <p className="text-gray-600">
            <strong>Year:</strong> {member.year}
          </p>
          <p className="text-gray-600">
            <strong>JSOSIF member since:</strong> {member.joined}
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
            <div className="px-4 py-2 bg-blue-800 text-white text-sm font-medium rounded hover:bg-blue-700">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </a>
        )}
      </div>
    </div>
  );
}
