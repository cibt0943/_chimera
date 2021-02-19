import React from 'react'
import BaseButton, { BaseButtonProps } from './BaseButton'

export type PositiveButtonProps = BaseButtonProps

const PositiveButton: React.FC<PositiveButtonProps> = (props) => {
  const baseButtonProps = { ...props, positive: true }
  return <BaseButton {...baseButtonProps}>{baseButtonProps.children}</BaseButton>
}

export default PositiveButton
