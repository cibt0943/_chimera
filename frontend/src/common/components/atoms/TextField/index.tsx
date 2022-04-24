import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import {
  TextField as MUITextField,
  TextFieldProps as MUITextFieldProps,
} from '@mui/material'

type TextFieldProps = MUITextFieldProps & {
  register?: UseFormRegisterReturn
}

export const TextField: React.VFC<TextFieldProps> = (props) => {
  const {
    size = 'medium',
    variant = 'outlined',
    margin = 'normal',
    register,
    ...inputProps
  } = props

  return (
    <MUITextField
      size={size}
      variant={variant}
      margin={margin}
      {...register}
      {...inputProps}
    />
  )
}
