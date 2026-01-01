import { Project } from '@/core/domain/entities/Project';
import { IProjectRepository } from '@/core/domain/repositories/IProjectRepository';
import { db } from '../database/data';

export const createProjectRepository = (): IProjectRepository => ({
  findAll: async () => db.projects.getAll(),

  findFeatured: async () => db.projects.getFeatured(),

  findBySlug: async (slug: string) => db.projects.getBySlug(slug),

  save: async (project: Project) => {
    db.projects.save(project);
  },

  delete: async (id: string) => {
    db.projects.delete(id);
  },
});
