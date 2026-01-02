import { Project, SkillCategory, Experience, SocialLink, Certificate } from './types';

export const PERSONAL_DETAILS = {
  name: "Ronada Sakalesha",
  title: "Full Stack Developer & Machine Learning Enthusiast",
  email: "ronadasakalesha@gmail.com",
  tagline: "Bridging the gap between complex data and intuitive user experiences.",
  about: "I am a Computer Science undergraduate at Dayananda Sagar University with a strong foundation in building scalable web applications and predictive machine learning models. My passion lies in solving real-world problems through code, whether it's optimizing subscription management or engineering robust recommendation engines.",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/sakalesha", icon: "github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/ronada-sakalesha", icon: "linkedin" },
  { platform: "Email", url: `mailto:${PERSONAL_DETAILS.email}`, icon: "mail" },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "FarmWise",
    description: "A mobile-first agricultural advisory platform empowering farmers with multi-language crop guidance (English, Hindi, Kannada) and real-time pest management solutions.",
    techStack: ["React", "Node.js", "PWA", "MongoDB", "i18n"],
    metrics: [
      "Multi-language support for accessibility",
      "Mobile-first design for field usage",
      "Real-time crop advisory updates"
    ],
    imageUrl: "/farmwise.png",
    githubUrl: "https://github.com/sakalesha/FarmWise",
    category: "Full Stack"
  },
  {
    id: "2",
    title: "Library Management System",
    description: "A comprehensive library automation system featuring automated bookkeeping, fine generation, and real-time book tracking. Built with a robust Java backend.",
    techStack: ["Java", "SQL", "JDBC", "Swing/JavaFX"],
    metrics: [
      "Automated fine calculation engine",
      "Real-time inventory tracking",
      "Streamlined book issue/return workflow"
    ],
    imageUrl: "/library.png",
    githubUrl: "https://github.com/sakalesha/LibraryManagementSystem",
    category: "Full Stack"
  },
  {
    id: "3",
    title: "Smart Subscription Tracker",
    description: "A comprehensive full-stack application designed to help users manage recurring subscriptions. It features automated renewal tracking and expense visualization.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    metrics: [
      "Reduced manual tracking time by 70%",
      "Increased mobile engagement by 30% via responsive UI",
      "Secure JWT Authentication implementation"
    ],
    imageUrl: "/subscription.png",
    githubUrl: "https://github.com/sakalesha/smart-subscription-tracker",
    category: "Full Stack"
  },
  {
    id: "4",
    title: "SafetyAlert",
    description: "A real-time community safety reporting platform enabling users to post, track, and visualize local hazards on an interactive map.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Leaflet Maps", "JWT"],
    metrics: [
      "Reduced manual reporting delays by 70%",
      "Improved issue visibility by 40%",
      "Real-time Geotagging & Media Uploads"
    ],
    imageUrl: "/safety.png",
    githubUrl: "https://github.com/sakalesha/safety-alert",
    category: "Full Stack"
  },
  {
    id: "5",
    title: "Movie Recommendation System",
    description: "An intelligent machine learning system that predicts movie success (Hit/Flop) utilizing advanced feature engineering and ensemble classification models.",
    techStack: ["Python", "Scikit-Learn", "XGBoost", "Pandas", "Seaborn"],
    metrics: [
      "Optimized prediction accuracy by 28%",
      "Implemented Tree-based feature selection",
      "End-to-end ML pipeline from preprocessing to evaluation"
    ],
    imageUrl: "/movie-recs.png",
    githubUrl: "https://github.com/sakalesha/movie-recommendation",
    category: "Machine Learning"
  },
  {
    id: "6",
    title: "Weather API",
    description: "A specialized API service providing simplified weather summaries for major Indian cities. Aggregates and processes data from Open-Meteo for lightweight frontend consumption.",
    techStack: ["Node.js", "Express", "REST API", "Open-Meteo"],
    metrics: [
      "Simplified JSON response structure",
      "Low-latency data aggregation",
      "Designed for mobile dashboards"
    ],
    imageUrl: "/weather.png",
    githubUrl: "https://github.com/sakalesha/weather-api",
    category: "Full Stack"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["Python", "Java", "JavaScript", "TypeScript"]
  },
  {
    title: "Full Stack & Web",
    skills: ["React.js", "Node.js", "Express.js", "HTML5", "CSS3", "Tailwind CSS", "JWT Auth", "REST APIs"]
  },
  {
    title: "Data & ML",
    skills: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn", "XGBoost", "Data Visualization"]
  },
  {
    title: "Databases & Tools",
    skills: ["MongoDB", "MySQL", "Git", "GitHub", "VS Code", "Postman", "Jupyter Notebook", "Kaggle"]
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Communication", "Teamwork", "Adaptability"]
  }
];

export const TIMELINE: Experience[] = [
  {
    id: "edu-1",
    role: "B.Tech in Computer Science",
    company: "Dayananda Sagar University",
    date: "Expected Sep 2027",
    description: "CGPA: 8.48. Coursework: DSA, OOP, MERN Stack, DBMS, Probability & Statistics, Machine Learning.",
    type: "Education"
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-1",
    title: "NASA Space Apps Challenge 2024",
    issuer: "NASA",
    date: "2024",
    pdfUrl: "/certificates/nasa.pdf",
    description: "Global Hackathon Participation"
  },
  {
    id: "cert-2",
    title: "CodeFury 7.0",
    issuer: "IEEE",
    date: "2024",
    pdfUrl: "/certificates/codefury.pdf",
    description: "National Level Hackathon Finalist"
  },
  {
    id: "cert-3",
    title: "Innovation by Design",
    issuer: "Mobile World Congress",
    date: "2024",
    pdfUrl: "/certificates/innovation.pdf",
    description: "Workshop on Design Thinking"
  },
  {
    id: "cert-4",
    title: "DSU Code Red",
    issuer: "Dayananda Sagar University",
    date: "2024",
    pdfUrl: "/certificates/code-red.pdf",
    description: "Hackathon Participation"
  },
  {
    id: "cert-5",
    title: "Pandas",
    issuer: "Kaggle",
    date: "2024",
    pdfUrl: "/certificates/pandas.png",
    description: "Data Analysis Certification"
  }
];
