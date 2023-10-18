export function SimpleTable({ children }) {
  return (
    <div className="flex flex-col justify-evenly md:flex-row">
      <div className="basis-3/4">{children}</div>
    </div>
  )
}

export function SimpleRow({ children, header = false }) {
  if (header) {
    return (
      <div className="flex border border-slate-300 dark:border-zinc-800">
        {children}
      </div>
    )
  }
  return (
    <div className="flex border-b border-slate-300 py-4 dark:border-zinc-800">
      {children}
    </div>
  )
}

export function SimpleCell({ children, header = false }) {
  if (header) {
    return (
      <div className="basis-full">
        <div className="border-r border-slate-300 p-2 text-center text-sm font-medium text-gray-900 dark:border-zinc-800 dark:text-slate-300">
          {children}
        </div>
      </div>
    )
  }
  return (
    <div className="basis-full">
      <div className="p-2 text-center text-sm dark:text-slate-500">
        {children}
      </div>
    </div>
  )
}
