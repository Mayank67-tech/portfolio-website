import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import Badge from '../components/ui/Badge';

export default function Projects() {
  return (
    <section className="py-20 md:py-24 bg-neutral-50/50 dark:bg-neutral-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-2">
          Projects
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-12">
          Production-grade applications and backend systems.
        </p>
        <div className="grid gap-8 md:gap-10">
          {projects.map((project, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-sm"
            >
              <div className="md:flex md:min-h-[240px]">
                {/* Left: screenshot / visual */}
                <div className="md:w-80 flex-shrink-0 bg-neutral-100 dark:bg-neutral-800/80 border-b md:border-b-0 md:border-r border-neutral-200 dark:border-neutral-700 min-h-[160px] md:min-h-0" />
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                  <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mb-1">
                    {project.title}
                  </h2>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                  <ul className="space-y-1.5 mb-6">
                    {project.bullets.slice(0, 3).map((bullet, j) => (
                      <li
                        key={j}
                        className="text-sm text-neutral-600 dark:text-neutral-400 flex gap-2"
                      >
                        <span className="text-neutral-400 dark:text-neutral-500 shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-neutral-300 dark:border-neutral-600 bg-transparent text-neutral-700 dark:text-neutral-200 px-4 py-2.5 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors hover:scale-[1.02] active:scale-[0.98]"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
