import React, { FC } from 'react'
import Paginator from '../common/Paginator'
import User from './User'
import { UserType } from '../../types/types'
import UserSearchForm from './users-search-form'
import { FilterType } from '../../redux/users-reducer'

type Props = {
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  onFilterChanged: (filter: FilterType) => void
  totalUsersCount: number
  pageSize: number
  users: Array<UserType>
  followingInProgress: Array<number>
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}

const Users:FC<Props> = ({ currentPage, onPageChanged, onFilterChanged, totalUsersCount, pageSize, users, ...props }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize)
  let pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div className='User'>
      <UserSearchForm onFilterChanged={onFilterChanged} />
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