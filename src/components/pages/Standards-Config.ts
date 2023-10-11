export interface DirectoryExplorerProps {
  structure: DirectoryItemType[]
}

export interface DirectoryItemType {
  type: string
  name: string
  description: React.ReactNode
  items?: DirectoryItemType[]
}

export interface DirectoryItemProps {
  item: DirectoryItemType
  onSelect: (i: DirectoryItemType) => void
}

export const bulletproofStructure: DirectoryItemType[] = [
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

export const simpleStructure: DirectoryItemType[] = [
  {
    name: 'src',
    type: 'folder',
    description: '/src typically holds all of the code used for the project',
    items: [
      {
        name: 'components',
        type: 'folder',
        description:
          'your application is small and simple enough that everything can be a component, and it can all be grouped in a components folder',
        items: [
          {
            name: 'App',
            type: 'folder',
            description:
              'The App wrapper, probably where any routes and context providers should also live',
            items: [
              {
                name: 'App.jsx',
                type: 'file',
                description:
                  'The App wrapper, probably where any routes and context providers should also live',
              },
            ],
          },
          {
            name: 'Header',
            type: 'folder',
            description: 'global header component',
            items: [
              {
                name: 'Header.jsx',
                type: 'file',
                description: 'global header component',
              },
            ],
          },
          {
            name: 'Widget',
            type: 'folder',
            description: 'widget used on one page',
            items: [
              {
                name: 'Widget.jsx',
                type: 'file',
                description: 'widget used on one page',
              },
            ],
          },
          {
            name: 'Screen',
            type: 'folder',
            description: 'One of the modules or screens in the application',
            items: [
              {
                name: 'Screen.jsx',
                type: 'file',
                description: 'One of the modules or screens in the application',
              },
            ],
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
