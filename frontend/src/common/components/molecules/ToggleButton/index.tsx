import React from 'react'
import {
  ToggleButton as MUIToggleButton,
  ToggleButtonProps,
} from '@mui/material'

export const ToggleButton: React.VFC<ToggleButtonProps> = (props) => {
  const { children, ...toggleButtonProps } = props

  return <MUIToggleButton {...toggleButtonProps}>{children}</MUIToggleButton>
}
