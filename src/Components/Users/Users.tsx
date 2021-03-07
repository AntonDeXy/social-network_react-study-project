import React, { FC, useEffect } from 'react'
import Paginator from '../common/Paginator'
import User from './User'
import UserSearchForm from './users-search-form'
import { FilterType, follow, requestUsers, unfollow } from '../../redux/users-reducer'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsers, getUsersFilter } from '../../redux/usersSelectors'
import { useHistory } from 'react-router'
import * as queryString from 'querystring'

type PropsType = {}

export const Users:FC<PropsType> = () => {
  const users = useSelector(getUsers)
  const totalUsersCount = useSelector(getTotalUsersCount)
  const currentPage = useSelector(getCurrentPage)
  const pageSize = useSelector(getPageSize)
  const filter = useSelector(getUsersFilter)
  const followingInProgress = useSelector(getFollowingInProgress)

  const dispatch = useDispatch()
  const histrory = useHistory()

  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter))
  }

  const onFilterChanged = (filters: FilterType) => {
    dispatch(requestUsers(1, pageSize, filters))
  }

  const handleFollow = (userId: number) => {
    dispatch(follow(userId))
  }

  const handleUnfollow = (userId: number) => {
    dispatch(unfollow(userId))
  }

  useEffect(() => {
    const parsed: QueryStringParamsType  = queryString.parse(histrory.location.search.substr(1))

    let actualPage = currentPage
    let actualFilter = filter

    if (!!parsed.page) actualPage = Number(parsed.page)

    if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term}

    if (!!parsed.friend) actualFilter = {...actualFilter, friend: parsed.friend === 'null' ? null : parsed.friend === 'true' ? true : false}

    
    dispatch(requestUsers(actualPage, pageSize, actualFilter))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const query:QueryStringParamsType = {}

    if(!!filter.term) query.term = filter.term
    if(!!filter.friend) query.friend = String(filter.friend)
    if(currentPage > 1) query.page = String(currentPage)

    histrory.push({
      pathname: '/users',
      search: queryString.stringify(query)
    })
  }, [currentPage, filter, histrory])

  return (
    <div className='User'>
      <UserSearchForm onFilterChanged={onFilterChanged} />
      <Paginator 
        currentPage={currentPage} onPageChanged={onPageChanged} 
        pageSize={pageSize} totalItemsCount={totalUsersCount} 
      />
      {users.map(u =>
        <User user={u} 
        followingInProgress={followingInProgress} 
        key={u.id} 
        unfollow={handleFollow} 
        follow={handleUnfollow} 
        />
      )}
    </div>
  )
}

type QueryStringParamsType = {
  term?: string
  page?: string
  friend?: string
}
