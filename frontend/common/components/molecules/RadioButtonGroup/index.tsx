import { VFC } from 'react'
import { RadioGroup, RadioGroupProps } from '@chakra-ui/react'

type RadioButtonGroupProps = RadioGroupProps

export const RadioButtonGroup: VFC<RadioButtonGroupProps> = (props) => {
  const { children, ...radioButtonGroupProps } = props

  return <RadioGroup {...radioButtonGroupProps}>{children}</RadioGroup>
}
