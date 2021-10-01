import { VFC } from 'react'
import { Heading, Box, ListItem, UnorderedList } from '@chakra-ui/react'
import { Main as Layout } from 'common/components/templates/Main'
import { Header } from 'common/components/organisms/Header'

export const Files: VFC = () => {
  return (
    <Layout>
      <Header>
        <Heading as="h3" fontSize="2xl" pl={6}>
          File
        </Heading>
      </Header>
      <Box px={6} py={3}>
        <Box mb={5} color="red.400" fontSize="xl">
          This feature is currently under development
        </Box>
        <Box>ローカルファイル用のファイラーを作りたい</Box>
        <UnorderedList>
          <ListItem>nexeかelectronでパッケージ化したexeを配布してここからは起動だけできるようにしたいな</ListItem>
          <ListItem>例：Cloud Commander</ListItem>
          <ListItem>unixコマンドでの操作と</ListItem>
          <ListItem>windowのショートカット、クリックによる移動やdeleteキーによる削除などwindowsライクな操作の両方</ListItem>
        </UnorderedList>
      </Box>
    </Layout>
  )
}
