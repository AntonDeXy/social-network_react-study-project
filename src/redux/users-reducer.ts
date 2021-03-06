import { usersAPI } from '../API/users-api'
import { updateObjectInArray } from '../utils/helpers/object-helpers'
import { UserType } from '../types/types'
import { AppStateType, BaseThunkType, InferActionsTypes } from './redux-store'
import { Dispatch } from 'redux'
import { APIResponseType } from '../API/Api'

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, //array of users ids
  filter: {
    term: '',
    friend: null as null | boolean
  }
}

const usersReducer = (state = initialState, action: AcionsTypes): InitialStateType => {
  switch (action.type) {
    case 'SN/users/FOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
      }

    case 'SN/users/UNFOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
      }
    case 'SN/users/SET_USERS': {
      return { ...state, users: action.users }
    }
    case 'SN/users/SET_CURRENT_PAGE': {
      return { ...state, currentPage: action.currentPage }
    }
    case 'SN/users/SET_TOTAL_USERS_COUNT': {
      return { ...state, totalUsersCount: action.count }
    }
    case 'SN/users/TOGGLE_IS_FETCHING': {
      return { ...state, isFetching: action.isFetching }
    }
    case 'SN/users/TOGGLE_IS_FOLLOWING_PROGRESS': {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    }
    case 'SN/users/SET_FILTER': {
      return {...state, filter: action.payload}
    }
    default:
      return state
  }
}

export const actions = {
  followSuccess: (userId: number) => ({ type: 'SN/users/FOLLOW', userId } as const),
  unfollowSuccess: (userId: number) => ({ type: 'SN/users/UNFOLLOW', userId } as const),
  setUsers: (users: Array<UserType>) => ({ type: 'SN/users/SET_USERS', users } as const),
  setCurrentPage: (currentPage: number) => ({ type: 'SN/users/SET_CURRENT_PAGE', currentPage } as const),
  setTotalUsersCount: (totalUsersCount: number) => ({ type: 'SN/users/SET_TOTAL_USERS_COUNT', count: totalUsersCount } as const),
  toggleIsFetching: (isFetching: boolean) => ({ type: 'SN/users/TOGGLE_IS_FETCHING', isFetching } as const),
  toggleFollowingProgress: (isFetching: boolean, userId: number) => ({ type: 'SN/users/TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId } as const),
  setFilter: (filter: FilterType) => ({type: 'SN/users/SET_FILTER', payload: filter } as const)
}

export const requestUsers = (currentPage: number, pageSize: number, filter: FilterType): ThunkType => {
  return async (dispatch: DispatchType, getState: GetStateType) => {
    dispatch(actions.toggleIsFetching(true))
    dispatch(actions.setCurrentPage(currentPage))
    dispatch(actions.setFilter(filter))

    const data = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend)
    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setUsers(data.items))
    dispatch(actions.setTotalUsersCount(data.totalCount))
  }
}

const _followUnfollowFlow = async (
  dispatch: DispatchType, userId: number, 
  apiMethod: (userId: number) => Promise<APIResponseType>, 
  actionCreator: (userId: number) => AcionsTypes
) => {
  dispatch(actions.toggleFollowingProgress(true, userId))
  const response = await apiMethod(userId)

  if (response.resultCode === 0) {
    dispatch(actionCreator(userId))
  }

  dispatch(actions.toggleFollowingProgress(false, userId))
}


export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess)
  }
}

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess)
  }
}

export default usersReducer

// types
type GetStateType = () => AppStateType
type DispatchType = Dispatch<AcionsTypes>
type ThunkType = BaseThunkType<AcionsTypes>
type AcionsTypes = InferActionsTypes<typeof actions>
export type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter