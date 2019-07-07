export interface IModal {
  id: number
  visible: boolean
}

export interface IModalListHash {
  [key: number]: IModal
}

/* stateの型を定義する。 */
export interface IModalState {
  modalListHash: IModalListHash
}
