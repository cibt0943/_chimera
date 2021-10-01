import { VFC } from 'react'
import { Heading, Box } from '@chakra-ui/react'
import { Main as Layout } from 'common/components/templates/Main'
import { Header } from 'common/components/organisms/Header'
import { ProfileContainer } from './containers/Profile'

export const Settings: VFC = () => {
  return (
    <Layout>
      <Header>
        <Heading as="h3" fontSize="2xl" pl={6}>
          Your Profile
        </Heading>
      </Header>
      <Box px={6} py={3}>
        <ProfileContainer />
      </Box>
    </Layout>
  )
}
