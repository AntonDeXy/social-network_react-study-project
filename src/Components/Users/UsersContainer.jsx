import React from 'react'
import { connect } from 'react-redux';
import { unfollow, follow, setCurrentPage } from '../../redux/usersReduces';
import Users from './Users'
import Preloader from '../preloader' 
import { toggleFollowingProgress, requestUsers } from './../../redux/usersReduces';
import { getUsers,getPageSize, getCurrentPage,getTotalUsersCount,getIsFetching, getFollowingInProgress } from './../../redux/usersSelectors';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component{
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize)
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

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersReducer.users,
//     pageSize: state.usersReducer.pageSize,
//     totalUsersCount: state.usersReducer.totalUsersCount,
//     currentPage: state.usersReducer.currentPage,
//     isFetching: state.usersReducer.isFetching,
//     followingInProgress: state.usersReducer.followingInProgress
//   }
// }

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