import { Card } from '@/components/Card'

const topics = [
  {
    name: 'React Frameworks & Build Tools',
    description:
      'What to consider when starting a new React project (or potential migration). Dive into the world of React meta-frameworks and the tools that power them.',
    href: '/frameworks',
  },
  {
    name: 'Project Documentation',
    description:
      'These tools and techniques will keep your code on the right path and produce excellent documentation.',
    href: '/documentation',
  },
  {
    name: 'Folder & Component Structure',
    description:
      'In React you can do just about anything you want. But, what *should* you do?',
    href: '/project-structure',
  },
  {
    name: 'React Ecosystem',
    description:
      'Popular libraries for common problems (handling dates/date-times, animations, data visualization, etc.)',
    href: '/ecosystem',
  },
  {
    name: 'Accessibility & Semantics',
    description:
      'Use the proper markup in every situation. Ensure that everyone can access your application.',
    href: '/semantics',
  },
  {
    name: 'Styling / UI Libraries',
    description:
      'Promising approaches for writing/maintaining CSS in your application.',
    href: '/styling',
  },
  {
    name: 'Hooks',
    description:
      'Get ahead of the learning curve on using the React API (like useState and useEffect).',
    href: '/hooks',
  },
  {
    name: 'Data & State Management (coming soon)',
    description:
      'Choose the right data-fetching & state-management library for your use case.',
    href: '#',
  },
  {
    name: 'React Performance (coming soon)',
    description:
      'Ship fast and performant UIs, nailing that UX for your users.',
    href: '#',
  },
]

export function Topics() {
  return (
    <div className="my-16 xl:max-w-none">
      <div className="not-prose grid grid-cols-1 gap-8 xl:grid-cols-3">
        {topics.map((resource) => (
          <Card key={resource.href} resource={resource} />
        ))}
      </div>
    </div>
  )
}
