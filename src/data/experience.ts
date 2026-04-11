export interface Experience {
  title: string;
  company: string;
  url: string;
  range: string;
  description: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "H&R Block",
    url: "https://www.hrblock.com/",
    range: "NOV 2023 — Present",
    description:
      "Revamped the payment platform by optimizing onboarding flows and integrating Adyen as the primary payment provider to boost reliability and performance. Improved code quality with automated tests using React Testing Library and Vitest, and developed reusable UI components and stories for Wave HQ to ensure consistent, scalable development.",
    technologies: ["TypeScript", "React", "React Native", "Storybook", "Vite", "RTL", "Redux", "JavaScript"],
  },
  {
    title: "Software Developer",
    company: "IGDS Technologies",
    url: "https://igdst.com/",
    range: "MAR 2021 — NOV 2023",
    description:
      "Built full-stack web applications using ReactJS, Redux, Node.js, and Feathers, delivering responsive interfaces and scalable APIs. Designed MySQL databases with Sequelize for efficient data management and implemented secure JWT authentication. Optimized performance through Redux middleware and caching to achieve faster load times and an improved user experience.",
    technologies: ["React", "Redux", "JavaScript", "Node.js", "Sequelize", "MySQL", "HTML & SCSS"],
  },
  {
    title: "Java Developer Trainee",
    company: "Quest Innovative Solutions",
    url: "https://www.qis.co.in/",
    range: "SEP 2019 — MAR 2021",
    description:
      "Developed Java EE applications using Spring and ORM frameworks, focusing on maintainability and stability. Worked with Java's internal mechanisms (class loading, memory management, transactions), built REST services, and integrated relational databases. Applied test-driven development to ensure high-quality releases.",
    technologies: ["Java", "Spring", "SQL", "ORM", "Rest APIs"],
  },
];

export default experiences;
