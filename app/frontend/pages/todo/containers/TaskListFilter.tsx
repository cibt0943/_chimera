import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { ITodoAction, setVisibilityFilter } from '../actions'
import { ITodoState } from '../types'
import Link from '../components/Link'

interface OwnProps {
  filter: string
}

const mapStateToProps = (state: ITodoState, ownProps: OwnProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<ITodoAction>, ownProps: OwnProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter({ filter: ownProps.filter }))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link)
