import Spline from '@splinetool/react-spline';
import { Download, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] pt-24 overflow-hidden">
      {/* Background gradient accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_10%,rgba(99,102,241,0.25),transparent),radial-gradient(40%_40%_at_90%_20%,rgba(56,189,248,0.25),transparent)]" />

      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        {/* Content */}
        <div className="relative z-10 py-6">
          <p className="text-xs uppercase tracking-widest text-indigo-500 font-semibold">Frontend Developer</p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-neutral-900 dark:text-white">
            Building smooth, interactive web experiences.
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-xl">
            I craft performant interfaces with modern JavaScript, React, and delightful micro-interactions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
            >
              View Projects
            </a>
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 px-4 py-2 text-sm text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
            >
              <Mail size={16} /> Contact
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-indigo-200 bg-indigo-50 text-indigo-700 px-4 py-2 text-sm hover:bg-indigo-100 dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-300"
            >
              <Download size={16} /> Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for freelance
            </span>
            <span>React • TypeScript • Tailwind • Framer Motion</span>
          </div>
        </div>

        {/* Spline 3D Scene */}
        <div className="relative h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh]">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Top fade so content remains readable while allowing interaction with the 3D scene */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-neutral-950/60" />
        </div>
      </div>
    </section>
  );
}
