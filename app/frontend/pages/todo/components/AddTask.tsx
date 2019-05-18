import * as React from 'react'

interface IProps {
  onSubmit: (text: string) => void
}

interface IState {
  text: string
}

export default class AddTask extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      text: '',
    }
  }

  private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    this.setState({
      text: event.target.value,
    })
  }

  private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const text = this.state.text.trim()
    if (text === '') return
    this.props.onSubmit(text)
    this.setState({ text: '' })
  }

  public render() {
    return (
      <div>
        <form
          onSubmit={e => {
            this.handleSubmit(e)
          }}
        >
          <input
            onChange={e => {
              this.handleChange(e)
            }}
            value={this.state.text}
          />
          <button type={'submit'}>Add Todo</button>
        </form>
      </div>
    )
  }
}
