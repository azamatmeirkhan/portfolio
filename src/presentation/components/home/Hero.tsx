'use client';

import { useEffect, useState } from 'react';

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full bg-[var(--color-lilac)]/30 blur-3xl blob"
          style={{
            left: '10%',
            top: '20%',
            transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full bg-[var(--color-mint)]/30 blur-3xl blob blob-delay-2"
          style={{
            right: '15%',
            top: '30%',
            transform: `translate(${mousePos.x * -0.015}px, ${mousePos.y * 0.015}px)`
          }}
        />
        <div
          className="absolute w-72 h-72 rounded-full bg-[var(--color-peach)]/30 blur-3xl blob blob-delay-4"
          style={{
            left: '30%',
            bottom: '20%',
            transform: `translate(${mousePos.x * 0.01}px, ${mousePos.y * -0.02}px)`
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        <div className="mb-6 inline-block">
          <span className="text-6xl float">👋</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Hi, I'm{' '}
          <span className="gradient-text">Azamat</span>
          <br />
          Frontend Engineer
        </h1>

        <p className="text-xl md:text-2xl text-[var(--text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed">
          I build <span className="squiggle">scalable, performant</span> web applications
          with React, Next.js, and TypeScript.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-[var(--accent)] text-[var(--bg)] rounded-full font-semibold hover:scale-105 transition-all hover:shadow-lg hover:shadow-[var(--accent)]/30"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-current rounded-full font-semibold hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all"
          >
            Get in touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 float">
          <svg className="w-6 h-10 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 40">
            <rect x="1" y="1" width="22" height="38" rx="11" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="12" r="4" fill="currentColor" className="animate-bounce"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
