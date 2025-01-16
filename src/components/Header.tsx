"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import jsosifbanner from "../assets/jsosifbanner.png";

export default function Header() {
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
		<header
			className={`flex items-center justify-center py-4 bg-white shadow-md z-[99999] ${
				scrollPosition > 0 ? "fixed w-full" : "absolute w-full"
			}`}
		>
			{/* Logo Section */}
			<div className="mx-52 w-full flex items-center justify-between">
				<div className="hover:cursor-pointer w-fit">
					<Link href="/" passHref legacyBehavior>
						<Image
							src={jsosifbanner}
							alt="Logo"
							height={80}
							width={300}
							className="h-20 object-contain"
						/>
					</Link>
				</div>

				{/* Navigation Links */}
				<nav className="flex space-x-8 text-gray-600">
					<Link href="/about" passHref legacyBehavior>
						<a className="hover:text-blue-500">About</a>
					</Link>
					<Link href="/portfolio" passHref legacyBehavior>
						<a className="hover:text-blue-500">Portfolio</a>
					</Link>
					<Link href="/team" passHref legacyBehavior>
						<a className="hover:text-blue-500">Team</a>
					</Link>
					<Link href="/alumni" passHref legacyBehavior>
						<a className="hover:text-blue-500">Alumni</a>
					</Link>
					<Link href="/research" passHref legacyBehavior>
						<a className="hover:text-blue-500">Research</a>
					</Link>
					<Link href="/bloomberg" passHref legacyBehavior>
						<a className="hover:text-blue-500">Bloomberg</a>
					</Link>
					<Link href="/hiring" passHref legacyBehavior>
						<a className="hover:text-blue-500">Hiring</a>
					</Link>
				</nav>
			</div>
		</header>
	);
}
