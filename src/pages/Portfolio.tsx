"use client";
import { useState, useEffect } from "react";
import { fetchInvestmentDivisions, fetchStatistics } from "../data/mockApi"; // Mock API functions
import Image, { StaticImageData } from "next/image";
import portfoliobanner from "../assets/portfoliobanner.png"; // Replace with your banner image path
import SymbolOverviewWidget from "../components/SymbolOverviewWidget";

export default function Portfolio() {
	const [investmentHoldings, setInvestmentHoldings] = useState(0);

	interface Division {
		name: string;
		ticker?: string;
		bondTicker?: { s: string }[];
		bgImage: StaticImageData;
	}

	const [investmentDivisions, setInvestmentDivisions] = useState<Division[]>(
		[]
	);

	// Fetch data from mock API
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
			{/* Banner Section */}
			<Image
				src={portfoliobanner}
				alt="Portfolio Banner"
				className="w-full object-cover absolute h-[400px]"
			/>
			{/* Header Section */}
			<div>
				<div className="flex flex-col items-center justify-between py-8 overflow-hidden">
					<div className="flex flex-col items-center justify-center gap-2">
						<div className="flex flex-col items-center justify-center w-fit bg-primary opacity-90">
							<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white px-16 py-2 rounded-sm shadow-md">
								Portfolio
							</h1>
						</div>
						<div className="flex flex-col items-center justify-center z-10">
							<div className="w-screen bg-primary h-0.5 mb-1" />
							<div className="w-screen bg-primary h-1" />
						</div>
					</div>

					<div className="flex flex-row items-center justify-center gap-8 w-[90vw] sm:w-[70vw] xl:w-[50vw] z-10 mt-2 sm:mt-10">
						<p className="lg:text-xl xl:text-2xl 2xl:text-3xl font-serif mt-2 w-1/2 text-center">
							<span className="text-6xl xl:text-7xl 2xl:text-[5.75rem] font-bold text-primary mr-3 font-[Roboto] italic leading-20">
								{investmentHoldings}
							</span>
							unique and carefully selected holdings comprise our
							JSOSIF portfolio.
						</p>
						<p className="xl:text-2xl 2xl:text-3xl font-serif mt-6 w-1/2 text-center">
							All of which are backed by research, modeling, and
							portfolio optimization conducted by our teams.
						</p>
					</div>
				</div>
			</div>

			{/* Investment Divisions */}
			<div className="py-12 content-center mx-auto z-10 relative bg-white">
				{investmentDivisions.map((division, index) => (
					<div
						key={index}
						className="mb-12 items-center flex flex-col"
					>
						{/* Division Header */}
						<div className="relative w-full min-w-screen flex items-center justify-center my-10">
							<Image
								alt={division.name}
								src={division.bgImage}
								className="absolute h-32 min-w-screen w-full object-cover overflow-hidden"
							/>
							<h2 className="text-3xl md:text-4xl lg:text-5xl w-full font-medium tracking-widest text-white py-5 text-center mb-4 z-10 relative">
								{division.name}
							</h2>
						</div>

						{/* Widgets Section */}
						<div className="w-full lg:w-[80%] px-0 md:px-8">
							<SymbolOverviewWidget
								ticker={division.ticker}
								bondData={division.bondTicker || []} // Pass bond data if available
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
