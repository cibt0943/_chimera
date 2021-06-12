import { VFC } from 'react'
import { Button, ButtonProps } from '@material-ui/core'

export type TextButtonProps = ButtonProps

const TextButton: VFC<TextButtonProps> = (props) => {
  return <Button {...props}>{props.children}</Button>
}

export default TextButton
