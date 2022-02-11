import React from 'react'
import { ToggleButtonGroup as MUIToggleButtonGroup, ToggleButtonGroupProps } from '@mui/material'

export const ToggleButtonGroup: React.VFC<ToggleButtonGroupProps> = (props) => {
  const { children, ...toggleButtonGroupProps } = props

  return <MUIToggleButtonGroup {...toggleButtonGroupProps}>{children}</MUIToggleButtonGroup>
}
