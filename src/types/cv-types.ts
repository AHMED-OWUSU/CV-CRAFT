
export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website: string;
  profileImage: string | null;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
}

export interface Skill {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  github?: string;
}

export interface Language {
  id: string;
  name: string;
  proficiency: 'Basic' | 'Conversational' | 'Fluent' | 'Native';
}

export interface Reference {
  id: string;
  name: string;
  position: string;
  company: string;
  email: string;
  phone: string;
}

export interface OtherWork {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category?: string;
}

export type CVTemplate = 'modern' | 'classic' | 'creative' | 'executive';

export interface CVData {
  personalInfo: PersonalInfo;
  summary: string;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  certifications: Certification[];
  projects: Project[];
  languages: Language[];
  references: Reference[];
  otherWorks: OtherWork[];
  achievements: Achievement[];
  template: CVTemplate;
}
