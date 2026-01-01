import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-8xl mb-6 float">🔍</div>
        <h1 className="text-5xl font-bold mb-4">
          <span className="gradient-text">404</span>
        </h1>
        <p className="text-xl text-[var(--text-muted)] mb-8">
          Oops! This page doesn't exist.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-[var(--accent)] text-[var(--bg)] rounded-full font-semibold hover:scale-105 transition-all"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}
