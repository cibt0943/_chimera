import { VFC } from 'react'

const LoadingPlaceholder: VFC = () => {
  return (
    <div className="tw-w-full tw-flex tw-items-center tw-flex-col">
      <div className="tw-flex tw-shadow-md tw-p-4 tw-rounded-md">
        <div className="tw-flex tw-flex-col tw-justify-between">
          <div data-placeholder className="tw-h-5 tw-w-full tw-mb-5 tw-rounded-full tw-overflow-hidden tw-relative tw-bg-base-200"></div>
          <div data-placeholder className="tw-h-5 tw-w-full tw-mb-5 tw-rounded-full tw-overflow-hidden tw-relative tw-bg-base-200"></div>
          <div data-placeholder className="tw-h-5 tw-w-full tw-mb-5 tw-rounded-full tw-overflow-hidden tw-relative tw-bg-base-200"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingPlaceholder
