"use client";

import React from "react";
import Image from "next/image";

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
  const imageSrc = member.image || "/images/jsosificonblue.webp";

  return (
    <div className="w-full bg-white overflow-hidden mx-auto flex flex-col h-full">
      {/* Image */}
      <div className="relative w-full aspect-[3/4]"> 
        <Image
          src={imageSrc}
          alt={member.name}
          fill
          className={`object-cover object-center ${
            !member.image && "opacity-50 object-scale-down"
          }`}
          loading="lazy"
          quality={100} // bump quality for portraits
          sizes="(min-width: 1280px) 18vw, (min-width: 1024px) 22vw, (min-width: 640px) 40vw, 50vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between mt-4 h-full">
        <div className="flex flex-col">
          <h3 className="text-sm sm:text-xl font-serif text-primary min-h-12 sm:min-h-14 mb-2">
            {member.role}
          </h3>
          <div className="flex flex-col w-full mb-4">
            <h1 className="text-lg sm:text-4xl xl:text-3xl 2xl:text-4xl font-semibold sm:font-medium font-serif">
              {member.firstName}
            </h1>
            <h1 className="text-lg sm:text-4xl xl:text-3xl 2xl:text-4xl font-semibold sm:font-medium font-serif">
              {member.lastName}
            </h1>
          </div>
          <p className="sm:mt-2 text-sm sm:text-base text-gray-600">
            <strong>Program:</strong> {member.program}
          </p>
          <p className="text-gray-600 text-sm sm:text-base mb-4">
            <strong>Year:</strong> {member.year}
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
            JSOSIF member since {member.joined}
          </p>
        </div>

        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4"
          >
            <div className="p-1 w-8 h-8 sm:w-12 sm:h-12 bg-primary text-white text-sm font-medium rounded hover:bg-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
