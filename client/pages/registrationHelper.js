import { getCategories } from '../apis/categories'
import { getUser, addUser } from '../apis/users'

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

export async function saveUser(user, token, redirect) {
  try {
    // dispatch waiting
    await addUser(user, token)
    redirect('/myprofile')
    return null
  } catch (error) {
    console.log(error)
    return 'Could not save the user. Please contact an administrator' //should be error state
  }
  // finally dispatch not waiting
}

// export async function fetchUserDetails(
//   user,
//   setUser,
//   learn,
//   setLearn,
//   teach,
//   setTeach,
//   token
// ) {
//   try {
//     // dispatch waiting
//     const details = await getUser(token)
//     setUser({...user, details.firstName, details.lastName, username, email, about})
//   } catch (err) {
//     console.log('fetchCategories ERROR')
//     console.log(err)
//   }
// }
