import React from 'react'
import { Dialog as MUIDialog, DialogProps } from '@mui/material'

export const Dialog: React.VFC<DialogProps> = (props) => {
  const { children, ...modalProps } = props

  return <MUIDialog {...modalProps}>{children}</MUIDialog>
}
