import { Project } from '@/core/domain/entities/Project';
import { BlogPost } from '@/core/domain/entities/BlogPost';

export const projectsData: Project[] = [
  // Kcell JSC Projects
  {
    id: '1',
    title: 'Kcell Web App',
    slug: 'kcell-web',
    description: 'Mobile-first web application for Kazakhstan\'s leading telecom operator.',
    longDescription: 'Built with React, Next.js, TypeScript, and GraphQL. Implemented Family Tariff feature (40K+ new users in first month), biometric identity verification, electronic digital signature integration (increased success rate from 69% to 78%), and new online payment system.',
    tags: ['React', 'Next.js', 'TypeScript', 'GraphQL'],
    color: 'from-[var(--color-lilac)] to-[var(--color-peach)]',
    featured: true,
    createdAt: new Date('2022-10-01'),
  },
  {
    id: '2',
    title: 'Activ Web App',
    slug: 'activ-web',
    description: 'Customer-facing platform for Activ mobile brand with e-commerce capabilities.',
    longDescription: 'Mobile-first adaptive application. Launched 5G router sales campaign (3,000 units sold on day one). Improved page performance by 13% through image optimization, bundle analysis, and profiling. Built real-time chatbot with Socket.IO reducing call center load by 15%.',
    tags: ['React', 'Next.js', 'Socket.IO', 'GraphQL'],
    color: 'from-[var(--color-mint)] to-[var(--color-sky)]',
    featured: true,
    createdAt: new Date('2023-01-15'),
  },
  // One Technologies Projects
  {
    id: '3',
    title: 'Forte Bank Website',
    slug: 'forte-bank',
    description: 'Public-facing marketing website for one of Kazakhstan\'s largest banks.',
    longDescription: 'Built with Next.js, Material UI, Strapi CMS, and GraphQL. Collaborated with designers and backend developers to deliver high-quality features aligned with business requirements.',
    tags: ['Next.js', 'Strapi', 'GraphQL', 'Material UI'],
    color: 'from-[var(--color-peach)] to-[var(--color-coral)]',
    featured: true,
    createdAt: new Date('2020-12-01'),
  },
  {
    id: '4',
    title: 'Forte Business',
    slug: 'forte-business',
    description: 'Online banking platform for organizations and legal entities.',
    longDescription: 'Enterprise web application built with React, Redux, and TypeScript. Implemented real-time notifications and campaign stories via WebSocket, increasing usage of personalized offers by 16%.',
    tags: ['React', 'Redux', 'TypeScript', 'WebSocket'],
    color: 'from-[var(--color-sky)] to-[var(--color-mint)]',
    featured: true,
    createdAt: new Date('2021-06-01'),
  },
];

export const blogPostsData: BlogPost[] = [
  {
    id: '1',
    title: 'Optimizing React Performance: Real-world Lessons',
    slug: 'optimizing-react-performance',
    excerpt: 'How I improved page load speed by 13% through bundle analysis, image optimization, and profiling.',
    content: `# Optimizing React Performance: Real-world Lessons

Working on high-traffic telecom applications taught me that performance isn't optional — it's a feature.

## The Problem

Our app was slow. Users on mobile networks complained about load times. Core Web Vitals were poor.

## What Worked

1. **Bundle Analysis** - Used webpack-bundle-analyzer to find bloated dependencies
2. **Image Optimization** - Implemented Next.js Image component with proper sizing
3. **Code Splitting** - Lazy loaded routes and heavy components
4. **Memoization** - Strategic use of useMemo and React.memo

## Results

- 13% faster page load
- 40% smaller initial bundle
- Improved Core Web Vitals scores

Performance optimization is iterative. Measure, optimize, repeat.`,
    tags: ['React', 'Performance', 'Next.js'],
    published: true,
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-03-01'),
  },
  {
    id: '2',
    title: 'Building Real-time Features with WebSocket',
    slug: 'realtime-websocket',
    excerpt: 'How we built a chatbot that reduced call center load by 15% using Socket.IO.',
    content: `# Building Real-time Features with WebSocket

Real-time communication can transform user experience. Here's how we implemented it.

## The Challenge

Our call center was overwhelmed. Users waited too long for simple queries.

## Solution: Socket.IO Chatbot

\`\`\`typescript
const socket = io(SOCKET_URL, {
  transports: ['websocket'],
  reconnection: true,
});

socket.on('message', (data) => {
  addMessage(data);
});
\`\`\`

## Key Learnings

- **Reconnection handling** - Network can be unreliable, handle it gracefully
- **Message queuing** - Buffer messages during disconnection
- **Typing indicators** - Small UX wins matter

## Impact

- 15% reduction in call center load
- Faster response times for common queries
- Better user satisfaction scores`,
    tags: ['WebSocket', 'Socket.IO', 'Real-time'],
    published: true,
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-02-15'),
  },
  {
    id: '3',
    title: 'GraphQL in Production: Lessons Learned',
    slug: 'graphql-production-lessons',
    excerpt: 'Practical insights from using GraphQL in large-scale Next.js applications.',
    content: `# GraphQL in Production: Lessons Learned

After years of using GraphQL in production, here's what I've learned.

## Why GraphQL?

- Fetch exactly what you need
- Strong typing with codegen
- Great developer experience

## Challenges We Faced

1. **N+1 queries** - DataLoader is your friend
2. **Caching complexity** - Apollo Client cache normalization takes time to master
3. **Error handling** - GraphQL errors are different from REST

## Our Stack

- Apollo Client for state management
- GraphQL Code Generator for types
- Strapi as headless CMS

## Tips

- Start with simple queries, add complexity gradually
- Use fragments for reusable fields
- Monitor query performance in production

GraphQL isn't perfect, but for complex UIs it's hard to beat.`,
    tags: ['GraphQL', 'Apollo', 'Next.js'],
    published: true,
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20'),
  },
];

// In-memory stores
let projects = [...projectsData];
let blogPosts = [...blogPostsData];

export const db = {
  projects: {
    getAll: () => [...projects],
    getBySlug: (slug: string) => projects.find(p => p.slug === slug) || null,
    getFeatured: () => projects.filter(p => p.featured),
    save: (project: Project) => {
      const index = projects.findIndex(p => p.id === project.id);
      if (index >= 0) projects[index] = project;
      else projects.push(project);
    },
    delete: (id: string) => { projects = projects.filter(p => p.id !== id); },
  },
  blogPosts: {
    getAll: (published?: boolean) => {
      let result = [...blogPosts];
      if (published !== undefined) result = result.filter(p => p.published === published);
      return result.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    },
    getBySlug: (slug: string) => blogPosts.find(p => p.slug === slug) || null,
    save: (post: BlogPost) => {
      const index = blogPosts.findIndex(p => p.id === post.id);
      if (index >= 0) blogPosts[index] = post;
      else blogPosts.push(post);
    },
    delete: (id: string) => { blogPosts = blogPosts.filter(p => p.id !== id); },
  },
};
