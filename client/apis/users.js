import request from 'superagent'

const rootUrl = '/api/v1'

export function getUsers() {
  return request.get(rootUrl + '/users').then((res) => {
    return res.body.users
  })
}

/**
 * @param {string} accessToken
 */
export function getUser(accessToken) {
  return request
    .get(rootUrl + '/user')
    .auth(accessToken, {
      type: 'bearer',
    })
    .then((res) => {
      return res.body
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
