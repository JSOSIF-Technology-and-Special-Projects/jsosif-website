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

	const [investmentDivisions, setInvestmentDivisions] = useState<Division[]>(
		[]
	);

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
					<div className="flex flex-col items-center justify-center gap-2">
						<div className="flex flex-col items-center justify-center w-fit bg-primary opacity-70">
							<h1 className="text-7xl font-medium text-white px-16 py-2 rounded-sm shadow-md">
								Portfolio
							</h1>
						</div>
						<div className="flex flex-col items-center justify-center">
							<div className="w-screen bg-primary h-0.5 mb-1" />
							<div className="w-screen bg-primary h-1" />
						</div>
					</div>

					{/* Overlay Divs */}
					<div className="flex flex-col md:flex-row items-center justify-center gap-8 w-[45vw]">
						{/* Holdings Info */}

						<p className="text-3xl font-serif mt-2 w-1/2 text-center">
							<span className="text-[5.75rem] font-bold text-primary mr-3 font-[Roboto] italic leading-20">
								{investmentHoldings}
							</span>
							unique and carefully selected holdings comprise our
							JSOSIF portfolio.
						</p>

						{/* Supporting Info */}
						<p className="text-3xl font-serif mt-6 w-1/2 text-center">
							All of which are backed by research, modeling, and
							portfolio optimization conducted by our teams.
						</p>
					</div>
				</div>
			</div>

			{/* Investment Divisions with SymbolOverviewWidget */}
			<div className="py-12 content-center mx-auto">
				{investmentDivisions.map((division, index) => (
					<div
						key={index}
						className="mb-12 items-center flex flex-col"
					>
						{/* Team Header */}
						<h2 className="text-5xl w-full font-medium tracking-widest text-primary py-5 text-center mb-4">
							{division.name}
						</h2>

						{/* SymbolOverviewWidget */}
						<div className="w-[80%] px-8">
							{division.ticker && (
								<SymbolOverviewWidget
									ticker={division.ticker}
								/>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
