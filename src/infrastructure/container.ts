import { IProjectRepository } from '@/core/domain/repositories/IProjectRepository';
import { IBlogPostRepository } from '@/core/domain/repositories/IBlogPostRepository';
import { createProjectRepository } from './repositories/ProjectRepository';
import { createBlogPostRepository } from './repositories/BlogPostRepository';

interface Container {
  projectRepository: IProjectRepository;
  blogPostRepository: IBlogPostRepository;
}

const createContainer = (): Container => {
  let projectRepo: IProjectRepository | null = null;
  let blogPostRepo: IBlogPostRepository | null = null;

  return {
    get projectRepository() {
      if (!projectRepo) projectRepo = createProjectRepository();
      return projectRepo;
    },
    get blogPostRepository() {
      if (!blogPostRepo) blogPostRepo = createBlogPostRepository();
      return blogPostRepo;
    },
  };
};

export const container = createContainer();

// Helper functions for easier access
export const getProjectRepository = () => container.projectRepository;
export const getBlogPostRepository = () => container.blogPostRepository;
