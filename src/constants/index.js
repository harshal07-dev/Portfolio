import projects1 from "../assets/project-1.png";
import projects2 from "../assets/project-2.png";
import projects3 from "../assets/project-3.png";
import projects4 from "../assets/project-4.png";
import projects5 from "../assets/project-5.png";
import projects6 from "../assets/projects6.webp";

import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.webp";
import person3 from "../assets/person3.webp";
import person4 from "../assets/person4.webp";
import person5 from "../assets/person5.webp";
import person6 from "../assets/person6.webp";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  // { href: "#experience", label: "Experience" },
  // { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 👋",
  introduction:
    "I'm Harshal, an aspiring full-stack developer dedicated to building immersive and intuitive web experiences.",
  description:
    "I’m currently learning mobile app development using react native & expo. Highly motivated, quick to learn new technologies, and committed to continuous growth.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume-dev.pdf",
};

export const MARQUEE_TEXT = [
  "ReactJs, NodeJs, MongoDb, Tailwind, Javascript, Express, React Native",
];

export const PROJECTS = [
  {
    name: "Expense Tracker Mobile App",
    description: "",
    image: projects1,
    link: "https://github.com/harshal07-dev/Expense-tracker-App.git",
  },
  {
    name: "Interior designs Landing page",
    description: "",
    image: projects2,
    link: "https://interior-designs-landing-page.vercel.app",
  },
  {
    name: "Contact Manager API",
    description: "",
    image: projects3,
    link: "https://github.com/harshal07-dev/contactManager.git",
  },
  {
    name: "Bitcoin Saas Landing Page",
    description: "",
    image: projects4,
    link: "https://harshal07-dev.github.io/React-Landing-page/",
  },
  {
    name: "To-do Mobile App",
    description: "",
    image: projects5,
    link: "https://github.com/harshal07-dev/Basic-Todo-App.git",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a dedicated frontend developer with a passion for building modern web applications that are both functional and aesthetically pleasing. Over the years, I have worked on numerous projects ranging from single-page applications to complex multi-tiered systems, always ensuring high performance and seamless user experiences.",
    "I specialize in using technologies like React and Tailwind CSS to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow.",
  ],
};

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "harshalsys845@gmail.com",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/harshal07-dev",
      ariaLabel: "View my GitHub profile",
      icon: "FaGithub",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/harshaltv",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "FaLinkedin",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Harshal. All rights reserved.`,
};
