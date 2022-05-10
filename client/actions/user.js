import { getUser, getUsers } from '../apis/users'
import { isNotWaiting, isWaiting } from './waiting'

export const SET_USER = 'SET_USER'
export const SET_USERS = 'SET_USERS'
export const CLEAR_USER = 'CLEAR_USER'
export const CLEAR_USERS = 'CLEAR_USERS'

export function setUser(user) {
  return {
    type: SET_USER,
    user,
  }
}

export function setUsers(users) {
  return {
    type: SET_USERS,
    users,
  }
}

export function clearUser() {
  return {
    type: CLEAR_USER,
  }
}

export function clearUsers() {
  return {
    type: CLEAR_USERS,
  }
}

export function fetchUsers() {
  return (dispatch) => {
    return getUsers().then((users) => {
      dispatch(setUsers(users))
      return null
    })
  }
}

export function fetchUser(token) {
  return (dispatch) => {
    dispatch(isWaiting())
    return getUser(token)
      .then((user) => {
        dispatch(setUser(user))
        // dispatch(isNotWaiting())
        return null
      })
      .catch((error) => {
        console.log(error)
        // set error state...
      })
      .finally(() => {
        dispatch(isNotWaiting())
      })
  }
}
