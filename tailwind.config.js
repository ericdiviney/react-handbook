/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./{src,mdx}/**/*.{js,mjs,jsx,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      '2xs': ['0.75rem', { lineHeight: '1.25rem' }],
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    typography: require('./typography'),
    extend: {
      boxShadow: {
        glow: '0 0 4px rgb(0 0 0 / 0.1)',
      },
      maxWidth: {
        'lg': '33rem',
        '2xl': '40rem',
        '3xl': '50rem',
        '5xl': '66rem',
      },
      opacity: {
        1: '0.01',
        2.5: '0.025',
        7.5: '0.075',
        15: '0.15',
      },
      keyframes: {
        accordionDown: {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        accordionUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        enterFromTop: {
          from: { opacity: 0, transform: 'translateY(-9px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        enterFromRight: {
          from: { opacity: 0, transform: 'translateX(9px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        enterFromBottom: {
          from: { opacity: 0, transform: 'translateX(9px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        enterFromLeft: {
          from: { opacity: 0, transform: 'translateX(-9px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        exitToTop: {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateX(-9px)' },
        },
        exitToRight: {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateX(9px)' },
        },
        exitToBottom: {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateY(9px)' },
        },
        exitToLeft: {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateX(-9px)' },
        },
        scaleIn: {
          from: { opacity: 0, transform: 'rotateX(-10deg) scale(0.9)' },
          to: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
        },
        scaleOut: {
          from: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
          to: { opacity: 0, transform: 'rotateX(-10deg) scale(0.95)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
    },
    animation: {
      accordionDown: "accordionDown 120ms ease-out",
      accordionUp: "accordionUp 120ms ease-out",
      scaleIn: 'scaleIn 200ms ease',
      scaleOut: 'scaleOut 200ms ease',
      fadeIn: 'fadeIn 150ms ease',
      fadeOut: 'fadeOut 150ms ease',
      enterFromLeft: 'enterFromLeft 200ms ease-in-out',
      enterFromRight: 'enterFromRight 200ms ease-in-out',
      exitToLeft: 'exitToLeft 200ms ease-in-out',
      exitToRight: 'exitToRight 200ms ease-in-out',
      enterFromTop: 'enterFromTop 200ms ease-in-out',
      enterFromBottom: 'enterFromBottom 200ms ease-in-out',
      exitToTop: 'exitToTop 200ms ease-in-out',
      exitToBottom: 'exitToBottom 200ms ease-in-out',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
