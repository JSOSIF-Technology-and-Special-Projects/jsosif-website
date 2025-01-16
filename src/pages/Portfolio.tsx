"use client";

import { useState, useMemo } from "react";
import { fetchInvestmentDivisions, fetchStatistics } from "../data/mockApi"; // Import mock data functions
import Image, { StaticImageData } from "next/image";
import portfoliobanner from "../assets/portfoliobanner.png"; // Update the image path as necessary
import SymbolOverviewWidget from "../components/SymbolOverviewWidget";

export default function Portfolio() {
	const [investmentHoldings, setInvestmentHoldings] = useState(0);
	interface Division {
		name: string;
		ticker?: string;
		bgImage: StaticImageData;
	}

	const [investmentDivisions, setInvestmentDivisions] = useState<Division[]>(
		[]
	);

	useMemo(() => {
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
			<Image
				src={portfoliobanner}
				alt="Our Team Banner"
				className={`w-full object-cover -z-0 absolute h-[400px]`}
			/>
			{/* Hero Section with Image and Divs */}
			<div>
				<div className="flex flex-col items-center justify-between py-8">
					{/* Portfolio Title */}
					<div className="flex flex-col items-center justify-center gap-2">
						<div className="flex flex-col items-center justify-center w-fit bg-primary opacity-70">
							<h1 className="text-7xl font-medium text-white px-16 py-2 rounded-sm shadow-md">
								Portfolio
							</h1>
						</div>
						<div className="flex flex-col items-center justify-center z-10 ">
							<div className="w-screen bg-primary h-0.5 mb-1" />
							<div className="w-screen bg-primary h-1" />
						</div>
					</div>

					{/* Overlay Divs */}
					<div className="flex flex-col md:flex-row items-center justify-center gap-8 w-[50vw] z-10 mt-10">
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
			<div className="py-12 content-center mx-auto z-10 relative bg-white">
				{investmentDivisions.map((division, index)  => (
					<div
						key={index}
						className="mb-12 items-center flex flex-col"
					>
						{/* Team Header */}
						<div className="relattive w-full flex items-center justify-center my-10">
							<Image
								alt={division.name}
								src={division.bgImage}
								className="absolute max-h-32 object-cover overflow-hidden"
							/>

							<h2 className="text-5xl w-full font-medium tracking-widest text-white py-5 text-center mb-4 z-10 relative">
								{division.name}
							</h2>
						</div>
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
