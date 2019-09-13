import React from 'react'
import Paginator from '../common/Paginator';
import User from './User';

const Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div className='User'>
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize} totalItemsCount={totalUsersCount} />
      {users.map(u =>
        <User user={u} 
        followingInProgress={props.followingInProgress} 
        key={u.id} 
        unfollow={props.unfollow} 
        follow={props.follow} 
        />
      )}
    </div>
  )
}
export default Users