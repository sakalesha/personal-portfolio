import { Project, SkillCategory, Experience, SocialLink } from './types';

export const PERSONAL_DETAILS = {
  name: "Ronada Sakalesha",
  title: "Full Stack Developer & Data Science Enthusiast",
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
    imageUrl: "https://images.unsplash.com/photo-1625246333195-58196b3c9117?auto=format&fit=crop&q=80&w=800",
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
    imageUrl: "https://images.unsplash.com/photo-1507842217121-ad959ce7ef9e?auto=format&fit=crop&q=80&w=800",
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
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
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
    imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
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
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
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
    imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
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
  },
  {
    id: "hack-1",
    role: "DSU CODE RED Hackathon",
    company: "Participant",
    date: "2024",
    description: "Designed a prototype web app for reporting environmental issues in a 24-hour sprint. Focused on usability and civic innovation.",
    type: "Hackathon"
  }
];
