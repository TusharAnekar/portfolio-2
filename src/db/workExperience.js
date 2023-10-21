import neogImg from "../images/neog.jpeg";
import cognizantImg from "../images/cognizant.png";

const workExperience = [
  {
    id: 56,
    companyImg: neogImg,
    name: "Neog Camp",
    companyURL: "https://neog.camp/",
    position: "Web Development Student",
    projects: "Book Nook and Socialite",
    period: "Feb 2023 - Present",
    jobDescription: [
      {
        id: 12345,
        activity: "A part of web development (MERN stack) bootcamp",
      },
      {
        id: 12356,
        activity:
          "Learnt various technologies like HTML, CSS, JavaScript, React, NodeJS, MongoDB, ExpressJS, TypeScript and Redux.",
      },
    ],
  },
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
          "Worked on couple of projects in Salesforce Lightning and Classic.",
      },
      {
        id: 1235,
        activity: "Projects where agile model was used for development.",
      },
      {
        id: 1236,
        activity:
          "Functional and automation testing of web applications on salesforce.",
      },
      {
        id: 1237,
        activity: "Automating user stories testing before deployment or after.",
      },
      {
        id: 1238,
        activity:
          "System, Integration, Regression, Sanity, Smoke and End2End Testing.",
      },
    ],
  },
];

export { workExperience };
