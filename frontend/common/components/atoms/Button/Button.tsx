import React from 'react'
import BaseButton, { BaseButtonProps } from './BaseButton'

export type ButtonProps = BaseButtonProps

const Button: React.FC<ButtonProps> = (props) => {
  return <BaseButton {...props}>{props.children}</BaseButton>
}

export default Button
