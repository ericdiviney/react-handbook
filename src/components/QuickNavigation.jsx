import { AcademicCapIcon } from '@/components/icons/AcademicCapIcon'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { ChatBubbleIcon } from '@/components/icons/ChatBubbleIcon'
import { UserIcon } from '@/components/icons/UserIcon'


const resources = [
  {
    href: '/beginner',
    name: 'Beginner',
    description:
      'Starting points for developers not familiar with Javascript or Typescript.',
    icon: UserIcon,
  },
  {
    href: '/intermediate',
    name: 'Intermediate',
    description:
      'For developers familiar with web development technologies (HTML, CSS, JS/TS) but not familiar with React.',
    icon: ChatBubbleIcon,
  },
  {
    href: '/advanced',
    name: 'Advanced',
    description:
      'For React developers, a place to dive in and seewhat material we cover on this site.',
    icon: AcademicCapIcon,
  },
]

export function QuickNavigation() {
  return (
    <div className="my-16 xl:max-w-none">
      <div className="flex items-center justify-start">
        <h3 className="mb-4">Quick Start</h3>
      </div>
      <div className="grid grid-cols-1 gap-8 not-prose xl:grid-cols-3">
        {resources.map((resource) => (
          <Card key={resource.href} resource={resource} />
        ))}
      </div>
      <div className="mt-5 not-prose">
        <Button
          href="/sdks"
          variant="text"
          arrow="right"
        >
          View all topics
        </Button>
      </div>
    </div>
  )
}
