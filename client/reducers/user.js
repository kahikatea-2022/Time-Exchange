import { SET_USER, CLEAR_USER } from '../actions/user'

const emptyUser = {
  id: null,
  auth0Id: '',
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  about: '',
  skills: [],
  token: '',
  picture: '', //not used in db
}

export default function user(state = emptyUser, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.user }

    case CLEAR_USER:
      return emptyUser

    default:
      return state
  }
}
