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
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <SectionProvider sections={sections}>
      <div>
        <motion.header
          layoutScroll
          className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
        >
          <div className="bg-white dark:bg-zinc-900 group contents lg:pointer-events-auto lg:block lg:border-r lg:border-zinc-900/10 lg:px-4 min-w-[55px] lg:mt-12 lg:pb-8 lg:dark:border-white/10">
            <Header />
            <ScrollArea.Root scrollHideDelay={0} className="h-[calc(100%-60px)] w-full overflow-hidden mt-8">
              <div className={clsx({
                'bg-white dark:bg-zinc-900 pb-2 w-full': true,
              })}>
                <button className={clsx({
                  'w-6 h-6 relative': true,
                  'text-zinc-600': !isNavOpen,
                  'text-zinc-800 dark:text-white': isNavOpen,
                })} onClick={() => setNavOpen(!isNavOpen)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={clsx('absolute bottom-0 left-0 w-6 h-6 duration-400 ease-in transition-opacity', {
                    'opacity-0': isNavOpen,
                    'opacity-100': !isNavOpen,
                  })}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={clsx('absolute bottom-0 left-0 w-6 h-6 duration-400 ease-in transition-opacity', {
                    'opacity-0': !isNavOpen,
                    'opacity-100': isNavOpen,
                  })}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                  </svg>
                </button>
              </div>
              <ScrollArea.Viewport className="w-full h-full pr-2">
                <div className='relative overflow-hidden lg:group-hover:block'>
                  
                  <div className={clsx('hidden w-0 overflow-hidden transition-all duration-200 ease-in-out opacity-0 lg:block lg:group-hover:w-72 lg:group-hover:opacity-100', {
                    'w-72': isNavOpen,
                    'opacity-100': isNavOpen,
                  })}>
                    <div className={`pt-2 duration-300 ease-in-out opacity-0 w-72 group-hover:opacity-100 ${isNavOpen ? 'opacity-100' : ''}`}>
                      <Navigation onNavigate={() => {/*setNavOpen(true)*/}} />
                    </div>
                  </div>
                </div>
              </ScrollArea.Viewport>
              <ScrollArea.Scrollbar
                className="flex touch-none select-none bg-zinc-100 p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:w-1.5 data-[orientation=horizontal]:flex-col dark:bg-zinc-800"
                orientation="vertical"
              >
                <ScrollArea.Thumb className="relative flex-1 cursor-pointer rounded-[10px] bg-zinc-200/80 before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] dark:bg-zinc-700" />
              </ScrollArea.Scrollbar>
            </ScrollArea.Root>
          </div>
        </motion.header>
        <div className={clsx('transition-all duration-400 relative px-4 pt-14 sm:px-6 lg:px-8 lg:pl-16', {
          'ml-80 xl:ml-auto': isNavOpen,
        })}>
          <main className="lg:py-16">
            <Prose as="article">{children}</Prose>
          </main>
          <Footer />
        </div>
      </div>
    </SectionProvider>
  )
}
