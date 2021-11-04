import { VFC } from 'react'
import { Heading, Box, ListItem, UnorderedList } from '@chakra-ui/react'
import { Main as Layout } from 'common/components/templates/Main'
import { Header } from 'common/components/organisms/Header'

export const Notes: VFC = () => {
  return (
    <Layout>
      <Header>
        <Heading as="h3" fontSize="2xl" pl={6}>
          Note
        </Heading>
      </Header>
      <Box px={6} py={3}>
        <Box mb={5} color="red.400" fontSize="xl">
          This feature is currently under development
        </Box>
        <Box>さっと書けるメモ帳</Box>
        <UnorderedList>
          <ListItem>Taskとデータを共有</ListItem>
          <ListItem>リアルタイムにlocal strageへ保存</ListItem>
          <ListItem>File System Access APIを利用して実ファイルとして保存</ListItem>
          <ListItem>階層構造を持ったタブによるフィルタリング</ListItem>
          <ListItem>日付等によるソート</ListItem>
          <ListItem>1行目がタイトル</ListItem>
          <ListItem>タイトルなくても良い</ListItem>
        </UnorderedList>
      </Box>
    </Layout>
  )
}
