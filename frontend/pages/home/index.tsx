import { VFC } from 'react'
import { Heading, Box } from '@chakra-ui/react'
import { Main as Layout } from 'common/components/templates/Main'
import { Header } from 'common/components/organisms/Header'
import { LoginButton } from 'common/components/organisms/LoginButton'

export const Home: VFC = () => {
  return (
    <Layout>
      <Header>
        <Heading as="h3" fontSize="2xl" pl={6}>
          Home
        </Heading>
      </Header>
      <Box px={6} py={3}>
        <Box>ログインしてください。</Box>
        <LoginButton />
      </Box>
    </Layout>
  )
}
