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

  return (
    <div className="px-8 py-12">
      {/* Banner Section */}
      <div className="relative">
        <Image
          src={jsosifteam}
          alt="Our Team Banner"
          className="w-full h-[400px] object-cover"
        />
        {/* Overlay Content */}
        <div className="absolute top-0 left-0 right-0 flex items-start justify-center mt-4">
          <h1 className="text-4xl font-bold bg-blue-800 text-white px-6 py-2 rounded-sm shadow-md">
            Our Team
          </h1>
        </div>
      </div>

      {/* Teams Section */}
      <div className="mt-12">
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
            <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">
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
  );
}
