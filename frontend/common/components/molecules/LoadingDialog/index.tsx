import { VFC } from 'react'
import './style'

const LoadingDialog: VFC = () => {
  const circleCommonClasses = 'tw-h-3 tw-w-3 tw-bg-current tw-rounded-full'

  return (
    <div className="loding-dialog tw-fixed tw-z-50 tw-inset-0 tw-overflow-hidden">
      <div className="tw-flex tw-items-center tw-justify-center tw-min-h-screen">
        <div className={`${circleCommonClasses} tw-mr-1 tw-animate-bounce circle1`}></div>
        <div className={`${circleCommonClasses} tw-mr-1 tw-animate-bounce circle2`}></div>
        <div className={`${circleCommonClasses} tw-animate-bounce circle3`}></div>
      </div>
    </div>
  )
}

export default LoadingDialog
