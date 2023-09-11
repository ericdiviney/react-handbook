import * as Tabs from '@radix-ui/react-tabs'
import * as Accordion from '@radix-ui/react-accordion'
import clsx from 'clsx'
import * as React from 'react'

// todo:
// new Hyperlink component that automatically opens new tabs. Create issue to use this in other pages once it's done.
// refactor this into a more generic "Tab" -> "Accordion" mobile section to be used elsewhere if desired
// refactor/cleanup

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={clsx(
        'mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
)

AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={clsx(
          'group relative flex w-full cursor-pointer flex-col rounded-lg border pl-9 text-left my-1',
          'border-slate-300 transition duration-150',
          'data-[state=closed]:dark:border-zinc-800 data-[state=closed]:dark:hover:border-zinc-600 data-[state=closed]:hover:border-zinc-600',
          'data-[state=open]:border-sky-400'
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="absolute top-[25px] left-[14px] h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </Accordion.Trigger>
    </Accordion.Header>
  )
)

AccordionTrigger.displayName = 'AccordionTrigger'

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={clsx(
        'text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  )
)

AccordionContent.displayName = 'AccordionContent'

export function StateTldr() {
  return (
    <>
      <div className="max-w-screen-xl px-0 mx-auto mt-6 overflow-x-auto overflow-y-hidden not-prose lg:px-1">
        <div className="hidden xl:block">
          <Tabs.Root defaultValue="one">
            <Tabs.List
              className="grid grid-cols-1 mt-4 mb-16 gap-y-6 sm:grid-cols-3 sm:gap-x-4"
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
                State management libraries that play well together.
                Data-fetching, stores, and state machines.
              </TabTrigger>
            </Tabs.List>
            <Tabs.Content className="p-4 grow" value="one">
              <div className="flex flex-col justify-evenly md:flex-row">
                <div className="basis-full md:basis-5/12 lg:basis-1/3">
                  <span className="block mb-6 text-lg text-gray-900 dark:text-slate-300">
                    1. Start by lifting state where possible
                  </span>
                  <ul role="list" className="space-y-6">
                    <FancyListItem>
                      <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                      <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                      <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                      <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                      <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                  <span className="block mb-6 text-lg text-gray-900 dark:text-slate-300">
                    2. Need More Functionality?
                  </span>
                  <ul role="list" className="space-y-6">
                    <FancyListItem>
                      <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                            <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                            <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                      <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
                        For{' '}
                        <a
                          className="text-sky-400 hover:underline"
                          href="#3-global-stores-flux-vs-proxy"
                        >
                          Global Stores
                        </a>{' '}
                        choose one of the following
                        <ul role="list" className="mt-6 space-y-6">
                          <FancyListItem>
                            <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                            <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                      <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
                        For extremely complex state, consider state machines
                        like{' '}
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
            <Tabs.Content className="p-5 grow" value="two">
              <div className="flex flex-col justify-evenly md:flex-row">
                <div className="basis-full md:basis-5/12 lg:basis-1/3">
                  <span className="block mb-6 text-lg text-center text-gray-900 dark:text-slate-300">
                    Redux to the Rescue
                  </span>
                  <ul role="list" className="space-y-6">
                    <FancyListItem>
                      <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                      <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                      <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                      <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                      <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
                        Can provide consistency to large projects/teams
                      </div>
                    </FancyListItem>
                  </ul>
                </div>
              </div>
            </Tabs.Content>
            <Tabs.Content className="p-5 grow" value="three">
              <span className="block mb-6 text-lg text-center text-gray-900 dark:text-slate-300">
                Recommended Combinations for State Management
              </span>
              <div className="flex flex-col justify-evenly md:flex-row">
                <div className="basis-3/4">
                  <div className="flex border border-slate-300 dark:border-zinc-800">
                    <div className="basis-full">
                      <div className="p-2 text-sm font-medium text-center text-gray-900 border-r border-slate-300 dark:border-zinc-800 dark:text-slate-300">
                        Data-Fetching
                      </div>
                    </div>
                    <div className="basis-full">
                      <div className="p-2 text-sm font-medium text-center text-gray-900 dark:text-slate-300">
                        Store
                      </div>
                    </div>
                  </div>
                  <div className="flex py-4 border-b border-slate-300 dark:border-zinc-800">
                    <div className="basis-full">
                      <div className="p-2 text-center dark:text-slate-500">
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
                      <div className="p-2 text-center dark:text-slate-500">
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
                        </a>{' '}
                        or{' '}
                        <a
                          className="text-sky-400 hover:underline"
                          href="https://www.npmjs.com/package/mobx"
                        >
                          MobX
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex py-4 border-b border-slate-300 dark:border-zinc-800">
                    <div className="basis-full">
                      <div className="p-2 text-center dark:text-slate-500">
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
                      <div className="p-2 text-center dark:text-slate-500">
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
                        </a>{' '}
                        or{' '}
                        <a
                          className="text-sky-400 hover:underline"
                          href="https://www.npmjs.com/package/mobx"
                        >
                          MobX
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex py-4 border-b border-slate-300 dark:border-zinc-800">
                    <div className="basis-full">
                      <div className="p-2 text-center dark:text-slate-500">
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
                      <div className="p-2 text-center dark:text-slate-500">
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
                        </a>{' '}
                        or{' '}
                        <a
                          className="text-sky-400 hover:underline"
                          href="https://www.npmjs.com/package/mobx"
                        >
                          MobX
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex py-4 border-b border-slate-300 dark:border-zinc-800">
                    <div className="basis-full">
                      <div className="p-2 text-center dark:text-slate-500">
                        <a
                          className="text-sky-400 hover:underline"
                          href="https://redux-toolkit.js.org/rtk-query/overview"
                        >
                          RTK-Query
                        </a>{' '}
                      </div>
                    </div>
                    <div className="basis-full">
                      <div className="p-2 text-center dark:text-slate-500">
                        <a
                          className="text-sky-400 hover:underline"
                          href="https://www.npmjs.com/package/@reduxjs/toolkit"
                        >
                          Redux (RTK)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
        <div className="xl:hidden">
          <Accordion.Root type="single" defaultValue="item-1" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex flex-col px-4 py-6">
                  <span className="block text-sm font-medium text-gray-900 dark:text-slate-300">
                    Build As You Go
                  </span>
                  <span className="flex items-center mt-1 text-sm">
                    Best for greenfield projects, POCs, and apps with unknown
                    scope/complexity on the frontend when starting.
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="w-full my-7">
                  <span className="block mb-6 text-lg text-gray-900 dark:text-slate-300">
                    1. Start by lifting state where possible
                  </span>
                  <ul role="list" className="space-y-6">
                    <FancyListItem>
                      <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                      <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                      <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                      <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                      <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                <div className="w-full my-7">
                  <span className="block mb-6 text-lg text-gray-900 dark:text-slate-300">
                    2. Need More Functionality?
                  </span>
                  <ul role="list" className="space-y-6">
                    <FancyListItem>
                      <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                            <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                            <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                      <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                            <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                            <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                      <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
                        For extremely complex state, consider state machines
                        like{' '}
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
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex flex-col px-4 py-6">
                  <span className="block text-sm font-medium text-gray-900 dark:text-slate-300">
                    You Need Everything
                  </span>
                  <span className="flex items-center mt-1 text-sm">
                    Redux Toolkit (RTK) is the modern way to reduce boilerplate
                    and manage large/complex state.
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="w-full my-7">
                  <span className="block mb-6 text-lg text-center text-gray-900 dark:text-slate-300">
                    Redux to the Rescue
                  </span>
                  <ul role="list" className="space-y-6">
                    <FancyListItem>
                      <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                      <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                      <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                      <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
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
                      <div className="flex-auto py-0.5 text-sm leading-5 dark:text-slate-500">
                        Can provide consistency to large projects/teams
                      </div>
                    </FancyListItem>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex flex-col px-4 py-6">
                  <span className="block text-sm font-medium text-gray-900 dark:text-slate-300">
                    Other Combinations
                  </span>
                  <span className="flex items-center mt-1 text-sm">
                    State management libraries that play well together.
                    Data-fetching, stores, and state machines.
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="w-full my-7">
                <span className="block mb-6 text-lg text-center text-gray-900 dark:text-slate-300">
                Recommended Combinations for State Management
              </span>
              <div className="flex flex-col justify-evenly md:flex-row">
                <div className="basis-3/4">
                  <div className="flex border border-slate-300 dark:border-zinc-800">
                    <div className="basis-full">
                      <div className="p-2 text-sm font-medium text-center text-gray-900 border-r border-slate-300 dark:border-zinc-800 dark:text-slate-300">
                        Data-Fetching
                      </div>
                    </div>
                    <div className="basis-full">
                      <div className="p-2 text-sm font-medium text-center text-gray-900 dark:text-slate-300">
                        Store
                      </div>
                    </div>
                  </div>
                  <div className="flex py-4 border-b border-slate-300 dark:border-zinc-800">
                    <div className="basis-full">
                      <div className="p-2 text-center dark:text-slate-500">
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
                      <div className="p-2 text-center dark:text-slate-500">
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
                  <div className="flex py-4 border-b border-slate-300 dark:border-zinc-800">
                    <div className="basis-full">
                      <div className="p-2 text-center dark:text-slate-500">
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
                      <div className="p-2 text-center dark:text-slate-500">
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
                  <div className="flex py-4 border-b border-slate-300 dark:border-zinc-800">
                    <div className="basis-full">
                      <div className="p-2 text-center dark:text-slate-500">
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
                      <div className="p-2 text-center dark:text-slate-500">
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
                  <div className="flex py-4 border-b border-slate-300 dark:border-zinc-800">
                    <div className="basis-full">
                      <div className="p-2 text-center dark:text-slate-500">
                        <a
                          className="text-sky-400 hover:underline"
                          href="https://redux-toolkit.js.org/rtk-query/overview"
                        >
                          RTK-Query
                        </a>{' '}
                      </div>
                    </div>
                    <div className="basis-full">
                      <div className="p-2 text-center dark:text-slate-500">
                        <a
                          className="text-sky-400 hover:underline"
                          href="https://www.npmjs.com/package/@reduxjs/toolkit"
                        >
                          Redux (RTK)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion.Root>
        </div>
      </div>
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
        <span className="flex items-center mt-1 text-sm">{children}</span>
        {/* <svg
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
        </svg> */}
      </div>
    </Tabs.Trigger>
  )
}

export function FancyListItem({ children, last = false }) {
  return (
    <li className="relative flex prose gap-x-4">
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
      <div className="relative flex items-center justify-center flex-none w-6 h-6 bg-white dark:bg-zinc-900">
        <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300 dark:bg-zinc-900"></div>
      </div>
      {children}
    </li>
  )
}
