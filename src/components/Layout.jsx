import Link from 'next/link'
import { motion } from 'framer-motion'
import * as ScrollArea from '@radix-ui/react-scroll-area'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Logo } from '@/components/Logo'
import { Navigation } from '@/components/Navigation'
import { Prose } from '@/components/Prose'
import { SectionProvider } from '@/components/SectionProvider'
import clsx from 'clsx'
import { useState, useRef, useEffect } from 'react'

export function Layout({ children, sections = [] }) {
  const [isNavOpen, setNavOpen] = useState(false)

  return (
    <SectionProvider sections={sections}>
      <div>
        <motion.header
          layoutScroll
          className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
        >
          <div
            className={clsx(
              'group contents min-w-[55px] bg-white transition-all dark:bg-zinc-900 lg:pointer-events-auto lg:mt-12 lg:block lg:border-r lg:border-zinc-900/10 lg:px-4 lg:pb-8 lg:dark:border-white/10',
              {
                'shadow hover:shadow-xl': !isNavOpen,
                'shadow-xl': isNavOpen,
              }
            )}
          >
            <Header />
            <ScrollArea.Root
              scrollHideDelay={0}
              className="mt-8 h-[calc(100%-30px)] w-full overflow-hidden"
            >
              <div
                className={clsx({
                  'w-full bg-white pb-2 dark:bg-zinc-900': true,
                })}
              >
                <button
                  className={clsx({
                    'relative hidden h-6 w-6 lg:block': true,
                    'text-zinc-600': !isNavOpen,
                    'text-zinc-800 dark:text-white': isNavOpen,
                  })}
                  onClick={() => setNavOpen(!isNavOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={clsx(
                      'absolute bottom-0 left-0 h-6 w-6 transition-opacity duration-[190ms] ease-in',
                      {
                        'opacity-0': isNavOpen,
                        'opacity-100': !isNavOpen,
                      }
                    )}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={clsx(
                      'absolute bottom-0 left-0 h-6 w-6 transition-opacity duration-[190ms] ease-in',
                      {
                        'opacity-0': !isNavOpen,
                        'opacity-100': isNavOpen,
                      }
                    )}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
              </div>
              <ScrollArea.Viewport className="h-full w-full pr-2">
                <div className="relative overflow-hidden lg:group-hover:block">
                  <div
                    className={clsx(
                      'hidden w-0 overflow-hidden opacity-0 transition-all duration-[190ms] ease-in-out lg:block lg:group-hover:w-72 lg:group-hover:opacity-100',
                      {
                        'w-72': isNavOpen,
                        'opacity-100': isNavOpen,
                      }
                    )}
                  >
                    <div
                      className={`w-72 pt-2 opacity-0 duration-[190ms] ease-in-out group-hover:opacity-100 ${
                        isNavOpen ? 'opacity-100' : ''
                      }`}
                    >
                      <Navigation />
                    </div>
                  </div>
                </div>
              </ScrollArea.Viewport>
              <ScrollArea.Scrollbar
                className="flex touch-none select-none bg-zinc-100 p-0.5 transition-colors duration-[190ms] ease-out data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:w-1.5 data-[orientation=horizontal]:flex-col dark:bg-zinc-800"
                orientation="vertical"
              >
                <ScrollArea.Thumb className="relative flex-1 cursor-pointer rounded-[10px] bg-zinc-300/80 before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] dark:bg-zinc-600" />
              </ScrollArea.Scrollbar>
            </ScrollArea.Root>
          </div>
        </motion.header>
        <div
          className={clsx(
            'relative px-4 pt-14 transition-all duration-[190ms] sm:px-6 lg:px-8',
            {
              'ml-auto lg:ml-80': isNavOpen,
            }
          )}
        >
          <main className="lg:py-16">
            <Prose as="article">{children}</Prose>
          </main>
          <Footer />
        </div>
      </div>
    </SectionProvider>
  )
}
