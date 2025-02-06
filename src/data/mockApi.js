import healthCare from "@/assets/healthcare.avif";
import techMediaTelecom from "@/assets/techmediatelecom.jpg";
import consumerRetail from "@/assets/consumerretail.avif";
import industrialsNaturalResources from "@/assets/industrialsresources.jpg";
import fixedIncomeRealEstate from "@/assets/incomerealestate.jpg";
import financial from "@/assets/financial.avif";

export const mockApiData = {
	statistics: {
		fundMembers: 26,
		investmentHoldings: 30,
		assetsUnderManagement: 261000,
	},
	investmentDivisions: [
		{
			name: "Financial Institutions",
			description:
				"Connor Demelo and Cozy Cosentino cover the biggest names and most promising investments in the financial sector, such as Visa and Bank of America.",
			ticker: "V|12M, SCHW, JPM|12M, TSX:BMO|12M",
			bgImage: financial,
		},
		{
			name: "Tech Media Telecommunications",
			description:
				"Eddy Aboukassm and Rafael cover the biggest names and most promising investments in the tech sector, such as Cisco and Disney.",
			ticker: "ACN|12M, CSCO|12M, TSX:OTEX|12M, DIS|12M",
			bgImage: techMediaTelecom,
		},
		{
			name: "Consumer & Retail",
			description:
				"Mohammad Mohammad and Noah Di Maio cover the biggest names and most promising investments in the consumer sector, such as Pepsi and Costco.",
			ticker: "LVMHF|12M, PEP|12M, TSX:JWEL|12M, GIS|12M, COST|12M, TSX:ATD|12M",
			bgImage: consumerRetail,
		},
		{
			name: "Industrials & Natural Resources",
			description:
				"Fadel Asfari and Jack cover the biggest names and most promising investments in the industrial sector, such as Enbridge and Canadian Natural Resources.",
			ticker: "TSX:ENB|12M, TSX:CNQ|12M, J|12M, TSX:MG|12M, XYL|12M, TSX:CP|12M, TSX:NTR|12M, AMTM",
			bgImage: industrialsNaturalResources,
		},
		{
			name: "Health Care",
			description:
				"Cullan Bryne and Kartikay Dhamija cover the biggest names and most promising investments in the health care sector, such as Pfizer and Vertex Pharmecutical.",
			ticker: "PFE|12M, VRTX|12M, NVO|12M",
			bgImage: healthCare,
		},
		{
			name: "Fixed-Income & Real Estate",
			description:
				"Luca Pecorada  cover the biggest names and most promising investments in the fixed income sector, such as Bank of America and Walmart.",
			bondTicker: [
				{
					s: "CA448810AC5|12M",
					d: "Hydro One 7.350%",
				},
				{
					s: "US478160CT9|12M",
					d: "Johnson & Johnson 6.95%",
				},
				{
					s: "US594918AD6|12M",
					d: "Microsoft 5.20%",
				},
				{
					s: "CA780086XL3|12M",
					d: "Royal Bank of Canada 4.632%",
				},
				{
					s: "BAC4273622|12M",
					d: "Bank of America 3.875%",
				},
				{
					s: "US931142CK7|12M",
					d: "Walmart 6.5% ",
				},
			],

			bgImage: fixedIncomeRealEstate,
		},
	],
	supportTeams: [
		{
			name: "Quantitative Research & Portfolio Risk",
			description:
				"Adam Bergen and Aidan Richer develop a series of mathematical models measuring various aspects of and expected performance of the fund's portfolio.",
		},
		{
			name: "Economic Advisory",
			description:
				"Sean Clarke and Ethan Braga track ongoing macroeconomic events driving different areas of the market, providing perspective on areas to concentrate capital allocation.",
		},
		{
			name: "Compliance & Special Situations",
			description:
				"Matthew Livingstone and Joseph Murtagh"
		},
		{
			name: "Software Development",
			description:
				"Aya Madi and Micheal Gibb focus on developing and maintaining the fund's proprietary software, which is used to track and analyze the fund's investments.",
		},
		{
			name: "Engagement & Recruiting",
			description:
				"Emma Tellier and Joelle Jawdat focus on engaging with the community and recruiting new members to the fund.",
		},
	],
	teams: [
		{
			name: "Executive Team",
			banner: "/images/team-banners/executive_team_banner.avif",
			members: [
				{
					name: "Jacob Sweet",
					role: "Chief Executive Officer",
					program: "Commerce Finance Specialization Economics & Philosophy Minor",
					year: "3",
					joined: "Sept 2022",
					image: "https://media.licdn.com/dms/image/v2/D5603AQEmfSZUrXkfRQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1668385805304?e=1744243200&v=beta&t=ogpAb7X4Q9b_UJKY9yH88VFFH_khyjPVsizpNjdId0Q",
					linkedin:
						"https://www.linkedin.com/in/jacob-sweet-853066214/",
				},
				{
					name: "Saif Jawdat",
					role: "Chief Investment Officer",
					program:
						"Honours Bcomm - Specializing in Finance and Minor in Economics & IT",
					year: "4",
					joined: "Sep 2023",
					image: "https://media.licdn.com/dms/image/v2/D4E03AQFMoP650DnFLA/profile-displayphoto-shrink_400_400/B4EZRnB.6OHgAo-/0/1736895361078?e=1744243200&v=beta&t=l9VnchdcFc0e31WViBaqPcnOuxBAOl0_GIxI9vz3-BA",
					linkedin:
						"https://www.linkedin.com/in/saif-jawdat-54a645262/",
				},
				{
					name: "Nolan Robinson",
					role: "Chief Strategy Officer",
					program: "No idea",
					year: "Super Senior",
					joined: "Unknown",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
			],
		},
		{
			name: "Portfolio Managers",
			banner: "/images/team-banners/portfolio_managers.webp",
			members: [
				{
					name: "Connor Demelo",
					role: "Financial Institutions",
					program: "No idea",
					year: "Super Senior",
					joined: "Unknown",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "Eddy Aboukassm",
					role: "Tech Media Telecommunications",
					program: "No idea",
					year: "Super Senior",
					joined: "Unknown",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "Mohamad Emad",
					role: "Consumer & Retail",
					program: "Double Major in Business and Political Science",
					year: "3",
					joined: "Sept 2023",
					image: "https://media.licdn.com/dms/image/v2/D4E03AQFahDbQDBlfeQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723491171400?e=1744243200&v=beta&t=58q5CGRqrzpHBpnSfyHp4UbJ0Al8d_TEvLBFmPnLpdI",
					linkedin:
						"https://www.linkedin.com/in/mohamad-emad?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
				},
				{
					name: "Fadel Asfari",
					role: "Industrials & Natural Resources",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "Cullan Bryne ",
					role: "Health Care",
					program: "Honours Business Administration, Specialization in Finance, Minor in Computer Science ",
					year: "2",
					joined: "Oct 2023",
					image: "https://media.licdn.com/dms/image/v2/D4E03AQFm3lHvEArffA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1701305242851?e=1744243200&v=beta&t=uSEeW4qRI6JS4dgWLnKC_s0q4zMwdZUSRQCJ0Mrlrfg",
					linkedin: "http://www.linkedin.com/in/cullan-byrne",
				},
				{
					name: "Luca Pecorada",
					role: "Fixed Income & Real Estate",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
			],
		},
		{
			name: "Senior Analysts",
			banner: "/images/team-banners/senior_analysts_banner.webp",
			members: [
				{
					name: "Eitan Cozy Cosentino",
					role: "Financial Institutions",
					program: "Business Administration, Finance, Economics",
					year: "3",
					joined: "Sept 2024",
					image: "https://media.licdn.com/dms/image/v2/D4E03AQGnLhcnxyIFvQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1668545416449?e=1744243200&v=beta&t=gEynNpAYF8JdWaYaq3mU6O-yJgkQCHSZ8cUBAiMpWRM",
					linkedin: "https://www.linkedin.com/in/cozy-eitan-cosentino-429319257/",
				},
				{
					name: "Rafael",
					role: "Tech Media Telecommunications",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "Noah ",
					role: "Coumser & Retail",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "Jack ",
					role: "Industrials & Natural Resources",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "Karikay Dhamija ",
					role: "Health Care",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "N/A ",
					role: "Fixed Income & Real Estate",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
			],
		},
		{
			name: "Junior Analysts",
			banner: "/images/team-banners/junior_analyst_banner.avif",
			members: [
				{
					name: "Nick",
					role: "Financial Institutions",
					program: "No idea",
					year: "Super Senior",
					joined: "Unknown",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "Prabh",
					role: "Financial Institutions",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "Mariam Bakmaya",
					role: "Financial Institutions",
					program: "Business/Psych with a finance specialization",
					year: "2",
					joined: "Jan 2025",
					image: "https://media.licdn.com/dms/image/v2/D5603AQHUe1MHRwwQvw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729819695392?e=1744243200&v=beta&t=Hq9Df-PlGM-dVyn8zw_106ZERik_U3rUk61LDNvHB80",
					linkedin: "http://www.linkedin.com/in/mariam-raphael-bakmaya-885862303",
				},
				{
					name: "James Botros",
					role: "Tech Media Telecommunications",
					program: "Civil Engineering ",
					year: "3",
					joined: "Jan 2025",
					image: "https://media.licdn.com/dms/image/v2/D5603AQE7l-XmEynJbg/profile-displayphoto-shrink_400_400/B56ZRS7R55H0Ag-/0/1736558060040?e=1744243200&v=beta&t=pi0g50H8uh5B11A2uG7Zqtfc-jE5CCLVK3aUt06Oay0",
					linkedin:
						"https://www.linkedin.com/in/james-botros-456aa6295/",
				},
				{
					name: "Izzy Kekelji",
					role: "Tech Media Telecommunications",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "Aparajita Sarkar",
					role: "Tech Media Telecommunications",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "Bella",
					role: "Consumer & Retail",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "David Jesus",
					role: "Consumer & Retail",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "Jada Yaldo",
					role: "Consumer & Retail",
					program: "Combined Major in Psychology and Criminology",
					year: "3rd",
					joined: "Jan 2025",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "Krish",
					role: "Industrials & Natural Resources",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "Travis Loughead",
					role: "Industrials & Natural Resources",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "N/A",
					role: "",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "Kohen Colenutt",
					role: "Health Care",
					program:
						"Business Administration, Specialization in Finance",
					year: "2",
					joined: "Sept 2024",
					image: "https://media.licdn.com/dms/image/v2/D4E03AQFyiCHxzT81Xg/profile-displayphoto-shrink_400_400/B4EZOXyILdGQAw-/0/1733418321559?e=1744243200&v=beta&t=2WWF-8JoSXrpH6eBTY-t7Y7EYoqGMZ8n22vynr8cqBc",
					linkedin:
						"https://www.linkedin.com/in/kohen-colenutt-292800333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
				},
				{
					name: "Andrew Booth",
					role: "Health Care",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "Gabriel Safieddine",
					role: "Health Care",
					program:
						"Business commerce, finance specialization, minor in computer science & Economics",
					year: "4",
					joined: "Jan 2024",
					image: "https://media.licdn.com/dms/image/v2/D5603AQFH_JJKq6awqA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715898278586?e=1744243200&v=beta&t=ax6v7t62Zh5ZxcMMEkiihXCaNWx0hXd4jMDdEOqIsdQ",
					linkedin:
						"https://www.linkedin.com/in/gabriel-safieddine?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
				},
				{
					name: "Alex Dougal",
					role: "Fixed Income & Real Estate",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "Marie",
					role: "Fixed Income & Real Estate",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "Huong Thao Nguyen",
					role: "Fixed Income & Real Estate",
					program: "Master of Management - Data Analytics Stream",
					year: "1st",
					joined: "Jan 2025",
					image: "https://media.licdn.com/dms/image/v2/D5603AQElL878suS_hw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695093638471?e=1744243200&v=beta&t=nzwrck2m5Bx0J8ny3VBcviURVjPFFYuLX81z9KiHY4I",
					linkedin: "https://www.linkedin.com/in/linda-nguyen28?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
				},
			],
		},
		{
			name: "Economic Advisory",
			banner: "/images/team-banners/economic_advisory_banner.avif",
			members: [
				{
					name: "Sean Clarke",
					role: "Lead Economist",
					program:
						"Honours Bachelor of Commerce–Business Administration, specialization in accounting, minor in computer science",
					year: "3",
					joined: "Sept 2022",
					image: "https://media.licdn.com/dms/image/v2/D5603AQF2erJ-DSjdDA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1701481382087?e=1744243200&v=beta&t=DmQ7VJ_Wk_ZT1h3lRmfsQeO5lio5fa3ngyaCmNqxdks",
					linkedin:
						"https://www.linkedin.com/in/sean-clarke-529294251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
				},
				{
					name: "Ethan Braga",
					role: "Senior Economist",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "Houshang Javan",
					role: "Junior Economist",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "Nathan Kemp-Dove",
					role: "Junior Economist",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "Nanki Bhatia",
					role: "Junior Economist",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
			],
		},
		{
			name: "Compliance & Special Situations",
			banner: "/images/team-banners/quant_portfolio_risk_banner.avif",
			members: [
				{
					name: "Matthew Livingstone ",
					role: "Lead Compliance Officer",
					program: "Business, Finance",
					year: "",
					joined: "Jan 2025",
					image: "https://media.licdn.com/dms/image/v2/D4D03AQEGC5q-HWH-Mg/profile-displayphoto-shrink_800_800/B4DZTcUFc2GcAk-/0/1738863041440?e=1744243200&v=beta&t=hzWEaxI5-ffqAaJbIMuUHjv-A58_d2kpm95SPQM7eeM",
					linkedin: "https://www.linkedin.com/in/matthew-livingstone-a457b02a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
				},
				{
					name: "Joseph Murtagh",
					role: "Senior Compliance Officer",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
			],
		},
		{
			name: "Quantitative Research & Portfolio Risk",
			banner: "/images/team-banners/quant_portfolio_risk_banner.avif",
			members: [
				{
					name: "Adam Bergen",
					role: "Lead Quantitative Analyst",
					program: "Business, Finance, Economics",
					year: "3",
					joined: "Oct 2023",
					image: "https://media.licdn.com/dms/image/v2/D5603AQFUt-Gw1WUq9Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1700152760577?e=1744243200&v=beta&t=QoxU0tCBfW2XYJKerjmTRmYJ_6AciL64FZHi71ErXFo",
					linkedin: "https://www.linkedin.com/in/adam-bergen-7223bb262/",
				},
				{
					name: "Aidan Richer",
					role: "Senior Quantitative Analyst",
					program:
						"Bachelor of Mathematics - Mathematics and Finance; Minor in Economics",
					year: "3",
					joined: "Jan 2024",
					image: "https://media.licdn.com/dms/image/v2/D5603AQEbLBNvnHQKHg/profile-displayphoto-shrink_400_400/B56ZROFcMNGoAo-/0/1736476837321?e=1744243200&v=beta&t=AKM-1Njrff-YC4TH0JTJOmkOEzHWxjjJyf-vVMXt_pM",
					linkedin: "http://www.linkedin.com/in/aidanricher",
				},
				{
					name: "Kumayl",
					role: "Junior Quantitative Analyst",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "Max Mullins",
					role: "Junior Quantitative Analyst",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
			],
		},
		{
			name: "Software Development",
			banner: "/images/team-banners/software_development_banner.webp",
			members: [
				{
					name: "Aya Madi",
					role: "Lead Software Developer",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "Michael Gibb",
					role: "Senior Software Developer",
					program: "Computer Science",
					year: "Jan 2023",
					joined: "3",
					image: "https://media.licdn.com/dms/image/v2/D5603AQGKitaFHlm3xQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722281073141?e=1744243200&v=beta&t=tnNz0HnacMi8voRW4dg-KqcC0tX8wFXUJfq5cZjKlz4",
					linkedin: "https://www.linkedin.com/in/michael-e-gibb",
				},
				{
					name: "Landon Hadre",
					role: "Software Developer",
					program: "Computer Science with Honours Applied Computing and a minor in Applied IT",
					year: "3",
					joined: "Nov 2024",
					image: "https://media.licdn.com/dms/image/v2/D4E03AQGS2Z6H58ut-Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726583437365?e=1744243200&v=beta&t=pHNPzbbjw3-VdZlv_SNQviHMBhjrFXKFofG8OJFURXw",
					linkedin: "https://www.linkedin.com/in/landonhadre/",
				},
				{
					name: "Ethan Konkolowicz",
					role: "Software Developer",
					program:
						"Bachelor of Computing Science with Honours Applied Computing",
					year: "3",
					joined: "Nov 2024",
					image: "https://media.licdn.com/dms/image/v2/D5603AQHhYFvFdcg1-w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730481713695?e=1744243200&v=beta&t=7yYKOqMLRCqQFHtykf0YosbWJyKyzzioTlmKw1B1CZk",
					linkedin: "https://www.linkedin.com/in/ethan-konk/",
				},
				{
					name: "Kevin Neave",
					role: "Software Developer",
					program: "Computer Science, Software Engineering",
					year: "2",
					joined: "Jan 2025",
					image: "https://media.licdn.com/dms/image/v2/D5603AQH6Zoml9zpaQA/profile-displayphoto-shrink_400_400/B56ZNvw9PaGgAg-/0/1732746926191?e=1744243200&v=beta&t=e5wx4rp8PDBWjCXGUeYpiaUgzQ-zvr6N8z6lfImNQ1o",
					linkedin: "http://linkedin.com/in/kevin-neave-a01366293",
				},
				{
					name: "Adam",
					role: "Software Developer",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
			],
		},
		{
			name: "Engagement & Recruiting",
			banner: "/images/team-banners/engagement_recruiting.webp",
			members: [
				{
					name: "Emma Tellier",
					role: "Lead Engagement Officer",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "Joelle Jawdat",
					role: "Senior Engagement Officer",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
				{
					name: "Yazareth Meneses Arrieta",
					role: "Media creator ",
					program: "Business and psychology",
					year: "1",
					joined: "Jan 2025",
					image: "https://media.licdn.com/dms/image/v2/D4E03AQESazTuRoUBjA/profile-displayphoto-shrink_400_400/B4EZOTKgRsHsAg-/0/1733340825414?e=1744243200&v=beta&t=FbPO7ou2MHCqquSpZN6AnE3NRYR-G0hubiMytMGvxHg",
					linkedin: "https://www.linkedin.com/in/yazareth-meneses-arrieta-519117337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
				},
				{
					name: "Sagal",
					role: "Engagement Officer",
					program: "",
					year: "",
					joined: "",
					image: "",
					linkedin: "https://www.linkedin.com/in/",
				},
			],
		},
	],
	alumni: [
		{
			name: "Nico Fazio",
			position: "Business Guy",
			company: "XTX Markets",
			program: "BCOM specalization in Finance",
			year: "2017-2020",
			image: "/images/nicofazio.png",
			blurb: "XTX Markets is a leading algorithmic trading firm partnering with counterparties, exchanges and e-trading venues globally to provide liquidity in the Equity, FX, Fixed Income, Commodity and Options markets. I work in the Business Development team. My avid involvement in JSOSIF was directly responsible for my eventual internships in Corporate Banking and subsequent career in the capital markets. It is the single most impactful and profitable extra-curricular experience offered by the University of Windsor.",
			linkedin: "https://www.linkedin.com/in/nicofazio/",
		},
	],
};

//mock api functions
export const fetchStatistics = async () => mockApiData.statistics;
export const fetchInvestmentDivisions = async () =>
	mockApiData.investmentDivisions;
export const fetchSupportTeams = async () => mockApiData.supportTeams;
export const fetchTeams = async () => mockApiData.teams;
export const fetchAlumni = async () => mockApiData.alumni;

// {
// 	name: "",
// 	role: "",
// 	program: "",
// 	year: "",
// 	joined: "",
// 	image: "",
// 	linkedin: "https://www.linkedin.com/in/",
// },
