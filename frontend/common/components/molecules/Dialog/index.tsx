import React from 'react'
import { Dialog as MUIDialog, DialogProps } from '@mui/material'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
// import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export const Dialog: React.VFC<DialogProps> = (props) => {
  const { children, ...modalProps } = props

  return (
    <MUIDialog {...modalProps}>
      <DialogTitle></DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions></DialogActions>
    </MUIDialog>
  )
}
