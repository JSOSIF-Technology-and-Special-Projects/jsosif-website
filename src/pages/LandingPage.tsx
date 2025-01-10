"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  fetchStatistics,
  fetchInvestmentDivisions,
  fetchSupportTeams,
} from "../data/mockApi"; // Import mock API functions
import jsosifbackground from "../assets/jsosifbackground.png";
import investmentdiv from "../assets/investmentdiv.png";
import supportdiv from "../assets/supportdiv.png";
import MapComponent from "../components/MapComponent";

const LandingPage: React.FC = () => {
  const [statistics, setStatistics] = useState({
    fundMembers: 0,
    investmentHoldings: 0,
    assetsUnderManagement: 0,
  });
  const [investmentDivisions, setInvestmentDivisions] = useState<
    { name: string; description: string }[]
  >([]);
  const [supportTeams, setSupportTeams] = useState<
    { name: string; description: string }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from mock API
      const stats = await fetchStatistics();
      const divisions = await fetchInvestmentDivisions();
      const teams = await fetchSupportTeams();

      // Update state with fetched data
      setStatistics(stats);
      setInvestmentDivisions(divisions);
      setSupportTeams(teams);
    };

    fetchData();
  }, []);

  return (
    <div className="relative">
      {/* Background Section */}
      <div className="relative">
        <Image
          src={jsosifbackground}
          alt="Background"
          className="w-full h-auto"
        />
        <p className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-[#0E5791] text-2xl underline">
          Investing in Tomorrow.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="bg-[#0E5791] text-white flex justify-start items-center px-10 h-70">
        <div className="grid grid-cols-3 gap-8 w-1/2 max-w-6xl ml-10">
          {/* Fund Members */}
          <div className="text-left">
            <h3 className="text-8xl font-bold">{statistics.fundMembers}</h3>
            <div
              className="h-1 bg-white mt-4"
              style={{
                width: `${statistics.fundMembers.toString().length * 44}px`, // Slightly shorter than the number
              }}
            ></div>
            <p className="text-xl mt-4">Fund Members</p>
          </div>

          {/* Investment Holdings */}
          <div className="text-left">
            <h3 className="text-8xl font-bold">{statistics.investmentHoldings}</h3>
            <div
              className="h-1 bg-white mt-4"
              style={{
                width: `${statistics.investmentHoldings.toString().length * 44}px`,
              }}
            ></div>
            <p className="text-xl mt-4">Investment Holdings</p>
          </div>

          {/* Assets Under Management */}
          <div className="text-left">
            <h3 className="text-8xl font-bold">
              ${statistics.assetsUnderManagement.toLocaleString()}
            </h3>
            <div
              className="h-1 bg-white mt-4"
              style={{
                width: `${statistics.assetsUnderManagement.toLocaleString().length * 44}px`,
              }}
            ></div>
            <p className="text-xl mt-4">Assets Under Management</p>
          </div>
        </div>
      </div>
    {/* The John Simpson Odette Section */}
    <div className="py-10 px-4 ">
        <div className="max-w-6xl mx-auto">
          <h4 className="text-[#0E5791] italic text-lg">
            The John Simpson Odette Student Investment Fund in Brief:
          </h4>
          <div className="flex items-center mt-4">
            <div className="w-1 h-20 bg-[#0E5791] mr-4"></div>
            <p className="text-gray-800 text-lg">
              The John Simpson Odette Student Investment Fund at the Odette
              School of Business is the University of Windsor&apos;s only student
              managed-student run investment fund with {statistics.assetsUnderManagement}$ in real capital
              under management.
            </p>
          </div>
        </div>
      </div>
      {/* Investment Divisions Section */}
      <div className="relative mt-10">
        <Image
          src={investmentdiv}
          alt="Investment Divisions"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-wrap justify-center items-center">
          {investmentDivisions.map((division, index) => (
            <div
              key={index}
              className="bg-white/80 shadow-lg rounded-lg p-4 w-[20%] m-4 text-center"
            >
              <h3 className="text-[#0E5791] font-semibold text-lg mb-2">
                {division.name}
              </h3>
              <p className="text-gray-700 text-sm">{division.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Support Teams Section */}
      <div className="relative mt-10">
        <Image
          src={supportdiv}
          alt="Support Teams"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-wrap justify-center items-center">
          {supportTeams.map((team, index) => (
            <div
              key={index}
              className="bg-white/80 shadow-lg rounded-lg p-4 w-[20%] m-4 text-center"
            >
              <h3 className="text-[#0E5791] font-semibold text-lg mb-2">
                {team.name}
              </h3>
              <p className="text-gray-700 text-sm">{team.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <MapComponent />
      </div>
    </div>
  );
};

export default LandingPage;
