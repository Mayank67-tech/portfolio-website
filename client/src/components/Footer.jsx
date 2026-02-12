const social = [
  { label: 'GitHub', href: 'https://github.com/Mayank67-tech' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mayank-agarwal-631179281/' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/Mayank5643/' },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 mt-auto transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} Mayank Kumar Agarwal · Dhanbad, Jharkhand
          </p>
          <div className="flex gap-6">
            {social.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
