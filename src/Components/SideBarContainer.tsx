import SideBar from './SideBar'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { AppStateType } from '../redux/redux-store'

const mapStateToProps = (state: AppStateType) => {
  return {
    friends: state.profileReducer.friends
  }
}

export default compose(
  connect(mapStateToProps, {})
)(SideBar)