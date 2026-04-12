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
      "Led payment onboarding improvements by optimizing user flows and integrating Adyen, boosting transaction reliability. I also built and maintained full-stack marketplace integrations with Etsy and eBay, improving data sync and third-party onboarding. Throughout, I focused on code quality through automated testing and reusable UI component development.",
    technologies: [
      "TypeScript",
      "React",
      "React Native",
      "Storybook",
      "Vite",
      "RTL",
      "Redux",
      "Django",
    ],
  },
  {
    title: "Software Developer",
    company: "IGDS Technologies",
    url: "https://igdst.com/",
    range: "MAR 2021 — NOV 2023",
    description:
      "Built full-stack web applications, delivering responsive interfaces and scalable APIs. Designed MySQL databases with Sequelize for efficient data management and implemented secure JWT authentication. Optimized performance through Redux middleware and caching to achieve faster load times and an improved user experience.",
    technologies: [
      "React",
      "Redux",
      "JavaScript",
      "Node.js",
      "Sequelize",
      "MySQL",
      "HTML & SCSS",
    ],
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
