import clsx from 'clsx'
import { useState } from 'react'
import { Resource } from '@/components/Resource'
import {
  PillTabs,
  PillTabsList,
  PillTabsTrigger,
  PillTabsContent,
} from '@/components/PillTab'

const bulletproofStructure: DirectoryItem[] = [
  {
    name: 'src',
    type: 'folder',
    description: '/src typically holds all of the code used for the project',
    items: [
      {
        name: 'assets',
        type: 'folder',
        description:
          'assets folder can contain all the static files such as images, fonts, etc.',
      },
      {
        name: 'components',
        type: 'folder',
        description: 'shared components used across the entire application',
      },
      {
        name: 'config',
        type: 'folder',
        description:
          'all the global configuration, env variables etc. get exported from here and used in the app',
      },
      {
        name: 'features',
        type: 'folder',
        description: 'feature based modules',
        items: [
          {
            name: 'awesome-feature',
            type: 'folder',
            description:
              'each of your major features organized in this directory',
            items: [
              {
                name: 'api',
                type: 'folder',
                description:
                  ' exported API request declarations and api hooks related to a specific feature',
              },
              {
                name: 'assets',
                type: 'folder',
                description:
                  'assets folder can contain all the static files such as images, fonts, etc.',
              },
              {
                name: 'components',
                type: 'folder',
                description:
                  'shared components used across the entire application',
              },
              {
                name: 'hooks',
                type: 'folder',
                description: 'shared hooks used across the entire application',
              },
              {
                name: 'routes',
                type: 'folder',
                description: 'routes configuration',
              },
              {
                name: 'stores',
                type: 'folder',
                description: 'global state stores',
              },
              {
                name: 'types',
                type: 'folder',
                description: 'base types used across the application',
              },
              {
                name: 'utils',
                type: 'folder',
                description: 'shared utility functions',
              },
              {
                name: 'index.ts',
                type: 'file',
                description:
                  'entry point for the feature, it should serve as the public API of the given feature and exports everything that should be used outside the feature',
              },
            ],
          },
        ],
      },
      {
        name: 'hooks',
        type: 'folder',
        description: 'shared hooks used across the entire application',
      },
      {
        name: 'lib',
        type: 'folder',
        description:
          're-exporting different libraries preconfigured for the application',
      },
      {
        name: 'providers',
        type: 'folder',
        description: 'all of the application providers',
      },
      {
        name: 'routes',
        type: 'folder',
        description: 'routes configuration',
      },
      {
        name: 'stores',
        type: 'folder',
        description: 'global state stores',
      },
      {
        name: 'test',
        type: 'folder',
        description: 'test utilities and mock server',
      },
      {
        name: 'types',
        type: 'folder',
        description: 'base types used across the application',
      },
      {
        name: 'utils',
        type: 'folder',
        description: 'shared utility functions',
      },
    ],
  },
  {
    name: 'README.md',
    type: 'file',
    description: '',
  },
  {
    name: '.gitignore',
    type: 'file',
    description: '',
  },
  {
    name: '.env.example',
    type: 'file',
    description: '',
  },
  {
    name: 'package.json',
    type: 'file',
    description: '',
  },
  {
    name: 'tsconfig.json',
    type: 'file',
    description: '',
  },
]

const simpleStructure: DirectoryItem[] = [
  {
    name: 'src',
    type: 'folder',
    description: '/src typically holds all of the code used for the project',
    items: [
      {
        name: 'components',
        type: 'folder',
        description: 'your application is ',
        items: [
          {
            name: 'App',
            type: 'folder',
            description: 'shared components used across the entire application',
          },
          {
            name: 'Header',
            type: 'folder',
            description: 'shared utility functions',
          },
          {
            name: 'Widget',
            type: 'folder',
            description: 'shared hooks used across the entire application',
          },
        ],
      },
      {
        name: 'helpers',
        type: 'folder',
        description: 'shared utility functions',
      },
      {
        name: 'hooks',
        type: 'folder',
        description: 'shared hooks used across the entire application',
      },
    ],
  },
  {
    name: 'README.md',
    type: 'file',
    description: '',
  },
  {
    name: '.gitignore',
    type: 'file',
    description: '',
  },
  {
    name: '.env.example',
    type: 'file',
    description: '',
  },
  {
    name: 'package.json',
    type: 'file',
    description: '',
  },
  {
    name: 'tsconfig.json',
    type: 'file',
    description: '',
  },
]

