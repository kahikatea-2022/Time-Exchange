import request from 'superagent'

const rootUrl = '/api/v1'

export function getUsers(token) {
  return request
    .get(rootUrl + '/users')
    .set('authorization', `Bearer ${token}`)
    .set({ Accept: 'application/json' })
    .then((res) => res.body)
    .catch((err) => {
      const errMessage = err.response?.body?.error?.title
      throw new Error(errMessage || err.message)
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

export function addUser(user, token) {
  return request
    .post(rootUrl + '/user')
    .set('authorization', `Bearer ${token}`)
    .set({ Accept: 'application/json' })
    .send(user)
    .then((res) => res.body)
    .catch((err) => {
      const errMessage = err.response?.body?.error?.title
      throw new Error(errMessage || err.message)
    })
}

export function updateUser(user, token) {
  return (
    request
      .put(rootUrl + '/user')
      .set('authorization', `Bearer ${token}`)
      .set({ Accept: 'application/json' })
      .send(user)
      // .then((res) => res.body)
      .catch((err) => {
        const errMessage = err.response?.body?.error?.title
        throw new Error(errMessage || err.message)
      })
  )
}

// Not currently used
// export function getUserRoles(id) {
//   return request.get(`${rootUrl}/users/${id}`).then((res) => {
//     return res.body.roles
//   })
// }

export function checkUsername(username) {
  return request
    .get(rootUrl + '/user/check')
    .set({ Accept: 'application/json' })
    .query({ username })
    .then((res) => res.body)
    .catch((err) => {
      const errMessage = err.response?.body?.error?.title
      throw new Error(errMessage || err.message)
    })
}

export function getTeachers(token) {
  return request
    .get(rootUrl + '/users/teachers')
    .set('authorization', `Bearer ${token}`)
    .set({ Accept: 'application/json' })
    .then((res) => res.body.users)
    .catch((err) => {
      const errMessage = err.response?.body?.error?.title
      throw new Error(errMessage || err.message)
    })
}

export function getLearners(token) {
  return request
    .get(rootUrl + '/users/learners')
    .set('authorization', `Bearer ${token}`)
    .set({ Accept: 'application/json' })
    .then((res) => res.body.users)
    .catch((err) => {
      const errMessage = err.response?.body?.error?.title
      throw new Error(errMessage || err.message)
    })
}
