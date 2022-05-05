import { SET_WAITING, UNSET_WAITING } from '../actions/waiting'

const reducer = (state = false, action) => {
  switch (action.type) {
    case SET_WAITING:
      return true
    case UNSET_WAITING:
      return false  
    default:
      return state  
  }
}

export default reducer