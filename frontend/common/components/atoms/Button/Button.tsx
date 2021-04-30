import { VFC } from 'react'
import BaseButton, { BaseButtonProps } from './BaseButton'

export type ButtonProps = BaseButtonProps

const Button: VFC<ButtonProps> = (props) => {
  return <BaseButton {...props}>{props.children}</BaseButton>
}

export default Button
