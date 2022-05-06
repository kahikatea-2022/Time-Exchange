import { setUser } from './actions/user'
import { getUser } from './apis/users'
import store from './store'

const emptyUser = {
  about: '',
  auth0Id: '',
  email: '',
  firstName: '',
  id: -1,
  lastName: '',
  skills: [],
  username: '',
}

function saveUser(user = emptyUser) {
  store.dispatch(setUser(user))
}

export async function cacheUser(useAuth0) {
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()
  if (isAuthenticated) {
    try {
      const token = await getAccessTokenSilently()

      const apiUser = await getUser(token)

      saveUser({ ...apiUser, picture: user.picture })
    } catch (err) {
      console.error(err)
    }
  } else {
    saveUser()
  }
}

export function getLoginFn(useAuth0) {
  const { loginWithRedirect } = useAuth0()
  const redirectUri = `${window.location.origin}/myprofile`
  return () =>
    loginWithRedirect({
      redirectUri,
      screen_hint: 'signin',
      scope: 'role:member',
    })
  //return useAuth0().loginWithRedirect
}

export function getLogoutFn(useAuth0) {
  return useAuth0().logout
}

export function getIsAuthenticated(useAuth0) {
  return useAuth0().isAuthenticated
}

export function getRegisterFn(useAuth0) {
  const { loginWithRedirect } = useAuth0()
  const redirectUri = `${window.location.origin}/registration`
  return () =>
    loginWithRedirect({
      redirectUri,
      screen_hint: 'signin',
      scope: 'role:member',
    })
}
