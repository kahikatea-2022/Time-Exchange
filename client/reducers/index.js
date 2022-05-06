import { combineReducers } from 'redux'

import users from './users'
import user from './user'
import waiting from './waiting'

export default combineReducers({
  users,
  user,
  waiting,
})
