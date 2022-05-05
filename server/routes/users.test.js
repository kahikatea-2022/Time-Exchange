const request = require('supertest')

const server = require('../server')
const dbUsers = require('../db/users')
const dbSkills = require('../db/skills')

const token = process.env.TEST_USER2_TOKEN || 'token not in .env'

jest.mock('../db/users')
jest.mock('../db/skills')

const newUser = {
  firstName: 'John',
  lastName: 'Doe',
  username: 'jDoe110',
  email: 'j.d@email.com',
  about: 'about me...',
  skills: [
    {
      category: 1,
      skill: 'skateboarding',
      role: 'learn',
    },
    {
      category: 2,
      skill: 'oil painting',
      role: 'learn',
    },
    {
      category: 3,
      skill: 'pushups',
      role: 'teach',
    },
  ],
}

const testAuthHeader = {
  Authorization: `Bearer ${token}`,
}

describe('POST /api/v1/users', () => {
  it('responds with status 401 when no token is passed', () => {
    return request(server)
      .post(`/api/v1/users`)
      .send(newUser)
      .then((res) => {
        expect(res.status).toBe(401)
        return null
      })
  })
  it('responds with status 200', () => {
    dbUsers.addUser.mockImplementation((user) => {
      console.log(user.auth0Id)
      return Promise.resolve([2])
    })
    dbSkills.addUserSkills.mockImplementation((id, skills) => {
      return Promise.resolve()
    })

    return request(server)
      .post(`/api/v1/users`)
      .set(testAuthHeader)
      .send(newUser)
      .expect(201)
      .then((res) => {
        console.log(res.body)
        expect(res.body.id).toBe(2)
        return null
      })
  })
})
