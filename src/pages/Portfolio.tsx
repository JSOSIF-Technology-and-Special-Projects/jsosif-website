"use client";

import { useEffect, useState } from "react";
import { fetchInvestmentDivisions, fetchStatistics } from "../data/mockApi"; // Import mock data functions
import Image from "next/image";
import portfoliobanner from "../assets/portfoliobanner.png"; // Update the image path as necessary
import SymbolOverviewWidget from "../components/SymbolOverviewWidget"; // Import the reusable component

export default function Portfolio() {
  const [investmentHoldings, setInvestmentHoldings] = useState(0);
  interface Division {
    name: string;
    ticker?: string;
  }

  const [investmentDivisions, setInvestmentDivisions] = useState<Division[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statistics = await fetchStatistics();
        const divisions = await fetchInvestmentDivisions();
        setInvestmentHoldings(statistics.investmentHoldings);
        setInvestmentDivisions(divisions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Image and Divs */}
      <div className="relative">
        <Image
          src={portfoliobanner}
          alt="Portfolio Banner"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-between py-8">
          {/* Portfolio Title */}
          <h1 className="text-4xl font-bold bg-blue-800 text-white px-6 py-2 rounded-sm shadow-md">
            Portfolio
          </h1>

          {/* Overlay Divs */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Holdings Info */}
            <div className="bg-white/80 text-black p-4 rounded-md shadow-lg max-w-md text-center">
              <h2 className="text-5xl font-bold text-blue-800">
                {investmentHoldings}
              </h2>
              <p className="text-lg mt-2">
                unique and carefully selected holdings comprise our JSOSIF
                portfolio.
              </p>
            </div>

            {/* Supporting Info */}
            <div className="bg-white/80 text-black p-4 rounded-md shadow-lg max-w-md text-center">
              <p className="text-lg">
                All of which are backed by research, modeling, and portfolio
                optimization conducted by our teams.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Divisions with SymbolOverviewWidget */}
    <div className="px-8 py-12 w-[80%] content-center mx-auto">
    {investmentDivisions.map((division, index) => (
    <div key={index} className="mb-12">
      {/* Team Header */}
      <h2 className="text-2xl font-bold text-blue-800 text-center mb-4">
        {division.name}
      </h2>

      {/* SymbolOverviewWidget */}
      {division.ticker && (
        <SymbolOverviewWidget ticker={division.ticker} />
      )}
    </div>
  ))}
</div>

    </div>
  );
}
