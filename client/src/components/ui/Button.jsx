const variants = {
  primary:
    'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 shadow-sm hover:shadow-md transition-all duration-200',
  outline:
    'border border-neutral-300 dark:border-neutral-600 bg-transparent text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200',
  ghost:
    'bg-transparent text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200',
};

export default function Button({
  children,
  variant = 'primary',
  as: Component = 'button',
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900 disabled:opacity-50 disabled:pointer-events-none';
  return (
    <Component
      className={`${base} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
