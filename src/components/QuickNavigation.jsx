import { AcademicCapIcon } from '@/components/icons/AcademicCapIcon'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { BookIcon } from '@/components/icons/BookIcon'
import { UserIcon } from '@/components/icons/UserIcon'

const resources = [
  {
    href: '/javascript-basics',
    name: 'JS / TS Fundamentals',
    description:
      'Starting points for developers not familiar with Javascript or Typescript.',
    icon: UserIcon,
  },
  {
    href: '/react-basics',
    name: 'React Fundamentals',
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
    <div className="max-w-5xl my-16">
      <div className="grid grid-cols-1 gap-8 not-prose xl:grid-cols-3">
        {resources.map((resource) => (
          <Card key={resource.href} resource={resource} />
        ))}
      </div>
      <div className="justify-end mt-4 text-right">
        <Button href="/topics" variant="text" arrow="right">
          View all topics
        </Button>
      </div>
    </div>
  )
}
