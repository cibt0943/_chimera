import React from 'react'
import { Button as MUIButton, ButtonProps } from '@mui/material'

export const Button: React.VFC<ButtonProps> = (props) => {
  const { children, variant = 'contained', ...buttonProps } = props

  return (
    <MUIButton variant={variant} {...buttonProps}>
      {children}
    </MUIButton>
  )
}
