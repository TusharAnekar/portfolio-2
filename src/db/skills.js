import { v4 as uuidv4 } from "uuid";
import HTML5 from "../images/html5.svg";
import CSS3 from "../images/css3.svg";
import JavaScript from "../images/javascript.svg";
import React from "../images/react.svg";
import TypeScript from "../images/typescript.svg";
import Redux from "../images/redux.svg";
import TailwindCSS from "../images/tailwind-css.svg";
import Git from "../images/git.svg";
import next from "../images/next-js-icon.svg";
import graphQLogo from "../images/graph-ql-icon.svg";
import { SKILLS_URLS } from "../constants/urls";

const skills = [
  {
    id: uuidv4(),
    name: "HTML5",
    img: HTML5,
    url: SKILLS_URLS.HTML5,
  },
  {
    id: uuidv4(),
    name: "CSS3",
    img: CSS3,
    url: SKILLS_URLS.CSS3,
  },
  {
    id: uuidv4(),
    name: "JavaScript",
    img: JavaScript,
    url: SKILLS_URLS.JavaScript,
  },
  {
    id: uuidv4(),
    name: "React",
    img: React,
    url: SKILLS_URLS.React,
  },
  {
    id: uuidv4(),
    name: "TypeScript",
    img: TypeScript,
    url: SKILLS_URLS.TypeScript,
  },
  {
    id: uuidv4(),
    name: "Redux",
    img: Redux,
    url: SKILLS_URLS.Redux,
  },
  {
    id: uuidv4(),
    name: "TailwindCSS",
    img: TailwindCSS,
    url: SKILLS_URLS.TailwindCSS,
  },
  {
    id: uuidv4(),
    name: "Git",
    img: Git,
    url: SKILLS_URLS.Git,
  },
  {
    id: uuidv4(),
    name: "Next",
    img: next,
    url: SKILLS_URLS.Next,
  },
  {
    id: uuidv4(),
    name: "GraphQL",
    img: graphQLogo,
    url: SKILLS_URLS.GraphQL,
  },
];

export { skills };
