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
    {
      name: "Fund Managers",
      members: [
        {
          name: "Jane Doe",
          role: "Fund Manager",
          program: "Economics",
          year: "Third Year",
          joined: "March 2023",
          image: "/images/jane.jpg",
          linkedin: "https://www.linkedin.com/in/jane-doe/",
        },
      ],
    },
    {
      name: "Senior Analysts",
      members: [
        {
          name: "John Smith",
          role: "Senior Analyst",
          program: "Finance",
          year: "Second Year",
          joined: "July 2023",
          image: "/images/john.jpg",
          linkedin: "",
        },
      ],
    },
  ],
  alumni: [
    {
      name: "Alice Johnson",
      position: "Software Engineer",
      company: "Google",
      program: "Computer Science",
      year: "2021",
      image: "/images/alice.jpg",
      linkedin: "https://www.linkedin.com/in/alice-johnson/",
    },
    {
      name: "Bob Brown",
      position: "Data Scientist",
      company: "Meta",
      program: "Data Analytics",
      year: "2020",
      image: "/images/bob.jpg",
      linkedin: "https://www.linkedin.com/in/bob-brown/",
    },
    {
      name: "Catherine Green",
      position: "Product Manager",
      company: "Amazon",
      program: "Business Administration",
      year: "2019",
      image: "/images/catherine.jpg",
      linkedin: "https://www.linkedin.com/in/catherine-green/",
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

