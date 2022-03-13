import React from 'react'
import { Box, Typography } from '@mui/material'
import Layout from 'common/components/templates/Main'
import { Header } from 'common/components/organisms/Header'

export const Files: React.VFC = () => {
  return (
    <Layout>
      <Header>
        <Typography variant="h6" fontWeight="bold">
          File
        </Typography>
      </Header>
      <Box>
        <Box mb={5} fontSize="xl">
          This feature is currently under development
        </Box>
        <Box>ローカルファイル用のファイラーを作りたい</Box>
        <ul>
          <li>
            nexeかelectronでパッケージ化したexeを配布してここからは起動だけできるようにしたいな
          </li>
          <li>例：Cloud Commander</li>
          <li>unixコマンドでの操作と</li>
          <li>
            windowのショートカット、クリックによる移動やdeleteキーによる削除などwindowsライクな操作の両方
          </li>
        </ul>
      </Box>
    </Layout>
  )
}
