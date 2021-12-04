import React from 'react'
import { Box, Typography } from '@mui/material'
import Layout from 'common/components/templates/Main'
import { Header } from 'common/components/organisms/Header'
import { LoginButton } from 'common/components/organisms/LoginButton'

export const Home: React.VFC = () => {
  return (
    <Layout>
      <Header>
        <Typography variant="h6" fontWeight="bold">
          Home
        </Typography>
      </Header>
      <Box>
        <Box>ログインしてください。</Box>
        <LoginButton />
      </Box>
    </Layout>
  )
}
