"use client";

const skills = [
  { name: "React", color: "bg-[var(--color-lilac)]" },
  { name: "Next.js", color: "bg-[var(--color-peach)]" },
  { name: "TypeScript", color: "bg-[var(--color-mint)]" },
  { name: "GraphQL", color: "bg-[var(--color-sky)]" },
  { name: "Redux", color: "bg-[var(--color-coral)]" },
  { name: "WebSocket", color: "bg-[var(--color-lilac)]" },
  { name: "Docker", color: "bg-[var(--color-mint)]" },
  { name: "CI/CD", color: "bg-[var(--color-peach)]" },
];

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <span className="inline-block px-4 py-2 bg-[var(--accent)]/20 rounded-full text-sm font-medium mb-6 -rotate-2">
              About me
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              I like making things
              <br />
              <span className="gradient-text">look good & work well</span>
            </h2>

            <div className="space-y-4 text-lg text-[var(--text-muted)] leading-relaxed">
              <p>
                Senior Frontend Engineer with 5+ years of experience building
                high-load web applications for telecom and fintech industries.
                Currently at Kcell JSC, developing mobile-first platforms for
                millions of users.
              </p>
              <p>
                I specialize in React ecosystem, performance optimization, and
                real-time features. Passionate about clean architecture and
                delivering products that make a difference.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={skill.name}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${skill.color} text-[var(--dark)] hover:scale-105 transition-transform cursor-default`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Visual element */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-[var(--color-lilac)]/20 to-[var(--color-mint)]/20 p-8 relative overflow-hidden">
              {/* Decorative shapes */}
              <div className="absolute top-8 right-8 w-20 h-20 rounded-full bg-[var(--color-peach)] float" />
              <div
                className="absolute bottom-12 left-8 w-16 h-16 rounded-2xl bg-[var(--color-lilac)] rotate-12 float"
                style={{ animationDelay: "-1s" }}
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-dashed border-[var(--color-mint)] animate-spin"
                style={{ animationDuration: "20s" }}
              />

              {/* Code snippet decoration */}
              <div className="absolute bottom-8 right-8 bg-[var(--bg)] rounded-xl p-4 shadow-lg rotate-3 hover:rotate-0 transition-transform">
                <pre className="text-xs font-mono">
                  <code>
                    <span className="text-[var(--color-lilac)]">const</span>{" "}
                    azamat = {"{"}
                    {"\n"} role:{" "}
                    <span className="text-[var(--color-peach)]">
                      'Senior FE'
                    </span>
                    ,{"\n"} stack:{" "}
                    <span className="text-[var(--color-mint)]">
                      ['React', 'TS']
                    </span>
                    {"\n"}
                    {"}"};
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
