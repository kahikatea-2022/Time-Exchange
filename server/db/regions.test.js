const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const { getRegions } = require('./regions')

// Prevent Jest from timing out (5s often isn't enough)
jest.setTimeout(10000)

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getRegions', () => {
  it('returns the correct regions', () => {
    return getRegions(testDb).then((skills) => {
      expect(Array.isArray(skills)).toBe(true)
      expect(skills).toHaveLength(18)
      return null
    })
  })
})
