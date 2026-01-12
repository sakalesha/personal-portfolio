export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  metrics: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  category: 'Full Stack' | 'Machine Learning';
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  date: string;
  description?: string;
  type: 'Education' | 'Hackathon' | 'Work';
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  pdfUrl: string;
  description?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
