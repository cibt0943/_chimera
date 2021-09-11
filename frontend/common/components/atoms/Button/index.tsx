import { VFC, MouseEvent, ReactNode } from 'react'
import classNames from 'classnames'

type ButtonProps = {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  className?: string
  onClick?: (event: MouseEvent<HTMLElement>) => void
  form?: string
}

export const Button: VFC<ButtonProps> = (props) => {
  const { children, className, ...buttonProps } = props

  return (
    <button className={classNames('tw-btn', className)} {...buttonProps}>
      {children}
    </button>
  )
}
