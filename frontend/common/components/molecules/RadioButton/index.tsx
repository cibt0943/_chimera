import { VFC, ReactNode } from 'react'
import { RadioGroup } from '@headlessui/react'
import classNames from 'classnames'

type Props = {
  value: string
  children: ReactNode
  className?: string
}

const RadioButton: VFC<Props> = (props) => {
  return (
    // render propsとなっている。
    <RadioGroup.Option
      value={props.value}
      className={({ checked }) => {
        return classNames('tw-btn', props.className, { 'tw-btn-active': checked })
      }}
    >
      <span>{props.children}</span>
    </RadioGroup.Option>
  )
}

export default RadioButton
