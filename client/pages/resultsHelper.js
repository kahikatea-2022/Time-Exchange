import store from '../store'
import { isNotWaiting, isWaiting } from '../actions/waiting'
import { getUsers } from '../apis/users'

export async function retrieveUsers(userToken, myUsername, setUsers, setError) {
  try {
    store.dispatch(isWaiting())
    const users = await getUsers(userToken)
    setUsers(users.users.filter((user) => user.username !== myUsername))
    setError('')
  } catch (err) {
    console.log(err)
    setError(err.message)
  } finally {
    store.dispatch(isNotWaiting())
  }
}
