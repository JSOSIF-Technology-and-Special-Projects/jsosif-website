//footer component, contains traderview component and social media links but nothing special

"use client";
import jsosifbannerbw from "../assets/jsosifbannerbw.png";
import Image from "next/image";
import React from "react";
import { TickerTape } from "react-ts-tradingview-widgets";
import jsoifjoin from "../assets/jsosifjoin.png";

export default function Footer() {
	return (
		<footer className="bg-[#1e242e] z-50 relative">
			<div className="sm:gap-0 gap-2 px-4 md:px-20 lg:px-28 xl:px-48 2xl:px-72 text-white text-left py-4 flex flex-wrap sm:flex-row justify-between items-center">
				<div>
					<Image
						src={jsosifbannerbw}
						alt="Logo"
						className="w-fit h-16 mb-5"
					/>
					<h5 className="text-lg">Odette School of Business</h5>
					<h5 className="">
						University of Windsor
						<br />
						401 Sunset Avenue
						<br />
						Windsor, ON N9B 3P4
					</h5>
					<div className="flex">
						<a
							className="w-fit m-2"
							href="https://www.linkedin.com/company/john-simpson-odette-student-investment-fund/"
							target="_blank"
						>
							<svg
								className="w-[2rem] h-[2rem]"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
								/>
							</svg>
						</a>
						<a
							className="w-fit m-2"
							href="https://www.instagram.com/jsosif/"
							target="_blank"
						>
							<svg
								className="w-[2rem] h-[2rem]"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"
								/>
							</svg>
						</a>
					</div>
				</div>
				<div>
					<Image
						src={jsoifjoin}
						alt="Join JSOSIF"
						className="w-fit h-48 md:h-64"
					/>
				</div>
			</div>
			<div className="h-[4.62rem] md:h-11 overflow-clip">
				<TickerTape
					colorTheme="light"
					isTransparent={false}
				></TickerTape>
			</div>
		</footer>
	);
}
