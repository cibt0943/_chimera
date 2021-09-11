import { VFC, ReactNode } from 'react'
import { RadioGroup } from '@headlessui/react'
import classNames from 'classnames'

type Props = {
  value: string
  onChange: (value: any) => void
  children: ReactNode
  className?: string
}

const RadioButtonGroup: VFC<Props> = (props) => {
  const { value, onChange, children, className } = props

  return (
    <RadioGroup value={value} onChange={onChange} className={classNames('tw-btn-group', className)}>
      {children}
    </RadioGroup>
  )
}

export default RadioButtonGroup
