import { VFC, ReactNode } from 'react'
import { RadioGroup } from '@headlessui/react'
import classNames from 'classnames'

type RadioButtonProps = {
  value: string
  children: ReactNode
  className?: string
}

export const RadioButton: VFC<RadioButtonProps> = (props) => {
  const { value, children, className } = props

  return (
    // render propsとなっている。
    <RadioGroup.Option
      value={value}
      className={({ checked }) => {
        return classNames('tw-btn', className, { 'tw-btn-active': checked })
      }}
    >
      <span>{children}</span>
    </RadioGroup.Option>
  )
}
