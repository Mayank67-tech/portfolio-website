export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`
        inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium
        bg-neutral-100 text-neutral-700
        dark:bg-neutral-700 dark:text-neutral-200
        border border-neutral-200 dark:border-neutral-600
        transition-colors
        ${className}
      `}
    >
      {children}
    </span>
  );
}
