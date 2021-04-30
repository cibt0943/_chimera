import { VFC } from 'react'
import BaseButton, { BaseButtonProps } from './BaseButton'

export type PositiveButtonProps = BaseButtonProps

const PositiveButton: VFC<PositiveButtonProps> = (props) => {
  const baseButtonProps = { ...props, positive: true }
  return <BaseButton {...baseButtonProps}>{baseButtonProps.children}</BaseButton>
}

export default PositiveButton
