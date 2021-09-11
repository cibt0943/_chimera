import { VFC, MouseEvent, ReactNode } from 'react'
import classNames from 'classnames'

type Props = {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  className?: string
  onClick?: (event: MouseEvent<HTMLElement>) => void
  form?: string
}

const Button: VFC<Props> = (props) => {
  const { children, className, ...buttonProps } = props

  return (
    <button className={classNames('tw-btn', className)} {...buttonProps}>
      {children}
    </button>
  )
}

export default Button
