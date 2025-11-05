import { ExternalLink, Code, Star } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Dashboard',
    description: 'Real-time analytics dashboard built with React, Zustand, and Tailwind.',
    tags: ['React', 'Zustand', 'Tailwind', 'Charts'],
    link: '#',
    stars: 142,
  },
  {
    title: 'UI Animation Lab',
    description: 'A collection of nuanced micro-interactions using Framer Motion.',
    tags: ['Framer Motion', 'TypeScript', 'React'],
    link: '#',
    stars: 98,
  },
  {
    title: 'Design System Kit',
    description: 'Composable component kit following accessible patterns and tokens.',
    tags: ['Design Tokens', 'Tailwind', 'Radix'],
    link: '#',
    stars: 201,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">Featured Projects</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">A few things I’ve been building recently.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
            <Code size={16} /> Explore Code
          </a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/60 overflow-hidden">
              <div className="h-36 bg-gradient-to-tr from-indigo-500/20 via-sky-400/20 to-emerald-400/20" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
                  <div className="inline-flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400">
                    <Star size={14} /> {p.stars}
                  </div>
                </div>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="inline-flex items-center rounded-md bg-neutral-100 dark:bg-neutral-900 px-2 py-1 text-xs text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a href={p.link} className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
                    Live <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
