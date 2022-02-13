import React from 'react'
import { Button as MUIButton, ButtonProps, IconButton as MUIIconButton, IconButtonProps as MUIIconButtonProps } from '@mui/material'

export const Button: React.VFC<ButtonProps> = (props) => {
  const { children, variant = 'contained', ...buttonProps } = props

  return (
    <MUIButton variant={variant} {...buttonProps}>
      {children}
    </MUIButton>
  )
}

export type IconButtonProps = MUIIconButtonProps

export const IconButton: React.VFC<IconButtonProps> = (props) => {
  const { children, ...buttonProps } = props

  return <MUIIconButton {...buttonProps}>{children}</MUIIconButton>
}
