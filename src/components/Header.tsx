//header component, contains jsosif logo and our navbar with routes to all sub pages on the website

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import jsosifbanner from "../assets/jsosifbanner.png";
import { usePathname } from "next/navigation";
import path from "path";

export default function Header() {
	//this allows an animation to be applied to the pages when you scroll down the page
	const pathname = usePathname();
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);
	};

	useEffect(() => {
		console.log(pathname);
	}, [pathname]);

	//adds an event listener to the window to listen for scroll events on use
	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={`flex items-center justify-center py-4 bg-white shadow-md z-50 ${
				scrollPosition > 0 ? "fixed w-full" : "absolute w-full"
			}`}
		>
			{/* Logo Section */}
			<div className="mx-4 md:mx-20 xl:mx-52 w-full flex items-center xl:justify-between relative">
				<button className="mr-4 lg:mr-[8rem] rounded-full p-2 hover:text-[#0E5791] text-gray-600 xl:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z"
						/>
					</svg>
				</button>
				<div className="hover:cursor-pointer w-fit mr-12 shrink-0 md:block hidden">
					<Link href="/" passHref legacyBehavior>
						<Image
							src={jsosifbanner}
							alt="Logo"
							height={80}
							width={300}
							className="h-12 md:h-16 xl:h-20 object-contain"
						/>
					</Link>
				</div>
				<div className="hover:cursor-pointer w-fit shrink-0 md:hidden absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
					<Link href="/" passHref legacyBehavior>
						<Image
							src={jsosifbanner}
							alt="Logo"
							height={80}
							width={300}
							className="h-12 md:h-16 xl:h-20 object-contain"
						/>
					</Link>
				</div>

				{/* Navigation Links */}
				<nav className="xl:flex space-x-8 text-gray-600 hidden">
					<Link href="/about" passHref legacyBehavior>
						<a
							className={`hover:text-[#0E5791] ${
								pathname === "/about" && "text-primary"
							}`}
						>
							About
						</a>
					</Link>
					<Link href="/portfolio" passHref legacyBehavior>
						<a
							className={`hover:text-[#0E5791] ${
								pathname === "/portfolio" && "text-primary"
							}`}
						>
							Portfolio
						</a>
					</Link>
					<Link href="/team" passHref legacyBehavior>
						<a
							className={`hover:text-[#0E5791] ${
								pathname === "/team" && "text-primary"
							}`}
						>
							Team
						</a>
					</Link>
					<Link href="/alumni" passHref legacyBehavior>
						<a
							className={`hover:text-[#0E5791] ${
								pathname === "/alumni" && "text-primary"
							}`}
						>
							Alumni
						</a>
					</Link>
					{/* <Link href="/research" passHref legacyBehavior>
						<a className={`hover:text-[#0E5791] ${
								pathname === "/hiring" && "text-primary"
							}`}>Research</a>
					</Link> */}
					<Link href="/bloomberg" passHref legacyBehavior>
						<a
							className={`hover:text-[#0E5791] ${
								pathname === "/bloomberg" && "text-primary"
							}`}
						>
							Bloomberg
						</a>
					</Link>
					<Link href="/hiring" passHref legacyBehavior>
						<a
							className={`hover:text-[#0E5791] ${
								pathname === "/hiring" && "text-primary"
							}`}
						>
							Hiring
						</a>
					</Link>
				</nav>
			</div>
		</header>
	);
}
