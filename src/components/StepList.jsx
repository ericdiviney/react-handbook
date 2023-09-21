import { clsx } from 'clsx'

export function Step({ children, last }) {
  return (
    <li className="relative flex gap-x-4">
      {/* vertical gray bar */}
      <div
        className={clsx(
          'absolute left-0 top-0 -bottom-6 flex w-6 justify-center',
          {
            hidden: last,
          }
        )}
      >
        <div className="w-px bg-gray-200 dark:bg-zinc-500"></div>
      </div>
      {/* bullet marker */}
      <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white dark:bg-zinc-900">
        <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300 dark:bg-zinc-900"></div>
      </div>
      {/* list text */}
      <div className="py-0.5 text-sm leading-5 dark:text-slate-500">
        {children}
      </div>
    </li>
  )
}

export function StepList({ children, nested, className = '' }) {
  return (
    <ul
      role="list"
      className={clsx(
        'space-y-6',
        {
          'mt-5': nested,
        },
        className
      )}
    >
      {children}
    </ul>
  )
}
