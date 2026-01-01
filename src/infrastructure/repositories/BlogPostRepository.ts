import { BlogPost } from '@/core/domain/entities/BlogPost';
import { IBlogPostRepository } from '@/core/domain/repositories/IBlogPostRepository';
import { db } from '../database/data';

export const createBlogPostRepository = (): IBlogPostRepository => ({
  findAll: async (options?: { published?: boolean }) =>
    db.blogPosts.getAll(options?.published),

  findBySlug: async (slug: string) => db.blogPosts.getBySlug(slug),

  save: async (post: BlogPost) => {
    db.blogPosts.save(post);
  },

  delete: async (id: string) => {
    db.blogPosts.delete(id);
  },
});
