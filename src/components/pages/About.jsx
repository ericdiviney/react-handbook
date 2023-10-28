import * as HoverCard from '@radix-ui/react-hover-card'
import { Resource } from '@/components/Resource'

const core = [
  {
    name: 'Eric Diviney',
    description: 'Software Engineer | IBM Consulting',
    socials: {
      twitter: 'https://twitter.com/EricDiviney',
      github: 'https://github.com/ericdiviney',
      site: 'https://ericdiviney.com/',
    },
    image: '/eric-diviney.jpg',
  },
  {
    name: 'Mileta Dulovic',
    description: 'CTO | Optinian',
    socials: {
      twitter: 'https://twitter.com/DulovicMileta',
      github: 'https://www.linkedin.com/in/mileta-dulovic/overlay/photo/',
      site: 'https://miletadulovic.me/',
    },
    image: '/mileta-dulovic.jpg',
  }
]

export function Contributors() {
  return (
    <div className="my-6">
      <div className="my-16">
        <div>
          <span className="block mb-6 text-xs font-semibold tracking-wide uppercase text-zinc-900 dark:text-white">
            Core Team
          </span>
        </div>
        <div className="flex -space-x-2 overflow-hidden not-prose isolate">
          {core.map((person) => (
            <MemberCard key={person.image} person={person} large />
          ))}
        </div>
        <div className='mt-6'>
          <span className="block mb-6 text-xs font-semibold tracking-wide uppercase text-zinc-900 dark:text-white">
            Special thanks to:
          </span>

          <ul className="space-y-2 list-disc">
            <li>
              <Resource url='https://twitter.com/josh_claunch'>Josh Claunch</Resource> - someone we repeatedly go to for feedback/advice on things I&apos;m writing, and for having very advanced knowledge of state management in React applications
            </li>
            <li>
              <Resource url='https://www.linkedin.com/in/conklin-anthony/'>Anthony Conklin</Resource> - someone else we can always rely on for fresh feedback on any web project I start
            </li>
            <li>
              <Resource url='https://github.com/Theo-flux'>Theo-Flux</Resource> for being the first person to contribute to the project besides myself, giving us hope that we&apos;re working on something worthwhile
            </li>
            <li>
              <Resource url='https://www.linkedin.com/in/anogueras/'>Tono Nogueras  </Resource> for significant contributions to the React Native guide
            </li>
          </ul>
        </div>
      </div>

      <p className="lead">
        Join 10+ other{' '}
        <Resource url="https://github.com/ericdiviney/react-handbook">
          contributors
        </Resource>
        , and help us maintain the website as an example of what a solid Next.js
        application codebase can look like.
      </p>
    </div>
  )
}

function MemberCard({ person, large = false }) {
  const { description, image, name, socials } = person

  const size = large ? `w-16 h-16` : `w-8 h-8`

  return (
    <HoverCard.Root key={image}>
      <HoverCard.Trigger asChild>
        <div>
          <Resource
            className="inline-block rounded-full outline-none cursor-pointer"
            url={socials.site}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={image}
              className={`${size} relative z-10 inline-block rounded-full ring-2 ring-white dark:ring-zinc-900`}
              src={image}
              alt=""
            />
          </Resource>
        </div>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade z-40 w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
          sideOffset={5}
        >
          <div className="flex flex-col gap-[7px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="block h-[60px] w-[60px] rounded-full"
              src={image}
              alt=""
            />
            <div className="flex flex-col gap-[15px]">
              <div>
                <div className="m-0 font-medium leading-[1.5]">{name}</div>
              </div>
              <div className="m-0 text-sm leading-[1.5]">{description}</div>
              <div className="prose flex gap-[15px]">
                {socials.twitter && (
                  <>
                    <Resource
                      url={socials.twitter}
                      className="m-0 text-sm leading-[1.5]"
                    >
                      Twitter
                    </Resource>
                  </>
                )}
                {socials.github && (
                  <>
                    <Resource
                      url={socials.github}
                      className="m-0 text-sm leading-[1.5]"
                    >
                      GitHub
                    </Resource>
                  </>
                )}
              </div>
            </div>
          </div>
          <HoverCard.Arrow className="fill-white" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  )
}
