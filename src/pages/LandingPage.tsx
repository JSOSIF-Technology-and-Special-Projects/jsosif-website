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
		<div className="relative flex flex-col">
			{/* Background Section */}
			<div className="relative w-full max-h-[50vh]">
				<Image
					src={jsosifbackground}
					alt="Background"
					height={500}
					width={1920}
					className="w-fit h-[45vh] object-contain mx-auto"
				/>
				<div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/3 pl-4 pr-1 bg-white">
					<p className="italic font-extralight transform border-b-2 border-[#0E5791] py-1.5 pl-1.5 pr-4 text-[#0E5791] text-4xl">
						Investing in Tomorrow.
					</p>
				</div>
			</div>

			{/* Statistics Section */}
			<div className="bg-[#0E5791] text-white flex items-center px-[25rem] pt-20 pb-8 max-h-[50vh] ">
				<div className="flex justify-between gap-12">
					{/* Fund Members */}
					<div className="text-left w-full">
						<h3 className="text-8xl italic">
							{statistics.fundMembers}
						</h3>
						<div
							className="h-1 bg-white mt-4"
							style={{
								width: `${
									statistics.fundMembers.toString().length *
									44
								}px`, // Slightly shorter than the number
							}}
						></div>
						<p className="text-xl mt-4 w-full shrink-0 whitespace-nowrap">
							Fund Members
						</p>
					</div>

					{/* Investment Holdings */}
					<div className="text-left w-full">
						<h3 className="text-8xl italic">
							{statistics.investmentHoldings}
						</h3>
						<div
							className="h-1 bg-white mt-4"
							style={{
								width: `${
									statistics.investmentHoldings.toString()
										.length * 44
								}px`,
							}}
						></div>
						<p className="text-xl mt-4 whitespace-nowrap">
							Investment Holdings
						</p>
					</div>

					{/* Assets Under Management */}
					<div className="text-left w-full">
						<h3 className="text-8xl italic">
							${statistics.assetsUnderManagement.toLocaleString()}
						</h3>
						<div
							className="h-1 bg-white mt-4"
							style={{
								width: `${
									statistics.assetsUnderManagement.toLocaleString()
										.length * 44
								}px`,
							}}
						></div>
						<p className="text-xl mt-4 w-full">
							Assets Under Management
						</p>
					</div>
				</div>
			</div>
			{/* The John Simpson Odette Section */}
			<div className="py-10 px-[23.5rem] max-h-[50vh] mt-10">
				<div className="max-w-6xl mx-auto">
					<h4 className="text-[#0E5791] italic text-xl">
						The John Simpson Odette Student Investment Fund in
						Brief:
					</h4>
					<div className="flex items-center mt-4 pl-[1.5rem]">
						<div className="w-2 h-24 bg-[#0E5791] mr-4"></div>
						<p className="text-gray-800 text-2xl font-light">
							The John Simpson Odette Student Investment Fund at
							the Odette School of Business is the University of
							Windsor&apos;s only student managed-student run
							investment fund with $
							{statistics.assetsUnderManagement.toLocaleString()}{" "}
							in real capital under management.
						</p>
					</div>
				</div>
			</div>
			{/* Investment Divisions Section */}
			<div className="relative min-h-[50vh] mt-10 overflow-hidden">
				<Image
					src={investmentdiv}
					alt="Investment Divisions"
					className="w-full h-full absolute inset-0"
				/>
				<div className=" justify-center items-center w-full p-10 relative z-50">
					<h1 className="text-white text-[2.75rem] font-light border-b-2 border-white  mx-auto w-[34rem]  tracking-widest text-center">
						Investment Divisions
					</h1>
					<div className="flex flex-wrap gap-2 w-fit mx-40 2xl:mx-72 justify-center mt-3">
						{investmentDivisions.map((division, index) => (
							<div
								key={index}
								className="bg-white/80 w-1/4 2xl:w-[calc(25%-8px)] shadow-lg p-3 text-center"
							>
								<h3 className="text-[#0E5791] text-xl mb-2 min-h-16">
									{division.name}
								</h3>
								<p className="text-gray-700 text-sm line-clamp-[15]">
									{division.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Support Teams Section */}
			<div className="relative min-h-[50vh] h-fit mt-10 overflow-hidden w-full">
				<Image
					src={supportdiv}
					alt="Support Teams"
					className="h-full absolute w-full inset-0 object-cover"
				/>
				<div className="flex flex-col justify-start items-center w-full p-10 z-50 relative">
					<h1 className="text-white text-[2.75rem] font-light border-b-2 border-white w-[34rem] mx-auto  tracking-widest text-center">
						Support Teams
					</h1>
					<div className="flex flex-wrap gap-2 px-40 2xl:px-72 w-full justify-center mt-3">
						{supportTeams.map((team, index) => (
							<div
								key={index}
								className="bg-white/80 w-1/4 2xl:w-[calc(25%-8px)] shadow-lg p-3 text-center"
							>
								<h3 className="text-primary text-xl mb-2 min-h-16">
									{team.name}
								</h3>
								<p className="text-gray-700 text-sm line-clamp-[15]">
									{team.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="my-10">
				<MapComponent />
			</div>
		</div>
	);
};

export default LandingPage;
