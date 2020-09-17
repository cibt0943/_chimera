export interface Modal {
  id: string
  visible: boolean
}

export interface ModalListHash {
  [key: string]: Modal
}

/* stateの型を定義する。 */
export interface ModalState {
  modalListHash: ModalListHash
}
