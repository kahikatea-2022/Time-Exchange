import request from 'superagent'

const rootUrl = '/api/v1'

export function getUsers() {
  return request.get(rootUrl + '/users').then((res) => {
    return res.body.users
  })
}

export function getUser(token) {
  return request
    .get(rootUrl + '/user')
    .set('authorization', `Bearer ${token}`)
    .set({ Accept: 'application/json' })
    .then((res) => res.body)
    .catch((err) => {
      const errMessage = err.response?.body?.error?.title
      throw new Error(errMessage || err.message)
    })
}

export function addUser(user) {
  return request.post(rootUrl + '/users').send(user)
}

export function getUserRoles(id) {
  return request.get(`${rootUrl}/users/${id}`).then((res) => {
    return res.body.roles
  })
}
