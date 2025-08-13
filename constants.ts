
import type { Project, EducationItem, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Ayush Tripathi",
  title: "Software Development Intern",
  image: "https://photos.google.com/u/1/photo/AF1QipPDGOCLPubcAJFq3QHV85MKBLXqjNIao9SaOoiX",
  profile: "Motivated and detail-oriented B.Tech student specializing in Information Technology, seeking an opportunity to apply my technical skills in a dynamic work environment. Passionate about problem-solving, software development, and continuous learning.",
  email: "ayush.bhrg@gmail.com",
  linkedin: "https://linkedin.com/in/ayush8840",
  github: "https://github.com/ayush8840",
};

export const PROJECTS: Project[] = [
  {
    title: "Chor-Sipahi Game",
    status: "In Progress",
    description: [
      "Developed an interactive multiplayer game using the MERN stack.",
      "Implemented real-time gameplay using WebSockets and role-based assignments.",
      "Designed an engaging UI with CSS and React."
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "WebSockets"]
  },
  {
    title: "Personal Diary App",
    status: "Completed",
    description: [
      "Built a full-stack CRUD application using React, Node.js, and MongoDB.",
      "Integrated Google OAuth 2.0 for secure user authentication.",
      "Enabled users to store, edit, and delete personal journal entries."
    ],
    technologies: ["React", "Node.js", "MongoDB", "Google OAuth"]
  },
   {
    title: "MERN Chat Application",
    status: "Completed",
    description: [
      "Built a real-time chat application with Google authentication using @react-oauth/google.",
      "Integrated WebSockets for seamless messaging."
    ],
    technologies: ["React", "Node.js", "MongoDB", "WebSockets"]
  },
  {
    title: "WANDRING CAR",
    status: "Completed (2023)",
    description: [
      "Developed an engaging car racing game with multiple states.",
      "Integrated a robust authentication system using an Oracle database.",
      "Designed intuitive navigation and implemented performance optimizations."
    ],
    technologies: ["Java", "Oracle DB", "Swing", "JDBC"]
  },
  {
    title: "Hospital Report Generation System",
    status: "Live Project",
    description: [
      "Developed a comprehensive system for report generation in a hospital environment.",
      "Responsibilities included designing, coding and implementing back-end functionalities."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "JSP", "Oracle"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["JavaScript", "Java", "C"]
  },
  {
    title: "Frontend",
    skills: ["React.js", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "Oracle Database"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "Firebase", "JWT", "REST APIs", "Framer Motion"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.Tech in Information Technology",
    institution: "United College of Engineering and Research, Prayagraj",
    years: "2022 – Ongoing"
  },
  {
    degree: "Intermediate (12th Standard)",
    institution: "M.R.S Public School & College, Andawa, Prayagraj",
    years: "2020 – 2021"
  },
  {
    degree: "Matriculation (10th Standard)",
    institution: "Dev Narayan Public School",
    years: "2018 – 2019"
  }
];

export const CERTIFICATIONS = [
    { name: "JavaScript Certification", issuer: "Infosys Springboard" },
    { name: "React.js Developer Certificate", issuer: "Infosys Springboard" }
];
