'use client';

const projects = [
  {
    title: 'Kcell Web App',
    description: 'Mobile-first web application for Kazakhstan\'s leading telecom operator. Family Tariff (40K+ users), biometric verification, EDS integration.',
    tags: ['React', 'Next.js', 'TypeScript', 'GraphQL'],
    color: 'from-[var(--color-lilac)] to-[var(--color-peach)]',
  },
  {
    title: 'Activ Web App',
    description: 'Customer platform with e-commerce. 5G router campaign (3K units day one), 13% performance boost, real-time chatbot.',
    tags: ['React', 'Next.js', 'Socket.IO', 'GraphQL'],
    color: 'from-[var(--color-mint)] to-[var(--color-sky)]',
  },
  {
    title: 'Forte Bank Website',
    description: 'Marketing website for one of Kazakhstan\'s largest banks. Built with headless CMS and GraphQL.',
    tags: ['Next.js', 'Strapi', 'GraphQL', 'Material UI'],
    color: 'from-[var(--color-peach)] to-[var(--color-coral)]',
  },
  {
    title: 'Forte Business',
    description: 'Online banking for organizations. Real-time notifications via WebSocket increased personalized offers usage by 16%.',
    tags: ['React', 'Redux', 'TypeScript', 'WebSocket'],
    color: 'from-[var(--color-sky)] to-[var(--color-mint)]',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-[var(--text)]/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[var(--accent)]/20 rounded-full text-sm font-medium mb-6 rotate-2">
            Selected work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Things I've <span className="gradient-text">built</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-hover bg-[var(--bg)] rounded-3xl overflow-hidden border border-[var(--text)]/10">
                {/* Project preview */}
                <div className={`h-48 bg-gradient-to-br ${project.color} p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[var(--bg)]/0 group-hover:bg-[var(--bg)]/10 transition-colors" />
                </div>

                {/* Project info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-muted)] mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[var(--text)]/5 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
