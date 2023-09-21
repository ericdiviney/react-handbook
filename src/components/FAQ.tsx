import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { clsx } from 'clsx'

export function FAQ({ children }) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className="w-full">
      {children}
    </AccordionPrimitive.Root>
  )
}

export function Question({ children, value }) {
  return (
    <AccordionPrimitive.Item
      value={value}
      className={clsx('border-b dark:border-zinc-800')}
    >
      {children}
    </AccordionPrimitive.Item>
  )
}

export function QuestionText({ children }) {
  return <AccordionPrimitive.Header className="flex m-0">
  <AccordionPrimitive.Trigger
    className={clsx(
      'flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180 hover:text-sky-400 data-[state=open]:text-sky-400',
    )}
  >
    {children}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4 transition-transform duration-200 text-muted-foreground shrink-0"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  </AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
}

export function Answer({ children }) {
  return (
    <AccordionPrimitive.Content
      className={clsx(
        'overflow-hidden data-[state=closed]:animate-accordionUp data-[state=open]:animate-accordionDown',
      )}
    >
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0 pt-0 pb-4">{children}</div>
    </AccordionPrimitive.Content>
  )
}
