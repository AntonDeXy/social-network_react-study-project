import React, { ComponentType } from 'react'
import { connect } from 'react-redux';
import { unfollow, follow, FilterType } from '../../redux/users-reducer'
import Users from './Users'
import Preloader from '../preloader' 
import { requestUsers } from '../../redux/users-reducer'
import { getUsers,getPageSize, getCurrentPage,getTotalUsersCount,getIsFetching, getFollowingInProgress, getUsersFilter } from '../../redux/usersSelectors'
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
  filter: FilterType
  // userPhoto: string
}

type MapDispatchProps = {
  unfollow: (userId: number) => void
  follow: (userId: number) => void
  getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
}

type OwnProps = {
  pageTitle: string
}

type Props = MapDispatchProps & MapStateProps & OwnProps

class UsersContainer extends React.Component<Props>{
  componentDidMount() {
    const {currentPage, pageSize, filter} = this.props
    this.props.getUsers(currentPage, pageSize, filter)
  }

  onPageChanged = (pageNumber:number) => {
    const {pageSize, filter} = this.props
    this.props.getUsers(pageNumber, pageSize, filter)
  }

  onFilterChanged = (filter: FilterType) => {
    const {pageSize} = this.props
    this.props.getUsers(1, pageSize, filter)
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
        onFilterChanged = {this.onFilterChanged}
        users = {this.props.users}
        unfollow = {this.props.unfollow}
        follow = {this.props.follow}
        followingInProgress={this.props.followingInProgress}
        
      /> 
    </div>
  )}
} 

const mapStateToProps = (state: AppStateType): MapStateProps => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    filter: getUsersFilter(state)
  }
}

export default compose<ComponentType>(
  withAuthRedirect,
  connect<MapStateProps, MapDispatchProps, OwnProps, AppStateType>(
    mapStateToProps, {follow, unfollow, getUsers: requestUsers})
)(UsersContainer)