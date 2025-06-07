//header component, contains jsosif logo and our navbar with routes to all sub pages on the website

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import jsosifbanner from "../assets/jsosifbanner.png";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
	//this allows an animation to be applied to the pages when you scroll down the page
	const pathname = usePathname();
	const [scrollPosition, setScrollPosition] = useState(0);
	const [menuOpen, setMenuOpen] = useState(false);
	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);
	};

	const paths = [
		{
			name: "About",
			href: "/about",
		},
		{
			name: "Portfolio",
			href: "/portfolio",
		},
		{
			name: "Team",
			href: "/team",
		},
		{
			name: "Alumni",
			href: "/alumni",
		},
		//will come later for member login or something
		// {
		// 	name: "Research",
		// 	href: "/research",
		// },
		{
			name: "Bloomberg",
			href: "/bloomberg",
		},
		{
			name: "Hiring",
			href: "/hiring",
		},
	];

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
			<div
				className={`fixed h-screen w-screen top-0 left-0 bg-black z-30 transition-all ${
					!menuOpen
						? "bg-opacity-0 pointer-events-none"
						: "bg-opacity-20 pointer-events-auto"
				}`}
			/>
			<div
				className={`fixed top-0 left-0 z-40 transition-all duration-300 ${
					menuOpen
						? "translate-x-0"
						: " -translate-x-[90vw] sm:-translate-x-[30rem]"
				}`}
			>
				<MobileMenu
					setMenuOpen={setMenuOpen}
					pathname={pathname}
					paths={paths}
				/>
			</div>
			{/* Logo Section */}
			<div className="mx-4 md:mx-20 xl:mx-52 w-full flex items-center xl:justify-between relative">
				<button
					onClick={() => setMenuOpen(true)}
					aria-label="Back to home"
					className="hover:cursor-pointer mr-4 lg:mr-[8rem] rounded-full p-2 hover:text-[#0E5791] text-gray-600 xl:hidden"
				>
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
				{/* Desktop home button */}
				<div className="hover:cursor-pointer w-fit mr-12 shrink-0 md:block hidden">
					<Link
						href="/"
						passHref
						legacyBehavior
						aria-label="Back to home"
						className="hover:cursor-pointer"
					>
						<Image
							src={jsosifbanner}
							alt="Logo"
							height={80}
							width={300}
							className="h-12 md:h-16 xl:h-20 object-contain hover:cursor-pointer"
						/>
					</Link>
				</div>
				{/* Mobile home button */}
				<div className="hover:cursor-pointer w-fit shrink-0 md:hidden absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
					<Link
						href="/"
						passHref
						legacyBehavior
						aria-label="Back to home"
						className="hover:cursor-pointer"
					>
						<Image
							src={jsosifbanner}
							alt="Logo"
							height={80}
							width={300}
							className="h-12 md:h-16 xl:h-20 object-contain hover:cursor-pointer"
						/>
					</Link>
				</div>

				{/* Navigation Links */}
				<nav className="xl:flex space-x-8 text-gray-600 hidden">
					{paths.map(({ name, href }) => {
						return (
							<Link
								href={href}
								passHref
								legacyBehavior
								key={name}
								aria-label={`Navigate to ${name}`}
								className="hover:cursor-pointer"
							>
								<a
									aria-disabled="true"
									className={`hover:text-[#0E5791] hover:cursor-pointer ${
										pathname === href && "text-primary"
									}`}
								>
									{name}
								</a>
							</Link>
						);
					})}
				</nav>
			</div>
		</header>
	);
}
