import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import { ITodoState } from '../types'
import Link, { IStateByProps, IDispatchByProps } from '../components/Link'

interface IOwnProps {
  filter: string
  children: React.ReactNode
}

const mapStateToProps = (state: ITodoState, ownProps: IOwnProps): IStateByProps => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IOwnProps): IDispatchByProps => {
  return {
    onClick: (): void => {
      dispatch(setVisibilityFilter({ filter: ownProps.filter }))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Link)
