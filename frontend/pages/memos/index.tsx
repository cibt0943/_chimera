import { VFC, Suspense } from 'react'
import Layout from 'common/components/templates/Main'
import Header from 'common/components/organisms/Header'

const Memos: VFC = () => {
  return (
    <Layout>
      <Header>
        <h3 className="tw-ml-6 tw-text-xl tw-font-semibold">Memo</h3>
      </Header>
      {/* <Container maxWidth="sm">
        <TaskFilter />
        <AddTask />
        <Suspense fallback={<CircularProgress />}>
          <TaskList />
        </Suspense>
      </Container> */}
    </Layout>
  )
}

export default Memos
