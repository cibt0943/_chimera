import { VFC, ReactNode } from 'react'
import { RadioGroup } from '@headlessui/react'
import classNames from 'classnames'

type Props = {
  value: string
  children: ReactNode
  className?: string
}

const RadioButton: VFC<Props> = (props) => {
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

export default RadioButton
