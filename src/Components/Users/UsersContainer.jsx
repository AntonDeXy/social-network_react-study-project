import React from 'react'
import { connect } from 'react-redux';
import { unfollow, follow, setCurrentPage } from '../../redux/usersReduces'
import Users from './Users'
import Preloader from '../preloader' 
import { toggleFollowingProgress, requestUsers } from './../../redux/usersReduces'
import { getUsers,getPageSize, getCurrentPage,getTotalUsersCount,getIsFetching, getFollowingInProgress } from './../../redux/usersSelectors'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class UsersContainer extends React.Component{
  componentDidMount() {
    let {currentPage, pageSize} = this.props
    this.props.requestUsers(currentPage, pageSize)
  }

  onPageChanged = (pageNumber) => {
    let {pageSize} = this.props
    this.props.requestUsers(pageNumber, pageSize)
  }

  render() {
    return (
    <div className='content Users'>
      {this.props.isFetching ? <Preloader /> : null }
      <Users 
        totalUsersCount = {this.props.totalUsersCount}
        pageSize = {this.props.pageSize}
        currentPage = {this.props.currentPage}
        userPhoto = {this.props.userPhoto}
        onPageChanged = {this.onPageChanged}
        users = {this.props.users}
        unfollow = {this.props.unfollow}
        follow = {this.props.follow}
        followingInProgress={this.props.followingInProgress}
      /> 
    </div>
  )}
} 

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}


export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers})
)(UsersContainer)