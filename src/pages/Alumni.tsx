"use client";

import React, { useEffect, useState } from "react";
import AlumniCard from "../components/AlumniCard"; // Reuse the new AlumniCard component
import { fetchAlumni } from "../data/mockApi"; // Use the fetchAlumni function
import alumnibackground from "../assets/alumnibackground.jpg"; // Replace with your actual banner image
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

  return (
    <div className="px-8 py-12">
      {/* Banner Section */}
      <div className="relative">
        <Image
          src={alumnibackground}
          alt="Our Alumni Banner"
          className="w-full h-[400px] object-cover"
        />
        {/* Overlay Content */}
        <div className="absolute top-0 left-0 right-0 flex items-start justify-center mt-4">
          <h1 className="text-4xl font-bold bg-blue-800 text-white px-6 py-2 rounded-sm shadow-md">
            Our Alumni
          </h1>
        </div>
      </div>

      {/* Alumni Section */}
      <div className="mt-12">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
          Meet Our Alumni
        </h1>

        {/* Alumni Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {alumni.map((alum, idx) => (
            <AlumniCard key={idx} alumni={alum} />
          ))}
        </div>
      </div>
    </div>
  );
}
