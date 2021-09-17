import { VFC, ReactNode, Fragment } from 'react'
// import { RadioGroup } from '@headlessui/react'
// import classNames from 'classnames'

type RadioButtonGroupProps = {
  value: string
  onChange: (value: any) => void
  children: ReactNode
  className?: string
}

export const RadioButtonGroup: VFC<RadioButtonGroupProps> = (props) => {
  const { value, onChange, children, className } = props

  return <Fragment></Fragment>
  // return (
  //   <RadioGroup value={value} onChange={onChange} className={classNames('tw-btn-group', className)}>
  //     { children }
  //   </RadioGroup>
  // )
}
