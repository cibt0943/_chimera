import { VFC } from 'react'
import TextButton, { TextButtonProps } from './TextButton'

export type ContainedButtonProps = TextButtonProps

const ContainedButton: VFC<ContainedButtonProps> = (props) => {
  const containedButtonProps: ContainedButtonProps = { ...props, variant: 'contained' }
  return <TextButton {...containedButtonProps}>{containedButtonProps.children}</TextButton>
}

export default ContainedButton
