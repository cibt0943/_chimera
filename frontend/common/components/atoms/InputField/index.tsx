import { VFC, InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import classNames from 'classnames'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  register: UseFormRegisterReturn
  labelText?: string
}
type LabelProps = Pick<InputFieldProps, 'name' | 'labelText'>

const Label: VFC<LabelProps> = (props) => {
  const { name, labelText } = props

  if (!labelText) {
    return null
  }

  return (
    <label htmlFor={name} className="tw-label">
      <span className="tw-label-text">{labelText}</span>
    </label>
  )
}

const InputField: VFC<InputFieldProps> = (props) => {
  const { register, labelText, type = 'text', className, ...inputProps } = props

  return (
    <div className="tw-form-control">
      <Label name={register.name} labelText={labelText} />
      <input type={type} id={register.name} {...register} {...inputProps} className={classNames('tw-input tw-input-bordered', className)} />
    </div>
  )
}

export default InputField
