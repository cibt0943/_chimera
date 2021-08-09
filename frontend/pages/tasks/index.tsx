import { VFC, Suspense } from 'react'
import Layout from 'common/components/templates/Main'
import Header from 'common/components/organisms/Header'
import LoadingPlaceholder from 'common/components/molecules/LoadingPlaceholder'
import { TasksContextProvider } from './providers'
import TaskFilter from './containers/TaskFilter'
import AddTask from './containers/AddTask'
import TaskList from './containers/TaskList'

const Tasks: VFC = () => {
  return (
    <TasksContextProvider>
      <Layout>
        <Header>
          <h3 className="tw-pl-6 tw-text-xl tw-font-semibold">Todo</h3>
        </Header>
        <div className="tw-container tw-mx-auto tw-px-6 tw-py-3">
          <div className="tw-flex tw-justify-between">
            <AddTask />
            <TaskFilter />
          </div>
          <div className="tw-mt-6">
            <Suspense fallback={<LoadingPlaceholder />}>
              <TaskList />
            </Suspense>
          </div>
        </div>
      </Layout>
    </TasksContextProvider>
  )
}

export default Tasks
