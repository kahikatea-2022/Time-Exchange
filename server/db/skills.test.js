const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const { getSkillsByUserId, addUserSkills } = require('./skills')

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

describe('getSkillsByUserId', () => {
  it('returns all the skills for a given user', () => {
    return getSkillsByUserId(1, testDb).then((skills) => {
      expect(Array.isArray(skills)).toBe(true)
      expect(skills).toHaveLength(5)
      return null
    })
  })
})

describe('addUserSkills', () => {
  it('adds skills for a user', () => {
    const skillsArray = [
      {
        category: 1,
        skill: 'skateboarding',
        role: 'learn',
      },
      {
        category: 2,
        skill: 'oil painting',
        role: 'teach',
      },
    ]
    return addUserSkills(2, skillsArray, testDb)
      .then(() => getSkillsByUserId(2, testDb))
      .then((skills) => {
        expect(Array.isArray(skills)).toBe(true)
        expect(skills).toHaveLength(6)
        const skill = skills[0]
        expect(skill.id).not.toBeNull()
        expect(skill.role).toBe('learn')
        return null
      })
  })
})
