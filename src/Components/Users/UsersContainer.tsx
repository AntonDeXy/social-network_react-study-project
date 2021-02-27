import React, { ComponentType } from 'react'
import { connect } from 'react-redux';
import { unfollow, follow } from '../../redux/usersReducer'
import Users from './Users'
import Preloader from '../preloader' 
import { requestUsers } from '../../redux/usersReducer'
import { getUsers,getPageSize, getCurrentPage,getTotalUsersCount,getIsFetching, getFollowingInProgress } from '../../redux/usersSelectors'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { UserType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';

type MapStateProps = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  users: Array<UserType>
  followingInProgress: Array<number>
  // userPhoto: string
}

type MapDispatchProps = {
  unfollow: (userId: number) => void
  follow: (userId: number) => void
  getUsers: (currentPage: number, pageSize: number) => void
}

type OwnProps = {
  pageTitle: string
}

type Props = MapDispatchProps & MapStateProps & OwnProps

class UsersContainer extends React.Component<Props>{
  componentDidMount() {
    let {currentPage, pageSize} = this.props
    this.props.getUsers(currentPage, pageSize)
  }

  onPageChanged = (pageNumber:number) => {
    let {pageSize} = this.props
    this.props.getUsers(pageNumber, pageSize)
  }

  render() {
    return (
    <div className='content Users'>
      <h2>{this.props.pageTitle}</h2>
      {this.props.isFetching ? <Preloader /> : null }
      <Users 
        totalUsersCount = {this.props.totalUsersCount}
        pageSize = {this.props.pageSize}
        currentPage = {this.props.currentPage}
        // userPhoto = {this.props.userPhoto}
        onPageChanged = {this.onPageChanged}
        users = {this.props.users}
        unfollow = {this.props.unfollow}
        follow = {this.props.follow}
        followingInProgress={this.props.followingInProgress}
        
      /> 
    </div>
  )}
} 

let mapStateToProps = (state: AppStateType): MapStateProps => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}


export default compose<ComponentType>(
  withAuthRedirect,
  connect<MapStateProps, MapDispatchProps, OwnProps, AppStateType>(
    mapStateToProps, {follow, unfollow, getUsers: requestUsers})
)(UsersContainer)