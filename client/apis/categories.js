import request from 'superagent'

const rootUrl = '/api/v1'

export function getCategories() {
  return request
    .get(rootUrl + '/categories')
    .set({ Accept: 'application/json' })
    .then((res) => res.body.categories)
    .catch((err) => {
      const errMessage = err.response?.body?.error?.title
      throw new Error(errMessage || err.message)
    })
}
