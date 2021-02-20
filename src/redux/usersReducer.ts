import { usersAPI } from '../API/Api'
import { updateObjectInArray } from '../utils/helpers/object-helpers'
import { UserType } from '../types/types'
import { AppStateType } from './redux-store'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number> //array of users ids
}

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: AcionsTypes): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
      }
    case SET_USERS: {
      return { ...state, users: action.users }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count }
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    }
    default:
      return state
  }
}

// actions

type AcionsTypes = followSuccessType | unfollowSuccessType | setUsersType | setCurrentPageType | setTotalUsersCountType | toggleFollowingProgressType | toggleIsFetchingType

type followSuccessType = {
  type: typeof FOLLOW
  userId: number
}

type unfollowSuccessType = {
  type: typeof UNFOLLOW
  userId: number
}

type setUsersType = {
  type: typeof SET_USERS
  users: Array<UserType>
}

type setCurrentPageType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}

type setTotalUsersCountType = {
  type: typeof SET_TOTAL_USERS_COUNT
  count: number
}

type toggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}

type toggleFollowingProgressType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
  isFetching: boolean
  userId: number
}

export const followSuccess = (userId: number): followSuccessType => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId: number): unfollowSuccessType => ({ type: UNFOLLOW, userId })
export const setUsers = (users: Array<UserType>): setUsersType => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage: number): setCurrentPageType => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountType => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching: boolean):toggleIsFetchingType => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching: boolean, userId: number): toggleFollowingProgressType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

// thunks
type GetStateType = () => AppStateType
type DispatchType = Dispatch<AcionsTypes>

export const requestUsers = (currentPage: number, pageSize: number) => {
  return async (dispatch: DispatchType, getState: GetStateType ) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))

    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
  }
}

const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: (userId: number) => followSuccessType | unfollowSuccessType) => {
  dispatch(toggleFollowingProgress(true, userId))
  let response = await apiMethod(userId)
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingProgress(false, userId))
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, AcionsTypes>

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
  }
}

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), unfollowSuccess)
  }
}

export default usersReducer
