import { VFC } from 'react'
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react'

export const Button: VFC<ButtonProps> = (props) => {
  const { children, colorScheme = 'blue', ...buttonProps } = props

  return (
    <ChakraButton colorScheme={colorScheme} {...buttonProps}>
      {children}
    </ChakraButton>
  )
}
