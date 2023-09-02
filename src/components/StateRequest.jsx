import { PageLink } from './PageLink'

export function StateRequest() {
  return (
    <div className="pointer-events-none inset-x-0 bottom-0 py-3">
      <div className="dark:shadow-inset pointer-events-auto rounded-xl bg-white p-4 shadow-lg ring-1 ring-gray-900/10 dark:bg-zinc-900 dark:ring-zinc-800">
        <div className="flex gap-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
          </div>
          <div>
            <p className="m-0 text-sm leading-6">
              We are authoring another guide for more advanced approaches to
              state management. The approach in this guide is best applied to
              CRUD-like SPAs (Single-Page Applications) built with React. We are
              looking for writers that can contribute material for:
            </p>
            <div className="mt-3 flex gap-12">
              <PageLink
                label="signia"
                link="https://signia.tldraw.dev/"
                className="font-semibold text-sky-400"
              />
              <PageLink
                label="legend"
                link="https://legendapp.com/open-source/state/"
                className="font-semibold text-sky-400"
              />
              <PageLink
                label="xState"
                link="https://xstate.js.org/docs/"
                className="font-semibold text-sky-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
