import request from 'superagent'

const rootUrl = '/api/v1'

export function getRegions() {
  return request
    .get(rootUrl + '/regions')
    .set({ Accept: 'application/json' })
    .then((res) => res.body.regions)
    .catch((err) => {
      const errMessage = err.response?.body?.error?.title
      throw new Error(errMessage || err.message)
    })
}
