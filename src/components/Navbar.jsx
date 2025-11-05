import { useState, useEffect } from 'react';
import { Rocket, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-white/60 dark:bg-neutral-900/60 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 text-white">
            <Rocket size={18} />
          </span>
          <span>My Dev Portfolio</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#projects" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Projects</a>
          <a href="#skills" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Skills</a>
          <a href="#contact" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
            <Linkedin size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}
