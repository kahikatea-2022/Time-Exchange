import { fetchUser } from '../actions/user'
import { getCategories } from '../apis/categories'
import { addUser, updateUser } from '../apis/users'
import store from '../store'

export async function fetchCategories(setCategories) {
  try {
    // dispatch waiting
    const categories = await getCategories()
    setCategories(categories)
  } catch (err) {
    console.log('fetchCategories ERROR')
    console.log(err)
  }
  // finally dispatch not waiting
}

export async function saveUser(user, token, redirect, update) {
  try {
    // dispatch waiting
    update ? updateUser(user, token) : await addUser(user, token)
    store.dispatch(fetchUser(token))
    redirect('/myprofile')
    return null
  } catch (error) {
    console.log(error)
    return 'Could not save the user. Please contact an administrator' //should be error state
  }
  // finally dispatch not waiting
}
