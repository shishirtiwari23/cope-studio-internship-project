import code from "../assets/images/code.png";
import network from "../assets/images/network.png";
import freedom from "../assets/images/freedom.png";
import {
  OnBoardingPhase,
  EmbedPhase,
  ProjectPhase,
} from "../assets/components/.";

export const whyCardData = [
  {
    serialNo: 1,
    heading: (
      <h2>
        A path to <span>Web3</span> for you
      </h2>
    ),
    description:
      "The Web3 space evolves rapidly, but it can also discourage you from doing something new. Each of our fellows charts a unique course; together they have proven that young people can succeed in this new frontier by thinking for themselves instead of following a traditional track and competing on old career tracks.",
    image: code,
    color: "#8D9CEF",
  },
  {
    serialNo: 2,
    heading: (
      <h2>
        <span>Freedom</span> to get Stuff Done
      </h2>
    ),
    description:
      "Pursue ideas that matter instead of mandatory tests. Take on big risks instead of big debt. How you spend your time in the Fellowship is up to you — we’re here to help, but we won’t get in the way.",
    image: freedom,
    color: "#88D387",
  },
  {
    serialNo: 3,
    heading: (
      <h2>
        My <span>network</span> is yours
      </h2>
    ),
    description:
      "The hardest thing about being a young entrepreneur is that you haven’t met everyone you’ll need to know to make your venture succeed. We can help connect you — to investors, partners, prospective customers — in Silicon Valley and beyond.",
    image: network,
    color: "#E59BD5",
  },
];

export const howCardData = [
  {
    id: 1,
    title: "Onboarding Phase (3 weeks) ",
    color: "#8D9CEF",
    listItem: [
      <li>
        <p>
          Feel at home as a Fellow and choose the next big thing you want to
          build
        </p>
      </li>,
      <li>
        <p>
          Attend workshops on Web3, technical and non-technical areas important
          to your idea
        </p>
      </li>,
      <li>
        <p>
          Get introduced to the other Fellowship members to build a strong bond
          with
        </p>
      </li>,
    ],
    image: <OnBoardingPhase />,
  },
  {
    id: 2,
    title: "Project Phase (8 weeks) ",
    color: "#88D387",
    listItem: [
      <li>
        <p>
          Fellows form a squad and work together as a team or individually on a
          specific project
        </p>
      </li>,
      <li>
        <p>
          This phase is meant to mirror the ways Polygon engineers work as a
          team to ship a project.
        </p>
      </li>,
      <li>
        <p>
          The project receives feedback from investors, customers and Web3
          founders
        </p>
      </li>,
    ],
    image: <ProjectPhase />,
  },
  {
    id: 3,
    title: "Embed Phase (6 weeks) ",
    color: "#E59BD5",
    listItem: [
      <li>
        <p>
          Participants are matched with a Polygon team if they want to scale
          their efforts to the next level
        </p>
      </li>,
      <li>
        <p>
          The goal of this phase is to help set up the Fellows and projects up
          to realize their true potential
        </p>
      </li>,
    ],
    image: <EmbedPhase />,
  },
];

export const FAQCardData = [
  {
    id: 1,
    title: "Do I need a team to apply?",
    color: "#8D9CEF",
    answer:
      "No — we review and accept applicants as individuals. Most Fellows do build teams during their Fellowship — small groups of people working towards the same vision are the people who get stuff done.",
  },
  {
    id: 2,
    title:
      "Do I need to build a web3 project to be eligible for the fellowship?",
    color: "#88D387",
    answer:
      "No — we review and accept applicants as individuals. Most Fellows do build teams during their Fellowship — small groups of people working towards the same vision are the people who get stuff done.",
  },
  {
    id: 3,
    title: "Can I apply to the Fellowship if I’m still in school/college?",
    color: "#E59BD5",
    answer:
      "No — we review and accept applicants as individuals. Most Fellows do build teams during their Fellowship — small groups of people working towards the same vision are the people who get stuff done.",
  },
  {
    id: 4,
    title: "Do I need a pitch deck to apply?",
    color: "#E59BD5",
    answer:
      "No — we review and accept applicants as individuals. Most Fellows do build teams during their Fellowship — small groups of people working towards the same vision are the people who get stuff done.",
  },
  {
    id: 5,
    title: "How many Fellows do you select?",
    color: "#8D9CEF",
    answer:
      "No — we review and accept applicants as individuals. Most Fellows do build teams during their Fellowship — small groups of people working towards the same vision are the people who get stuff done.",
  },
  {
    id: 6,
    title: "How does the grant work?",
    color: "#E59BD5",
    answer:
      "No — we review and accept applicants as individuals. Most Fellows do build teams during their Fellowship — small groups of people working towards the same vision are the people who get stuff done.",
  },
  {
    id: 7,
    title: "What is the Fellowship?",
    color: "#8D9CEF",
    answer:
      "No — we review and accept applicants as individuals. Most Fellows do build teams during their Fellowship — small groups of people working towards the same vision are the people who get stuff done.",
  },
  {
    id: 8,
    title: "Is there an application deadline?",
    color: "#8D9CEF",
    answer:
      "No — we review and accept applicants as individuals. Most Fellows do build teams during their Fellowship — small groups of people working towards the same vision are the people who get stuff done.",
  },
  {
    id: 9,
    title: "Do I need to have a company or is an idea enough?",
    color: "#E59BD5",
    answer:
      "No — we review and accept applicants as individuals. Most Fellows do build teams during their Fellowship — small groups of people working towards the same vision are the people who get stuff done.",
  },
  {
    id: 10,

    title: "If I receive the Fellowship, do I need to move to San Francisco?",
    color: "#8D9CEF",
    answer:
      "No — we review and accept applicants as individuals. Most Fellows do build teams during their Fellowship — small groups of people working towards the same vision are the people who get stuff done.",
  },
  {
    id: 11,
    title: "Do you only award Fellowships to software engineers?",
    color: "#88D387",
    answer:
      "No — we review and accept applicants as individuals. Most Fellows do build teams during their Fellowship — small groups of people working towards the same vision are the people who get stuff done.",
  },
  {
    id: 12,
    title: "What is the age limit to apply?",
    color: "#E59BD5",
    answer:
      "No — we review and accept applicants as individuals. Most Fellows do build teams during their Fellowship — small groups of people working towards the same vision are the people who get stuff done.",
  },
];
