import { VFC } from 'react'
import { Radio, RadioProps } from '@chakra-ui/react'

type RadioButtonProps = RadioProps

export const RadioButton: VFC<RadioButtonProps> = (props) => {
  const { children, ...radioButtonProps } = props

  return (
    <Radio {...radioButtonProps}>
      <span>{children}</span>
    </Radio>
  )
}
