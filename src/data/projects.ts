export interface Project {
  title: string;
  description: string;
  url: string;
  github?: string;
  technologies: string[];
  stars?: number;
  image?: string;
}

const projects: Project[] = [
  {
    title: "WaveApps",
    description:
      "Wave lets small business owners create beautiful invoices, accept online payments, and make accounting easy—all in one place.",
    url: "https://www.waveapps.com/",
    image: "/images/projects/wave.png",
    technologies: ["TypeScript", "React", "Storybook", "Vite"],
  },
  {
    title: "Topsdraw",
    description:
      "A platform for discovering, reviewing, and managing digital, technology, marketing, and creative agencies. Users can create or claim agency profiles, add service-based reviews, and showcase portfolios with client details.",
    url: "https://www.topsdraw.com/",
    image: "/images/projects/topsdraw.png",
    technologies: ["React", "Redux", "Node.js", "MySQL"],
  },
  {
    title: "StackDocket",
    description:
      "A legal management web app that allows attorneys to manage clients, cases, and hearings, with automated daily email reminders for upcoming hearings.",
    url: "https://www.stackdocket.com/",
    image: "/images/projects/stackdocket.png",
    technologies: ["React", "Node.js", "Sequelize", "MySQL"],
  },
  {
    title: "Telemedics",
    description:
      "A healthcare web app that connects patients with physicians and medical assistants via Vestra Labs. Features include appointment scheduling with SMS reminders, video consultations, and on-site medical recording for accurate physician follow-ups.",
    url: "#",
    image: "/images/projects/telemedics.png",
    technologies: ["React", "Redux", "Node.js", "Feathers"],
  },
  {
    title: "Hiring Matrix",
    description:
      "A tool to help you make your hiring decision more efficient. You can use this tool to rank and score your applicants based on their experience against the required and preferred qualifications of the posting.",
    url: "#",
    image: "/images/projects/hiringmatrix.png",
    technologies: ["React", "JavaScript", "Node.js"],
  },
];

export default projects;
