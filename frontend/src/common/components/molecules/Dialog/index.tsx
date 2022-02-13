import React from 'react'
import { Dialog as MUIDialog, DialogProps, DialogActions as MUIDiaglogActions, DialogActionsProps, DialogContent as MUIDialogContent, DialogContentProps, DialogTitle as MUIDialogTitle, DialogTitleProps } from '@mui/material'

export const Dialog: React.VFC<DialogProps> = (props) => {
  const { children, ...dialogProps } = props

  return <MUIDialog {...dialogProps}>{children}</MUIDialog>
}

export const DialogActions: React.VFC<DialogActionsProps> = (props) => {
  const { children, ...dialogActionsProps } = props

  return <MUIDiaglogActions {...dialogActionsProps}>{children}</MUIDiaglogActions>
}

export const DialogContent: React.VFC<DialogContentProps> = (props) => {
  const { children, ...dialogContentProps } = props

  return <MUIDialogContent {...dialogContentProps}>{children}</MUIDialogContent>
}

export const DialogTitle: React.VFC<DialogTitleProps> = (props) => {
  const { children, ...dialogTitleProps } = props

  return <MUIDialogTitle {...dialogTitleProps}>{children}</MUIDialogTitle>
}
