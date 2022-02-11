import React from 'react'
import { Box, Typography } from '@mui/material'
import Layout from 'common/components/templates/Main'
import { Header } from 'common/components/organisms/Header'

export const Notes: React.VFC = () => {
  return (
    <Layout>
      <Header>
        <Typography variant="h6" fontWeight="bold">
          Note
        </Typography>
      </Header>
      <Box>
        <Box mb={5} fontSize="xl">
          This feature is currently under development
        </Box>
        <Box>さっと書けるメモ帳</Box>
        <ul>
          <li>Taskとデータを共有</li>
          <li>リアルタイムにlocal strageへ保存</li>
          <li>File System Access APIを利用して実ファイルとして保存</li>
          <li>階層構造を持ったタブによるフィルタリング</li>
          <li>日付等によるソート</li>
          <li>1行目がタイトル</li>
          <li>タイトルなくても良い</li>
        </ul>
      </Box>
    </Layout>
  )
}
