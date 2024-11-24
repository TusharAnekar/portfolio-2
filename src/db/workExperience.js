import cognizantImg from "../images/cognizant.png";
import wednesdayLogoImg from "../images/wednesday_solutions_logo.png";

const workExperience = [
  {
    id: 55,
    companyImg: cognizantImg,
    name: "Cognizant",
    companyURL: "https://www.cognizant.com/in/en",
    position: "Programmer Analyst",
    projects: "Financial Regulator, Biogen and Warner Bros",
    period: "Dec 2016 - Jan 2022",
    jobDescription: [
      {
        id: 1234,
        activity:
          "Worked on projects in Salesforce Lightning and Classic where agile model was used for development.",
      },
      {
        id: 1235,
        activity:
          "Participated actively in sprint planning, story grooming, retrospectives sessions and daily standups.",
      },
      {
        id: 1236,
        activity:
          "Reduced regression testing time by 50% through automation of high-priority test cases.",
      },
      {
        id: 1237,
        activity:
          "Improved test coverage by 25% by writing and automating comprehensive test scenarios and cases for user stories.",
      },
    ],
  },
  {
    id: 56,
    companyImg: wednesdayLogoImg,
    name: "Wednesday Solutions",
    companyURL: "https://www.wednesday.is/",
    position: "Sofware Engineer I",
    projects: "One Consumer",
    period: "Oct 2024 - Present",
    jobDescription: [
      {
        id: 12345,
        activity:
          "Increased user engagement by 30% by developing dynamic and responsive multi-page applications.",
      },
      {
        id: 12356,
        activity:
          "Improved application reliability by 40% through the design and execution of end-to-end tests.",
      },
      {
        id: 12357,
        activity:
          "Reduced UI regression issues by 50% by creating UI component tests, enabling efficient visual testing and component reuse.",
      },
    ],
  },
];

export { workExperience };
