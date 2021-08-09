import { VFC, ReactNode, ElementType, Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import classNames from 'classnames'

type ModalProps = {
  show: boolean
  onClose: () => void
  children: ReactNode
}

type ModalTitleProps = {
  children: ReactNode
  as?: ElementType
  className?: string
}

type ModalActionProps = {
  children: ReactNode
  className?: string
}

const Modal: VFC<ModalProps> = (props) => {
  const { show, onClose, children } = props

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog static className="tw-fixed tw-z-10 tw-inset-0 tw-overflow-y-auto" initialFocus={cancelButtonRef} onClose={onClose}>
        <div className="tw-flex tw-items-center tw-justify-center tw-min-h-screen tw-transform tw-transition-all">
          <Transition.Child as={Fragment} enter="tw-ease-out tw-duration-300" enterFrom="tw-opacity-0" enterTo="tw-opacity-100" leave="tw-ease-in tw-duration-200" leaveFrom="tw-opacity-100" leaveTo="tw-opacity-0">
            <Dialog.Overlay className="tw-fixed tw-inset-0 tw-bg-gray-500 tw-bg-opacity-75 tw-transition-opacity" />
          </Transition.Child>
          {/* <span className="sm:tw-inline-block sm:tw-align-middle sm:tw-h-screen" aria-hidden="true">
            &#8203;
          </span> */}
          <Transition.Child as={Fragment} enter="tw-ease-out tw-duration-300" enterFrom="tw-opacity-0 tw-translate-y-4 sm:tw-translate-y-0 sm:tw-scale-95" enterTo="tw-opacity-100 tw-translate-y-0 sm:tw-scale-100" leave="tw-ease-in tw-duration-200" leaveFrom="tw-opacity-100 tw-translate-y-0 sm:tw-scale-100" leaveTo="tw-opacity-0 tw-translate-y-4 sm:tw-translate-y-0 sm:tw-scale-95">
            <div className="tw-inline-block tw-bg-base-100 tw-rounded-lg tw-shadow-xl tw-transform tw-transition-all tw-m-8 tw-w-full sm:tw-max-w-lg">
              <div className="tw-p-6">{children}</div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal

export const ModalTitle: VFC<ModalTitleProps> = (props) => {
  const { as = 'h3', className = '', children } = props

  return (
    <Dialog.Title as={as} className={classNames('tw-text-lg tw-font-medium tw-mb-6', className)}>
      {children}
    </Dialog.Title>
  )
}

export const ModalAction: VFC<ModalActionProps> = (props) => {
  const { className = '', children } = props

  return <div className={classNames('tw-flex tw-justify-end tw-mt-6', className)}>{children}</div>
}
