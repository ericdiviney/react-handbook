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

export const scaleStructure: DirectoryItemType[] = [
  {
    name: 'src',
    type: 'folder',
    description: '/src typically holds all of the code used for the project',
    items: [
      {
        name: 'feature',
        type: 'folder',
        description:
          'The feature folder helps structure large React applications, because it separates specific feature related components from generic UI components',
        items: [
          {
            name: 'User',
            type: 'folder',
            description: 'User feature folder',
            items: [
              {
                name: 'Profile',
                type: 'folder',
                description: 'Folder where Profile feature components live',
              },
              {
                name: 'Avatar',
                type: 'folder',
                description: 'Folder where Avatar feature components live',
              },
            ],
          },
          {
            name: 'Message',
            type: 'folder',
            description: 'Message feature folder',
            items: [
              {
                name: 'MessageItem',
                type: 'folder',
                description: 'Folder where MessageItem feature components live',
              },
              {
                name: 'MessageList',
                type: 'folder',
                description: 'Folder where MessageList feature components live',
              },
            ],
          },
          {
            name: 'Payment',
            type: 'folder',
            description: 'Payment feature folder',
            items: [
              {
                name: 'PaymentForm',
                type: 'folder',
                description: 'Folder where PaymentForm feature components live',
              },
              {
                name: 'PaymentWizard',
                type: 'folder',
                description:
                  'Folder where PaymentWizard feature components live',
              },
            ],
          },
          {
            name: 'Error',
            type: 'folder',
            description: 'Error feature folder',
            items: [
              {
                name: 'ErrorMessage',
                type: 'folder',
                description:
                  'Folder where ErrorMessage feature components live',
              },
              {
                name: 'ErrorBoundary',
                type: 'folder',
                description:
                  'Folder where ErrorBoundary feature components live',
              },
            ],
          },
        ],
      },
      {
        name: 'components',
        type: 'folder',
        description:
          'The components folder only for reusable components (e.g. UI components)',
        items: [
          {
            name: 'App',
            type: 'folder',
            description:
              'As each react component scales in complexity, a folder is used to group technical concerns like styles and tests',
            items: [
              {
                name: 'index.js',
                type: 'file',
                description:
                  'index.js represents the public interface of the folder where everything relevant to the outside world is exported',
              },
              {
                name: 'component.js',
                type: 'file',
                description:
                  'component.js file holds the actual implementation logic of the component',
              },
              {
                name: 'test.js',
                type: 'file',
                description:
                  'test.js implements testing for each local component',
              },
              {
                name: 'style.css',
                type: 'file',
                description:
                  'style.css implements styling for each local component',
              },
            ],
          },
          {
            name: 'List',
            type: 'folder',
            description: 'List component folder',
          },
          {
            name: 'Input',
            type: 'folder',
            description: 'Input component folder',
          },
          {
            name: 'Button',
            type: 'folder',
            description: 'Button component folder',
          },
          {
            name: 'Checkbox',
            type: 'folder',
            description: 'Checkbox component folder',
          },
          {
            name: 'Radio',
            type: 'folder',
            description: 'Radio component folder',
          },
          {
            name: 'Dropdown',
            type: 'folder',
            description: 'Dropdown component folder',
          },
        ],
      },
      {
        name: 'hooks',
        type: 'folder',
        description: 'Shared hooks used across the entire application',
        items: [
          {
            name: 'useScrollDetect.js',
            type: 'file',
            description: 'Reusable custom react hook',
          },
          {
            name: 'useClickOutside',
            type: 'folder',
            description:
              'If there are more files needed for one hook, you can change it into a folder',
            items: [
              {
                name: 'index.js',
                type: 'file',
                description: 'Files to implement reusable custom react hook',
              },
              {
                name: 'hook.js',
                type: 'file',
                description: 'Files to implement reusable custom react hook',
              },
              {
                name: 'test.js',
                type: 'file',
                description: 'Files to implement reusable custom react hook',
              },
            ],
          },
        ],
      },
      {
        name: 'context',
        type: 'folder',
        description:
          'If you are using React Context, context needs to get instantiated somewhere. A dedicated folder/file for it is best practice',
        items: [
          {
            name: 'Session.js',
            type: 'file',
            description: 'Session context provider',
          },
        ],
      },
      {
        name: 'utils',
        type: 'folder',
        description:
          'Shared utility functions used across the entire application, also sometimes called services',
        items: [
          {
            name: 'Format',
            type: 'folder',
            description:
              'Every folder has a dedicated purpose and it encourages sharing functionality across the React application',
            items: [
              {
                name: 'Date',
                type: 'folder',
                description: 'Date formatting folder, when multiple files are needed',
                items: [
                  {
                    name: 'index.js',
                    type: 'file',
                    description: 'Files to implement formatting utility',
                  },
                  {
                    name: 'service.js',
                    type: 'file',
                    description: 'Files to implement formatting utility',
                  },
                  {
                    name: 'test.js',
                    type: 'file',
                    description: 'Files to implement formatting utility',
                  },
                ],
              },
              {
                name: 'Currency',
                type: 'folder',
                description: 'Currency formatting',
              },
            ],
          },
          {
            name: 'ErrorTracking',
            type: 'folder',
            description:
              'If a utility is tightly coupled to a feature, you can also move that utility folder to the specific feature folder',
            items: [
              {
                name: 'index.js',
                type: 'file',
                description: 'Files to implement error tracking utility',
              },
              {
                name: 'service.js',
                type: 'file',
                description: 'Files to implement error tracking utility',
              },
              {
                name: 'test.js',
                type: 'file',
                description: 'Files to implement error tracking utility',
              },
            ],
          },
        ],
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
