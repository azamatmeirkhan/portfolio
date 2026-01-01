export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  tags: string[];
  color: string;
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  createdAt: Date;
}

export const createProject = (
  props: Omit<Project, 'id' | 'createdAt'>
): Project => ({
  ...props,
  id: crypto.randomUUID(),
  createdAt: new Date(),
});

export const reconstructProject = (props: Project): Project => ({ ...props });

export const projectToJSON = (project: Project) => ({ ...project });
