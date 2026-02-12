import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { profile, skillsGroups, experience } from '../data/portfolio';
import Badge from '../components/ui/Badge';

const heroBullets = [
  '250+ DSA problems solved',
  'Built payment-integrated production apps',
  'Strong in OS, DBMS, and System Design fundamentals',
];

const heroTechPills = ['Node.js', 'Express', 'MongoDB', 'React', 'JWT', 'Redis', 'Docker'];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export default function Home() {
  return (
    <>
      {/* Hero — FAANG-style minimal, high-impact */}
      <section
        className="relative overflow-hidden bg-white dark:bg-neutral-950 py-24 sm:py-28 md:py-32"
        aria-label="Introduction"
      >
        <div className="max-w-5xl mx-auto px-6 text-center sm:text-left">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="flex flex-col items-center sm:items-start"
          >
            {/* Top badge */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/80 px-4 py-1.5 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-neutral-600 dark:text-neutral-300">
                Actively seeking SDE Internship 2026 | Backend / Full-Stack
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4"
            >
              {profile.name}
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 font-medium mb-8 max-w-2xl"
            >
              Computer Science undergraduate building scalable APIs and production-ready backend systems.
            </motion.p>

            {/* Bullet highlights */}
            <motion.ul
              variants={stagger}
              className="space-y-2 mb-8 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base list-none pl-0 text-center sm:text-left"
            >
              {heroBullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-2 justify-center sm:justify-start"
                >
                  <span className="text-neutral-400 dark:text-neutral-500 shrink-0">•</span>
                  <span>{bullet}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Tech stack pills */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap justify-center sm:justify-start gap-2 mb-10"
            >
              {heroTechPills.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 dark:focus:ring-offset-neutral-900 transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                View Projects
              </Link>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 px-5 py-2.5 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 dark:focus:ring-offset-neutral-900 transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Download Resume
              </a>
            </motion.div>

            {/* Social icon buttons */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-all transition-transform hover:scale-[1.03]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-all transition-transform hover:scale-[1.03]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={profile.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-all transition-transform hover:scale-[1.03]"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills – 4 categories, curated */}
      <section className="py-20 bg-neutral-50/50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800" aria-labelledby="skills-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="skills-heading" className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-10">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsGroups.map((group) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.35 }}
                className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-6 transition-all duration-200 hover:scale-[1.02] hover:shadow-sm"
              >
                <p className="text-sm font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience – impact-focused */}
      <section className="py-20 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800" aria-labelledby="experience-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="experience-heading" className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-10">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35 }}
                className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 p-6 md:p-7 transition-shadow hover:shadow-sm"
              >
                <div className="mb-4">
                  <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                    {exp.type}
                  </span>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-0.5">
                    {exp.org} {exp.period && `· ${exp.period}`}
                  </p>
                  {exp.techStack && (
                    <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-2">
                      {exp.techStack}
                    </p>
                  )}
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-neutral-600 dark:text-neutral-400 text-sm">
                  {exp.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
