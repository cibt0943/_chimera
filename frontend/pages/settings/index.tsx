import React from 'react'
import { Box, Typography } from '@mui/material'
import Layout from 'common/components/templates/Main'
import { Header } from 'common/components/organisms/Header'
import { ProfileContainer } from './containers/Profile'

export const Settings: React.VFC = () => {
  return (
    <Layout>
      <Header>
        <Typography variant="h6" fontWeight="bold">
          Your Profile
        </Typography>
      </Header>
      <Box px={6} py={3}>
        <ProfileContainer />
      </Box>
    </Layout>
  )
}
