import Link from 'next/link'

function CardIcon({ icon: Icon }) {
  return (
    <div className="mb-4 mt-4 flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-sky-300/10 dark:group-hover:ring-sky-400">
      <Icon className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-sky-300/10 dark:group-hover:stroke-sky-400" />
    </div>
  )
}

export function Card({ resource }) {
  return (
    <div
      key={resource.href}
      className="group relative flex rounded-xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative rounded-xl px-4 pt-8 pb-4">
        {resource.icon && <CardIcon icon={resource.icon} />}
        <h3 className="text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
          <Link href={resource.href}>
            <span className="absolute inset-0 rounded-xl" />
            {resource.name}
          </Link>
        </h3>
        <p className="mt-1 pb-4 text-sm text-zinc-600 dark:text-zinc-400">
          {resource.description}
        </p>
      </div>
    </div>
  )
}
