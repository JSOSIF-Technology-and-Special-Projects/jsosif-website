"use client";
import Image from "next/image";
import bloomberg from "../assets/bloomberg.png";
import microsoftteams from "../assets/microsoftteams.png";
import attach from "../assets/attach.png";
import React, { useEffect, useState } from "react";

export default function Bloomberg() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="bg-white min-h-[calc(100vh - 7rem)] flex flex-col w-full">
			{/* Hero Section */}
			<Image
				src={bloomberg}
				alt="Bloomberg Background"
				// style={{ height: scrollPosition / 8 + 400 }}
				className={`object-cover h-[400px] -z-0 ${
					scrollPosition > 0 ? "fixed" : "absolute"
				} ${scrollPosition > 400 && "hidden"}`}
			/>

			{/* Overlay Content */}
			<div className="flex items-start justify-center mt-10 pb-12 z-10">
				<div className="flex flex-col items-center justify-center gap-2">
					<div className="flex flex-col items-center justify-center w-fit bg-primary opacity-90">
						<h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white px-16 py-2 rounded-sm shadow-md">
							Bloomberg Access
						</h1>
					</div>
					<div className="flex flex-col items-center justify-center mb-4">
						<div className="w-screen bg-white h-0.5 mb-1" />
						<div className="w-screen bg-white h-1" />
					</div>
					{/* Middle Row with Two Boxes */}
					<div className="hidden md:flex flex-col md:flex-row items-center justify-center gap-8">
						{/* Bloomberg Description Box */}
						<div className="bg-white/90 text-black p-3 font-light text-lg max-w-md">
							<p className="text-sm md:text-lg text-left">
								Attend the Bloomberg Office Hours to learn more
								about using the University-provided Bloomberg
								Software. The lab representative can assist you
								in setting up your account so you can attain
								your Bloomberg Market Concepts (BMC)
								Certification.
							</p>
						</div>

						{/* Microsoft Teams Box */}
						<div className="bg-white/90 p-4 text-black text-center max-w-md">
							<h2 className="md:text-xl font-bold mb-2">
								Microsoft Teams Link for Office Hours:
							</h2>
							<div className="flex gap-10 justify-center items-center">
								<Image
									src={microsoftteams}
									alt="Microsoft Teams Icon"
									className="w-10 h-10 md:w-16 md:h-16 mb-2"
								/>
								<button className="bg-gray-500 text-white px-6 py-2 text-lg md:text-2xl font-light hover:bg-[#0E5791]">
									<a
										href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_YzYzMDQ4M2QtOGIxMS00OThkLWEyMTctYTA4MzIwMjhjNjZj%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%252212f933b3-3d61-4b19-9a4d-689021de8cc9%2522%252c%2522Oid%2522%253a%25220f9ffcd5-7671-4db9-8b7c-cce8a7c66908%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=a5ff1420-b4e0-49e2-91c8-cbd5bf4f573e&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true"
										target="_blank"
									>
										Click to Join
									</a>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Main Content Section */}
			<div className="relative z-10 bg-white flex-col lg:flex-row flex gap-12 lg:gap-24 xl:gap-32 justify-center py-8 h-full px-4 md:px-20 2xl:px-72">
				{/* Mobile Teams Thing */}
				<div className="md:hidden flex flex-col items-center justify-center gap-2">
					<div className="bg-white/90 text-black p-3 font-light text-lg">
						<p className="text-lg text-left">
							Attend the Bloomberg Office Hours to learn more
							about using the University-provided Bloomberg
							Software. The lab representative can assist you in
							setting up your account so you can attain your
							Bloomberg Market Concepts (BMC) Certification.
						</p>
					</div>

					{/* Microsoft Teams Box */}
					<div className="bg-white/90 p-4 text-black text-center max-w-md">
						<h2 className="text-3xl font-medium font-serif italic text-primary mb-2">
							Microsoft Teams Link for Office Hours:
						</h2>
						<div className="flex gap-10 justify-center items-center">
							<Image
								src={microsoftteams}
								alt="Microsoft Teams Icon"
								className="w-10 h-10 md:w-16 md:h-16 mb-2"
							/>
							<button className="bg-gray-500 text-white px-6 py-2 text-lg md:text-2xl font-light hover:bg-[#0E5791]">
								<a
									href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_YzYzMDQ4M2QtOGIxMS00OThkLWEyMTctYTA4MzIwMjhjNjZj%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%252212f933b3-3d61-4b19-9a4d-689021de8cc9%2522%252c%2522Oid%2522%253a%25220f9ffcd5-7671-4db9-8b7c-cce8a7c66908%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=a5ff1420-b4e0-49e2-91c8-cbd5bf4f573e&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true"
									target="_blank"
								>
									Click to Join
								</a>
							</button>
						</div>
					</div>
				</div>
				{/* Bloomberg Office Hours & Contact Information */}
				<div className="w-full lg:w-1/2 flex flex-col items-center">
					{/* Bloomberg Office Hours */}
					<div className="w-full flex justify-center">
						<div className="w-full lg:w-fit">
							<h2 className="text-3xl sm:text-4xl text-gray-500 font-serif text-center pb-2">
								Bloomberg Office Hours
							</h2>
							<div className="flex flex-col items-center justify-center mb-4">
								<div className="w-full bg-gray-500 h-0.5 mb-1" />
								<div className="w-full bg-gray-500 h-1" />
							</div>
						</div>
					</div>

					<ul className="mt-4 text-2xl font-light space-y-3 text-center">
						<li>Mondays: 10am-4pm</li>
						<li>Tuesdays: 10am-4pm</li>
						<li>Wednesdays: 10am-4pm</li>
						<li>Thursdays: 10am-4pm</li>
					</ul>

					{/* Contact Information */}
					<div className="mt-12 w-full lg:w-fit">
						<div className="flex justify-center">
							<div className="w-full">
								<h2 className="text-3xl sm:text-4xl text-gray-500 font-serif text-center pb-2 px-8">
									Contact Information
								</h2>
								<div className="flex flex-col items-center justify-center mb-4">
									<div className="w-full bg-gray-500 h-0.5 mb-1" />
									<div className="w-full bg-gray-500 h-1" />
								</div>
							</div>
						</div>
						<div className="mt-2 text-lg text-left gap-4 flex flex-col items-center lg:items-start px-8">
							<div>
								<p className="font-bold">
									Bloomberg Technical Support:
								</p>
								<a
									href="mailto:bbg.edu@bloomberg.net"
									className="text-primary hover:underline flex items-center gap-1"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
									>
										<path
											fill="currentColor"
											d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12v1.45q0 1.475-1.012 2.513T18.5 17q-.875 0-1.65-.375t-1.3-1.075q-.725.725-1.638 1.088T12 17q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12v1.45q0 .65.425 1.1T18.5 15t1.075-.45t.425-1.1V12q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20h4q.425 0 .713.288T17 21t-.288.713T16 22zm0-7q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15"
										/>
									</svg>{" "}
									<span className="underline">
										bbg.edu@bloomberg.net
									</span>
								</a>
							</div>
							<div>
								<p className="font-bold">
									Office Hours Support:
								</p>
								<a
									href="mailto:sweet21@uwindsor.ca"
									className="text-primary hover:underline flex items-center gap-1"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
									>
										<path
											fill="currentColor"
											d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12v1.45q0 1.475-1.012 2.513T18.5 17q-.875 0-1.65-.375t-1.3-1.075q-.725.725-1.638 1.088T12 17q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12v1.45q0 .65.425 1.1T18.5 15t1.075-.45t.425-1.1V12q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20h4q.425 0 .713.288T17 21t-.288.713T16 22zm0-7q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15"
										/>
									</svg>{" "}
									<span className="underline">
										Jacob Sweet
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Resources Section */}
				<div className="w-full lg:w-1/2 md:mt-0 flex flex-col items-center">
					<div className="w-full flex justify-center">
						<div className="w-full lg:w-fit">
							<h2 className="text-3xl sm:text-4xl text-gray-500 font-serif text-center pb-2 px-12">
								Resources
							</h2>
							<div className="flex flex-col items-center justify-center mb-4">
								<div className="w-full bg-gray-500 h-0.5 mb-1" />
								<div className="w-full bg-gray-500 h-1" />
							</div>
						</div>
					</div>
					<ul className="mt-4 space-y-4 w-[70%] flex flex-col justify-center">
						<li className="flex items-center space-x-4 bg-gray-100 p-4 rounded-md shadow">
							<Image
								src={attach}
								alt="Attachment Icon"
								className="w-10 h-18"
							/>
							<a
								href="/files/JSOSIF-2024-Annual-Report.pdf"
								target="_blank"
								className="text-lg text-primary hover:underline font-medium"
							>
								JSOSIF 2024 Annual Report
							</a>
						</li>
						<li className="flex items-center space-x-4 bg-gray-100 p-4 rounded-md shadow">
							<Image
								src={attach}
								alt="Attachment Icon"
								className="w-10 h-18"
							/>
							<a
								href="/files/Getting-Started-Guide-for-Students-English.pdf"
								target="_blank"
								className="text-lg text-primary hover:underline font-medium"
							>
								Getting Started Guide
							</a>
						</li>
						<li className="flex items-center space-x-4 bg-gray-100 p-4 rounded-md shadow">
							<Image
								src={attach}
								alt="Attachment Icon"
								className="w-10 h-18"
							/>
							<a
								href="/files/BMC-Professor-Guide.pdf"
								target="_blank"
								className="text-lg text-primary hover:underline font-medium"
							>
								BMC Professor Guide
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
