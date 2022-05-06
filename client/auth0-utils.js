import { setUser } from './actions/user'
import { getUserRoles } from './apis/users'
import store from './store'

const tempFakeData = {
  about: 'about me...',
  skills: [
    {
      id: 3,
      category: 'Sports',
      skill: 'skateboarding',
      role: 'learn',
    },
    {
      id: 4,
      category: 'Arts and Crafts',
      skill: 'oil painting',
      role: 'teach',
    },
  ],
}
const emptyUser = {
  auth0Id: '',
  email: '',
  name: '',
  token: '',
  roles: [],
  ...tempFakeData,
}

function saveUser(user = emptyUser) {
  store.dispatch(setUser(user))
}

export async function cacheUser(useAuth0) {
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()
  if (isAuthenticated) {
    try {
      const token = await getAccessTokenSilently()
      const roles = await getUserRoles(user.sub)
      const userToSave = {
        auth0Id: user.sub,
        email: user.email,
        name: user.nickname,
        token,
        roles,
        ...tempFakeData,
      }
      saveUser(userToSave)
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
