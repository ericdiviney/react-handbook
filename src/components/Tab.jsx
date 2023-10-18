import * as RadixTab from '@radix-ui/react-tabs'

import clsx from 'clsx'
import * as React from 'react'

export function Tabs({ children, defaultValue }) {
  return <RadixTab.Root defaultValue={defaultValue}>{children}</RadixTab.Root>
}

export function TabList({ children, label }) {
  return (
    <RadixTab.List
      className="flex justify-center gap-4 mt-4 mb-16"
      aria-label={label}
    >
      {children}
    </RadixTab.List>
  )
}

export function TabTrigger({ tabValue, title, children }) {
  return (
    <RadixTab.Trigger
      className={clsx(
        'group relative flex max-w-[450px] flex-1 cursor-pointer flex-col items-center justify-center rounded-lg border',
        'border-slate-300 transition duration-150 hover:-translate-y-1 hover:border-zinc-600 hover:shadow dark:border-zinc-800 dark:hover:border-zinc-600',
        'data-[state=active]:-translate-y-1 data-[state=active]:border-sky-400 data-[state=active]:shadow-none data-[state=active]:ring-2 data-[state=active]:ring-sky-400'
      )}
      value={tabValue}
    >
      <div className="flex flex-col px-4 py-6">
        <span className="block text-sm font-medium text-gray-900 dark:text-slate-300">
          {title}
        </span>
        <span className="flex items-center mt-1 text-sm">{children}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute -bottom-8 left-1/2 hidden h-6 w-6 -translate-x-[50%] text-sky-400 group-data-[state=active]:block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </RadixTab.Trigger>
  )
}

export function Tab({ children, value }) {
  return (
    <RadixTab.Content className={clsx(
      'p-5 grow group',
      'data-[state=active]:animate-fadeIn data-[state=inactive]:animate-fadeOut',
    )} value={value}>
      {children}
    </RadixTab.Content>
  )
}
