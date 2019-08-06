export interface IModal {
  id: string
  visible: boolean
}

export interface IModalListHash {
  [key: string]: IModal
}

/* stateの型を定義する。 */
export interface IModalState {
  modalListHash: IModalListHash
}
