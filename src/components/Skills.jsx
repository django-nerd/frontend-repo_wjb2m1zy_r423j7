const skills = [
  'React',
  'TypeScript',
  'Next.js',
  'Vite',
  'Tailwind',
  'Framer Motion',
  'Radix UI',
  'Zustand',
  'Vitest',
  'Cypress',
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">Core Skills</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400 max-w-2xl">
          A toolkit focused on building performant, accessible, and beautiful interfaces.
        </p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {skills.map((s) => (
            <div
              key={s}
              className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/60 px-4 py-3 text-sm font-medium text-neutral-800 dark:text-neutral-200"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
