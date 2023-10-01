import { LeadHeading } from '@/components/LeadHeading'
import { Resource } from '@/components/Resource'
import { Step, StepList } from '@/components/StepList'
import { SimpleCell, SimpleRow, SimpleTable } from '@/components/SimpleTable'

// Helpers for the state management page

export function ColumnStack({ children }) {
  return (
    <div className="flex flex-col justify-evenly md:flex-row">{children}</div>
  )
}

export function Column({ children }) {
  return (
    <div className="my-4 basis-full md:basis-5/12 lg:my-0 lg:basis-1/3">
      {children}
    </div>
  )
}

export function GreenfieldContent() {
  return (
    <ColumnStack>
      <Column>
        <LeadHeading>1. Start by lifting state where possible</LeadHeading>
        <StepList>
          <Step>
            <Resource url="https://react.dev/learn/choosing-the-state-structure">
              Choose a State Structure
            </Resource>{' '}
            for the data you&apos;ll manage
          </Step>
          <Step>
            Lift state{' '}
            <Resource url="https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example">
              to a parent
            </Resource>
          </Step>
          <Step>
            Lift state to{' '}
            <Resource url="https://alexsidorenko.com/blog/react-prop-drilling-composition/">
              avoid prop-drilling
            </Resource>
          </Step>
          <Step>
            Lift state to{' '}
            <Resource url="https://alexsidorenko.com/blog/react-siblings/">
              communicate with sibling components
            </Resource>
          </Step>
          <Step last>
            <Resource url="https://kentcdodds.com/blog/application-state-management-with-react">
              Co-locate
            </Resource>{' '}
            state near where it is used
          </Step>
        </StepList>
      </Column>
      <Column>
        <LeadHeading>2. Need More Functionality?</LeadHeading>
        <StepList>
          <Step>
            For <Resource url="#1-smart-data-fetching">Data-Fetching</Resource>{' '}
            choose one of the following
            <StepList nested>
              <Step>
                <Resource url="https://www.npmjs.com/package/@tanstack/react-query">
                  tanstack-query
                </Resource>{' '}
                (REST APIs)
              </Step>
              <Step last>
                <Resource url="https://www.npmjs.com/package/@apollo/client">
                  apollo-client
                </Resource>{' '}
                (GraphQL)
              </Step>
            </StepList>
          </Step>
          <Step>
            For{' '}
            <Resource url="#3-global-stores-flux-vs-proxy">
              Global Stores
            </Resource>{' '}
            choose one of the following
            <StepList nested>
              <Step>
                <Resource url="https://www.npmjs.com/package/zustand">
                  Zustand
                </Resource>{' '}
                (FLUX)
              </Step>
              <Step last>
                <Resource url="https://www.npmjs.com/package/jotai">
                  Jotai
                </Resource>{' '}
                (Atomic)
              </Step>
            </StepList>
          </Step>
          <Step last>
            For extremely complex state, consider state machines like{' '}
            <Resource url="https://www.npmjs.com/package/xstate">
              xState
            </Resource>
          </Step>
        </StepList>
      </Column>
    </ColumnStack>
  )
}

export function ReduxContent() {
  return (
    <ColumnStack>
      <Column>
        <LeadHeading className="text-center">Redux to the Rescue</LeadHeading>
        <StepList>
          <Step>
            <Resource url="https://www.npmjs.com/package/@reduxjs/toolkit">
              Redux Toolkit (RTK)
            </Resource>{' '}
            is the modern way to write with Redux
          </Step>
          <Step>
            Includes a mechanism for{' '}
            <Resource url="https://redux-toolkit.js.org/rtk-query/overview">
              Data-Fetching
            </Resource>
          </Step>
          <Step>
            Includes common{' '}
            <Resource url="https://redux-toolkit.js.org/api/configureStore#middleware">
              middleware
            </Resource>{' '}
            out of the box
          </Step>
          <Step last>Can provide consistency to large projects/teams</Step>
        </StepList>
      </Column>
    </ColumnStack>
  )
}

export function RecommendationContent() {
  return (
    <>
      <LeadHeading className="text-center">
        Starting Points for State Management
      </LeadHeading>
      <SimpleTable>
        <SimpleRow header>
          <SimpleCell header>Data-Fetching</SimpleCell>
          <SimpleCell header>Store</SimpleCell>
        </SimpleRow>
        <SimpleRow>
          <SimpleCell>
            <Resource url="https://www.npmjs.com/package/@tanstack/react-query">
              tanstack-query
            </Resource>{' '}
            (REST APIs)
          </SimpleCell>
          <SimpleCell>
            <Resource url="https://www.npmjs.com/package/zustand">
              Zustand
            </Resource>{' '}
            or{' '}
            <Resource url="https://www.npmjs.com/package/jotai">Jotai</Resource>{' '}
            or{' '}
            <Resource url="https://www.npmjs.com/package/mobx">MobX</Resource>
          </SimpleCell>
        </SimpleRow>
        <SimpleRow>
          <SimpleCell>
            <Resource url="https://www.npmjs.com/package/swr">swr</Resource>{' '}
            (REST APIs)
          </SimpleCell>
          <SimpleCell>
            <Resource url="https://www.npmjs.com/package/zustand">
              Zustand
            </Resource>{' '}
            or{' '}
            <Resource url="https://www.npmjs.com/package/jotai">Jotai</Resource>{' '}
            or{' '}
            <Resource url="https://www.npmjs.com/package/mobx">MobX</Resource>
          </SimpleCell>
        </SimpleRow>
        <SimpleRow>
          <SimpleCell>
            <Resource url="https://www.npmjs.com/package/@apollo/client">
              apollo-client
            </Resource>{' '}
            (GraphQL)
          </SimpleCell>
          <SimpleCell>
            <Resource url="https://www.npmjs.com/package/zustand">
              Zustand
            </Resource>{' '}
            or{' '}
            <Resource url="https://www.npmjs.com/package/jotai">Jotai</Resource>{' '}
            or{' '}
            <Resource url="https://www.npmjs.com/package/mobx">MobX</Resource>
          </SimpleCell>
        </SimpleRow>
        <SimpleRow>
          <SimpleCell>
            <Resource url="https://redux-toolkit.js.org/rtk-query/overview">
              RTK-Query
            </Resource>{' '}
          </SimpleCell>
          <SimpleCell>
            <Resource url="https://www.npmjs.com/package/@reduxjs/toolkit">
              Redux (RTK)
            </Resource>
          </SimpleCell>
        </SimpleRow>
      </SimpleTable>
    </>
  )
}
