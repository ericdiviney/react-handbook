import { Card } from '@/components/Card'

const topics = [
  {
    name: 'React Frameworks & Build Tools',
    description:
      'What to consider when starting a new React project (or potential migration). Dive into the world of React meta-frameworks and the tools that power them.',
    href: '/frameworks',
  },
  {
    name: 'Project Standards',
    description:
      'In React you can do just about anything you want. But, what *should* you do with your folders and components?',
    href: '/project-standards',
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
    name: 'Styling & UI Libraries',
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
    name: 'State Management',
    description: 'Manage your SPA application state with confidence.',
    href: '/state-management',
  },
  {
    name: 'React Performance & Optimization',
    description:
      'Ship fast and performant UIs, a great start to positive UX.',
    href: '/react-performance-optimization',
  },
]

export function Topics() {
  return (
    <div className="max-w-5xl my-16">
      <div className="grid grid-cols-1 gap-8 not-prose xl:grid-cols-3">
        {topics.map((resource) => (
          <Card key={resource.href} resource={resource} />
        ))}
      </div>
    </div>
  )
}
