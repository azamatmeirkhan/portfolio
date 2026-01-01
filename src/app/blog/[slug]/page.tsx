import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPostRepository } from '@/infrastructure/container';
import { getReadingTime } from '@/core/domain/entities/BlogPost';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const repo = getBlogPostRepository();
  const post = await repo.findBySlug(slug);

  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const repo = getBlogPostRepository();
  const post = await repo.findBySlug(slug);

  if (!post) notFound();

  // Simple markdown to HTML
  const contentHtml = post.content
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-8 mb-4">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-10 mb-4">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-12 mb-6">$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^- (.*$)/gm, '<li class="ml-4 mb-2">• $1</li>')
    .replace(/^\d+\. (.*$)/gm, '<li class="ml-4 mb-2 list-decimal">$1</li>')
    .replace(/\n\n/g, '</p><p class="mb-4 leading-relaxed">')
    .replace(/\n/g, '<br />');

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <article className="max-w-3xl mx-auto">
        <header className="mb-12 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-[var(--accent)]/20 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-4 text-[var(--text-muted)]">
            <span>{getReadingTime(post)} min read</span>
            <span>•</span>
            <span>{post.createdAt.toLocaleDateString()}</span>
          </div>
        </header>

        <div
          className="prose-lg text-[var(--text)] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: `<p class="mb-4 leading-relaxed">${contentHtml}</p>` }}
        />

        <footer className="mt-16 pt-8 border-t border-[var(--text)]/10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:gap-4 transition-all"
          >
            <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            Back to all posts
          </Link>
        </footer>
      </article>
    </main>
  );
}
