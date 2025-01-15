export const mockApiData = {
  statistics: {
    fundMembers: 26,
    investmentHoldings: 30,
    assetsUnderManagement: 1111000,
  },
  investmentDivisions: [
    {
      name: "Financial Institutions",
      description: "Test",
      ticker: "NYSE:JPM, AAPL",
    },
    {
      name: "Tech Media Telecommunications",
      description: "Test",
      ticker: "AAPL",
    },
    {
      name: "Consumer & Retail",
      description: "Test",
      ticker: "AMZN",
    },
    {
      name: "Industrials & Natural Resources",
      description: "Test",
      ticker: "CAT",
    },
    {
      name: "Health Care",
      description: "Test",
      ticker: "JNJ",
    },
    {
      name: "Fixed-Income & Real Estate",
      description: "Test",
      ticker: "VNQ",
    },
  ],
  supportTeams: [
    {
      name: "Quantitative Research & Portfolio Risk",
      description: "Test",
    },
    {
      name: "Economic Advisory",
      description: "Test",
    },
    {
      name: "Software Development",
      description: "Test",
    },
    {
      name: "Engagement & Recruiting",
      description: "Test",
    },
  ],
  teams: [
    {
      name: "Executive Team",
      members: [
        {
          name: "Jacob Sweet",
          role: "Chief Executive Officer",
          program: "No idea",
          year: "Unknown",
          joined: "Unknown",
          image: "/images/jacobsweet.png",
          linkedin:
            "https://www.linkedin.com/in/jacob-sweet-853066214/?originalSubdomain=ca",
        },
      ],
    },
  ],
  alumni: [
    {
      name: "Nico Fazio",
      position: "Business Guy",
      company: "XTX Markets",
      program: "BCOM specalization in Finace",
      year: "2017-2020",
      image: "/images/nicofazio.png",
      blurb: "XTX Markets is a leading algorithmic trading firm partnering with counterparties, exchanges and e-trading venues globally to provide liquidity in the Equity, FX, Fixed Income, Commodity and Options markets. I work in the Business Development team. My avid involvement in JSOSIF was directly responsible for my eventual internships in Corporate Banking and subsequent career in the capital markets. It is the single most impactful and profitable extra-curricular experience offered by the University of Windsor.",
      linkedin: "https://www.linkedin.com/in/nicofazio/",
    },
  ],
};

// Existing mock API functions
export const fetchStatistics = async () => mockApiData.statistics;
export const fetchInvestmentDivisions = async () =>
  mockApiData.investmentDivisions;
export const fetchSupportTeams = async () => mockApiData.supportTeams;
export const fetchTeams = async () => mockApiData.teams;

// New function to fetch alumni data
export const fetchAlumni = async () => mockApiData.alumni;

