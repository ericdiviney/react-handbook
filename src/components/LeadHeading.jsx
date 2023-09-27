import clsx from 'clsx'

export function LeadHeading({ children, className: cn = '' }) {
  return (
    <span
      className={clsx(
        'mb-4 block text-lg text-gray-900 dark:text-slate-300',
        cn
      )}
    >
      {children}
    </span>
  )
}
