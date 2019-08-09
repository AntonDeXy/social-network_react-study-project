import React from 'react'
import { connect } from 'react-redux';
import { unfollow, follow, setCurrentPage } from '../../redux/usersReduces';
import Users from './Users'
import Preloader from '../preloader' 
import { toggleFollowingProgress, getUsers } from './../../redux/usersReduces';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersContainer extends React.Component{
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
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
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching,
    followingInProgress: state.usersReducer.followingInProgress
  }
}

let AuthRedirectComponent = withAuthRedirect(UsersContainer)

export default connect(mapStateToProps, 
  {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers})(AuthRedirectComponent)