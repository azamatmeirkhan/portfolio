import { BlogPost } from '../entities/BlogPost';

export interface IBlogPostRepository {
  findAll: (options?: { published?: boolean }) => Promise<BlogPost[]>;
  findBySlug: (slug: string) => Promise<BlogPost | null>;
  save: (post: BlogPost) => Promise<void>;
  delete: (id: string) => Promise<void>;
}
