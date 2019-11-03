import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import { ITodoState } from '../types'
import Link from '../components/Link'

interface OwnProps {
  filter: string
  children: React.ReactNode
}

const mapStateToProps = (state: ITodoState, ownProps: OwnProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps) => {
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
