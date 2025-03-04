import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header"; // Adjust path if necessary
import Footer from "../components/Footer"; // Adjust path if necessary
import Script from "next/script";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "JSOSIF Website",
	description: "John Simpson Odette Student Investment Fund website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			{/* Google Analytics Script */}
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=G-H2BVL8NLCN`}
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-H2BVL8NLCN', {
            page_path: window.location.pathname,
          });
        `}
			</Script>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{/* Add Header */}
				<Header />

				{/* Main Content */}
				<main className="flex-grow pt-20 lg:pt-24 xl:pt-28">
					{children}
				</main>

				{/* Add Footer */}
				<Footer />
			</body>
		</html>
	);
}
