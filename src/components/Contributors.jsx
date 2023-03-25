import * as HoverCard from '@radix-ui/react-hover-card'

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
]

const maintainers = [
  {
    name: 'Theophilus Ekunnusi',
    description: 'Student Frontend Engineer | Alx',
    socials: {
      twitter: 'https://twitter.com/theo_flux',
      github: 'https://github.com/Theo-flux',
      site: 'https://github.com/Theo-flux',
    },
    image: 'https://avatars.githubusercontent.com/u/72856939?s=120&v=4',
  },
]

export function Contributors() {
  return (
    <div className="my-6 border-y border-zinc-400 dark:border-zinc-700">
      <div className="my-16">
        <div>
          <span className="mb-6 block text-xs font-semibold uppercase tracking-wide text-zinc-900 dark:text-white">
            Core Team
          </span>
        </div>
        <div className="not-prose isolate flex -space-x-2 overflow-hidden">
          {core.map((person) => (
            <MemberCard key={person.image} person={person} large />
          ))}
        </div>
      </div>

      <div className="my-16">
        <div>
          <span className="mb-6 block text-xs font-semibold uppercase tracking-wide text-zinc-900 dark:text-white">
            Project Maintainers
          </span>
        </div>
        <div className="not-prose isolate flex -space-x-2 overflow-hidden">
          {maintainers.map((person) => (
            <MemberCard key={person.image} person={person} />
          ))}
        </div>
      </div>
    </div>
  )
}

function MemberCard({ person, large = false }) {
  const { description, image, name, socials } = person

  const size = large ? `w-16 h-16` : `w-8 h-8`

  return (
    <HoverCard.Root key={image}>
      <HoverCard.Trigger asChild>
        <a
          className="inline-block cursor-pointer rounded-full outline-none"
          href={socials.site}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            key={image}
            className={`${size} relative z-10 inline-block rounded-full ring-2 ring-white dark:ring-zinc-900`}
            src={image}
            alt=""
          />
        </a>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
          sideOffset={5}
        >
          <div className="flex flex-col gap-[7px]">
            <img className="block h-[60px] w-[60px] rounded-full" src={image} />
            <div className="flex flex-col gap-[15px]">
              <div>
                <div className="m-0 font-medium leading-[1.5]">{name}</div>
              </div>
              <div className="m-0 text-sm leading-[1.5]">{description}</div>
              <div className="prose flex gap-[15px]">
                {socials.twitter && (
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href={socials.twitter}
                    className="m-0 text-sm leading-[1.5]"
                  >
                    Twitter
                  </a>
                )}
                {socials.github && (
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href={socials.github}
                    className="m-0 text-sm leading-[1.5]"
                  >
                    GitHub
                  </a>
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
