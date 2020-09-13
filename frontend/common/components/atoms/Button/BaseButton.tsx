import React from 'react'
import { Button, ButtonProps } from 'semantic-ui-react'

export type BaseButtonProps = ButtonProps

const BaseButton: React.FC<BaseButtonProps> = props => {
  return <Button {...props}>{props.children}</Button>
}

export default BaseButton
