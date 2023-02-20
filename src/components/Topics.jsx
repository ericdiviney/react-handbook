import { Card } from '@/components/Card'

const topics = [
	{
		name: 'React Frameworks & Build Tools',
		description: 'What to consider when starting a new react project (or potential migration). Dive into the world of react meta-frameworks and the tools that power them.',
		href: '/frameworks',
	},
	{
		name: 'Project Documentation',
		description: 'These tools and techniques will help set your project on the right path and produce great documentation.',
		href: '/documentation',
	},
	{
		name: 'Folder & Component Structure',
		description: 'In React you can do just about anything you want. But, what *should* you do?',
		href: '/project-structure',
	},
	{
		name: 'React Ecosystem',
		description: 'Popular libraries for common problems (handling dates/datetimes, animations, data visualization, etc.)',
		href: '/ecosystem',
	},
	{
		name: 'Accessibility & Semantics',
		description: 'Use the right markup in every situation. Ensure that everyone can access your application.',
		href: '/semantics',
	},
	{
		name: 'Styling / UI Libraries',
		description: 'Good approaches for writing/maintaining CSS in your application. ',
		href: '/styling',
	},
	{
		name: 'Hooks (coming soon)',
		description: 'Jump ahead of the learning curve by reading these expert opinions and explanations of how to use the React API (like useState and useEffect).',
		href: '/understanding-hooks',
	},
	{
		name: 'Data & State Management (coming soon)',
		description: 'Choose the right data-fetching & state-management library for your use-case.',
		href: '#',
	},
	{
		name: 'React Performance (coming soon)',
		description: 'Nail a great UX for your app-users by shipping code that results in a snappy (fast) UI.',
		href: '#',
	},
];




export function Topics() {
  return (
    <div className="my-16 xl:max-w-none">
      <div className="grid grid-cols-1 gap-8 not-prose xl:grid-cols-3">
        {topics.map((resource) => (
          <Card key={resource.href} resource={resource} />
        ))}
      </div>
    </div>
  )
}