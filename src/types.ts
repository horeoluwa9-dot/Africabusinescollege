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

export interface Contributor {
  id: string;
  name: string;
  role: string;
  image: string;
}
