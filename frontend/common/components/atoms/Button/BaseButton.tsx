import { VFC } from 'react'
import { Button, ButtonProps } from 'semantic-ui-react'

export type BaseButtonProps = ButtonProps

const BaseButton: VFC<BaseButtonProps> = (props) => {
  return <Button {...props}>{props.children}</Button>
}

export default BaseButton
