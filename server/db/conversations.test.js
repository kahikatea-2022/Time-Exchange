const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const {
  getConversationById,
  getConversationByUsers,
  newConversation,
  getConversationId,
} = require('./conversations')

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

describe('getConversationById', () => {
  it('returns the correct conversation', () => {
    return getConversationById(1, testDb).then((res) => {
      expect(Object.keys(res)).toHaveLength(3)
      expect(res.id).toBe(1)
      expect(res.user_2).toBe(2)
      return null
    })
  })
})

describe('getConversationByUsers', () => {
  it('returns the correct conversation', () => {
    const user_1 = 1
    const user_2 = 2
    return getConversationByUsers(user_1, user_2, testDb).then((res) => {
      expect(Object.keys(res)).toHaveLength(3)
      expect(res.id).toBe(1)
      expect(res.user_1).toBe(1)
      expect(res.user_2).toBe(2)
      return null
    })
  })
})

describe('newConversation', () => {
  const user_1 = 3
  const user_2 = 4
  it('creates a new conversation', () => {
    return newConversation(user_1, user_2, testDb)
      .then((res) => {
        const [newID] = res
        expect(newID).toBe(2)
        return getConversationById(newID, testDb)
      })
      .then((res) => {
        expect(res.id).toBe(2)
        expect(res.user_1).toBe(user_1)
        expect(res.user_2).toBe(user_2)
        return null
      })
  })
})

describe('getConversationId', () => {
  it('returns an existing conversation id', () => {
    const user_1 = 1
    const user_2 = 2
    return getConversationId(user_1, user_2, testDb).then((res) => {
      expect(res).toBe(1)
      return null
    })
  })
  it('returns a new conversation id', () => {
    const user_1 = 4
    const user_2 = 5
    return getConversationId(user_1, user_2, testDb).then((res) => {
      expect(res).toContain(3)
      return null
    })
  })
})
