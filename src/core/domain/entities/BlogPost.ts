export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const createBlogPost = (
  props: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>
): BlogPost => {
  const now = new Date();
  return {
    ...props,
    id: crypto.randomUUID(),
    createdAt: now,
    updatedAt: now,
  };
};

export const reconstructBlogPost = (props: BlogPost): BlogPost => ({ ...props });

export const getReadingTime = (post: BlogPost): number => {
  const words = post.content.split(/\s+/).length;
  return Math.ceil(words / 200);
};

export const publishPost = (post: BlogPost): BlogPost => ({
  ...post,
  published: true,
  updatedAt: new Date(),
});

export const blogPostToJSON = (post: BlogPost) => ({
  ...post,
  readingTime: getReadingTime(post),
});
