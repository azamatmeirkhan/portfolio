import Link from 'next/link';
import { getBlogPostRepository } from '@/infrastructure/container';
import { getReadingTime } from '@/core/domain/entities/BlogPost';

export const metadata = {
  title: 'Blog | Creative Developer',
  description: 'Thoughts on design, development, and creativity.',
};

export default async function BlogPage() {
  const repo = getBlogPostRepository();
  const posts = await repo.findAll({ published: true });

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 text-center">
          <span className="inline-block px-4 py-2 bg-[var(--accent)]/20 rounded-full text-sm font-medium mb-6 -rotate-2">
            Blog
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Thoughts & <span className="gradient-text">Ideas</span>
          </h1>
          <p className="text-xl text-[var(--text-muted)]">
            Writing about code, design, and everything in between.
          </p>
        </header>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="p-8 rounded-3xl bg-[var(--text)]/5 hover:bg-[var(--accent)]/10 transition-all card-hover">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[var(--accent)]/20 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mb-3 group-hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </h2>

                <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
                  <span>{getReadingTime(post)} min read</span>
                  <span>•</span>
                  <span>{post.createdAt.toLocaleDateString()}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20 text-[var(--text-muted)]">
            <p className="text-6xl mb-4">📝</p>
            <p>No posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </main>
  );
}
