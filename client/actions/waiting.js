export const SET_WAITING = 'SET_WAITING'
export const UNSET_WAITING = 'SET_WAITING'

export function isWaiting() {
  return {
    type: SET_WAITING,
  }
}

export function isNotWaiting() {
  return {
    type: UNSET_WAITING,
  }
}