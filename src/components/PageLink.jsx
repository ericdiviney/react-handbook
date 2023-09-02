export function PageLink({ className = '', link, label }) {
  const currntHostName = window.location

  const url = new URL(link)
  const linkHostname = url.hostname

  return (
    <a
      className={className}
      href={link}
      target={currntHostName === linkHostname ? undefined : '_blank'}
      rel={currntHostName === linkHostname ? undefined : 'noreferrer noopener'}
    >
      {label}
    </a>
  )
}
