import store from '../store'
import { isNotWaiting, isWaiting } from '../actions/waiting'
import { getProfile } from '../apis/users'

export async function retrieveUsers(id, setUsers, setError) {
  try {
    store.dispatch(isWaiting())
    const user = await getProfile(id)
    setUsers(user)
    setError('')
  } catch (err) {
    console.log(err)
    setError(err.message)
  } finally {
    store.dispatch(isNotWaiting())
  }
}
