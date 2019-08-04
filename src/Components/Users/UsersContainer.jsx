import React from 'react'
import { connect } from 'react-redux';
import { setUsers, unfollow, follow, setCurrentPage, setTotalUsersCount, toggleIsFetching} from '../../redux/usersReduces';
import Users from './Users'
import Preloader from '../preloader' 
import { usersAPI } from './../../API/Api'

class UsersContainer extends React.Component{
  componentDidMount() {
    this.props.toggleIsFetching(true)
    
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(data.items)
      this.props.setTotalUsersCount(data.totalCount)
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(data.items)
    })
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
        isFetching = {this.isFetching}
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
    isFetching: state.usersReducer.isFetching
  }
}

export default connect(mapStateToProps, 
  {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer)