import * as Tabs from '@radix-ui/react-tabs'
import clsx from 'clsx'

// todo:
// new Hyperlink component that automatically opens new tabs. Create issue to use this in other pages once it's done.
// refactor this into a more generic "Tab" -> "Accordion" mobile section to be used elsewhere if desired
// refactor/cleanup

export function StateTldr() {
  return (
    <>
      <Tabs.Root
        className="not-prose mx-auto mt-6 max-w-screen-xl overflow-x-auto overflow-y-hidden px-2"
        defaultValue="one"
      >
        <Tabs.List
          className="mt-4 mb-16 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4"
          aria-label="Quick Guide to State Management in React Apps"
        >
          <TabTrigger tabName="one" title="Build As You Go">
            Best for greenfield projects, POCs, and apps with unknown
            scope/complexity on the frontend when starting.
          </TabTrigger>
          <TabTrigger tabName="two" title="You Need Everything">
            Redux Toolkit (RTK) is the modern way to reduce boilerplate and
            manage large/complex state.
          </TabTrigger>
          <TabTrigger tabName="three" title="Other Combinations">
            State management libraries that play well together. Data-fetching,
            stores, and state machines.
          </TabTrigger>
        </Tabs.List>
        <Tabs.Content className="grow p-4" value="one">
          <div className="flex flex-col justify-evenly md:flex-row">
            <div className="basis-full md:basis-5/12 lg:basis-1/3">
              <span className="mb-6 block text-lg text-gray-900 dark:text-slate-300">
                1. Start by lifting state where possible
              </span>
              <ul role="list" className="space-y-6">
                <FancyListItem>
                  <div className="flex-auto py-0.5 text-sm leading-5 dark:text-gray-500">
                    <a
                      className="text-sky-400 hover:underline"
                      href="https://react.dev/learn/choosing-the-state-structure"
                    >
                      Choose a State Structure
                    </a>{' '}
                    for the data you&apos;ll manage.
                  </div>
                </FancyListItem>
                <FancyListItem>
                  <div className="flex-auto py-0.5 text-sm leading-5 dark:text-gray-500">
                    Lift state{' '}
                    <a
                      className="text-sky-400 hover:underline"
                      href="https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example"
                    >
                      to a parent
                    </a>
                    .
                  </div>
                </FancyListItem>
                <FancyListItem>
                  <div className="flex-auto py-0.5 text-sm leading-5 dark:text-gray-500">
                    Lift state to{' '}
                    <a
                      className="text-sky-400 hover:underline"
                      href="https://alexsidorenko.com/blog/react-prop-drilling-composition/"
                    >
                      avoid prop-drilling
                    </a>
                    .
                  </div>
                </FancyListItem>
                <FancyListItem>
                  <div className="flex-auto py-0.5 text-sm leading-5 dark:text-gray-500">
                    Lift state to{' '}
                    <a
                      className="text-sky-400 hover:underline"
                      href="https://alexsidorenko.com/blog/react-siblings/"
                    >
                      communicate with sibling components
                    </a>
                    .
                  </div>
                </FancyListItem>
                <FancyListItem last>
                  <div className="flex-auto py-0.5 text-sm leading-5 dark:text-gray-500">
                    <a
                      className="text-sky-400 hover:underline"
                      href="https://kentcdodds.com/blog/application-state-management-with-react"
                    >
                      Co-locate
                    </a>{' '}
                    state near where it is used.
                  </div>
                </FancyListItem>
              </ul>
            </div>
            <div className="basis-full md:basis-5/12 lg:basis-1/3">
              <span className="mb-6 block text-lg text-gray-900 dark:text-slate-300">
                2. Need More Functionality?
              </span>
              <ul role="list" className="space-y-6">
                <FancyListItem>
                  <div className="flex-auto py-0.5 text-sm leading-5 dark:text-gray-500">
                    For{' '}
                    <a
                      className="text-sky-400 hover:underline"
                      href="#1-smart-data-fetching"
                    >
                      Data-Fetching
                    </a>{' '}
                    choose one of the following
                    <ul role="list" className="mt-6 space-y-6">
                      <FancyListItem>
                        <div className="flex-auto py-0.5 text-sm leading-5 dark:text-gray-500">
                          <a
                            className="text-sky-400 hover:underline"
                            href="https://www.npmjs.com/package/@tanstack/react-query"
                          >
                            tanstack-query
                          </a>{' '}
                          (REST APIs)
                        </div>
                      </FancyListItem>
                      <FancyListItem last>
                        <div className="flex-auto py-0.5 text-sm leading-5 dark:text-gray-500">
                          <a
                            className="text-sky-400 hover:underline"
                            href="https://www.npmjs.com/package/@apollo/client"
                          >
                            apollo-client
                          </a>{' '}
                          (GraphQL)
                        </div>
                      </FancyListItem>
                    </ul>
                  </div>
                </FancyListItem>
                <FancyListItem>
                  <div className="flex-auto py-0.5 text-sm leading-5 dark:text-gray-500">
                    For{' '}
                    <a
                      className="text-sky-400 hover:underline"
                      href="#3-flux-vs-atomic-vs-proxy"
                    >
                      Global Stores
                    </a>{' '}
                    choose one of the following
                    <ul role="list" className="mt-6 space-y-6">
                      <FancyListItem>
                        <div className="flex-auto py-0.5 text-sm leading-5 dark:text-gray-500">
                          <a
                            className="text-sky-400 hover:underline"
                            href="https://www.npmjs.com/package/zustand"
                          >
                            Zustand
                          </a>{' '}
                          (FLUX)
                        </div>
                      </FancyListItem>
                      <FancyListItem last>
                        <div className="flex-auto py-0.5 text-sm leading-5 dark:text-gray-500">
                          <a
                            className="text-sky-400 hover:underline"
                            href="https://www.npmjs.com/package/jotai"
                          >
                            Jotai
                          </a>{' '}
                          (Atomic)
                        </div>
                      </FancyListItem>
                    </ul>
                  </div>
                </FancyListItem>
                <FancyListItem last>
                  <div className="flex-auto py-0.5 text-sm leading-5 dark:text-gray-500">
                    For extremely complex state, consider state machines like{' '}
                    <a
                      className="text-sky-400 hover:underline"
                      href="https://www.npmjs.com/package/xstate"
                    >
                      xState
                    </a>
                  </div>
                </FancyListItem>
              </ul>
            </div>
          </div>
        </Tabs.Content>
        <Tabs.Content className="grow p-5" value="two">
          <div className="flex flex-col justify-evenly md:flex-row">
            <div className="basis-full md:basis-5/12 lg:basis-1/3">
              <span className="mb-6 block text-center text-lg text-gray-900 dark:text-slate-300">
                Redux to the Rescue
              </span>
              <ul role="list" className="space-y-6">
                <FancyListItem>
                  <div className="flex-auto py-0.5 text-sm leading-5 dark:text-gray-500">
                    <a
                      className="text-sky-400 hover:underline"
                      href="https://www.npmjs.com/package/@reduxjs/toolkit"
                    >
                      Redux Toolkit (RTK)
                    </a>{' '}
                    is the modern way to write with Redux
                  </div>
                </FancyListItem>
                <FancyListItem>
                  <div className="flex-auto py-0.5 text-sm leading-5 dark:text-gray-500">
                    Includes a mechanism for{' '}
                    <a
                      className="text-sky-400 hover:underline"
                      href="https://redux-toolkit.js.org/rtk-query/overview"
                    >
                      Data-Fetching
                    </a>
                  </div>
                </FancyListItem>
                <FancyListItem>
                  <div className="flex-auto py-0.5 text-sm leading-5 dark:text-gray-500">
                    <a
                      className="text-sky-400 hover:underline"
                      href="https://redux-toolkit.js.org/api/configureStore"
                    >
                      Global Stores
                    </a>{' '}
                    optimized for re-renders
                  </div>
                </FancyListItem>
                <FancyListItem>
                  <div className="flex-auto py-0.5 text-sm leading-5 dark:text-gray-500">
                    Includes common{' '}
                    <a
                      className="text-sky-400 hover:underline"
                      href="https://redux-toolkit.js.org/api/configureStore#middleware"
                    >
                      middleware
                    </a>{' '}
                    out of the box
                  </div>
                </FancyListItem>
                <FancyListItem last>
                  <div className="flex-auto py-0.5 text-sm leading-5 dark:text-gray-500">
                    Can provide consistency to large projects/teams
                  </div>
                </FancyListItem>
              </ul>
            </div>
          </div>
        </Tabs.Content>
        <Tabs.Content className="grow p-5" value="three">
          <span className="mb-6 block text-center text-lg text-gray-900 dark:text-slate-300">
            Recommended Combinations for State Management
          </span>
          <div className="flex flex-col justify-evenly md:flex-row">
            <div className="basis-3/4">
              <div className="flex border border-slate-300 dark:border-zinc-800">
                <div className="basis-full">
                  <div className="border-r border-slate-300 p-2 text-center text-sm font-medium text-gray-900 dark:border-zinc-800 dark:text-slate-300">
                    Data-Fetching
                  </div>
                </div>
                <div className="basis-full">
                  <div className="p-2 text-center text-sm font-medium text-gray-900 dark:text-slate-300">
                    Store
                  </div>
                </div>
              </div>
              <div className="flex border-b border-slate-300 py-4 dark:border-zinc-800">
                <div className="basis-full">
                  <div className="p-2 text-center">
                    <a
                      className="text-sky-400 hover:underline"
                      href="https://www.npmjs.com/package/@tanstack/react-query"
                    >
                      tanstack-query
                    </a>{' '}
                    (REST APIs)
                  </div>
                </div>
                <div className="basis-full">
                  <div className="p-2 text-center">
                    <a
                      className="text-sky-400 hover:underline"
                      href="https://www.npmjs.com/package/zustand"
                    >
                      Zustand
                    </a>{' '}
                    or{' '}
                    <a
                      className="text-sky-400 hover:underline"
                      href="https://www.npmjs.com/package/jotai"
                    >
                      Jotai
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex border-b border-slate-300 py-4 dark:border-zinc-800">
                <div className="basis-full">
                  <div className="p-2 text-center">
                    <a
                      className="text-sky-400 hover:underline"
                      href="https://www.npmjs.com/package/swr"
                    >
                      swr
                    </a>{' '}
                    (REST APIs)
                  </div>
                </div>
                <div className="basis-full">
                  <div className="p-2 text-center">
                    <a
                      className="text-sky-400 hover:underline"
                      href="https://www.npmjs.com/package/zustand"
                    >
                      Zustand
                    </a>{' '}
                    or{' '}
                    <a
                      className="text-sky-400 hover:underline"
                      href="https://www.npmjs.com/package/jotai"
                    >
                      Jotai
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex border-b border-slate-300 py-4 dark:border-zinc-800">
                <div className="basis-full">
                  <div className="p-2 text-center">
                    <a
                      className="text-sky-400 hover:underline"
                      href="https://www.npmjs.com/package/@apollo/client"
                    >
                      apollo-client
                    </a>{' '}
                    (GraphQL)
                  </div>
                </div>
                <div className="basis-full">
                  <div className="p-2 text-center">
                    <a
                      className="text-sky-400 hover:underline"
                      href="https://www.npmjs.com/package/zustand"
                    >
                      Zustand
                    </a>{' '}
                    or{' '}
                    <a
                      className="text-sky-400 hover:underline"
                      href="https://www.npmjs.com/package/jotai"
                    >
                      Jotai
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex border-b border-slate-300 py-4 dark:border-zinc-800">
                <div className="basis-full">
                  <div className="p-2 text-center">
                    <a
                      className="text-sky-400 hover:underline"
                      href="https://redux-toolkit.js.org/rtk-query/overview"
                    >
                      RTK-Query
                    </a>{' '}
                  </div>
                </div>
                <div className="basis-full">
                  <div className="p-2 text-center">
                    <a
                      className="text-sky-400 hover:underline"
                      href="https://www.npmjs.com/package/@reduxjs/toolkit"
                    >
                      Redux (RTK)
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex">
                {/* tanstack-query + zustand/jotai swr + zustand/jotai apollo-client
                + zustand/jotai Redux Toolkit + RTK Query xState / Contexts -
                complex global state without data-fetching or middleware
                (https://xstate.js.org/docs/recipes/react.html#global-state-react-context) */}
              </div>
            </div>
          </div>
        </Tabs.Content>
      </Tabs.Root>
      <hr />
    </>
  )
}

export function TabTrigger({ tabName, title, children }) {
  return (
    <Tabs.Trigger
      className={clsx(
        'group relative flex cursor-pointer flex-col items-center justify-center rounded-lg border',
        'border-slate-300 transition duration-150 hover:border-zinc-600 dark:border-zinc-800 dark:hover:border-zinc-600',
        'data-[state=active]:border-sky-400 data-[state=active]:ring-2 data-[state=active]:ring-sky-400'
      )}
      value={tabName}
    >
      <div className="flex flex-col px-4 py-6">
        <span className="block text-sm font-medium text-gray-900 dark:text-slate-300">
          {title}
        </span>
        <span className="mt-1 flex items-center text-sm">{children}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="absolute -bottom-10 left-1/2 hidden h-6 w-6 -translate-x-[50%] text-sky-400 group-data-[state=active]:block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
          />
        </svg>
      </div>
    </Tabs.Trigger>
  )
}

export function FancyListItem({ children, last = false }) {
  return (
    <li className="prose relative flex gap-x-4">
      <div
        className={clsx(
          'absolute left-0 top-0 -bottom-6 flex w-6 justify-center',
          {
            hidden: last,
          }
        )}
      >
        <div className="w-px bg-gray-200 dark:bg-zinc-500"></div>
      </div>
      <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white dark:bg-zinc-900">
        <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300 dark:bg-zinc-900"></div>
      </div>
      {children}
    </li>
  )
}
