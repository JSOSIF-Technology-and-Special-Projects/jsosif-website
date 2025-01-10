export const mockApiData = {
  statistics: {
    fundMembers: 26,
    investmentHoldings: 30,
    assetsUnderManagement: 256000,
  },
  investmentDivisions: [
    {
      name: "Financial Institutions",
      description: "Test",
      ticker: "NYSE:JPM", // Example ticker for Financial Institutions
    },
    {
      name: "Tech Media Telecommunications",
      description: "Test",
      ticker: "AAPL", // Example ticker for Tech Media
    },
    {
      name: "Consumer & Retail",
      description: "Test",
      ticker: "AMZN", // Example ticker for Consumer & Retail
    },
    {
      name: "Industrials & Natural Resources",
      description: "Test",
      ticker: "CAT", // Example ticker for Industrials
    },
    {
      name: "Health Care",
      description: "Test",
      ticker: "JNJ", // Example ticker for Health Care
    },
    {
      name: "Fixed-Income & Real Estate",
      description: "Test",
      ticker: "VNQ", // Example ticker for Fixed-Income
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
          linkedin: "https://www.linkedin.com/in/jacob-sweet-853066214/?originalSubdomain=ca",
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
    {
      name: "Junior Analysts",
      members: [
        {
          name: "Emily Brown",
          role: "Junior Analyst",
          program: "Accounting",
          year: "First Year",
          joined: "May 2024",
          image: "/images/emily.jpg",
          linkedin: "",
        },
      ],
    },
    {
      name: "Economics Team",
      members: [
        {
          name: "Liam Wilson",
          role: "Economic Researcher",
          program: "Economics",
          year: "Third Year",
          joined: "September 2023",
          image: "/images/liam.jpg",
          linkedin: "",
        },
      ],
    },
    {
      name: "Math and Risk Team",
      members: [
        {
          name: "Sophia Davis",
          role: "Risk Analyst",
          program: "Mathematics",
          year: "Second Year",
          joined: "October 2023",
          image: "/images/sophia.jpg",
          linkedin: "",
        },
      ],
    },
    {
      name: "Operations Team",
      members: [
        {
          name: "Michael Johnson",
          role: "Operations Coordinator",
          program: "Business Management",
          year: "Fourth Year",
          joined: "June 2023",
          image: "/images/michael.jpg",
          linkedin: "",
        },
      ],
    },
  ],
};

// Mock API functions
export const fetchStatistics = async () => mockApiData.statistics;
export const fetchInvestmentDivisions = async () => mockApiData.investmentDivisions;
export const fetchSupportTeams = async () => mockApiData.supportTeams;
export const fetchTeams = async () => mockApiData.teams;
