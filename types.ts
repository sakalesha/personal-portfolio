export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  metrics: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  category: 'Full Stack' | 'Machine Learning' | 'Data Science';
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

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
