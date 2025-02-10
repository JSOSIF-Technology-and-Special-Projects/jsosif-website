"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
	fetchStatistics,
	fetchInvestmentDivisions,
	fetchSupportTeams,
} from "../data/mockApi"; // Import mock API functions
import jsosifbackground from "../assets/jsosifbackground.png";
import investmentdiv from "../assets/investmentdiv.png";
import supportdiv from "../assets/supportdiv.png";
import { useCountUp } from "react-countup";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("../components/MapComponent"), {
	ssr: false,
});

export default function LandingPage() {
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

	const [transition, setTransition] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setTransition(true);
		}, 100);
	}, [transition]);

	const [assetsUnderManagement, setAssetsUnderManagement] = useState(261_000);

	const countUpRef = useRef(null);
	const { update } = useCountUp({
		// @ts-expect-error - Ref is not null
		ref: countUpRef,
		start: 0,
		end: assetsUnderManagement,
		duration: 2,
		delay: 0.3,
	});

	return (
		<div className="relative flex flex-col">
			{/* Background Section */}
			<div className="relative w-full max-h-[50vh]">
				<Image
					src={jsosifbackground}
					alt="Background"
					height={500}
					width={1920}
					className="w-fit h-[30vh] xl:h-[45vh] object-cover xl:object-contain mx-auto"
				/>
				<div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/4 md:left-1/3 pl-1 xl:pl-3 2xl:pl-4 pr-0.5 2xl:pr-1 bg-white">
					<p className="italic font-extralight transform border-b-2 border-[#0E5791] py-0.5 xl:py-1.5 pl-1.5 pr-1 md:pr-3 2xl:pr-4 text-[#0E5791] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
						Investing in Tomorrow.
					</p>
				</div>
			</div>

			{/* Statistics Section */}
			<div className="bg-[#0E5791] text-white flex items-center w-full md:justify-normal py-8 lg:pt-20 lg:pb-8 h-fit md:h-[15rem] xl:h-[20rem]">
				<div
					className={`flex justify-between gap-4 sm:gap-10 md:gap-12 ml-8 sm:ml-20 md:ml-40 lg:ml-52 xl:ml-60 2xl:mx-[25rem]`}
				>
					{/* Fund Members */}
					<div className="text-left w-fit md:w-full">
						<h3
							className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl italic transition-all duration-1200 ease-in-out ${
								transition
									? "opacity-100"
									: "opacity-0 -translate-x-36"
							}`}
						>
							{statistics.fundMembers}
						</h3>
						<div className="h-1 bg-white mt-1 lg:mt-4 w-10 lg:w-16 xl:w-20"></div>
						<p className="text-xs md:text-sm lg:text-base xl:text-xl mt-4 w-fit md:w-full shrink-0 whitespace-nowrap text-wrap">
							Fund Members
						</p>
					</div>

					{/* Investment Holdings */}
					<div className="text-left w-fit md:w-full">
						<h3
							className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl italic transition-all duration-1200 ease-in-out delay-100 ${
								transition
									? "opacity-100"
									: "opacity-0 -translate-x-28"
							}`}
						>
							{statistics.investmentHoldings}
						</h3>
						<div className="h-1 bg-white mt-1 lg:mt-4 w-10 lg:w-16 xl:w-20"></div>
						<p className="text-xs md:text-sm lg:text-base xl:text-xl mt-4 text-wrap md:text-nowrap whitespace-nowrap">
							Investment Holdings
						</p>
					</div>

					{/* Assets Under Management */}
					<div className="text-left w-full">
						<h3
							className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl italic transition-all duration-1200 ease-in-out delay-300 ${
								transition
									? "opacity-100"
									: "opacity-0 -translate-x-24"
							}`}
						>
							$
							{/* <CountUp
								duration={2}
								start={0}
								delay={0.3}
								// end={statistics.assetsUnderManagement}
								end={assetsUnderManagement}
							/> */}
							<span ref={countUpRef}></span>
							{/* ${statistics.assetsUnderManagement.toLocaleString()} */}
						</h3>
						<div className="h-1 bg-white mt-1 lg:mt-4 w-[8rem] sm:w-[10rem] md:w-[14rem] lg:w-[17rem] xl:w-[22rem]"></div>
						<p className="text-xs md:text-sm lg:text-base xl:text-xl mt-4 w-full">
							Assets Under Management
						</p>
					</div>
				</div>
			</div>
			{/* The John Simpson Odette Section */}
			<div className="py-10 px-[2rem] sm:px-16 md:px-40 lg:px-52 2xl:px-[23.5rem] max-h-[50vh] mt-10">
				<div className="max-w-6xl mx-auto">
					<h4 className="text-[#0E5791] italic md:text-xl">
						The John Simpson Odette Student Investment Fund in
						Brief:
					</h4>
					<div className="flex items-center mt-4 pl-[1.5rem]">
						<div className="w-2 h-24 bg-[#0E5791] mr-4"></div>
						<p className="text-gray-800 text-sm sm:text-base md:text-xl lg:text-2xl font-light">
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
				<div className="block justify-center items-center w-full py-10 md:p-10 relative z-40">
					<h1 className="text-white pb-2 text-2xl sm:text-4xl md:text-[2.75rem] font-light border-b-2 border-white  mx-auto w-fit md:w-[34rem]  tracking-widest text-center">
						Investment Divisions
					</h1>
					<div className="hidden md:flex flex-wrap gap-2 w-fit lg:mx-16 xl:mx-40 2xl:mx-72 justify-center mt-3">
						{investmentDivisions.map((division, index) => (
							<div
								key={index}
								className="bg-white/80 w-1/3 lg:w-1/4 2xl:w-[calc(25%-8px)] shadow-lg p-3 text-center"
							>
								<h3 className="text-[#0E5791] text-xl mb-2 min-h-16 flex items-center justify-center mx-auto">
									{division.name}
								</h3>
								<p className="text-gray-700 text-sm line-clamp-[15]">
									{division.description}
								</p>
							</div>
						))}
					</div>
					<div className="grid md:hidden grid-cols-2 gap-2 w-fit mx-2 lg:mx-16 xl:mx-40 2xl:mx-72 justify-center mt-3">
						{investmentDivisions.map((division, index) => (
							<div
								key={index}
								className="bg-white/80 md:w-1/4 2xl:w-[calc(25%-8px)] shadow-lg p-3 text-center"
							>
								<h3 className="text-[#0E5791] text-wrap sm:text-xl mb-2 min-h-16 flex items-center justify-center mx-auto">
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
				<div className="flex flex-col justify-start items-center w-full py-10 md:p-10 z-40 relative">
					<h1 className="text-white pb-2 text-2xl sm:text-4xl md:text-[2.75rem] font-light border-b-2 border-white mx-auto w-fit md:w-[34rem] tracking-widest text-center">
						Support Teams
					</h1>
					<div className="hidden md:flex flex-wrap gap-2 w-fit lg:mx-16 xl:mx-40 2xl:mx-72 justify-center mt-3">
						{supportTeams.map((team, index) => (
							<div
								key={index}
								className="bg-white/80 w-1/3 lg:w-1/4 2xl:w-[calc(25%-8px)] shadow-lg p-3 text-center"
							>
								<h3 className="text-primary sm:text-xl mb-2 min-h-16 flex items-center justify-center mx-auto">
									{team.name}
								</h3>
								<p className="text-gray-700 text-sm line-clamp-[15]">
									{team.description}
								</p>
							</div>
						))}
					</div>
					<div className="grid md:hidden grid-cols-2 gap-2 w-fit mx-2 lg:mx-16 xl:mx-40 2xl:mx-72 justify-center mt-3">
						{supportTeams.map((team, index) => (
							<div
								key={index}
								className="bg-white/80 md:w-1/4 2xl:w-[calc(25%-8px)] shadow-lg p-3 text-center"
							>
								<h3 className="text-primary  mb-2 min-h-16 flex items-center justify-center mx-auto">
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
}
