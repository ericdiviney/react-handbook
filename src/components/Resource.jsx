export function Resource({ children, url }) {
  // lol, i know this is a shortcut, but it's a good one for now
  const openNewTab =
    url.includes('reacthandbook.dev') || url.includes('localhost')
  return (
    <>
      <a
        className="font-medium text-[color:var(--tw-prose-links)] hover:underline"
        target={`${openNewTab && '_blank'}`}
        rel={`${openNewTab && 'noreferrer'}`}
        href={url}
      >
        {children}
      </a>
    </>
  )
}
