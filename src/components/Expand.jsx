import { useState } from 'react'
import clsx from 'clsx'

export function Expand({ children, parent }) {
  const [hidden, setHidden] = useState(true)

  function toggleHidden() {
    setHidden(!hidden)
  }

  return (
    <div className="my-2">
      <div>
        <button
          className="flex items-center text-left gap-3 group"
          onClick={toggleHidden}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={clsx('h-5 w-5 transition-all duration-100 dark:stroke-sky-400', {
              'rotate-180': !hidden,
            })}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
          <h3 className="m-0 text-base font-bold">{parent}</h3>
          <span className="m-0 text-xs font-light tracking-tight transition-all -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-focus:translate-x-0 group-focus:opacity-100">{hidden ? 'show' : 'hide'}</span>
        </button>
      </div>
      <div>
        <div
          className={clsx(
            '[&>:first-child]:mt-0 [&>:last-child]:mb-0 px-0 py-2',
            {
              'hidden': hidden,
              'animate-enterFromTop': !hidden,
            }
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
