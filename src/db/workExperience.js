import { v4 as uuidv4 } from "uuid";
import cognizantImg from "../images/cognizant.png";
import wednesdayLogoImg from "../images/wednesday_solutions_logo.png";

const workExperience = [
  {
    id: uuidv4(),
    companyImg: cognizantImg,
    name: "Cognizant",
    companyURL: "https://www.cognizant.com/in/en",
    position: "Programmer Analyst",
    period: "Dec 2016 - Jan 2022",
    jobDescription: [
      {
        id: uuidv4(),
        activity:
          "Built and maintained the frontend of a customer management platform featuring complex multi-page forms, streamlining customer registration, updates, deletions, and record management, leading to faster user onboarding experience.",
      },
      {
        id: uuidv4(),
        activity:
          "Conducted thorough code reviews to uphold frontend best practices and coding standards, contributing to a reduction in UI defects across sprints.",
      },
      {
        id: uuidv4(),
        activity:
          "Wrote unit tests for frontend components to ensure code quality and functionality.",
      },
      {
        id: uuidv4(),
        activity:
          "Led end-to-end testing efforts for 10+ major Salesforce releases, ensuring smooth deployments withzero critical post-production issues.",
      },
      {
        id: uuidv4(),
        activity:
          "Developed and automated 100+ test scripts using CITS, reducing regression testing time by 40%.",
      },
      {
        id: uuidv4(),
        activity:
          "Collaborated with developers and business teams to identify and resolve 100+ defects, improving system stability and user experience.",
      },
      {
        id: uuidv4(),
        activity:
          " Executed 500+ manual and regression test cases, ensuring a 98% defect detection rate before production release.",
      },
    ],
  },
  {
    id: uuidv4(),
    companyImg: wednesdayLogoImg,
    name: "Wednesday Solutions",
    companyURL: "https://www.wednesday.is/",
    position: "Software Engineer I",
    period: "Oct 2024 - Present",
    jobDescription: [
      {
        id: uuidv4(),
        activity:
          "Built and delivered a B2B MedTech vendor discovery MVP in just 1 month, successfully showcased by the client at a major industry event, leading to product-market fit within 3 months.",
      },
      {
        id: uuidv4(),
        activity:
          "Integrated GraphQL with Apollo Client, achieving a 10% reduction in payload size and a 20% decrease in the number of fields fetched compared to REST APIs, leading to significantly improved data fetching performance and reduced network overhead.",
      },
      {
        id: uuidv4(),
        activity:
          "Developed a customer-facing financial literacy platform, enabling users to access interactive learning modules and manage personal finances through curated resources.",
      },
      {
        id: uuidv4(),
        activity:
          "Increased user engagement by 30% by developing dynamic and responsive multi-page applications.",
      },
      {
        id: uuidv4(),
        activity:
          "Implemented a scalable, SEO-optimized blog platform with dynamic content personalization, leveraging caching and indexing strategies to enhance search discoverability and user engagement.",
      },
    ],
  },
];

export { workExperience };
