import { VFC } from 'react'
import { Main as Layout } from 'common/components/templates/Main'
import { Header } from 'common/components/organisms/Header'
import { LoginButton } from 'common/components/organisms/LoginButton'

export const Home: VFC = () => {
  return (
    <Layout>
      <Header>
        <h3 className="tw-ml-6 tw-text-xl tw-font-semibold">Home</h3>
      </Header>
      <div className="tw-container tw-px-6 tw-py-3">
        <div>ログインしてください。</div>
        <LoginButton />
      </div>
    </Layout>
  )
}
