import { VFC, Suspense } from 'react'
import { Main as Layout } from 'common/components/templates/Main'
import { Header } from 'common/components/organisms/Header'
// import LoadingDialog from 'common/components/molecules/LoadingDialog'
import { TasksContextProvider } from './providers'
import { TaskFilterContainer } from './containers/TaskFilter'
import { AddTaskContainer } from './containers/AddTask'
import { TaskListContainer } from './containers/TaskList'
import { TaskListPlaceholder } from './components/TaskList'

export const Tasks: VFC = () => {
  return (
    <TasksContextProvider>
      <Layout>
        <Header>
          <h3 className="tw-pl-6 tw-text-xl tw-font-semibold">Task</h3>
        </Header>
        <div className="tw-container tw-px-6 tw-py-3">
          <div className="tw-flex tw-justify-between">
            <AddTaskContainer />
            <TaskFilterContainer />
          </div>
          <div className="tw-mt-6">
            <Suspense fallback={<TaskListPlaceholder />}>
              <TaskListContainer />
            </Suspense>
          </div>
        </div>
      </Layout>
    </TasksContextProvider>
  )
}
