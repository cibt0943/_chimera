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
  const className = classNames('tw-btn-group', props.className)

  return (
    <RadioGroup value={props.value} onChange={props.onChange}>
      <div className={className}>{props.children}</div>
    </RadioGroup>
  )
}

export default RadioButtonGroup
