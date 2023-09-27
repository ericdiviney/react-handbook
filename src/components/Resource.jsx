import clsx from "clsx"

// use like <Resource url=''></Resource>

export function Resource({ children, url, className: cn }) {
  // lol, i know this is a shortcut, but it's all I need for now
  const linkingOnSite = url.includes('reacthandbook.dev') || url.includes('localhost');
  const beginsWithSlash = url[0] === '/'; // relative urls start with slashes, so this is an easy tell if I'm linking on or off-site
  const beginsWithHash = url[0] === '#'; // anchors on the same page start with #
  const openNewTab = !linkingOnSite && !beginsWithSlash && !beginsWithHash;

  return (
    <>
      <a
        className={clsx("font-medium text-[color:var(--tw-prose-links)] hover:underline", cn)}
        target={`${openNewTab === true ? '_blank' : '_self'}`}
        rel={`${openNewTab === true ? 'noreferrer' : ''}`}
        href={url}
      >
        {children}
      </a>
    </>
  )
}