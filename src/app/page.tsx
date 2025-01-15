import LandingPage from "../pages/LandingPage";
import Head from "next/head";

export const metadata = {
	title: "Home | JSOSIF",
};

export default function Home() {
	return (
		<div>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<LandingPage />
		</div>
	);
}
