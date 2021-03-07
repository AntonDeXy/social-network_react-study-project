import React from 'react'
import { useSelector } from 'react-redux'
import { Users } from './Users'
import Preloader from '../preloader'
import { getIsFetching } from '../../redux/usersSelectors'

type UsersPagePropsType = {
  pageTitle: string
}

export const UsersPage: React.FC<UsersPagePropsType> = (props) => {
  const isFetching = useSelector(getIsFetching)

  return (
    <div className='content Users'>
      <h2>{props.pageTitle}</h2>
      {isFetching ? <Preloader /> : null}
      <Users />
    </div>
  )
}