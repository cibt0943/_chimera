import { VFC } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { Input, InputProps } from '@chakra-ui/react'

type InputFieldProps = InputProps & {
  register: UseFormRegisterReturn
}

export const InputField: VFC<InputFieldProps> = (props) => {
  const { type = 'text', size = 'md', register, ...inputProps } = props

  return <Input type={type} size={size} id={register.name} {...register} {...inputProps} />
}
