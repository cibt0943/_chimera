import { VFC } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Layout from 'common/components/templates/Main'
import Header from 'common/components/organisms/Header'

const Memos: VFC = () => {
  return (
    <Layout>
      <Header>
        <Typography variant="h6" noWrap>
          memo
        </Typography>
      </Header>
      <Container maxWidth="sm">memomemo</Container>
    </Layout>
  )
}

export default Memos
