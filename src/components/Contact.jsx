import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const messageEl = document.getElementById('message');
    const name = nameEl && nameEl.value ? nameEl.value : '';
    const email = emailEl && emailEl.value ? emailEl.value : '';
    const message = messageEl && messageEl.value ? messageEl.value : '';
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'Someone'}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 bg-gradient-to-br from-indigo-500/10 via-sky-400/10 to-emerald-400/10">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Let’s build something great</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                Send a message about your project, timeline, and goals. I’ll reply within 24 hours.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href="mailto:you@example.com"
                  className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
                >
                  <Mail size={16} /> Email me
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 px-4 py-2 text-sm text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                  <Github size={16} /> GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 px-4 py-2 text-sm text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
            <div className="p-8 bg-white dark:bg-neutral-950/60">
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm text-neutral-600 dark:text-neutral-300">Name</label>
                  <input id="name" type="text" placeholder="Your name" className="w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/40" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm text-neutral-600 dark:text-neutral-300">Email</label>
                  <input id="email" type="email" placeholder="you@example.com" className="w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/40" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm text-neutral-600 dark:text-neutral-300">Message</label>
                  <textarea id="message" rows={4} placeholder="Tell me about your project" className="w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/40" />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex justify-center rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </section>
  );
}
