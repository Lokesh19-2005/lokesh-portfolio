export const personalInfo = {
  name: "PEDIREDLA SAI LOKESH",
  firstName: "Sai Lokesh",
  lastName: "Pediredla",
  roles: [
    "Full Stack Developer",
    "Frontend Engineer",
    "AI/ML Enthusiast",
    "Data Science Student",
  ],
  headline: "Building Intelligent Digital Experiences",
  subheadline: "Full Stack Developer • AI Enthusiast • Problem Solver",
  email: "sailokesh1920@gmail.com",
  phone: "7416751547",
  whatsapp: "https://wa.me/917416751547",
  linkedin: "https://www.linkedin.com/in/pediredla-sai-lokesh-577a3b30b/",
  github: "https://github.com/Lokesh19-2005",
  location: "India",
  resumeUrl: "/resume.pdf",
};

export const skills = {
  frontend: [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "JavaScript", level: 95 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Framer Motion", level: 85 },
  ],
  backend: [
    { name: "Fastify", level: 85 },
    { name: "Node.js", level: 88 },
    { name: "Python", level: 90 },
    { name: "Java", level: 82 },
  ],
  database: [
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 80 },
  ],
  aiml: [
    { name: "TensorFlow", level: 82 },
    { name: "Scikit-Learn", level: 85 },
    { name: "Machine Learning", level: 80 },
    { name: "Data Science", level: 85 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "GitHub", level: 92 },
    { name: "VS Code", level: 95 },
    { name: "Docker", level: 75 },
  ],
};

export const projects = [
  {
    id: "armour-tint-studios",
    title: "Armour Tint Studios",
    description:
      "Premium automotive tinting and protection studio website with immersive 3D visuals and seamless booking experience.",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    image: "/images/project-1.jpg",
    color: "#6366f1",
    liveUrl: "https://armour-tint-studios.vercel.app/",
    githubUrl: "https://github.com/Lokesh19-2005",
    category: "Web Development",
  },
  {
    id: "aadhya-caterers",
    title: "Aadhya Caterers",
    description:
      "Modern catering service platform with dynamic menu showcase, real-time booking system, and elegant UI design.",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: "/images/project-2.jpg",
    color: "#8b5cf6",
    liveUrl: "https://aadhya-caterers-orcin.vercel.app/",
    githubUrl: "https://github.com/Lokesh19-2005",
    category: "Full Stack",
  },
  {
    id: "deekshi-global-exim",
    title: "Deekshi Global Exim",
    description:
      "International trade and export business platform with multi-language support and real-time shipment tracking.",
    tags: ["Next.js", "TypeScript", "Fastify", "PostgreSQL"],
    image: "/images/project-3.jpg",
    color: "#06b6d4",
    liveUrl: "https://deekshi-global-exim.vercel.app/",
    githubUrl: "https://github.com/Lokesh19-2005",
    category: "Full Stack",
  },
  {
    id: "cineverse",
    title: "CineVerse",
    description:
      "AI-powered movie recommendation system using collaborative filtering and content-based algorithms for personalized suggestions.",
    tags: ["Python", "TensorFlow", "Scikit-Learn", "React"],
    image: "/images/project-4.jpg",
    color: "#f59e0b",
    liveUrl: "https://github.com/Lokesh19-2005",
    githubUrl: "https://github.com/Lokesh19-2005",
    category: "AI/ML",
  },
];

export const experience = [
  {
    id: 1,
    company: "StaffArc",
    role: "Full Stack Developer",
    duration: "2024 - Present",
    description:
      "Building scalable web applications with modern technologies. Leading frontend architecture and implementing AI-powered features.",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL"],
    type: "Development",
  },
  {
    id: 2,
    company: "InternPe",
    role: "UI/UX Designer",
    duration: "2024",
    description:
      "Designed intuitive user interfaces and conducted user research. Created wireframes, prototypes, and high-fidelity designs.",
    technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    type: "Design",
  },
  {
    id: 3,
    company: "SkillCraft Technology",
    role: "Data Science Intern",
    duration: "2023 - 2024",
    description:
      "Developed machine learning models for data analysis. Implemented data pipelines and visualization dashboards.",
    technologies: ["Python", "Pandas", "Scikit-Learn", "Matplotlib"],
    type: "Data Science",
  },
  {
    id: 4,
    company: "Launched Global",
    role: "Machine Learning Intern",
    duration: "2023",
    description:
      "Built and deployed ML models for predictive analytics. Worked on NLP and computer vision projects.",
    technologies: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"],
    type: "AI/ML",
  },
];

export const stats = [
  { label: "Projects Completed", value: 15, suffix: "+" },
  { label: "Technologies Mastered", value: 20, suffix: "+" },
  { label: "Lines of Code", value: 50, suffix: "K+" },
  { label: "GitHub Contributions", value: 500, suffix: "+" },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
