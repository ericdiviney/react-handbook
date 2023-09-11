import clsx from 'clsx';
import { useState } from 'react';

export function Intro({ children, summary }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="inset-x-0 bottom-0 py-3 pointer-events-none">
      <div className="p-4 bg-white shadow-lg pointer-events-auto dark:shadow-inset rounded-xl ring-1 ring-gray-900/10 dark:bg-zinc-900 dark:ring-zinc-800">
        <div className="">
          <div className='flex items-center gap-4 not-prose'>
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
            <button className='flex items-center gap-1 grow' onClick={() => setIsOpen(!isOpen)}>
              <span className='font-mono font-bold tracking-wider uppercase text-zinc-700 dark:text-white'>Read Introduction</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={clsx(
                'w-4 h-4',
                { 'rotate-180' : isOpen }
              )}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>
          <div className={clsx(
              'text-sm leading-6',
              {'hidden': !isOpen},
          )}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

{/* <p className="m-0">
  We are authoring another guide for more advanced approaches to
  state management. The approach in this guide is best applied to
  CRUD-like SPAs (Single-Page Applications) built with React. We are
  looking for writers that can contribute material for:
</p>
<div className="flex gap-12 mt-3">
  <a
    href="https://signia.tldraw.dev/"
    className="font-semibold text-sky-400"
  >
    signia
  </a>
  <a
    href="https://legendapp.com/open-source/state/"
    className="font-semibold text-sky-400"
  >
    legend
  </a>
  <a
    href="https://xstate.js.org/docs/"
    className="font-semibold text-sky-400"
  >
    xState
  </a>
</div> */}