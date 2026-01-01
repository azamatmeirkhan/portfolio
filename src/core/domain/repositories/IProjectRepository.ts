import { Project } from '../entities/Project';

export interface IProjectRepository {
  findAll: () => Promise<Project[]>;
  findFeatured: () => Promise<Project[]>;
  findBySlug: (slug: string) => Promise<Project | null>;
  save: (project: Project) => Promise<void>;
  delete: (id: string) => Promise<void>;
}
