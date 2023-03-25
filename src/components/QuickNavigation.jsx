import { AcademicCapIcon } from '@/components/icons/AcademicCapIcon'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { BookIcon } from '@/components/icons/BookIcon'
import { UserIcon } from '@/components/icons/UserIcon'

const resources = [
  {
    href: '/javascript-basics',
    name: 'JavaScript Basics',
    description:
      'Starting points for developers not familiar with Javascript or Typescript.',
    icon: UserIcon,
  },
  {
    href: '/react-basics',
    name: 'React Basics',
    description:
      'For developers familiar with web development technologies (HTML, CSS, JS/TS) but not familiar with React.',
    icon: BookIcon,
  },
  {
    href: '/topics',
    name: 'Advanced React',
    description:
      'For experienced React developers, dive in and see what material we cover on this site.',
    icon: AcademicCapIcon,
  },
]

export function QuickNavigation() {
  return (
    <div className="my-16 xl:max-w-none">
      <div className="not-prose grid grid-cols-1 gap-8 xl:grid-cols-3">
        {resources.map((resource) => (
          <Card key={resource.href} resource={resource} />
        ))}
      </div>
      <div className="mt-4 justify-end text-right">
        <Button href="/topics" variant="text" arrow="right">
          View all topics
        </Button>
      </div>
    </div>
  )
}