export function DirectoryExplorerTabs() {
  return (
    <div className="not-prose">
      <PillTabs defaultValue="bulletproof">
        <PillTabsList>
          <PillTabsTrigger value="bulletproof">
            bulletproof-react
          </PillTabsTrigger>
          <PillTabsTrigger value="simple">simple</PillTabsTrigger>
        </PillTabsList>
        <PillTabsContent value="bulletproof">
          This directory structure is based on the{' '}
          <Resource url="https://github.com/alan2207/bulletproof-react/">
            bulletproof-react
          </Resource>{' '}
          repo - it is an absolute goldmine for good practices and architecture
          of large/enterprise React application.
          <DirectoryExplorer structure={bulletproofStructure} />
        </PillTabsContent>
        <PillTabsContent value="simple">
          This structure comes directly from{' '}
          <Resource url="https://www.joshwcomeau.com/react/file-structure/">
            Josh Comeau
          </Resource>{' '}
          - a very talented author of educational material in the webdev
          community. Read more of his React articles{' '}
          <Resource url="https://www.joshwcomeau.com/tutorials/react/">
            here
          </Resource>
          .
          <DirectoryExplorer structure={simpleStructure} />
        </PillTabsContent>
      </PillTabs>
    </div>
  )
}

interface DirectoryExplorerProps {
  structure: DirectoryItem[]
}

export function DirectoryExplorer({ structure }: DirectoryExplorerProps) {
  const [selectedItem, setSelectedItem] = useState<DirectoryItem>()

  return (
    <div className="p-4 mt-8 mb-6 border shadow rounded-xl dark:border-zinc-700">
      <div className="flex gap-2">
        <div className="min-w-[250px] text-zinc-800 dark:text-white">
          <ul>
            {structure.map((item, index) => (
              <DirectoryItem
                key={index}
                item={item}
                onSelect={(item) => setSelectedItem(item)}
              />
            ))}
          </ul>
        </div>
        <div className="flex-grow p-4 border rounded-r-lg dark:border-zinc-700">
          {selectedItem && (
            <div key={selectedItem.name} className="animate-quickFadeIn">
              {selectedItem.description}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

interface DirectoryItem {
  type: string
  name: string
  description: React.ReactNode
  items?: DirectoryItem[]
}

interface DirectoryItemProps {
  item: DirectoryItem
  onSelect: (i: DirectoryItem) => void
}

export function DirectoryItem({ item, onSelect }: DirectoryItemProps) {
  const [isHighlighted, setIsHighlighted] = useState(() => {
    return item.name === 'src'
  })

  function handleClickItem() {
    setIsHighlighted(!isHighlighted)
    onSelect(item)
  }

  return (
    <li className="my-[2px]">
      <button
        onClick={() => handleClickItem()}
        className="group flex items-center gap-2 rounded-xl px-3 py-[2px] transition-all duration-75 hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800"
      >
        {item.type === 'folder' && item.items && item.items.length > 0 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={clsx('h-4 w-4 transition-all', {
              'rotate-90': isHighlighted,
            })}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        )}
        {item.type === 'folder' && !item.items && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
            />
          </svg>
        )}
        {item.type === 'file' && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
        )}
        <span className="font-mono text-xs font-light">{item.name}</span>
      </button>
      {item.items !== undefined &&
        Array.isArray(item.items) &&
        item.items.length > 0 && (
          <ul
            className={clsx('pl-[23px]', {
              'animate-enterFromTop': isHighlighted,
              hidden: !isHighlighted,
            })}
          >
            {item.items.map((item, index) => (
              <DirectoryItem
                key={index}
                item={item}
                onSelect={(item) => onSelect(item)}
              />
            ))}
          </ul>
        )}
    </li>
  )
}
