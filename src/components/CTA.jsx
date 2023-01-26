import { Button } from '@/components/Button'

// export interface CTAProps {
// 	href: string;
// 	arrow?: string;
// 	variant?: string;
// 	children: React.ReactNode;
// }

export function CTA() {
	<div className="flex gap-3 mt-6 mb-16 not-prose">
		<Button href="/quickstart">Quickstart</Button>
		<Button href="/sdks" variant="outline" arrow="right">Example with outline + arrow</Button>
	</div>
}