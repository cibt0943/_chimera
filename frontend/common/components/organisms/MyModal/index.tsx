import { VFC } from 'react'
import Dialog, { DialogProps } from '@material-ui/core/Dialog'

export type MyDialogProps = DialogProps

const MyModal: VFC<MyDialogProps> = (props) => {
  const dialogProps: MyDialogProps = {
    ...props,
  }

  return <Dialog {...dialogProps}>{dialogProps.children}</Dialog>
}

export default MyModal
