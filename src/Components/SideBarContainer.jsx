// import React from 'react'
import SideBar from './SideBar'
import { connect } from 'react-redux'
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    friends: state.profileReducer.friends
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(SideBar)