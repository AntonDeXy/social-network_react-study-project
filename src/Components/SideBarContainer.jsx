// import React from 'react'
import SideBar from './SideBar'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    friends: state.profileReducer.friends
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
  }
}

const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar)

export default SideBarContainer