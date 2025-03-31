
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  additionalImages: string[];
  technologies: string[];
  repoUrl?: string;
  category: string;
}
