import { VFC } from 'react'
import { Main as Layout } from 'common/components/templates/Main'
import { Header } from 'common/components/organisms/Header'
import { ProfileContainer } from './containers/Profile'

export const Settings: VFC = () => {
  return (
    <Layout>
      <Header>
        <h3 className="tw-pl-6 tw-text-xl tw-font-semibold">Your Profile</h3>
      </Header>
      <div className="tw-container tw-px-6 tw-py-3">
        <ProfileContainer />
      </div>
    </Layout>
  )
}
