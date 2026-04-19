export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  author: string;
  image: string;
}

export interface DeepDive {
  id: string;
  title: string;
  partInfo: string;
  excerpt: string;
}

export interface Report {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  downloadSize: string;
}

export interface Program {
  id: string;
  title: string;
  category: string;
  tag: string;
  excerpt: string;
  image?: string;
}

export interface Lab {
  id: string;
  title: string;
  description: string;
  icon?: string;
  type: 'large' | 'small';
}

export interface Session {
  id: string;
  date: { day: string; month: string };
  title: string;
  description: string;
  type: string;
  location: string;
  attendees: string;
}

export interface StudioTool {
  id: string;
  key: string;
  title: string;
  description: string;
}

export interface Course {
  title: string;
  description: string;
  duration: string;
}

export interface ProgramDetail extends Program {
  subtitle: string;
  duration: string;
  format: string;
  level: string;
  focus: string;
  badge?: string;
  overview: {
    content: string;
    bullets: string[];
  };
  gains: string[];
  structure: Course[];
  learningExperience: string[];
  simulationExperience: {
    content: string;
    examples: string[];
  };
  tools: string[];
  whoItIsFor: string[];
  outcomes: string[];
}

export interface Deadline {
  id: string;
  date: string;
  title: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Faculty {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Contributor {
  id: string;
  name: string;
  role: string;
  image: string;
}
