import { profile, skills, education, achievements, positions } from '../data/portfolio';

export default function About() {
  return (
    <section className="py-20 md:py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">About</h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">Background, skills, and experience.</p>

        <div className="mt-12 space-y-12">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Summary</h2>
            <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed text-[0.9375rem]">
              Backend-focused Computer Science undergraduate with strong foundations in DSA, OS, and
              DBMS. Experienced in designing REST APIs, authentication systems, and scalable backend
              services using Node.js and MongoDB. Built production-grade applications with payment
              gateway integrations, secure session handling, and cloud media storage. Solved 250+ DSA
              problems across coding platforms.
            </p>
          </div>

          <div className="pt-10">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Education</h2>
            <ul className="mt-4 space-y-4">
              {education.map((item, i) => (
                <li key={i} className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-4">
                  <p className="font-medium text-neutral-900 dark:text-white">{item.degree}</p>
                  <p className="text-neutral-600 dark:text-neutral-400">{item.institution}</p>
                  {(item.period || item.cgpa || item.detail) && (
                    <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-0.5">
                      {item.period} {item.cgpa || item.detail}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-10">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Skills</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {Object.entries(skills).map(([key, values]) => (
                <div key={key} className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 py-3 px-4">
                  <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300 capitalize">{key}</p>
                  <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">{values.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-10">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Achievements</h2>
            <ul className="mt-4 space-y-1.5 pl-5 text-neutral-600 dark:text-neutral-400 text-sm list-disc">
              {achievements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="pt-10">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Positions of Responsibility</h2>
            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-neutral-600 dark:text-neutral-400 text-sm">
              {positions.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="pt-10">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Contact</h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-sm">
              {profile.location} · {profile.phone} ·{' '}
              <a
                href={`mailto:${profile.email}`}
                className="text-neutral-900 dark:text-white font-medium underline underline-offset-2 decoration-neutral-300 dark:decoration-neutral-600 hover:decoration-neutral-500 transition-colors"
              >
                {profile.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
