const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const users = require('./users')

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

describe('getUserById', () => {
  it('returns the correct user', () => {
    return users.getUserById('1', testDb).then((user) => {
      expect(user.id).toBe(1)
      expect(user.auth0Id).toBe('auth0|62734d140b600f00693e3f51')
      expect(user.firstName).toBe('Tracey')
      expect(user.lastName).toBe('Anon')
      expect(user.username).toBe('Traceyliveshere')
      expect(user.email).toBe('tracey@doghome.com')
      expect(user.about).toContain('I love all things')
      return null
    })
  })
})

describe('getUserByAuth', () => {
  it('returns the correct user', () => {
    return users
      .getUserByAuth('auth0|62734d140b600f00693e3f51', testDb)
      .then((user) => {
        expect(user.id).toBe(1)
        expect(user.auth0Id).toBe('auth0|62734d140b600f00693e3f51')
        expect(user.firstName).toBe('Tracey')
        expect(user.lastName).toBe('Anon')
        expect(user.username).toBe('Traceyliveshere')
        expect(user.email).toBe('tracey@doghome.com')
        expect(user.about).toContain('I love all things')
        return null
      })
  })
})

describe('addUser', () => {
  it('adds a new user', () => {
    const user = {
      auth0Id: 'auth0|thisisfortesting',
      firstName: 'firstname',
      lastName: 'lastname',
      username: 'testUsers2',
      email: 'random@emailz.co',
      about: 'Info here',
    }
    return users
      .addUser(user, testDb)
      .then((ids) => users.getUserById(ids[0], testDb))
      .then((user) => {
        expect(user.id).not.toBeNull()
        expect(user.auth0Id).toBe('auth0|thisisfortesting')
        expect(user.firstName).toBe('firstname')
        expect(user.lastName).toBe('lastname')
        expect(user.username).toBe('testUsers2')
        expect(user.email).toBe('random@emailz.co')
        expect(user.about).toBe('Info here')
        return null
      })
  })
})

describe('updateUser', () => {
  it('updates an existing user', () => {
    const changes = {
      auth0Id: 'auth0|62734d140b600f00693e3f51',
      firstName: 'newFirstName',
      lastName: 'User',
      username: 'testUser0001',
      email: 'testemail@test.com',
      about: 'New about',
    }
    return users
      .updateUser(changes, testDb)
      .then((id) => users.getUserById(id, testDb))
      .then((user) => {
        expect(user.id).toBe(1)
        expect(user.auth0Id).toBe('auth0|62734d140b600f00693e3f51')
        expect(user.firstName).toBe('newFirstName')
        expect(user.lastName).toBe('User')
        expect(user.username).toBe('testUser0001')
        expect(user.email).toBe('testemail@test.com')
        expect(user.about).toBe('New about')
        return null
      })
  })
})

// getUsers
describe('getUsers', () => {
  it('returns all active users', () => {
    return users.getUsers(testDb).then((array) => {
      expect(array).toHaveLength(10)
      return null
    })
  })
})
