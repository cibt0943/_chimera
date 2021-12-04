import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import MUITextField, { TextFieldProps as MUITextFieldProps } from '@mui/material/TextField'

type TextFieldProps = MUITextFieldProps & {
  register: UseFormRegisterReturn
}

export const TextField: React.VFC<TextFieldProps> = (props) => {
  const { size = 'medium', register, ...inputProps } = props

  return <MUITextField size={size} id={register.name} {...register} {...inputProps} />
}
